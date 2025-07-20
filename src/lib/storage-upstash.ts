import { BlogArticle } from '@/types/blog';

// Interface pour les articles stockés (étendre BlogArticle avec des métadonnées)
export interface StoredBlogArticle extends BlogArticle {
  source: 'manual' | 'outrank';
  createdAt: string;
  updatedAt: string;
  scheduledAt?: string | null;
  status: 'draft' | 'published' | 'scheduled' | 'archived';
}

// Upstash Redis/KV client
let redis: any = null;

// Initialiser le client Upstash
async function getRedisClient() {
  if (redis) return redis;
  
  try {
    // Utiliser l'API REST d'Upstash
    const { Redis } = await import('@upstash/redis');
    redis = Redis.fromEnv();
    return redis;
  } catch (error) {
    console.error('Erreur initialisation Upstash:', error);
    // Fallback vers un client REST manuel
    const token = process.env.KV_REST_API_TOKEN;
    const url = process.env.KV_REST_API_URL;
    
    if (!token || !url) {
      throw new Error('Variables Upstash manquantes');
    }
    
    redis = {
      async get(key: string) {
        const response = await fetch(`${url}/get/${key}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        return data.result;
      },
      
      async set(key: string, value: any) {
        const response = await fetch(`${url}/set/${key}`, {
          method: 'POST',
          headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ value: JSON.stringify(value) })
        });
        return await response.json();
      }
    };
    
    return redis;
  }
}

// Clé pour stocker les articles dans Redis
const ARTICLES_KEY = 'blog:articles';

// Charger tous les articles depuis Upstash
export async function loadArticles(): Promise<StoredBlogArticle[]> {
  try {
    const client = await getRedisClient();
    const articlesData = await client.get(ARTICLES_KEY);
    
    if (!articlesData) {
      console.log('Aucun article trouvé dans Upstash');
      return [];
    }
    
    const articles = typeof articlesData === 'string' 
      ? JSON.parse(articlesData) 
      : articlesData;
      
    console.log(`📚 ${articles.length} articles chargés depuis Upstash`);
    return Array.isArray(articles) ? articles : [];
  } catch (error) {
    console.error('Erreur chargement articles Upstash:', error);
    return [];
  }
}

// Sauvegarder tous les articles dans Upstash
export async function saveArticles(articles: StoredBlogArticle[]): Promise<void> {
  try {
    const client = await getRedisClient();
    await client.set(ARTICLES_KEY, articles);
    console.log(`✅ ${articles.length} articles sauvegardés dans Upstash`);
  } catch (error) {
    console.error('Erreur sauvegarde articles Upstash:', error);
    throw error;
  }
}

// Ajouter un nouvel article
export async function addArticle(article: StoredBlogArticle): Promise<StoredBlogArticle> {
  const articles = await loadArticles();
  
  // Vérifier si l'article existe déjà (éviter les doublons)
  const existingIndex = articles.findIndex(a => a.id === article.id);
  if (existingIndex !== -1) {
    // Mettre à jour l'article existant
    articles[existingIndex] = {
      ...articles[existingIndex],
      ...article,
      updatedAt: new Date().toISOString()
    };
    console.log(`🔄 Article mis à jour dans Upstash: ${article.title}`);
  } else {
    // Ajouter le nouvel article
    articles.unshift(article); // Ajouter en tête
    console.log(`✨ Nouvel article ajouté dans Upstash: ${article.title}`);
  }
  
  await saveArticles(articles);
  return article;
}

// Mettre à jour un article existant
export async function updateArticle(id: string, updates: Partial<StoredBlogArticle>): Promise<StoredBlogArticle | null> {
  const articles = await loadArticles();
  const index = articles.findIndex(article => article.id === id);
  
  if (index === -1) {
    return null;
  }
  
  articles[index] = {
    ...articles[index],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  await saveArticles(articles);
  return articles[index];
}

// Supprimer un article
export async function deleteArticle(id: string): Promise<StoredBlogArticle | null> {
  const articles = await loadArticles();
  const index = articles.findIndex(article => article.id === id);
  
  if (index === -1) {
    return null;
  }
  
  const deletedArticle = articles.splice(index, 1)[0];
  await saveArticles(articles);
  return deletedArticle;
}

// Filtrer les articles
export async function getFilteredArticles(filters: {
  source?: 'manual' | 'outrank';
  status?: 'draft' | 'published' | 'scheduled' | 'archived';
  limit?: number;
  offset?: number;
}) {
  const articles = await loadArticles();
  let filtered = [...articles];

  // Filtrage par source
  if (filters.source) {
    filtered = filtered.filter(article => article.source === filters.source);
  }

  // Filtrage par status
  if (filters.status) {
    filtered = filtered.filter(article => article.status === filters.status);
  }

  // Tri par date de création (plus récent en premier)
  filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  // Pagination
  const limit = filters.limit || 10;
  const offset = filters.offset || 0;
  const paginatedArticles = filtered.slice(offset, offset + limit);

  return {
    articles: paginatedArticles,
    total: filtered.length,
    limit,
    offset,
    hasMore: offset + limit < filtered.length
  };
}

// Fonction utilitaire pour vider le cache (utile pour les tests)
export async function clearAllArticles(): Promise<void> {
  try {
    const client = await getRedisClient();
    await client.del(ARTICLES_KEY);
    console.log('✅ Cache articles Upstash vidé');
  } catch (error) {
    console.error('Erreur vidage cache Upstash:', error);
    throw error;
  }
} 
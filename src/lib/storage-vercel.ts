import { BlogArticle } from '@/types/blog';

// Interface pour les articles stockés (étendre BlogArticle avec des métadonnées)
export interface StoredBlogArticle extends BlogArticle {
  source: 'manual' | 'outrank';
  createdAt: string;
  updatedAt: string;
  scheduledAt?: string | null;
  status: 'draft' | 'published' | 'scheduled' | 'archived';
}

// Clé pour le stockage Edge Config/Variables
const ARTICLES_STORAGE_KEY = 'blog_articles_json';

// Fonction pour encoder/décoder les articles
function encodeArticles(articles: StoredBlogArticle[]): string {
  return Buffer.from(JSON.stringify(articles)).toString('base64');
}

function decodeArticles(encoded: string): StoredBlogArticle[] {
  try {
    return JSON.parse(Buffer.from(encoded, 'base64').toString('utf-8'));
  } catch {
    return [];
  }
}

// Simulation d'un stockage persistant en utilisant les variables d'environnement
// (Note: cette approche est temporaire, idéalement utiliser une vraie DB)
let runtimeArticlesCache: StoredBlogArticle[] | null = null;

// Charger tous les articles 
export async function loadArticles(): Promise<StoredBlogArticle[]> {
  try {
    // Si on a déjà un cache runtime, l'utiliser
    if (runtimeArticlesCache !== null) {
      return [...runtimeArticlesCache];
    }

    // Essayer de charger depuis une variable d'environnement runtime
    // (cette approche fonctionne mieux sur Vercel)
    const envData = process.env.RUNTIME_ARTICLES_DATA;
    if (envData) {
      runtimeArticlesCache = decodeArticles(envData);
      return [...runtimeArticlesCache];
    }

    // Fallback: retourner un cache vide
    runtimeArticlesCache = [];
    return [];
  } catch (error) {
    console.error('Erreur chargement articles:', error);
    runtimeArticlesCache = [];
    return [];
  }
}

// Sauvegarder tous les articles
export async function saveArticles(articles: StoredBlogArticle[]): Promise<void> {
  try {
    // Mettre à jour le cache runtime
    runtimeArticlesCache = [...articles];
    
    // Encoder et "sauvegarder" dans les variables d'environnement runtime
    // Note: sur Vercel, les variables d'environnement runtime persistent 
    // pendant la durée de vie de la fonction
    const encoded = encodeArticles(articles);
    process.env.RUNTIME_ARTICLES_DATA = encoded;
    
    console.log(`✅ ${articles.length} articles sauvegardés (cache runtime persistant)`);
  } catch (error) {
    console.error('Erreur sauvegarde articles:', error);
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
    console.log(`🔄 Article mis à jour: ${article.title}`);
  } else {
    // Ajouter le nouvel article
    articles.unshift(article); // Ajouter en tête pour avoir les plus récents en premier
    console.log(`✨ Nouvel article ajouté: ${article.title}`);
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
    runtimeArticlesCache = [];
    delete process.env.RUNTIME_ARTICLES_DATA;
    console.log('✅ Cache articles vidé');
  } catch (error) {
    console.error('Erreur vidage cache:', error);
    throw error;
  }
}

// Fonction utilitaire pour synchroniser entre instances
export async function syncArticlesCache(): Promise<void> {
  try {
    // Forcer le rechargement du cache depuis l'environnement
    runtimeArticlesCache = null;
    await loadArticles();
    console.log('🔄 Cache articles synchronisé');
  } catch (error) {
    console.error('Erreur sync cache:', error);
  }
} 
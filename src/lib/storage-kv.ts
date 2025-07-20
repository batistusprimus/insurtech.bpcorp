import { kv } from '@vercel/kv';
import { BlogArticle } from '@/types/blog';

// Interface pour les articles stockés (étendre BlogArticle avec des métadonnées)
export interface StoredBlogArticle extends BlogArticle {
  source: 'manual' | 'outrank';
  createdAt: string;
  updatedAt: string;
  scheduledAt?: string | null;
  status: 'draft' | 'published' | 'scheduled' | 'archived';
}

// Clé pour stocker la liste des articles
const ARTICLES_KEY = 'blog:articles';

// Charger tous les articles depuis Vercel KV
export async function loadArticles(): Promise<StoredBlogArticle[]> {
  try {
    const articles = await kv.get<StoredBlogArticle[]>(ARTICLES_KEY);
    return articles || [];
  } catch (error) {
    console.error('Erreur chargement articles KV:', error);
    return [];
  }
}

// Sauvegarder tous les articles dans Vercel KV
export async function saveArticles(articles: StoredBlogArticle[]): Promise<void> {
  try {
    await kv.set(ARTICLES_KEY, articles);
    console.log(`✅ ${articles.length} articles sauvegardés dans Vercel KV`);
  } catch (error) {
    console.error('Erreur sauvegarde articles KV:', error);
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
  } else {
    // Ajouter le nouvel article
    articles.unshift(article); // Ajouter en tête pour avoir les plus récents en premier
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
    await kv.del(ARTICLES_KEY);
    console.log('✅ Cache articles vidé');
  } catch (error) {
    console.error('Erreur vidage cache:', error);
    throw error;
  }
} 
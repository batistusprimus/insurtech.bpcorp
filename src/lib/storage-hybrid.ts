import { BlogArticle } from '@/types/blog';

// Interface pour les articles stockés (étendre BlogArticle avec des métadonnées)
export interface StoredBlogArticle extends BlogArticle {
  source: 'manual' | 'outrank';
  createdAt: string;
  updatedAt: string;
  scheduledAt?: string | null;
  status: 'draft' | 'published' | 'scheduled' | 'archived';
}

// Stockage global en mémoire (persistant entre les requêtes)
let globalArticlesCache: StoredBlogArticle[] = [];

// Charger tous les articles 
export async function loadArticles(): Promise<StoredBlogArticle[]> {
  try {
    // En production, utiliser le cache global
    if (process.env.NODE_ENV === 'production') {
      return [...globalArticlesCache];
    }

    // En développement, essayer de charger depuis le fichier
    try {
      const { promises: fs } = await import('fs');
      const path = await import('path');
      const STORAGE_FILE = path.join(process.cwd(), 'data', 'articles.json');
      const data = await fs.readFile(STORAGE_FILE, 'utf-8');
      return JSON.parse(data);
    } catch {
      return [];
    }
  } catch (error) {
    console.error('Erreur chargement articles:', error);
    return [];
  }
}

// Sauvegarder tous les articles
export async function saveArticles(articles: StoredBlogArticle[]): Promise<void> {
  try {
    // Mettre à jour le cache global
    globalArticlesCache = [...articles];
    
    // En développement, sauvegarder aussi dans le fichier
    if (process.env.NODE_ENV !== 'production') {
      try {
        const { promises: fs } = await import('fs');
        const path = await import('path');
        const STORAGE_FILE = path.join(process.cwd(), 'data', 'articles.json');
        const dataDir = path.dirname(STORAGE_FILE);
        
        // Créer le dossier si nécessaire
        try {
          await fs.access(dataDir);
        } catch {
          await fs.mkdir(dataDir, { recursive: true });
        }
        
        await fs.writeFile(STORAGE_FILE, JSON.stringify(articles, null, 2), 'utf-8');
      } catch (fileError) {
        console.log('Note: Sauvegarde fichier impossible (normal en production)');
      }
    }
    
    console.log(`✅ ${articles.length} articles sauvegardés (mémoire${process.env.NODE_ENV !== 'production' ? ' + fichier' : ''})`);
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
    globalArticlesCache = [];
    console.log('✅ Cache articles vidé');
  } catch (error) {
    console.error('Erreur vidage cache:', error);
    throw error;
  }
} 
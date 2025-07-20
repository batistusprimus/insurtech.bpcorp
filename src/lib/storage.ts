import { promises as fs } from 'fs';
import path from 'path';
import { BlogArticle } from '@/types/blog';

// Interface pour les articles stockés (étendre BlogArticle avec des métadonnées)
export interface StoredBlogArticle extends BlogArticle {
  source: 'manual' | 'outrank';
  createdAt: string;
  updatedAt: string;
  scheduledAt?: string | null;
  status: 'draft' | 'published' | 'scheduled' | 'archived';
}

// Chemin du fichier de stockage
const STORAGE_FILE = path.join(process.cwd(), 'data', 'articles.json');

// Assurer que le dossier data existe
async function ensureDataDir() {
  const dataDir = path.dirname(STORAGE_FILE);
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Charger tous les articles depuis le fichier
export async function loadArticles(): Promise<StoredBlogArticle[]> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(STORAGE_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // Si le fichier n'existe pas, retourner un tableau vide
    console.log('Fichier articles.json non trouvé, création d\'un nouveau');
    return [];
  }
}

// Sauvegarder tous les articles dans le fichier
export async function saveArticles(articles: StoredBlogArticle[]): Promise<void> {
  try {
    await ensureDataDir();
    await fs.writeFile(STORAGE_FILE, JSON.stringify(articles, null, 2), 'utf-8');
    console.log(`✅ ${articles.length} articles sauvegardés dans ${STORAGE_FILE}`);
  } catch (error) {
    console.error('Erreur lors de la sauvegarde des articles:', error);
    throw error;
  }
}

// Ajouter un nouvel article
export async function addArticle(article: StoredBlogArticle): Promise<StoredBlogArticle> {
  const articles = await loadArticles();
  articles.push(article);
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
import { NextRequest, NextResponse } from 'next/server';
import { BlogArticle } from '@/types/blog';
import { blogCategories } from '@/data/blog';

// Interface pour les articles stockés (étendre BlogArticle avec des métadonnées)
interface StoredBlogArticle extends BlogArticle {
  source: 'manual' | 'outrank';
  createdAt: string;
  updatedAt: string;
  scheduledAt?: string | null;
  status: 'draft' | 'published' | 'scheduled' | 'archived';
}

// Stockage temporaire en mémoire (à remplacer par une vraie DB)
const articlesStorage: StoredBlogArticle[] = [];

// GET - Récupérer tous les articles avec filtrage
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const source = searchParams.get('source'); // 'manual' | 'outrank'
    const status = searchParams.get('status'); // 'draft' | 'published' | 'scheduled'
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');

    let filteredArticles = [...articlesStorage];

    // Filtrage par source
    if (source) {
      filteredArticles = filteredArticles.filter(article => article.source === source);
    }

    // Filtrage par status
    if (status) {
      filteredArticles = filteredArticles.filter(article => article.status === status);
    }

    // Tri par date de création (plus récent en premier)
    filteredArticles.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    // Pagination
    const paginatedArticles = filteredArticles.slice(offset, offset + limit);

    return NextResponse.json({
      articles: paginatedArticles,
      total: filteredArticles.length,
      limit,
      offset,
      hasMore: offset + limit < filteredArticles.length
    });

  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve articles' },
      { status: 500 }
    );
  }
}

// POST - Créer un nouvel article
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validation des champs requis
    if (!data.title || !data.content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    // Génération d'un ID unique
    const articleId = `article-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Génération du slug
    const slug = data.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 100);

    // Création de l'article
    const newArticle: StoredBlogArticle = {
      id: articleId,
      title: data.title,
      slug: `${slug}-${Date.now()}`,
      description: data.description || data.title.substring(0, 160),
      content: data.content,
      tags: data.tags || [],
      category: data.category ? blogCategories.find(cat => cat.slug === data.category) || blogCategories[0] : blogCategories[0],
      publishedAt: data.status === 'published' ? new Date().toISOString() : '',
      updatedAt: new Date().toISOString(),
      scheduledAt: data.scheduledAt || null,
      readTime: Math.ceil(data.content.split(' ').length / 200),
      featured: data.featured || false,
      author: data.author || {
        name: 'Admin',
        role: 'Content Manager',
        avatar: '/team/admin.jpg'
      },
      seo: {
        metaTitle: data.seo?.metaTitle || data.title,
        metaDescription: data.seo?.metaDescription || data.description,
        keywords: data.seo?.keywords || data.tags || []
      },
      source: data.source || 'manual',
      createdAt: new Date().toISOString(),
      status: data.status || 'draft'
    };

    // Stockage de l'article
    articlesStorage.push(newArticle);

    return NextResponse.json({
      success: true,
      message: 'Article created successfully',
      article: newArticle
    }, { status: 201 });

  } catch (error) {
    console.error('Erreur lors de la création de l\'article:', error);
    return NextResponse.json(
      { error: 'Failed to create article' },
      { status: 500 }
    );
  }
}

// PUT - Mettre à jour un article existant
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { id } = data;

    if (!id) {
      return NextResponse.json(
        { error: 'Article ID is required' },
        { status: 400 }
      );
    }

    // Recherche de l'article
    const articleIndex = articlesStorage.findIndex(article => article.id === id);
    
    if (articleIndex === -1) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }

    // Mise à jour de l'article
    const existingArticle = articlesStorage[articleIndex];
    const updatedArticle: StoredBlogArticle = {
      ...existingArticle,
      ...data,
      updatedAt: new Date().toISOString(),
      publishedAt: data.status === 'published' && !existingArticle.publishedAt 
        ? new Date().toISOString() 
        : existingArticle.publishedAt
    };

    articlesStorage[articleIndex] = updatedArticle;

    return NextResponse.json({
      success: true,
      message: 'Article updated successfully',
      article: updatedArticle
    });

  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'article:', error);
    return NextResponse.json(
      { error: 'Failed to update article' },
      { status: 500 }
    );
  }
}

// DELETE - Supprimer un article
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Article ID is required' },
        { status: 400 }
      );
    }

    // Recherche et suppression de l'article
    const articleIndex = articlesStorage.findIndex(article => article.id === id);
    
    if (articleIndex === -1) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }

    const deletedArticle = articlesStorage.splice(articleIndex, 1)[0];

    return NextResponse.json({
      success: true,
      message: 'Article deleted successfully',
      article: deletedArticle
    });

  } catch (error) {
    console.error('Erreur lors de la suppression de l\'article:', error);
    return NextResponse.json(
      { error: 'Failed to delete article' },
      { status: 500 }
    );
  }
} 
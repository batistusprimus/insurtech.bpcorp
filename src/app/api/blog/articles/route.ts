import { NextRequest, NextResponse } from 'next/server';
import { BlogArticle } from '@/types/blog';
import { blogCategories } from '@/data/blog';
import { 
  StoredBlogArticle, 
  getFilteredArticles, 
  addArticle, 
  updateArticle, 
  deleteArticle 
} from '@/lib/storage';

// GET - Récupérer tous les articles avec filtrage
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const source = searchParams.get('source') as 'manual' | 'outrank' | undefined;
    const status = searchParams.get('status') as 'draft' | 'published' | 'scheduled' | 'archived' | undefined;
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');

    const result = await getFilteredArticles({
      source,
      status,
      limit,
      offset
    });

    return NextResponse.json(result);

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
    const savedArticle = await addArticle(newArticle);

    return NextResponse.json({
      success: true,
      message: 'Article created successfully',
      article: savedArticle
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

    // Mise à jour de l'article
    const updatedArticle = await updateArticle(id, {
      ...data,
      publishedAt: data.status === 'published' && !data.publishedAt 
        ? new Date().toISOString() 
        : data.publishedAt
    });

    if (!updatedArticle) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }

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

    // Suppression de l'article
    const deletedArticle = await deleteArticle(id);

    if (!deletedArticle) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }

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
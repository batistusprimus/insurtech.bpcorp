import { NextRequest, NextResponse } from 'next/server';

// Interface pour un article Outrank selon leur documentation
interface OutrankArticle {
  id: string;
  title: string;
  content_markdown: string;
  content_html: string;
  meta_description: string;
  created_at: string;
  image_url: string;
  slug: string;
  tags: string[];
}

// Interface pour le payload webhook complet d'Outrank
interface OutrankWebhookPayload {
  event_type: 'publish_articles';
  timestamp: string;
  data: {
    articles: OutrankArticle[];
  };
}

// Fonction de validation du token Bearer selon la documentation Outrank
function validateAccessToken(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }
  const token = authHeader.split(' ')[1];
  const expectedToken = process.env.OUTRANK_ACCESS_TOKEN;
  return !!(expectedToken && token === expectedToken);
}

// Fonction pour traiter un article Outrank
async function processOutrankArticle(article: OutrankArticle) {
  try {
    // Utiliser le slug fourni par Outrank ou générer un slug de backup
    const slug = article.slug || article.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 100);

    // Déterminer la catégorie basée sur les tags
    const { blogCategories } = await import('@/data/blog');
    let categorySlug = 'weather-intelligence'; // Catégorie par défaut
    if (article.tags.some(tag => tag.toLowerCase().includes('manufacturing') || tag.toLowerCase().includes('industry'))) {
      categorySlug = 'industry-exposure';
    } else if (article.tags.some(tag => tag.toLowerCase().includes('playbook') || tag.toLowerCase().includes('guide'))) {
      categorySlug = 'playbooks';
    } else if (article.tags.some(tag => tag.toLowerCase().includes('report') || tag.toLowerCase().includes('analysis'))) {
      categorySlug = 'sentinel-reports';
    }
    
    const category = blogCategories.find(cat => cat.slug === categorySlug) || blogCategories[0];

    // Structure de l'article pour notre système
    const newArticle = {
      id: `outrank-${article.id}`,
      title: article.title,
      slug: `${slug}-${Date.now()}`,
      description: article.meta_description,
      content: article.content_markdown, // Utiliser le Markdown fourni
      tags: article.tags,
      category: category, // Objet catégorie
      publishedAt: new Date().toISOString(), // Toujours publié quand reçu
      updatedAt: new Date().toISOString(),
      scheduledAt: null,
      status: 'published' as const,
      author: {
        name: 'Outrank AI',
        role: 'Content AI',
        avatar: '/team/ai-avatar.jpg'
      },
      seo: {
        metaTitle: article.title,
        metaDescription: article.meta_description,
        keywords: article.tags
      },
      source: 'outrank' as const,
      readTime: Math.ceil(article.content_markdown.split(' ').length / 200), // Estimation 200 mots/min
      image: article.image_url,
      createdAt: article.created_at,
      featured: false
    };

    // Sauvegarder l'article directement avec Upstash
    try {
      const { addArticle } = await import('@/lib/storage-upstash');
      
      const savedArticle = await addArticle(newArticle);
      console.log('✅ Article Outrank sauvegardé directement dans Upstash:', savedArticle.title);
      
      return savedArticle;
    } catch (saveError) {
      console.error('Erreur sauvegarde article Outrank:', saveError);
      // En cas d'erreur, au moins logger l'article
      console.log('Article reçu d\'Outrank (non sauvegardé):', newArticle);
      throw saveError;
    }
  } catch (error) {
    console.error('Erreur lors du traitement de l\'article Outrank:', error);
    throw error;
  }
}

// Gestionnaire POST pour les webhooks Outrank
export async function POST(request: NextRequest) {
  try {
    // Validation du token d'accès Bearer
    if (!validateAccessToken(request)) {
      return NextResponse.json(
        { error: 'Invalid access token' },
        { status: 401 }
      );
    }

    // Validation du content-type
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type must be application/json' },
        { status: 400 }
      );
    }

    // Lecture du body
    const body = await request.text();
    let payload: OutrankWebhookPayload;

    try {
      payload = JSON.parse(body);
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid JSON payload' },
        { status: 400 }
      );
    }

    // Validation du type d'événement
    if (payload.event_type !== 'publish_articles') {
      return NextResponse.json(
        { error: 'Unsupported event type' },
        { status: 400 }
      );
    }

    // Validation de la structure des données
    if (!payload.data?.articles || !Array.isArray(payload.data.articles)) {
      return NextResponse.json(
        { error: 'Invalid payload structure: articles array required' },
        { status: 400 }
      );
    }

    // Traitement de tous les articles
    const processedArticles = [];
    for (const article of payload.data.articles) {
      try {
        const processedArticle = await processOutrankArticle(article);
        processedArticles.push(processedArticle);
        console.log(`✅ Article traité: ${article.title}`);
             } catch (articleError) {
         console.error(`❌ Erreur traitement article ${article.id}:`, articleError);
         // Continue avec les autres articles même si un échoue
       }
    }

    // Réponse de succès
    return NextResponse.json({
      success: true,
      message: 'Webhook processed successfully',
      processed_articles: processedArticles.length,
      total_articles: payload.data.articles.length,
      timestamp: payload.timestamp
    });

  } catch (error) {
    console.error('Erreur webhook Outrank:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Gestionnaire GET pour vérifier la santé du webhook
export async function GET() {
  return NextResponse.json({
    service: 'Outrank Webhook Handler',
    status: 'active',
    timestamp: new Date().toISOString()
  });
} 
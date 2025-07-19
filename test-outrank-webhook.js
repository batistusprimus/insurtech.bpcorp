/**
 * Script de test pour simuler un webhook Outrank.so
 * Usage: node test-outrank-webhook.js
 */

const https = require('https');
const http = require('http');

// Configuration
const WEBHOOK_URL = 'http://localhost:3000/api/webhooks/outrank';

// Exemple de payload Outrank selon leur documentation officielle
const testPayload = {
  "event_type": "publish_articles",
  "timestamp": "2025-01-15T14:30:00Z",
  "data": {
    "articles": [
      {
        "id": "outrank-123456",
        "title": "Comment Optimiser Votre SEO en 2025 : Guide Complet",
        "content_markdown": `# Comment Optimiser Votre SEO en 2025 : Guide Complet

## Introduction

Le SEO (Search Engine Optimization) continue d'évoluer en 2025, avec de nouvelles techniques et technologies qui transforment la façon dont nous optimisons nos sites web. Ce guide vous présente les meilleures pratiques actuelles.

## Les Fondamentaux du SEO en 2025

### 1. Recherche de Mots-Clés
- Utilisez des outils modernes comme Semrush, Ahrefs
- Concentrez-vous sur l'intention de recherche
- Analysez la concurrence

### 2. Contenu de Qualité
- Créez du contenu original et utile
- Optimisez pour les featured snippets
- Utilisez l'IA de manière responsable

### 3. Optimisation Technique
- Core Web Vitals
- Mobile-first indexing
- Structured data

## Stratégies Avancées

### Intelligence Artificielle
L'IA transforme le SEO avec :
- Génération de contenu assistée
- Analyse prédictive des tendances
- Personnalisation des résultats

### Recherche Vocale
Optimisez pour :
- Questions conversationnelles
- Recherches locales
- Réponses directes

## Conclusion

Le SEO en 2025 nécessite une approche holistique combinant technique, contenu et expérience utilisateur. Restez informé des dernières tendances pour maintenir votre avantage concurrentiel.`,
        "content_html": "<h1>Comment Optimiser Votre SEO en 2025 : Guide Complet</h1><h2>Introduction</h2><p>Le SEO (Search Engine Optimization) continue d'évoluer en 2025...</p>",
        "meta_description": "Guide complet pour optimiser votre référencement naturel en 2025 avec les dernières techniques et tendances SEO.",
        "created_at": "2025-01-15T14:25:00Z",
        "image_url": "https://example.com/images/seo-2025-guide.jpg",
        "slug": "comment-optimiser-seo-2025-guide-complet",
        "tags": ["SEO", "Marketing Digital", "Optimisation", "Guide 2025"]
      },
      {
        "id": "outrank-789012",
        "title": "Les Tendances du Marketing Digital en 2025",
        "content_markdown": "# Les Tendances du Marketing Digital en 2025\n\n## Introduction\n\nLe marketing digital évolue rapidement...",
        "content_html": "<h1>Les Tendances du Marketing Digital en 2025</h1><p>Le marketing digital évolue rapidement...</p>",
        "meta_description": "Découvrez les principales tendances du marketing digital pour 2025 et comment les exploiter.",
        "created_at": "2025-01-15T14:20:00Z",
        "image_url": "https://example.com/images/marketing-digital-tendances.jpg",
        "slug": "tendances-marketing-digital-2025",
        "tags": ["Marketing Digital", "Tendances", "2025", "Innovation"]
      }
    ]
  }
};

// Fonction pour envoyer le webhook
function sendWebhook(payload) {
  const postData = JSON.stringify(payload);
  
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/webhooks/outrank',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData),
      'Authorization': 'Bearer test-access-token-123', // Token de test
      'User-Agent': 'Outrank-Webhook/1.0'
    }
  };

  const req = http.request(options, (res) => {
    console.log(`📡 Webhook Response Status: ${res.statusCode}`);
    console.log(`📡 Response Headers:`, res.headers);
    
    let responseData = '';
    res.on('data', (chunk) => {
      responseData += chunk;
    });
    
    res.on('end', () => {
      try {
        const response = JSON.parse(responseData);
        console.log('✅ Webhook Response:', JSON.stringify(response, null, 2));
        
        if (response.success) {
          console.log(`🎉 Webhook traité avec succès!`);
          console.log(`📊 Articles traités: ${response.processed_articles}/${response.total_articles}`);
          testArticlesList();
        } else {
          console.log('❌ Erreur lors du traitement:', response.error);
        }
      } catch (error) {
        console.log('❌ Erreur de parsing:', error.message);
        console.log('Raw response:', responseData);
      }
    });
  });

  req.on('error', (error) => {
    console.error('❌ Erreur de requête:', error.message);
  });

  // Envoyer les données
  req.write(postData);
  req.end();
}

// Fonction pour tester la liste des articles
function testArticlesList() {
  console.log('\n📋 Test de récupération des articles...');
  
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/blog/articles?source=outrank&limit=5',
    method: 'GET',
    headers: {
      'User-Agent': 'Test-Script/1.0'
    }
  };

  const req = http.request(options, (res) => {
    let responseData = '';
    res.on('data', (chunk) => {
      responseData += chunk;
    });
    
    res.on('end', () => {
      try {
        const response = JSON.parse(responseData);
        console.log(`📊 Articles trouvés: ${response.total}`);
        
        if (response.articles.length > 0) {
          console.log('\n📝 Derniers articles Outrank:');
          response.articles.forEach((article, index) => {
            console.log(`${index + 1}. ${article.title}`);
            console.log(`   📅 ${article.publishedAt}`);
            console.log(`   🏷️  ${article.tags.join(', ')}`);
            console.log(`   🔗 /blog/${article.slug}`);
            console.log('');
          });
        }
      } catch (error) {
        console.log('❌ Erreur de parsing:', error.message);
      }
    });
  });

  req.on('error', (error) => {
    console.error('❌ Erreur de requête:', error.message);
  });

  req.end();
}

// Exécution du test
console.log('🚀 Test d\'intégration Outrank.so');
console.log('==============================\n');

console.log('📤 Envoi du webhook test...');
console.log(`📡 URL: ${WEBHOOK_URL}`);
console.log(`📄 Événement: ${testPayload.event_type}`);
console.log(`📄 Articles: ${testPayload.data.articles.length} articles à publier`);
testPayload.data.articles.forEach((article, index) => {
  console.log(`   ${index + 1}. "${article.title}"`);
});
console.log('');

sendWebhook(testPayload);

// Test de santé du webhook
console.log('🏥 Test de santé du webhook...');
const healthOptions = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/webhooks/outrank',
  method: 'GET'
};

const healthReq = http.request(healthOptions, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    try {
      const health = JSON.parse(data);
      console.log('✅ Webhook Health Check:', health.status);
    } catch (error) {
      console.log('❌ Health check failed');
    }
  });
});

healthReq.on('error', (error) => {
  console.error('❌ Health check error:', error.message);
});

healthReq.end(); 
// Test du webhook Outrank avec le nouveau système de stockage persistant
// Usage: node test-outrank-webhook-fixed.js

const https = require('https');
const http = require('http');

const config = {
  // Configuration locale (modifiez pour tester en production)
  local: {
    host: 'localhost',
    port: 3000,
    protocol: 'http:',
    token: 'insur_ccc5e220ceeb4cd89f82a6ee4dd340bc54295af367ca010bcf23c1786c34e9b2'
  },
  
  // Configuration production
  production: {
    host: 'insurtech.bpcorp.eu',
    port: 443,
    protocol: 'https:',
    token: 'insur_ccc5e220ceeb4cd89f82a6ee4dd340bc54295af367ca010bcf23c1786c34e9b2'
  }
};

// Choisir l'environnement (local ou production)
const env = process.argv[2] === 'prod' ? 'production' : 'local';
const settings = config[env];

console.log(`🧪 Test du webhook Outrank (${env})`);
console.log(`📡 URL: ${settings.protocol}//${settings.host}:${settings.port}/api/webhooks/outrank`);

// Article de test
const testArticle = {
  event_type: 'publish_articles',
  timestamp: new Date().toISOString(),
  data: {
    articles: [
      {
        id: `test-${Date.now()}`,
        title: 'Test de Persistance - Article Généré par Outrank',
        content_markdown: `# Test de Persistance des Articles Outrank

## Résumé
Cet article de test vérifie que les articles envoyés par Outrank via webhook sont maintenant **persistants** et ne disparaissent plus après un redémarrage du serveur.

## Nouveau Système de Stockage
- ✅ Stockage persistant avec fichiers JSON
- ✅ API complètement réécrite
- ✅ Gestion des erreurs améliorée
- ✅ Compatible avec l'intégration Outrank existante

## Vérification
Cet article devrait apparaître sur: ${settings.protocol}//${settings.host}:${settings.port}/pages/blog

**Timestamp de test:** ${new Date().toISOString()}`,
        content_html: '<h1>Test de Persistance - Article Généré par Outrank</h1>',
        meta_description: 'Article de test pour vérifier la persistance des articles Outrank avec le nouveau système de stockage.',
        created_at: new Date().toISOString(),
        image_url: 'https://via.placeholder.com/800x400/blue/white?text=Test+Article',
        slug: `test-persistance-outrank-${Date.now()}`,
        tags: ['test', 'outrank', 'persistance', 'webhook']
      }
    ]
  }
};

function testWebhook() {
  const postData = JSON.stringify(testArticle);
  
  const options = {
    hostname: settings.host,
    port: settings.port,
    path: '/api/webhooks/outrank',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${settings.token}`,
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  console.log('📤 Envoi de l\'article de test...');
  
  const client = settings.protocol === 'https:' ? https : http;
  
  const req = client.request(options, (res) => {
    let data = '';
    
    console.log(`📊 Status Code: ${res.statusCode}`);
    console.log(`📋 Headers:`, res.headers);
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      try {
        const response = JSON.parse(data);
        console.log('✅ Réponse du webhook:');
        console.log(JSON.stringify(response, null, 2));
        
        if (response.success) {
          console.log(`🎉 Test réussi ! ${response.processed_articles} article(s) traité(s)`);
          console.log(`🔗 Vérifiez sur: ${settings.protocol}//${settings.host}:${settings.port}/pages/blog`);
          
          // Test de vérification automatique
          setTimeout(() => {
            testArticleRetrieval();
          }, 2000);
        } else {
          console.log('❌ Erreur dans la réponse:', response);
        }
      } catch (e) {
        console.log('📄 Réponse brute:', data);
        console.log('❌ Erreur parsing JSON:', e.message);
      }
    });
  });
  
  req.on('error', (error) => {
    console.error('❌ Erreur de requête:', error.message);
  });
  
  req.write(postData);
  req.end();
}

function testArticleRetrieval() {
  console.log('\n🔍 Vérification de la persistance des articles...');
  
  const options = {
    hostname: settings.host,
    port: settings.port,
    path: '/api/blog/articles?source=outrank',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  const client = settings.protocol === 'https:' ? https : http;
  
  const req = client.request(options, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      try {
        const response = JSON.parse(data);
        console.log(`📚 Articles Outrank trouvés: ${response.total}`);
        
        if (response.articles && response.articles.length > 0) {
          console.log('📝 Derniers articles:');
          response.articles.slice(0, 3).forEach((article, index) => {
            console.log(`  ${index + 1}. ${article.title} (${article.createdAt})`);
          });
          console.log('✅ La persistance fonctionne !');
        } else {
          console.log('⚠️ Aucun article Outrank trouvé');
        }
      } catch (e) {
        console.log('❌ Erreur parsing response:', e.message);
        console.log('📄 Raw response:', data);
      }
    });
  });
  
  req.on('error', (error) => {
    console.error('❌ Erreur de vérification:', error.message);
  });
  
  req.end();
}

// Lancer le test
console.log('🚀 Début du test...\n');
testWebhook(); 
# Intégration Outrank.so - Guide de Configuration

## Vue d'ensemble

Ce guide décrit l'intégration complète avec [Outrank.so](https://www.outrank.so) pour la publication automatique d'articles sur votre blog. L'intégration utilise un système de webhooks pour recevoir le contenu généré par Outrank et le publier automatiquement sur votre site.

## Architecture

### 🔄 Flux de Données
1. **Outrank.so** génère du contenu optimisé SEO
2. **Webhook** envoie le contenu vers votre API
3. **Traitement** valide et formate le contenu
4. **Publication** automatique ou programmée

### 📁 Fichiers Créés
- `src/app/api/webhooks/outrank/route.ts` - Gestionnaire de webhooks
- `src/app/api/blog/articles/route.ts` - API CRUD pour les articles
- `OUTRANK_INTEGRATION.md` - Cette documentation

## Configuration Requise

### Variables d'Environnement

Créez un fichier `.env.local` avec :

```bash
# Configuration Outrank.so
OUTRANK_ACCESS_TOKEN=your_secure_access_token_here
OUTRANK_WEBHOOK_URL=https://yoursite.com/api/webhooks/outrank

# Configuration générale
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=development
```

### Configuration Outrank.so

1. **Connectez-vous** à votre compte Outrank.so
2. **Configurez l'intégration webhook** avec :
   - **Integration Name** : Un nom unique (2-30 caractères, pas de caractères spéciaux)
   - **Webhook Endpoint** : `https://yoursite.com/api/webhooks/outrank` (doit être HTTPS)
   - **Access Token** : Clé secrète pour vérifier l'authenticité des requêtes
3. **Testez** en publiant un article

## Endpoints API

### 🔗 Webhook Outrank
- **URL** : `POST /api/webhooks/outrank`
- **Sécurité** : Bearer token dans le header Authorization
- **Format** : JSON
- **Event Type** : `publish_articles`

**Format de payload officiel** :
```json
{
  "event_type": "publish_articles",
  "timestamp": "2025-01-15T14:30:00Z",
  "data": {
    "articles": [
      {
        "id": "123456",
        "title": "How to Implement Webhooks",
        "content_markdown": "Webhooks are a powerful...",
        "content_html": "<p>Webhooks are a powerful...</p>",
        "meta_description": "Learn how to implement webhooks in your application",
        "created_at": "2025-01-15T10:30:00Z",
        "image_url": "https://example.com/images/webhook-article.jpg",
        "slug": "how-to-implement-webhooks",
        "tags": ["webhooks", "integration", "api"]
      }
    ]
  }
}
```

**Headers requis** :
```
Authorization: Bearer your_access_token_here
Content-Type: application/json
```

### 📝 Articles API
- **GET** `/api/blog/articles` - Lister les articles
- **POST** `/api/blog/articles` - Créer un article
- **PUT** `/api/blog/articles` - Mettre à jour un article
- **DELETE** `/api/blog/articles?id=123` - Supprimer un article

## Fonctionnalités

### ✅ Automatisation Complète
- **Réception automatique** du contenu Outrank
- **Validation** et formatage du contenu
- **Publication immédiate** ou programmée
- **Génération automatique** des slugs et métadonnées

### 🔒 Sécurité
- **Validation Bearer token** pour l'authentification des webhooks
- **Validation des données** entrantes et structure du payload
- **Gestion des erreurs** robuste avec logs détaillés

### 📊 Gestion du Contenu
- **Statuts multiples** : draft, published, scheduled, archived
- **Sources trackées** : manual vs outrank
- **Métadonnées complètes** : SEO, auteur, timestamps

## Utilisation

### Test du Webhook

```bash
# Vérifier que le webhook fonctionne
curl -X GET http://localhost:3000/api/webhooks/outrank

# Réponse attendue :
{
  "service": "Outrank Webhook Handler",
  "status": "active",
  "timestamp": "2025-01-01T10:00:00.000Z"
}
```

### Lister les Articles

```bash
# Tous les articles
curl http://localhost:3000/api/blog/articles

# Articles Outrank uniquement
curl "http://localhost:3000/api/blog/articles?source=outrank"

# Articles publiés uniquement
curl "http://localhost:3000/api/blog/articles?status=published"
```

### Créer un Article Manuellement

```bash
curl -X POST http://localhost:3000/api/blog/articles \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Mon Nouvel Article",
    "content": "Contenu de l'article...",
    "description": "Description de l'article",
    "tags": ["Blog", "Test"],
    "status": "published"
  }'
```

## Workflow Recommandé

### 1. Développement Local
```bash
# Démarrer le serveur
npm run dev

# Tester les endpoints
curl http://localhost:3000/api/webhooks/outrank
curl http://localhost:3000/api/blog/articles
```

### 2. Configuration Outrank
1. **URL Webhook** : `https://yoursite.com/api/webhooks/outrank`
2. **Secret** : Générer et configurer dans `.env.local`
3. **Test** : Envoyer un article test

### 3. Production
1. **Déployer** sur votre plateforme (Vercel, Netlify, etc.)
2. **Configurer** les variables d'environnement
3. **Mettre à jour** l'URL webhook dans Outrank
4. **Surveiller** les logs pour les erreurs

## Prochaines Améliorations

### 🗃️ Base de Données
- [ ] Intégrer une vraie base de données (PostgreSQL, MongoDB)
- [ ] Persistance des articles
- [ ] Historique des modifications

### 🎨 Interface d'Administration
- [ ] Dashboard pour gérer les articles
- [ ] Modération du contenu Outrank
- [ ] Programmation de publication

### 📈 Analytics
- [ ] Suivi des publications automatiques
- [ ] Métriques de performance
- [ ] Alertes en cas d'erreur

### 🔔 Notifications
- [ ] Slack/Email pour nouveaux articles
- [ ] Alertes de validation échouée
- [ ] Rapports hebdomadaires

## Support et Débogage

### Logs Utiles

```bash
# Voir les logs du webhook
tail -f logs/webhook.log

# Vérifier les erreurs
grep ERROR logs/webhook.log
```

### Erreurs Communes

1. **401 Invalid access token** : Vérifier le Bearer token dans le header Authorization
2. **400 Unsupported event type** : S'assurer que `event_type` est "publish_articles"
3. **400 Invalid payload structure** : Vérifier que le payload contient `data.articles` array
4. **500 Internal Error** : Vérifier les logs serveur

### Contact

Pour toute question sur l'intégration :
- **Documentation Outrank** : [https://www.outrank.so/onboarding/integration/webhook/docs](https://www.outrank.so/onboarding/integration/webhook/docs)
- **Support Technique** : Vérifier les logs et la configuration

---

*Configuration mise à jour le : $(date)* 
# Guide de Déploiement - insurtech.bpcorp.eu

## 🚀 Configuration pour le déploiement

### Prérequis
- Compte Vercel configuré
- Domaine insurtech.bpcorp.eu configuré
- Accès au dashboard Outrank.so

## 📝 Variables d'environnement à configurer

### Sur Vercel Dashboard

```bash
# Configuration Outrank.so (OBLIGATOIRE)
OUTRANK_ACCESS_TOKEN=votre_token_securise_ici

# Configuration générale
NEXT_PUBLIC_SITE_URL=https://insurtech.bpcorp.eu
NODE_ENV=production
```

## 🔧 Configuration Outrank.so

### Dans votre dashboard Outrank.so :

1. **Integration Name** : `insurtech-bpcorp-webhook`
2. **Webhook Endpoint** : `https://insurtech.bpcorp.eu/api/webhooks/outrank`
3. **Access Token** : Le même que dans OUTRANK_ACCESS_TOKEN

### Génération du token sécurisé :
```bash
# Générez un token unique
node -e "console.log('insur_' + require('crypto').randomBytes(32).toString('hex'))"
```

## 🌍 Déploiement Vercel

### Méthode 1 : Via Git
```bash
# Poussez sur votre repo Git
git add .
git commit -m "Deploy insurtech blog with Outrank integration"
git push origin main

# Vercel détectera automatiquement et déploiera
```

### Méthode 2 : Via CLI Vercel
```bash
# Installez Vercel CLI
npm i -g vercel

# Déployez
vercel --prod

# Configurez les variables d'environnement
vercel env add OUTRANK_ACCESS_TOKEN
```

## ✅ Tests post-déploiement

### 1. Test du webhook
```bash
curl https://insurtech.bpcorp.eu/api/webhooks/outrank
# Réponse attendue : {"service":"Outrank Webhook Handler","status":"active"}
```

### 2. Test du blog
- Visitez : https://insurtech.bpcorp.eu/pages/blog
- Vérifiez que les articles s'affichent

### 3. Test Outrank
- Publiez un article test dans Outrank.so
- Vérifiez qu'il apparaît sur votre blog

## 🔗 URLs importantes

- **Site principal** : https://insurtech.bpcorp.eu
- **Blog** : https://insurtech.bpcorp.eu/pages/blog
- **Webhook Outrank** : https://insurtech.bpcorp.eu/api/webhooks/outrank
- **API Articles** : https://insurtech.bpcorp.eu/api/blog/articles

## 📊 Monitoring

### Vercel Analytics
- Activez les analytics Vercel pour monitorer les performances

### Logs Webhook
- Surveillez les logs Vercel pour les erreurs webhook
- Dashboard → Functions → Logs

## 🔧 Configuration DNS

Assurez-vous que votre domaine insurtech.bpcorp.eu pointe vers Vercel :
- Type : CNAME
- Nom : @ (ou www)
- Valeur : cname.vercel-dns.com

## 🚨 Résolution de problèmes

### Webhook ne fonctionne pas
1. Vérifiez OUTRANK_ACCESS_TOKEN dans Vercel
2. Vérifiez l'URL dans Outrank.so
3. Consultez les logs Vercel

### Blog ne s'affiche pas
1. Vérifiez le build Vercel
2. Consultez les erreurs dans les logs
3. Testez en local d'abord

### Articles Outrank ne s'affichent pas
1. Testez le webhook manuellement
2. Vérifiez les logs de l'API
3. Confirmez le format du payload

---

✅ **Le site est prêt pour le déploiement !**

Toute l'intégration Outrank.so est fonctionnelle et testée. 
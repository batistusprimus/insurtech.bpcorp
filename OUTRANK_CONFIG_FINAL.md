# 🚀 Configuration Finale Outrank - Token Simplifié

## ✅ **Nouvelle Intégration Créée**

**Token :** `insurtechtoken` (simplifié)

## 📋 **Configuration Vercel**

### **1. Variables d'Environnement**
Dans votre dashboard Vercel :
1. **Projet :** `insurtech.bpcorp`
2. **Settings** → **Environment Variables**
3. **Modifier ou Créer :**

```bash
OUTRANK_ACCESS_TOKEN=insurtechtoken
```

4. **Environnements :** Cochez **Production**, **Preview**, **Development**
5. **Save**

### **2. Redéploiement**
- Vercel redéploiera automatiquement
- Ou forcez un redéploiement depuis **Deployments**

## 🔧 **Configuration Outrank Dashboard**

### **Intégration Mise à Jour :**
- **Integration Name :** `insurtech-bpcorp-webhook`
- **Webhook Endpoint :** `https://insurtech.bpcorp.eu/api/webhooks/outrank`
- **Access Token :** `insurtechtoken`

## 🧪 **Test de Validation**

**Après configuration Vercel :**
```bash
node test-outrank-webhook-fixed.js prod
```

**Résultat attendu :**
```json
✅ {
  "success": true,
  "message": "Webhook processed successfully",
  "processed_articles": 1,
  "total_articles": 1
}
```

## 🎯 **Vérification Articles**

**API :**
```bash
curl "https://insurtech.bpcorp.eu/api/blog/articles?source=outrank"
```

**Site :**
👉 https://insurtech.bpcorp.eu/pages/blog

## ✅ **Checklist Final**

- [ ] Token Vercel mis à jour : `insurtechtoken`
- [ ] Redéploiement Vercel terminé
- [ ] Configuration Outrank avec nouveau token
- [ ] Test webhook réussi
- [ ] Articles visibles sur le site

---

**🎉 Avec ce token simplifié, l'intégration sera beaucoup plus stable !** 
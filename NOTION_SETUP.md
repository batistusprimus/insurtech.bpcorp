# Configuration de l'intégration Notion

## 🎯 Vue d'ensemble
Ce guide vous explique comment connecter le formulaire de contact avec une base de données Notion pour recevoir automatiquement toutes les demandes.

## 📋 Prérequis
- Un compte Notion
- Accès à l'API Notion
- Les permissions d'administrateur sur votre workspace Notion

## 🚀 Étapes de configuration

### 1. Créer la base de données Notion

1. **Ouvrez Notion** et créez une nouvelle page
2. **Ajoutez une base de données** avec les colonnes suivantes :

| Nom de la colonne | Type | Description |
|-------------------|------|-------------|
| `Name` | Title | Nom complet du contact |
| `Email` | Email | Adresse email |
| `Company` | Text | Nom de l'entreprise |
| `Phone` | Phone | Numéro de téléphone |
| `Message` | Text | Message du contact |
| `Type` | Select | Type de demande (Leads Request / General Contact) |
| `Status` | Select | Statut (New / In Progress / Completed) |
| `Created Date` | Date | Date de création |
| `Industry` | Text | Secteur d'activité (pour les leads) |
| `Territory` | Text | Territoire cible (pour les leads) |
| `Lead Volume` | Text | Volume de leads souhaité |
| `Urgency` | Select | Niveau d'urgence |
| `Event Type` | Text | Type d'événement météo |

### 2. Configurer l'intégration Notion

1. **Allez sur** [notion.so/my-integrations](https://notion.so/my-integrations)
2. **Cliquez sur "New integration"**
3. **Remplissez les informations :**
   - Name: `Sentinel Shield Contact Form`
   - Associated workspace: Votre workspace
   - Capabilities: Read content, Update content, Insert content
4. **Cliquez sur "Submit"**
5. **Copiez le "Internal Integration Token"**

### 3. Partager la base de données

1. **Ouvrez votre base de données Notion**
2. **Cliquez sur "Share" en haut à droite**
3. **Cliquez sur "Invite"**
4. **Recherchez votre intégration** (Sentinel Shield Contact Form)
5. **Ajoutez-la avec les permissions "Can edit"**

### 4. Obtenir l'ID de la base de données

1. **Ouvrez votre base de données Notion**
2. **Copiez l'URL** depuis la barre d'adresse
3. **L'ID est la partie après le dernier `/`** et avant le `?`
   - Exemple: `https://notion.so/workspace/1234567890abcdef1234567890abcdef?v=...`
   - ID: `1234567890abcdef1234567890abcdef`

### 5. Configurer les variables d'environnement

1. **Créez un fichier `.env.local`** à la racine de votre projet
2. **Ajoutez les variables suivantes :**

```env
# Notion API Configuration
NOTION_TOKEN=secret_your_integration_token_here
NOTION_DATABASE_ID=your_database_id_here
```

### 6. Tester l'intégration

1. **Démarrez votre serveur de développement :**
   ```bash
   npm run dev
   ```

2. **Allez sur la page de contact** et soumettez un formulaire de test

3. **Vérifiez dans Notion** qu'une nouvelle entrée a été créée

## 🔧 Configuration des options Select

### Type
- `Leads Request`
- `General Contact`

### Status
- `New`
- `In Progress`
- `Completed`

### Urgency
- `Immediate - Need leads this week`
- `High - Within 2 weeks`
- `Medium - Within 1 month`
- `Low - Planning phase`

## 🚨 Dépannage

### Erreur "Invalid database ID"
- Vérifiez que l'ID de la base de données est correct
- Assurez-vous que l'intégration a accès à la base de données

### Erreur "Invalid token"
- Vérifiez que le token d'intégration est correct
- Assurez-vous que l'intégration est active

### Erreur "Property not found"
- Vérifiez que les noms des colonnes dans Notion correspondent exactement à ceux du code
- Les noms sont sensibles à la casse

## 📧 Notifications automatiques

Pour recevoir des notifications par email quand un nouveau contact est ajouté :

1. **Dans Notion, allez dans les paramètres de la base de données**
2. **Activez les notifications par email**
3. **Configurez les conditions de notification**

## 🔒 Sécurité

- **Ne partagez jamais** votre token d'intégration
- **Utilisez des variables d'environnement** pour les secrets
- **Limitez les permissions** de l'intégration au minimum nécessaire

## 📈 Fonctionnalités avancées

### Filtres automatiques
Vous pouvez créer des vues filtrées dans Notion :
- **Nouveaux contacts** : Status = "New"
- **Demandes de leads** : Type = "Leads Request"
- **Contacts urgents** : Urgency = "Immediate"

### Intégrations supplémentaires
- **Slack** : Pour les notifications en temps réel
- **Zapier** : Pour automatiser d'autres actions
- **Email** : Pour les réponses automatiques

## 🎉 Félicitations !

Votre formulaire de contact est maintenant connecté à Notion. Toutes les soumissions seront automatiquement ajoutées à votre base de données avec toutes les informations pertinentes. 
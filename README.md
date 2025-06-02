# Finance BP Corp - Plateforme de Leads B2B

Plateforme de vente de leads B2B qualifiés à la performance (CPL) pour les courtiers, fintechs et assureurs.

## Style Guide

### Couleurs
- Texte principal : `#1C2B4A` (bleu foncé)
- Accent principal : `#10B981` (vert émeraude)
- Accent secondaire : `#059669` (vert foncé)
- Accent clair : `#D1FAE5` (vert très clair)
- Fond : `#FFFFFF` (blanc)

### Typographie
- Titres : Anton (Google Fonts)
- Corps de texte : Inter (Google Fonts)

### Structure de la Page
1. **Hero Section**
   - Titre principal
   - Sous-titre
   - CTA "Réserver un call" (iClose)

2. **Preuves Sociales**
   - Logos des clients
   - Témoignages (optionnel)

3. **Comment ça marche**
   - 4 étapes simples
   - Processus de qualification
   - Livraison des leads

4. **Verticals Disponibles**
   - Liste des secteurs d'activité
   - Exemples de clients par vertical

5. **Case Study**
   - Exemple concret de delivery
   - Résultats obtenus
   - Témoignage client

6. **Call-to-Action Final**
   - CTA "Réserver un call" (iClose)

### Ton de Communication
- Professionnel
- Orienté résultats
- Direct et percutant
- Focus sur la valeur ajoutée

## Technologies
- Next.js 14
- React
- TypeScript
- Tailwind CSS

## Installation

```bash
# Installation des dépendances
npm install

# Lancement en développement
npm run dev

# Build pour production
npm run build

# Démarrage en production
npm start
```

## Structure des Composants
```
components/
  ├── layout/
  │   ├── Header.tsx
  │   └── Footer.tsx
  ├── sections/
  │   ├── Hero.tsx
  │   ├── SocialProof.tsx
  │   ├── HowItWorks.tsx
  │   ├── Verticals.tsx
  │   ├── CaseStudy.tsx
  │   └── CallToAction.tsx
  └── ui/
      ├── Button.tsx
      └── Card.tsx
``` 
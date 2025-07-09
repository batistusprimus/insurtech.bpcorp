# Système de Contact et Formulaires

## Vue d'ensemble

Le système de contact d'insurtech.bpcorp comprend plusieurs composants pour gérer les demandes de leads et les contacts généraux.

## Composants

### 1. ContactForm (`src/app/components/ContactForm.tsx`)

Composant principal pour les formulaires de contact avec deux modes :
- **Mode "leads"** : Formulaire de demande de leads qualifiés
- **Mode "contact"** : Formulaire de contact général

#### Props
- `type: 'leads' | 'contact'` - Type de formulaire
- `title: string` - Titre du formulaire
- `description: string` - Description du formulaire
- `onSubmit: (data: any) => void` - Fonction de callback

#### Champs du formulaire Leads
- Informations personnelles (nom, prénom, email, téléphone, entreprise)
- Industrie cible (Energy & Petrochemical, Logistics & Warehousing, etc.)
- Territoire cible (Houston Metro, Dallas-Fort Worth, etc.)
- Volume de leads souhaité (25-50, 50-100, 100-250, 250+ par semaine)
- Niveau d'urgence (immédiat, élevé, moyen, faible)
- Type d'événement (inondations, chaleur extrême, sécheresse, etc.)
- Message additionnel

#### Champs du formulaire Contact
- Informations personnelles (nom, prénom, email, téléphone, entreprise)
- Message

### 2. ContactModal (`src/app/components/ContactModal.tsx`)

Modal popup pour afficher les formulaires de contact de manière intégrée.

#### Props
- `isOpen: boolean` - État d'ouverture du modal
- `onClose: () => void` - Fonction de fermeture
- `defaultType: 'leads' | 'contact'` - Type par défaut

### 3. ContactCTA (`src/app/components/ContactCTA.tsx`)

Composant Call-to-Action réutilisable pour déclencher le modal de contact.

#### Props
- `type: 'leads' | 'contact'` - Type de formulaire à ouvrir
- `variant: 'primary' | 'secondary' | 'outline'` - Style du bouton
- `size: 'sm' | 'md' | 'lg'` - Taille du bouton
- `className: string` - Classes CSS additionnelles
- `children: React.ReactNode` - Contenu personnalisé

## Pages

### Page Contact (`src/app/pages/contact/page.tsx`)

Page dédiée aux formulaires de contact avec :
- Section héros avec métriques clés
- Navigation par onglets entre leads et contact
- Informations supplémentaires sur Sentinel Shield
- Section FAQ
- Call-to-action final

## Utilisation

### 1. Utilisation basique du ContactCTA

```tsx
import ContactCTA from './components/ContactCTA';

// Bouton de demande de leads
<ContactCTA type="leads" />

// Bouton de contact général
<ContactCTA type="contact" variant="outline" size="lg" />
```

### 2. Utilisation du ContactForm directement

```tsx
import ContactForm from './components/ContactForm';

<ContactForm
  type="leads"
  title="Request Qualified Leads"
  description="Tell us about your target market"
  onSubmit={(data) => {
    // Traitement des données
    console.log(data);
  }}
/>
```

### 3. Utilisation du ContactModal

```tsx
import ContactModal from './components/ContactModal';

const [isModalOpen, setIsModalOpen] = useState(false);

<ContactModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  defaultType="leads"
/>
```

## Intégration avec l'API

### Structure des données soumises

#### Formulaire Leads
```typescript
{
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone?: string;
  industry: string;
  territory: string;
  leadVolume: string;
  urgency: string;
  eventType?: string;
  message?: string;
}
```

#### Formulaire Contact
```typescript
{
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
}
```

### Gestion des soumissions

Actuellement, les formulaires simulent un appel API avec un délai de 2 secondes. Pour l'intégration réelle :

1. Remplacer la simulation dans `handleSubmit` des composants
2. Ajouter la gestion d'erreurs appropriée
3. Intégrer avec votre CRM ou système de gestion des leads

## Navigation

Le Header a été mis à jour pour inclure :
- Lien "Contact" dans la navigation principale
- Bouton CTA principal redirige vers `/pages/contact`

## Icônes

Nouvelles icônes ajoutées au composant Icons :
- `EmailIcon` - Icône email
- `XIcon` - Icône de fermeture

## Styles et Design

Le système utilise le design system existant avec :
- Couleurs : bleu/indigo pour les CTAs principaux
- Bordures arrondies et ombres cohérentes
- Animations et transitions fluides
- Design responsive pour mobile et desktop

## Prochaines étapes

1. **Intégration API** : Connecter les formulaires à votre backend
2. **Validation** : Ajouter une validation côté client plus robuste
3. **Analytics** : Intégrer le tracking des conversions
4. **Notifications** : Ajouter des notifications email automatiques
5. **CRM Integration** : Connecter avec votre système CRM
6. **Tests** : Ajouter des tests unitaires et d'intégration 
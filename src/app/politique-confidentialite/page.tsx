import React from "react";

export default function PolitiqueConfidentialite() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Politique de confidentialité</h1>
      <p className="mb-8">Nous attachons une grande importance à la protection de vos données personnelles. Cette page explique comment nous collectons, utilisons et protégeons vos informations.</p>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Données collectées</h2>
        <p className="mb-4">Lorsque vous remplissez un formulaire sur notre site, nous collectons les données suivantes :</p>
        <ul className="mb-6 list-disc pl-6 space-y-2">
          <li>Nom, prénom</li>
          <li>Email professionnel</li>
          <li>Numéro de téléphone</li>
          <li>Nom de l&apos;entreprise</li>
          <li>Fonction</li>
          <li>Message libre ou demande spécifique</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Finalités du traitement</h2>
        <p className="mb-4">Ces données sont utilisées uniquement pour :</p>
        <ul className="mb-6 list-disc pl-6 space-y-2">
          <li>Répondre à votre demande</li>
          <li>Vous livrer les services proposés par Climate Risk Leads™</li>
          <li>Améliorer la pertinence de notre offre commerciale</li>
          <li>Éventuellement, vous tenir informé(e) de nos nouveautés si vous y avez consenti</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. Cookies</h2>
        <p className="mb-4">Nous utilisons uniquement des cookies essentiels au fonctionnement du site ou à des mesures d&apos;audience anonymisées.</p>
        <p>Aucun cookie publicitaire ou tracking tiers n&apos;est activé sans votre consentement explicite.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Sécurité & conservation</h2>
        <p className="mb-4">Vos données sont stockées sur des serveurs sécurisés et conservées pour une durée maximale de 24 mois à compter du dernier échange.</p>
        <p>Elles ne sont ni revendues, ni transférées à des tiers sans votre autorisation.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">5. Vos droits</h2>
        <p className="mb-4">Conformément au RGPD, vous disposez à tout moment des droits suivants :</p>
        <ul className="mb-6 list-disc pl-6 space-y-2">
          <li>Accès à vos données</li>
          <li>Rectification</li>
          <li>Suppression</li>
          <li>Opposition au traitement</li>
        </ul>
        <p>Pour exercer vos droits, contactez-nous à baptiste[@]bpcorp.eu</p>
      </section>
    </main>
  );
} 
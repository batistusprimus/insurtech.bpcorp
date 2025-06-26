import React from "react";

export default function MentionsLegales() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Éditeur du site</h2>
        <p className="mb-4">Ce site est édité par :</p>
        <ul className="mb-6 list-disc pl-6 space-y-2">
          <li><strong>Raison sociale :</strong> BP Les Cannisses KFT</li>
          <li><strong>Adresse :</strong> 1077 Budapest, Rózsa utca 38/A – Hungary</li>
          <li><strong>Numéro de TVA intracommunautaire :</strong> HU32359815</li>
          <li><strong>Représentant légal :</strong> Baptiste Piocelle</li>
          <li><strong>Email de contact :</strong> contact[@]bpcorp.eu</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Hébergement</h2>
        <p className="mb-4">Le site est hébergé par :</p>
        <ul className="mb-6 list-disc pl-6 space-y-2">
          <li><strong>Hébergeur :</strong> Vercel Inc.</li>
          <li><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, USA</li>
          <li><strong>Site web :</strong> <a href="https://vercel.com" className="text-blue-600 hover:underline">https://vercel.com</a></li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Responsabilité</h2>
        <p className="mb-4">Les informations fournies sur ce site sont données à titre indicatif.</p>
        <p>BP Les Cannisses KFT ne peut être tenue responsable de leur inexactitude ou de leur mauvaise utilisation.</p>
      </section>
    </main>
  );
} 
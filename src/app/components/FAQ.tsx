"use client";

import React from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqItems = [
    {
      question: "Est-ce que je dois m'engager sur plusieurs mois ?",
      answer: "Non. Vous ne payez que les leads reçus. Aucun engagement, aucun abonnement. Paiement à la performance uniquement."
    },
    {
      question: "C'est quoi un \"lead qualifié\" chez vous ?",
      answer: "Un lead est considéré comme qualifié et facturable s'il respecte les 4 conditions suivantes :\n\n• Email professionnel et numéro de téléphone valides\n• Profil conforme à votre ICP (fonction, secteur, taille d'entreprise)\n• Intérêt exprimé (réponse, clic, demande d'infos claire)\n• Budget ou intention de passage à l'action"
    },
    {
      question: "Combien de temps pour démarrer ?",
      answer: "Entre 3 et 7 jours ouvrés. Nos campagnes tournent déjà. Vous êtes alimenté dès que votre slot est réservé."
    },
    {
      question: "Que contient la livraison ?",
      answer: "Chaque lead contient :\n\n• Nom complet\n• Poste & entreprise\n• Email pro\n• Téléphone direct\n• Détail de la demande\n• Niveau d'intérêt / budget (si disponible)\n\nLivraison via Google Sheet, Notion ou CRM connecté."
    },
    {
      question: "Puis-je refuser un lead ?",
      answer: "Oui. Chaque lead est soumis à un barème de qualité (score BANT ≥ 14). En dessous : il est retiré ou non facturé."
    },
    {
      question: "Combien de leads vais-je recevoir ?",
      answer: "Le volume dépend de votre marché, de vos critères, et des slots disponibles. On commence généralement entre 30 et 100 leads par mois."
    },
    {
      question: "RGPD, sécurité et protection des données",
      answer: "Toutes nos données sont collectées de manière légale, éthique et sécurisée :\n\n• Aucune donnée sensible ou personnelle non consentie\n• Aucune prospection vers les particuliers\n• Hébergement sécurisé (serveurs EU)\n• Données supprimables à la demande du prospect ou du client\n• Conformité RGPD assurée à chaque étape"
    },
    {
      question: "Puis-je réserver un créneau d'exclusivité ?",
      answer: "Oui. Chaque verticale est limitée à un nombre restreint de partenaires. Quand vous réservez un slot, vous bloquez votre volume et votre exclusivité."
    },
    {
      question: "Et si je n'ai pas encore de tunnel ou d'équipe commerciale ?",
      answer: "Pas de souci. En option, nous proposons :\n\n• Un CRM opérationnel clé en main\n• Une équipe de setters ou closers à la demande\n• Un tunnel de conversion personnalisé (en GHL ou Notion)"
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-[#f7f8fa] via-white to-[#f7f8fa]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] text-sm font-semibold tracking-wide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-heading mb-6 text-[var(--color-text-primary)]">
            Tout ce que vous devez savoir
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#10B981]/20 overflow-hidden transition-all duration-300 hover:border-[#10B981]"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-[var(--color-text-primary)]">
                  {item.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-5 h-5 text-[#10B981] transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                } overflow-hidden`}
              >
                <div className="text-[var(--color-text-primary)]/80 whitespace-pre-line">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 
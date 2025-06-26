import React from "react";
import Image from "next/image";
import FAQ from './components/FAQ';

// 1. HERO
const Hero = () => (
  <section
    id="hero"
    className="relative min-h-[85vh] flex items-center justify-center py-24 px-4 overflow-hidden bg-gradient-to-b from-white via-[#f7f8fa] to-[#e9ecf3]"
  >
    {/* Background decorative elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#10B981]/10 to-transparent rounded-full blur-3xl opacity-50" />
    </div>

    <div className="relative max-w-5xl mx-auto text-center">
      {/* Badge rassurant avec animation */}
      <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] text-sm font-semibold tracking-wide border border-[#10B981]/20 hover:border-[#10B981]/40 transition-all duration-300 hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Climate Risk Leads™
      </div>

      {/* Titre principal avec gradient */}
      <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight bg-gradient-to-r from-[var(--color-text-primary)] via-[#10B981] to-[var(--color-text-primary)] bg-clip-text text-transparent">
        Des leads qualifiés. Exposés. Prêts à souscrire.
      </h1>

      {/* Sous-titre avec animation */}
      <h2 className="text-xl md:text-2xl mb-12 font-medium text-[var(--color-text-primary)]/80 max-w-3xl mx-auto leading-relaxed">
        Vous vendez une solution d&apos;assurance climatique ou paramétrique ?<br />
        Nous livrons des leads d&apos;entreprises directement exposées aux risques climatiques.
      </h2>

      {/* CTA avec animation et effet de hover amélioré */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="https://app.iclosed.io/e/baptistepiocelle/contact"
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#10B981] text-white font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
        >
          <span className="relative z-10 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:scale-110 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2M16 11.37V7a4 4 0 10-8 0v4.37M12 17v-4m0 0l-2 2m2-2l2 2" />
            </svg>
            Estimer mon ROI potentiel
          </span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
        <a
          href="#how-it-works"
          className="inline-flex items-center gap-2 px-6 py-3 text-[var(--color-text-primary)] font-medium hover:text-[#10B981] transition-colors"
        >
          <span>Découvrir comment ça marche</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      {/* Public cible */}
      <p className="mt-8 text-lg text-[var(--color-text-primary)]/80 font-medium">
        Modèle 100 % performance. Aucun engagement. Aucun Acompte.
      </p>

      {/* Stats ou social proof */}
      <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
        {[
          { 
            number: "100%", 
            label: "Satisfaction",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )
          },
          { 
            number: "0€", 
            label: "Au lancement",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
            )
          },
          { 
            number: "100%", 
            label: "Performance",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
              </svg>
            )
          },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="text-[#10B981]">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-[#10B981]">{stat.number}</div>
            </div>
            <div className="text-sm text-[var(--color-text-primary)]/60">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 2. PREUVES SOCIALES (remplacée par Cas Client)
const SocialProof = () => (
  <section id="social-proof" className="relative py-32 bg-gradient-to-b from-[#f7f8fa] via-white to-[#f7f8fa] overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#10B981]/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#10B981]/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
    </div>

    <div className="relative max-w-6xl mx-auto px-4">
      {/* Section header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] text-sm font-semibold tracking-wide border border-[#10B981]/20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c1.164.093 1.636 1.545.749 2.305l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
          Cas Client
        </div>
        <h2 className="text-3xl md:text-4xl font-heading mb-4 bg-gradient-to-r from-[var(--color-text-primary)] to-[#10B981] bg-clip-text text-transparent">
          De la stratégie de contenu à la génération de leads
        </h2>
      </div>

      {/* Testimonial card */}
      <div className="group relative bg-white rounded-2xl shadow-xl border border-[#10B981]/20 hover:border-[#10B981]/40 transition-all duration-300 hover:shadow-2xl overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981]/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-[#10B981]/10 transition-colors duration-300" />
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#10B981]/10 rounded-full blur-xl" />
        
        <div className="relative p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile image with decorative border */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <Image
                src="/anais-remaoun-ezgif.com-webp-to-jpg-converter.jpg"
                alt="Anaïs Remaoun, CEO de Audit & Coverage"
                width={160}
                height={160}
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#10B981] rounded-full flex items-center justify-center text-white shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#10B981" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium text-[#10B981]">Cas Client</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-heading mb-6 leading-tight">
                285 leads qualifiés directement à prendre en appel en 75 jours grâce à une stratégie… de contenu.
              </h3>

              <div className="prose prose-lg mb-6 text-[var(--color-text-primary)]/80">
                <p className="mb-4">
                  Avant même de lancer notre modèle Pay Per Lead, on livrait déjà des résultats à la performance.
                  <br />
                  Avec Anaïs, on a conçu et piloté une stratégie de contenu LinkedIn.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#10B981]/5 rounded-lg text-[#10B981] font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>35 posts, 1.7M vues, 4 posts viraux, +4.000 abonnés, 285 leads qualifiés</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="font-semibold text-[var(--color-text-primary)]">Anaïs Remaoun</div>
                  <div className="text-sm text-[var(--color-text-primary)]/60">CEO de Audit & Coverage</div>
                </div>
                <Image
                  src="/audit_and_coverage_logo.jpeg"
                  alt="Logo Audit & Coverage"
                  width={40}
                  height={40}
                  className="h-10 w-auto opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <p className="text-center text-lg mt-12 max-w-2xl mx-auto text-[var(--color-text-primary)]/80 font-medium">
        Nous sommes en mesure de générer de 100 à 5.000 leads sur votre verticale risque
      </p>
    </div>
  </section>
);

// Section Logos Clients
const ClientLogos = () => (
  <section className="py-16 bg-gradient-to-b from-[#f7f8fa] via-[#e9ecf3] to-white relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl transform -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl transform translate-y-1/2" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] text-sm font-semibold tracking-wide border border-[#10B981]/20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          Nos Clients
        </div>
        <h2 className="text-3xl md:text-4xl font-heading mb-4 bg-gradient-to-r from-[var(--color-text-primary)] to-[#10B981] bg-clip-text text-transparent">
          Ils nous font confiance
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center">
      {[
        '/66586da221e592872a514716_ecf4541d-3c8f-4731-ace6-7f59afa16df4.png',
        '/66586f5324a5f96213323991_e06827a1-d54d-4cff-8f39-d480a4d23967.png',
        '/665871bc5f8d9b87ce190b59_1443ebad-ae25-4240-b1e3-1bf8bf237c3a.png',
        '/665876e344b512bddc35112e_77189863-0a3b-48f3-9b9d-cf294d14d568.png',
        '/6658713033c7316a7e38d620_548af79d-89fc-4542-a939-4eb1fabae0c8.png',
      ].map((src, i) => (
        <div
          key={i}
            className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
        >
          <Image
            src={src}
            alt={`Logo client ${i + 1}`}
            width={80}
            height={80}
            className="h-16 md:h-20 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      ))}
      </div>
    </div>
  </section>
);

// 3. COMMENT ÇA MARCHE
const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-gradient-to-b from-[#f7f8fa] via-white to-[#f7f8fa]">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-sm font-semibold tracking-wide">
          Notre Processus
        </div>
        <h2 className="text-3xl md:text-4xl font-heading mb-4">Un système ultra simple.<br />Zéro friction, 100 % résultats.</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { 
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            ),
            title: "Étape 1 – Vous nous partagez votre besoin et votre volume",
            desc: "Minimum 100 leads sur votre verticale risque."
          },
          { 
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            ),
            title: "Étape 2 – On vous livre des leads triés sur le volet",
            desc: "Décideurs identifiés, email + tel, besoin d&apos;assurance exprimé, budget validé."
          },
          { 
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
              </svg>
            ),
            title: "Étape 3 – Vous validez et gérez vos leads",
            desc: "Vous pilotez la relation commerciale avec chaque prospect livré."
          },
          { 
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            title: "Étape 4 – Vous payez uniquement ce qui est livré",
            desc: "Aucun setup, aucun engagement. Juste des leads facturés à l&apos;unité."
          }
        ].map((step, i) => (
          <div 
            key={i} 
            className="group relative p-8 bg-white rounded-2xl shadow-sm border border-[#10B981]/20 hover:border-[#10B981] transition-all duration-300 hover:shadow-lg"
          >
            <div className="absolute -top-4 left-8 w-12 h-12 bg-[#10B981] rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
              {step.icon}
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-heading mb-3 text-[var(--color-text-primary)] group-hover:text-[#10B981] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-[var(--color-text-primary)]/70 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 4. VERTICALES DISPONIBLES
const verticals = [
  {
    title: "🌾 Cultures sensibles et coopératives agricoles",
    desc: "Sécheresse, grêle, gel tardif, pertes d&apos;exploitation."
  },
  {
    title: "🏗️ Bâtiments, chantiers et infrastructures exposées",
    desc: "Inondation, instabilité du sol, tempêtes, contraintes réglementaires."
  },
  {
    title: "🔥 Sites sensibles et actifs industriels à risques",
    desc: "Forêts, entrepôts, installations minières ou zones à forte sinistralité."
  },
  {
    title: "🌍 Grands comptes multi-sites & zones à exposition internationale",
    desc: "Cartographie des risques, offres sur-mesure, contrats indexés."
  },
  {
    title: "⚡ Energies renouvelables & climat-dépendantes",
    desc: "Solaire, éolien, hydraulique — performance et couverture météo."
  },
  {
    title: "📊 Solutions paramétriques et assurance à base d&apos;indicateurs météo",
    desc: "Données satellite, IA prédictive, intégration monitoring/assurance."
  },
  {
    title: "🎪 Événementiel et projets ponctuels à haute dépendance météo",
    desc: "Festivals, exploitations saisonnières, lancements à date fixe."
  },
];

const Verticals = () => (
  <section id="verticals" className="py-32 bg-gradient-to-b from-[#f7f8fa] via-white to-[#f7f8fa] relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#10B981]/5 rounded-full blur-3xl transform -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl transform translate-y-1/2" />
    </div>

    <div className="max-w-7xl mx-auto px-4 relative">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] text-sm font-semibold tracking-wide border border-[#10B981]/20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
          </svg>
          Nos Expertises
        </div>
        <h2 className="text-4xl md:text-5xl font-heading mb-6 bg-gradient-to-r from-[var(--color-text-primary)] to-[#10B981] bg-clip-text text-transparent">
          Les demandes que nous servons le plus
        </h2>
        <p className="text-xl text-[var(--color-text-primary)]/80 max-w-2xl mx-auto leading-relaxed">
          Nous générons des leads ultra qualifiés sur ces besoins précis :
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
        {verticals.map((v, i) => (
          <div 
            key={i} 
            className="group relative p-8 bg-white rounded-2xl border border-[#10B981]/20 hover:border-[#10B981] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div>
              <h3 className="font-heading text-xl text-[var(--color-text-primary)] group-hover:text-[#10B981] transition-colors duration-300 leading-tight">
                {v.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#10B981]/10 to-[#10B981]/5 rounded-full text-[#10B981] font-medium border border-[#10B981]/20 hover:border-[#10B981]/40 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>
          <span className="text-lg">Pour chaque demande : une machine dédiée. Vous arrivez. On vous livre.</span>
        </div>
      </div>
    </div>
  </section>
);

// Section About
const About = () => (
  <section className="py-32 bg-gradient-to-b from-[#f7f8fa] via-white to-[#f7f8fa] relative overflow-hidden">
    {/* Background decorative elements with enhanced animations */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#10B981]/10 via-[#10B981]/5 to-transparent rounded-full blur-3xl transform -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#10B981]/10 via-[#10B981]/5 to-transparent rounded-full blur-3xl transform translate-y-1/2 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#10B981]/5 via-transparent to-[#10B981]/5 rounded-full blur-3xl opacity-30 animate-pulse delay-500" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4">
      <div className="text-center mb-24">
        {/* Badge sur-titre */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] text-sm font-semibold tracking-wide border border-[#10B981]/20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
          </svg>
          Performance & Résultats
        </div>

        {/* Titre principal */}
        <h2 className="text-4xl md:text-6xl font-heading mb-6 bg-gradient-to-r from-[var(--color-text-primary)] via-[#10B981] to-[var(--color-text-primary)] bg-clip-text text-transparent">
          Des leads qui convertissent, pas juste des contacts
        </h2>

        {/* Sous-titre */}
        <h3 className="text-2xl md:text-3xl font-heading mb-16 text-[var(--color-text-primary)]/80">
          Une approche data-driven pour transformer vos opportunités en clients
        </h3>
        
        {/* Description */}
        <div className="prose prose-lg mx-auto text-[var(--color-text-primary)]/80 max-w-3xl mb-24">
          <p className="text-2xl mb-8 leading-relaxed font-medium">
            Nous ne sommes pas une agence de leads classique.
            <br />
            Nous sommes votre partenaire de croissance B2B, spécialisé dans la génération de leads ultra-qualifiés.
          </p>
          <p className="text-xl leading-relaxed text-[var(--color-text-primary)]/70">
            Notre système a déjà permis de générer plus de 5.000 leads qualifiés en 2024, avec un taux de conversion moyen de 35% sur des marchés premium : l&apos;assurance, les entreprises techs, le recrutement, les agences B2B et les investisseurs.
          </p>
        </div>

        {/* Key Features - Modern Design */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: "🎯",
                title: "Acquisition ciblée",
                description: "Des campagnes multi-canal optimisées pour votre marché spécifique",
                stats: [
                  { number: "35M+", label: "Vues qualifiées" },
                  { number: "175K+", label: "Décideurs touchés" }
                ]
              },
              {
                icon: "⚡",
                title: "Qualification premium",
                description: "Chaque lead est validé sur 5 critères : budget, besoin, timing, décision et urgence",
                stats: [
                  { number: "5.000+", label: "Leads convertis" },
                  { number: "35%", label: "Taux de conversion" }
                ]
              },
              {
                icon: "💎",
                title: "ROI garanti",
                description: "Payez uniquement les leads qualifiés. Aucun frais caché, aucun engagement.",
                stats: [
                  { number: "17M€+", label: "CA généré" },
                  { number: "100%", label: "Clients satisfaits" }
                ]
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className="group relative"
              >
                {/* Enhanced glass effect with gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl transform group-hover:scale-[1.02] transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 via-transparent to-[#10B981]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8 md:p-10">
                  {/* Enhanced icon with gradient background */}
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5 transform group-hover:scale-110 transition-transform duration-500">
                    <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </span>
                  </div>
                  
                  {/* Enhanced title with gradient */}
                  <h3 className="text-2xl md:text-3xl font-heading mb-4 bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  
                  {/* Enhanced description */}
                  <p className="text-lg text-[var(--color-text-primary)]/70 mb-10 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Enhanced stats with better visual hierarchy */}
                  <div className="grid grid-cols-2 gap-6">
                    {feature.stats.map((stat, j) => (
                      <div key={j} className="text-center transform group-hover:translate-y-[-2px] transition-transform duration-300">
                        <div className="text-3xl font-bold bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent mb-2">
                          {stat.number}
                        </div>
                        <div className="text-sm font-medium text-[var(--color-text-primary)]/60">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// 5. CTA FINAL
const CallToAction = () => (
  <section id="cta" className="py-24 bg-gradient-to-b from-[#f7f8fa] via-white to-[#d1fae5] text-center relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#10B981]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
    </div>
    <div className="relative max-w-2xl mx-auto px-6">
      <div className="rounded-3xl shadow-xl border border-[#10B981]/20 bg-white/90 backdrop-blur-md p-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] text-base font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 9.75V7.5A4.5 4.5 0 008 7.5v2.25m8.25 0A2.25 2.25 0 0121 12v6.75A2.25 2.25 0 0118.75 21H5.25A2.25 2.25 0 013 18.75V12a2.25 2.25 0 012.25-2.25h13.5z" />
          </svg>
          Prêt à capter les demandes de votre marché ?
        </div>
        <h2 className="text-3xl md:text-4xl font-heading mb-6 text-[var(--color-text-primary)]">Chaque mois, des centaines de décideurs cherchent :</h2>
        <ul className="text-lg text-left mx-auto mb-6 text-[var(--color-text-primary)]/90 font-medium space-y-2 pl-4">
          <li>🌾 Cultures agricoles & coopératives (sécheresse, grêle, gel)</li>
          <li>🏗️ Bâtiments & chantiers exposés (inondation, tempête, sol)</li>
          <li>🔥 Sites industriels & forêts à risques</li>
          <li>🌍 Grands comptes multi-sites, offres sur-mesure</li>
          <li>⚡ Energies renouvelables (solaire, éolien, hydro)</li>
          <li>📊 Assurance paramétrique & météo</li>
          <li>🎪 Événementiel météo-sensible</li>
        </ul>
        <p className="text-lg mb-2 text-[var(--color-text-primary)]/80">Nous captons ces demandes.<br/>Vous sélectionnez votre volume, on vous livre les leads.</p>
        <p className="text-base mb-8 text-[var(--color-text-primary)]/70">Réservez un call, on vous montre notre système de génération de leads en totale transparence et nous négocions le prix par lead.</p>
        <a
          href="https://app.iclosed.io/e/baptistepiocelle/contact"
          className="inline-block px-10 py-4 bg-[#10B981] text-white font-bold rounded-full text-lg shadow-lg hover:bg-[#059669] transition-colors focus:outline-none focus:ring-2 focus:ring-[#10B981]"
        >Réserver mon call</a>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SocialProof />
      <ClientLogos />
      <HowItWorks />
      <Verticals />
      <About />
      <FAQ />
      <CallToAction />
    </main>
  );
}

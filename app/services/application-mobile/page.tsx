import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Smartphone, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Agence de création d'application mobile à Brest | BreizhApp",
  description: "Agence de création d'application mobile à Brest : développement iOS & Android sur mesure. React Native, de la conception au déploiement sur les stores. Devis gratuit sous 24h.",
  keywords: [
    "agence de création d'application Brest",
    "agence création application mobile Brest",
    "création application mobile",
    "développeur mobile Brest",
    "développeur application mobile Brest",
    "agence développement mobile Finistère",
    "je veux une application mobile",
    "j'ai une idée d'application mobile",
    "faire développer une application mobile",
    "développeur application mobile freelance",
    "création application mobile iOS Android",
    "application mobile sur mesure",
    "développeur mobile finistère",
    "développeur mobile Bretagne",
  ],
  alternates: { canonical: "https://breizhapp.tech/services/application-mobile" },
  openGraph: {
    title: "Agence de création d'application mobile à Brest | BreizhApp",
    description: "Vous avez une idée d'application mobile ? Agence de création d'application à Brest : app iOS & Android sur mesure. Devis gratuit sous 24h.",
    url: "https://breizhapp.tech/services/application-mobile",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://breizhapp.tech/services/application-mobile#service",
      name: "Création d'application mobile iOS & Android",
      description:
        "Agence de création d'application mobile à Brest : développement iOS & Android sur mesure en React Native, de la conception au déploiement sur les stores.",
      provider: { "@id": "https://breizhapp.tech/#business" },
      areaServed: [
        { "@type": "City", name: "Brest" },
        { "@type": "AdministrativeArea", name: "Finistère" },
        { "@type": "AdministrativeArea", name: "Bretagne" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://breizhapp.tech" },
        { "@type": "ListItem", position: 2, name: "Création application mobile", item: "https://breizhapp.tech/services/application-mobile" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quelle est la meilleure agence de création d'application mobile à Brest ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BreizhApp est une agence de développement mobile basée à Brest, spécialisée dans la création d'applications iOS & Android sur mesure en React Native. Contrairement aux grandes agences parisiennes, vous échangez directement avec le développeur qui code votre app, sans intermédiaire commercial.",
          },
        },
        {
          "@type": "Question",
          name: "Combien coûte la création d'une application mobile à Brest ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le tarif dépend des fonctionnalités souhaitées : paiement en ligne, notifications push, espace admin, authentification. Contactez BreizhApp pour un devis gratuit et personnalisé sous 24h.",
          },
        },
        {
          "@type": "Question",
          name: "Combien de temps pour développer une application mobile ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Entre 2 et 5 semaines selon la complexité, de la conception au déploiement sur l'App Store et Google Play. Les applications simples (catalogue, réservation) sont livrées en 2 à 3 semaines.",
          },
        },
        {
          "@type": "Question",
          name: "Pourquoi choisir une agence locale à Brest plutôt qu'une agence parisienne ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Une agence brestoise permet des rendez-vous en présentiel, une meilleure réactivité et des tarifs plus accessibles que les agences parisiennes, tout en gardant la même expertise technique en React Native pour iOS et Android.",
          },
        },
      ],
    },
  ],
};

const features = [
  { title: "iOS & Android", desc: "Une seule codebase React Native, disponible sur les deux stores." },
  { title: "Paiement intégré", desc: "Stripe pour les paiements en ligne, abonnements et in-app purchase." },
  { title: "Notifications push", desc: "Relancez vos clients avec des notifications ciblées et programmées." },
  { title: "Espace admin", desc: "Un espace dédié directement dans l'app pour gérer produits, commandes et utilisateurs." },
  { title: "Authentification", desc: "Connexion sécurisée par email, Google ou Apple Sign-In." },
  { title: "Déploiement inclus", desc: "Je publie l'app sur l'App Store et Google Play et je vous forme." },
];

const useCases = [
  { emoji: "🍽️", title: "App restaurant", desc: "Commande en ligne, carte digitale, programme de fidélité, réservation de table." },
  { emoji: "🌱", title: "App maraîcher", desc: "Paniers hebdomadaires, abonnements, gestion des livraisons locales." },
  { emoji: "🏋️", title: "App coaching / sport", desc: "Suivi des séances, programmes personnalisés, messagerie coach/client." },
  { emoji: "🎮", title: "Jeu mobile", desc: "Game development, leaderboard, niveaux, in-app purchase." },
];

const process = [
  { step: "01", title: "Cadrage du projet", desc: "On échange à Brest ou en visio sur votre idée, vos utilisateurs et vos fonctionnalités clés." },
  { step: "02", title: "Design & maquettes", desc: "Wireframes puis interface soignée, validée avec vous avant le développement." },
  { step: "03", title: "Développement React Native", desc: "Une seule codebase pour iOS et Android, avec points d'avancement réguliers." },
  { step: "04", title: "Déploiement & formation", desc: "Publication sur l'App Store et Google Play, formation à l'espace admin inclus." },
];

const faq = [
  {
    q: "Quelle est la meilleure agence de création d'application mobile à Brest ?",
    a: "BreizhApp est une agence de développement mobile basée à Brest, spécialisée dans la création d'applications iOS & Android sur mesure en React Native. Vous échangez directement avec le développeur qui code votre app, sans intermédiaire commercial.",
  },
  {
    q: "Combien coûte la création d'une application mobile à Brest ?",
    a: "Le tarif dépend des fonctionnalités souhaitées : paiement en ligne, notifications push, espace admin, authentification. Contactez BreizhApp pour un devis gratuit et personnalisé sous 24h.",
  },
  {
    q: "Combien de temps pour développer une application mobile ?",
    a: "Entre 2 et 5 semaines selon la complexité, de la conception au déploiement sur l'App Store et Google Play.",
  },
  {
    q: "Pourquoi choisir une agence locale à Brest plutôt qu'une agence parisienne ?",
    a: "Une agence brestoise permet des rendez-vous en présentiel, une meilleure réactivité et des tarifs plus accessibles que les agences parisiennes, tout en gardant la même expertise technique en React Native.",
  },
];

export default function AppMobilePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 mono text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
          <span>/</span>
          <span className="text-black font-bold">Création application mobile</span>
        </nav>

        {/* Hero */}
        <section className="border-b-[3px] border-black py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-gray-400 mb-4">// agence de création d'application · Brest</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#FFE234] brutal-border p-3">
                <Smartphone size={32} />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">Agence de création d&apos;application mobile à Brest</h1>
                <p className="text-xl font-bold text-gray-500 mt-1">iOS & Android · React Native · Sur mesure</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
              Vous avez une idée d&apos;application mobile ? BreizhApp est une agence de développement mobile basée à Brest, en Finistère. Je crée votre app iOS & Android sur mesure, disponible sur l&apos;App Store et Google Play — de la conception au déploiement.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">
                Demander un devis gratuit
              </a>
              <a href="/portfolio" className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-8 py-4">
                Voir les réalisations →
              </a>
            </div>
            <div className="flex flex-wrap gap-4 mono text-sm text-gray-500">
              <span className="brutal-border px-3 py-1 bg-white">✓ Agence basée à Brest</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ iOS & Android</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Devis gratuit sous 24h</span>
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Ce qui est <span className="bg-[#FFE234] px-2 brutal-border">inclus</span></h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {features.map(({ title, desc }) => (
                <div key={title} className="brutal-border bg-white p-5">
                  <CheckCircle2 size={18} className="text-[#00D4AA] mb-3" />
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cas d'usage */}
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-8">Exemples de projets</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {useCases.map(({ emoji, title, desc }) => (
                <div key={title} className="border-2 border-gray-800 p-5 hover:border-[#FFE234] hover:bg-[#FFE234] hover:text-[#0A0A0A] transition-all group">
                  <div className="text-3xl mb-3">{emoji}</div>
                  <h3 className="font-bold text-[#FFFBF0] group-hover:text-[#0A0A0A] mb-1">{title}</h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-700 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Processus */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Comment se déroule la <span className="bg-[#FFE234] px-2 brutal-border">création de votre app</span></h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {process.map(({ step, title, desc }) => (
                <div key={step} className="brutal-border bg-white p-5">
                  <p className="mono text-xs font-bold text-gray-400 mb-2">{step}</p>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi une agence à Brest */}
        <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Pourquoi choisir une <span className="bg-[#FFE234] px-2 brutal-border">agence à Brest</span> ?</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              Faire appel à une agence de création d&apos;application locale, basée à Brest et couvrant tout le Finistère et la Bretagne,
              c&apos;est la garantie d&apos;échanger directement avec la personne qui développe votre app — sans chef de projet ni
              intermédiaire commercial. Rendez-vous en présentiel possibles, réactivité et tarifs plus accessibles qu&apos;une agence
              parisienne, pour une expertise technique équivalente en React Native.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Questions fréquentes</h2>
            <div className="flex flex-col gap-4">
              {faq.map(({ q, a }) => (
                <div key={q} className="brutal-border bg-white p-5">
                  <h3 className="font-bold mb-2">{q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto brutal-border brutal-shadow bg-[#FFE234] p-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Prêt à lancer votre app ?</h2>
              <p className="text-sm mt-1">Devis gratuit · Réponse sous 24h · Sans engagement · Basé à Brest</p>
            </div>
            <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3 inline-flex items-center gap-2">
              Démarrer maintenant <ArrowRight size={16} />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

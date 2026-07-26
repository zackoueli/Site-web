import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedArticles from "@/components/RelatedArticles";
import { SECTEURS } from "@/lib/taxonomy";
import { Smartphone, CheckCircle2, ArrowRight, MapPin, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Agence application mobile à Brest — iOS & Android | BreizhApp",
  description:
    "Agence application mobile à Brest : création d'app iOS & Android sur mesure en React Native. De l'idée au déploiement sur l'App Store et Google Play. Devis gratuit sous 24h.",
  keywords: [
    "agence application mobile Brest",
    "agence application mobile",
    "agence de création d'application Brest",
    "agence création application mobile Brest",
    "agence développement application mobile Brest",
    "création application mobile Brest",
    "développeur mobile Brest",
    "développeur application mobile Brest",
    "agence développement mobile Finistère",
    "créer une application mobile",
    "je veux une application mobile",
    "j'ai une idée d'application mobile",
    "faire développer une application mobile",
    "développeur application mobile freelance",
    "création application mobile iOS Android",
    "application mobile sur mesure",
    "développeur mobile Finistère",
    "développeur mobile Bretagne",
    "agence mobile Bretagne",
  ],
  alternates: { canonical: "https://breizhapp.tech/services/application-mobile" },
  openGraph: {
    title: "Agence application mobile à Brest — iOS & Android | BreizhApp",
    description:
      "Vous avez une idée d'application mobile ? Agence mobile à Brest : app iOS & Android sur mesure en React Native, publiée sur les stores. Devis gratuit sous 24h.",
    url: "https://breizhapp.tech/services/application-mobile",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const faq = [
  {
    q: "Quelle est la meilleure agence d'application mobile à Brest ?",
    a: "BreizhApp est une agence de développement mobile basée à Brest, spécialisée dans la création d'applications iOS & Android sur mesure en React Native. Contrairement aux grandes agences parisiennes, vous échangez directement avec le développeur qui code votre app, sans chef de projet ni intermédiaire commercial.",
  },
  {
    q: "Combien coûte la création d'une application mobile à Brest ?",
    a: "Le tarif dépend des fonctionnalités souhaitées : paiement en ligne, notifications push, espace admin, authentification, réservation. Une application simple coûte nettement moins cher qu'un projet avec paiement et back-office complet. Contactez BreizhApp pour un devis gratuit et personnalisé sous 24h.",
  },
  {
    q: "Combien de temps pour développer une application mobile ?",
    a: "Entre 2 et 5 semaines selon la complexité, de la conception au déploiement sur l'App Store et Google Play. Les applications simples (catalogue, réservation) sont livrées en 2 à 3 semaines, les projets avec paiement et espace admin en 4 à 5 semaines.",
  },
  {
    q: "Application native ou cross-platform : que choisir ?",
    a: "Pour la grande majorité des projets (commerces, restaurants, services, réservation), le cross-platform React Native est le meilleur choix : une seule base de code pour iOS et Android, un coût divisé par deux et des performances proches du natif. Le développement 100% natif ne se justifie que pour des besoins très spécifiques comme les jeux 3D exigeants.",
  },
  {
    q: "Pourrai-je modifier le contenu de mon application moi-même ?",
    a: "Oui. Chaque application BreizhApp inclut un panel d'administration depuis lequel vous gérez vos contenus, produits, horaires ou tarifs en autonomie, sans repasser par un développeur. Une formation à l'outil est incluse à la livraison.",
  },
  {
    q: "Que se passe-t-il après la livraison de l'application ?",
    a: "L'application est publiée sur l'App Store et Google Play, et vous êtes formé à son administration. L'hébergement, le support et les mises à jour de compatibilité (nouvelles versions iOS et Android) sont assurés en continu.",
  },
  {
    q: "Travaillez-vous uniquement à Brest ?",
    a: "L'agence est basée à Brest et se déplace dans tout le Finistère : Guipavas, Le Relecq-Kerhuon, Plougastel, Landerneau, Quimper, Morlaix. Les projets à distance sont également courants, en Bretagne (Rennes, Lorient, Vannes) comme dans toute la France, avec des points d'avancement en visio.",
  },
  {
    q: "Pourquoi choisir une agence locale à Brest plutôt qu'une agence parisienne ?",
    a: "Une agence brestoise permet des rendez-vous en présentiel, une meilleure réactivité et des tarifs plus accessibles que les agences parisiennes, pour une expertise technique équivalente en React Native. Et vous soutenez l'économie numérique locale.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://breizhapp.tech/services/application-mobile#service",
      name: "Agence application mobile à Brest — création iOS & Android",
      description:
        "Agence application mobile à Brest : création d'applications iOS & Android sur mesure en React Native, de la conception au déploiement sur l'App Store et Google Play.",
      provider: { "@id": "https://breizhapp.tech/#business" },
      areaServed: [
        { "@type": "City", name: "Brest" },
        { "@type": "City", name: "Quimper" },
        { "@type": "City", name: "Landerneau" },
        { "@type": "City", name: "Morlaix" },
        { "@type": "AdministrativeArea", name: "Finistère" },
        { "@type": "AdministrativeArea", name: "Bretagne" },
        { "@type": "Country", name: "France" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://breizhapp.tech" },
        { "@type": "ListItem", position: 2, name: "Agence application mobile Brest", item: "https://breizhapp.tech/services/application-mobile" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

const features = [
  { title: "iOS & Android", desc: "Une seule codebase React Native, disponible sur l'App Store et Google Play." },
  { title: "Paiement intégré", desc: "Stripe pour les paiements en ligne, abonnements et in-app purchase." },
  { title: "Notifications push", desc: "Relancez vos clients avec des notifications ciblées et programmées." },
  { title: "Panel d'administration", desc: "Gérez produits, commandes, horaires et contenus en autonomie, sans développeur." },
  { title: "Authentification", desc: "Connexion sécurisée par email, Google ou Apple Sign-In." },
  { title: "Déploiement inclus", desc: "Publication sur l'App Store et Google Play, formation à l'outil incluse." },
];

const secteurEmojis: Record<string, string> = {
  restaurant: "🍽️",
  coiffeur: "💇",
  hotel: "🏨",
  "salle-de-sport": "🏋️",
  "maraicher-commerce-local": "🥕",
  "jeu-mobile": "🎮",
  "portfolio-vitrine": "💼",
  "reservation-prise-de-rdv": "📅",
  "livraison-logistique": "🚚",
  "reseau-social-communaute": "💬",
  "sante-bien-etre": "🩺",
  "education-formation": "🎓",
  "evenementiel-billetterie": "🎟️",
};

const technologies = [
  { name: "React Native", desc: "Framework mobile de Meta — une codebase, deux plateformes" },
  { name: "Expo", desc: "Builds, mises à jour OTA et déploiement accéléré" },
  { name: "TypeScript", desc: "Code typé, robuste et maintenable dans la durée" },
  { name: "Firebase", desc: "Base de données temps réel, authentification, stockage" },
  { name: "Stripe", desc: "Paiement en ligne sécurisé, abonnements, conformité PCI-DSS" },
  { name: "Node.js", desc: "APIs et logique serveur sur mesure quand le projet l'exige" },
];

const process = [
  { step: "01", title: "Cadrage du projet", desc: "On échange à Brest ou en visio sur votre idée, vos utilisateurs et vos fonctionnalités clés. Devis détaillé sous 24h." },
  { step: "02", title: "Design & maquettes", desc: "Wireframes puis interface soignée aux couleurs de votre marque, validée avec vous avant le développement." },
  { step: "03", title: "Développement React Native", desc: "Une seule codebase pour iOS et Android, points d'avancement réguliers et versions de test sur votre téléphone." },
  { step: "04", title: "Tests, déploiement & formation", desc: "Tests sur appareils réels, publication sur l'App Store et Google Play, formation au panel admin incluse." },
];

const testimonials = [
  {
    author: "Forno Pizzeria",
    text: "Application livrée en 3 semaines, exactement ce qu'on voulait. On a récupéré nos commandes Uber Eats dès le premier mois.",
  },
  {
    author: "Cliente commerçante · Brest",
    text: "Développeur très réactif, devis respecté, application fonctionnelle et bien designée. Je recommande BreizhApp sans hésiter.",
  },
];

const villes = ["Brest", "Guipavas", "Le Relecq-Kerhuon", "Plougastel", "Landerneau", "Quimper", "Morlaix", "Rennes", "Lorient", "Vannes"];

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
          <span className="text-black font-bold">Agence application mobile Brest</span>
        </nav>

        {/* Hero */}
        <section className="border-b-[3px] border-black py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-gray-400 mb-4">// agence application mobile · Brest · Finistère</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#FFE234] brutal-border p-3">
                <Smartphone size={32} />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">Agence application mobile à Brest</h1>
                <p className="text-xl font-bold text-gray-500 mt-1">Création d&apos;app iOS & Android · React Native · Sur mesure</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
              Vous avez une idée d&apos;application mobile ? BreizhApp est une agence de développement mobile basée à Brest, en Finistère.
              Je conçois et développe votre application iOS & Android sur mesure — design, fonctionnalités, paiement, notifications push —
              et je la publie sur l&apos;App Store et Google Play. Vous échangez directement avec le développeur qui code votre app,
              du premier rendez-vous à la mise en ligne.
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
              <span className="brutal-border px-3 py-1 bg-white">✓ Livraison 2-5 semaines</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Devis gratuit sous 24h</span>
            </div>
          </div>
        </section>

        {/* Chiffres clés */}
        <section className="border-b-[3px] border-black bg-[#0A0A0A] py-10 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: "2-5", label: "semaines de la conception à la mise en ligne" },
              { n: "1", label: "interlocuteur unique : le développeur qui code votre app" },
              { n: "2", label: "stores couverts (App Store & Google Play) avec 1 seule codebase" },
              { n: "24h", label: "pour recevoir votre devis gratuit et détaillé" },
            ].map(({ n, label }) => (
              <div key={label} className="border-2 border-gray-800 p-5 text-center hover:border-[#FFE234] transition-colors">
                <div className="text-3xl font-black text-[#FFE234]">{n}</div>
                <div className="text-xs font-bold text-gray-400 mono mt-2 leading-relaxed">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Ce qui est <span className="bg-[#FFE234] px-2 brutal-border">inclus</span> dans votre application</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Chaque création d&apos;application mobile BreizhApp comprend les fonctionnalités essentielles à un lancement réussi — sans option cachée.
            </p>
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

        {/* Secteurs */}
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-2">Une application mobile pour chaque secteur d&apos;activité</h2>
            <p className="text-gray-400 mb-8 max-w-2xl text-sm">
              Restaurateurs, coiffeurs, hôteliers, commerçants, coachs : l&apos;agence développe des applications adaptées aux besoins concrets de votre métier.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {SECTEURS.map((s) => (
                <Link
                  key={s.slug}
                  href={s.href}
                  className="border-2 border-gray-800 p-4 hover:border-[#FFE234] hover:bg-[#FFE234] hover:text-[#0A0A0A] transition-all group"
                >
                  <div className="text-2xl mb-2">{secteurEmojis[s.slug] ?? "📱"}</div>
                  <p className="font-bold text-sm text-[#FFFBF0] group-hover:text-[#0A0A0A] leading-snug">App {s.label.toLowerCase()} →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Les <span className="bg-[#FFE234] px-2 brutal-border">technologies</span> de l&apos;agence</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Un stack moderne et éprouvé, le même que celui des grandes applications que vous utilisez au quotidien — pas de solution no-code fragile ni de template générique.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {technologies.map(({ name, desc }) => (
                <div key={name} className="brutal-border bg-white p-5">
                  <h3 className="font-bold mono mb-1">{name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Démo réelle */}
        <section className="py-16 px-4 border-y-[3px] border-black bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-[#FF6B35] mb-2">// exemple concret</p>
            <h2 className="text-2xl font-bold mb-2">
              Une vraie application <span className="bg-[#FFE234] brutal-border px-2">créée par l&apos;agence</span>
            </h2>
            <p className="text-sm text-gray-500 mono mb-8">
              Naviguez librement dans la démo — c&apos;est l&apos;application réelle d&apos;un restaurant : commande, menu, paiement.
            </p>
            <div className="brutal-border brutal-shadow bg-[#1a1a1a] rounded-t-xl p-3 pb-0">
              <div className="bg-[#2d2d2d] rounded-t-lg px-4 py-2 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 bg-[#3d3d3d] rounded px-3 py-1 mono text-xs text-gray-400 truncate">
                  demo.pizzeria.breizhapp.tech
                </div>
              </div>
              <div className="w-full overflow-hidden" style={{ height: "520px" }}>
                <iframe
                  src="https://demo.pizzeria.breizhapp.tech/"
                  title="Démo application restaurant créée par l'agence BreizhApp à Brest"
                  className="w-full h-full border-0 block"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="brutal-border border-t-0 bg-[#1a1a1a] h-4 rounded-b-sm" />
            <div className="brutal-border border-t-0 bg-[#2d2d2d] h-3 mx-8 rounded-b-md" />
          </div>
        </section>

        {/* Processus */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Comment se déroule la <span className="bg-[#FFE234] px-2 brutal-border">création de votre app</span></h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Un processus clair en 4 étapes, de votre idée d&apos;application à sa publication sur les stores.
            </p>
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

        {/* Témoignages */}
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-8">Ils ont lancé leur application avec l&apos;agence</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {testimonials.map(({ author, text }) => (
                <div key={author} className="border-2 border-gray-800 p-6 hover:border-[#FFE234] transition-colors">
                  <Quote size={20} className="text-[#FFE234] mb-3" />
                  <p className="text-[#FFFBF0] leading-relaxed mb-4">{text}</p>
                  <p className="mono text-xs font-bold text-gray-400">— {author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi une agence à Brest + zone d'intervention */}
        <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Pourquoi choisir une <span className="bg-[#FFE234] px-2 brutal-border">agence application mobile à Brest</span> ?</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mb-4">
              Faire appel à une agence de création d&apos;application locale, basée à Brest et couvrant tout le Finistère et la Bretagne,
              c&apos;est la garantie d&apos;échanger directement avec la personne qui développe votre app — sans chef de projet ni
              intermédiaire commercial. Les rendez-vous en présentiel sont possibles à Brest et dans les environs, la réactivité
              est immédiate, et les tarifs restent nettement plus accessibles qu&apos;une agence parisienne pour une expertise
              technique équivalente en React Native.
            </p>
            <p className="text-gray-600 leading-relaxed max-w-2xl mb-8">
              Que vous soyez restaurateur à Brest, commerçant à Quimper ou porteur de projet à Rennes, le déroulement est le même :
              un devis détaillé sous 24h, des points d&apos;avancement réguliers et une application publiée à votre nom sur les stores.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={18} className="text-[#FF6B9D]" />
              <h3 className="font-bold">Zone d&apos;intervention de l&apos;agence</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {villes.map((v) => (
                <span key={v} className="brutal-border px-3 py-1 bg-white mono text-sm">{v}</span>
              ))}
              <span className="brutal-border px-3 py-1 bg-[#FFE234] mono text-sm font-bold">+ toute la France à distance</span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Questions fréquentes — agence application mobile à Brest</h2>
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
              <h2 className="text-2xl font-bold">Prêt à lancer votre application mobile ?</h2>
              <p className="text-sm mt-1">Devis gratuit · Réponse sous 24h · Sans engagement · Agence basée à Brest</p>
            </div>
            <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3 inline-flex items-center gap-2">
              Démarrer maintenant <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <RelatedArticles service="application-mobile" />

      </main>
      <Footer />
    </>
  );
}

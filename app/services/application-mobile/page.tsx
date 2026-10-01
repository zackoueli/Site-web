import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedArticles from "@/components/RelatedArticles";
import RelatedProjects from "@/components/RelatedProjects";
import FAQItem from "@/components/FAQItem";
import Contact from "@/components/Contact";
import PhotoCarousel from "@/components/PhotoCarousel";
import { SECTEURS } from "@/lib/taxonomy";
import { Smartphone, CheckCircle2, ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Agence application mobile à Brest, iOS & Android | BreizhApp",
  description:
    "Développeur freelance à Brest, je crée votre application mobile iOS & Android : design, paiement in-app, notifications, espace client et admin. Devis 24h.",
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
    title: "Agence application mobile à Brest, iOS & Android | BreizhApp",
    description:
      "Développeur freelance à Brest, je crée votre application mobile iOS & Android : design, paiement in-app, notifications, espace client et admin. Devis 24h.",
    url: "https://breizhapp.tech/services/application-mobile",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const faq = [
  {
    q: "Quelle est la meilleure agence d'application mobile à Brest ?",
    a: "BreizhApp, c'est moi : Enzo, développeur mobile basé à Brest, spécialisé dans la création d'applications iOS & Android sur mesure en React Native. Vous échangez directement avec la personne qui code votre app, sans chef de projet ni intermédiaire commercial, du premier rendez-vous à la publication sur les stores.",
  },
  {
    q: "Combien coûte la création d'une application mobile à Brest ?",
    a: "À partir de 4 000 €, pour une application iOS & Android avec panel admin et authentification. Le tarif final dépend des fonctionnalités souhaitées : paiement en ligne, notifications push, réservation. Contactez BreizhApp pour un devis gratuit et personnalisé sous 24h.",
  },
  {
    q: "Combien de temps pour développer une application mobile ?",
    a: "Entre 4 et 8 semaines selon la complexité, de la conception au déploiement sur l'App Store et Google Play. Les applications simples (catalogue, réservation) sont livrées en 4 à 5 semaines, les projets avec paiement et espace admin en 6 à 8 semaines.",
  },
  {
    q: "Application native ou cross-platform : que choisir ?",
    a: "Pour la grande majorité des projets (commerces, restaurants, services, réservation), le cross-platform React Native est le meilleur choix : une seule base de code pour iOS et Android, un coût divisé par deux et des performances proches du natif. Le développement 100% natif ne se justifie que pour des besoins très spécifiques comme les jeux 3D exigeants.",
  },
  {
    q: "Pourrai-je modifier le contenu de mon application moi-même ?",
    a: "Oui. Chaque application que je développe inclut un panel d'administration depuis lequel vous gérez vos contenus, produits, horaires ou tarifs en autonomie, sans repasser par un développeur. Une formation à l'outil est incluse à la livraison.",
  },
  {
    q: "Que se passe-t-il après la livraison de l'application ?",
    a: "L'application est publiée sur l'App Store et Google Play, et vous êtes formé à son administration. L'hébergement, le support et les mises à jour de compatibilité (nouvelles versions iOS et Android) sont assurés en continu.",
  },
  {
    q: "Travaillez-vous uniquement à Brest ?",
    a: "Je suis basé à Brest et je me déplace dans tout le Finistère : Guipavas, Le Relecq-Kerhuon, Plougastel, Landerneau, Quimper, Morlaix. Les projets à distance sont également courants, en Bretagne (Rennes, Lorient, Vannes) comme dans toute la France, avec des points d'avancement en visio.",
  },
  {
    q: "Pourquoi choisir une agence application mobile locale à Brest ?",
    a: "Une agence brestoise permet des rendez-vous en présentiel, une grande réactivité et un suivi direct avec le développeur de votre app. Et vous soutenez l'économie numérique locale du Finistère.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://breizhapp.tech/services/application-mobile#service",
      name: "Agence application mobile à Brest, création iOS & Android",
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
  { name: "React Native", desc: "Framework mobile de Meta, une codebase, deux plateformes" },
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

const appPhotos = [
  { src: "/services/application-mobile/app-mobile-1.jpg", alt: "Livret d'accueil Bunkly sur iPhone : accès, horaires, WiFi et météo du logement" },
  { src: "/services/application-mobile/app-mobile-2.jpg", alt: "Livret d'accueil Bunkly, thème photo avec tuiles accès, WiFi et marées" },
  { src: "/services/application-mobile/app-mobile-3.jpg", alt: "Services proposés aux voyageurs avec achat en ligne du petit déjeuner" },
  { src: "/services/application-mobile/app-mobile-4.jpg", alt: "Écran d'accueil d'un livret d'accueil avec navigation par onglets" },
  { src: "/services/application-mobile/app-mobile-5.jpg", alt: "Présentation du logement et message de bienvenue des hôtes" },
  { src: "/services/application-mobile/app-mobile-6.jpg", alt: "Livret d'accueil avec itinéraire Google Maps et Waze" },
  { src: "/services/application-mobile/app-mobile-7.jpg", alt: "Application de recrutement : fiche profil d'un candidat" },
];

const villes = ["Brest", "Guipavas", "Le Relecq-Kerhuon", "Plougastel", "Landerneau", "Quimper", "Morlaix", "Rennes", "Lorient", "Vannes"];

export default function AppMobilePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        {/* Breadcrumb */}
        <nav className="max-w-6xl mx-auto px-4 pt-6 mono text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
          <span>/</span>
          <span className="text-black font-bold">Agence application mobile Brest</span>
        </nav>

        {/* Hero */}
        <section className="border-b-[3px] border-black py-12 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[3fr_2fr] gap-12 items-center">
            <div>
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
                Vous avez une idée d&apos;application mobile ? Je conçois et développe votre application iOS & Android sur mesure
                (design, paiement, notifications push, espace client et admin) et je la publie sur l&apos;App Store et Google Play.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">
                  Demander un devis gratuit
                </a>
                <a href="/portfolio" className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-8 py-4">
                  Voir les réalisations →
                </a>
              </div>
            </div>
            <PhotoCarousel slides={appPhotos} caption="Applications que j'ai développées : livrets d'accueil Bunkly pour locations de vacances, et application de recrutement." />
          </div>
        </section>

        {/* En bref */}
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[2fr_1fr] gap-10">
            <div className="border-l-4 border-[#FFE234] pl-6">
              <p className="mono text-sm font-bold text-[#FFE234] mb-4">EN BREF</p>
              <p className="text-gray-300 leading-relaxed">
                Je crée des applications mobiles iOS & Android sur mesure en React Native : une seule base de code pour
                les deux stores, un panel admin pour gérer vos contenus, et la publication sur l&apos;App Store et Google
                Play prise en charge de A à Z. Je m&apos;appelle Enzo, développeur freelance basé à Brest, et
                j&apos;accompagne des restaurateurs, commerçants, TPE et porteurs de projet dans tout le Finistère et la
                Bretagne, sur place ou à distance partout en France. Une application avec panel admin et authentification
                démarre à 4 000 € et se livre en 4 à 8 semaines selon la complexité. Vous êtes propriétaire du code et
                de l&apos;application publiée à votre nom, et vous échangez directement avec la personne qui la développe,
                sans intermédiaire. Devis détaillé sous 24h après un cadrage gratuit.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="border-t border-gray-800 pt-4">
                <p className="mono text-xs font-bold text-gray-500 uppercase mb-1">Livraison</p>
                <p className="text-xl font-bold text-white">4 à 8 semaines</p>
              </div>
              <div className="border-t border-gray-800 pt-4">
                <p className="mono text-xs font-bold text-gray-500 uppercase mb-1">Budget indicatif</p>
                <p className="text-xl font-bold text-white">Dès 4 000 €</p>
              </div>
              <div className="border-t border-gray-800 pt-4">
                <p className="mono text-xs font-bold text-gray-500 uppercase mb-1">Premier retour</p>
                <p className="text-xl font-bold text-white">Sous 24h</p>
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Ce qui est <span className="bg-[#FFE234] px-2 brutal-border">inclus</span> dans votre application</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Chaque création d&apos;application mobile BreizhApp comprend les fonctionnalités essentielles à un lancement réussi, sans option cachée.
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
              Restaurateurs, coiffeurs, hôteliers, commerçants, coachs : je développe des applications adaptées aux besoins concrets de votre métier.
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
            <h2 className="text-2xl font-bold mb-2">Les <span className="bg-[#FFE234] px-2 brutal-border">technologies</span> que j&apos;utilise</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Un stack moderne et éprouvé, le même que celui des grandes applications que vous utilisez au quotidien, pas de solution no-code fragile ni de template générique.
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

        {/* Contenu détaillé */}
        <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px] border-b-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Créer une <span className="bg-[#FFE234] px-2 brutal-border">application mobile sur mesure</span></h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              Une application mobile sur mesure ne se résume pas à un design sur smartphone : voici ce qu&apos;implique
              concrètement sa conception, de la première maquette à la publication sur les stores.
            </p>

            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-bold mb-3">React Native : une seule application pour iOS et Android</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  React Native permet de développer une seule base de code qui fonctionne à la fois sur iPhone et sur
                  Android, avec des performances proches du natif. Pour la grande majorité des projets (commerces,
                  restaurants, services, réservation), c&apos;est le choix le plus pertinent : il divise le coût de
                  développement par deux par rapport à deux applications natives séparées, tout en garantissant une
                  expérience fluide et des mises à jour synchronisées sur les deux plateformes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Panel d&apos;administration</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Chaque application inclut un panel d&apos;administration, un espace privé accessible depuis un
                  navigateur, où vous gérez vos produits, vos commandes, vos horaires ou le contenu affiché dans
                  l&apos;application, sans dépendre d&apos;un développeur ni republier l&apos;app sur les stores à
                  chaque modification. Une formation à l&apos;outil est incluse à la livraison, pour que vous restiez
                  autonome sur la gestion quotidienne de votre application.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Paiement en ligne et notifications push</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Le paiement en ligne est intégré via Stripe : achats, abonnements ou in-app purchase, avec une
                  conformité PCI-DSS garantie. Les notifications push permettent de relancer vos utilisateurs avec des
                  messages ciblés (promotion, rappel de panier abandonné, mise à jour d&apos;une commande) directement
                  sur leur téléphone, un canal bien plus efficace que l&apos;email pour capter l&apos;attention.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Authentification sécurisée</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  La connexion à l&apos;application peut se faire par email et mot de passe, Google Sign-In ou Apple
                  Sign-In selon les habitudes de vos utilisateurs. Les données de connexion sont chiffrées et les
                  sessions sécurisées, pour protéger les comptes de vos clients dès le premier lancement de
                  l&apos;application.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Publication sur l&apos;App Store et Google Play</h3>
                <p className="text-gray-700 leading-relaxed">
                  La publication sur les stores est un processus à part entière, avec ses propres exigences techniques
                  et éditoriales (comptes développeur, fiches store, règles de validation Apple et Google). Cette étape
                  est prise en charge de A à Z : création des fiches store, captures d&apos;écran, soumission et suivi
                  de la validation, jusqu&apos;à ce que votre application soit disponible au téléchargement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Budget */}
        <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px] border-b-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Combien coûte une <span className="bg-[#FFE234] px-2 brutal-border">application mobile sur mesure</span> ?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Le prix dépend des fonctionnalités réellement nécessaires à votre activité, pas d&apos;un forfait figé. La fourchette ci-dessous sert de repère : le devis détaillé arrive sous 24h après notre échange.
            </p>
            <div className="brutal-border brutal-shadow bg-white p-8 max-w-md">
              <p className="mono text-sm font-bold text-gray-400 mb-2">Application mobile sur mesure</p>
              <p className="text-4xl font-bold mb-1">À partir de 4 000 €</p>
              <p className="text-sm text-gray-500 mb-4">Livrée en 4 à 8 semaines selon la complexité</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-[#00D4AA] mt-0.5 shrink-0" /> iOS & Android, panel admin et authentification inclus</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-[#00D4AA] mt-0.5 shrink-0" /> Publication sur l&apos;App Store et Google Play incluse</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-[#00D4AA] mt-0.5 shrink-0" /> Paiement en ligne et notifications push en option</li>
              </ul>
              <a href="#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3 inline-flex items-center gap-2 mt-6">
                Demander ce devis <ArrowRight size={16} />
              </a>
            </div>
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

        {/* Pourquoi une agence à Brest + zone d'intervention */}
        <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Pourquoi choisir une <span className="bg-[#FFE234] px-2 brutal-border">agence application mobile à Brest</span> ?</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mb-4">
              Faire appel à une agence de création d&apos;application locale, basée à Brest et couvrant tout le Finistère et la Bretagne,
              c&apos;est la garantie d&apos;échanger directement avec la personne qui développe votre app, sans chef de projet ni
              intermédiaire commercial. Les rendez-vous en présentiel sont possibles à Brest et dans les environs, la réactivité
              est immédiate, et chaque projet est suivi de bout en bout par le même développeur, de la première maquette à la
              publication sur les stores.
            </p>
            <p className="text-gray-600 leading-relaxed max-w-2xl mb-8">
              Que vous soyez restaurateur à Brest, commerçant à Quimper ou porteur de projet à Rennes, le déroulement est le même :
              un devis détaillé sous 24h, des points d&apos;avancement réguliers et une application publiée à votre nom sur les stores.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={18} className="text-[#FF6B9D]" />
              <h3 className="font-bold">Ma zone d&apos;intervention</h3>
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
            <h2 className="text-2xl font-bold mb-8">Questions fréquentes : agence application mobile à Brest</h2>
            <div className="flex flex-col gap-3">
              {faq.map(({ q, a }) => (
                <FAQItem key={q} q={q} a={a} />
              ))}
            </div>
          </div>
        </section>

        <RelatedProjects service="application-mobile" />

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto brutal-border brutal-shadow bg-[#FFE234] p-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Prêt à lancer votre application mobile ?</h2>
              <p className="text-sm mt-1">Devis gratuit · Réponse sous 24h · Sans engagement · Basé à Brest</p>
            </div>
            <a href="#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3 inline-flex items-center gap-2">
              Démarrer maintenant <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <RelatedArticles service="application-mobile" />

        <Contact />

      </main>
      <Footer />
    </>
  );
}

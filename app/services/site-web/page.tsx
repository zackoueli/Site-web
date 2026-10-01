import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedArticles from "@/components/RelatedArticles";
import Contact from "@/components/Contact";
import RelatedProjects from "@/components/RelatedProjects";
import FAQItem from "@/components/FAQItem";
import { Globe, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Création site web sur mesure · Brest | BreizhApp",
  description: "Création de sites web vitrine, landing page et blog avec Next.js. Panel admin, dashboard, SEO optimisé, livraison en 2 à 4 semaines. Basé à Brest.",
  keywords: [
    "création site web brest",
    "création site web sur mesure",
    "site web vitrine brest",
    "développeur web freelance brest",
    "site web professionnel next.js",
    "site web restaurant brest",
    "création site internet brest",
    "panel admin site web",
    "dashboard sur mesure",
    "SEO optimisé site web",
  ],
  alternates: { canonical: "https://breizhapp.tech/services/site-web" },
  openGraph: {
    title: "Création site web sur mesure · Brest",
    description: "Sites web vitrine, landing page et blog sur mesure avec Next.js. Panel admin, dashboard, SEO optimisé, livraison en 2-4 semaines.",
    url: "https://breizhapp.tech/services/site-web",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const faq = [
  {
    q: "Comment se déroule la création d'un site web sur mesure ?",
    a: "Le projet se déroule en 4 étapes : cadrage de vos besoins et de votre cible, maquettes et design validés avec vous, développement avec Next.js, puis tests, SEO et mise en ligne. Vous suivez l'avancement à chaque étape, sans intermédiaire.",
  },
  {
    q: "Combien de temps pour créer un site web professionnel ?",
    a: "Entre 2 et 4 semaines selon la complexité. Un site vitrine simple (présentation, contact) est livré en 2 semaines. Un site avec blog, panel admin ou dashboard prend 3 à 4 semaines.",
  },
  {
    q: "Le site est-il livré avec un panel admin ?",
    a: "Oui, sur demande. Un panel admin vous permet de modifier vos textes, images, tarifs ou articles de blog vous-même, sans toucher au code et sans dépendre d'un développeur. Une formation à l'outil est incluse à la livraison.",
  },
  {
    q: "Qu'est-ce qu'un dashboard et pourquoi en avoir un ?",
    a: "Un dashboard est un tableau de bord qui centralise vos données clés : demandes de contact, statistiques de visite, commandes ou réservations. Il est utile dès que votre site collecte des informations que vous devez suivre au quotidien (formulaires, avis, réservations).",
  },
  {
    q: "Le site sera-t-il vraiment bien référencé sur Google (SEO) ?",
    a: "Chaque site est construit avec Next.js, un framework pensé pour le SEO : chargement rapide, structure HTML sémantique, balises meta et Open Graph optimisées, sitemap et données structurées. Le contenu de vos pages est également rédigé en tenant compte des mots-clés recherchés par vos clients.",
  },
  {
    q: "Quelles fonctionnalités sont possibles sur mon site ?",
    a: "Formulaire de contact, blog intégré, prise de rendez-vous, panel admin, dashboard de suivi, paiement en ligne, espace client, multilingue, ou connexion à des outils tiers (CRM, newsletter). Chaque fonctionnalité est développée sur mesure selon vos besoins réels.",
  },
  {
    q: "Le site sera-t-il bien affiché sur mobile ?",
    a: "Oui, tous les sites sont 100% responsive : ils s'adaptent automatiquement à toutes les tailles d'écran (mobile, tablette, desktop) et sont testés sur les principaux navigateurs et appareils avant la mise en ligne.",
  },
  {
    q: "Que se passe-t-il après la mise en ligne du site ?",
    a: "Le site est déployé sur votre hébergement ou sur Vercel, avec votre nom de domaine configuré. Le support, les mises à jour de sécurité et les évolutions futures sont assurés en continu si vous le souhaitez.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://breizhapp.tech" },
        { "@type": "ListItem", position: 2, name: "Création de site web Brest", item: "https://breizhapp.tech/services/site-web" },
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
  { title: "Design sur mesure", desc: "Un design unique adapté à votre identité visuelle, pas un template générique." },
  { title: "SEO optimisé", desc: "Structure, balises et contenu pensés pour apparaître dans Google dès le lancement." },
  { title: "100% responsive", desc: "Parfait sur mobile, tablette et desktop, testé sur tous les appareils." },
  { title: "Blog intégré", desc: "Publiez vos articles et actualités pour alimenter votre référencement naturel." },
  { title: "Formulaire de contact", desc: "Recevez les demandes directement par email, sans outil tiers payant." },
  { title: "Déploiement inclus", desc: "Mise en ligne sur votre hébergement ou sur Vercel, domaine configuré." },
];

const process = [
  { step: "01", title: "Cadrage du projet", desc: "On échange sur votre activité, votre cible et les fonctionnalités utiles (panel admin, dashboard, paiement...). Devis détaillé sous 24h." },
  { step: "02", title: "Design & maquettes", desc: "Wireframes puis interface soignée aux couleurs de votre marque, validée avec vous avant le développement." },
  { step: "03", title: "Développement Next.js", desc: "Code sur mesure, structure pensée pour le SEO dès le départ, points d'avancement réguliers." },
  { step: "04", title: "SEO, tests & mise en ligne", desc: "Optimisation des balises et du contenu, tests sur tous les appareils, déploiement et formation au panel admin si inclus." },
];


const useCases = [
  { emoji: "🏠", title: "Site vitrine", desc: "Présentation de votre activité, vos services, vos tarifs et vos coordonnées." },
  { emoji: "📣", title: "Landing page", desc: "Page d'atterrissage pour une offre, un produit ou une campagne marketing." },
  { emoji: "✍️", title: "Blog professionnel", desc: "Partagez votre expertise et attirez des clients via le contenu." },
  { emoji: "📋", title: "Site avec devis en ligne", desc: "Formulaire de demande de devis intégré, relié à votre email ou CRM." },
];

export default function SiteWebPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        {/* Breadcrumb */}
        <nav className="max-w-6xl mx-auto px-4 pt-6 mono text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
          <span>/</span>
          <span className="text-black font-bold">Création de site web Brest</span>
        </nav>

        {/* Hero */}
        <section className="border-b-[3px] border-black py-12 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#0A0A0A] brutal-border p-3">
                  <Globe size={32} className="text-[#FFFBF0]" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">Création de site web à Brest</h1>
                  <p className="text-xl font-bold text-gray-500 mt-1">Vitrine · Landing page · Blog</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
                Un site web professionnel, rapide et bien référencé pour votre activité.
                Design unique, contenu optimisé SEO, panel admin pour modifier vos contenus vous-même.
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
            <div className="brutal-border brutal-shadow bg-white overflow-hidden">
              <Link href="/portfolio/demo-paysagiste" className="block overflow-hidden">
                <div className="flex items-center gap-1.5 px-3 py-2 border-b-[3px] border-black bg-[#1a1a1a]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src="/portfolio/demo-paysagiste.png"
                    alt="Page d'accueil du site vitrine Paradis Vert, paysagiste professionnel"
                    fill
                    className="object-cover object-top transition-transform duration-300 hover:scale-105"
                    priority
                  />
                </div>
              </Link>
              <p className="text-xs text-gray-500 px-4 py-3 border-t-[3px] border-black">
                Site vitrine Paradis Vert pour un paysagiste, avec galerie de chantiers, devis en ligne et panel admin.
              </p>
            </div>
          </div>
        </section>

        {/* En bref */}
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[2fr_1fr] gap-10">
            <div className="border-l-4 border-[#FFE234] pl-6">
              <p className="mono text-sm font-bold text-[#FFE234] mb-4">EN BREF</p>
              <p className="text-gray-300 leading-relaxed">
                Je crée des sites web sur mesure : sites vitrines, landing pages et blogs professionnels, pensés pour
                être trouvés sur Google et transformer vos visiteurs en demandes de contact. Je m&apos;appelle Enzo,
                développeur freelance basé à Brest, et j&apos;accompagne des TPE, artisans, restaurateurs et commerçants
                dans tout le Finistère et la Bretagne, sur place ou à distance partout en France. Un site web sur mesure
                démarre à 1 500 € et se livre en 2 à 4 semaines selon les fonctionnalités. Vous êtes propriétaire du site
                et de votre nom de domaine, et vous échangez directement avec la personne qui le développe, sans
                intermédiaire. Devis détaillé sous 24h après un premier échange gratuit.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="border-t border-gray-800 pt-4">
                <p className="mono text-xs font-bold text-gray-500 uppercase mb-1">Livraison</p>
                <p className="text-xl font-bold text-white">2 à 4 semaines</p>
              </div>
              <div className="border-t border-gray-800 pt-4">
                <p className="mono text-xs font-bold text-gray-500 uppercase mb-1">Budget indicatif</p>
                <p className="text-xl font-bold text-white">Dès 1 500 €</p>
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

        {/* Fonctionnalités avancées */}
        <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px] border-b-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Fonctionnalités <span className="bg-[#FFE234] px-2 brutal-border">avancées</span> possibles</h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              Au-delà du site vitrine simple, chaque site web peut intégrer les fonctionnalités suivantes, développées sur mesure
              selon les besoins réels de votre activité.
            </p>

            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-bold mb-3">Panel admin</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Le panel admin est un espace privé, accessible par identifiants, depuis lequel vous gérez le contenu de votre
                  site web sans écrire une seule ligne de code. Vous modifiez vos textes, vos images, vos tarifs, vos horaires ou
                  publiez vos articles de blog directement depuis une interface simple, pensée pour être utilisable par tout le
                  monde, développeur ou non. C&apos;est la fonctionnalité indispensable pour rester autonome sur votre site après
                  la livraison : plus besoin de me solliciter pour changer un prix ou ajouter une photo. Une formation à l&apos;outil
                  est incluse au moment de la mise en ligne, et le panel admin est développé sur mesure en fonction du type de
                  contenu que vous avez besoin de modifier : catalogue produits, menu de restaurant, actualités, portfolio de
                  réalisations, etc.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Dashboard de suivi</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Un dashboard est un tableau de bord qui centralise, en un seul coup d&apos;œil, les données importantes générées
                  par votre site : nombre de demandes de contact reçues, statistiques de visite, liste des réservations ou des
                  commandes en cours, avis clients, ou encore suivi des conversions issues de vos campagnes marketing. Il devient
                  particulièrement utile dès que votre site web collecte des informations que vous devez traiter ou suivre au
                  quotidien : formulaires de devis, prises de rendez-vous, ventes en ligne. Plutôt que de consulter votre boîte
                  mail ou plusieurs outils séparés, vous retrouvez tout au même endroit, avec des indicateurs clairs et actualisés
                  en temps réel.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">SEO technique avancé</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Un site bien référencé sur Google ne se résume pas à un joli design : il repose sur des fondations techniques
                  solides. Chaque site que je développe est construit avec Next.js, un framework spécifiquement reconnu pour ses
                  performances SEO : rendu côté serveur, temps de chargement très rapide, structure HTML sémantique et propre.
                  J&apos;optimise également les balises meta title et meta description de chaque page, les données structurées
                  (Schema.org) pour améliorer l&apos;affichage dans les résultats de recherche, les balises Open Graph pour un bon
                  rendu au partage sur les réseaux sociaux, ainsi que le sitemap XML soumis automatiquement à Google Search
                  Console. Le contenu rédactionnel de vos pages est également pensé en fonction des mots-clés réellement
                  recherchés par vos futurs clients, pour maximiser vos chances d&apos;apparaître en première page.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Prise de rendez-vous en ligne</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Si votre activité repose sur des rendez-vous ou des réservations (coiffeur, coach, artisan, consultant),
                  je peux intégrer un système de prise de rendez-vous directement sur votre site. Vos visiteurs choisissent un
                  créneau disponible et réservent en quelques clics, sans appel téléphonique. Selon vos besoins, le système peut
                  être relié à votre agenda Google, envoyer une confirmation par email ou SMS, et bloquer automatiquement les
                  créneaux déjà pris.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Paiement en ligne</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Pour vendre des produits, des services ou des abonnements directement depuis votre site, j&apos;intègre Stripe,
                  la solution de paiement en ligne la plus utilisée et sécurisée du marché. Elle gère les paiements par carte
                  bancaire, les abonnements récurrents et respecte les normes de sécurité PCI-DSS, sans que vous ayez à manipuler
                  vous-même les données bancaires de vos clients.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Espace client</h3>
                <p className="text-gray-700 leading-relaxed">
                  Un espace client est une zone connectée, accessible uniquement à vos clients identifiés, depuis laquelle ils
                  peuvent suivre l&apos;avancement de leurs commandes, consulter leurs factures ou télécharger des documents.
                  Cette fonctionnalité est particulièrement adaptée aux activités de services ou aux entreprises qui souhaitent
                  offrir un suivi transparent et professionnel à leurs clients, sans passer par des échanges d&apos;emails
                  dispersés.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Budget */}
        <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px] border-b-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Combien coûte un <span className="bg-[#FFE234] px-2 brutal-border">site web sur mesure</span> ?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Le prix dépend des fonctionnalités réellement nécessaires à votre activité, pas d&apos;un forfait figé. La fourchette ci-dessous sert de repère : le devis détaillé arrive sous 24h après notre échange.
            </p>
            <div className="brutal-border brutal-shadow bg-white p-8 max-w-md">
              <p className="mono text-sm font-bold text-gray-400 mb-2">Site web sur mesure</p>
              <p className="text-4xl font-bold mb-1">À partir de 1 500 €</p>
              <p className="text-sm text-gray-500 mb-4">Livré en 2 à 4 semaines selon la complexité</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-[#00D4AA] mt-0.5 shrink-0" /> Design sur mesure et SEO optimisé</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-[#00D4AA] mt-0.5 shrink-0" /> Formulaire de contact et déploiement inclus</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-[#00D4AA] mt-0.5 shrink-0" /> Panel admin, dashboard ou paiement en ligne en option</li>
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
            <h2 className="text-2xl font-bold mb-2">Comment se déroule la <span className="bg-[#FFE234] px-2 brutal-border">création de votre site</span></h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Un processus clair en 4 étapes, de votre besoin initial à la mise en ligne.
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

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Questions fréquentes : création de site web</h2>
            <div className="flex flex-col gap-3">
              {faq.map(({ q, a }) => (
                <FAQItem key={q} q={q} a={a} />
              ))}
            </div>
          </div>
        </section>

        <RelatedProjects service="site-web" />

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto brutal-border brutal-shadow bg-[#FFE234] p-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Votre site web en 4 semaines</h2>
              <p className="text-sm mt-1">Devis gratuit · Réponse sous 24h · Sans engagement</p>
            </div>
            <a href="#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3 inline-flex items-center gap-2">
              Démarrer maintenant <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <RelatedArticles service="site-web" />

        <Contact />

      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedArticles from "@/components/RelatedArticles";
import RelatedProjects from "@/components/RelatedProjects";
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
  { title: "100% responsive", desc: "Parfait sur mobile, tablette et desktop — testé sur tous les appareils." },
  { title: "Blog intégré", desc: "Publiez vos articles et actualités pour alimenter votre référencement naturel." },
  { title: "Formulaire de contact", desc: "Recevez les demandes directement par email, sans outil tiers payant." },
  { title: "Déploiement inclus", desc: "Mise en ligne sur votre hébergement ou sur Vercel, domaine configuré." },
];

const advancedFeatures = [
  { title: "Panel admin", desc: "Un espace privé pour modifier vos textes, images, tarifs ou articles vous-même, sans écrire une ligne de code." },
  { title: "Dashboard de suivi", desc: "Tableau de bord centralisant vos demandes de contact, statistiques de visite, réservations ou commandes." },
  { title: "SEO technique avancé", desc: "Vitesse de chargement optimisée, données structurées, sitemap automatique et balises Open Graph pour un bon classement Google." },
  { title: "Prise de rendez-vous", desc: "Système de réservation en ligne relié à votre agenda ou envoyé par email." },
  { title: "Paiement en ligne", desc: "Intégration Stripe pour vendre des produits, services ou abonnements directement sur le site." },
  { title: "Espace client", desc: "Zone connectée où vos clients suivent leurs commandes, factures ou documents." },
];

const process = [
  { step: "01", title: "Cadrage du projet", desc: "On échange sur votre activité, votre cible et les fonctionnalités utiles (panel admin, dashboard, paiement...). Devis détaillé sous 24h." },
  { step: "02", title: "Design & maquettes", desc: "Wireframes puis interface soignée aux couleurs de votre marque, validée avec vous avant le développement." },
  { step: "03", title: "Développement Next.js", desc: "Code sur mesure, structure pensée pour le SEO dès le départ, points d'avancement réguliers." },
  { step: "04", title: "SEO, tests & mise en ligne", desc: "Optimisation des balises et du contenu, tests sur tous les appareils, déploiement et formation au panel admin si inclus." },
];

const demoSites = [
  { title: "Pizzeria", desc: "Site vitrine pour restaurant avec menu et présentation.", url: "https://demo.pizzeria.breizhapp.tech/" },
  { title: "Paysagiste", desc: "Site vitrine pour artisan paysagiste avec présentation des services.", url: "https://demo.paysagiste.breizhapp.tech/" },
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

        {/* Hero */}
        <section className="border-b-[3px] border-black py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-gray-400 mb-4">// service 02</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#0A0A0A] brutal-border p-3">
                <Globe size={32} className="text-[#FFFBF0]" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">Site web</h1>
                <p className="text-xl font-bold text-gray-500 mt-1">Vitrine · Landing page · Blog</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
              Un site web professionnel, rapide et bien référencé pour votre activité.
              Design unique, contenu optimisé SEO, livraison en 2 à 4 semaines.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">
                Demander un devis gratuit
              </a>
              <a href="/portfolio" className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-8 py-4">
                Voir les réalisations →
              </a>
            </div>
          </div>
        </section>

        {/* Exemples en direct */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Exemples en <span className="bg-[#FFE234] px-2 brutal-border">direct</span></h2>
            <div className="grid md:grid-cols-2 gap-8">
              {demoSites.map(({ title, desc, url }) => (
                <div key={title} className="brutal-border brutal-shadow bg-white overflow-hidden">
                  <div className="border-b-[3px] border-black bg-[#0A0A0A]">
                    <div className="flex items-center gap-1.5 px-3 py-2 border-b-[3px] border-black bg-[#1a1a1a]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="relative w-full aspect-[16/10] overflow-hidden">
                      <iframe
                        src={url}
                        title={`Démo ${title}`}
                        loading="lazy"
                        className="absolute top-0 left-0 border-0 w-[250%] h-[250%] origin-top-left scale-[0.4]"
                      />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold mb-1">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{desc}</p>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-4 py-2 text-sm inline-flex items-center gap-2"
                    >
                      Voir en plein écran <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
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
            <p className="text-gray-600 mb-8 max-w-2xl">
              Au-delà du site vitrine simple, chaque fonctionnalité ci-dessous peut être ajoutée selon les besoins réels de votre activité.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {advancedFeatures.map(({ title, desc }) => (
                <div key={title} className="brutal-border bg-white p-5">
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
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
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-8">Questions fréquentes — création de site web</h2>
            <div className="flex flex-col gap-4">
              {faq.map(({ q, a }) => (
                <div key={q} className="border-2 border-gray-800 p-5">
                  <h3 className="font-bold text-[#FFFBF0] mb-2">{q}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto brutal-border brutal-shadow bg-[#FFE234] p-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Votre site web en 4 semaines</h2>
              <p className="text-sm mt-1">Devis gratuit · Réponse sous 48h · Sans engagement</p>
            </div>
            <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3 inline-flex items-center gap-2">
              Démarrer maintenant <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <RelatedProjects service="site-web" />

        <RelatedArticles service="site-web" />

      </main>
      <Footer />
    </>
  );
}

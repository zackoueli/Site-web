import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedArticles from "@/components/RelatedArticles";
import Contact from "@/components/Contact";
import RelatedProjects from "@/components/RelatedProjects";
import FAQItem from "@/components/FAQItem";
import { ShoppingBag, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Création de boutique en ligne à Brest | BreizhApp",
  description: "Développeur freelance à Brest, je conçois votre boutique en ligne : design, paiement sécurisé, gestion des stocks, espace client et admin. Devis 24h.",
  keywords: [
    "boutique en ligne sur mesure",
    "e-commerce sur mesure brest",
    "alternative shopify sans abonnement",
    "développeur e-commerce freelance",
    "création boutique en ligne brest",
    "application mobile e-commerce",
  ],
  alternates: { canonical: "https://breizhapp.tech/services/ecommerce" },
  openGraph: {
    title: "Création de boutique en ligne à Brest | BreizhApp",
    description: "Développeur freelance à Brest, je conçois votre boutique en ligne : design, paiement sécurisé, gestion des stocks, espace client et admin. Devis 24h.",
    url: "https://breizhapp.tech/services/ecommerce",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const features = [
  { title: "Catalogue produits", desc: "Gérez vos produits, variantes, stocks et catégories depuis votre panel admin." },
  { title: "Panier & commandes", desc: "Tunnel d'achat fluide, récapitulatif de commande, emails automatiques." },
  { title: "Paiement Stripe", desc: "Carte bancaire, Apple Pay, Google Pay, sécurisé et conforme PCI-DSS." },
  { title: "Panel admin", desc: "Gérez vos commandes, stocks et clients depuis une interface simple et claire." },
  { title: "SEO e-commerce", desc: "Fiches produits optimisées, sitemap automatique, temps de chargement rapide." },
  { title: "Sans abonnement", desc: "Pas de commission sur les ventes, pas d'abonnement mensuel à une plateforme." },
];

const useCases = [
  { emoji: "👗", title: "Boutique mode / créateurs", desc: "Catalogue photo, tailles, couleurs, livraison et retours gérés depuis l'admin." },
  { emoji: "🌾", title: "Vente directe producteur", desc: "Paniers, abonnements hebdomadaires, points de retrait, livraison locale." },
  { emoji: "🎨", title: "Artiste / artisan", desc: "Boutique en ligne pour vos créations : pièces uniques, personnalisation, commandes sur mesure." },
  { emoji: "📦", title: "Dropshipping / revendeur", desc: "Catalogue automatisé, synchronisation fournisseur, gestion multi-entrepôts." },
];


const process = [
  { step: "01", title: "Cadrage du projet", desc: "On échange sur votre catalogue, vos moyens de livraison et vos besoins de gestion. Devis détaillé sous 24h." },
  { step: "02", title: "Design & maquettes", desc: "Identité visuelle et parcours d'achat pensés pour convertir, validés avec vous avant le développement." },
  { step: "03", title: "Développement sur mesure", desc: "Catalogue, panier, paiement Stripe et panel admin construits avec Next.js, points d'avancement réguliers." },
  { step: "04", title: "Tests, SEO & mise en ligne", desc: "Tests du tunnel d'achat, optimisation des fiches produits pour le référencement, déploiement et formation." },
];

const faq = [
  {
    q: "Pourquoi choisir une boutique e-commerce sur mesure plutôt que Shopify ?",
    a: "Avec Shopify, vous payez un abonnement mensuel (40 à 105€ ou plus) et une commission sur chaque vente, en plus des applications tierces souvent payantes. Une boutique sur mesure est développée une fois, sans abonnement ni commission : vous êtes propriétaire du code et de vos données, et le coût reste maîtrisé sur le long terme.",
  },
  {
    q: "Comment fonctionne le panel admin de la boutique ?",
    a: "Le panel admin est un espace privé où vous gérez votre catalogue produits, vos stocks, vos commandes et vos clients sans écrire de code. Vous ajoutez ou modifiez un produit, suivez les commandes en cours et gérez les avis clients depuis une interface pensée pour être simple, avec une formation incluse à la livraison.",
  },
  {
    q: "Quels moyens de paiement sont proposés ?",
    a: "Le paiement est géré par Stripe, la solution la plus utilisée et sécurisée du marché : carte bancaire, Apple Pay et Google Pay, avec conformité PCI-DSS. Je ne prélève aucune commission sur vos ventes.",
  },
  {
    q: "Combien de temps pour développer une boutique en ligne ?",
    a: "Entre 3 et 6 semaines selon la taille du catalogue et les fonctionnalités souhaitées (espace client, avis, messagerie). Une boutique simple avec catalogue et paiement est livrée en 3 semaines, une boutique complète avec espace client et panel admin avancé en 5 à 6 semaines.",
  },
  {
    q: "Combien coûte une boutique e-commerce sur mesure ?",
    a: "À partir de 2 000 €, pour une boutique avec catalogue produits, paiement Stripe et panel admin. Le tarif final dépend de la taille du catalogue et des fonctionnalités souhaitées, devis détaillé sous 24h après le cadrage.",
  },
  {
    q: "La boutique sera-t-elle bien référencée sur Google ?",
    a: "Oui. Chaque fiche produit est structurée pour le SEO e-commerce : balises optimisées, données structurées produit, sitemap automatique et temps de chargement rapide grâce à Next.js, pour maximiser la visibilité de vos produits dans les résultats de recherche.",
  },
  {
    q: "Puis-je proposer un espace client avec historique de commandes ?",
    a: "Oui, un espace client peut être intégré : inscription, connexion, historique des commandes, liste de souhaits et gestion du profil, pour fidéliser vos acheteurs et leur offrir un suivi transparent de leurs achats.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://breizhapp.tech" },
        { "@type": "ListItem", position: 2, name: "Création de boutique en ligne Brest", item: "https://breizhapp.tech/services/ecommerce" },
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

export default function EcommercePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        {/* Breadcrumb */}
        <nav className="max-w-7xl mx-auto px-4 pt-6 mono text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
          <span>/</span>
          <span className="text-black font-bold">Création de boutique en ligne Brest</span>
        </nav>

        {/* Hero */}
        <section className="border-b-[3px] border-black py-12 px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[2fr_3fr] gap-10 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#FF6B9D] brutal-border p-3 shrink-0">
                  <ShoppingBag size={32} className="text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">Création de boutique en ligne à Brest</h1>
                  <p className="text-xl font-bold text-gray-500 mt-1">E-commerce · Paiement Stripe · Sur mesure</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
                Une boutique en ligne qui vous appartient, sans abonnement Shopify ni commission sur vos ventes.
                Design unique, paiement Stripe, gestion des commandes et des stocks depuis votre espace admin.
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
              <Link href="/portfolio/histoire-eternelle" className="block overflow-hidden">
                <div className="flex items-center gap-1.5 px-3 py-2 border-b-[3px] border-black bg-[#1a1a1a]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="relative w-full aspect-[1912/917] overflow-hidden">
                  <Image
                    src="/services/histoire-eternelle-hero.png"
                    alt="Page d'accueil de la boutique en ligne Histoire Eternelle, bijoux artisanaux en résine"
                    fill
                    className="object-cover object-top transition-transform duration-300 hover:scale-105"
                    priority
                  />
                </div>
              </Link>
              <p className="text-xs text-gray-500 px-4 py-3 border-t-[3px] border-black">
                Boutique en ligne Histoire Eternelle, bijoux artisanaux : catalogue, panier, espace client, paiement Stripe et panel admin.
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
                Je crée des boutiques en ligne sur mesure pour les commerçants, artisans, créateurs et producteurs :
                catalogue produits, panier, paiement Stripe, espace client et panel admin pour gérer commandes et stocks
                en autonomie. Je m&apos;appelle Enzo, développeur freelance basé à Brest, et j&apos;accompagne les
                commerces de tout le Finistère et de la Bretagne, sur place ou à distance partout en France. Une boutique
                avec catalogue, paiement et panel admin démarre à 2 000 € et se livre en 3 à 6 semaines selon la taille du
                catalogue. Pas d&apos;abonnement mensuel ni de commission sur vos ventes : vous êtes propriétaire du code
                et de vos données. Devis détaillé sous 24h après un cadrage gratuit.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="border-t border-gray-800 pt-4">
                <p className="mono text-xs font-bold text-gray-500 uppercase mb-1">Livraison</p>
                <p className="text-xl font-bold text-white">3 à 6 semaines</p>
              </div>
              <div className="border-t border-gray-800 pt-4">
                <p className="mono text-xs font-bold text-gray-500 uppercase mb-1">Budget indicatif</p>
                <p className="text-xl font-bold text-white">Dès 2 000 €</p>
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
                  <CheckCircle2 size={18} className="text-[#FF6B9D] mb-3" />
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
                <div key={title} className="border-2 border-gray-800 p-5 hover:border-[#FF6B9D] hover:bg-[#FF6B9D] transition-all group">
                  <div className="text-3xl mb-3">{emoji}</div>
                  <h3 className="font-bold text-[#FFFBF0] mb-1">{title}</h3>
                  <p className="text-sm text-gray-400 group-hover:text-pink-100 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contenu détaillé */}
        <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px] border-b-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Créer une <span className="bg-[#FFE234] px-2 brutal-border">boutique e-commerce sur mesure</span></h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              Vendre en ligne sans dépendre d&apos;un abonnement mensuel ni d&apos;une commission sur chaque vente : voici ce
              qu&apos;implique concrètement la création d&apos;une boutique e-commerce sur mesure.
            </p>

            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-bold mb-3">Catalogue produits & gestion des stocks</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Le catalogue produits est le cœur de la boutique : chaque produit peut être créé avec plusieurs photos,
                  des variantes (taille, couleur, matière), une description détaillée et un suivi de stock en temps réel.
                  Les catégories et collections sont organisées pour faciliter la navigation de vos clients, et la mise en
                  avant de produits spécifiques en page d&apos;accueil se fait directement depuis le panel admin, sans
                  intervention technique.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Panier, tunnel d&apos;achat et paiement Stripe</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Le tunnel d&apos;achat est conçu pour réduire les abandons de panier : ajout au panier fluide,
                  récapitulatif clair de la commande, et paiement sécurisé via Stripe (carte bancaire, Apple Pay, Google
                  Pay), conforme aux normes PCI-DSS. Des emails automatiques confirment la commande et informent le client
                  de son expédition, sans aucune commission de ma part sur vos ventes, contrairement aux
                  plateformes SaaS classiques.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Panel admin et gestion des commandes</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Depuis le panel admin, vous suivez chaque commande de sa réception à son expédition, gérez vos stocks en
                  temps réel et consultez l&apos;historique de vos ventes. Les avis clients, les messages et les demandes
                  de commandes sur mesure peuvent également être centralisés dans ce même espace, pour un pilotage complet
                  de votre activité sans jongler entre plusieurs outils.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Espace client et fidélisation</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Un espace client permet à vos acheteurs de créer un compte, suivre l&apos;historique de leurs commandes,
                  enregistrer une liste de souhaits et gérer leurs informations personnelles. Combiné à un système d&apos;avis
                  vérifiés affichés sur chaque produit, cet espace renforce la confiance des nouveaux visiteurs et encourage
                  les achats répétés.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">SEO e-commerce</h3>
                <p className="text-gray-700 leading-relaxed">
                  Chaque fiche produit est structurée pour le référencement naturel : balises meta optimisées, données
                  structurées produit (prix, disponibilité, avis) reconnues par Google, sitemap généré automatiquement et
                  temps de chargement rapide grâce à Next.js. Ces fondations techniques permettent à vos produits
                  d&apos;apparaître plus facilement dans les résultats de recherche et le Google Shopping.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Budget */}
        <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px] border-b-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Combien coûte une <span className="bg-[#FFE234] px-2 brutal-border">boutique e-commerce sur mesure</span> ?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Le prix dépend de la taille du catalogue et des fonctionnalités souhaitées, pas d&apos;un forfait figé. La fourchette ci-dessous sert de repère : le devis détaillé arrive sous 24h après le cadrage.
            </p>
            <div className="brutal-border brutal-shadow bg-white p-8 max-w-md">
              <p className="mono text-sm font-bold text-gray-400 mb-2">Boutique e-commerce sur mesure</p>
              <p className="text-4xl font-bold mb-1">À partir de 2 000 €</p>
              <p className="text-sm text-gray-500 mb-4">Livrée en 3 à 6 semaines selon le catalogue</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-[#FF6B9D] mt-0.5 shrink-0" /> Catalogue produits et paiement Stripe inclus</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-[#FF6B9D] mt-0.5 shrink-0" /> Panel admin pour gérer commandes et stocks</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-[#FF6B9D] mt-0.5 shrink-0" /> Espace client et avis vérifiés en option</li>
              </ul>
              <a href="#contact" className="brutal-btn bg-[#FF6B9D] text-white px-6 py-3 inline-flex items-center gap-2 mt-6">
                Demander ce devis <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Processus */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Comment se déroule la <span className="bg-[#FFE234] px-2 brutal-border">création de votre boutique</span></h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Un processus clair en 4 étapes, de votre catalogue à la mise en ligne.
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

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Questions fréquentes : boutique e-commerce sur mesure</h2>
            <div className="flex flex-col gap-3">
              {faq.map(({ q, a }) => (
                <FAQItem key={q} q={q} a={a} />
              ))}
            </div>
          </div>
        </section>

        <RelatedProjects service="ecommerce" />

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto brutal-border brutal-shadow bg-[#FF6B9D] p-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Lancez votre boutique en ligne</h2>
              <p className="text-sm mt-1 text-pink-100">Devis gratuit · Réponse sous 24h · Sans engagement</p>
            </div>
            <a href="#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3 inline-flex items-center gap-2 font-bold">
              Démarrer maintenant <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <RelatedArticles service="ecommerce" />

        <Contact />

      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedArticles from "@/components/RelatedArticles";
import RelatedProjects from "@/components/RelatedProjects";
import { ShoppingBag, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Boutique e-commerce sur mesure · Brest | BreizhApp",
  description: "Boutique en ligne sur mesure : catalogue, panier, paiement Stripe, gestion des commandes. Alternative à Shopify sans abonnement mensuel.",
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
    title: "Boutique e-commerce sur mesure · Brest",
    description: "Boutique en ligne sur mesure : catalogue, panier, Stripe. Alternative à Shopify sans abonnement mensuel.",
    url: "https://breizhapp.tech/services/ecommerce",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const features = [
  { title: "Catalogue produits", desc: "Gérez vos produits, variantes, stocks et catégories depuis votre panel admin." },
  { title: "Panier & commandes", desc: "Tunnel d'achat fluide, récapitulatif de commande, emails automatiques." },
  { title: "Paiement Stripe", desc: "Carte bancaire, Apple Pay, Google Pay — sécurisé et conforme PCI-DSS." },
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

const demoSites = [
  { title: "Histoire Eternelle", desc: "Boutique e-commerce de bijoux avec catalogue, avis clients, espace client et panel admin.", url: "https://www.histoire-eternelle-l-atelier.fr/" },
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
    a: "Le paiement est géré par Stripe, la solution la plus utilisée et sécurisée du marché : carte bancaire, Apple Pay et Google Pay, avec conformité PCI-DSS. Aucune commission additionnelle n'est prélevée par BreizhApp sur vos ventes.",
  },
  {
    q: "Combien de temps pour développer une boutique en ligne ?",
    a: "Entre 3 et 6 semaines selon la taille du catalogue et les fonctionnalités souhaitées (espace client, avis, messagerie). Une boutique simple avec catalogue et paiement est livrée en 3 semaines, une boutique complète avec espace client et panel admin avancé en 5 à 6 semaines.",
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

        {/* Hero */}
        <section className="border-b-[3px] border-black py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-gray-400 mb-4">// service 04</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#FF6B9D] brutal-border p-3">
                <ShoppingBag size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">E-commerce</h1>
                <p className="text-xl font-bold text-gray-500 mt-1">Boutique en ligne · Sur mesure</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
              Une boutique en ligne qui vous appartient vraiment — sans abonnement mensuel à Shopify ou commission sur chaque vente.
              Design unique, paiement Stripe, gestion des commandes intégrée.
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Exemples en <span className="bg-[#FFE234] px-2 brutal-border">direct</span></h2>
            <div className="grid gap-8">
              {demoSites.map(({ title, desc, url }) => (
                <div key={title} className="brutal-border brutal-shadow bg-white overflow-hidden">
                  <div className="border-b-[3px] border-black bg-[#0A0A0A]">
                    <div className="flex items-center gap-1.5 px-3 py-2 border-b-[3px] border-black bg-[#1a1a1a]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                      <iframe
                        src={url}
                        title={`Démo ${title}`}
                        loading="lazy"
                        className="absolute top-0 left-0 border-0 w-[222%] h-[222%] origin-top-left scale-[0.45]"
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
                      className="brutal-btn bg-[#FF6B9D] text-white px-4 py-2 text-sm inline-flex items-center gap-2"
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
                  de son expédition, sans aucune commission prélevée par BreizhApp sur vos ventes, contrairement aux
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
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-8">Questions fréquentes — boutique e-commerce sur mesure</h2>
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
          <div className="max-w-4xl mx-auto brutal-border brutal-shadow bg-[#FF6B9D] p-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Lancez votre boutique en ligne</h2>
              <p className="text-sm mt-1 text-pink-100">Devis gratuit · Réponse sous 48h · Sans engagement</p>
            </div>
            <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3 inline-flex items-center gap-2 font-bold">
              Démarrer maintenant <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <RelatedProjects service="ecommerce" />

        <RelatedArticles service="ecommerce" />

      </main>
      <Footer />
    </>
  );
}

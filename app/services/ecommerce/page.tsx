import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingBag, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Boutique e-commerce sur mesure · BreizhApp",
  description: "Création de boutiques en ligne sur mesure avec catalogue, panier, paiement Stripe et gestion des commandes. Alternative à Shopify sans abonnement mensuel.",
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

export default function EcommercePage() {
  return (
    <>
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

        {/* Comparatif rapide */}
        <section className="py-12 px-4 border-b-[3px] border-black bg-[#FFE234]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-6">Pourquoi ne pas utiliser Shopify ?</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Shopify Basic", cost: "~40€/mois", note: "+ 2% de commission + apps payantes" },
                { label: "Shopify Standard", cost: "~105€/mois", note: "+ 1% de commission + apps payantes" },
                { label: "BreizhApp sur mesure", cost: "Achat unique", note: "0 commission · 0 abonnement · votre code" },
              ].map(({ label, cost, note }) => (
                <div key={label} className="brutal-border bg-white p-4">
                  <div className="font-bold text-sm mb-1">{label}</div>
                  <div className="text-xl font-bold mb-1">{cost}</div>
                  <div className="text-xs text-gray-600">{note}</div>
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

      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Histoire Eternelle — Boutique e-commerce bijoux | BreizhApp",
  description: "Étude de cas : création d'une boutique e-commerce sur mesure pour Histoire Eternelle - L'Atelier d'Anaïs. Catalogue bijoux, panier, paiement Stripe, espace client, panel admin.",
};

const features = [
  { icon: "💍", title: "Catalogue produits", desc: "Gestion complète des bijoux avec variantes, photos multiples, descriptions et prix. Mise en avant de pièces sélectionnées depuis l'admin." },
  { icon: "⭐", title: "Avis clients", desc: "Système d'avis vérifiés sur chaque produit, mise en avant des meilleurs avis en page d'accueil pour renforcer la confiance." },
  { icon: "🛒", title: "Panier & commandes", desc: "Tunnel d'achat fluide, récapitulatif de commande, emails automatiques de confirmation et de suivi." },
  { icon: "💳", title: "Paiement Stripe", desc: "Paiement sécurisé par carte bancaire, Apple Pay et Google Pay. Conformité PCI-DSS, zéro commission sur les ventes." },
  { icon: "👤", title: "Espace client", desc: "Inscription, connexion, historique des commandes, liste de souhaits, gestion du profil — tout dans un espace personnel." },
  { icon: "💬", title: "Messagerie", desc: "Canal de communication direct entre l'atelier et les clients pour les commandes sur mesure et les questions produits." },
  { icon: "🔧", title: "Panel admin complet", desc: "Gestion des produits, des catégories, des commandes, des avis et des messages depuis un back-office dédié." },
  { icon: "📱", title: "100% responsive", desc: "Expérience optimale sur mobile, tablette et desktop — plus de 70% des commandes se font depuis un smartphone." },
];

const stack = [
  { label: "Framework", value: "Next.js 15 App Router" },
  { label: "Base de données", value: "Firebase Firestore" },
  { label: "Authentification", value: "Firebase Auth" },
  { label: "Paiement", value: "Stripe" },
  { label: "Stockage", value: "Firebase Storage" },
  { label: "Style", value: "Tailwind CSS" },
  { label: "Typographie", value: "Playfair Display + Geist" },
  { label: "Déploiement", value: "Vercel" },
];

export default function HistoireEternellePage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        {/* Hero */}
        <section className="border-b-[3px] border-black" style={{ backgroundColor: "#FAF7F2" }}>
          <div className="max-w-4xl mx-auto px-4 py-20">
            <a href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold mb-8 hover:underline">
              <ArrowLeft size={14} /> Retour aux réalisations
            </a>
            <p className="mono text-sm font-bold text-gray-400 mb-4">// réalisation · e-commerce</p>
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <div className="brutal-border px-3 py-1 text-xs font-bold" style={{ backgroundColor: "#C0622D", color: "white" }}>
                E-COMMERCE
              </div>
              <div className="brutal-border px-3 py-1 text-xs font-bold bg-white">
                SITE WEB
              </div>
              <div className="brutal-border px-3 py-1 text-xs font-bold bg-white">
                FIREBASE
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4" style={{ color: "#2C1A0E" }}>
              Histoire Eternelle
            </h1>
            <p className="text-xl font-medium mb-2" style={{ color: "#6B4835" }}>
              L'Atelier d'Anaïs — Bijoux artisanaux façonnés à la main
            </p>
            <p className="text-gray-600 leading-relaxed max-w-2xl mb-8">
              Boutique e-commerce complète pour une créatrice de bijoux artisanaux. Catalogue de pièces uniques, espace client, paiement Stripe, système d'avis et panel admin — une boutique qui reflète l'élégance et l'authenticité de l'atelier.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.histoire-eternelle-l-atelier.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn px-6 py-3 font-bold inline-flex items-center gap-2"
                style={{ backgroundColor: "#C0622D", color: "white" }}
              >
                Voir le site en ligne <ExternalLink size={14} />
              </a>
              <a href="/#contact" className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-6 py-3 font-bold">
                Un projet similaire ?
              </a>
            </div>
          </div>
        </section>

        {/* Aperçu visuel */}
        <section className="py-16 px-4" style={{ backgroundColor: "#F0E6D8" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#2C1A0E" }}>
              Identité visuelle
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[
                { name: "Crème", hex: "#FAF7F2" },
                { name: "Sable", hex: "#F0E6D8" },
                { name: "Terracotta", hex: "#C0622D" },
                { name: "Brun", hex: "#2C1A0E" },
              ].map(({ name, hex }) => (
                <div key={hex} className="brutal-border p-4 flex flex-col items-center gap-2 bg-white">
                  <div className="w-12 h-12 brutal-border" style={{ backgroundColor: hex }} />
                  <span className="text-xs font-bold">{name}</span>
                  <span className="text-xs mono text-gray-500">{hex}</span>
                </div>
              ))}
            </div>
            <div className="brutal-border bg-white p-5">
              <p className="text-sm font-bold mb-1">Typographie</p>
              <p className="text-2xl mb-1" style={{ fontStyle: "italic", color: "#2C1A0E" }}>Playfair Display</p>
              <p className="text-sm text-gray-500">Serif élégant pour les titres · Geist Sans pour le contenu</p>
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="py-16 px-4 bg-[#FFFBF0]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">
              Fonctionnalités <span className="bg-[#FFE234] px-2 brutal-border">développées</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map(({ icon, title, desc }) => (
                <div key={title} className="brutal-border bg-white p-5">
                  <div className="text-2xl mb-3">{icon}</div>
                  <h3 className="font-bold mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack technique */}
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-8">Stack technique</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {stack.map(({ label, value }) => (
                <div key={label} className="border-2 border-gray-800 p-4">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-sm font-bold text-[#FFFBF0]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto brutal-border brutal-shadow bg-[#FFE234] p-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Vous avez un projet similaire ?</h2>
              <p className="text-sm mt-1">Boutique en ligne, e-commerce artisanal — devis gratuit sous 48h</p>
            </div>
            <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3 font-bold inline-flex items-center gap-2">
              Démarrer mon projet →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

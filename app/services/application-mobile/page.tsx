import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Smartphone, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Développeur app mobile iOS & Android · Brest | BreizhApp",
  description: "Développeur React Native freelance à Brest : app iOS & Android sur mesure dès 490€. Restaurants, commerces, e-commerce. Devis gratuit sous 48h.",
  keywords: [
    "développeur application mobile brest",
    "création application mobile iOS Android",
    "développeur freelance application mobile",
    "application mobile sur mesure",
    "React Native freelance brest",
    "application mobile restaurant",
    "développeur mobile finistère",
    "créer une application mobile",
  ],
  alternates: { canonical: "https://breizhapp.tech/services/application-mobile" },
  openGraph: {
    title: "Développeur app mobile iOS & Android · Brest",
    description: "App iOS & Android sur mesure dès 490€. Restaurants, commerces, e-commerce. Développeur React Native freelance à Brest. Devis gratuit sous 48h.",
    url: "https://breizhapp.tech/services/application-mobile",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
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

export default function AppMobilePage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        {/* Hero */}
        <section className="border-b-[3px] border-black py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-gray-400 mb-4">// service 01</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#FFE234] brutal-border p-3">
                <Smartphone size={32} />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">Application mobile</h1>
                <p className="text-xl font-bold text-gray-500 mt-1">iOS & Android · React Native</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
              Je développe votre application mobile sur mesure, disponible sur l'App Store et Google Play.
              De la conception UX au déploiement, je m'occupe de tout — vous n'avez qu'à valider les étapes.
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

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto brutal-border brutal-shadow bg-[#FFE234] p-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Prêt à lancer votre app ?</h2>
              <p className="text-sm mt-1">Devis gratuit · Réponse sous 48h · Sans engagement</p>
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

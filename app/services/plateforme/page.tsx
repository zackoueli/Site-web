import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LayoutDashboard, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Plateforme digitale & back-office sur mesure | BreizhApp",
  description: "Développement de plateformes web sur mesure : espace admin, espace client, multi-rôles. API REST, base de données, authentification. Basé à Brest. Devis gratuit.",
  keywords: [
    "plateforme digitale sur mesure",
    "développement back-office",
    "application web sur mesure brest",
    "espace admin sur mesure",
    "développeur plateforme web freelance",
    "back-office brest",
  ],
  alternates: { canonical: "https://breizhapp.tech/services/plateforme" },
  openGraph: {
    title: "Plateforme digitale & back-office sur mesure",
    description: "Plateformes web sur mesure : espace admin, espace client, multi-rôles. API REST, base de données. Développeur freelance à Brest.",
    url: "https://breizhapp.tech/services/plateforme",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const features = [
  { title: "Multi-rôles", desc: "Admin, manager, client, partenaire — chaque utilisateur voit ce qu'il doit voir." },
  { title: "Panel admin", desc: "Tableau de bord complet pour gérer vos données, utilisateurs et contenus." },
  { title: "Espace client", desc: "Chaque client dispose d'un accès personnel pour suivre ses commandes ou dossiers." },
  { title: "Base de données", desc: "Stockage sécurisé de vos données avec sauvegarde automatique." },
  { title: "API REST", desc: "Connexion avec vos outils existants (CRM, ERP, logiciels métier)." },
  { title: "Authentification sécurisée", desc: "Connexion par email, Google, ou SSO. Gestion des permissions par rôle." },
];

const useCases = [
  { emoji: "📦", title: "Gestion de commandes", desc: "Suivi des commandes client, statuts en temps réel, notifications automatiques." },
  { emoji: "👥", title: "Espace membres / abonnés", desc: "Accès à du contenu réservé, facturation récurrente, historique des achats." },
  { emoji: "📊", title: "Dashboard métier", desc: "Indicateurs clés, rapports, exports — centralisés dans un seul outil." },
  { emoji: "🤝", title: "Plateforme de mise en relation", desc: "Gestion de profils, matching, messagerie intégrée, avis." },
];

export default function PlateformePage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        {/* Hero */}
        <section className="border-b-[3px] border-black py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-gray-400 mb-4">// service 03</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#7C3AED] brutal-border p-3">
                <LayoutDashboard size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">Plateforme digitale</h1>
                <p className="text-xl font-bold text-gray-500 mt-1">Back-office · Multi-rôles · Admin</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
              Une application web complète avec plusieurs niveaux d'accès. Vos équipes et vos clients
              disposent chacun de leur espace dédié — tout est centralisé, sécurisé et facile à gérer.
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
                  <CheckCircle2 size={18} className="text-[#7C3AED] mb-3" />
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
                <div key={title} className="border-2 border-gray-800 p-5 hover:border-[#7C3AED] hover:bg-[#7C3AED] transition-all group">
                  <div className="text-3xl mb-3">{emoji}</div>
                  <h3 className="font-bold text-[#FFFBF0] mb-1">{title}</h3>
                  <p className="text-sm text-gray-400 group-hover:text-purple-200 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto brutal-border brutal-shadow bg-[#7C3AED] p-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Votre outil métier sur mesure</h2>
              <p className="text-sm mt-1 text-purple-200">Devis gratuit · Réponse sous 48h · Sans engagement</p>
            </div>
            <a href="/#contact" className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-6 py-3 inline-flex items-center gap-2 font-bold">
              Démarrer maintenant <ArrowRight size={16} />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

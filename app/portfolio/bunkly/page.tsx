import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Bunkly — Plateforme de livrets d'accueil digitaux | BreizhApp",
  description:
    "Bunkly : plateforme SaaS de création de livrets d'accueil digitaux pour hôtes. Traduction automatique, templates design, dashboard. Réalisé par BreizhApp.",
  alternates: { canonical: "https://breizhapp.tech/portfolio/bunkly" },
};

const features = [
  {
    icon: "🌍",
    title: "Traduction automatique",
    desc: "Le livret est traduit automatiquement dans la langue de l'hôte — sans intervention du propriétaire. Vos hôtes internationaux lisent dans leur langue.",
  },
  {
    icon: "🎨",
    title: "Templates design",
    desc: "Plusieurs modèles visuels disponibles pour personnaliser l'apparence du livret selon le style de votre hébergement.",
  },
  {
    icon: "📊",
    title: "Dashboard propriétaire",
    desc: "Interface d'administration complète pour créer, modifier et gérer vos livrets. Ajout de sections, photos, infos pratiques sans toucher au code.",
  },
  {
    icon: "📱",
    title: "Expérience mobile native",
    desc: "Le livret est optimisé pour mobile — vos hôtes y accèdent depuis leur téléphone via un lien ou un QR code, sans télécharger d'application.",
  },
  {
    icon: "🔗",
    title: "Partage par QR code & lien",
    desc: "Chaque livret génère un QR code et un lien unique à partager avec vos hôtes avant leur arrivée.",
  },
  {
    icon: "🏨",
    title: "Multi-secteurs",
    desc: "Adapté à tous les types d'hébergements : locations saisonnières, hôtels, gîtes, chambres d'hôtes, campings.",
  },
];

const stack = [
  { label: "Framework", value: "Next.js App Router" },
  { label: "Base de données", value: "Firebase Firestore" },
  { label: "Authentification", value: "Firebase Auth" },
  { label: "Traduction", value: "API auto-translate" },
  { label: "Style", value: "Tailwind CSS" },
  { label: "Déploiement", value: "Vercel" },
  { label: "Partage", value: "QR Code + lien unique" },
  { label: "Délai de dev", value: "2 semaines" },
];

export default function BunklyPortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        {/* Hero */}
        <section className="border-b-[3px] border-[#0A0A0A] bg-[#FF6B35]">
          <div className="max-w-4xl mx-auto px-4 py-20">
            <a href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold mb-8 hover:underline text-white opacity-80">
              <ArrowLeft size={14} /> Retour aux réalisations
            </a>
            <p className="mono text-sm font-bold text-orange-200 mb-4">// réalisation · plateforme SaaS</p>
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <div className="brutal-border px-3 py-1 text-xs font-bold bg-white text-[#FF6B35]">PLATEFORME WEB</div>
              <div className="brutal-border px-3 py-1 text-xs font-bold bg-[#0A0A0A] text-white">SAAS</div>
              <div className="brutal-border px-3 py-1 text-xs font-bold bg-[#FFE234] text-[#0A0A0A]">DISPONIBLE</div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4 text-white">
              Bunkly
            </h1>
            <p className="text-xl font-medium mb-2 text-orange-100">
              Créez votre livret d'accueil digital pour vos hôtes
            </p>
            <p className="text-orange-100 leading-relaxed max-w-2xl mb-8">
              Plateforme SaaS développée en 2 semaines : les propriétaires de locations, hôtels et gîtes créent leur livret d'accueil digital en quelques minutes. Traduction automatique, templates design, dashboard complet.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://app.bunkly.co"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn px-6 py-3 font-bold inline-flex items-center gap-2 bg-white text-[#FF6B35]"
              >
                Voir la plateforme <ExternalLink size={14} />
              </a>
              <a
                href="https://app.bunkly.co/b/NAvq6yDTOe"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn px-6 py-3 font-bold inline-flex items-center gap-2 bg-[#0A0A0A] text-white"
              >
                Voir un livret démo <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b-[3px] border-[#0A0A0A] bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto px-4 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { n: "2", label: "semaines de dev" },
                { n: "100%", label: "Mobile-first" },
                { n: "∞", label: "Langues auto" },
                { n: "Live", label: "Disponible maintenant" },
              ].map(({ n, label }) => (
                <div key={label} className="brutal-border border-gray-700 p-5 text-center">
                  <div className="text-3xl font-black text-[#FF6B35]">{n}</div>
                  <div className="text-xs font-bold text-gray-400 mono mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Aperçu iframe */}
        <section className="py-16 px-4 bg-[#F5F0E8]">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-gray-500 mb-2">// démo live</p>
            <h2 className="text-2xl font-bold mb-6">
              Aperçu d'un livret <span className="bg-[#FF6B35] text-white px-2 brutal-border">en direct</span>
            </h2>
            <div className="brutal-border brutal-shadow bg-white overflow-hidden">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-3 py-2 border-b-2 border-[#0A0A0A] bg-[#FF6B35]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white opacity-60" />
                  <div className="w-3 h-3 rounded-full bg-white opacity-60" />
                  <div className="w-3 h-3 rounded-full bg-white opacity-60" />
                </div>
                <div className="flex-1 bg-white bg-opacity-20 rounded-sm px-3 py-0.5 text-xs font-mono text-white opacity-90 truncate ml-2">
                  app.bunkly.co/b/NAvq6yDTOe
                </div>
              </div>
              <iframe
                src="https://app.bunkly.co/b/NAvq6yDTOe"
                title="Démo Bunkly — livret d'accueil"
                className="w-full border-0"
                style={{ height: 500 }}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="py-16 px-4 bg-[#FFFBF0]">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-gray-500 mb-2">// ce qui a été développé</p>
            <h2 className="text-2xl font-bold mb-8">
              Fonctionnalités <span className="bg-[#FFE234] px-2 brutal-border">de la plateforme</span>
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
            <p className="mono text-sm font-bold text-[#FF6B35] mb-2">// stack technique</p>
            <h2 className="text-2xl font-bold text-white mb-8">Technos utilisées</h2>
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

        {/* Secteurs */}
        <section className="py-16 px-4 bg-[#FFFBF0]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">
              Idéal pour <span className="bg-[#FFE234] px-2 brutal-border">tous les hébergements</span>
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { emoji: "🏠", label: "Locations Airbnb", desc: "Règles de la maison, WiFi, check-out, recommandations locales" },
                { emoji: "🏨", label: "Hôtels & gîtes", desc: "Services disponibles, horaires, activités, contacts d'urgence" },
                { emoji: "⛺", label: "Campings & glamping", desc: "Règlement, sanitaires, animations, commerces à proximité" },
              ].map(({ emoji, label, desc }) => (
                <div key={label} className="brutal-border bg-white p-5">
                  <div className="text-3xl mb-3">{emoji}</div>
                  <h3 className="font-bold mb-1">{label}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto brutal-border brutal-shadow bg-[#FF6B35] p-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Vous avez un projet similaire ?</h2>
              <p className="text-sm mt-1 text-orange-100">Plateforme SaaS, app mobile ou site web — devis gratuit sous 24h</p>
            </div>
            <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFE234] px-6 py-3 font-bold inline-flex items-center gap-2">
              Démarrer mon projet →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

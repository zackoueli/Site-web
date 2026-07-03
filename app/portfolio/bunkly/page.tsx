import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LazyIframe from "@/components/LazyIframe";
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
          <div className="max-w-6xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
            <div>
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
                <a href="https://bunkly.co" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Bunkly
                </a>
              </h1>
              <p className="text-xl font-medium mb-2 text-orange-100">
                Créez votre livret d'accueil digital pour vos hôtes
              </p>
              <p className="text-orange-100 leading-relaxed max-w-2xl mb-8">
                Plateforme SaaS développée en 2 semaines : les propriétaires de locations, hôtels et gîtes créent leur livret d'accueil digital en quelques minutes. Traduction automatique, templates design, dashboard complet.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href="https://bunkly.co"
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
              <p className="text-sm text-orange-100">
                Projet réalisé en collaboration avec{" "}
                <a
                  href="https://agence-web-armor.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline hover:text-white inline-flex items-center gap-1"
                >
                  Agence Web Armor <ExternalLink size={12} />
                </a>
              </p>
            </div>

            <div className="brutal-border brutal-shadow bg-white overflow-hidden">
              <div className="flex items-center gap-2 px-3 py-2 border-b-2 border-[#0A0A0A] bg-[#FF6B35]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white opacity-60" />
                  <div className="w-3 h-3 rounded-full bg-white opacity-60" />
                  <div className="w-3 h-3 rounded-full bg-white opacity-60" />
                </div>
                <div className="flex-1 bg-white bg-opacity-20 rounded-sm px-3 py-0.5 text-xs font-mono text-white opacity-90 truncate ml-2">
                  bunkly.co
                </div>
              </div>
              <LazyIframe
                src="https://app.bunkly.co/b/NAvq6yDTOe"
                title="Démo Bunkly — livret d'accueil"
                className="w-full"
                style={{ height: 500 }}
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
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

        {/* Dashboard propriétaire */}
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-[#FF6B35] mb-2">// inclus dans la plateforme</p>
            <h2 className="text-2xl font-bold text-white mb-2">
              Dashboard <span className="bg-[#FF6B35] brutal-border px-2">propriétaire</span>
            </h2>
            <p className="text-gray-400 text-sm mb-8">
              Chaque propriétaire dispose d'un espace d'administration pour créer et gérer ses livrets sans toucher au code.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: "📖", label: "Création de livrets", desc: "Création d'un livret en quelques minutes avec sections personnalisables" },
                { icon: "🎨", label: "Choix du template", desc: "Plusieurs modèles visuels disponibles selon le style de l'hébergement" },
                { icon: "🌍", label: "Traduction automatique", desc: "Le contenu est traduit automatiquement dans la langue de chaque hôte" },
                { icon: "🔗", label: "QR code & lien unique", desc: "Génération automatique d'un QR code et d'un lien de partage par livret" },
                { icon: "✏️", label: "Édition en temps réel", desc: "Modification des sections, photos et infos pratiques à tout moment" },
                { icon: "📊", label: "Gestion multi-livrets", desc: "Un même compte peut gérer plusieurs hébergements depuis le même dashboard" },
              ].map(({ icon, label, desc }) => (
                <div key={label} className="border-2 border-gray-800 p-5 hover:border-[#FF6B35] transition-colors">
                  <div className="text-2xl mb-3">{icon}</div>
                  <h3 className="font-bold mb-1 text-sm text-[#FFFBF0]">{label}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Captures d'écran */}
        <section className="py-16 px-4 bg-[#F5F0E8]">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-gray-500 mb-2">// aperçu de la plateforme</p>
            <h2 className="text-2xl font-bold mb-8">
              Le dashboard <span className="bg-[#FF6B35] text-white px-2 brutal-border">en images</span>
            </h2>
            <div className="flex flex-col gap-6">
              {[
                { src: "https://firebasestorage.googleapis.com/v0/b/livret-d-accueil-b98ba.firebasestorage.app/o/image%2022.png?alt=media&token=ef050d7a-0e53-4b32-802c-180de481b910", caption: "Mes livrets : vue d'ensemble des hébergements, statut de publication et statistiques de vues" },
                { src: "https://firebasestorage.googleapis.com/v0/b/livret-d-accueil-b98ba.firebasestorage.app/o/image%2023.png?alt=media&token=e64c2445-0e94-4b84-b925-a0f17acd1dac", caption: "Édition d'un module (Arrivée & Départ) avec aperçu mobile en temps réel" },
                { src: "https://firebasestorage.googleapis.com/v0/b/livret-d-accueil-b98ba.firebasestorage.app/o/image%2024.png?alt=media&token=6840d98e-e79b-4e1e-864f-80ad245a7f90", caption: "Modules du livret : glisser-déposer pour réorganiser, activer ou masquer chaque section" },
                { src: "https://firebasestorage.googleapis.com/v0/b/livret-d-accueil-b98ba.firebasestorage.app/o/image%2025.png?alt=media&token=2f7d5256-39de-46b7-9ef7-fd10b3b49c02", caption: "Traduction automatique du livret en plusieurs langues en un clic" },
                { src: "https://firebasestorage.googleapis.com/v0/b/livret-d-accueil-b98ba.firebasestorage.app/o/image%2026.png?alt=media&token=5b4ff726-f0c3-4791-8543-120caae1db09", caption: "Import IA : remplissage automatique du livret depuis une annonce Airbnb, Booking ou VRBO" },
              ].map(({ src, caption }) => (
                <figure key={caption}>
                  <img src={src} alt={caption} className="brutal-border brutal-shadow w-full" loading="lazy" />
                  <figcaption className="mt-2 text-xs text-gray-500 mono text-center">{caption}</figcaption>
                </figure>
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

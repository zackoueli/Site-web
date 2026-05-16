"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    slug: "forno-pizzeria",
    name: "Forno",
    tagline: "La vraie pizza, livrée chaude.",
    category: "App mobile",
    type: "Application iOS & Android",
    color: "#F25C1F",
    textColor: "#FFFBF0",
    badge: "bg-[#F25C1F] text-white",
    icon: "🍕",
    description:
      "Application mobile iOS pour pizzeria artisanale. Flux d'inscription 7 étapes, préférences, géolocalisation et promo de bienvenue.",
    tags: ["React Native", "iOS", "Android", "UX"],
    previewUrl: null,
    externalUrl: null,
  },
  {
    slug: "histoire-eternelle",
    name: "Histoire Eternelle",
    tagline: "Bijoux artisanaux façonnés à la main.",
    category: "E-commerce",
    type: "Boutique en ligne",
    color: "#C0622D",
    textColor: "#FFFBF0",
    badge: "bg-[#C0622D] text-white",
    icon: "💍",
    description:
      "Boutique e-commerce complète pour L'Atelier d'Anaïs. Catalogue bijoux, espace client, paiement Stripe, avis vérifiés et panel admin Firebase.",
    tags: ["Next.js", "Firebase", "Stripe", "E-commerce"],
    previewUrl: "https://www.histoire-eternelle-l-atelier.fr/",
    externalUrl: "https://www.histoire-eternelle-l-atelier.fr/",
  },
  {
    slug: "demo-paysagiste",
    name: "Demo Paysagiste",
    tagline: "Votre jardin entre de bonnes mains.",
    category: "Site web",
    type: "Vitrine professionnelle",
    color: "#2D5016",
    textColor: "#FFFBF0",
    badge: "bg-[#2D5016] text-white",
    icon: "🌿",
    description:
      "Site vitrine pour paysagiste avec galerie réalisations, demande de devis en ligne et back-office Firebase pour gérer les contenus sans développeur.",
    tags: ["Next.js", "Firebase", "SEO local", "Artisan"],
    previewUrl: "https://demo.paysagiste.breizhapp.tech/",
    externalUrl: "https://demo.paysagiste.breizhapp.tech/",
  },
];

function BrowserPreview({ url, color }: { url: string; color: string }) {
  // Hauteur réelle simulée du site (px dans l'espace iframe non zoomé)
  // L'iframe est zoomée à 37.8%, donc 1800px réels = ~680px visibles
  // On translate l'iframe de 0 à -1100px (espace hors vue) au survol
  const IFRAME_H = 1800;
  const SCALE = 0.378;
  const VISIBLE_H = 310; // hauteur du conteneur moins le chrome
  const SCROLL_DISTANCE = Math.round(IFRAME_H * SCALE - VISIBLE_H); // ~370px

  return (
    <div className="preview-zone relative w-full overflow-hidden cursor-ns-resize" style={{ height: 340 }}>
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-3 py-2 border-b-2 border-[#0A0A0A] relative z-10"
        style={{ backgroundColor: color }}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-white opacity-60" />
          <div className="w-3 h-3 rounded-full bg-white opacity-60" />
          <div className="w-3 h-3 rounded-full bg-white opacity-60" />
        </div>
        <div className="flex-1 bg-white bg-opacity-20 rounded-sm px-3 py-0.5 text-xs font-mono text-white opacity-80 truncate">
          {url.replace("https://", "")}
        </div>
      </div>

      {/* Wrapper qui reçoit le hover et anime la translation */}
      <div
        className="iframe-scroll-wrapper"
        style={{
          width: `${100 / SCALE}%`,
          transformOrigin: "top left",
          transform: `scale(${SCALE})`,
          // translateY en espace non-zoomé = SCROLL_DISTANCE / SCALE
          ["--scroll-distance" as string]: `-${Math.round(SCROLL_DISTANCE / SCALE)}px`,
        }}
      >
        <iframe
          src={url}
          className="w-full border-none pointer-events-none block"
          style={{ height: IFRAME_H }}
          loading="lazy"
          sandbox="allow-same-origin allow-scripts"
          title="Aperçu du site"
        />
      </div>

      {/* Overlay transparent pour capter le hover sans bloquer l'affichage */}
      <div className="absolute inset-0 z-20 cursor-default" />
    </div>
  );
}

function PhonePreview({ color }: { color: string }) {
  return (
    <div className="relative w-full flex items-center justify-center border-b-2 border-[#0A0A0A]" style={{ height: 340, backgroundColor: color }}>
      {/* Phone mockup */}
      <div
        className="bg-[#0A0A0A] brutal-border relative"
        style={{ width: 130, height: 270, borderRadius: "1.8rem", padding: "8px 6px" }}
      >
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-[#0A0A0A] z-10 flex items-center justify-center">
          <div className="w-6 h-1.5 rounded-full bg-[#1a1a1a] border border-[#333]" />
        </div>
        <div className="w-full h-full bg-[#FFFBF0] overflow-hidden flex flex-col" style={{ borderRadius: "1.4rem" }}>
          <div className="px-3 pt-5 pb-2" style={{ backgroundColor: color }}>
            <p className="text-white text-[7px] font-bold mono opacity-70">FORNO PIZZERIA</p>
            <p className="text-white font-bold text-[9px] mt-0.5">Bonjour 👋</p>
          </div>
          <div className="flex-1 p-2 flex flex-col gap-1.5 overflow-hidden">
            {["🍕 Margherita — 12,90€", "🍕 4 Fromages — 14,50€", "🍕 Reine — 13,90€"].map((item) => (
              <div key={item} className="brutal-border bg-white p-1.5 text-[7px] font-bold">{item}</div>
            ))}
            <div className="brutal-border bg-[#0A0A0A] text-white p-1 text-center text-[7px] font-bold mt-auto">Commander →</div>
          </div>
          <div className="border-t-2 border-black flex justify-around py-1.5 bg-white">
            {["🏠", "🍕", "🛒", "👤"].map((e) => <span key={e} className="text-[10px]">{e}</span>)}
          </div>
        </div>
        <div className="absolute -right-[3px] top-14 w-[3px] h-8 bg-[#0A0A0A] brutal-border rounded-sm" />
        <div className="absolute -left-[3px] top-12 w-[3px] h-5 bg-[#0A0A0A] brutal-border rounded-sm" />
        <div className="absolute -left-[3px] top-20 w-[3px] h-5 bg-[#0A0A0A] brutal-border rounded-sm" />
      </div>

      <div className="absolute bottom-3 right-3 bg-white brutal-border px-2 py-1 text-[10px] font-bold mono">
        iOS & Android ✦
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FFFBF0]">

        {/* Header */}
        <section className="border-b-[3px] border-[#0A0A0A] py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="mono text-sm font-bold text-gray-500 mb-2">// réalisations</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
              Portfolio &{" "}
              <span className="bg-[#F25C1F] text-white px-2 brutal-border">projets</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Applications mobiles, boutiques e-commerce et sites web créés sur mesure
              pour des restaurateurs, artisans et commerçants.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="max-w-5xl mx-auto px-4 py-16 flex flex-col gap-12">
          {projects.map((p) => (
            <div
              key={p.slug}
              className="brutal-border bg-white overflow-hidden"
            >
              {/* Preview */}
              {p.previewUrl ? (
                <BrowserPreview url={p.previewUrl} color={p.color} />
              ) : (
                <PhonePreview color={p.color} />
              )}

              {/* Info */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className={`text-xs font-bold px-2 py-1 brutal-border ${p.badge}`}>
                        {p.category.toUpperCase()}
                      </span>
                      <span className="text-xs font-bold mono text-gray-400">{p.type}</span>
                    </div>
                    <h2 className="text-3xl font-black mb-1">{p.name}</h2>
                    <p className="text-gray-500 font-medium italic">{p.tagline}</p>
                  </div>
                  {p.externalUrl && (
                    <a
                      href={p.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brutal-border px-4 py-2 text-sm font-bold inline-flex items-center gap-2 hover:bg-[#FFE234] transition-colors shrink-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Voir le site <ExternalLink size={13} />
                    </a>
                  )}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-5">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t) => (
                    <span key={t} className="brutal-border bg-[#FFFBF0] text-xs font-bold mono px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/portfolio/${p.slug}`}
                  className="inline-flex items-center gap-2 font-bold text-sm brutal-border px-4 py-2 hover:bg-[#0A0A0A] hover:text-[#FFFBF0] transition-colors"
                >
                  Voir l'étude de cas <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}

          {/* Coming soon */}
          <div className="brutal-border bg-[#0A0A0A] text-[#FFFBF0] flex flex-col items-center justify-center p-16 text-center">
            <p className="mono text-xs text-gray-500 mb-4">// en cours</p>
            <div className="text-4xl mb-4">🔨</div>
            <h3 className="text-xl font-black mb-2">Prochain projet</h3>
            <p className="text-gray-500 text-sm mb-6">
              D'autres réalisations arrivent bientôt.
              Contactez-moi pour discuter du vôtre.
            </p>
            <a
              href="/#contact"
              className="brutal-border bg-[#FFE234] text-[#0A0A0A] px-5 py-2.5 text-sm font-bold hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#FFE234] transition-all"
            >
              Démarrer mon projet
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

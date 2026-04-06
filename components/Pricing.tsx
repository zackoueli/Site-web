"use client";
import { useState } from "react";
import { Check } from "lucide-react";

// ── Types ──────────────────────────────────────────────
type Level = "non" | "basique" | "standard" | "avance";

interface CategoryLevel {
  label: string;
  desc: string;
  install: number;
  monthly: number;
}

interface Category {
  id: string;
  emoji: string;
  name: string;
  subtitle: string;
  required: boolean;
  levels: Partial<Record<Level, CategoryLevel>>;
  default: Level;
}

// ── Données ────────────────────────────────────────────
const BASE_INSTALL = 490;
const BASE_MONTHLY = 49;

const categories: Category[] = [
  {
    id: "auth",
    emoji: "🔐",
    name: "Comptes utilisateurs",
    subtitle: "Comment vos clients se connectent",
    required: true,
    default: "basique",
    levels: {
      basique: {
        label: "Basique",
        desc: "Email & mot de passe, profil simple",
        install: 0, monthly: 0,
      },
      standard: {
        label: "Standard",
        desc: "Google / Apple / Facebook, profil personnalisable",
        install: 80, monthly: 0,
      },
      avance: {
        label: "Avancé",
        desc: "Rôles multiples (admin/vendeur/client), 2FA, accès restreints",
        install: 180, monthly: 0,
      },
    },
  },
  {
    id: "ecommerce",
    emoji: "🛒",
    name: "Vente en ligne",
    subtitle: "Vos clients commandent et paient dans l'app",
    required: false,
    default: "non",
    levels: {
      non: { label: "Non inclus", desc: "", install: 0, monthly: 0 },
      basique: {
        label: "Basique",
        desc: "Catalogue, panier, paiement sécurisé (Stripe)",
        install: 200, monthly: 30,
      },
      standard: {
        label: "Standard",
        desc: "+ Codes promo, suivi de commande, historique",
        install: 350, monthly: 50,
      },
      avance: {
        label: "Avancé",
        desc: "+ Abonnements, facturation auto, livraison & tracking",
        install: 550, monthly: 80,
      },
    },
  },
  {
    id: "communication",
    emoji: "💬",
    name: "Communication",
    subtitle: "Vous et vos clients restez en contact",
    required: false,
    default: "non",
    levels: {
      non: { label: "Non inclus", desc: "", install: 0, monthly: 0 },
      basique: {
        label: "Basique",
        desc: "Notifications push, avis & notes ⭐",
        install: 60, monthly: 10,
      },
      standard: {
        label: "Standard",
        desc: "+ Emails automatiques, alertes SMS",
        install: 120, monthly: 20,
      },
      avance: {
        label: "Avancé",
        desc: "+ Chat en temps réel (type WhatsApp)",
        install: 280, monthly: 50,
      },
    },
  },
  {
    id: "geoloc",
    emoji: "📍",
    name: "Géolocalisation",
    subtitle: "Cartes, position et points autour de vous",
    required: false,
    default: "non",
    levels: {
      non: { label: "Non inclus", desc: "", install: 0, monthly: 0 },
      basique: {
        label: "Basique",
        desc: "Carte interactive, position de l'utilisateur",
        install: 120, monthly: 0,
      },
      standard: {
        label: "Standard",
        desc: "+ Recherche à proximité, points d'intérêt",
        install: 200, monthly: 0,
      },
      avance: {
        label: "Avancé",
        desc: "+ Itinéraires, zones de livraison",
        install: 280, monthly: 0,
      },
    },
  },
  {
    id: "admin",
    emoji: "📊",
    name: "Espace admin",
    subtitle: "Gérer votre app depuis un tableau de bord web",
    required: false,
    default: "non",
    levels: {
      non: { label: "Non inclus", desc: "", install: 0, monthly: 0 },
      basique: {
        label: "Basique",
        desc: "Dashboard simple, vue des commandes",
        install: 100, monthly: 0,
      },
      standard: {
        label: "Standard",
        desc: "+ Statistiques, gestion des utilisateurs",
        install: 200, monthly: 20,
      },
      avance: {
        label: "Avancé",
        desc: "+ Gestion de contenu, export Excel/CSV, modération",
        install: 350, monthly: 30,
      },
    },
  },
  {
    id: "design",
    emoji: "🎨",
    name: "Design & interface",
    subtitle: "L'aspect visuel et l'expérience utilisateur",
    required: true,
    default: "basique",
    levels: {
      basique: {
        label: "Basique",
        desc: "Design propre et fonctionnel, adapté à votre charte",
        install: 0, monthly: 0,
      },
      standard: {
        label: "Standard",
        desc: "Design sur mesure, identité visuelle unique",
        install: 200, monthly: 0,
      },
      avance: {
        label: "Avancé",
        desc: "+ Animations soignées, mode sombre, accessibilité",
        install: 380, monthly: 0,
      },
    },
  },
  {
    id: "tech",
    emoji: "⚙️",
    name: "Fonctionnalités spéciales",
    subtitle: "Caméra, scanner, IA, contenu multimédia, hors-ligne...",
    required: false,
    default: "non",
    levels: {
      non: { label: "Non inclus", desc: "", install: 0, monthly: 0 },
      basique: {
        label: "Basique",
        desc: "Scan QR code / code-barres, caméra, upload de fichiers",
        install: 150, monthly: 0,
      },
      standard: {
        label: "Standard",
        desc: "+ Biométrie (Face ID / empreinte), intégrations API externes",
        install: 300, monthly: 0,
      },
      avance: {
        label: "Avancé",
        desc: "+ Intégration IA, mode hors-ligne, streaming vidéo/audio",
        install: 500, monthly: 0,
      },
    },
  },
  {
    id: "reservation",
    emoji: "📅",
    name: "Réservation & Fidélité",
    subtitle: "Prise de rendez-vous et fidélisation de vos clients",
    required: false,
    default: "non",
    levels: {
      non: { label: "Non inclus", desc: "", install: 0, monthly: 0 },
      basique: {
        label: "Basique",
        desc: "Réservation / prise de RDV en ligne, calendrier simple",
        install: 120, monthly: 15,
      },
      standard: {
        label: "Standard",
        desc: "+ Programme de fidélité, points & récompenses, rappels automatiques",
        install: 220, monthly: 25,
      },
      avance: {
        label: "Avancé",
        desc: "+ Gestion des disponibilités en temps réel, abonnements, carte de fidélité digitale",
        install: 350, monthly: 40,
      },
    },
  },
  {
    id: "gaming",
    emoji: "🎮",
    name: "Jeux & Gamification",
    subtitle: "Intégrer du jeu ou créer une app ludique",
    required: false,
    default: "non",
    levels: {
      non: { label: "Non inclus", desc: "", install: 0, monthly: 0 },
      basique: {
        label: "Basique",
        desc: "Éléments de gamification : points, badges, niveaux utilisateur",
        install: 150, monthly: 0,
      },
      standard: {
        label: "Standard",
        desc: "+ Mini-jeu intégré, classement (leaderboard), défis",
        install: 350, monthly: 20,
      },
      avance: {
        label: "Avancé",
        desc: "+ Jeu complet sur mesure, progression, achats in-app, animations",
        install: 700, monthly: 40,
      },
    },
  },
  {
    id: "i18n",
    emoji: "🌍",
    name: "Internationalisation",
    subtitle: "Toucher des clients dans plusieurs langues ou pays",
    required: false,
    default: "non",
    levels: {
      non: { label: "Non inclus", desc: "", install: 0, monthly: 0 },
      basique: {
        label: "Basique",
        desc: "Application en 2 langues (ex : français + anglais)",
        install: 100, monthly: 0,
      },
      standard: {
        label: "Standard",
        desc: "+ Multi-devise, formats locaux (dates, monnaies)",
        install: 180, monthly: 0,
      },
      avance: {
        label: "Avancé",
        desc: "+ 5 langues ou plus, détection automatique, support RTL (arabe, hébreu...)",
        install: 300, monthly: 0,
      },
    },
  },
];

const LEVEL_COLORS: Record<Level, string> = {
  non: "#f3f4f6",
  basique: "#FFE234",
  standard: "#FF6B35",
  avance: "#7C3AED",
};

const LEVEL_TEXT: Record<Level, string> = {
  non: "#9ca3af",
  basique: "#0A0A0A",
  standard: "#FFFBF0",
  avance: "#FFFBF0",
};

// ── Composant ──────────────────────────────────────────
export default function Pricing() {
  const [selections, setSelections] = useState<Record<string, Level>>(
    Object.fromEntries(categories.map((c) => [c.id, c.default]))
  );

  const totalInstall = categories.reduce((sum, cat) => {
    const level = selections[cat.id] as Level;
    return sum + (cat.levels[level]?.install ?? 0);
  }, BASE_INSTALL);

  const totalMonthly = categories.reduce((sum, cat) => {
    const level = selections[cat.id] as Level;
    return sum + (cat.levels[level]?.monthly ?? 0);
  }, BASE_MONTHLY);

  const yearTotal = totalInstall + totalMonthly * 12;

  const select = (catId: string, level: Level) =>
    setSelections((s) => ({ ...s, [catId]: level }));

  return (
    <section id="tarifs" className="py-24 border-y-[3px] border-black bg-[#FFFBF0]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="mb-12">
          <p className="mono text-sm font-bold mb-2 text-gray-400">// configurez votre projet</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Estimez votre{" "}
            <span className="bg-[#FFE234] px-3 brutal-border">app</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl">
            Sélectionnez ce dont vous avez besoin — le prix s'ajuste automatiquement. Pas de jargon, que des fonctionnalités concrètes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {/* ── Configurateur (2/3) ── */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {categories.map((cat) => {
              const selected = selections[cat.id] as Level;
              const levels = Object.entries(cat.levels) as [Level, CategoryLevel][];
              return (
                <div key={cat.id} className="brutal-border brutal-shadow bg-white p-5">
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{cat.emoji}</span>
                        <span className="font-bold text-base">{cat.name}</span>
                        {cat.required && (
                          <span className="mono text-[10px] font-bold bg-[#0A0A0A] text-[#FFFBF0] px-1.5 py-0.5">
                            inclus
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mt-0.5 ml-7">{cat.subtitle}</p>
                    </div>
                    {/* Prix du niveau sélectionné */}
                    {selected !== "non" && cat.levels[selected] && (
                      <div className="text-right flex-shrink-0">
                        {cat.levels[selected]!.install > 0 && (
                          <p className="text-sm font-bold mono">+{cat.levels[selected]!.install}€</p>
                        )}
                        {cat.levels[selected]!.monthly > 0 && (
                          <p className="text-xs text-gray-500 mono">+{cat.levels[selected]!.monthly}€/mois</p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Level buttons */}
                  <div className="flex flex-wrap gap-2">
                    {levels.map(([level, data]) => {
                      const isSelected = selected === level;
                      return (
                        <button
                          key={level}
                          onClick={() => select(cat.id, level)}
                          className="brutal-border text-left transition-all"
                          style={{
                            backgroundColor: isSelected ? LEVEL_COLORS[level] : "white",
                            color: isSelected ? LEVEL_TEXT[level] : "#6b7280",
                            boxShadow: isSelected ? "3px 3px 0 #0A0A0A" : "none",
                            padding: "8px 14px",
                            fontWeight: isSelected ? 700 : 500,
                            fontSize: 13,
                          }}
                        >
                          <span className="flex items-center gap-1.5">
                            {isSelected && <Check size={11} strokeWidth={3} />}
                            {data.label}
                          </span>
                          {isSelected && data.desc && (
                            <p className="text-[11px] mt-1 opacity-80 font-normal max-w-[200px]">
                              {data.desc}
                            </p>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Résumé prix (1/3, sticky) ── */}
          <div className="lg:sticky lg:top-20 flex flex-col gap-4">
            <div className="brutal-border brutal-shadow-lg bg-[#0A0A0A] text-[#FFFBF0] p-6">
              <p className="mono text-xs text-gray-400 mb-4">ESTIMATION DU PROJET</p>

              {/* Prix installation */}
              <div className="border-b border-gray-800 pb-4 mb-4">
                <p className="text-sm text-gray-400 mb-1">Installation (une fois)</p>
                <p className="text-4xl font-bold">{totalInstall}€</p>
              </div>

              {/* Prix mensuel */}
              <div className="border-b border-gray-800 pb-4 mb-4">
                <p className="text-sm text-gray-400 mb-1">Abonnement mensuel</p>
                <p className="text-4xl font-bold">
                  {totalMonthly}€
                  <span className="text-lg text-gray-400">/mois</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">Hébergement + support inclus</p>
              </div>

              {/* Total 1 an */}
              <div className="bg-[#FFE234] text-[#0A0A0A] p-3 brutal-border border-[#FFE234] mb-6">
                <p className="text-xs font-bold mono mb-0.5">TOTAL SUR 1 AN</p>
                <p className="text-2xl font-bold">{yearTotal}€</p>
                <p className="text-xs opacity-70">install + 12 mois</p>
              </div>

              {/* Détail des add-ons */}
              <div className="flex flex-col gap-1.5 mb-6">
                <p className="mono text-xs text-gray-500 mb-1">INCLUS DANS VOTRE SÉLECTION</p>
                {categories.map((cat) => {
                  const level = selections[cat.id] as Level;
                  if (level === "non") return null;
                  return (
                    <div key={cat.id} className="flex items-center gap-2 text-xs">
                      <Check size={10} className="text-[#00D4AA] flex-shrink-0" />
                      <span className="text-gray-300">
                        {cat.emoji} {cat.name}{" "}
                        <span className="text-gray-500">({cat.levels[level]?.label})</span>
                      </span>
                    </div>
                  );
                })}
              </div>

              <a
                href="#contact"
                className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-4 py-3 w-full justify-center font-bold"
              >
                Demander un devis →
              </a>
              <p className="text-xs text-gray-600 text-center mt-3">
                Gratuit · Sans engagement · Réponse sous 24h
              </p>
            </div>

            {/* Boutique spéciale */}
            <div className="brutal-border brutal-shadow bg-[#00D4AA] p-5">
              <p className="font-bold mb-1">🛍️ Boutique e-commerce ?</p>
              <p className="text-sm mb-3">
                Option spéciale : <strong>0€ d'installation</strong> + 12% sur vos ventes.
              </p>
              <a href="#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-4 py-2 text-sm w-full justify-center">
                En savoir plus →
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-500 brutal-border bg-white p-4 brutal-shadow">
          Cette estimation est indicative. Le devis final est établi après discussion de votre projet.{" "}
          <a href="#contact" className="font-bold underline">Contactez-moi pour un devis gratuit.</a>
        </p>
      </div>
    </section>
  );
}

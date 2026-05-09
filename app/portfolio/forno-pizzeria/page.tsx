import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Forno — App mobile pizzeria iOS & Android | BreizhApp",
  description:
    "Découvrez Forno, une application mobile sur mesure pour pizzeria : inscription iOS, commande en ligne, géolocalisation. Réalisé par BreizhApp.",
  alternates: { canonical: "https://breizhapp.tech/portfolio/forno-pizzeria" },
};

const screens = [
  {
    id: "01",
    label: "Bienvenue",
    desc: "Écran d'accueil avec identité visuelle forte. Logo animé, accroche et CTA principal.",
    color: "bg-white",
    icon: "🍕",
    detail: "Design épuré, brand Forno immédiatement reconnaissable.",
  },
  {
    id: "02",
    label: "Créer un compte",
    desc: "Saisie du numéro de téléphone avec indicatif pays. Validation en temps réel.",
    color: "bg-white",
    icon: "📱",
    detail: "UX mobile native : clavier numérique automatique.",
  },
  {
    id: "03",
    label: "Mot de passe",
    desc: "Création sécurisée avec indicateurs de force. Affichage/masquage du mot de passe.",
    color: "bg-white",
    icon: "🔐",
    detail: "Validation instantanée : longueur, majuscule, chiffre.",
  },
  {
    id: "04",
    label: "Vérification",
    desc: "Code OTP à 6 chiffres envoyé par SMS. Clavier natif iOS avec auto-remplissage.",
    color: "bg-white",
    icon: "✅",
    detail: "Renvoi du code possible, timer de 2 minutes.",
  },
  {
    id: "05",
    label: "Vos goûts",
    desc: "Sélection des préférences pizza. Chips multi-sélection : Margherita, Végétarienne, Diavola…",
    color: "bg-white",
    icon: "❤️",
    detail: "Minimum 3 sélections pour personnaliser l'expérience.",
  },
  {
    id: "06",
    label: "Adresse",
    desc: "Géolocalisation automatique ou saisie manuelle. Suggestions d'adresses en temps réel.",
    color: "bg-white",
    icon: "📍",
    detail: "Vérification de la zone de livraison à la volée.",
  },
  {
    id: "07",
    label: "C'est prêt !",
    desc: "Confirmation avec code promo de bienvenue FORNO20 (-20%). Call-to-action vers la carte.",
    color: "bg-[#F25C1F]",
    icon: "🔥",
    detail: "Écran de succès orange pour marquer la réussite.",
  },
];

const features = [
  { label: "Plateforme", value: "iOS & Android" },
  { label: "Technologie", value: "React Native" },
  { label: "Type", value: "Application de commande" },
  { label: "Secteur", value: "Restauration / Pizzeria" },
  { label: "Langue", value: "Français" },
  { label: "Écrans", value: "7 écrans de flux" },
];

export default function FornoPortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        {/* Hero */}
        <section className="border-b-[3px] border-[#0A0A0A] bg-[#FFFBF0]">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
            <div className="mb-6">
              <Link
                href="/#portfolio"
                className="inline-flex items-center gap-2 text-sm font-bold mono text-gray-500 hover:text-[#0A0A0A] transition-colors"
              >
                ← Retour au portfolio
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                {/* Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="brutal-border bg-[#F25C1F] text-white px-3 py-1 text-xs font-bold mono">
                    RÉALISATION
                  </span>
                  <span className="brutal-border bg-[#FFE234] text-[#0A0A0A] px-3 py-1 text-xs font-bold mono">
                    RESTAURATION
                  </span>
                </div>

                {/* Logo Forno */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 brutal-border bg-[#F25C1F] flex items-center justify-center">
                    <span className="text-white text-3xl font-black">F</span>
                  </div>
                  <div>
                    <h1 className="text-5xl md:text-6xl font-black tracking-tight">FORNO</h1>
                    <p className="text-gray-500 font-medium">La vraie pizza, livrée chaude.</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Application mobile iOS & Android pour pizzeria artisanale.
                  Flux d'inscription en 7 étapes, personnalisation des préférences,
                  géolocalisation et code promo de bienvenue.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { n: "7", label: "Écrans" },
                    { n: "25min", label: "Livraison" },
                    { n: "−20%", label: "Bienvenue" },
                  ].map((s) => (
                    <div key={s.label} className="brutal-border bg-white p-4 text-center">
                      <div className="text-2xl font-black text-[#F25C1F]">{s.n}</div>
                      <div className="text-xs font-bold text-gray-500 mono mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="/#contact"
                  className="brutal-btn bg-[#F25C1F] text-white px-6 py-3 inline-block font-bold"
                >
                  Je veux une app similaire →
                </a>
              </div>

              {/* Mockup strip hero */}
              <div className="relative overflow-hidden">
                <div className="brutal-border bg-white p-6">
                  <p className="text-xs font-bold mono text-gray-400 mb-4">// FLUX D'INSCRIPTION iOS — 7 ÉCRANS</p>
                  {/* Simulated phone screens in a grid */}
                  <div className="grid grid-cols-4 gap-2">
                    {screens.slice(0, 4).map((s) => (
                      <PhoneFrame key={s.id} screen={s} mini />
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {screens.slice(4).map((s) => (
                      <PhoneFrame key={s.id} screen={s} mini />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Screen-by-screen breakdown */}
        <section className="border-b-[3px] border-[#0A0A0A]">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="mb-12">
              <p className="mono text-sm font-bold text-gray-500 mb-2">// détail des écrans</p>
              <h2 className="text-4xl font-black">
                7 écrans,{" "}
                <span className="bg-[#FFE234] px-2 brutal-border">une expérience fluide</span>
              </h2>
            </div>

            <div className="space-y-6">
              {screens.map((s, i) => (
                <div
                  key={s.id}
                  className="brutal-border bg-white grid md:grid-cols-[80px_1fr_auto] gap-0 overflow-hidden"
                >
                  {/* Number */}
                  <div className="bg-[#0A0A0A] text-[#FFE234] flex items-center justify-center p-4">
                    <span className="text-2xl font-black mono">{s.id}</span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{s.icon}</span>
                      <h3 className="text-xl font-black">{s.label}</h3>
                      {i === 6 && (
                        <span className="brutal-border bg-[#F25C1F] text-white text-xs font-bold px-2 py-0.5">
                          SUCCÈS
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700 mb-2">{s.desc}</p>
                    <p className="text-sm text-gray-500 mono">{s.detail}</p>
                  </div>

                  {/* Color swatch */}
                  <div
                    className={`w-full md:w-16 h-2 md:h-auto ${s.id === "07" ? "bg-[#F25C1F]" : "bg-[#FFFBF0]"} border-l-0 md:border-l-[3px] border-[#0A0A0A]`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech & details */}
        <section className="border-b-[3px] border-[#0A0A0A] bg-[#0A0A0A] text-[#FFFBF0]">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="mono text-sm font-bold text-[#FFE234] mb-2">// fiche technique</p>
                <h2 className="text-3xl font-black mb-8">Détails du projet</h2>
                <div className="space-y-0">
                  {features.map((f, i) => (
                    <div
                      key={f.label}
                      className={`flex justify-between py-4 ${i < features.length - 1 ? "border-b border-gray-800" : ""}`}
                    >
                      <span className="text-gray-400 mono text-sm">{f.label}</span>
                      <span className="font-bold text-[#FFE234]">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="mono text-sm font-bold text-[#FFE234] mb-2">// fonctionnalités clés</p>
                <h2 className="text-3xl font-black mb-8">Ce que l'app inclut</h2>
                <ul className="space-y-3">
                  {[
                    "Inscription par numéro de téléphone (OTP SMS)",
                    "Validation du mot de passe en temps réel",
                    "Personnalisation des préférences pizza",
                    "Géolocalisation & saisie d'adresse intelligente",
                    "Code promo de bienvenue intégré (−20%)",
                    "Design system orange & blanc cohérent",
                    "Animations de transition entre écrans",
                    "Clavier natif iOS adapté à chaque champ",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-[#F25C1F] font-black flex-shrink-0 mt-0.5">→</span>
                      <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design system */}
        <section className="border-b-[3px] border-[#0A0A0A]">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="mb-12">
              <p className="mono text-sm font-bold text-gray-500 mb-2">// design system</p>
              <h2 className="text-4xl font-black">Palette & typographie</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Colors */}
              <div className="brutal-border bg-white p-6">
                <h3 className="font-black mb-6 text-lg">Couleurs</h3>
                <div className="space-y-4">
                  {[
                    { name: "Orange Forno", hex: "#F25C1F", bg: "bg-[#F25C1F]", text: "text-white" },
                    { name: "Noir profond", hex: "#1A1A1A", bg: "bg-[#1A1A1A]", text: "text-white" },
                    { name: "Blanc pur", hex: "#FFFFFF", bg: "bg-white border border-gray-200", text: "text-gray-800" },
                    { name: "Crème douce", hex: "#FFF8F5", bg: "bg-[#FFF8F5] border border-gray-200", text: "text-gray-800" },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center gap-4">
                      <div className={`w-12 h-12 brutal-border flex-shrink-0 ${c.bg}`} />
                      <div>
                        <div className="font-bold text-sm">{c.name}</div>
                        <div className="text-xs mono text-gray-500">{c.hex}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography & UX principles */}
              <div className="brutal-border bg-white p-6">
                <h3 className="font-black mb-6 text-lg">Principes UX</h3>
                <div className="space-y-5">
                  {[
                    {
                      title: "Progressive disclosure",
                      desc: "Chaque écran demande une seule information. L'utilisateur avance pas à pas sans surcharge cognitive.",
                    },
                    {
                      title: "Feedback immédiat",
                      desc: "Validation en temps réel de chaque champ. L'utilisateur sait toujours où il en est.",
                    },
                    {
                      title: "Clavier adaptatif",
                      desc: "Clavier numérique pour le téléphone, OTP natif iOS pour la vérification.",
                    },
                    {
                      title: "Récompense finale",
                      desc: "Écran de succès orange avec code promo — convertit l'inscription en première commande.",
                    },
                  ].map((p) => (
                    <div key={p.title}>
                      <div className="font-black text-sm mb-1 text-[#F25C1F]">{p.title}</div>
                      <div className="text-sm text-gray-600 leading-relaxed">{p.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F25C1F] border-b-[3px] border-[#0A0A0A]">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <p className="mono text-sm font-bold text-orange-200 mb-4">// votre projet</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Vous avez une pizzeria,<br />un restaurant, un commerce ?
            </h2>
            <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto">
              Je crée votre application mobile sur mesure — iOS & Android —
              au même niveau de qualité que Forno. Devis gratuit sous 24h.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/#contact"
                className="brutal-border bg-[#0A0A0A] text-[#FFE234] px-8 py-4 font-black text-lg hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#fff] transition-all"
              >
                Démarrer mon projet →
              </a>
              <a
                href="/#tarifs"
                className="brutal-border bg-white text-[#0A0A0A] px-8 py-4 font-black text-lg hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#0A0A0A] transition-all"
              >
                Voir les tarifs
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

function PhoneFrame({ screen, mini = false }: { screen: typeof screens[0]; mini?: boolean }) {
  const isOrange = screen.id === "07";
  return (
    <div className={`${mini ? "rounded-lg overflow-hidden" : "rounded-2xl overflow-hidden"} border-2 border-[#0A0A0A] flex flex-col`}>
      {/* Status bar */}
      <div className={`flex justify-between items-center px-2 py-0.5 ${isOrange ? "bg-[#F25C1F]" : "bg-white"}`}>
        <span className={`text-[6px] font-bold ${isOrange ? "text-white" : "text-[#0A0A0A]"}`}>9:41</span>
        <div className="w-3 h-1 bg-current opacity-40 rounded-full" />
      </div>
      {/* Screen body */}
      <div className={`flex-1 flex flex-col items-center justify-center p-2 ${isOrange ? "bg-[#F25C1F]" : "bg-white"}`}>
        <div className={`text-xl mb-1`}>{screen.icon}</div>
        <div className={`text-[7px] font-black text-center leading-tight ${isOrange ? "text-white" : "text-[#0A0A0A]"}`}>
          {screen.label}
        </div>
        {/* Orange CTA bar at bottom */}
        <div className={`mt-2 w-full h-1.5 rounded-full ${isOrange ? "bg-white opacity-40" : "bg-[#F25C1F]"}`} />
      </div>
      {/* Screen number */}
      <div className={`text-center text-[6px] font-bold mono py-0.5 ${isOrange ? "bg-[#D94D15] text-white" : "bg-gray-100 text-gray-500"}`}>
        {screen.id}
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import PhoneVideo from "./PhoneVideo";

const apps = [
  {
    title: "App Pizzeria",
    category: "Restaurant",
    emoji: "🍕",
    color: "#FF6B35",
    tags: ["Menu", "Commande", "Panier", "Paiement Stripe", "Suivi", "Fidélité"],
    desc: "Application complète pour une pizzeria : navigation du menu, commande en ligne, paiement sécurisé, suivi de commande en temps réel et programme de fidélité.",
    video: "https://firebasestorage.googleapis.com/v0/b/pizzeria-73927.firebasestorage.app/o/Capture%20Pizzeria%2FHRQE2922.MP4?alt=media&token=aa1ceb26-1f8c-476e-8975-179cf87277ed",
  },
  {
    title: "Boutique Maraîcher",
    category: "E-commerce local",
    emoji: "🌱",
    color: "#00D4AA",
    tags: ["Catalogue", "Panier", "Paiement Stripe", "Abonnement", "Livraison"],
    desc: "Application de vente en ligne pour maraîchers et primeurs : catalogue produits, commande, paiement sécurisé et gestion des livraisons.",
    video: "https://firebasestorage.googleapis.com/v0/b/pizzeria-73927.firebasestorage.app/o/Capture%20Pizzeria%2FDSDT4894.MP4?alt=media&token=41f9e36c-95a6-416e-879c-71ceb5456ee6",
  },
  {
    title: "Jeu Mobile",
    category: "Gaming",
    emoji: "🎮",
    color: "#7C3AED",
    tags: ["Gameplay", "Leaderboard", "Animations", "In-app purchase", "iOS & Android"],
    desc: "Jeu mobile développé sur mesure : gameplay fluide, classement mondial, animations et achats in-app. Une seule base de code pour iOS et Android.",
    video: "https://firebasestorage.googleapis.com/v0/b/pizzeria-73927.firebasestorage.app/o/Capture%20Pizzeria%2FUMON9022.MP4?alt=media&token=c83f1135-0edc-4b61-bc50-7c31421282bf",
  },
];

// Placeholder phone pour les apps sans captures
function PhonePlaceholder({ app }: { app: typeof apps[0] }) {
  const W = 300 + 16;
  const H = Math.round(300 * (2208 / 1242)) + 28;
  return (
    <div
      className="flex flex-col items-center justify-center gap-4"
      style={{
        width: W,
        height: H,
        borderRadius: 44,
        background: "#1a1a1a",
        border: "3px solid #0A0A0A",
        boxShadow: "6px 6px 0px #0A0A0A",
      }}
    >
      <span className="text-6xl">{app.emoji}</span>
      <span className="text-gray-500 font-bold text-sm text-center px-8">
        Démo vidéo à venir
      </span>
      <a href="#contact" className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-4 py-2 text-xs">
        Votre app ici →
      </a>
    </div>
  );
}

export default function Portfolio() {
  const [appIndex, setAppIndex] = useState(0);
  const app = apps[appIndex];

  return (
    <section id="portfolio" className="py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <p className="mono text-sm font-bold mb-2 text-gray-400">// mes réalisations</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFFBF0]">
              Portfolio{" "}
              <span className="bg-[#FFE234] text-[#0A0A0A] px-2 brutal-border">réel</span>
            </h2>
          </div>
          <a
            href="#tarifs"
            className="brutal-btn bg-[#FF6B9D] text-white px-5 py-2.5"
          >
            Démarrer mon projet →
          </a>
        </div>

        {/* ── Boutons de sélection d'app (au-dessus du phone) ── */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {apps.map((a, i) => (
            <button
              key={i}
              onClick={() => setAppIndex(i)}
              className={`brutal-btn px-5 py-2 text-sm font-bold transition-all ${
                i === appIndex
                  ? "bg-[#FFE234] text-[#0A0A0A]"
                  : "bg-[#1a1a1a] text-gray-400 border-gray-600"
              }`}
              style={i !== appIndex ? { boxShadow: "none" } : {}}
            >
              {a.emoji} {a.title}
            </button>
          ))}
        </div>

        {/* ── Layout principal : phone à gauche, infos à droite ── */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center">
            {app.video
              ? <PhoneVideo key={app.video} src={app.video} appName={app.title} />
              : <PhonePlaceholder app={app} />
            }
          </div>

          {/* Infos app */}
          <div>
            <div
              className="inline-flex items-center gap-2 brutal-border brutal-shadow px-4 py-2 font-bold mono text-sm mb-6"
              style={{ backgroundColor: app.color }}
            >
              <span>{app.emoji}</span>
              {app.category}
            </div>

            <h3 className="text-4xl font-bold text-[#FFFBF0] mb-4">{app.title}</h3>
            <p className="text-gray-400 leading-relaxed mb-8">{app.desc}</p>

            <div className="flex flex-wrap gap-2 mb-10">
              {app.tags.map((t) => (
                <span
                  key={t}
                  className="brutal-border px-3 py-1 text-xs font-bold mono text-[#FFFBF0] border-gray-700 bg-[#1a1a1a]"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Indicateur app actuelle */}
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                {apps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setAppIndex(i)}
                    className="brutal-border transition-all"
                    style={{
                      width: i === appIndex ? 32 : 12,
                      height: 12,
                      background: i === appIndex ? "#FFE234" : "#1a1a1a",
                      borderColor: i === appIndex ? "#FFE234" : "#444",
                    }}
                    aria-label={`App ${i + 1}`}
                  />
                ))}
              </div>
              <span className="mono text-xs text-gray-600">
                {appIndex + 1} / {apps.length}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 brutal-border border-[#FFE234] p-6 flex flex-wrap items-center justify-between gap-4 bg-[#111]">
          <div>
            <p className="font-bold text-lg text-[#FFE234]">Développé de A à Z, sur mesure.</p>
            <p className="text-sm text-gray-500">Aucun template. Code propre, design soigné.</p>
          </div>
          <a href="#contact" className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-6 py-3">
            Commencer mon app →
          </a>
        </div>

      </div>
    </section>
  );
}

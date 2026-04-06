"use client";
import { useState } from "react";
import PhoneCarousel from "./PhoneCarousel";

const BASE =
  "https://firebasestorage.googleapis.com/v0/b/pizzeria-73927.firebasestorage.app/o/Capture%20Pizzeria%2F";

// IMG_1717 supprimée, on commence à IMG_1718
const pizzeriaScreens = [
  `${BASE}IMG_1718.PNG?alt=media&token=dd5fd40b-e54e-4b24-9492-bc95af6c0a38`,
  `${BASE}IMG_1719.PNG?alt=media&token=38f01aad-6345-44a3-8156-822e4483872f`,
  `${BASE}IMG_1720.PNG?alt=media&token=302bb702-22a0-4e35-8c41-caf653a8b41d`,
  `${BASE}IMG_1721.PNG?alt=media&token=8289d789-3828-4676-8b13-5d8ec042dfc3`,
  `${BASE}IMG_1722.PNG?alt=media&token=634c12a4-d3a7-4aa7-b6c3-f1be91e18a8e`,
  `${BASE}IMG_1723.PNG?alt=media&token=a016b4ef-57ba-4047-ab82-a38407c8d3a1`,
  `${BASE}IMG_1724.PNG?alt=media&token=e7299d8e-ed92-4336-ac32-2da29406765d`,
  `${BASE}IMG_1725.PNG?alt=media&token=8be07223-1145-43c2-b47d-fd12511a48e0`,
  `${BASE}IMG_1726.PNG?alt=media&token=2a5faf16-8b23-4261-bab0-348691624ea7`,
  `${BASE}IMG_1727.PNG?alt=media&token=49029b8f-1057-47c3-9884-dab9b60f1ead`,
  `${BASE}IMG_1728.PNG?alt=media&token=402918ec-4735-4579-adf2-10a5083b8048`,
  `${BASE}IMG_1729.PNG?alt=media&token=29cbada7-e32c-4e5c-b579-fb43c769d90e`,
  `${BASE}IMG_1730.PNG?alt=media&token=58a16efe-991d-4d64-aa8d-d8bbf37650a9`,
  `${BASE}IMG_1731.PNG?alt=media&token=157e36dd-050f-4d95-93db-e51b5c20cc09`,
  `${BASE}IMG_1732.PNG?alt=media&token=d603c2cd-48de-4450-b02f-85b0347d400e`,
  `${BASE}IMG_1733.PNG?alt=media&token=769b9d9e-d9be-4722-9498-75dc3fd8d374`,
  `${BASE}IMG_1734.PNG?alt=media&token=a8c7306e-469c-47ad-a87f-2f4e20341714`,
  `${BASE}IMG_1735.PNG?alt=media&token=9a930b59-1175-48da-9a3e-3d59f9f07420`,
  `${BASE}IMG_1736.PNG?alt=media&token=fe64eec6-62bb-4b63-818e-e7f1d453264d`,
  `${BASE}IMG_1737.PNG?alt=media&token=c37121d1-76fc-4f64-af85-50c596d190e7`,
  `${BASE}IMG_1738.PNG?alt=media&token=86bda6c7-6bff-46ae-8152-4438705d87f2`,
  `${BASE}IMG_1739.PNG?alt=media&token=1c9ef63d-f7b9-4b4a-b765-89e0349e21f5`,
  `${BASE}IMG_1740.PNG?alt=media&token=595281c2-967c-4058-8e1d-e9997c2f7714`,
];

const apps = [
  {
    title: "App Pizzeria",
    category: "Restaurant",
    emoji: "🍕",
    color: "#FF6B35",
    tags: ["Menu", "Commande", "Panier", "Paiement Stripe", "Suivi", "Fidélité"],
    desc: "Application complète pour une pizzeria : navigation du menu, commande en ligne, paiement sécurisé, suivi de commande en temps réel et programme de fidélité.",
    screens: pizzeriaScreens,
  },
  {
    title: "Votre App",
    category: "À venir",
    emoji: "📱",
    color: "#7C3AED",
    tags: ["iOS", "Android", "Sur mesure"],
    desc: "Votre prochain projet. Envoyez-moi vos captures d'écran ou décrivez votre idée.",
    screens: null,
  },
  {
    title: "Votre App",
    category: "À venir",
    emoji: "📱",
    color: "#00D4AA",
    tags: ["iOS", "Android", "Sur mesure"],
    desc: "Votre prochain projet. Envoyez-moi vos captures d'écran ou décrivez votre idée.",
    screens: null,
  },
];

// Placeholder phone pour les apps sans captures
function PhonePlaceholder({ app }: { app: typeof apps[0] }) {
  const W = 260;
  const H = Math.round(W * (16 / 9));
  return (
    <div
      className="flex flex-col items-center justify-center gap-4"
      style={{
        width: W,
        height: H,
        borderRadius: 40,
        background: "#1a1a1a",
        border: "3px solid #0A0A0A",
        boxShadow: "6px 6px 0px #0A0A0A",
      }}
    >
      <span className="text-6xl">{app.emoji}</span>
      <span className="text-gray-500 font-bold text-sm text-center px-8">
        Captures à venir
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
            href="#contact"
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

          {/* Phone — les flèches noires sont DANS PhoneCarousel, à gauche et droite du frame */}
          <div className="flex justify-center">
            {app.screens
              ? <PhoneCarousel images={app.screens} appName={app.title} />
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

import PhoneCarousel from "./PhoneCarousel";

const BASE = "https://firebasestorage.googleapis.com/v0/b/pizzeria-73927.firebasestorage.app/o/Capture%20Pizzeria%2F";

const pizzeriaScreens = [
  `${BASE}IMG_1717.PNG?alt=media&token=13ee1c15-af53-4182-a58f-5013d16dfdb8`,
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
    category: "🍕 Restaurant",
    color: "#FF6B35",
    tags: ["Menu", "Commande", "Panier", "Paiement", "Suivi", "Fidélité"],
    desc: "Application complète pour une pizzeria : navigation du menu, commande en ligne, paiement intégré, suivi de commande et programme de fidélité.",
    screens: pizzeriaScreens,
  },
  {
    title: "Votre App",
    category: "📱 À venir",
    color: "#7C3AED",
    tags: ["iOS", "Android", "Sur mesure"],
    desc: "Votre projet ici. Contactez-moi pour transformer votre idée en application mobile.",
    screens: null,
  },
  {
    title: "Votre App",
    category: "📱 À venir",
    color: "#00D4AA",
    tags: ["iOS", "Android", "Sur mesure"],
    desc: "Votre projet ici. Contactez-moi pour transformer votre idée en application mobile.",
    screens: null,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-16">
          <div>
            <p className="mono text-sm font-bold mb-2 text-gray-400">// mes réalisations</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFFBF0]">
              Portfolio{" "}
              <span className="bg-[#FFE234] text-[#0A0A0A] px-2 brutal-border">
                réel
              </span>
            </h2>
          </div>
          <a
            href="#contact"
            className="brutal-btn bg-[#FF6B9D] text-white px-5 py-2.5 border-[#FF6B9D]"
            style={{ borderColor: "#FF6B9D", boxShadow: "4px 4px 0px #FF6B9D80" }}
          >
            Démarrer mon projet →
          </a>
        </div>

        {/* Apps grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {apps.map((app, idx) => (
            <article key={idx} className="flex flex-col items-center gap-6">
              {/* Phone or placeholder */}
              {app.screens ? (
                <PhoneCarousel images={app.screens} appName={app.title} />
              ) : (
                <div
                  className="brutal-border brutal-shadow flex flex-col items-center justify-center gap-3 text-[#FFFBF0]"
                  style={{
                    width: 220,
                    height: 460,
                    borderRadius: "2.5rem",
                    background: "#1a1a1a",
                  }}
                >
                  <span className="text-5xl">📱</span>
                  <span className="font-bold text-sm text-gray-500 text-center px-6">
                    Bientôt disponible
                  </span>
                  <a
                    href="#contact"
                    className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-4 py-2 text-xs mt-2"
                  >
                    Votre app ici
                  </a>
                </div>
              )}

              {/* Info card */}
              <div
                className="w-full brutal-border brutal-shadow-lg p-5"
                style={{ backgroundColor: app.color }}
              >
                <p className="mono text-xs font-bold mb-1 opacity-70">{app.category}</p>
                <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                <p className="text-sm leading-relaxed mb-3 opacity-90">{app.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {app.tags.map((t) => (
                    <span
                      key={t}
                      className="brutal-border border-[2px] border-black px-2 py-0.5 text-xs font-bold bg-white/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 brutal-border border-[#FFE234] brutal-shadow bg-[#FFE234] p-6 flex flex-wrap items-center justify-between gap-4" style={{ boxShadow: "4px 4px 0px #FFE234" }}>
          <div>
            <p className="font-bold text-lg text-[#0A0A0A]">
              Chaque application est développée de A à Z, sur mesure.
            </p>
            <p className="text-sm text-gray-700">Aucun template. Code propre, design soigné.</p>
          </div>
          <a href="#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3">
            Commencer mon app →
          </a>
        </div>
      </div>
    </section>
  );
}

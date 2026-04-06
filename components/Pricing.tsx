import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Basique",
    price: "400€",
    color: "#FFE234",
    textColor: "#0A0A0A",
    badge: "Idéal pour démarrer",
    desc: "Tout ce qu'il faut pour lancer votre première application mobile.",
    features: [
      { label: "iOS & Android",               ok: true },
      { label: "Authentification utilisateur", ok: true },
      { label: "3-5 écrans",                  ok: true },
      { label: "API backend simple",           ok: true },
      { label: "Déploiement App Store / Play", ok: true },
      { label: "Paiement en ligne",            ok: false },
      { label: "Notifications push",           ok: false },
      { label: "Panel admin",                  ok: false },
    ],
  },
  {
    name: "Premium",
    price: "600€",
    color: "#7C3AED",
    textColor: "#FFFBF0",
    badge: "⭐ Recommandé",
    desc: "L'app complète avec toutes les fonctionnalités avancées.",
    features: [
      { label: "iOS & Android",               ok: true },
      { label: "Authentification utilisateur", ok: true },
      { label: "6-12 écrans",                 ok: true },
      { label: "API backend complet",          ok: true },
      { label: "Déploiement App Store / Play", ok: true },
      { label: "Paiement en ligne (Stripe)",   ok: true },
      { label: "Notifications push",           ok: true },
      { label: "Panel admin",                  ok: true },
    ],
  },
  {
    name: "Boutique",
    price: "0€*",
    color: "#00D4AA",
    textColor: "#0A0A0A",
    badge: "Commission 10%",
    desc: "Aucun frais de développement. Je prends 10% sur vos ventes.",
    features: [
      { label: "iOS & Android",               ok: true },
      { label: "Boutique complète",            ok: true },
      { label: "Paiement Stripe intégré",      ok: true },
      { label: "Panel admin",                  ok: true },
      { label: "Notifications push",           ok: true },
      { label: "10% sur chaque vente",         ok: true, note: true },
      { label: "Adapté selon votre activité",  ok: true },
      { label: "À discuter ensemble",          ok: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="max-w-6xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="mb-12">
        <p className="mono text-sm font-bold mb-2">// transparence totale</p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Tarifs{" "}
          <span className="bg-[#00D4AA] px-2 brutal-border text-[#0A0A0A]">
            clairs
          </span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-5 items-start">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="brutal-border brutal-shadow-lg overflow-hidden"
          >
            {/* Header card */}
            <div
              className="p-6 border-b-[3px] border-black"
              style={{ backgroundColor: plan.color, color: plan.textColor }}
            >
              <div className="mono text-xs font-bold brutal-border border-[2px] px-2 py-0.5 inline-block mb-3"
                style={{ borderColor: plan.textColor }}>
                {plan.badge}
              </div>
              <div className="text-4xl font-bold">{plan.price}</div>
              <div className="text-2xl font-bold mt-1">{plan.name}</div>
              <p className="text-sm mt-2 opacity-80">{plan.desc}</p>
            </div>

            {/* Features */}
            <div className="p-6 bg-white flex flex-col gap-3">
              {plan.features.map(({ label, ok, note }) => (
                <div key={label} className="flex items-center gap-3 text-sm">
                  <div
                    className={`w-5 h-5 brutal-border flex-shrink-0 flex items-center justify-center ${
                      ok ? "bg-[#00D4AA]" : "bg-gray-100"
                    }`}
                  >
                    {ok ? <Check size={12} strokeWidth={3} /> : <X size={12} strokeWidth={3} className="text-gray-400" />}
                  </div>
                  <span className={`${note ? "font-bold" : ""} ${!ok ? "text-gray-400" : ""}`}>
                    {label}
                  </span>
                </div>
              ))}

              <a
                href="#contact"
                className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-4 py-2.5 mt-4 justify-center"
              >
                Obtenir un devis →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-6 text-sm text-gray-600 brutal-border bg-white p-4 brutal-shadow">
        * Le tarif boutique à 0€ est soumis à un accord préalable selon votre activité et volume de ventes estimé.
        Chaque projet est unique — <a href="#contact" className="font-bold underline">contactez-moi pour discuter de votre cas.</a>
      </p>
    </section>
  );
}

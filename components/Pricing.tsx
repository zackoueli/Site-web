import { Check, Minus } from "lucide-react";

const rows = [
  "iOS & Android",
  "Authentification utilisateur",
  "Nombre d'écrans",
  "API backend",
  "Déploiement App Store / Play",
  "Paiement en ligne (Stripe)",
  "Notifications push",
  "Panel admin",
  "Commission sur ventes",
];

const plans = [
  {
    name: "Basique",
    price: "400€",
    sub: "App simple et efficace",
    color: "#FFE234",
    textColor: "#0A0A0A",
    values: [
      "✓", "✓", "3–5 écrans", "Simple", "✓", "—", "—", "—", "—",
    ],
    cta: "Choisir Basique",
  },
  {
    name: "Premium",
    price: "600€",
    sub: "App complète avec tout inclus",
    color: "#7C3AED",
    textColor: "#FFFBF0",
    badge: "⭐ Recommandé",
    values: [
      "✓", "✓", "6–12 écrans", "Complet", "✓", "✓", "✓", "✓", "—",
    ],
    cta: "Choisir Premium",
  },
  {
    name: "Boutique",
    price: "0€*",
    sub: "Gratuit + 10% sur vos ventes",
    color: "#00D4AA",
    textColor: "#0A0A0A",
    values: [
      "✓", "✓", "Sur mesure", "E-commerce", "✓", "✓", "✓", "✓", "10%",
    ],
    cta: "Discutons-en",
  },
];

function Cell({ val }: { val: string }) {
  if (val === "✓") return (
    <div className="w-6 h-6 bg-[#00D4AA] brutal-border flex items-center justify-center mx-auto">
      <Check size={12} strokeWidth={3} />
    </div>
  );
  if (val === "—") return (
    <div className="w-6 h-6 bg-gray-100 brutal-border flex items-center justify-center mx-auto">
      <Minus size={12} className="text-gray-400" />
    </div>
  );
  return <span className="text-xs font-bold text-center block">{val}</span>;
}

export default function Pricing() {
  return (
    <section id="tarifs" className="py-24 bg-[#FFFBF0] border-y-[3px] border-black">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="mb-14">
          <p className="mono text-sm font-bold mb-2 text-gray-400">// prix fixes, pas de surprise</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Tarifs{" "}
            <span className="bg-[#00D4AA] px-3 brutal-border">transparents</span>
          </h2>
        </div>

        {/* Plan cards (mobile) */}
        <div className="md:hidden flex flex-col gap-5 mb-10">
          {plans.map((plan) => (
            <div key={plan.name} className="brutal-border brutal-shadow-lg overflow-hidden">
              <div className="p-6 border-b-[3px] border-black" style={{ backgroundColor: plan.color, color: plan.textColor }}>
                {plan.badge && (
                  <span className="mono text-xs font-bold brutal-border border-[2px] px-2 py-0.5 inline-block mb-3" style={{ borderColor: plan.textColor }}>
                    {plan.badge}
                  </span>
                )}
                <div className="text-4xl font-bold">{plan.price}</div>
                <div className="text-xl font-bold">{plan.name}</div>
                <p className="text-sm opacity-80 mt-1">{plan.sub}</p>
              </div>
              <div className="p-5 bg-white flex flex-col gap-2.5">
                {rows.map((row, i) => (
                  <div key={row} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{row}</span>
                    <Cell val={plan.values[i]} />
                  </div>
                ))}
                <a href="#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-4 py-2.5 mt-3 justify-center text-sm">
                  {plan.cta} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table (desktop) */}
        <div className="hidden md:block brutal-border brutal-shadow-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b-[3px] border-black">
                <th className="p-5 text-left bg-[#0A0A0A] text-[#FFFBF0] font-bold w-1/3">
                  Fonctionnalité
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    className="p-5 text-center border-l-[3px] border-black"
                    style={{ backgroundColor: plan.color, color: plan.textColor }}
                  >
                    {plan.badge && (
                      <div className="mono text-[10px] font-bold mb-1 opacity-80">{plan.badge}</div>
                    )}
                    <div className="text-3xl font-bold">{plan.price}</div>
                    <div className="text-lg font-bold">{plan.name}</div>
                    <div className="text-xs opacity-70 mt-0.5">{plan.sub}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row} className={`border-b-[2px] border-black ${i % 2 === 0 ? "bg-white" : "bg-[#FFFBF0]"}`}>
                  <td className="p-4 font-semibold text-sm">{row}</td>
                  {plans.map((plan) => (
                    <td key={plan.name} className="p-4 text-center border-l-[3px] border-black">
                      <Cell val={plan.values[i]} />
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="bg-white">
                <td className="p-4" />
                {plans.map((plan) => (
                  <td key={plan.name} className="p-4 border-l-[3px] border-black">
                    <a
                      href="#contact"
                      className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-4 py-2.5 w-full justify-center text-sm"
                    >
                      {plan.cta} →
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-sm text-gray-500 brutal-border bg-white p-4 brutal-shadow">
          * L'offre Boutique à 0€ est soumise à un accord préalable.{" "}
          <a href="#contact" className="font-bold underline">Contactez-moi pour en discuter.</a>
        </p>
      </div>
    </section>
  );
}

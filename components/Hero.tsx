import { Smartphone, Star, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b-[3px] border-black">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#000 0,#000 1px,transparent 0,transparent 50%),repeating-linear-gradient(90deg,#000 0,#000 1px,transparent 0,transparent 50%)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 py-20 md:py-32 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#0A0A0A] text-[#FFE234] brutal-border brutal-shadow px-4 py-2 text-sm font-bold mb-4 mono">
              <Star size={12} fill="#FFE234" />
              Développeur freelance · Disponible maintenant
            </div>

            {/* SEO label */}
            <p className="mono text-sm font-bold text-gray-500 mb-4">
              // création application mobile iOS & Android · Brest, Bretagne
            </p>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6 tracking-tight">
              Votre idée.
              <br />
              <span className="relative">
                <span className="relative z-10">Mon code.</span>
                <span
                  className="absolute bottom-2 left-0 w-full h-4 bg-[#FFE234] -z-0 brutal-border"
                  style={{ transform: "skewX(-2deg)" }}
                />
              </span>
              <br />
              <span className="bg-[#FF6B9D] text-white px-3 brutal-border inline-block mt-1">
                Votre app.
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-md">
              Développeur freelance basé à <strong>Brest, Bretagne</strong>. Je crée des applications
              iOS &amp; Android sur mesure pour restaurants, commerces et jeux.
              De l'idée au déploiement sur l'App Store.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#tarifs"
                className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4 text-base"
              >
                Démarrer mon projet
              </a>
              <a
                href="#portfolio"
                className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-8 py-4 text-base"
              >
                Voir les apps ↓
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-3">
              {[
                { val: "3+", label: "Apps livrées" },
                { val: "iOS & Android", label: "React Native" },
                { val: "Dès 400€", label: "Tarif transparent" },
              ].map(({ val, label }) => (
                <div
                  key={label}
                  className="brutal-border brutal-shadow bg-white px-5 py-3 flex flex-col"
                >
                  <span className="font-bold text-lg leading-tight">{val}</span>
                  <span className="text-xs text-gray-500 mono">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: phone stack */}
          <div className="flex justify-center md:justify-end relative">
            {/* Floating stickers */}
            <div className="float-1 absolute -top-6 left-4 bg-[#FFE234] brutal-border brutal-shadow px-3 py-2 text-xs font-bold mono z-10">
              iOS & Android ✦
            </div>
            <div className="float-2 absolute -bottom-2 right-8 bg-[#00D4AA] brutal-border brutal-shadow px-3 py-2 text-xs font-bold mono z-10">
              Stripe · Firebase ✦
            </div>

            {/* Main phone */}
            <div className="relative">
              <div
                className="bg-[#0A0A0A] brutal-border brutal-shadow-lg relative"
                style={{
                  width: 240,
                  height: 500,
                  borderRadius: "2.8rem",
                  padding: "14px 10px",
                }}
              >
                {/* Notch */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0A0A0A] z-10 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a] border border-[#333]" />
                  <div className="w-10 h-2 rounded-full bg-[#1a1a1a] border border-[#333]" />
                </div>

                {/* Screen content */}
                <div
                  className="w-full h-full bg-[#FFFBF0] overflow-hidden flex flex-col"
                  style={{ borderRadius: "2.2rem" }}
                >
                  {/* App header */}
                  <div className="bg-[#FF6B35] px-4 pt-8 pb-4">
                    <p className="text-white text-[10px] font-bold mono opacity-70">PIZZERIA ROMA</p>
                    <p className="text-white font-bold text-sm mt-0.5">Bonjour, Marco 👋</p>
                  </div>

                  {/* App body */}
                  <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
                    <div className="brutal-border bg-[#FFE234] p-2.5 flex items-center gap-2">
                      <span className="text-lg">🍕</span>
                      <div>
                        <p className="text-[10px] font-bold leading-none">Margherita</p>
                        <p className="text-[9px] text-gray-600">12,90€</p>
                      </div>
                    </div>
                    <div className="brutal-border bg-white p-2.5 flex items-center gap-2">
                      <span className="text-lg">🍕</span>
                      <div>
                        <p className="text-[10px] font-bold leading-none">4 Fromages</p>
                        <p className="text-[9px] text-gray-600">14,50€</p>
                      </div>
                    </div>
                    <div className="brutal-border bg-white p-2.5 flex items-center gap-2">
                      <span className="text-lg">🍕</span>
                      <div>
                        <p className="text-[10px] font-bold leading-none">Reine</p>
                        <p className="text-[9px] text-gray-600">13,90€</p>
                      </div>
                    </div>
                    <div className="brutal-border bg-[#0A0A0A] text-white p-2 text-center text-[10px] font-bold mt-auto">
                      Commander →
                    </div>
                  </div>

                  {/* Bottom nav */}
                  <div className="border-t-[2px] border-black flex justify-around py-2 bg-white">
                    {["🏠", "🍕", "🛒", "👤"].map((e) => (
                      <span key={e} className="text-base">{e}</span>
                    ))}
                  </div>
                </div>

                {/* Side buttons */}
                <div className="absolute -right-[5px] top-24 w-[4px] h-12 bg-[#0A0A0A] brutal-border rounded-sm" />
                <div className="absolute -left-[5px] top-20 w-[4px] h-8 bg-[#0A0A0A] brutal-border rounded-sm" />
                <div className="absolute -left-[5px] top-32 w-[4px] h-8 bg-[#0A0A0A] brutal-border rounded-sm" />
              </div>

              {/* Scroll hint */}
              <div className="mt-6 flex flex-col items-center gap-1 text-gray-400">
                <ArrowDown size={16} className="animate-bounce" />
                <span className="text-xs mono font-bold">Voir les vraies apps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

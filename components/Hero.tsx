import { Smartphone, Star, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative overflow-hidden">
      {/* Floating decorations */}
      <div className="float-1 absolute top-8 right-8 md:right-24 bg-[#FFE234] brutal-border brutal-shadow px-3 py-2 text-sm font-bold mono hidden sm:block rotate-[-6deg]">
        iOS & Android ✦
      </div>
      <div className="float-2 absolute bottom-8 right-4 md:right-16 bg-[#FF6B9D] brutal-border brutal-shadow px-3 py-2 text-sm font-bold text-white mono hidden sm:block rotate-[4deg]">
        400€ → 600€
      </div>
      <div className="float-3 absolute top-1/2 right-2 md:right-8 bg-[#00D4AA] brutal-border brutal-shadow px-3 py-2 text-sm font-bold mono hidden md:block rotate-[-2deg]">
        Sur mesure
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#7C3AED] text-white brutal-border brutal-shadow px-3 py-1.5 text-sm font-bold mb-6">
            <Star size={14} fill="white" />
            Développeur freelance · Disponible
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Vous avez une{" "}
            <span className="relative inline-block">
              idée
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFE234] -z-10 brutal-border opacity-80" />
            </span>
            ,<br />
            je crée votre{" "}
            <span className="bg-[#FF6B9D] text-white px-2 brutal-border">
              app mobile
            </span>
          </h1>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
            Applications iOS &amp; Android sur mesure pour restaurants,
            commerces et jeux. Boutique, paiement, notifications, panel admin —
            tout ce dont vous avez besoin, livré clé en main.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-7 py-3 text-lg"
            >
              Démarrer mon projet
            </a>
            <a
              href="#portfolio"
              className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-7 py-3 text-lg"
            >
              Voir le portfolio
            </a>
          </div>

          {/* Social proof mini */}
          <div className="flex flex-wrap items-center gap-6 mt-10">
            <div className="brutal-border brutal-shadow bg-white px-4 py-3">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm text-gray-600">Apps livrées</div>
            </div>
            <div className="brutal-border brutal-shadow bg-white px-4 py-3">
              <div className="text-2xl font-bold">iOS & Android</div>
              <div className="text-sm text-gray-600">React Native</div>
            </div>
            <div className="brutal-border brutal-shadow bg-[#FFE234] px-4 py-3">
              <div className="text-2xl font-bold">Dès 400€</div>
              <div className="text-sm">App basique complète</div>
            </div>
          </div>
        </div>

        {/* Right: phone mockup */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            {/* Phone frame */}
            <div className="brutal-border brutal-shadow-lg bg-white w-56 md:w-64 rounded-[2.5rem] overflow-hidden" style={{ aspectRatio: "9/19" }}>
              {/* Screen header */}
              <div className="bg-[#0A0A0A] h-8 flex items-center justify-center">
                <div className="w-20 h-1.5 bg-white rounded-full opacity-40" />
              </div>
              {/* App UI mock */}
              <div className="p-4 flex flex-col gap-3 bg-[#FFFBF0] h-full">
                <div className="brutal-border bg-[#7C3AED] text-white px-3 py-2 text-xs font-bold flex items-center gap-2">
                  <Smartphone size={12} />
                  Votre App
                </div>
                <div className="brutal-border bg-white p-2 text-xs font-bold">🛒 Boutique</div>
                <div className="brutal-border bg-white p-2 text-xs font-bold">🔔 Notifications</div>
                <div className="brutal-border bg-[#FFE234] p-2 text-xs font-bold">💳 Paiement</div>
                <div className="brutal-border bg-white p-2 text-xs font-bold">💬 Messagerie</div>
                <div className="brutal-border bg-white p-2 text-xs font-bold">⭐ Avis clients</div>
                <div className="brutal-border bg-[#FF6B9D] text-white p-2 text-xs font-bold text-center">
                  Commander →
                </div>
              </div>
            </div>

            {/* Badge floating on phone */}
            <div className="absolute -top-4 -right-4 bg-[#00D4AA] brutal-border brutal-shadow rounded-full w-16 h-16 flex flex-col items-center justify-center">
              <Zap size={16} fill="#0A0A0A" />
              <span className="text-[10px] font-bold leading-tight text-center">Rapide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

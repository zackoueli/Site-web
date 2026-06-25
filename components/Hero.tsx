import { Star, ArrowDown } from "lucide-react";
import LazyIframe from "./LazyIframe";

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
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#0A0A0A] text-[#FFE234] brutal-border brutal-shadow px-4 py-2 text-sm font-bold mb-4 mono">
              <Star size={12} fill="#FFE234" />
              Développeur freelance · Disponible maintenant
            </div>

            {/* SEO label */}
            <p className="mono text-sm font-bold text-gray-500 mb-4">
              // applications mobiles · sites web · plateformes digitales · Brest, Bretagne
            </p>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6 tracking-tight">
              Applications mobiles
              <br />
              <span className="relative">
                <span className="relative z-10">et sites web</span>
                <span
                  className="absolute bottom-2 left-0 w-full h-4 bg-[#FFE234] -z-0 brutal-border"
                  style={{ transform: "skewX(-2deg)" }}
                />
              </span>
              <br />
              <span className="bg-[#FF6B9D] text-white px-3 brutal-border inline-block mt-1">
                sur mesure
              </span>
              <br />
              à Brest, Bretagne.
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md">
              Développeur freelance basé à <strong>Brest, Bretagne</strong>. Je conçois des <strong>applications mobiles iOS & Android</strong>, des <strong>sites web</strong> et des <strong>plateformes digitales</strong> sur mesure — de l'idée à la mise en ligne.
            </p>

            {/* Offres pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {[
                { label: "📱 Application mobile", href: "/services/application-mobile" },
                { label: "🌐 Site web", href: "/services/site-web" },
                { label: "⚙️ Plateforme & back-office", href: "/services/plateforme" },
                { label: "🛍️ E-commerce", href: "/services/ecommerce" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="brutal-border bg-white px-3 py-1.5 text-xs font-bold hover:bg-[#FFE234] transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4 text-base"
              >
                Démarrer mon projet
              </a>
              <a
                href="/portfolio"
                className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-8 py-4 text-base"
              >
                Voir les réalisations ↓
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-3">
              {[
                { val: "3+", label: "Projets livrés" },
                { val: "Mobile & Web", label: "React Native · Next.js" },
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
          <div className="flex justify-center md:justify-end relative md:sticky md:top-24">
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
                  width: 320,
                  height: 620,
                  borderRadius: "2.8rem",
                  padding: "14px 10px",
                }}
              >
                {/* Notch */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0A0A0A] z-10 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a] border border-[#333]" />
                  <div className="w-10 h-2 rounded-full bg-[#1a1a1a] border border-[#333]" />
                </div>

                {/* Screen: iframe Bunkly — chargée après idle */}
                <LazyIframe
                  src="https://app.bunkly.co/b/NAvq6yDTOe"
                  title="Livret d'accueil BreizhApp"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                  className="w-full h-full overflow-hidden"
                  style={{ borderRadius: "2.2rem" }}
                />

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

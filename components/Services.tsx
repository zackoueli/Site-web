import {
  ShoppingBag, CreditCard, Bell, MessageSquare,
  LayoutDashboard, User, Gamepad2, MapPin,
  QrCode, Calendar, Gift, Globe,
} from "lucide-react";

const features = [
  { icon: User,            label: "Authentification",    color: "#FFE234", bg: "#0A0A0A" },
  { icon: ShoppingBag,     label: "Boutique en ligne",   color: "#0A0A0A", bg: "#FF6B9D" },
  { icon: CreditCard,      label: "Paiement Stripe",     color: "#FFFBF0", bg: "#7C3AED" },
  { icon: Bell,            label: "Notifications push",  color: "#0A0A0A", bg: "#00D4AA" },
  { icon: MessageSquare,   label: "Messagerie",          color: "#0A0A0A", bg: "#FFE234" },
  { icon: LayoutDashboard, label: "Panel admin",         color: "#FFFBF0", bg: "#0A0A0A" },
  { icon: Gamepad2,        label: "Jeux mobiles",        color: "#0A0A0A", bg: "#FF6B9D" },
  { icon: MapPin,          label: "Géolocalisation",     color: "#FFFBF0", bg: "#7C3AED" },
  { icon: QrCode,          label: "Scanner QR",          color: "#0A0A0A", bg: "#00D4AA" },
  { icon: Calendar,        label: "Réservation / RDV",   color: "#0A0A0A", bg: "#FFE234" },
  { icon: Gift,            label: "Programme fidélité",  color: "#FFFBF0", bg: "#FF6B35" },
  { icon: Globe,           label: "Multi-langue",        color: "#FFFBF0", bg: "#0A0A0A" },
];

const sectors = [
  { emoji: "🍽️", label: "Restaurants & food",    desc: "Commande, réservation, fidélité, suivi" },
  { emoji: "🌱", label: "Maraîchers & épiceries", desc: "Paniers, abonnements, livraison locale" },
  { emoji: "🎮", label: "Jeux mobiles",           desc: "Game dev, leaderboard, in-app purchase" },
  { emoji: "🛍️", label: "E-commerce",            desc: "Catalogue, panier, paiement, avis" },
];

const process = [
  { num: "01", label: "Brief", desc: "Vous décrivez votre idée, je pose les bonnes questions." },
  { num: "02", label: "Devis",  desc: "Je vous envoie un devis détaillé sous 48h, sans engagement." },
  { num: "03", label: "Développement", desc: "Je code votre app avec des points d'avancement réguliers." },
  { num: "04", label: "Livraison", desc: "Mise en ligne sur l'App Store et Google Play incluse." },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* ── Header ── */}
        <div className="flex flex-wrap items-end gap-4 mb-16">
          <div>
            <p className="mono text-sm font-bold mb-2 text-gray-400">// ce que je développe</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Tout ce dont vous{" "}
              <br className="hidden md:block" />
              avez{" "}
              <span className="bg-[#7C3AED] text-white px-3 brutal-border">
                besoin
              </span>
            </h2>
          </div>
        </div>

        {/* ── Features grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-20">
          {features.map(({ icon: Icon, label, color, bg }) => (
            <div
              key={label}
              className="brutal-border brutal-shadow p-4 flex items-center gap-3 hover:-translate-y-0.5 transition-transform cursor-default"
              style={{ backgroundColor: bg }}
            >
              <Icon size={18} style={{ color }} />
              <span className="font-semibold text-sm" style={{ color }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Process ── */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8">
            Comment ça{" "}
            <span className="bg-[#FFE234] px-2 brutal-border">fonctionne</span>
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {process.map(({ num, label, desc }) => (
              <div key={num} className="brutal-border brutal-shadow bg-white p-5">
                <div className="mono font-bold text-4xl text-gray-100 mb-2 leading-none">
                  {num}
                </div>
                <div className="font-bold text-base mb-1">{label}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Sectors ── */}
        <div className="brutal-border brutal-shadow-lg bg-[#0A0A0A] text-[#FFFBF0] p-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <h3 className="text-2xl font-bold text-[#FFE234]">Secteurs d'activité</h3>
            <span className="mono text-xs text-gray-500">Pas votre secteur ? Contactez-moi quand même.</span>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {sectors.map(({ emoji, label, desc }) => (
              <div
                key={label}
                className="border-2 border-gray-800 p-4 hover:border-[#FFE234] hover:bg-[#FFE234] hover:text-[#0A0A0A] transition-all group"
              >
                <div className="text-3xl mb-3">{emoji}</div>
                <div className="font-bold mb-1 text-sm">{label}</div>
                <div className="text-xs text-gray-500 group-hover:text-gray-700 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

import {
  ShoppingBag,
  CreditCard,
  Bell,
  MessageSquare,
  LayoutDashboard,
  User,
  Gamepad2,
  MapPin,
  QrCode,
  Calendar,
  Gift,
  Globe,
} from "lucide-react";

const features = [
  { icon: User,            label: "Authentification",       color: "#FFE234" },
  { icon: ShoppingBag,     label: "Boutique en ligne",      color: "#FF6B9D" },
  { icon: CreditCard,      label: "Paiement en ligne",      color: "#7C3AED" },
  { icon: Bell,            label: "Notifications push",     color: "#00D4AA" },
  { icon: MessageSquare,   label: "Messagerie intégrée",    color: "#FF6B35" },
  { icon: LayoutDashboard, label: "Panel admin",            color: "#FFE234" },
  { icon: Gamepad2,        label: "Jeux mobiles",           color: "#FF6B9D" },
  { icon: MapPin,          label: "Géolocalisation",        color: "#7C3AED" },
  { icon: QrCode,          label: "Scanner QR code",        color: "#00D4AA" },
  { icon: Calendar,        label: "Réservation / RDV",      color: "#FF6B35" },
  { icon: Gift,            label: "Programme fidélité",     color: "#FFE234" },
  { icon: Globe,           label: "Multi-langue",           color: "#FF6B9D" },
];

const sectors = [
  { emoji: "🍽️", label: "Restaurants & food",   desc: "Commande, réservation, fidélité" },
  { emoji: "🌱", label: "Maraîchers & épiceries", desc: "Boutique, abonnements, livraison" },
  { emoji: "🎮", label: "Jeux mobiles",           desc: "Game dev, leaderboard, in-app" },
  { emoji: "🛍️", label: "E-commerce",            desc: "Catalogue, panier, paiement" },
];

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="flex flex-wrap items-end gap-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Ce que je crée{" "}
          <span className="bg-[#7C3AED] text-white px-2 brutal-border">pour vous</span>
        </h2>
        <div className="mono text-sm bg-[#FFE234] brutal-border brutal-shadow px-3 py-1.5 font-bold mb-1">
          Tout inclus ↓
        </div>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-16">
        {features.map(({ icon: Icon, label, color }) => (
          <div key={label} className="brutal-card p-4 flex flex-col gap-3">
            <div
              className="w-10 h-10 brutal-border flex items-center justify-center"
              style={{ backgroundColor: color }}
            >
              <Icon size={18} />
            </div>
            <span className="font-semibold text-sm leading-tight">{label}</span>
          </div>
        ))}
      </div>

      {/* Sectors */}
      <div className="brutal-border brutal-shadow-lg bg-[#0A0A0A] text-[#FFFBF0] p-8">
        <h3 className="text-2xl font-bold mb-6 text-[#FFE234]">
          Secteurs d'activité
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {sectors.map(({ emoji, label, desc }) => (
            <div
              key={label}
              className="border-2 border-[#FFFBF0] p-4 hover:bg-[#FFE234] hover:text-[#0A0A0A] transition-colors group"
            >
              <div className="text-3xl mb-2">{emoji}</div>
              <div className="font-bold mb-1 group-hover:text-[#0A0A0A]">{label}</div>
              <div className="text-sm text-gray-400 group-hover:text-gray-700">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

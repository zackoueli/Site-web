import Link from "next/link";
import { Smartphone, Globe, LayoutDashboard, ShoppingBag, ArrowRight } from "lucide-react";

const offers = [
  {
    icon: Smartphone,
    title: "Application mobile",
    subtitle: "iOS & Android",
    desc: "Une app native ou hybride pour votre activité. Commande, réservation, fidélité, notifications push — disponible sur l'App Store et Google Play.",
    features: ["React Native", "iOS & Android", "App Store & Play Store", "Notifications push", "Paiement Stripe"],
    color: "#FFE234",
    textColor: "#0A0A0A",
    href: "/services/application-mobile",
  },
  {
    icon: Globe,
    title: "Site web",
    subtitle: "Vitrine & landing page",
    desc: "Un site rapide, moderne et optimisé SEO pour votre activité. Présentation de services, formulaire de contact, blog.",
    features: ["Next.js", "SEO optimisé", "Design sur mesure", "Responsive mobile", "Déploiement inclus"],
    color: "#0A0A0A",
    textColor: "#FFFBF0",
    href: "/services/site-web",
  },
  {
    icon: LayoutDashboard,
    title: "Plateforme digitale",
    subtitle: "Back-office & multi-rôles",
    desc: "Une plateforme web avec plusieurs niveaux d'accès : espace admin, espace client, tableau de bord, gestion des données.",
    features: ["Authentification multi-rôles", "Panel admin", "Espace client", "Base de données", "API REST"],
    color: "#7C3AED",
    textColor: "#FFFBF0",
    href: "/services/plateforme",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    subtitle: "Boutique en ligne",
    desc: "Une boutique en ligne complète avec catalogue produits, panier, paiement sécurisé et gestion des commandes.",
    features: ["Catalogue produits", "Panier & commandes", "Paiement Stripe", "Panel admin", "Suivi livraison"],
    color: "#FF6B9D",
    textColor: "#FFFBF0",
    href: "/services/ecommerce",
  },
];

const process = [
  { num: "01", label: "Brief", desc: "Vous décrivez votre idée, je pose les bonnes questions." },
  { num: "02", label: "Devis",  desc: "Je vous envoie un devis détaillé sous 48h, sans engagement." },
  { num: "03", label: "Développement", desc: "Je code votre projet avec des points d'avancement réguliers." },
  { num: "04", label: "Livraison", desc: "Mise en ligne et formation à la prise en main incluses." },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="flex flex-wrap items-end gap-4 mb-16">
          <div>
            <p className="mono text-sm font-bold mb-2 text-gray-400">// ce que je développe</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Mes{" "}
              <span className="bg-[#7C3AED] text-white px-3 brutal-border">
                services
              </span>
            </h2>
          </div>
        </div>

        {/* Offres */}
        <div className="grid md:grid-cols-2 gap-5 mb-20">
          {offers.map(({ icon: Icon, title, subtitle, desc, features, color, textColor, href }) => (
            <Link
              key={title}
              href={href}
              className="brutal-border brutal-shadow p-6 flex flex-col hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform"
              style={{ backgroundColor: color }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Icon size={28} style={{ color: textColor }} className="mb-3" />
                  <h3 className="font-bold text-xl leading-tight" style={{ color: textColor }}>{title}</h3>
                  <p className="text-sm font-bold opacity-60 mt-0.5" style={{ color: textColor }}>{subtitle}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: textColor, opacity: 0.85 }}>{desc}</p>
              <ul className="flex flex-wrap gap-2 mb-6">
                {features.map((f) => (
                  <li
                    key={f}
                    className="text-xs font-bold px-2 py-1 brutal-border"
                    style={{ backgroundColor: textColor, color: color }}
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <div
                className="mt-auto inline-flex items-center gap-2 text-sm font-bold brutal-border px-4 py-2 w-fit"
                style={{ backgroundColor: textColor, color: color }}
              >
                En savoir plus <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>

        {/* Process */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8">
            Comment ça{" "}
            <span className="bg-[#FFE234] px-2 brutal-border">fonctionne</span>
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {process.map(({ num, label, desc }) => (
              <div key={num} className="brutal-border brutal-shadow bg-white p-5">
                <div className="mono font-bold text-4xl text-gray-100 mb-2 leading-none">{num}</div>
                <div className="font-bold text-base mb-1">{label}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Secteurs */}
        <div className="brutal-border brutal-shadow-lg bg-[#0A0A0A] text-[#FFFBF0] p-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <h3 className="text-2xl font-bold text-[#FFE234]">Secteurs d'activité</h3>
            <span className="mono text-xs text-gray-500">Pas votre secteur ? Contactez-moi quand même.</span>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { emoji: "🍽️", label: "Restaurants & food",    desc: "Commande, réservation, fidélité, suivi" },
              { emoji: "🛠️", label: "Artisans & commerçants", desc: "Vitrine, prise de RDV, devis en ligne" },
              { emoji: "🛍️", label: "E-commerce",            desc: "Catalogue, panier, paiement, avis" },
              { emoji: "🚀", label: "Startups & SaaS",        desc: "Plateforme, admin, abonnements, API" },
            ].map(({ emoji, label, desc }) => (
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

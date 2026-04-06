import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "App Restaurant",
    category: "Food & Réservation",
    tags: ["Menu", "Réservation", "Paiement", "Fidélité"],
    color: "#FFE234",
    emoji: "🍽️",
    desc: "Application complète pour un restaurant : commande en ligne, réservation de table, programme de fidélité et panel admin pour gérer les commandes en temps réel.",
  },
  {
    title: "Boutique Maraîcher",
    category: "E-commerce local",
    tags: ["Catalogue", "Abonnement", "Livraison", "Paiement Stripe"],
    color: "#00D4AA",
    emoji: "🌱",
    desc: "Marketplace entre producteurs locaux et consommateurs. Abonnements hebdomadaires de paniers, géolocalisation des points de retrait, notifications de livraison.",
  },
  {
    title: "Jeu Mobile",
    category: "Gaming",
    tags: ["Gameplay", "Leaderboard", "In-app purchase", "Animations"],
    color: "#7C3AED",
    emoji: "🎮",
    desc: "Jeu mobile 2D avec système de progression, classement mondial, achats in-app et animations fluides. iOS & Android depuis une seule base de code.",
  },
  {
    title: "App E-commerce",
    category: "Shopping",
    tags: ["Catalogue", "Panier", "Avis", "Notifications"],
    color: "#FF6B9D",
    emoji: "🛍️",
    desc: "Application shopping avec catalogue produits, détail produit, avis clients, panier, paiement sécurisé Stripe et suivi de commande en temps réel.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
        <div>
          <p className="mono text-sm font-bold mb-2">// mes réalisations</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Portfolio{" "}
            <span className="bg-[#FF6B35] text-white px-2 brutal-border">
              concret
            </span>
          </h2>
        </div>
        <a href="#contact" className="brutal-btn bg-[#FFE234] px-5 py-2">
          Discutons de votre projet →
        </a>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <article key={p.title} className="brutal-card p-0 overflow-hidden group cursor-pointer">
            {/* Top colored band */}
            <div
              className="p-6 border-b-[3px] border-black flex items-start justify-between"
              style={{ backgroundColor: p.color }}
            >
              <div>
                <span className="text-4xl">{p.emoji}</span>
                <p className="mono text-xs font-bold mt-2 opacity-70">{p.category}</p>
                <h3 className="text-2xl font-bold mt-1">{p.title}</h3>
              </div>
              <ArrowUpRight
                size={24}
                className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </div>

            {/* Content */}
            <div className="p-6 bg-white">
              <p className="text-sm text-gray-700 leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="brutal-border px-2 py-0.5 text-xs font-bold mono bg-[#FFFBF0]"
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
      <div className="mt-8 brutal-border brutal-shadow bg-[#7C3AED] text-white p-5 flex flex-wrap items-center justify-between gap-4">
        <p className="font-semibold">
          Chaque app est développée de zéro, sur mesure pour vos besoins.
          <br />
          <span className="text-[#FFE234]">Aucun template générique.</span>
        </p>
        <a href="#contact" className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-5 py-2">
          Commencer mon app →
        </a>
      </div>
    </section>
  );
}

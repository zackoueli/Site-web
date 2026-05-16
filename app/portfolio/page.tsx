import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Réalisations — Sites web & applications mobiles | BreizhApp",
  description:
    "Découvrez les projets créés par BreizhApp : applications mobiles iOS & Android, boutiques e-commerce, sites web artisans. Développeur freelance à Brest.",
  alternates: { canonical: "https://breizhapp.tech/portfolio" },
};

const projects = [
  {
    slug: "forno-pizzeria",
    name: "Forno",
    tagline: "La vraie pizza, livrée chaude.",
    category: "App mobile",
    type: "Application iOS & Android",
    color: "#F25C1F",
    badge: "bg-[#F25C1F] text-white",
    icon: "🍕",
    description:
      "Application mobile iOS pour pizzeria artisanale. Flux d'inscription 7 étapes, préférences, géolocalisation et promo de bienvenue.",
    tags: ["React Native", "iOS", "Android", "UX"],
  },
  {
    slug: "histoire-eternelle",
    name: "Histoire Eternelle",
    tagline: "Bijoux artisanaux façonnés à la main.",
    category: "E-commerce",
    type: "Boutique en ligne",
    color: "#C0622D",
    badge: "bg-[#C0622D] text-white",
    icon: "💍",
    description:
      "Boutique e-commerce complète pour L'Atelier d'Anaïs. Catalogue bijoux, espace client, paiement Stripe, avis vérifiés et panel admin Firebase.",
    tags: ["Next.js", "Firebase", "Stripe", "E-commerce"],
  },
  {
    slug: "demo-paysagiste",
    name: "Demo Paysagiste",
    tagline: "Votre jardin entre de bonnes mains.",
    category: "Site web",
    type: "Vitrine professionnelle",
    color: "#2D5016",
    badge: "bg-[#2D5016] text-white",
    icon: "🌿",
    description:
      "Site vitrine pour paysagiste avec galerie réalisations, demande de devis en ligne et back-office Firebase pour gérer les contenus sans développeur.",
    tags: ["Next.js", "Firebase", "SEO local", "Artisan"],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FFFBF0]">
        {/* Header */}
        <section className="border-b-[3px] border-[#0A0A0A] py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="mono text-sm font-bold text-gray-500 mb-2">// réalisations</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
              Portfolio &{" "}
              <span className="bg-[#F25C1F] text-white px-2 brutal-border">projets</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Applications mobiles, boutiques e-commerce et sites web créés sur mesure
              pour des restaurateurs, artisans et commerçants.
            </p>
          </div>
        </section>

        {/* Projects grid */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/portfolio/${p.slug}`}
                className="brutal-border bg-white block hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0_#0A0A0A] transition-all group overflow-hidden"
              >
                {/* Color banner */}
                <div
                  className="h-32 flex items-center justify-center text-6xl border-b-[3px] border-[#0A0A0A]"
                  style={{ backgroundColor: p.color }}
                >
                  {p.icon}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className={`text-xs font-bold px-2 py-1 brutal-border ${p.badge}`}>
                      {p.category.toUpperCase()}
                    </span>
                    <span className="text-xs font-bold mono text-gray-400">
                      {p.type}
                    </span>
                  </div>

                  <h2 className="text-3xl font-black mb-1">{p.name}</h2>
                  <p className="text-gray-500 font-medium mb-4 italic">{p.tagline}</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">{p.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((t) => (
                      <span key={t} className="brutal-border bg-[#FFFBF0] text-xs font-bold mono px-2 py-1">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 font-bold text-sm group-hover:text-[#F25C1F] transition-colors">
                    Voir le détail →
                  </div>
                </div>
              </Link>
            ))}

            {/* Coming soon card */}
            <div className="brutal-border bg-[#0A0A0A] text-[#FFFBF0] flex flex-col items-center justify-center p-12 text-center min-h-[300px]">
              <p className="mono text-xs text-gray-500 mb-4">// en cours</p>
              <div className="text-4xl mb-4">🔨</div>
              <h3 className="text-xl font-black mb-2">Prochain projet</h3>
              <p className="text-gray-500 text-sm">
                D'autres réalisations arrivent bientôt.
                Contactez-moi pour discuter du vôtre.
              </p>
              <a
                href="/#contact"
                className="mt-6 brutal-border bg-[#FFE234] text-[#0A0A0A] px-4 py-2 text-sm font-bold hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#FFE234] transition-all"
              >
                Démarrer mon projet
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

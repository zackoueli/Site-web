import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Création site web sur mesure · Brest | BreizhApp",
  description: "Création de sites web vitrine, landing page et blog avec Next.js. Design sur mesure, SEO optimisé, livraison en 2 à 4 semaines. Basé à Brest, dès 490€.",
  keywords: [
    "création site web brest",
    "création site web sur mesure",
    "site web vitrine brest",
    "développeur web freelance brest",
    "site web professionnel next.js",
    "site web restaurant brest",
    "création site internet brest",
  ],
  alternates: { canonical: "https://breizhapp.tech/services/site-web" },
  openGraph: {
    title: "Création site web sur mesure · Brest",
    description: "Sites web vitrine, landing page et blog sur mesure avec Next.js. SEO optimisé, responsive, livraison en 2-4 semaines. Dès 490€.",
    url: "https://breizhapp.tech/services/site-web",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const features = [
  { title: "Design sur mesure", desc: "Un design unique adapté à votre identité visuelle, pas un template générique." },
  { title: "SEO optimisé", desc: "Structure, balises et contenu pensés pour apparaître dans Google dès le lancement." },
  { title: "100% responsive", desc: "Parfait sur mobile, tablette et desktop — testé sur tous les appareils." },
  { title: "Blog intégré", desc: "Publiez vos articles et actualités pour alimenter votre référencement naturel." },
  { title: "Formulaire de contact", desc: "Recevez les demandes directement par email, sans outil tiers payant." },
  { title: "Déploiement inclus", desc: "Mise en ligne sur votre hébergement ou sur Vercel, domaine configuré." },
];

const useCases = [
  { emoji: "🏠", title: "Site vitrine", desc: "Présentation de votre activité, vos services, vos tarifs et vos coordonnées." },
  { emoji: "📣", title: "Landing page", desc: "Page d'atterrissage pour une offre, un produit ou une campagne marketing." },
  { emoji: "✍️", title: "Blog professionnel", desc: "Partagez votre expertise et attirez des clients via le contenu." },
  { emoji: "📋", title: "Site avec devis en ligne", desc: "Formulaire de demande de devis intégré, relié à votre email ou CRM." },
];

export default function SiteWebPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        {/* Hero */}
        <section className="border-b-[3px] border-black py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-gray-400 mb-4">// service 02</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#0A0A0A] brutal-border p-3">
                <Globe size={32} className="text-[#FFFBF0]" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">Site web</h1>
                <p className="text-xl font-bold text-gray-500 mt-1">Vitrine · Landing page · Blog</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
              Un site web professionnel, rapide et bien référencé pour votre activité.
              Design unique, contenu optimisé SEO, livraison en 2 à 4 semaines.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">
                Demander un devis gratuit
              </a>
              <a href="/portfolio" className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-8 py-4">
                Voir les réalisations →
              </a>
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Ce qui est <span className="bg-[#FFE234] px-2 brutal-border">inclus</span></h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {features.map(({ title, desc }) => (
                <div key={title} className="brutal-border bg-white p-5">
                  <CheckCircle2 size={18} className="text-[#00D4AA] mb-3" />
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cas d'usage */}
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-8">Exemples de projets</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {useCases.map(({ emoji, title, desc }) => (
                <div key={title} className="border-2 border-gray-800 p-5 hover:border-[#FFE234] hover:bg-[#FFE234] hover:text-[#0A0A0A] transition-all group">
                  <div className="text-3xl mb-3">{emoji}</div>
                  <h3 className="font-bold text-[#FFFBF0] group-hover:text-[#0A0A0A] mb-1">{title}</h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-700 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto brutal-border brutal-shadow bg-[#FFE234] p-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Votre site web en 4 semaines</h2>
              <p className="text-sm mt-1">Devis gratuit · Réponse sous 48h · Sans engagement</p>
            </div>
            <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3 inline-flex items-center gap-2">
              Démarrer maintenant <ArrowRight size={16} />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

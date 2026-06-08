import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Application mobile salle de sport & fitness iOS & Android | BreizhApp",
  description:
    "Application mobile sur mesure pour salles de sport et studios fitness : réservation de cours, suivi d'entraînement, abonnements Stripe. Dès 490€. Développeur Brest.",
  alternates: { canonical: "https://breizhapp.tech/services/secteur/salle-de-sport" },
  openGraph: {
    title: "Application mobile salle de sport & fitness dès 490€",
    description:
      "App sport iOS & Android : réservation de cours, abonnements, suivi entraînement, push. Freelance à Brest, devis gratuit sous 24h.",
    url: "https://breizhapp.tech/services/secteur/salle-de-sport",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://breizhapp.tech/services/secteur/salle-de-sport#service",
      name: "Application mobile salle de sport & fitness iOS & Android",
      description:
        "Création d'application mobile pour salles de sport et studios fitness : réservation de cours, abonnements, suivi d'entraînement.",
      provider: { "@id": "https://breizhapp.tech/#business" },
      offers: [{ "@type": "Offer", name: "App Premium", price: "600", priceCurrency: "EUR" }],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://breizhapp.tech" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://breizhapp.tech/services/application-mobile" },
        { "@type": "ListItem", position: 3, name: "App salle de sport", item: "https://breizhapp.tech/services/secteur/salle-de-sport" },
      ],
    },
  ],
};

const features = [
  { title: "Réservation de cours", desc: "Vos membres réservent leurs créneaux depuis l'app — capacité gérée automatiquement." },
  { title: "Abonnements Stripe", desc: "Mensualités, packs de cours, offres annuelles — tout géré via paiement Stripe intégré." },
  { title: "Suivi d'entraînement", desc: "Programmes personnalisés, historique de séances, progression et objectifs." },
  { title: "Notifications push", desc: "Rappel de cours, nouveaux programmes, promotions d'abonnement, événements." },
  { title: "Espace coach", desc: "Les coachs gèrent leurs créneaux, programmes et messages clients depuis l'app." },
  { title: "iOS & Android", desc: "Application native publiée sur l'App Store et Google Play à votre marque." },
];

export default function SalleDesSportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 mono text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/services/application-mobile" className="hover:text-black transition-colors">Services</Link>
          <span>/</span>
          <span className="text-black font-bold">App salle de sport</span>
        </nav>

        {/* Hero */}
        <section className="border-b-[3px] border-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-[#00D4AA] mb-4">// secteur sport & fitness</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Application mobile<br />
              <span className="bg-[#FFE234] brutal-border px-2">salle de sport</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-6">
              Votre propre application iOS & Android pour gérer vos membres, réservations de cours et abonnements.
              Sans dépendance à des plateformes tierces — votre marque, vos données, votre croissance.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">
                Devis gratuit sous 24h
              </a>
              <Link href="/blog/application-mobile-salle-sport-fitness" className="brutal-btn bg-[#00D4AA] text-[#0A0A0A] px-8 py-4">
                Guide app fitness →
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 mono text-sm text-gray-500">
              <span className="brutal-border px-3 py-1 bg-white">✓ Réservation de cours</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Abonnements Stripe</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ iOS & Android</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Basé à Brest</span>
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Fonctionnalités <span className="bg-[#FFE234] px-2 brutal-border">incluses</span></h2>
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
            <h2 className="text-2xl font-bold text-[#FFE234] mb-6">Pour quel type de structure ?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { emoji: "🏋️", title: "Salle de musculation", desc: "Gestion des accès, programmes de musculation, suivi des charges et de la progression." },
                { emoji: "🧘", title: "Studio yoga / pilates", desc: "Réservation de cours, listes d'attente, packs de séances, vidéos d'entraînement." },
                { emoji: "🥊", title: "Salle de boxe / arts martiaux", desc: "Niveaux de ceinture, cours par niveau, événements et compétitions." },
                { emoji: "🚴", title: "Studio cycling / HIIT", desc: "Réservation de vélos, cours en direct ou replay, classement et défis." },
              ].map(({ emoji, title, desc }) => (
                <div key={title} className="border-2 border-gray-800 p-5 hover:border-[#FFE234] hover:bg-[#FFE234] hover:text-[#0A0A0A] transition-all group">
                  <div className="text-3xl mb-3">{emoji}</div>
                  <h3 className="font-bold text-[#FFFBF0] group-hover:text-[#0A0A0A] mb-1">{title}</h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-700 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tarif */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Tarif</h2>
            <div className="max-w-sm">
              <div className="brutal-border bg-[#FFE234] p-6">
                <p className="mono text-xs font-bold mb-2">// recommandé</p>
                <h3 className="font-bold text-xl mb-1">App Premium</h3>
                <p className="text-3xl font-bold mb-1">600€</p>
                <p className="mono text-xs text-gray-600 mb-4">+ 49€/mois</p>
                <p className="text-sm leading-relaxed">Réservation de cours, abonnements Stripe, notifications push, espace coach, panel admin, iOS & Android.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Articles liés */}
        <section className="py-12 px-4 bg-gray-50 brutal-border border-t-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-6">À lire aussi</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Application mobile salle de sport & fitness", href: "/blog/application-mobile-salle-sport-fitness" },
                { title: "App prise de rendez-vous", href: "/blog/application-mobile-prise-de-rdv" },
                { title: "App fidélité clients", href: "/blog/application-mobile-fidelite-clients" },
              ].map(({ title, href }) => (
                <Link key={href} href={href} className="brutal-border bg-white p-4 hover:bg-[#FFE234] transition-colors block">
                  <p className="font-bold text-sm leading-snug">{title} →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto brutal-border brutal-shadow bg-[#FFE234] p-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Lancez l&apos;app de votre salle de sport</h2>
              <p className="text-sm mt-1">Devis gratuit · Réponse sous 24h · Basé à Brest</p>
            </div>
            <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3 inline-flex items-center gap-2">
              Demander un devis <ArrowRight size={16} />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

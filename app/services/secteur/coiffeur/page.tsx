import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Application mobile salon de coiffure iOS & Android | BreizhApp",
  description:
    "Application mobile sur mesure pour votre salon de coiffure : réservation en ligne, programme de fidélité, notifications push. Alternative à Planity dès 490€. Devis gratuit.",
  alternates: { canonical: "https://breizhapp.tech/services/secteur/coiffeur" },
  openGraph: {
    title: "Application mobile salon de coiffure dès 490€",
    description:
      "App coiffeur iOS & Android : réservation 24h/24, fidélité, push. Alternative à Planity sans abonnement croissant. Freelance à Brest, devis gratuit.",
    url: "https://breizhapp.tech/services/secteur/coiffeur",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://breizhapp.tech/services/secteur/coiffeur#service",
      name: "Application mobile salon de coiffure iOS & Android",
      description:
        "Création d'application mobile pour salons de coiffure et instituts de beauté : réservation en ligne, fidélité, notifications push. Alternative à Planity.",
      provider: { "@id": "https://breizhapp.tech/#business" },
      offers: [
        { "@type": "Offer", name: "App Starter", price: "490", priceCurrency: "EUR" },
        { "@type": "Offer", name: "App Premium", price: "600", priceCurrency: "EUR" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://breizhapp.tech" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://breizhapp.tech/services/application-mobile" },
        { "@type": "ListItem", position: 3, name: "App coiffeur", item: "https://breizhapp.tech/services/secteur/coiffeur" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quelle est la différence entre BreizhApp et Planity pour un salon de coiffure ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Avec BreizhApp, vous obtenez une application mobile à votre nom sur l'App Store et Google Play. Avec Planity, vous accédez à leur plateforme via abonnement. BreizhApp vous donne la propriété de votre outil — votre code, vos données, votre app.",
          },
        },
        {
          "@type": "Question",
          name: "Est-ce que l'app gère la prise de rendez-vous ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui. L'application inclut un module de réservation en ligne disponible 24h/24 avec gestion des créneaux horaires, confirmation automatique par notification push et rappels avant le rendez-vous.",
          },
        },
      ],
    },
  ],
};

const features = [
  { title: "Réservation 24h/24", desc: "Vos clientes réservent depuis leur téléphone à n'importe quelle heure — vous recevez une notification immédiate." },
  { title: "Programme de fidélité", desc: "Tampons numériques, remises automatiques, offres d'anniversaire — sans carte papier à perdre." },
  { title: "Notifications push", desc: "Rappel de rendez-vous 24h avant, promotion du moment, nouveau produit disponible." },
  { title: "Galerie & portfolio", desc: "Présentez vos créations coiffure directement dans l'app pour inspirer et convertir." },
  { title: "Panel admin", desc: "Gérez vos créneaux, vos prestations et vos tarifs depuis votre tableau de bord web." },
  { title: "iOS & Android", desc: "Une seule app, disponible sur les deux stores, à votre nom et avec votre logo." },
];

export default function CoiffeurPage() {
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
          <span className="text-black font-bold">App coiffeur</span>
        </nav>

        {/* Hero */}
        <section className="border-b-[3px] border-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-[#FF6B9D] mb-4">// secteur coiffure & beauté</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Application mobile<br />
              <span className="bg-[#FFE234] brutal-border px-2">salon de coiffure</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-6">
              Votre propre application iOS & Android à votre nom — réservation en ligne, programme de fidélité
              et notifications push. L&apos;alternative à Planity où vous possédez vraiment votre outil.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">
                Devis gratuit sous 24h
              </a>
              <Link href="/blog/cout-reel-planity" className="brutal-btn bg-[#FF6B9D] text-white px-8 py-4">
                Coût réel de Planity →
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 mono text-sm text-gray-500">
              <span className="brutal-border px-3 py-1 bg-white">✓ App à votre nom sur les stores</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Zéro abonnement croissant</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ iOS & Android</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Basé à Brest</span>
            </div>
          </div>
        </section>

        {/* Mockup PC — site coiffeur */}
        <section className="py-16 px-4 border-b-[3px] border-black">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-[#FF6B9D] mb-2">// exemple concret</p>
            <h2 className="text-2xl font-bold mb-2">
              Un vrai site coiffeur{" "}
              <span className="bg-[#FFE234] brutal-border px-2">fait avec BreizhApp</span>
            </h2>
            <p className="text-sm text-gray-500 mono mb-8">
              Naviguez librement — c&apos;est le site réel, pas une capture.
            </p>
            <div className="brutal-border brutal-shadow bg-[#1a1a1a] rounded-t-xl p-3 pb-0">
              <div className="bg-[#2d2d2d] rounded-t-lg px-4 py-2 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 bg-[#3d3d3d] rounded px-3 py-1 mono text-xs text-gray-400 truncate">
                  coiffeur.breizhapp.tech
                </div>
              </div>
              <div className="w-full overflow-hidden" style={{ height: "520px" }}>
                <iframe
                  src="https://coiffeur.breizhapp.tech/"
                  title="Site salon de coiffure — exemple BreizhApp"
                  className="w-full h-full border-0 block"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="brutal-border border-t-0 bg-[#1a1a1a] h-4 rounded-b-sm" />
            <div className="brutal-border border-t-0 bg-[#2d2d2d] h-3 mx-8 rounded-b-md" />
            <div className="brutal-border border-t-0 bg-[#3d3d3d] h-2 mx-16 rounded-b-lg" />
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Fonctionnalités <span className="bg-[#FFE234] px-2 brutal-border">incluses</span></h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {features.map(({ title, desc }) => (
                <div key={title} className="brutal-border bg-white p-5">
                  <CheckCircle2 size={18} className="text-[#FF6B9D] mb-3" />
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparatif Planity */}
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-6">BreizhApp vs Planity</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "App à votre nom sur l'App Store", breizh: true, planity: false },
                { label: "Programme de fidélité personnalisé", breizh: true, planity: false },
                { label: "Notifications push illimitées", breizh: true, planity: false },
                { label: "Propriété de vos données clients", breizh: true, planity: false },
                { label: "Abonnement fixe sans hausse", breizh: true, planity: false },
                { label: "Réservation en ligne", breizh: true, planity: true },
              ].map(({ label, breizh, planity }) => (
                <div key={label} className="border-2 border-gray-800 p-4 flex items-center justify-between gap-2">
                  <p className="text-sm text-[#FFFBF0]">{label}</p>
                  <div className="flex gap-4 mono text-xs font-bold">
                    <span className={breizh ? "text-[#00D4AA]" : "text-gray-600"}>BreizhApp {breizh ? "✓" : "✗"}</span>
                    <span className={planity ? "text-[#00D4AA]" : "text-gray-600"}>Planity {planity ? "✓" : "✗"}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Tarifs</h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
              {[
                {
                  name: "App Starter",
                  price: "490€",
                  monthly: "+ 49€/mois",
                  desc: "Réservation en ligne, galerie portfolio, panel admin, notifications push, iOS & Android.",
                  highlight: false,
                },
                {
                  name: "App Premium",
                  price: "600€",
                  monthly: "+ 49€/mois",
                  desc: "Tout le Starter + paiement en ligne (Stripe), programme de fidélité numérique complet.",
                  highlight: true,
                },
              ].map(({ name, price, monthly, desc, highlight }) => (
                <div key={name} className={`brutal-border p-6 ${highlight ? "bg-[#FFE234]" : "bg-white"}`}>
                  {highlight && <p className="mono text-xs font-bold mb-2">// recommandé</p>}
                  <h3 className="font-bold text-xl mb-1">{name}</h3>
                  <p className="text-3xl font-bold mb-1">{price}</p>
                  <p className="mono text-xs text-gray-600 mb-4">{monthly}</p>
                  <p className="text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Articles liés */}
        <section className="py-12 px-4 bg-gray-50 brutal-border border-t-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-6">À lire aussi</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Tarif réel Planity 2026", href: "/blog/planity-tarif-prix-abonnement-2025" },
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
              <h2 className="text-2xl font-bold">Votre app salon de coiffure vous attend</h2>
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

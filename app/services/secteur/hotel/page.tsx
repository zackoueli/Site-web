import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Application mobile hôtel & hébergement iOS & Android | BreizhApp",
  description:
    "Application mobile sur mesure pour hôtels, chambres d'hôtes et hébergements : réservation en ligne, conciergerie, notifications push. Dès 490€. Développeur freelance Brest.",
  alternates: { canonical: "https://breizhapp.tech/services/secteur/hotel" },
  openGraph: {
    title: "Application mobile hôtel & hébergement dès 490€",
    description:
      "App hôtel iOS & Android : réservation directe, conciergerie, notifications. Zéro commission Booking. Freelance à Brest, devis gratuit sous 24h.",
    url: "https://breizhapp.tech/services/secteur/hotel",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://breizhapp.tech/services/secteur/hotel#service",
      name: "Application mobile hôtel & hébergement iOS & Android",
      description:
        "Création d'application mobile pour hôtels, chambres d'hôtes et gîtes : réservation directe, conciergerie digitale, notifications push.",
      provider: { "@id": "https://breizhapp.tech/#business" },
      offers: [{ "@type": "Offer", name: "App Premium", price: "600", priceCurrency: "EUR" }],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://breizhapp.tech" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://breizhapp.tech/services/application-mobile" },
        { "@type": "ListItem", position: 3, name: "App hôtel", item: "https://breizhapp.tech/services/secteur/hotel" },
      ],
    },
  ],
};

const features = [
  { title: "Réservation directe", desc: "Vos clients réservent directement dans l'app — zéro commission Booking ou Airbnb." },
  { title: "Conciergerie digitale", desc: "Recommandations locales, services en chambre, demandes spéciales — tout depuis l'app." },
  { title: "Check-in / Check-out", desc: "Simplifiez l'arrivée et le départ avec des processus digitaux fluides." },
  { title: "Notifications push", desc: "Informez vos clients : heure de disponibilité de la chambre, offres spa, événements locaux." },
  { title: "Galerie & visites virtuelles", desc: "Présentez vos chambres et équipements avec photos optimisées et contenu dynamique." },
  { title: "iOS & Android", desc: "Application native sur l'App Store et Google Play, à votre nom et votre charte graphique." },
];

export default function HotelPage() {
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
          <span className="text-black font-bold">App hôtel</span>
        </nav>

        {/* Hero */}
        <section className="border-b-[3px] border-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-[#7C3AED] mb-4">// secteur hôtellerie & hébergement</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Application mobile<br />
              <span className="bg-[#FFE234] brutal-border px-2">hôtel & hébergement</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-6">
              Reprenez vos réservations directes face à Booking.com et Airbnb. Votre propre application iOS & Android
              avec conciergerie digitale, réservation sans commission et notifications push personnalisées.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">
                Devis gratuit sous 24h
              </a>
              <Link href="/blog/application-mobile-hotel-hebergement" className="brutal-btn bg-[#7C3AED] text-white px-8 py-4">
                Guide app hôtel →
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 mono text-sm text-gray-500">
              <span className="brutal-border px-3 py-1 bg-white">✓ Zéro commission Booking</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ iOS & Android</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Conciergerie digitale</span>
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
                  <CheckCircle2 size={18} className="text-[#7C3AED] mb-3" />
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI */}
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-6">Ce que vous économisez</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Commission Booking.com évitée", value: "15–18%", sub: "par réservation" },
                { label: "Commission Airbnb évitée", value: "3–16%", sub: "par réservation" },
                { label: "Fidélisation client", value: "+30%", sub: "de réservations directes" },
              ].map(({ label, value, sub }) => (
                <div key={label} className="border-2 border-gray-800 p-5 hover:border-[#FFE234] transition-colors">
                  <p className="text-3xl font-bold text-[#FFE234] mb-1">{value}</p>
                  <p className="text-sm text-[#FFFBF0] font-bold">{label}</p>
                  <p className="text-xs text-gray-400 mt-1">{sub}</p>
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
                <p className="text-sm leading-relaxed">Réservation directe, paiement Stripe, conciergerie digitale, notifications push, panel admin, iOS & Android.</p>
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
                { title: "Application mobile hôtel & hébergement", href: "/blog/application-mobile-hotel-hebergement" },
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
              <h2 className="text-2xl font-bold">Lancez l&apos;app de votre hébergement</h2>
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

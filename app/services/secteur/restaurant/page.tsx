import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Application mobile restaurant iOS & Android dès 490€ | BreizhApp",
  description:
    "Créez l'app de votre restaurant : commande en ligne, programme de fidélité, notifications push. Sans Uber Eats, sans commission. Développeur freelance à Brest. Devis gratuit.",
  alternates: { canonical: "https://breizhapp.tech/services/secteur/restaurant" },
  openGraph: {
    title: "Application mobile restaurant iOS & Android dès 490€",
    description:
      "App restaurant sur mesure : commande en ligne Stripe, fidélité, push. Zéro commission plateforme. Freelance à Brest, devis gratuit sous 24h.",
    url: "https://breizhapp.tech/services/secteur/restaurant",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://breizhapp.tech/services/secteur/restaurant#service",
      name: "Application mobile restaurant iOS & Android",
      description:
        "Création d'application mobile sur mesure pour restaurants : commande en ligne, fidélité, notifications push. Sans commission Uber Eats.",
      provider: { "@id": "https://breizhapp.tech/#business" },
      areaServed: [{ "@type": "City", name: "Brest" }, { "@type": "AdministrativeArea", name: "Bretagne" }],
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
        { "@type": "ListItem", position: 3, name: "App restaurant", item: "https://breizhapp.tech/services/secteur/restaurant" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Combien coûte une application mobile pour un restaurant ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Une application mobile restaurant iOS & Android coûte à partir de 490€ avec BreizhApp. La formule Premium avec commande en ligne et paiement Stripe est à 600€ + 49€/mois d'hébergement et support.",
          },
        },
        {
          "@type": "Question",
          name: "Est-ce que l'app remplace Uber Eats ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui. L'application intègre la commande en ligne avec paiement Stripe directement sur votre app. Vous ne payez aucune commission sur vos ventes — contrairement à Uber Eats (20-30%) ou Deliveroo.",
          },
        },
        {
          "@type": "Question",
          name: "En combien de temps l'app est-elle livrée ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Entre 3 et 5 semaines pour une application restaurant complète avec commande en ligne. Les apps plus simples (catalogue, réservation) sont livrées en 2 à 3 semaines.",
          },
        },
      ],
    },
  ],
};

const features = [
  { title: "Commande en ligne", desc: "Paiement Stripe intégré. Vos clients commandent et paient depuis l'app — vous recevez la commande instantanément." },
  { title: "Programme de fidélité", desc: "Tampons numériques, réductions automatiques à la 10ème visite, offres d'anniversaire." },
  { title: "Notifications push", desc: "Envoyez \"Offre spéciale ce soir\" ou \"Nouveau menu\" directement sur le téléphone de vos clients." },
  { title: "Carte & menu dynamique", desc: "Modifiez votre menu en temps réel depuis votre panel admin — sans passer par un développeur." },
  { title: "Réservation de table", desc: "Formulaire de réservation avec créneaux, confirmation automatique par email et notification push." },
  { title: "iOS & Android", desc: "L'app est publiée sur l'App Store et Google Play — accessible à tous vos clients." },
];

const pricing = [
  {
    name: "App Starter",
    price: "490€",
    monthly: "+ 49€/mois",
    desc: "Application iOS & Android, menu dynamique, réservation en ligne, panel admin, déploiement stores inclus.",
    highlight: false,
  },
  {
    name: "App Premium",
    price: "600€",
    monthly: "+ 49€/mois",
    desc: "Tout le Starter + commande en ligne Stripe, notifications push, programme de fidélité numérique.",
    highlight: true,
  },
  {
    name: "App Boutique",
    price: "0€",
    monthly: "12% sur les ventes",
    desc: "Pour les restaurants avec livraison : zéro frais d'installation, commission uniquement sur les ventes.",
    highlight: false,
  },
];

export default function RestaurantPage() {
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
          <span className="text-black font-bold">App restaurant</span>
        </nav>

        {/* Hero */}
        <section className="border-b-[3px] border-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-[#FF6B35] mb-4">// secteur restaurant</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Application mobile<br />
              <span className="bg-[#FFE234] brutal-border px-2">restaurant</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-6">
              Reprenez le contrôle face à Uber Eats et Deliveroo. Votre propre application iOS & Android
              avec commande en ligne, programme de fidélité et notifications push — dès 490€, sans commission.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">
                Devis gratuit sous 24h
              </a>
              <Link href="/blog/application-mobile-restaurant" className="brutal-btn bg-[#FF6B35] text-white px-8 py-4">
                Guide app restaurant →
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 mono text-sm text-gray-500">
              <span className="brutal-border px-3 py-1 bg-white">✓ Zéro commission Uber Eats</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ iOS & Android</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Livraison 3-5 semaines</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Basé à Brest</span>
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Ce qu&apos;inclut votre <span className="bg-[#FFE234] px-2 brutal-border">application restaurant</span></h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {features.map(({ title, desc }) => (
                <div key={title} className="brutal-border bg-white p-5">
                  <CheckCircle2 size={18} className="text-[#FF6B35] mb-3" />
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
            <h2 className="text-2xl font-bold text-[#FFE234] mb-6">Combien économisez-vous ?</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Commission Uber Eats évitée", value: "20–30%", sub: "par commande" },
                { label: "Amortissement moyen", value: "2 mois", sub: "pour un restaurant actif" },
                { label: "Économie annuelle estimée", value: "2 000–8 000€", sub: "selon le volume" },
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

        {/* Tarifs */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Tarifs application restaurant</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {pricing.map(({ name, price, monthly, desc, highlight }) => (
                <div key={name} className={`brutal-border p-6 ${highlight ? "bg-[#FFE234]" : "bg-white"}`}>
                  {highlight && <p className="mono text-xs font-bold mb-2">// recommandé</p>}
                  <h3 className="font-bold text-xl mb-1">{name}</h3>
                  <p className="text-3xl font-bold mb-1">{price}</p>
                  <p className="mono text-xs text-gray-600 mb-4">{monthly}</p>
                  <p className="text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4 mono">* Hébergement Firebase inclus · Support réactif · Mises à jour incluses</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Questions fréquentes</h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  q: "Combien coûte une application mobile pour un restaurant ?",
                  a: "À partir de 490€ pour une application iOS & Android complète. La formule Premium avec commande en ligne Stripe et programme de fidélité est à 600€ + 49€/mois.",
                },
                {
                  q: "Est-ce que l'app remplace Uber Eats ?",
                  a: "Oui. La commande en ligne avec paiement Stripe est intégrée directement dans votre app. Vous ne payez aucune commission sur vos ventes — vos clients commandent et vous payez directement.",
                },
                {
                  q: "En combien de temps l'application est-elle livrée ?",
                  a: "Entre 3 et 5 semaines pour une application complète avec commande en ligne. Les apps plus simples (menu + réservation) sont livrées en 2 à 3 semaines.",
                },
                {
                  q: "Puis-je modifier mon menu moi-même ?",
                  a: "Oui. Votre application inclut un panel d'administration web depuis lequel vous pouvez modifier votre menu, vos prix et vos horaires à tout moment, sans passer par un développeur.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="brutal-border bg-white p-5">
                  <h3 className="font-bold mb-2">{q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Articles liés */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-6">À lire aussi</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "App mobile restaurant : fonctionnalités 2026", href: "/blog/application-mobile-restaurant" },
                { title: "App restaurant Bretagne : guide 2025", href: "/blog/application-mobile-restaurant-bretagne" },
                { title: "Site web restaurant Brest", href: "/blog/site-web-restaurant-brest" },
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
              <h2 className="text-2xl font-bold">Lancez l&apos;app de votre restaurant</h2>
              <p className="text-sm mt-1">Devis gratuit · Réponse sous 24h · Sans engagement · Basé à Brest</p>
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

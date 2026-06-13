import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Application mobile maraîcher & commerce local iOS & Android | BreizhApp",
  description:
    "Créez l'app de votre commerce local : paniers hebdomadaires, abonnements, paiement en ligne, gestion des livraisons. Développeur freelance à Brest. Dès 490€.",
  alternates: { canonical: "https://breizhapp.tech/services/secteur/maraicher-commerce-local" },
  openGraph: {
    title: "Application mobile maraîcher & commerce local | BreizhApp",
    description: "App sur mesure pour maraîchers, épiceries et commerces de proximité : paniers, abonnements, Stripe, livraisons locales. Freelance à Brest, devis gratuit.",
    url: "https://breizhapp.tech/services/secteur/maraicher-commerce-local",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Application mobile maraîcher et commerce local",
      description: "Création d'application mobile sur mesure pour maraîchers, épiceries et commerces de proximité : paniers hebdomadaires, abonnements, paiement Stripe.",
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
        { "@type": "ListItem", position: 3, name: "App maraîcher", item: "https://breizhapp.tech/services/secteur/maraicher-commerce-local" },
      ],
    },
  ],
};

const features = [
  { title: "Paniers hebdomadaires", desc: "Vos clients composent leur panier à l'avance, vous préparez exactement ce qui est commandé. Fini les invendus, fini les ruptures surprises." },
  { title: "Abonnements récurrents", desc: "Formules hebdomadaires ou mensuelles avec prélèvement Stripe automatique. Vos revenus deviennent prévisibles." },
  { title: "Gestion des stocks en temps réel", desc: "Mettez à jour vos disponibilités depuis votre téléphone. Les clients voient immédiatement ce qui reste." },
  { title: "Livraisons & créneaux", desc: "Définissez vos zones de livraison, vos créneaux et vos tarifs. L'app gère les plannings et envoie les confirmations automatiquement." },
  { title: "Notifications de disponibilité", desc: "Informez vos abonnés de l'arrivée de nouveaux produits ou des changements de paniers par notification push." },
  { title: "Click & collect", desc: "Vos clients commandent en ligne et récupèrent leur panier au marché ou à votre ferme au créneau de leur choix." },
];

const pricing = [
  {
    name: "App Starter",
    price: "490€",
    monthly: "+ 49€/mois",
    desc: "Catalogue produits, commande en ligne, click & collect, panel admin. Idéal pour démarrer.",
    highlight: false,
  },
  {
    name: "App Premium",
    price: "600€",
    monthly: "+ 49€/mois",
    desc: "Tout le Starter et en plus les abonnements Stripe récurrents, notifications push et gestion des créneaux de livraison.",
    highlight: true,
  },
  {
    name: "App Boutique",
    price: "0€",
    monthly: "12% sur les ventes",
    desc: "Zéro frais d'installation. Vous payez uniquement une commission sur ce que vous vendez via l'app.",
    highlight: false,
  },
];

export default function MaraicherPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        <nav className="max-w-4xl mx-auto px-4 pt-6 mono text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/services/application-mobile" className="hover:text-black transition-colors">Services</Link>
          <span>/</span>
          <span className="text-black font-bold">App maraîcher</span>
        </nav>

        <section className="border-b-[3px] border-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-[#00D4AA] mb-4">// secteur commerce local</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Application mobile<br />
              <span className="bg-[#FFE234] brutal-border px-2">maraîcher & circuit court</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-6">
              Vendre en direct sans passer par une plateforme, fidéliser ses clients et gérer ses paniers depuis son téléphone — c'est ce que permet une app sur mesure. Dès 490€, livrée en 3 semaines.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">Devis gratuit sous 24h</a>
              <Link href="/blog/combien-coute-application-mobile" className="brutal-btn bg-[#00D4AA] text-[#0A0A0A] px-8 py-4">Voir les tarifs →</Link>
            </div>
            <div className="flex flex-wrap gap-4 mono text-sm text-gray-500">
              <span className="brutal-border px-3 py-1 bg-white">✓ Zéro commission plateforme</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ iOS & Android</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Abonnements Stripe</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Basé à Brest</span>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Ce qu'inclut votre <span className="bg-[#FFE234] px-2 brutal-border">application</span></h2>
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

        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-6">Pourquoi vendre en direct via une app ?</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Commission économisée", value: "0%", sub: "contre 15 à 30% sur les plateformes" },
                { label: "Taux de fidélisation", value: "3×", sub: "supérieur à la vente sur marché seul" },
                { label: "Commandes prévisibles", value: "100%", sub: "grâce aux abonnements récurrents" },
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

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Tarifs</h2>
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
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Questions fréquentes</h2>
            <div className="flex flex-col gap-4">
              {[
                { q: "Mon app fonctionnera-t-elle pour un AMAP ou une épicerie associative ?", a: "Oui. Le système d'abonnements et de paniers est parfaitement adapté au modèle AMAP : les membres s'abonnent, choisissent leur formule et paient automatiquement chaque semaine ou chaque mois." },
                { q: "Puis-je gérer plusieurs points de retrait ?", a: "Oui. Vous définissez autant de points de retrait que nécessaire — marché, ferme, dépôt en ville — avec leurs créneaux respectifs. Vos clients choisissent celui qui les arrange." },
                { q: "Est-ce que mes clients doivent télécharger l'app ?", a: "Oui, l'application est publiée sur l'App Store et Google Play. Le téléchargement est gratuit pour vos clients. C'est ce qui permet les notifications push et une expérience fluide." },
                { q: "En combien de temps l'app est-elle prête ?", a: "Comptez 3 à 4 semaines pour une app complète avec abonnements et livraisons. Une version plus simple (catalogue + click & collect) est livrée en 2 semaines." },
              ].map(({ q, a }) => (
                <div key={q} className="brutal-border bg-white p-5">
                  <h3 className="font-bold mb-2">{q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto brutal-border brutal-shadow bg-[#FFE234] p-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Lancez l'app de votre commerce local</h2>
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

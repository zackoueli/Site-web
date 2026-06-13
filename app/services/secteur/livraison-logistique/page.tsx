import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Application mobile livraison & logistique iOS & Android | BreizhApp",
  description:
    "Créez votre app de livraison sur mesure : suivi en temps réel, gestion des livreurs, paiement Stripe, zones de livraison. Sans commission Uber Eats. Dès 490€.",
  alternates: { canonical: "https://breizhapp.tech/services/secteur/livraison-logistique" },
  openGraph: {
    title: "Application mobile livraison & logistique | BreizhApp",
    description: "App de livraison iOS & Android sur mesure : suivi temps réel, gestion livreurs, Stripe, zones. Sans Uber Eats. Freelance Brest, devis gratuit.",
    url: "https://breizhapp.tech/services/secteur/livraison-logistique",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const features = [
  { title: "Suivi de commande en temps réel", desc: "Vos clients voient l'avancement de leur commande en direct — statut préparation, en route, livré. Zéro appel pour savoir où en est le livreur." },
  { title: "Gestion des livreurs", desc: "Chaque livreur a son propre espace dans l'app : il reçoit ses commandes, confirme les livraisons et documente les incidents." },
  { title: "Zones de livraison & tarifs", desc: "Définissez vos zones géographiques avec des tarifs différenciés. L'app calcule automatiquement les frais de livraison à la commande." },
  { title: "Paiement Stripe à la commande", desc: "Paiement sécurisé au moment de la commande, avec gestion des remboursements en cas de problème de livraison." },
  { title: "Notifications à chaque étape", desc: "Push automatiques à chaque changement de statut : commande confirmée, en préparation, prise en charge par le livreur, livrée." },
  { title: "Dashboard logistique", desc: "Vue d'ensemble des commandes en cours, des livreurs actifs et des zones chaudes depuis votre panel d'administration." },
];

export default function LivraisonPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        <nav className="max-w-4xl mx-auto px-4 pt-6 mono text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/services/application-mobile" className="hover:text-black transition-colors">Services</Link>
          <span>/</span>
          <span className="text-black font-bold">App livraison</span>
        </nav>

        <section className="border-b-[3px] border-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-[#FF6B35] mb-4">// livraison & logistique</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Application mobile<br />
              <span className="bg-[#FF6B35] text-white brutal-border px-2">livraison & logistique</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-6">
              Uber Eats prend entre 20 et 30% de commission sur chaque commande. Votre propre application de livraison vous coûte 490€ à 600€ — et vous gardez 100% de vos revenus à partir du premier mois.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">Devis gratuit sous 24h</a>
              <Link href="/blog/combien-coute-application-mobile" className="brutal-btn bg-[#FF6B35] text-white px-8 py-4">Voir les tarifs →</Link>
            </div>
            <div className="flex flex-wrap gap-4 mono text-sm text-gray-500">
              <span className="brutal-border px-3 py-1 bg-white">✓ Zéro commission Uber Eats</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Suivi temps réel</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Gestion livreurs</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ iOS & Android</span>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Ce qu'inclut votre <span className="bg-[#FFE234] px-2 brutal-border">app de livraison</span></h2>
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

        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-6">Combien économisez-vous sur Uber Eats ?</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Commission Uber Eats évitée", value: "25%", sub: "en moyenne par commande" },
                { label: "Amortissement estimé", value: "2-3 mois", sub: "pour un restaurant actif" },
                { label: "Économie sur 1 an", value: "3 000-12 000€", sub: "selon le volume de commandes" },
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

        <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Questions fréquentes</h2>
            <div className="flex flex-col gap-4">
              {[
                { q: "Mon app peut-elle gérer plusieurs livreurs en même temps ?", a: "Oui. Chaque livreur a son propre espace dans l'app avec ses commandes assignées. Vous pouvez suivre en temps réel qui livre quoi et intervenir si nécessaire." },
                { q: "Peut-on créer une app similaire à Uber Eats ou Glovo ?", a: "Oui, c'est techniquement faisable. Pour une marketplace multi-restaurants avec système de mise en relation, le projet est plus complexe et fera l'objet d'un devis personnalisé. Pour une app de livraison propre à votre restaurant ou commerce, 490€ à 600€ couvrent l'essentiel." },
                { q: "L'app fonctionne-t-elle hors ligne pour les livreurs ?", a: "Partiellement. L'app peut stocker les informations de livraison en cache et les synchroniser quand la connexion revient — utile en zone blanche." },
                { q: "En combien de temps l'app est-elle prête ?", a: "Entre 4 et 6 semaines pour une app de livraison complète avec suivi temps réel, gestion des livreurs et Stripe. Le délai dépend de la complexité des zones et de la gestion des livreurs." },
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
              <h2 className="text-2xl font-bold">Lancez votre app de livraison</h2>
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

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Application mobile prise de rendez-vous iOS & Android | BreizhApp",
  description:
    "App de réservation sur mesure : agenda en ligne, créneaux, rappels automatiques, paiement Stripe. Sans Calendly, sans commission. Développeur freelance à Brest.",
  alternates: { canonical: "https://breizhapp.tech/services/secteur/reservation-prise-de-rdv" },
  openGraph: {
    title: "Application mobile prise de rendez-vous | BreizhApp",
    description: "App de réservation iOS & Android sur mesure : agenda, créneaux, rappels push, paiement. Sans abonnement Calendly. Freelance à Brest, devis gratuit sous 24h.",
    url: "https://breizhapp.tech/services/secteur/reservation-prise-de-rdv",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const features = [
  { title: "Agenda en temps réel", desc: "Vos disponibilités s'affichent instantanément. Quand un créneau est pris, il disparaît pour tous les autres clients — fini les doubles réservations." },
  { title: "Rappels automatiques", desc: "SMS ou notifications push envoyés automatiquement 24h et 1h avant le rendez-vous. Les no-shows diminuent de 60% en moyenne." },
  { title: "Paiement à la réservation", desc: "Stripe intégré pour l'acompte ou le paiement complet au moment de la réservation. Sécurise vos créneaux et évite les annulations de dernière minute." },
  { title: "Gestion multi-prestataires", desc: "Si vous avez plusieurs praticiens ou plusieurs salles, chacun a son propre agenda. Les clients choisissent la personne et le créneau." },
  { title: "Historique client", desc: "Chaque client retrouve l'historique de ses rendez-vous, peut re-booker en un tap et accède à ses documents si nécessaire." },
  { title: "Panel admin complet", desc: "Visualisez votre planning, bloquez des créneaux, gérez les annulations et suivez vos statistiques depuis votre téléphone ou ordinateur." },
];

export default function ReservationPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        <nav className="max-w-4xl mx-auto px-4 pt-6 mono text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/services/application-mobile" className="hover:text-black transition-colors">Services</Link>
          <span>/</span>
          <span className="text-black font-bold">App réservation</span>
        </nav>

        <section className="border-b-[3px] border-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-[#00D4AA] mb-4">// réservation & agenda</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Application mobile<br />
              <span className="bg-[#00D4AA] text-[#0A0A0A] brutal-border px-2">prise de rendez-vous</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-6">
              Calendly coûte entre 8€ et 16€ par mois sans jamais vous appartenir. Une app sur mesure, c'est votre agenda, votre marque, vos données — pour 490€ et sans abonnement à une plateforme tierce.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">Devis gratuit sous 24h</a>
              <Link href="/blog/application-mobile-prise-de-rdv" className="brutal-btn bg-[#00D4AA] text-[#0A0A0A] px-8 py-4">Guide app RDV →</Link>
            </div>
            <div className="flex flex-wrap gap-4 mono text-sm text-gray-500">
              <span className="brutal-border px-3 py-1 bg-white">✓ Sans abonnement Calendly</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Rappels automatiques</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Paiement Stripe</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ iOS & Android</span>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Ce qu'inclut votre <span className="bg-[#FFE234] px-2 brutal-border">app de réservation</span></h2>
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
            <h2 className="text-2xl font-bold text-[#FFE234] mb-6">Secteurs qui utilisent ce type d'app</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { emoji: "💇", label: "Coiffeurs & salons de beauté", desc: "L'app remplace Planity ou Treatwell — sans payer de commission sur chaque prestation." },
                { emoji: "🏋️", label: "Coaches sportifs & salles de sport", desc: "Réservation de séances individuelles, abonnements, gestion des cours collectifs." },
                { emoji: "🩺", label: "Praticiens & thérapeutes", desc: "Ostéopathes, kinés, psychologues : agenda sécurisé avec rappels et paiement sécurisé." },
                { emoji: "🏡", label: "Locations & hébergements", desc: "Gîtes, salles de réception, espaces de coworking : disponibilité en temps réel et réservation instantanée." },
              ].map(({ emoji, label, desc }) => (
                <div key={label} className="border-2 border-gray-800 p-5 hover:border-[#00D4AA] transition-colors">
                  <div className="text-3xl mb-3">{emoji}</div>
                  <h3 className="font-bold text-[#FFFBF0] mb-1">{label}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
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
                { q: "Pourquoi ne pas utiliser Calendly ou Doctolib ?", a: "Ces plateformes prennent une commission sur chaque réservation ou facturent un abonnement mensuel croissant avec votre activité. Une app sur mesure coûte 490€ une fois, puis 49€/mois d'hébergement et support — vos données vous appartiennent et vous ne dépendez d'aucune plateforme." },
                { q: "Les clients doivent-ils créer un compte pour réserver ?", a: "C'est configurable. Vous pouvez permettre la réservation en tant qu'invité (email uniquement) ou imposer la création d'un compte pour accéder à l'historique et aux rappels push." },
                { q: "L'app peut-elle gérer les annulations et remboursements ?", a: "Oui. Vous définissez votre politique d'annulation (délai, remboursement partiel ou total) et l'app l'applique automatiquement via Stripe." },
                { q: "Combien de temps pour développer l'app ?", a: "Une app de réservation complète est livrée en 3 à 5 semaines selon la complexité. Si vous avez plusieurs praticiens ou des fonctionnalités spécifiques, prévoyez plutôt 4 à 6 semaines." },
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
              <h2 className="text-2xl font-bold">Votre agenda en ligne sans abonnement tiers</h2>
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

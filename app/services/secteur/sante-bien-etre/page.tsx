import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Application mobile santé & bien-être iOS & Android | BreizhApp",
  description:
    "Créez votre app santé ou bien-être sur mesure : suivi patient, journal de bord, séances en ligne, prise de RDV, rappels. Développeur freelance à Brest. Dès 490€.",
  alternates: { canonical: "https://breizhapp.tech/services/secteur/sante-bien-etre" },
  openGraph: {
    title: "Application mobile santé & bien-être | BreizhApp",
    description: "App santé et bien-être iOS & Android sur mesure : suivi, journal, RDV, notifications. Freelance Brest, devis gratuit sous 24h.",
    url: "https://breizhapp.tech/services/secteur/sante-bien-etre",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const features = [
  { title: "Suivi & journal de bord", desc: "Vos patients ou clients notent leurs séances, symptômes, humeur ou progression. Vous accédez à un historique complet avant chaque consultation." },
  { title: "Prise de rendez-vous intégrée", desc: "Agenda en ligne, créneaux disponibles en temps réel, confirmation automatique et rappels push 24h avant. Fini les no-shows." },
  { title: "Programmes personnalisés", desc: "Créez des programmes de soins, d'exercices ou de suivi alimentaire et assignez-les à vos clients. Ils les suivent depuis l'app à leur rythme." },
  { title: "Messagerie praticien-client", desc: "Canal de communication direct et sécurisé entre vous et vos clients. Questions entre séances, feedback, encouragements — tout dans l'app." },
  { title: "Contenu éducatif", desc: "Articles, vidéos, exercices guidés — partagez du contenu pédagogique avec vos clients directement depuis votre panel admin." },
  { title: "Rappels & routines", desc: "Notifications push programmables pour rappeler une prise de traitement, un exercice quotidien ou un moment de méditation." },
];

export default function SantePage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        <nav className="max-w-4xl mx-auto px-4 pt-6 mono text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/services/application-mobile" className="hover:text-black transition-colors">Services</Link>
          <span>/</span>
          <span className="text-black font-bold">App santé</span>
        </nav>

        <section className="border-b-[3px] border-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-[#00D4AA] mb-4">// santé & bien-être</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Application mobile<br />
              <span className="bg-[#00D4AA] text-[#0A0A0A] brutal-border px-2">santé & bien-être</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-6">
              Qu'il s'agisse d'un suivi patient pour un praticien de santé, d'une app de coaching bien-être ou d'un outil de suivi personnel, je développe votre application sur mesure avec les fonctionnalités dont vous avez vraiment besoin.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">Devis gratuit sous 24h</a>
              <Link href="/blog/application-mobile-fidelite-clients" className="brutal-btn bg-[#00D4AA] text-[#0A0A0A] px-8 py-4">Fidélisation clients →</Link>
            </div>
            <div className="flex flex-wrap gap-4 mono text-sm text-gray-500">
              <span className="brutal-border px-3 py-1 bg-white">✓ Suivi & journal de bord</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Prise de RDV</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ iOS & Android</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Données sécurisées</span>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Fonctionnalités <span className="bg-[#FFE234] px-2 brutal-border">de l'app</span></h2>
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
            <h2 className="text-2xl font-bold text-[#FFE234] mb-6">Pour qui c'est fait ?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { emoji: "🩺", label: "Praticiens de santé", desc: "Ostéopathes, kinés, naturopathes, nutritionnistes — un outil professionnel pour le suivi de vos patients." },
                { emoji: "🧘", label: "Coachs & thérapeutes", desc: "Coachs de vie, psychologues, hypnothérapeutes — accompagnez vos clients entre les séances avec une app dédiée." },
                { emoji: "💪", label: "Coachs sportifs", desc: "Programmes d'entraînement, suivi des performances, messagerie coach-client, photos avant/après." },
                { emoji: "🌿", label: "Bien-être & méditation", desc: "Apps de méditation guidée, de cohérence cardiaque, de suivi du sommeil ou de gestion du stress." },
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
                { q: "Les données de santé de mes patients sont-elles sécurisées ?", a: "Oui. Je travaille avec Firebase ou Supabase qui respectent les standards de sécurité (chiffrement des données, authentification sécurisée). Pour les apps avec des données de santé sensibles, je vous conseille d'intégrer un DPO et d'éventuellement déclarer l'app à la CNIL selon son usage." },
                { q: "Peut-on proposer des séances en visio depuis l'app ?", a: "Oui, en intégrant une solution de visioconférence comme Daily.co ou Whereby. Vos clients réservent leur séance et rejoignent l'appel directement depuis l'app sans installer quoi que ce soit." },
                { q: "L'app peut-elle envoyer des rappels de prise de médicaments ?", a: "Oui. Les notifications push programmables permettent d'envoyer des rappels à des horaires définis — quotidiennement, plusieurs fois par jour, ou selon un planning personnalisé par l'utilisateur." },
                { q: "Combien coûte ce type d'app ?", a: "À partir de 490€ pour une app de prise de RDV avec suivi simple. Les fonctionnalités avancées (messagerie, programmes, visio) sont dans la fourchette 600€ à 1 500€ selon la complexité. Je vous envoie une estimation détaillée sous 24h." },
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
              <h2 className="text-2xl font-bold">Votre app santé sur mesure</h2>
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

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Application mobile éducation & formation iOS & Android | BreizhApp",
  description:
    "Créez votre app e-learning sur mesure : cours en ligne, quiz, progression, certificats, messagerie formateur. Développeur freelance à Brest. Dès 490€.",
  alternates: { canonical: "https://breizhapp.tech/services/secteur/education-formation" },
  openGraph: {
    title: "Application mobile éducation & formation | BreizhApp",
    description: "App e-learning iOS & Android sur mesure : cours, quiz, progression, certificats. Freelance Brest, devis gratuit sous 24h.",
    url: "https://breizhapp.tech/services/secteur/education-formation",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const features = [
  { title: "Cours & modules structurés", desc: "Organisez votre contenu en chapitres, leçons et modules. Vos apprenants progressent à leur rythme, avec leur avancement sauvegardé automatiquement." },
  { title: "Quiz & exercices interactifs", desc: "Questions à choix multiples, vrai/faux, textes à compléter — des formats variés pour tester les connaissances et rendre l'apprentissage moins passif." },
  { title: "Suivi de progression", desc: "Chaque apprenant voit son pourcentage de complétion, ses scores et ses points forts. Vous voyez depuis le dashboard qui avance et qui décroche." },
  { title: "Certificats de complétion", desc: "Générez et envoyez automatiquement un certificat PDF personnalisé quand un apprenant termine une formation." },
  { title: "Messagerie formateur-apprenant", desc: "Canal direct pour les questions, les feedbacks et les encouragements. L'accompagnement humain qui fait la différence dans la rétention." },
  { title: "Accès par abonnement ou à l'unité", desc: "Monétisez votre contenu par abonnement mensuel, achat unique de cours ou accès freemium avec contenu premium payant." },
];

export default function EducationPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        <nav className="max-w-4xl mx-auto px-4 pt-6 mono text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/services/application-mobile" className="hover:text-black transition-colors">Services</Link>
          <span>/</span>
          <span className="text-black font-bold">App formation</span>
        </nav>

        <section className="border-b-[3px] border-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-[#FFE234] mb-4">// éducation & formation</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Application mobile<br />
              <span className="bg-[#FFE234] brutal-border px-2">éducation & e-learning</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-6">
              Teachizy, Thinkific ou Kajabi coûtent entre 30€ et 200€ par mois sans jamais vous appartenir. Une app e-learning sur mesure, c'est votre contenu, votre marque et vos revenus — sans dépendre d'une plateforme tierce.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">Devis gratuit sous 24h</a>
              <Link href="/blog/creer-plateforme-digitale-sur-mesure" className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-8 py-4">Guide plateforme →</Link>
            </div>
            <div className="flex flex-wrap gap-4 mono text-sm text-gray-500">
              <span className="brutal-border px-3 py-1 bg-white">✓ Vos revenus, 0% de commission</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ iOS & Android</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Quiz & certificats</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Abonnements Stripe</span>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Fonctionnalités <span className="bg-[#FFE234] px-2 brutal-border">de l'app</span></h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {features.map(({ title, desc }) => (
                <div key={title} className="brutal-border bg-white p-5">
                  <CheckCircle2 size={18} className="text-[#FFE234] mb-3" />
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
                { emoji: "👩‍🏫", label: "Formateurs & consultants", desc: "Monétisez votre expertise avec votre propre app — sans payer d'abonnement à Teachizy ou Thinkific." },
                { emoji: "🎓", label: "Écoles & organismes de formation", desc: "Complétez votre offre présentielle avec une app mobile qui accompagne vos apprenants entre les sessions." },
                { emoji: "🌍", label: "Applications de langues", desc: "Apprentissage d'une langue avec fiches, audio, quiz et progression gamifiée — votre alternative à Duolingo." },
                { emoji: "🔬", label: "Formations techniques & certifiantes", desc: "Préparation à des examens, formations certifiantes, quiz d'entraînement — avec suivi de progression détaillé." },
              ].map(({ emoji, label, desc }) => (
                <div key={label} className="border-2 border-gray-800 p-5 hover:border-[#FFE234] transition-colors">
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
                { q: "Peut-on intégrer des vidéos dans l'app ?", a: "Oui. Les vidéos sont hébergées sur YouTube (privé) ou Vimeo et intégrées dans l'app. C'est la solution la plus économique et performante — pas besoin d'héberger les fichiers vidéo vous-même." },
                { q: "Comment les apprenants accèdent-ils aux cours payants ?", a: "Via Stripe : achat unique du cours ou abonnement mensuel. L'accès est accordé automatiquement après paiement et révoqué en cas d'annulation d'abonnement." },
                { q: "Peut-on avoir à la fois du contenu gratuit et payant ?", a: "Oui, c'est le modèle freemium. Vous définissez quels modules sont accessibles gratuitement et lesquels nécessitent un achat ou un abonnement actif." },
                { q: "Combien ça coûte de développer une app e-learning ?", a: "Une app e-learning simple (cours, quiz, progression) démarre autour de 600€ à 900€. Avec abonnements, messagerie et certificats, comptez entre 900€ et 1 500€ selon la complexité. Je vous envoie une estimation précise après un premier échange." },
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
              <h2 className="text-2xl font-bold">Votre plateforme de formation sur mesure</h2>
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

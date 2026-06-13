import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Développeur application réseau social & communauté iOS & Android | BreizhApp",
  description:
    "Créez votre réseau social ou app communautaire sur mesure : profils, fil d'actualité, messagerie, groupes, notifications. Développeur freelance à Brest. Devis gratuit.",
  alternates: { canonical: "https://breizhapp.tech/services/secteur/reseau-social-communaute" },
  openGraph: {
    title: "App réseau social & communauté iOS & Android | BreizhApp",
    description: "Développement d'app communautaire sur mesure : profils, fil, messagerie, groupes, modération. Freelance Brest, devis gratuit sous 24h.",
    url: "https://breizhapp.tech/services/secteur/reseau-social-communaute",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const features = [
  { title: "Profils utilisateurs", desc: "Chaque membre crée son profil : photo, bio, centres d'intérêt. La base de toute communauté engagée." },
  { title: "Fil d'actualité", desc: "Publications, photos, vidéos — vos membres partagent du contenu et interagissent avec les publications des autres." },
  { title: "Messagerie privée", desc: "Conversations directes entre membres, avec notifications push à chaque nouveau message. Le cœur des interactions communautaires." },
  { title: "Groupes & espaces thématiques", desc: "Organisez votre communauté en sous-groupes par intérêt, localisation ou niveau. Chaque groupe a son fil et sa modération propres." },
  { title: "Système de modération", desc: "Outils de signalement, de bannissement et de modération pour les administrateurs. Gardez le contrôle de votre communauté." },
  { title: "Notifications push intelligentes", desc: "Alertes configurables : nouveau message, mention, réponse à un post. Vos membres restent connectés sans être submergés." },
];

export default function ReseauSocialPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        <nav className="max-w-4xl mx-auto px-4 pt-6 mono text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/services/application-mobile" className="hover:text-black transition-colors">Services</Link>
          <span>/</span>
          <span className="text-black font-bold">App communauté</span>
        </nav>

        <section className="border-b-[3px] border-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-[#7C3AED] mb-4">// réseau social & communauté</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Application mobile<br />
              <span className="bg-[#7C3AED] text-white brutal-border px-2">réseau social sur mesure</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-6">
              Vous voulez créer votre propre communauté digitale — sans dépendre de Facebook ou Discord ? Une app sur mesure vous donne le contrôle total : vos données, vos règles, votre expérience utilisateur.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">Discuter de mon projet</a>
              <Link href="/blog/creer-plateforme-digitale-sur-mesure" className="brutal-btn bg-[#7C3AED] text-white px-8 py-4">Guide plateforme →</Link>
            </div>
            <div className="flex flex-wrap gap-4 mono text-sm text-gray-500">
              <span className="brutal-border px-3 py-1 bg-white">✓ Vos données vous appartiennent</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ iOS & Android</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Messagerie temps réel</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Modération intégrée</span>
            </div>
          </div>
        </section>

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

        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-6">Types de communautés que je développe</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { emoji: "🎯", label: "Communautés d'intérêt", desc: "Sport, hobby, passion, culture — rassemblez des gens qui partagent un centre d'intérêt commun dans votre propre espace." },
                { emoji: "🏫", label: "Plateformes associatives", desc: "Associations sportives, clubs, amicales — gérez membres, actualités et événements depuis une app dédiée." },
                { emoji: "💼", label: "Réseaux professionnels de niche", desc: "Alternative à LinkedIn sur un secteur précis — mettez en relation des pros d'un même domaine." },
                { emoji: "📍", label: "Communautés locales", desc: "Quartier, ville, région — créez le lien digital d'une communauté géographique." },
              ].map(({ emoji, label, desc }) => (
                <div key={label} className="border-2 border-gray-800 p-5 hover:border-[#7C3AED] transition-colors">
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
                { q: "Combien coûte le développement d'une app communautaire ?", a: "C'est un projet sur devis car la complexité varie beaucoup. Une app communautaire simple (profils, fil, messagerie) commence autour de 800€ à 1 200€. Une plateforme avec groupes, modération avancée et monétisation sera plus proche de 2 000€ à 3 000€. Je vous envoie une estimation précise après un premier échange." },
                { q: "Peut-on monétiser l'accès à la communauté ?", a: "Oui. Abonnement mensuel via Stripe, accès premium à certains groupes, contenu exclusif payant — plusieurs modèles sont possibles et je peux les implémenter directement dans l'app." },
                { q: "Comment gérer les membres toxiques ou les contenus inappropriés ?", a: "L'app inclut un système de signalement par les utilisateurs et des outils de modération pour les admins : bannissement temporaire ou définitif, suppression de contenu, mise en liste noire." },
                { q: "L'app peut-elle gérer des dizaines de milliers de membres ?", a: "Oui. J'utilise Firebase ou Supabase comme backend — des infrastructures conçues pour scaler automatiquement. Les coûts d'hébergement augmentent avec l'usage mais restent très compétitifs." },
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
          <div className="max-w-4xl mx-auto brutal-border brutal-shadow bg-[#7C3AED] p-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Créez votre communauté digitale</h2>
              <p className="text-sm mt-1 text-purple-200">Devis gratuit · Réponse sous 24h · Sans engagement</p>
            </div>
            <a href="/#contact" className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-6 py-3 inline-flex items-center gap-2">
              En parler maintenant <ArrowRight size={16} />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

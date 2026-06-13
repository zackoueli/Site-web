import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Développeur jeu mobile iOS & Android sur mesure | BreizhApp",
  description:
    "Développement de jeu mobile iOS & Android : Unity, React Native Games, leaderboard, in-app purchase, niveaux. Développeur freelance à Brest. Devis gratuit.",
  alternates: { canonical: "https://breizhapp.tech/services/secteur/jeu-mobile" },
  openGraph: {
    title: "Développeur jeu mobile iOS & Android | BreizhApp",
    description: "Création de jeux mobiles iOS & Android sur mesure : gameplay, leaderboard, niveaux, in-app purchase. Freelance à Brest, devis gratuit sous 24h.",
    url: "https://breizhapp.tech/services/secteur/jeu-mobile",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Développement jeu mobile iOS & Android",
      description: "Création de jeux mobiles sur mesure : gameplay, niveaux, leaderboard, in-app purchase, monétisation.",
      provider: { "@id": "https://breizhapp.tech/#business" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://breizhapp.tech" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://breizhapp.tech/services/application-mobile" },
        { "@type": "ListItem", position: 3, name: "Jeu mobile", item: "https://breizhapp.tech/services/secteur/jeu-mobile" },
      ],
    },
  ],
};

const features = [
  { title: "Gameplay sur mesure", desc: "Mécanique de jeu développée selon votre concept : puzzle, arcade, réflexion, quiz, jeu de cartes. Chaque projet part d'une feuille blanche." },
  { title: "Système de niveaux", desc: "Progression par niveaux, déblocage de contenu, difficultés croissantes. L'architecture est conçue pour que vous puissiez ajouter des niveaux sans toucher au code." },
  { title: "Leaderboard & classements", desc: "Classements en temps réel, scores globaux ou entre amis. Le côté compétitif augmente significativement la rétention des joueurs." },
  { title: "In-app purchase", desc: "Monétisation par achat intégré : vies supplémentaires, skins, niveaux premium, pass saisonnier. Validé App Store et Google Play." },
  { title: "Récompenses & achievements", desc: "Succès débloqués, streaks quotidiens, récompenses à la connexion. Des mécaniques éprouvées pour garder vos joueurs actifs." },
  { title: "iOS & Android natif", desc: "Publication sur l'App Store et Google Play. L'app est optimisée pour les performances — animations fluides même sur les appareils anciens." },
];

export default function JeuMobilePage() {
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
          <span className="text-black font-bold">Jeu mobile</span>
        </nav>

        <section className="border-b-[3px] border-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-[#7C3AED] mb-4">// game development</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Développeur<br />
              <span className="bg-[#7C3AED] text-white brutal-border px-2">jeu mobile</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-6">
              Vous avez une idée de jeu mobile ? Puzzle, quiz, arcade, jeu de cartes — je développe votre concept de A à Z, publiable sur l'App Store et Google Play. Le jeu mobile est le secteur avec le meilleur potentiel de monétisation sur mobile.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">Discuter de mon projet</a>
              <Link href="/blog/react-native-vs-flutter" className="brutal-btn bg-[#7C3AED] text-white px-8 py-4">React Native vs Flutter →</Link>
            </div>
            <div className="flex flex-wrap gap-4 mono text-sm text-gray-500">
              <span className="brutal-border px-3 py-1 bg-white">✓ iOS & Android</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ In-app purchase</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Leaderboard</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Devis gratuit</span>
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
            <h2 className="text-2xl font-bold text-[#FFE234] mb-6">Types de jeux que je développe</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { emoji: "🧩", label: "Puzzle & réflexion", desc: "Sudoku, jeux de mots, labyrinthes, casse-têtes visuels — gameplay addictif et sessions courtes." },
                { emoji: "❓", label: "Quiz & culture", desc: "Quiz multijoueur, questions thématiques, championnats hebdomadaires, mode défi entre amis." },
                { emoji: "🃏", label: "Jeux de cartes", desc: "Belote, Uno-like, jeux de collection de cartes avec deck building et matchmaking." },
                { emoji: "🕹️", label: "Arcade & action", desc: "Jeux de réflexes, runner, shoot'em up — mécaniques simples, rejouabilité maximale." },
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
                { q: "Combien coûte le développement d'un jeu mobile ?", a: "Le tarif dépend de la complexité du gameplay. Un jeu simple (quiz, puzzle à niveaux) démarre à partir de 600€. Un jeu plus complexe avec multijoueur et économie virtuelle sera sur devis personnalisé. Je vous envoie une estimation sous 24h après avoir discuté de votre concept." },
                { q: "Mon jeu sera-t-il accepté sur l'App Store Apple ?", a: "Oui, à condition de respecter les guidelines Apple — ce que je fais systématiquement. Les jeux développés sur mesure passent bien mieux la validation que les apps générées par des outils no-code." },
                { q: "Peut-on monétiser le jeu avec de la publicité ?", a: "Oui. Je peux intégrer AdMob (Google) pour des publicités interstitielles ou des rewarded ads — le format le mieux accepté par les joueurs car il est volontaire. La monétisation par in-app purchase est aussi possible en parallèle." },
                { q: "Est-ce que vous pouvez reprendre un jeu déjà commencé ?", a: "Oui, si le code est accessible et documenté. Chaque reprise commence par une analyse du code existant — je vous dis honnêtement si c'est faisable ou s'il vaut mieux repartir proprement." },
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
              <h2 className="text-2xl font-bold text-white">Votre idée de jeu mérite d'exister</h2>
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

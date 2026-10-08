import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Assistance BreizhApp Games | BreizhApp",
  description: "Aide et contact pour l'application mobile BreizhApp Games.",
  alternates: { canonical: "https://breizhapp.tech/games/support.html" },
  robots: { index: false, follow: false },
};

const QUESTIONS: [string, string][] = [
  [
    "Comment garder ma progression si je change de téléphone ?",
    "Dans l'app : Profil → « Sauvegarder ma progression », puis connecte-toi avec Apple, Google ou ton e-mail. Sur ton nouveau téléphone, reconnecte-toi avec le même compte.",
  ],
  [
    "J'ai payé Premium mais je ne l'ai pas",
    "Ouvre Boutique → Premium → « Restaurer mes achats », avec le même compte Apple ou Google que lors de l'achat. Si le problème persiste, écris-nous.",
  ],
  [
    "Comment résilier Premium ?",
    "L'abonnement se gère depuis ton store : sur iPhone, Réglages → ton nom → Abonnements ; sur Android, Google Play → Profil → Paiements et abonnements. Premium reste actif jusqu'à la fin de la période payée.",
  ],
  [
    "Comment supprimer mes données ?",
    "Dans l'app : Profil → « Supprimer mes données ». Ton profil, ta progression et ton compte sont effacés immédiatement.",
  ],
  [
    "Comment se joue BarriKad ?",
    "Les règles complètes sont dans l'app : Profil → « Règles du jeu », ou depuis la fiche du jeu.",
  ],
];

export default function GamesSupport() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-20">
        <div className="mb-10">
          <p className="mono text-sm font-bold text-gray-500 mb-2">// aide · BreizhApp Games</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            <span className="bg-[#FFE234] px-2 brutal-border">Assistance</span>
          </h1>
        </div>

        <div className="flex flex-col gap-6 text-[#0A0A0A]">

          <section className="brutal-border brutal-shadow bg-[#FFE234] p-5">
            <h2 className="text-xl font-bold mb-2">Une question, un bug, une idée ?</h2>
            <p className="leading-relaxed">
              Écris-nous à{" "}
              <a href="mailto:breizhapp@outlook.fr" className="underline font-bold">breizhapp@outlook.fr</a>. Indique ton
              modèle de téléphone et décris ce qui s&apos;est passé : nous répondons en général sous 48 heures.
            </p>
          </section>

          {QUESTIONS.map(([question, reponse]) => (
            <section key={question} className="brutal-border bg-white p-5">
              <h2 className="text-lg font-bold mb-2 border-l-4 border-[#FFE234] pl-3">{question}</h2>
              <p className="text-gray-700 leading-relaxed">{reponse}</p>
            </section>
          ))}

        </div>

        <div className="mt-12 pt-8 border-t-2 border-black flex flex-wrap gap-4">
          <Link href="/games/confidentialite.html" className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-6 py-3 inline-block">
            Confidentialité
          </Link>
          <Link href="/games/conditions.html" className="brutal-btn bg-white text-[#0A0A0A] px-6 py-3 inline-block">
            Conditions d&apos;utilisation
          </Link>
          <Link href="/mentions-legales" className="brutal-btn bg-white text-[#0A0A0A] px-6 py-3 inline-block">
            Mentions légales
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

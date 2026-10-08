import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Conditions d'utilisation BreizhApp Games | BreizhApp",
  description: "Conditions générales d'utilisation de l'application mobile BreizhApp Games.",
  alternates: { canonical: "https://breizhapp.tech/games/conditions.html" },
  robots: { index: false, follow: false },
};

const h2 = "text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3";
const p = "text-gray-700 leading-relaxed";

export default function GamesConditions() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-20">
        <div className="mb-10">
          <p className="mono text-sm font-bold text-gray-500 mb-2">// légal · BreizhApp Games</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Conditions{" "}
            <span className="bg-[#FFE234] px-2 brutal-border">d&apos;utilisation</span>
          </h1>
          <p className="text-sm text-gray-500 mono">Dernière mise à jour : 8 octobre 2026</p>
        </div>

        <div className="flex flex-col gap-8 text-[#0A0A0A]">

          <section>
            <h2 className={h2}>1. L&apos;application</h2>
            <p className={p}>
              BreizhApp Games est une application de jeux gratuite, éditée par <strong>Enzo Omnes (BreizhApp)</strong>,
              entrepreneur individuel, SIRET 104 108 311 00010, Brest (29), France, contact :{" "}
              <a href="mailto:breizhapp@outlook.fr" className="underline">breizhapp@outlook.fr</a> (voir les{" "}
              <Link href="/mentions-legales" className="underline">mentions légales</Link>). En l&apos;utilisant, tu acceptes
              ces conditions.
            </p>
          </section>

          <section>
            <h2 className={h2}>2. Ton compte et ton pseudo</h2>
            <p className={p}>
              Un compte anonyme est créé automatiquement sur ton appareil. Pour jouer en ligne, tu choisis un pseudo visible par
              les autres joueurs. Il doit rester respectueux : pas d&apos;insulte, de contenu haineux, sexuel, ni d&apos;usurpation
              d&apos;identité. Nous pouvons modifier un pseudo inapproprié ou suspendre un compte qui triche ou harcèle d&apos;autres
              joueurs.
            </p>
            <p className={`${p} mt-3`}>
              Tu peux supprimer ton compte et tes données à tout moment depuis Profil → « Supprimer mes données ».
            </p>
          </section>

          <section>
            <h2 className={h2}>3. Pièces et objets virtuels</h2>
            <p className={p}>
              Les pièces se gagnent en jouant, en terminant des quêtes ou en regardant des publicités récompensées. Elles
              n&apos;ont <strong>aucune valeur monétaire</strong>, ne s&apos;achètent pas, ne s&apos;échangent pas et ne se
              remboursent pas. Les skins obtenus avec des pièces sont liés à ton compte. Nous pouvons ajuster les prix et
              récompenses pour l&apos;équilibre du jeu.
            </p>
          </section>

          <section>
            <h2 className={h2}>4. Abonnement Premium</h2>
            <ul className="list-disc pl-6 text-gray-700 flex flex-col gap-2">
              <li>Premium est un abonnement facultatif, vendu via l&apos;App Store ou Google Play, au prix affiché dans l&apos;application.</li>
              <li>Il se <strong>renouvelle automatiquement</strong> à chaque période, sauf résiliation au moins 24 heures avant la fin de la période en cours.</li>
              <li>Tu le gères et le résilies depuis les réglages de ton compte Apple ou Google. Une résiliation prend effet à la fin de la période payée.</li>
              <li>Les remboursements relèvent des règles d&apos;Apple ou de Google.</li>
              <li>Avantages : pas de publicités interstitielles, pièces doublées sur les victoires, skins exclusifs, accès anticipé aux nouveaux jeux. Ils peuvent évoluer ; un avantage essentiel ne sera pas retiré pendant une période déjà payée.</li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>5. Jeu en ligne et fair-play</h2>
            <p className={p}>
              Les coups sont vérifiés par nos serveurs. Toute tentative de triche, d&apos;exploitation de bug ou de perturbation
              du service peut entraîner la suspension du compte. Un joueur inactif trop longtemps peut être exclu d&apos;une
              partie par les autres joueurs.
            </p>
          </section>

          <section>
            <h2 className={h2}>6. Disponibilité et responsabilité</h2>
            <p className={p}>
              Nous faisons de notre mieux pour que l&apos;application fonctionne en continu, sans pouvoir le garantir
              (maintenance, panne réseau…). Nous ne sommes pas responsables d&apos;une perte de progression due à la suppression
              de l&apos;application ou au changement de téléphone tant que la sauvegarde par connexion n&apos;est pas activée sur
              ton compte.
            </p>
          </section>

          <section>
            <h2 className={h2}>7. Propriété intellectuelle</h2>
            <p className={p}>
              Le nom BreizhApp, les logos, les illustrations et le code de l&apos;application sont protégés. Toute reproduction
              sans autorisation est interdite.
            </p>
          </section>

          <section>
            <h2 className={h2}>8. Données personnelles</h2>
            <p className={p}>
              Voir notre{" "}
              <Link href="/games/confidentialite.html" className="underline">politique de confidentialité</Link>.
            </p>
          </section>

          <section>
            <h2 className={h2}>9. Modifications et droit applicable</h2>
            <p className={p}>
              Ces conditions peuvent évoluer ; la version en vigueur est toujours disponible sur cette page. Elles sont soumises
              au droit français. En cas de litige, une solution amiable sera recherchée avant toute action ; tu peux aussi
              recourir gratuitement à un médiateur de la consommation.
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t-2 border-black flex flex-wrap gap-4">
          <Link href="/games/confidentialite.html" className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-6 py-3 inline-block">
            Politique de confidentialité →
          </Link>
          <Link href="/" className="brutal-btn bg-white text-[#0A0A0A] px-6 py-3 inline-block">
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

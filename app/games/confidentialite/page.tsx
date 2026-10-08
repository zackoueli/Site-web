import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Confidentialité BreizhApp Games | BreizhApp",
  description: "Politique de confidentialité de l'application mobile BreizhApp Games.",
  alternates: { canonical: "https://breizhapp.tech/games/confidentialite.html" },
  robots: { index: false, follow: false },
};

const h2 = "text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3";
const p = "text-gray-700 leading-relaxed";
const ul = "list-disc pl-6 text-gray-700 flex flex-col gap-2";

const DONNEES: [string, string, string][] = [
  ["Identifiant technique anonyme (Firebase)", "Te reconnaître d'une session à l'autre, sécuriser tes parties", "Exécution du service"],
  ["Adresse e-mail et mot de passe (seulement si tu crées un compte)", "Retrouver ta progression sur un autre téléphone, réinitialiser ton mot de passe. Le mot de passe est chiffré par Firebase : nous ne le voyons jamais.", "Exécution du service"],
  ["Compte Google : adresse e-mail, nom et photo de profil transmis par Google (seulement si tu te connectes avec Google)", "Retrouver ta progression sur un autre téléphone. Ton pseudo de jeu reste celui que tu choisis.", "Exécution du service"],
  ["Identifiant Apple et adresse e-mail (réelle ou masquée par Apple), seulement si tu te connectes avec Apple", "Retrouver ta progression sur un autre iPhone. L'accès est révoqué auprès d'Apple quand tu supprimes tes données.", "Exécution du service"],
  ["Pseudo", "L'afficher à tes adversaires en ligne", "Exécution du service"],
  ["Progression : XP, pièces, quêtes, skins, statistiques", "Sauvegarder ton avancement", "Exécution du service"],
  ["Parties en ligne : coups joués, pseudos des joueurs, dates", "Faire fonctionner le jeu en ligne, vérifier les coups (anti-triche)", "Exécution du service, intérêt légitime"],
  ["Identifiant publicitaire de l'appareil, données de l'appareil", "Afficher des publicités (personnalisées seulement avec ton accord)", "Consentement / intérêt légitime"],
  ["Statut d'abonnement Premium", "Débloquer les avantages Premium", "Exécution du contrat"],
  ["Réglages (vibrations)", "Mémoriser tes préférences, uniquement sur ton téléphone", "Exécution du service"],
];

export default function GamesConfidentialite() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-20">
        <div className="mb-10">
          <p className="mono text-sm font-bold text-gray-500 mb-2">// légal · BreizhApp Games</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Politique de{" "}
            <span className="bg-[#FFE234] px-2 brutal-border">confidentialité</span>
          </h1>
          <p className="text-sm text-gray-500 mono">Dernière mise à jour : 8 octobre 2026</p>
        </div>

        <div className="flex flex-col gap-8 text-[#0A0A0A]">

          <section className="brutal-border brutal-shadow bg-[#FFE234] p-5">
            <h2 className="text-xl font-bold mb-3">En bref</h2>
            <ul className="list-disc pl-6 text-[#0A0A0A] flex flex-col gap-2">
              <li>Tu n&apos;as besoin ni d&apos;e-mail ni de mot de passe : l&apos;application crée un <strong>compte anonyme</strong> automatiquement. Tu peux ensuite, si tu veux, ajouter un e-mail, ton compte Google ou ton identifiant Apple pour sauvegarder ta progression.</li>
              <li>Nous enregistrons ton <strong>pseudo</strong>, ta <strong>progression</strong> et tes <strong>parties en ligne</strong>, uniquement pour faire fonctionner le jeu.</li>
              <li>Les <strong>publicités</strong> (Google AdMob) ne sont personnalisées que si tu l&apos;acceptes.</li>
              <li>Tu peux <strong>tout supprimer</strong> à tout moment : Profil → « Supprimer mes données ».</li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>1. Qui est responsable de tes données ?</h2>
            <p className={p}>
              L&apos;application BreizhApp Games est éditée par <strong>Enzo Omnes (BreizhApp)</strong>, entrepreneur individuel,
              SIRET 104 108 311 00010, Brest (29), France. Pour toute question :{" "}
              <a href="mailto:breizhapp@outlook.fr" className="underline">breizhapp@outlook.fr</a>. Voir aussi nos{" "}
              <Link href="/mentions-legales" className="underline">mentions légales</Link>.
            </p>
          </section>

          <section>
            <h2 className={h2}>2. Quelles données, et pourquoi ?</h2>
            <div className="overflow-x-auto brutal-border">
              <table className="w-full text-sm border-collapse min-w-[560px]">
                <thead className="bg-[#0A0A0A] text-white">
                  <tr>
                    <th className="text-left p-3 font-bold">Donnée</th>
                    <th className="text-left p-3 font-bold">Pourquoi</th>
                    <th className="text-left p-3 font-bold">Base légale</th>
                  </tr>
                </thead>
                <tbody>
                  {DONNEES.map(([donnee, pourquoi, base]) => (
                    <tr key={donnee} className="border-t-2 border-black align-top bg-white">
                      <td className="p-3 font-bold">{donnee}</td>
                      <td className="p-3 text-gray-700">{pourquoi}</td>
                      <td className="p-3 text-gray-700">{base}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={`${p} mt-4`}>
              Nous ne collectons <strong>ni ton nom, ni ta localisation précise, ni tes contacts</strong>, et ton e-mail
              seulement si tu choisis de créer un compte. Il ne sert jamais à t&apos;envoyer de publicité. Les paiements sont
              traités par Apple ou Google : nous ne voyons jamais tes informations bancaires.
            </p>
          </section>

          <section>
            <h2 className={h2}>3. Avec qui sont-elles partagées ?</h2>
            <ul className={ul}>
              <li><strong>Google Firebase</strong> (hébergement, comptes anonymes, serveurs de jeu) : données hébergées dans l&apos;Union européenne.</li>
              <li>
                <strong>Google AdMob</strong> (publicités) : voir{" "}
                <a href="https://policies.google.com/technologies/ads?hl=fr" target="_blank" rel="noopener noreferrer" className="underline">
                  comment Google utilise les données publicitaires
                </a>.
              </li>
              <li><strong>RevenueCat</strong> (gestion des abonnements) : reçoit ton identifiant technique et l&apos;état de ton abonnement.</li>
              <li><strong>Apple / Google</strong> (stores et paiements).</li>
            </ul>
            <p className={`${p} mt-3`}>
              Certains de ces prestataires peuvent traiter des données hors de l&apos;Union européenne (notamment aux États-Unis),
              dans le cadre de garanties reconnues par la Commission européenne (Data Privacy Framework ou clauses contractuelles
              types). Nous ne vendons <strong>jamais</strong> tes données.
            </p>
          </section>

          <section>
            <h2 className={h2}>4. Publicités et consentement</h2>
            <p className={p}>
              Dans l&apos;Union européenne, l&apos;application te demande ton choix au premier lancement. Tu peux le modifier à tout
              moment dans Profil → « Mes choix publicitaires ». Sur iPhone, iOS te demande aussi si tu autorises le suivi
              publicitaire. Si tu refuses, tu verras des publicités non personnalisées. Les membres Premium ne voient plus
              d&apos;interstitiels.
            </p>
          </section>

          <section>
            <h2 className={h2}>5. Combien de temps ?</h2>
            <p className={p}>
              Tes données sont conservées tant que ton compte existe. La fonction « Supprimer mes données » efface immédiatement
              ton profil, ta progression et ton compte, et abandonne tes parties en cours. Ton pseudo peut rester affiché dans
              l&apos;historique des parties déjà terminées de tes adversaires.
            </p>
          </section>

          <section>
            <h2 className={h2}>6. Tes droits</h2>
            <p className={p}>
              Tu peux accéder à tes données, les rectifier, les effacer, t&apos;opposer à leur traitement ou demander leur
              portabilité en écrivant à <a href="mailto:breizhapp@outlook.fr" className="underline">breizhapp@outlook.fr</a>.
              Nous répondons sous un mois au maximum. Si tu estimes que tes droits ne sont pas respectés, tu peux saisir la{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="underline">CNIL</a>.
            </p>
          </section>

          <section>
            <h2 className={h2}>7. Enfants</h2>
            <p className={p}>
              Le jeu est accessible à tous. Si tu as moins de 15 ans, demande l&apos;accord d&apos;un parent avant d&apos;accepter les
              publicités personnalisées ou de souscrire à Premium (l&apos;achat passe de toute façon par le compte store de tes
              parents).
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t-2 border-black flex flex-wrap gap-4">
          <Link href="/games/conditions.html" className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-6 py-3 inline-block">
            Conditions d&apos;utilisation →
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

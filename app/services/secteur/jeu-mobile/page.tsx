import type { Metadata } from "next";
import SectorPage, { MockScreen } from "@/components/SectorPage";
import { Gamepad2 } from "lucide-react";

const TITLE = "Développeur jeu mobile iOS & Android sur mesure | BreizhApp";
const DESCRIPTION =
  "Développeur freelance à Brest, je crée votre jeu mobile iOS & Android : gameplay, niveaux, classements, pubs récompensées et achats intégrés. Devis 24h.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://breizhapp.tech/services/secteur/jeu-mobile" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://breizhapp.tech/services/secteur/jeu-mobile",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const faq = [
  {
    q: "Combien coûte le développement d'un jeu mobile ?",
    a: "Le tarif dépend de la complexité du gameplay : un jeu simple (quiz, puzzle à niveaux) n'a rien à voir avec un jeu multijoueur doté d'une économie virtuelle. Décrivez-moi votre concept, je vous envoie une estimation détaillée sous 24h.",
  },
  {
    q: "Comment un jeu mobile gagne-t-il de l'argent ?",
    a: "Trois modèles se combinent souvent : la publicité (les vidéos récompensées, que le joueur choisit de regarder contre une vie ou un bonus, sont les mieux acceptées), les achats intégrés (vies, skins, niveaux premium, pass de saison) et l'abonnement pour les jeux à contenu régulier. On choisit ensemble le modèle adapté à votre jeu dès la conception.",
  },
  {
    q: "Mon jeu sera-t-il accepté sur l'App Store et Google Play ?",
    a: "Oui, à condition de respecter les règles d'Apple et de Google, ce que je fais systématiquement : achats intégrés conformes, publicités correctement déclarées, politique de confidentialité et fiche store complète. Je m'occupe de la soumission et du suivi de la validation.",
  },
  {
    q: "Est-ce que je reste propriétaire du jeu ?",
    a: "Oui. Le jeu est publié sur votre compte développeur, et vous êtes propriétaire du code, des visuels livrés et des revenus générés.",
  },
  {
    q: "Pouvez-vous reprendre un jeu déjà commencé ?",
    a: "Oui, si le code est accessible. Chaque reprise commence par une analyse du code existant : je vous dis honnêtement s'il vaut mieux continuer dessus ou repartir proprement.",
  },
  {
    q: "Comment ajouter des niveaux après la sortie ?",
    a: "Le jeu est construit pour que les niveaux, les récompenses et les événements soient pilotés depuis un panel admin : vous ajoutez du contenu et lancez un événement sans republier l'application.",
  },
  {
    q: "Faut-il un prototype avant de développer tout le jeu ?",
    a: "C'est ce que je recommande pour un premier jeu : une version jouable du cœur du gameplay, testée sur de vrais joueurs, avant d'investir dans tous les niveaux et la monétisation. On sait vite si le jeu est amusant.",
  },
];

export default function JeuMobilePage() {
  return (
    <SectorPage
      slug="jeu-mobile"
      color="#7C3AED"
      icon={Gamepad2}
      breadcrumb="Développeur jeu mobile"
      h1="Développeur de jeu mobile iOS & Android"
      subtitle="Gameplay · Niveaux · Monétisation"
      intro="Vous avez une idée de jeu mobile ? Puzzle, quiz, arcade ou jeu de cartes, je développe votre concept de A à Z, du prototype jouable à la publication sur l'App Store et Google Play, avec la monétisation pensée dès le départ."
      guide={{ href: "/blog/react-native-vs-flutter", label: "React Native vs Flutter" }}
      visual={
        <MockScreen
          kicker="NIVEAU 12"
          title="Classement de la semaine"
          accent="#C4B5FD"
          rows={[
            { top: "1er", main: "Maëlle", badge: "12 480" },
            { top: "2e", main: "Yanis", badge: "11 920" },
            { top: "3e · vous", main: "Vous", badge: "10 305" },
            { top: "Bonus", main: "Regarder une vidéo", badge: "+1 vie", muted: true },
          ]}
          footer={{ kicker: "DÉFI QUOTIDIEN", text: "Série de 7 jours : coffre débloqué" }}
        />
      }
      enBref="Je développe des jeux mobiles sur mesure pour iOS et Android : puzzle, quiz, arcade, jeux de cartes et jeux éducatifs. Je m'occupe du gameplay, des niveaux, des classements, des récompenses et de la monétisation par publicité récompensée ou achats intégrés, jusqu'à la publication sur les stores. Je m'appelle Enzo, développeur freelance basé à Brest, et je travaille avec des porteurs de projet partout en France et en Belgique. Le jeu est publié sur votre compte, vous êtes propriétaire du code et des revenus."
      stats={[
        { label: "Estimation", value: "Sous 24h" },
        { label: "Plateformes", value: "iOS & Android" },
        { label: "Monétisation", value: "Pubs & achats intégrés" },
      ]}
      sections={[
        {
          title: "Ce que je développe pour votre jeu",
          highlight: "votre jeu",
          cols: 3,
          check: true,
          items: [
            { title: "Gameplay sur mesure", desc: "La mécanique de votre concept, codée et ajustée jusqu'à ce qu'elle soit agréable à jouer." },
            { title: "Système de niveaux", desc: "Progression, difficulté croissante et contenu débloquable, ajoutable depuis un panel admin." },
            { title: "Classements", desc: "Scores globaux, entre amis ou de la semaine : le ressort compétitif qui fait revenir les joueurs." },
            { title: "Récompenses quotidiennes", desc: "Séries de connexion, défis du jour et succès à débloquer." },
            { title: "Achats intégrés", desc: "Vies, skins, niveaux premium ou pass de saison, conformes aux règles d'Apple et Google." },
            { title: "Publicité récompensée", desc: "Le joueur choisit de regarder une vidéo contre un bonus : le format le mieux accepté." },
          ],
        },
        {
          title: "Les modèles de monétisation",
          dark: true,
          intro: "Un jeu gratuit ne rapporte que si la monétisation est prévue dès la conception, sans gâcher l'expérience du joueur.",
          items: [
            { emoji: "🎬", title: "Publicité", desc: "Vidéos récompensées, et interstitiels avec parcimonie entre deux parties." },
            { emoji: "💎", title: "Achats intégrés", desc: "Monnaie virtuelle, objets cosmétiques, niveaux ou mondes supplémentaires." },
            { emoji: "🎟️", title: "Pass de saison", desc: "Un parcours de récompenses sur plusieurs semaines, gratuit et premium." },
            { emoji: "🔁", title: "Abonnement", desc: "Pour les jeux à contenu régulier : sans publicité et avec des avantages." },
          ],
        },
        {
          title: "Quel type de jeu ?",
          highlight: "jeu",
          items: [
            { emoji: "🧩", title: "Puzzle et réflexion", desc: "Sudoku, jeux de mots, casse-têtes : sessions courtes et forte rétention." },
            { emoji: "❓", title: "Quiz", desc: "Questions thématiques, championnats hebdomadaires, défis entre amis." },
            { emoji: "🃏", title: "Jeux de cartes", desc: "Jeux classiques ou de collection, parties contre l'ordinateur ou entre joueurs." },
            { emoji: "⚡", title: "Arcade", desc: "Runner, réflexes, jeux d'adresse : mécanique simple, rejouabilité maximale." },
            { emoji: "🎓", title: "Jeux éducatifs", desc: "Apprendre en jouant, pour une école, une marque ou une association." },
            { emoji: "🏷️", title: "Jeux de marque", desc: "Un jeu aux couleurs d'une entreprise pour une campagne ou un événement." },
          ],
        },
      ]}
      steps={[
        { title: "Le concept", desc: "Vous me présentez votre idée, on définit le cœur du gameplay et la monétisation." },
        { title: "Le prototype", desc: "Une version jouable du cœur du jeu, testée avant d'aller plus loin." },
        { title: "Le développement", desc: "Niveaux, classements, récompenses, achats intégrés, avec des versions de test régulières." },
        { title: "La publication", desc: "Fiches store, soumission à Apple et Google, puis mises à jour et événements." },
      ]}
      faq={faq}
      faqTitle="Questions fréquentes : développement de jeu mobile"
      ctaTitle="Donnons vie à votre jeu mobile"
      serviceName="Développement de jeu mobile iOS & Android"
      serviceDescription="Création de jeux mobiles sur mesure pour iOS et Android : gameplay, niveaux, classements, récompenses, publicité récompensée et achats intégrés, jusqu'à la publication sur les stores."
    />
  );
}

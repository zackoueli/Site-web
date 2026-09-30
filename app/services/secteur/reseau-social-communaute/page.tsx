import type { Metadata } from "next";
import SectorPage, { MockScreen } from "@/components/SectorPage";
import { Users } from "lucide-react";

const TITLE = "App réseau social & communauté sur mesure | BreizhApp";
const DESCRIPTION =
  "Développeur freelance à Brest, je crée l'app de votre communauté, club ou association : profils, fil, messagerie, groupes, événements. Devis gratuit sous 24h.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://breizhapp.tech/services/secteur/reseau-social-communaute" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://breizhapp.tech/services/secteur/reseau-social-communaute",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const faq = [
  {
    q: "Combien coûte le développement d'une application communautaire ?",
    a: "C'est un projet sur devis, car la complexité varie beaucoup selon les fonctionnalités : profils, fil d'actualité, messagerie, groupes, événements, modération, adhésions payantes. Une première version centrée sur l'essentiel permet de lancer vite et de maîtriser le budget. Estimation détaillée sous 24h.",
  },
  {
    q: "Pourquoi ne pas utiliser Circle, Mighty Networks ou un groupe Facebook ?",
    a: "Un groupe Facebook ne vous appartient pas : l'algorithme décide qui voit vos messages et vous ne récupérez pas vos membres. Circle ou Mighty Networks sont plus propres, mais vous payez un abonnement qui grimpe avec le nombre de membres, et l'application à votre nom est réservée aux formules les plus chères. Une application sur mesure est à vous, avec les fonctionnalités dont votre communauté a vraiment besoin.",
  },
  {
    q: "Peut-on réserver l'accès aux membres ou le rendre payant ?",
    a: "Oui : inscription sur invitation ou validation, adhésion annuelle ou abonnement mensuel payé en ligne via Stripe, et contenus réservés selon le niveau d'adhésion.",
  },
  {
    q: "Comment gérer la modération ?",
    a: "Signalement de contenu par les membres, file de modération pour les administrateurs, rôles de modérateur par groupe, et possibilité de suspendre un compte. Les règles de modération sont pensées dès la conception.",
  },
  {
    q: "Les données de mes membres sont-elles protégées ?",
    a: "Oui : hébergement sécurisé, respect du RGPD, possibilité pour chaque membre d'exporter ou de supprimer ses données, et aucun usage publicitaire. Les données de votre communauté restent les vôtres.",
  },
  {
    q: "Peut-on commencer petit puis ajouter des fonctionnalités ?",
    a: "C'est même recommandé : on lance une première version avec l'essentiel (profils, fil, messagerie ou événements), on observe ce que les membres utilisent vraiment, puis on ajoute la suite.",
  },
  {
    q: "En combien de temps l'application est-elle prête ?",
    a: "Entre 5 et 10 semaines pour une première version complète, selon le nombre de fonctionnalités.",
  },
];

export default function ReseauSocialPage() {
  return (
    <SectorPage
      slug="reseau-social-communaute"
      color="#EC4899"
      icon={Users}
      breadcrumb="App réseau social & communauté"
      h1="Application de réseau social et de communauté"
      subtitle="Profils · Messagerie · Groupes · Événements"
      intro="L'espace de votre communauté, à votre nom : une application mobile, une plateforme web ou les deux. Vos membres échangent, s'entraident et se retrouvent aux événements, loin des algorithmes des réseaux sociaux. Vous gardez la main sur les accès, la modération et les données."
      guide={{ href: "/blog/creer-plateforme-digitale-sur-mesure", label: "Créer une plateforme sur mesure" }}
      visual={
        <MockScreen
          kicker="CLUB DES RANDONNEURS"
          title="Fil de la communauté"
          accent="#F9A8D4"
          rows={[
            { top: "Gwen · il y a 5 min", main: "Photos de la sortie à Crozon", badge: "24 ♥" },
            { top: "Groupe débutants", main: "Qui vient samedi ?", badge: "8 rép." },
            { top: "Événement", main: "Pointe du Raz · dim. 9h", badge: "32 inscrits" },
            { top: "Message privé", main: "Loïc vous a écrit", badge: "Nouveau", muted: true },
          ]}
          footer={{ kicker: "MEMBRES ACTIFS", text: "186 cette semaine" }}
        />
      }
      enBref="Je crée des applications et des plateformes communautaires sur mesure pour les associations, clubs, réseaux professionnels, créateurs et marques : profils, fil d'actualité, messagerie, groupes, événements, adhésions payantes et modération. Je m'appelle Enzo, développeur freelance basé à Brest, et je travaille avec des porteurs de projet partout en France. Le projet est construit par étapes, en commençant par l'essentiel. L'application est à votre nom et vous êtes propriétaire du code comme des données de vos membres."
      stats={[
        { label: "Première version", value: "5 à 10 semaines" },
        { label: "Budget", value: "Sur devis" },
        { label: "Abonnement par membre", value: "Aucun" },
      ]}
      sections={[
        {
          title: "Tout ce qui fait vivre une communauté",
          highlight: "une communauté",
          cols: 3,
          check: true,
          items: [
            { title: "Profils membres", desc: "Photo, présentation, centres d'intérêt et annuaire des membres pour se trouver." },
            { title: "Fil d'actualité", desc: "Publications, photos, réactions et commentaires, sans algorithme qui cache vos messages." },
            { title: "Messagerie", desc: "Messages privés et discussions de groupe, avec notifications." },
            { title: "Groupes et thématiques", desc: "Espaces par centre d'intérêt, par ville ou par niveau, chacun avec ses modérateurs." },
            { title: "Événements", desc: "Agenda, inscriptions, rappels et photos partagées après l'événement." },
            { title: "Adhésions et contenus réservés", desc: "Accès sur invitation, adhésion ou abonnement payé en ligne." },
          ],
        },
        {
          title: "Pourquoi une application à vous ?",
          dark: true,
          items: [
            { emoji: "🔓", title: "Pas d'algorithme", desc: "Tous vos membres voient vos annonces, pas seulement ceux qu'un réseau social choisit." },
            { emoji: "🏷️", title: "Votre marque", desc: "Votre nom, votre logo et vos couleurs sur l'App Store et Google Play, pas ceux d'une plateforme." },
            { emoji: "💶", title: "Pas d'abonnement par membre", desc: "Les plateformes communautaires facturent davantage à mesure que la communauté grandit." },
            { emoji: "🛡️", title: "Vos données", desc: "Vous gardez le contact de vos membres et vous décidez des règles, dans le respect du RGPD." },
          ],
        },
        {
          title: "Pour qui ?",
          highlight: "qui",
          items: [
            { emoji: "⚽", title: "Clubs et associations", desc: "Adhérents, actualités, événements, covoiturage et bénévolat." },
            { emoji: "💼", title: "Réseaux professionnels", desc: "Annuaire des membres, mise en relation, offres et événements." },
            { emoji: "🎙️", title: "Créateurs et formateurs", desc: "Espace privé pour votre audience, contenus exclusifs et adhésion payante." },
            { emoji: "🏢", title: "Entreprises et alumni", desc: "Communauté interne, anciens élèves ou clients ambassadeurs." },
          ],
        },
      ]}
      choices={[
        { title: "Une plateforme web", desc: "Accessible depuis n'importe quel navigateur, idéale pour démarrer et pour les échanges longs sur ordinateur." },
        { title: "Une application mobile", desc: "Pour les notifications, la messagerie et un usage au quotidien, depuis le téléphone." },
        { title: "Les deux, reliés", desc: "Les mêmes comptes, les mêmes groupes et les mêmes conversations sur le web et sur mobile." },
      ]}
      steps={[
        { title: "On échange", desc: "Votre communauté, ses usages et ce qui doit exister dès le premier jour." },
        { title: "Devis et maquettes", desc: "Estimation détaillée sous 24h, puis maquettes des écrans clés." },
        { title: "Première version", desc: "L'essentiel développé, testé avec un premier groupe de membres." },
        { title: "Lancement et évolutions", desc: "Ouverture à tous, puis ajout des fonctionnalités que les membres réclament." },
      ]}
      faq={faq}
      faqTitle="Questions fréquentes : application communautaire"
      ctaTitle="Donnez un espace à votre communauté"
      serviceName="Application de réseau social et de communauté"
      serviceDescription="Création d'applications et de plateformes communautaires sur mesure pour associations, clubs et réseaux : profils, fil d'actualité, messagerie, groupes, événements, adhésions et modération."
    />
  );
}

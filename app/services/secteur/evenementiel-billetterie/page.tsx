import type { Metadata } from "next";
import SectorPage, { MockScreen } from "@/components/SectorPage";
import { Ticket } from "lucide-react";

const TITLE = "Application mobile événementiel & billetterie | BreizhApp";
const DESCRIPTION =
  "Développeur freelance à Brest, je crée l'app de votre festival ou événement : billetterie, QR code d'entrée, programme, notifications. Devis gratuit sous 24h.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://breizhapp.tech/services/secteur/evenementiel-billetterie" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://breizhapp.tech/services/secteur/evenementiel-billetterie",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const faq = [
  {
    q: "Combien coûte une application pour un événement ou un festival ?",
    a: "Un site d'événement avec billetterie démarre à 1 500 €, une application mobile avec billets, programme et notifications à 4 000 €. Le prix dépend des fonctionnalités : plusieurs tarifs, cashless, networking, plusieurs éditions. Devis détaillé sous 24h.",
  },
  {
    q: "Pourquoi ne pas simplement utiliser Weezevent ou Eventbrite ?",
    a: "Ce sont de bons outils, mais ils prennent une commission sur chaque billet (quelques pourcents plus des frais fixes) et le parcours d'achat se fait chez eux. Avec votre propre billetterie, seuls les frais bancaires de Stripe s'appliquent, et vous gardez la relation avec vos participants d'une édition à l'autre.",
  },
  {
    q: "Comment se passe le contrôle à l'entrée ?",
    a: "Chaque billet contient un QR code unique. À l'entrée, votre équipe le scanne avec l'application de contrôle sur un simple téléphone : billet valide, déjà utilisé ou invalide s'affiche instantanément, même avec plusieurs points d'entrée.",
  },
  {
    q: "L'application fonctionne-t-elle sans réseau sur le site ?",
    a: "Le programme, le plan et les billets restent consultables hors connexion une fois téléchargés, ce qui est précieux sur un festival où le réseau sature. Le contrôle des billets peut aussi fonctionner hors ligne et se synchroniser dès le retour du réseau.",
  },
  {
    q: "Peut-on prévenir les participants pendant l'événement ?",
    a: "Oui, par notification : changement d'horaire, début d'un concert, météo, navette de retour. Un message atteint tous les participants en quelques secondes.",
  },
  {
    q: "L'application peut-elle servir pour plusieurs éditions ?",
    a: "Oui : vous changez le programme, les tarifs et les visuels depuis le panel admin, et vous retrouvez vos participants des éditions précédentes pour leur annoncer la suivante.",
  },
  {
    q: "En combien de temps l'application est-elle prête ?",
    a: "Entre 3 et 6 semaines selon les fonctionnalités. Pour un événement daté, on part de la date de mise en vente des billets et on planifie à rebours.",
  },
];

export default function EvenementielPage() {
  return (
    <SectorPage
      slug="evenementiel-billetterie"
      color="#DC2626"
      icon={Ticket}
      breadcrumb="Application événementiel & billetterie"
      h1="Application pour événement, festival et billetterie"
      subtitle="Billetterie · QR code · Programme"
      intro="Votre propre billetterie et votre application d'événement, à votre nom : un site web, une application mobile ou les deux. Vos participants achètent leur billet, retrouvent le programme et le plan, et reçoivent vos annonces en direct. Vous gardez la relation avec eux, sans commission de plateforme sur chaque billet."
      guide={{ href: "/blog/combien-coute-application-mobile", label: "Prix d'une application" }}
      visual={
        <MockScreen
          kicker="FESTIVAL · SAMEDI"
          title="Programme"
          accent="#FCA5A5"
          rows={[
            { top: "Scène principale", main: "18:30 · Ouverture", badge: "Favori" },
            { top: "Chapiteau", main: "20:00 · Concert", badge: "Dans 12 min" },
            { top: "Village", main: "Food trucks", badge: "Plan", muted: true },
            { top: "Mon billet", main: "Pass 2 jours", badge: "QR code" },
          ]}
          footer={{ kicker: "NOTIFICATION", text: "Navette retour à 01:30, porte B" }}
        />
      }
      enBref="Je crée des billetteries et des applications d'événement sur mesure pour les festivals, salons, concerts, événements sportifs, associations et organisateurs de séminaires : vente de billets, QR code d'entrée, contrôle d'accès, programme, plan, notifications et networking. Je m'appelle Enzo, développeur freelance basé à Brest, et je travaille avec des organisateurs partout en France. Un site avec billetterie démarre à 1 500 €, une application à 4 000 €. Pas de commission de plateforme sur vos billets, et le fichier de vos participants vous appartient."
      stats={[
        { label: "Livraison", value: "3 à 6 semaines" },
        { label: "Budget indicatif", value: "Dès 1 500 €" },
        { label: "Commission sur vos billets", value: "0 %" },
      ]}
      sections={[
        {
          title: "Avant, pendant et après l'événement",
          highlight: "pendant",
          cols: 3,
          items: [
            { emoji: "🎟️", title: "Avant", desc: "Vente des billets, tarifs réduits et codes promo, programme dévoilé artiste par artiste, rappels à l'approche de la date." },
            { emoji: "📍", title: "Pendant", desc: "Billet QR code, programme personnel, plan du site, notifications en direct et infos pratiques hors connexion." },
            { emoji: "📸", title: "Après", desc: "Photos, questionnaire de satisfaction et annonce de la prochaine édition à vos participants." },
          ],
        },
        {
          title: "Les fonctionnalités clés",
          dark: true,
          cols: 3,
          check: true,
          items: [
            { title: "Billetterie en ligne", desc: "Plusieurs tarifs, quotas, codes promo et paiement Stripe, carte, Apple Pay et Google Pay." },
            { title: "Contrôle d'accès", desc: "Scan des QR codes par votre équipe, plusieurs entrées, fonctionnement hors ligne." },
            { title: "Programme et favoris", desc: "Horaires par scène ou par salle, et programme personnel avec rappels." },
            { title: "Plan interactif", desc: "Scènes, stands, toilettes, secours et parkings, consultables sans réseau." },
            { title: "Notifications en direct", desc: "Changements d'horaires, météo, navettes : tout le monde est prévenu en quelques secondes." },
            { title: "Networking", desc: "Pour les salons et séminaires : profils participants, prise de rendez-vous et messagerie." },
          ],
        },
        {
          title: "Pour qui ?",
          highlight: "qui",
          items: [
            { emoji: "🎸", title: "Festivals et concerts", desc: "Billetterie, programme, plan du site et infos pratiques en direct." },
            { emoji: "🏢", title: "Salons et séminaires", desc: "Inscriptions, badges, agenda des conférences et networking entre participants." },
            { emoji: "🏃", title: "Événements sportifs", desc: "Inscriptions, dossards, parcours et résultats en direct." },
            { emoji: "🎭", title: "Associations et lieux culturels", desc: "Saison de spectacles, abonnements et billetterie à l'année." },
          ],
        },
      ]}
      choices={[
        { title: "Un site avec billetterie", desc: "Pour présenter l'événement, être trouvé sur Google et vendre les billets sans rien installer. Dès 1 500 €." },
        { title: "Une application mobile", desc: "Pour le jour J : billet, programme, plan hors connexion et notifications en direct. Dès 4 000 €." },
        { title: "Les deux, reliés", desc: "Billets achetés sur le site, retrouvés dans l'application, et un seul tableau de bord." },
      ]}
      steps={[
        { title: "On échange", desc: "Votre événement, votre public, vos dates de mise en vente et vos contraintes sur place." },
        { title: "Devis et planning", desc: "Devis détaillé sous 24h et planning construit à rebours depuis la date de mise en vente." },
        { title: "Développement", desc: "Billetterie, application et outil de contrôle, testés en conditions réelles." },
        { title: "Jour J", desc: "Formation de l'équipe d'accueil et assistance pendant l'événement." },
      ]}
      faq={faq}
      faqTitle="Questions fréquentes : application événementielle et billetterie"
      ctaTitle="Lancez la billetterie de votre événement"
      serviceName="Application événementielle & billetterie"
      serviceDescription="Création de billetteries et d'applications d'événement sur mesure : vente de billets, QR code d'entrée, contrôle d'accès, programme, plan, notifications et networking."
    />
  );
}

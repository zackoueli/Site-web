import type { Metadata } from "next";
import SectorPage, { MockScreen } from "@/components/SectorPage";
import { HeartPulse } from "lucide-react";

const TITLE = "Application mobile santé & bien-être | BreizhApp";
const DESCRIPTION =
  "Développeur freelance à Brest, je crée l'app de votre cabinet ou activité bien-être : prise de RDV, suivi client, programmes, visio. Devis gratuit sous 24h.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://breizhapp.tech/services/secteur/sante-bien-etre" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://breizhapp.tech/services/secteur/sante-bien-etre",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const faq = [
  {
    q: "Combien coûte une application pour un praticien bien-être ?",
    a: "Un site web avec prise de rendez-vous démarre à 1 500 €, une application mobile avec espace client et programmes à 4 000 €. Le prix dépend des fonctionnalités : visio, questionnaires, contenus, paiement. Devis détaillé sous 24h.",
  },
  {
    q: "Pourquoi pas Resalib, Myndlee ou un logiciel de cabinet ?",
    a: "Ces outils sont conçus pour tous les praticiens à la fois : vous payez un abonnement et votre espace ressemble à celui des autres. Une application sur mesure reprend votre méthode, vos protocoles et vos contenus, porte votre nom et vous appartient.",
  },
  {
    q: "Qu'en est-il des données de santé ?",
    a: "Les données de santé à caractère personnel doivent être hébergées chez un hébergeur certifié HDS. Pour un cabinet de santé, je prévois cet hébergement dès la conception. Pour une activité de bien-être sans données médicales, un hébergement sécurisé en Europe conforme au RGPD suffit. On fait le point ensemble au premier échange.",
  },
  {
    q: "Mes clients peuvent-ils suivre leur progression entre deux séances ?",
    a: "Oui : journal de bord, exercices à faire à la maison, audios de relaxation ou de méditation, rappels et suivi de l'évolution. C'est ce qui prolonge l'accompagnement entre deux rendez-vous.",
  },
  {
    q: "Peut-on faire des séances en visio ?",
    a: "Oui, les rendez-vous à distance génèrent automatiquement un lien de visio, envoyé au client avec le rappel.",
  },
  {
    q: "Puis-je vendre des programmes ou des contenus ?",
    a: "Oui : programmes sur plusieurs semaines, ateliers en ligne ou bibliothèque de contenus, payés en ligne via Stripe, sans commission de ma part.",
  },
  {
    q: "En combien de temps l'outil est-il prêt ?",
    a: "Entre 2 et 4 semaines pour un site avec prise de rendez-vous, 3 à 6 semaines pour une application avec espace client et programmes.",
  },
];

export default function SantePage() {
  return (
    <SectorPage
      slug="sante-bien-etre"
      color="#14B8A6"
      icon={HeartPulse}
      breadcrumb="Application santé & bien-être"
      h1="Application mobile pour la santé et le bien-être"
      subtitle="Rendez-vous · Suivi client · Programmes"
      intro="Votre propre espace, à votre nom : un site web, une application mobile ou les deux. Vos clients prennent rendez-vous, retrouvent leurs exercices et leurs contenus entre deux séances, et suivent leur progression. Vous gardez le lien avec eux, sans dépendre d'une plateforme."
      guide={{ href: "/blog/comment-fideliser-clients-application-mobile", label: "Fidéliser avec une app" }}
      visual={
        <MockScreen
          kicker="MON ACCOMPAGNEMENT"
          title="Semaine 3 sur 8"
          accent="#5EEAD4"
          rows={[
            { top: "Audio · 12 min", main: "Respiration du soir", badge: "Fait" },
            { top: "Journal", main: "Comment vous sentez-vous ?", badge: "À remplir", muted: true },
            { top: "Exercice", main: "Étirements du matin", badge: "Fait" },
            { top: "Prochaine séance", main: "Mardi 18h · visio", badge: "Rappel" },
          ]}
          footer={{ kicker: "PROGRESSION", text: "Sommeil : +2 points en 3 semaines" }}
        />
      }
      enBref="Je crée des sites web et des applications mobiles sur mesure pour les praticiens de santé et du bien-être : naturopathes, sophrologues, psychologues, kinés, coachs, diététiciens et centres de soins. Prise de rendez-vous, espace client, suivi entre les séances, programmes, visio et paiement. Je m'appelle Enzo, développeur freelance basé à Brest, et je travaille avec des praticiens partout en France. Un site avec prise de rendez-vous démarre à 1 500 €, une application à 4 000 €. L'outil porte votre nom et vous appartient."
      stats={[
        { label: "Livraison", value: "2 à 6 semaines" },
        { label: "Budget indicatif", value: "Dès 1 500 €" },
        { label: "Abonnement mensuel", value: "Aucun" },
      ]}
      sections={[
        {
          title: "L'accompagnement continue entre les séances",
          highlight: "entre les séances",
          intro: "Ce qui se passe entre deux rendez-vous compte autant que la séance elle-même. Votre application prolonge votre accompagnement.",
          cols: 3,
          check: true,
          items: [
            { title: "Journal de bord", desc: "Humeur, sommeil, douleur ou alimentation : le client note, vous voyez l'évolution." },
            { title: "Exercices et audios", desc: "Relaxation, méditation, étirements ou recettes, accessibles à tout moment." },
            { title: "Programmes par étapes", desc: "Un parcours sur plusieurs semaines, débloqué au rythme de l'accompagnement." },
            { title: "Questionnaire d'accueil", desc: "Rempli avant le premier rendez-vous, pour préparer la séance." },
            { title: "Rappels", desc: "Rappel de rendez-vous et rappels bienveillants pour les exercices du jour." },
            { title: "Messagerie", desc: "Un canal simple pour les questions entre deux séances, aux horaires que vous fixez." },
          ],
        },
        {
          title: "Côté praticien",
          dark: true,
          items: [
            { emoji: "📅", title: "Agenda et prise de rendez-vous", desc: "Prestations, durées, visio ou cabinet, acompte et rappels automatiques." },
            { emoji: "🗂️", title: "Fiches clients", desc: "Historique des séances, notes et suivi, dans un espace sécurisé." },
            { emoji: "🎧", title: "Bibliothèque de contenus", desc: "Vous ajoutez vos audios, vidéos et fiches sans passer par un développeur." },
            { emoji: "💳", title: "Paiement et facturation", desc: "Séances, forfaits et programmes payés en ligne, factures générées automatiquement." },
          ],
        },
        {
          title: "Pour qui ?",
          highlight: "qui",
          items: [
            { emoji: "🌿", title: "Naturopathes et sophrologues", desc: "Protocoles, audios, journal de bord et suivi entre les consultations." },
            { emoji: "🧠", title: "Psychologues et thérapeutes", desc: "Rendez-vous, visio, exercices et messagerie encadrée." },
            { emoji: "💪", title: "Kinés, coachs et diététiciens", desc: "Programmes d'exercices ou alimentaires, progression et rappels." },
            { emoji: "🏥", title: "Centres et cabinets", desc: "Plusieurs praticiens, plusieurs agendas et un seul espace pour les patients." },
          ],
        },
      ]}
      choices={[
        { title: "Un site avec prise de RDV", desc: "Pour être trouvé sur Google et remplir votre agenda sans rien installer côté client. Dès 1 500 €." },
        { title: "Une application mobile", desc: "Pour accompagner vos clients au quotidien : contenus, suivi, rappels et messagerie. Dès 4 000 €." },
        { title: "Les deux, reliés", desc: "Un seul agenda, un seul espace client et un seul tableau de bord." },
      ]}
      steps={[
        { title: "On échange", desc: "Votre pratique, votre accompagnement, les données que vous manipulez." },
        { title: "Devis et maquette", desc: "Devis détaillé sous 24h, puis une maquette apaisante et à votre image." },
        { title: "Développement", desc: "Construction avec vos vrais contenus et l'hébergement adapté à vos données." },
        { title: "Mise en ligne", desc: "Publication, formation et accompagnement de vos premiers clients." },
      ]}
      faq={faq}
      faqTitle="Questions fréquentes : application santé et bien-être"
      ctaTitle="Prolongez votre accompagnement"
      serviceName="Application mobile santé & bien-être"
      serviceDescription="Création de sites web et d'applications mobiles sur mesure pour praticiens de santé et du bien-être : prise de rendez-vous, espace client, suivi entre les séances, programmes, visio et paiement."
    />
  );
}

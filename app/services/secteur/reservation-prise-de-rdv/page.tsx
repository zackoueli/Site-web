import type { Metadata } from "next";
import SectorPage, { MockScreen } from "@/components/SectorPage";
import { CalendarCheck } from "lucide-react";

const TITLE = "Application mobile prise de rendez-vous | BreizhApp";
const DESCRIPTION =
  "Développeur freelance à Brest, je crée votre outil de prise de rendez-vous : agenda en ligne, rappels, acompte, paiement. Sans abonnement Calendly. Devis 24h.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://breizhapp.tech/services/secteur/reservation-prise-de-rdv" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://breizhapp.tech/services/secteur/reservation-prise-de-rdv",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const faq = [
  {
    q: "Combien coûte un outil de prise de rendez-vous sur mesure ?",
    a: "Un site web avec prise de rendez-vous en ligne démarre à 1 500 €, une application mobile iOS & Android à 4 000 €. Le prix dépend des fonctionnalités : plusieurs praticiens, acompte, visio, forfaits. Devis détaillé sous 24h.",
  },
  {
    q: "Pourquoi ne pas utiliser Calendly, Resalib ou SimplyBook ?",
    a: "Ces outils sont très bien pour démarrer. Mais vous payez chaque mois tant que vous les utilisez, les rappels SMS ou le paiement sont souvent réservés aux formules supérieures, et votre page de réservation ressemble à celle de tout le monde. Un outil sur mesure suit exactement vos règles et vous appartient.",
  },
  {
    q: "Mes clients reçoivent-ils des rappels ?",
    a: "Oui : confirmation immédiate, puis rappel automatique avant le rendez-vous par email, notification ou SMS. C'est le moyen le plus simple de réduire les rendez-vous oubliés.",
  },
  {
    q: "Puis-je demander un acompte ou le paiement à la réservation ?",
    a: "Oui, via Stripe (carte, Apple Pay, Google Pay). Vous choisissez pour quelles prestations : acompte sur les séances longues, paiement complet pour les ateliers, rien pour les habitués. L'argent arrive sur votre compte, sans commission de ma part.",
  },
  {
    q: "Mon agenda Google est-il synchronisé ?",
    a: "Oui, les rendez-vous peuvent apparaître dans votre agenda Google, et vos événements personnels bloquent automatiquement les créneaux correspondants.",
  },
  {
    q: "Est-ce que ça fonctionne avec plusieurs praticiens ou plusieurs lieux ?",
    a: "Oui. Chaque praticien a son agenda, ses prestations et ses horaires, et chaque lieu ses propres disponibilités. Le client choisit la personne ou le premier créneau libre.",
  },
  {
    q: "En combien de temps l'outil est-il prêt ?",
    a: "Entre 2 et 4 semaines pour un site avec prise de rendez-vous, 3 à 5 semaines pour une application complète.",
  },
];

export default function ReservationPage() {
  return (
    <SectorPage
      slug="reservation-prise-de-rdv"
      color="#0EA5E9"
      icon={CalendarCheck}
      breadcrumb="Application prise de rendez-vous"
      h1="Application de prise de rendez-vous en ligne"
      subtitle="Agenda · Rappels · Acompte"
      intro="Votre propre outil de réservation, à votre nom : un site web, une application mobile ou les deux. Vos clients réservent 24h/24 selon vos règles, reçoivent un rappel avant le rendez-vous et peuvent payer un acompte. Vous suivez votre agenda depuis un tableau de bord, sans abonnement mensuel."
      guide={{ href: "/blog/application-mobile-prise-de-rdv", label: "Guide prise de RDV" }}
      visual={
        <MockScreen
          kicker="JEUDI 16 OCTOBRE"
          title="Choisissez un créneau"
          accent="#7DD3FC"
          rows={[
            { top: "Séance · 60 min", main: "09:00", badge: "Libre" },
            { top: "Séance · 60 min", main: "10:30", badge: "Réservé", muted: true },
            { top: "Séance · 60 min", main: "14:00", badge: "Libre" },
            { top: "Acompte", main: "20 € à la réservation", badge: "Stripe", muted: true },
          ]}
          footer={{ kicker: "RAPPEL AUTOMATIQUE", text: "La veille à 18h, par SMS" }}
        />
      }
      enBref="Je crée des outils de prise de rendez-vous sur mesure pour les indépendants, praticiens, consultants, artisans et prestataires de services : agenda en ligne, règles de réservation, rappels automatiques, acompte et paiement. Je m'appelle Enzo, développeur freelance basé à Brest, et je travaille avec des professionnels partout en France. Un site avec prise de rendez-vous démarre à 1 500 €, une application à 4 000 €. Pas d'abonnement à une plateforme, et votre fichier clients vous appartient."
      stats={[
        { label: "Livraison", value: "2 à 5 semaines" },
        { label: "Budget indicatif", value: "Dès 1 500 €" },
        { label: "Abonnement mensuel", value: "Aucun" },
      ]}
      sections={[
        {
          title: "Une réservation qui suit vos règles",
          highlight: "vos règles",
          intro: "Un outil générique vous impose son fonctionnement. Ici, c'est l'outil qui s'adapte à votre façon de travailler.",
          cols: 3,
          check: true,
          items: [
            { title: "Durée par prestation", desc: "Chaque prestation réserve le temps réel nécessaire, pause entre deux clients comprise." },
            { title: "Délais de réservation", desc: "Réservation au plus tôt la veille, au plus tard dans deux mois : c'est vous qui décidez." },
            { title: "Politique d'annulation", desc: "Délai d'annulation gratuit, acompte conservé au-delà, créneau libéré automatiquement." },
            { title: "Questions avant le rendez-vous", desc: "Un court formulaire pour préparer la séance et arriver sans surprise." },
            { title: "Visio ou présentiel", desc: "Lien de visio généré automatiquement pour les rendez-vous à distance." },
            { title: "Forfaits et cartes", desc: "Cartes de 5 ou 10 séances décomptées à chaque rendez-vous." },
          ],
        },
        {
          title: "Plateforme de réservation ou outil sur mesure ?",
          dark: true,
          items: [
            { emoji: "📅", title: "Les plateformes (Calendly, Resalib…)", desc: "Rapides à mettre en place, mais un abonnement tant que vous les utilisez et des options clés dans les formules les plus chères." },
            { emoji: "🧭", title: "Les annuaires", desc: "Ils vous apportent de la visibilité, mais vous y êtes affiché à côté de vos concurrents." },
            { emoji: "🛠️", title: "Un outil sur mesure", desc: "À votre nom, avec vos règles, relié à votre site et à votre agenda, sans abonnement à une plateforme." },
            { emoji: "🔗", title: "Les deux", desc: "Rien n'empêche de garder un annuaire pour être découvert, et d'orienter vos clients réguliers vers votre outil." },
          ],
        },
        {
          title: "Pour qui ?",
          highlight: "qui",
          items: [
            { emoji: "🧘", title: "Praticiens et thérapeutes", desc: "Séances individuelles, visio, forfaits et questionnaire préalable." },
            { emoji: "💼", title: "Consultants et coachs", desc: "Rendez-vous découverte gratuit, puis séances payantes réservées en ligne." },
            { emoji: "🔧", title: "Artisans et dépannage", desc: "Créneaux d'intervention par zone, avec l'adresse et la description du besoin." },
            { emoji: "🎨", title: "Ateliers et cours", desc: "Places limitées par session, paiement à l'inscription et liste d'attente." },
          ],
        },
      ]}
      choices={[
        { title: "Un site avec réservation", desc: "Pour être trouvé sur Google et prendre les rendez-vous sans rien installer côté client. Dès 1 500 €." },
        { title: "Une application mobile", desc: "Pour les clients réguliers : réservation en deux gestes, forfaits et notifications. Dès 4 000 €." },
        { title: "Les deux, reliés", desc: "Un seul agenda et un seul tableau de bord pour le site et l'application." },
      ]}
      steps={[
        { title: "On échange", desc: "Vos prestations, vos horaires, vos règles de réservation et d'annulation." },
        { title: "Devis et maquette", desc: "Devis détaillé sous 24h, puis une maquette à votre image." },
        { title: "Développement", desc: "Je construis l'outil et je le teste avec vos vraies prestations." },
        { title: "Mise en ligne", desc: "Publication, lien de réservation prêt à partager et formation au tableau de bord." },
      ]}
      faq={faq}
      faqTitle="Questions fréquentes : application de prise de rendez-vous"
      ctaTitle="Laissez vos clients réserver en ligne"
      serviceName="Application de prise de rendez-vous en ligne"
      serviceDescription="Création d'outils de prise de rendez-vous sur mesure (site web et application mobile) : agenda en ligne, règles de réservation, rappels automatiques, acompte et paiement."
    />
  );
}

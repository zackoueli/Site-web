import type { Metadata } from "next";
import SectorPage, { MockScreen } from "@/components/SectorPage";
import { Carrot } from "lucide-react";

const TITLE = "Application mobile maraîcher & commerce local | BreizhApp";
const DESCRIPTION =
  "Développeur freelance à Brest, je crée l'app ou le site de votre ferme ou commerce local : paniers, click & collect, paiement en ligne. Devis gratuit 24h.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://breizhapp.tech/services/secteur/maraicher-commerce-local" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://breizhapp.tech/services/secteur/maraicher-commerce-local",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const faq = [
  {
    q: "Combien coûte une application pour un maraîcher ou un commerce local ?",
    a: "Un site web avec boutique et click & collect démarre à 1 500 €, une application iOS & Android à 4 000 €. Le prix dépend des fonctionnalités : abonnements aux paniers, plusieurs points de retrait, livraison. Devis détaillé sous 24h.",
  },
  {
    q: "Pourquoi pas Ciboulette, Producteurs Drive ou une autre plateforme ?",
    a: "Ces outils sont pratiques pour démarrer, mais vous payez un abonnement ou une commission, et votre boutique ressemble à celle de tous les autres producteurs. Un outil sur mesure suit votre façon de vendre (paniers, points de retrait, jours de distribution) et vous appartient.",
  },
  {
    q: "Mes produits changent chaque semaine, est-ce que je peux gérer ça facilement ?",
    a: "Oui, c'est le cœur de l'outil. Depuis votre téléphone, vous mettez à jour les produits disponibles et les quantités de la semaine, puis vous prévenez vos clients par notification ou email que la vente est ouverte.",
  },
  {
    q: "Comment fonctionnent les abonnements aux paniers ?",
    a: "Le client choisit sa taille de panier et sa fréquence, paie par prélèvement ou en une fois, et peut suspendre son abonnement pendant ses vacances. Vous voyez chaque semaine combien de paniers préparer, par point de retrait.",
  },
  {
    q: "Puis-je gérer plusieurs points de retrait et la livraison ?",
    a: "Oui : ferme, marché, magasin partenaire ou livraison à domicile, chacun avec ses jours, ses créneaux et, pour la livraison, ses zones et ses frais. Le client choisit au moment de commander.",
  },
  {
    q: "Mes clients peuvent-ils payer en ligne ?",
    a: "Oui, par carte bancaire, Apple Pay ou Google Pay via Stripe, ou au retrait si vous préférez. L'argent arrive directement sur votre compte, sans commission de ma part.",
  },
  {
    q: "En combien de temps l'outil est-il prêt ?",
    a: "Entre 2 et 4 semaines pour un site avec boutique et click & collect, 4 à 8 semaines pour une application complète avec abonnements.",
  },
];

export default function MaraicherPage() {
  return (
    <SectorPage
      slug="maraicher-commerce-local"
      color="#65A30D"
      icon={Carrot}
      breadcrumb="Application maraîcher & commerce local"
      h1="Application mobile pour maraîcher et commerce local"
      subtitle="Paniers · Click & collect · Vente directe"
      intro="Votre propre boutique de vente directe, à votre nom : un site web, une application mobile ou les deux. Vos clients choisissent leurs produits de la semaine, réservent leur panier et viennent le récupérer à l'heure prévue. Vous préparez tout depuis un tableau de bord, sans commission."
      guide={{ href: "/blog/combien-coute-application-mobile", label: "Prix d'une application" }}
      visual={
        <MockScreen
          kicker="VENTE DE LA SEMAINE"
          title="Ferme du Bourg"
          accent="#A3E635"
          rows={[
            { top: "Légumes · 1 kg", main: "Carottes nouvelles", badge: "2,40 €" },
            { top: "Pièce", main: "Salade batavia", badge: "1,20 €" },
            { top: "Abonnement", main: "Panier famille", badge: "18 €" },
            { top: "Retrait", main: "Vendredi 17h-19h", badge: "Ferme", muted: true },
          ]}
          footer={{ kicker: "COMMANDES DE LA SEMAINE", text: "42 paniers à préparer" }}
        />
      }
      enBref="Je crée des sites web et des applications mobiles sur mesure pour les maraîchers, fermes, producteurs, épiceries et commerces de proximité : catalogue qui change chaque semaine, paniers et abonnements, click & collect, livraison et paiement en ligne. Je m'appelle Enzo, développeur freelance basé à Brest, et je travaille avec des producteurs de tout le Finistère et de la Bretagne. Un site avec boutique démarre à 1 500 €, une application à 4 000 €. Aucune commission sur vos ventes, et l'outil comme votre fichier clients vous appartiennent."
      stats={[
        { label: "Livraison", value: "2 à 8 semaines" },
        { label: "Budget indicatif", value: "Dès 1 500 €" },
        { label: "Commission sur vos ventes", value: "0 %" },
      ]}
      sections={[
        {
          title: "Vendre en direct, sans y passer vos soirées",
          highlight: "sans y passer vos soirées",
          intro: "Les commandes par SMS, les tableaux à la main et les oublis de panier, c'est fini. Chaque semaine suit le même rythme.",
          items: [
            { emoji: "🥕", title: "1. Vous ouvrez la vente", desc: "Vous cochez les produits disponibles et leurs quantités depuis votre téléphone, en quelques minutes." },
            { emoji: "🔔", title: "2. Vos clients sont prévenus", desc: "Notification ou email automatique : « La vente de la semaine est ouverte jusqu'à mercredi midi »." },
            { emoji: "🧺", title: "3. Ils commandent et paient", desc: "Panier composé ou panier fixe, créneau de retrait choisi, paiement en ligne ou sur place." },
            { emoji: "📋", title: "4. Vous préparez", desc: "Liste de préparation par produit et par point de retrait, prête à imprimer le jour J." },
          ],
        },
        {
          title: "Ce que votre outil de vente directe inclut",
          dark: true,
          cols: 3,
          check: true,
          items: [
            { title: "Catalogue de la semaine", desc: "Produits, prix au kilo ou à la pièce, stocks limités et produits de saison." },
            { title: "Paniers et abonnements", desc: "Paniers fixes ou à composer, abonnements hebdomadaires avec pause pendant les vacances." },
            { title: "Click & collect", desc: "Points de retrait, jours de distribution et créneaux horaires au choix." },
            { title: "Livraison locale", desc: "Zones, frais et minimum de commande pour les tournées de livraison." },
            { title: "Paiement en ligne", desc: "Carte, Apple Pay, Google Pay via Stripe, ou paiement au retrait." },
            { title: "Fichier clients", desc: "Vos clients, leurs habitudes et leurs commandes, qui restent chez vous." },
          ],
        },
        {
          title: "Pour qui ?",
          highlight: "qui",
          items: [
            { emoji: "🌱", title: "Maraîchers et fermes", desc: "Paniers de légumes, vente à la ferme, AMAP et marchés." },
            { emoji: "🧀", title: "Producteurs et transformateurs", desc: "Fromages, viande, pain, conserves : précommandes et retraits groupés." },
            { emoji: "🛒", title: "Épiceries et commerces de proximité", desc: "Commande en ligne et retrait en magasin pour vos clients du quartier." },
            { emoji: "🤝", title: "Collectifs de producteurs", desc: "Plusieurs producteurs, un seul catalogue et un seul point de retrait." },
          ],
        },
      ]}
      choices={[
        { title: "Un site avec boutique", desc: "Pour être trouvé sur Google et prendre les commandes sans rien installer côté client. Dès 1 500 €." },
        { title: "Une application mobile", desc: "Pour vos clients réguliers : panier en deux gestes et notification à chaque ouverture de vente. Dès 4 000 €." },
        { title: "Les deux, reliés", desc: "Un seul catalogue et un seul tableau de bord pour le site et l'application." },
      ]}
      steps={[
        { title: "On échange", desc: "Vos produits, vos jours de distribution, vos points de retrait. À la ferme ou en visio." },
        { title: "Devis et maquette", desc: "Devis détaillé sous 24h, puis une maquette aux couleurs de votre ferme ou commerce." },
        { title: "Développement", desc: "Je construis l'outil avec vos vrais produits et je le teste avec vous." },
        { title: "Mise en ligne", desc: "Publication, formation au tableau de bord et accompagnement des premières ventes." },
      ]}
      faq={faq}
      faqTitle="Questions fréquentes : application pour maraîcher et commerce local"
      ctaTitle="Lancez la vente directe de votre ferme"
      serviceName="Application mobile maraîcher & commerce local"
      serviceDescription="Création de site web et d'application mobile sur mesure pour maraîchers, producteurs et commerces de proximité : paniers, abonnements, click & collect, livraison et paiement en ligne."
    />
  );
}

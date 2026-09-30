import type { Metadata } from "next";
import SectorPage, { MockScreen } from "@/components/SectorPage";
import { Truck } from "lucide-react";

const TITLE = "Application mobile livraison & logistique | BreizhApp";
const DESCRIPTION =
  "Développeur freelance à Brest, je crée votre app de livraison : commande en ligne, suivi du livreur en temps réel, tournées, preuve de livraison. Devis 24h.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://breizhapp.tech/services/secteur/livraison-logistique" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://breizhapp.tech/services/secteur/livraison-logistique",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const faq = [
  {
    q: "Combien coûte une application de livraison ?",
    a: "Une application de livraison iOS & Android avec commande en ligne, application livreur et suivi démarre à 4 000 €. Le prix dépend du nombre d'interfaces (client, livreur, gérant), de l'optimisation des tournées et des intégrations. Devis détaillé sous 24h.",
  },
  {
    q: "Pourquoi pas Uber Eats, Deliveroo ou un logiciel de livraison du marché ?",
    a: "Les plateformes prennent 20 à 30 % de chaque commande et gardent la relation client. Les logiciels du marché fonctionnent par abonnement et vous adaptez votre organisation à leur outil. Une application sur mesure suit votre façon de livrer, à votre nom, sans commission.",
  },
  {
    q: "Le client peut-il suivre son livreur en temps réel ?",
    a: "Oui : le client voit la position du livreur sur une carte et l'heure d'arrivée estimée, et reçoit une notification quand la commande part et quand le livreur approche.",
  },
  {
    q: "Comment les livraisons sont-elles attribuées aux livreurs ?",
    a: "Depuis le tableau de bord, vous attribuez les commandes à la main ou automatiquement selon la zone et la disponibilité. Pour les tournées de plusieurs arrêts, l'ordre de passage peut être calculé pour réduire les kilomètres.",
  },
  {
    q: "Peut-on avoir une preuve de livraison ?",
    a: "Oui : photo du colis déposé, signature sur le téléphone du livreur ou code donné par le client. La preuve est horodatée et consultable dans le tableau de bord.",
  },
  {
    q: "L'application fonctionne-t-elle pour la livraison de colis entre professionnels ?",
    a: "Oui. Le même principe s'applique aux coursiers, grossistes et transporteurs locaux : tournées, créneaux de livraison, preuve de dépôt et historique par client.",
  },
  {
    q: "En combien de temps l'application est-elle prête ?",
    a: "Entre 4 et 8 semaines selon le nombre d'interfaces et le niveau d'automatisation des tournées.",
  },
];

export default function LivraisonPage() {
  return (
    <SectorPage
      slug="livraison-logistique"
      color="#F97316"
      icon={Truck}
      breadcrumb="Application livraison & logistique"
      h1="Application mobile de livraison et logistique"
      subtitle="Commande · Suivi en temps réel · Tournées"
      intro="Votre propre solution de livraison, à votre nom : une application pour vos clients, une pour vos livreurs et un tableau de bord pour tout piloter. Vos clients suivent leur commande en direct, vos livreurs ont leur tournée sur leur téléphone, et vous ne payez aucune commission aux plateformes."
      guide={{ href: "/blog/combien-coute-application-mobile", label: "Prix d'une application" }}
      visual={
        <MockScreen
          kicker="COMMANDE N°1042"
          title="Votre livreur arrive"
          accent="#FDBA74"
          rows={[
            { top: "18:42", main: "Commande préparée", badge: "✓" },
            { top: "18:51", main: "En route avec Julien", badge: "✓" },
            { top: "Arrivée estimée", main: "19:04", badge: "8 min" },
            { top: "Preuve de livraison", main: "Photo + signature", badge: "À venir", muted: true },
          ]}
          footer={{ kicker: "TOURNÉE DU SOIR", text: "12 arrêts · 34 km optimisés" }}
        />
      }
      enBref="Je crée des applications de livraison sur mesure pour les restaurants, commerces, producteurs, coursiers et entreprises de logistique locale : commande en ligne, application livreur, attribution des courses, suivi en temps réel et preuve de livraison. Je m'appelle Enzo, développeur freelance basé à Brest, et je travaille avec des entreprises partout en France. Une application de livraison démarre à 4 000 €. Aucune commission sur vos commandes, et l'outil comme vos données vous appartiennent."
      stats={[
        { label: "Livraison", value: "4 à 8 semaines" },
        { label: "Budget indicatif", value: "Dès 4 000 €" },
        { label: "Commission sur vos commandes", value: "0 %" },
      ]}
      sections={[
        {
          title: "Trois interfaces, un seul système",
          highlight: "un seul système",
          intro: "Une application de livraison, c'est en réalité trois outils qui se parlent en temps réel.",
          cols: 3,
          items: [
            { emoji: "📱", title: "L'application client", desc: "Commande, paiement, choix du créneau, suivi du livreur sur la carte et notifications à chaque étape." },
            { emoji: "🛵", title: "L'application livreur", desc: "Liste des courses, itinéraire, appel du client en un geste et preuve de livraison." },
            { emoji: "🖥️", title: "Le tableau de bord", desc: "Commandes en cours, attribution aux livreurs, zones, frais et historique complet." },
          ],
        },
        {
          title: "Les fonctionnalités clés",
          dark: true,
          cols: 3,
          check: true,
          items: [
            { title: "Suivi en temps réel", desc: "Position du livreur et heure d'arrivée estimée, visibles par le client et par vous." },
            { title: "Attribution des courses", desc: "Manuelle ou automatique selon la zone et la disponibilité des livreurs." },
            { title: "Optimisation des tournées", desc: "Ordre de passage calculé pour réduire les kilomètres sur les tournées à plusieurs arrêts." },
            { title: "Zones et frais", desc: "Zones de livraison, frais et minimum de commande par zone." },
            { title: "Preuve de livraison", desc: "Photo, signature ou code client, horodatés dans le tableau de bord." },
            { title: "Notifications", desc: "Commande acceptée, en route, livrée : le client n'a plus besoin d'appeler." },
          ],
        },
        {
          title: "Pour qui ?",
          highlight: "qui",
          items: [
            { emoji: "🍕", title: "Restaurants et dark kitchens", desc: "Vos propres livreurs, sans les 20 à 30 % de commission des plateformes." },
            { emoji: "🛒", title: "Commerces et producteurs", desc: "Livraison locale des commandes, par créneau ou par tournée." },
            { emoji: "📦", title: "Coursiers et transporteurs", desc: "Tournées, preuve de dépôt et suivi pour vos clients professionnels." },
            { emoji: "🏭", title: "Grossistes et distributeurs", desc: "Livraisons récurrentes aux professionnels, bons de livraison et historique." },
          ],
        },
      ]}
      choices={[
        { title: "Un site de commande", desc: "Pour prendre les commandes en ligne sans rien installer côté client, avec suivi par lien. Dès 1 500 €." },
        { title: "Une application complète", desc: "Application client, application livreur et tableau de bord, reliés en temps réel. Dès 4 000 €." },
        { title: "Un outil interne", desc: "Uniquement l'application livreur et le tableau de bord, si les commandes arrivent déjà par un autre canal." },
      ]}
      steps={[
        { title: "On échange", desc: "Votre volume, vos zones, vos livreurs et votre façon d'organiser les tournées." },
        { title: "Devis et maquettes", desc: "Devis détaillé sous 24h, puis les maquettes des trois interfaces." },
        { title: "Développement", desc: "Construction et tests sur le terrain avec vos livreurs." },
        { title: "Mise en ligne", desc: "Publication, formation de l'équipe et suivi des premières semaines." },
      ]}
      faq={faq}
      faqTitle="Questions fréquentes : application de livraison"
      ctaTitle="Lancez votre propre service de livraison"
      serviceName="Application mobile livraison & logistique"
      serviceDescription="Création d'applications de livraison sur mesure : application client, application livreur et tableau de bord, suivi en temps réel, attribution des courses, tournées et preuve de livraison."
    />
  );
}

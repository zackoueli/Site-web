import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";
import PhoneDemo from "@/components/PhoneDemo";
import { BriefcaseBusiness } from "lucide-react";

const TITLE = "Site vitrine & portfolio pour artisans et pros | BreizhApp";
const DESCRIPTION =
  "Développeur freelance à Brest, je crée le site ou l'app vitrine de votre activité : réalisations, demande de devis, avis clients, SEO local. Devis gratuit 24h.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://breizhapp.tech/services/secteur/portfolio-vitrine" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://breizhapp.tech/services/secteur/portfolio-vitrine",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const faq = [
  {
    q: "Combien coûte un site vitrine avec portfolio ?",
    a: "Un site vitrine sur mesure avec galerie de réalisations, demande de devis et panel admin démarre à 1 500 €. Une application mobile vitrine démarre à 4 000 €. Devis détaillé sous 24h.",
  },
  {
    q: "Puis-je ajouter mes nouveaux chantiers moi-même ?",
    a: "Oui. Depuis le panel admin, vous ajoutez un projet en quelques minutes : photos avant/après, description, ville et catégorie. Il apparaît immédiatement sur le site, sans passer par moi.",
  },
  {
    q: "Le site m'aidera-t-il à être trouvé sur Google dans ma ville ?",
    a: "C'est l'objectif : une page par service et par zone d'intervention, des textes qui reprennent ce que vos clients tapent vraiment (« paysagiste Brest », « rénovation salle de bain Quimper »), un site rapide et des données structurées. Je vous aide aussi à relier le site à votre fiche Google Business Profile.",
  },
  {
    q: "Comment afficher mes avis clients ?",
    a: "Vos avis Google peuvent être affichés sur le site, et après chaque chantier un lien peut être envoyé au client pour l'inviter à laisser un avis. Les avis rassurent les visiteurs qui ne vous connaissent pas encore.",
  },
  {
    q: "Site vitrine ou application : que choisir ?",
    a: "Pour la plupart des artisans et indépendants, le site vitrine suffit : c'est lui qui vous fait trouver sur Google. L'application devient utile quand vous avez des clients réguliers à fidéliser ou un suivi de chantier à partager avec eux.",
  },
  {
    q: "En combien de temps le site est-il en ligne ?",
    a: "Entre 2 et 4 semaines selon le nombre de pages et de réalisations à intégrer.",
  },
];

export default function PortfolioVitrinePage() {
  return (
    <SectorPage
      slug="portfolio-vitrine"
      color="#2D5016"
      icon={BriefcaseBusiness}
      breadcrumb="Site vitrine & portfolio"
      h1="Site et application vitrine pour artisans et indépendants"
      subtitle="Réalisations · Devis en ligne · SEO local"
      intro="Votre vitrine professionnelle, à votre nom : un site web, une application mobile ou les deux. Vos futurs clients découvrent vos réalisations, lisent les avis et vous envoient une demande de devis détaillée. Vous ajoutez vos nouveaux chantiers vous-même, depuis votre téléphone."
      guide={{ href: "/blog/application-mobile-artisan-commercant", label: "Guide artisans et commerçants" }}
      visual={
        <>
          <PhoneDemo
            src="https://demo.paysagiste.breizhapp.tech/"
            title="Démo de site vitrine pour un paysagiste"
          />
          <p className="text-xs text-gray-500 text-center max-w-xs">
            Site vitrine Paradis Vert, réalisé par BreizhApp. Naviguez librement.
          </p>
        </>
      }
      enBref="Je crée des sites vitrines et des applications sur mesure pour les artisans, indépendants, photographes, architectes et professions libérales : galerie de réalisations, demande de devis en ligne, avis clients et référencement local. Je m'appelle Enzo, développeur freelance basé à Brest, et je travaille avec des professionnels de tout le Finistère et de la Bretagne. Un site vitrine démarre à 1 500 € et se livre en 2 à 4 semaines. Vous gérez vos contenus vous-même depuis un panel admin, et le site vous appartient, nom de domaine compris."
      stats={[
        { label: "Livraison", value: "2 à 4 semaines" },
        { label: "Budget indicatif", value: "Dès 1 500 €" },
        { label: "Premier retour", value: "Sous 24h" },
      ]}
      sections={[
        {
          title: "Une vitrine qui transforme les visiteurs en demandes de devis",
          highlight: "en demandes de devis",
          cols: 3,
          check: true,
          items: [
            { title: "Galerie de réalisations", desc: "Vos chantiers ou projets classés par catégorie, avec des photos avant/après qui parlent d'elles-mêmes." },
            { title: "Demande de devis détaillée", desc: "Le client précise son besoin, sa ville, son budget et joint des photos : vous recevez une demande exploitable." },
            { title: "Avis clients", desc: "Vos avis Google mis en avant, et une invitation à laisser un avis après chaque prestation." },
            { title: "Pages services et zones", desc: "Une page par métier et par ville d'intervention, pour ressortir sur les recherches locales." },
            { title: "Labels et garanties", desc: "Qualifications, assurances et labels (RGE, Qualibat…) affichés là où ils rassurent." },
            { title: "Panel admin", desc: "Réalisations, textes, services et horaires modifiables depuis votre téléphone." },
          ],
        },
        {
          title: "Être trouvé sur Google dans votre ville",
          dark: true,
          intro: "La majorité de vos futurs clients vous cherchent sur Google avec le nom de votre métier et de leur ville. Votre site est construit pour ces recherches.",
          items: [
            { emoji: "📍", title: "Référencement local", desc: "Textes, titres et pages pensés pour « votre métier + votre ville »." },
            { emoji: "🗺️", title: "Fiche Google Business Profile", desc: "Site et fiche Google reliés, pour apparaître aussi dans Google Maps." },
            { emoji: "⚡", title: "Site rapide", desc: "Un site léger qui s'affiche vite sur mobile, ce que Google prend en compte." },
            { emoji: "🔎", title: "Données structurées", desc: "Adresse, horaires, avis et services lisibles directement par Google." },
          ],
        },
        {
          title: "Pour qui ?",
          highlight: "qui",
          items: [
            { emoji: "🔨", title: "Artisans du bâtiment", desc: "Maçons, menuisiers, électriciens, plombiers : chantiers avant/après et devis." },
            { emoji: "🌳", title: "Paysagistes et jardiniers", desc: "Réalisations par saison, entretien et création de jardins." },
            { emoji: "📷", title: "Photographes et créatifs", desc: "Portfolio plein écran, séries et prise de contact pour une séance." },
            { emoji: "📐", title: "Architectes et décorateurs", desc: "Projets détaillés, plans et étapes, du croquis à la livraison." },
          ],
        },
      ]}
      choices={[
        { title: "Un site vitrine", desc: "Pour être trouvé sur Google et recevoir des demandes de devis. Le bon choix pour la plupart des pros. Dès 1 500 €." },
        { title: "Une application mobile", desc: "Pour fidéliser des clients réguliers ou partager le suivi d'un chantier avec eux. Dès 4 000 €." },
        { title: "Les deux, reliés", desc: "Un seul panel admin : chaque réalisation ajoutée apparaît sur le site et dans l'application." },
      ]}
      steps={[
        { title: "On échange", desc: "Votre métier, vos clients, vos zones d'intervention et vos meilleures réalisations." },
        { title: "Devis et maquette", desc: "Devis détaillé sous 24h, puis une maquette à votre image." },
        { title: "Développement", desc: "Je construis le site avec vos vrais contenus et je l'optimise pour Google." },
        { title: "Mise en ligne", desc: "Nom de domaine, fiche Google reliée et formation au panel admin." },
      ]}
      faq={faq}
      faqTitle="Questions fréquentes : site vitrine et portfolio"
      ctaTitle="Mettez vos réalisations en valeur"
      serviceName="Site vitrine & portfolio pour artisans et indépendants"
      serviceDescription="Création de site vitrine et d'application sur mesure pour artisans et indépendants : galerie de réalisations, demande de devis en ligne, avis clients et référencement local."
    />
  );
}

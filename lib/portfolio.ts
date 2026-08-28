export type Project = {
  slug: string;
  name: string;
  service: string;
  tagline: string;
  category: string;
  type: string;
  color: string;
  textColor: string;
  badge: string;
  icon: string;
  description: string;
  tags: string[];
  /** Aperçu affiché dans la grille portfolio et en média principal de l'étude de cas. /public/portfolio/<slug>.png */
  image?: string;
  previewUrl?: string;
  externalUrl?: string;

  // ── Étude de cas façon lusion.co/projects/<slug> ──
  /** Paragraphe long affiché sous le titre dans l'étude de cas. */
  caseIntro?: string;
  /** Colonne "SERVICES" de l'étude de cas (Concept, Design, Développement…). */
  services?: string[];
  /** Année(s) du projet, ex. "2024". */
  year?: string;
  /** Rôle tenu, ex. "Conception & développement". */
  role?: string;
  /** Partenaire éventuel affiché dans les crédits. */
  partner?: { name: string; url: string };
  /** Galerie plein cadre de l'étude de cas. /public/portfolio/<slug>-1.png, -2.png… */
  gallery?: { src: string; alt: string; wide?: boolean }[];
};

export const projects: Project[] = [
  {
    slug: "bunkly",
    name: "Bunkly",
    service: "plateforme",
    tagline: "Créez votre livret d'accueil digital pour vos hôtes.",
    category: "Plateforme web",
    type: "SaaS · Livret d'accueil",
    color: "#FF6B35",
    textColor: "#FFFBF0",
    badge: "bg-[#FF6B35] text-white",
    icon: "🏡",
    description:
      "Plateforme SaaS de création de livrets d'accueil digitaux. Traduction automatique, templates design, dashboard propriétaire. Disponible sur app.bunkly.co.",
    tags: ["Next.js", "SaaS", "Multi-langue", "Dashboard"],
    image: "/portfolio/bunkly.png",
    previewUrl: "https://app.bunkly.co/b/NAvq6yDTOe",
    externalUrl: "https://app.bunkly.co",
    caseIntro:
      "Bunkly est une plateforme SaaS qui permet aux propriétaires de locations, hôtels et gîtes de créer un livret d'accueil digital en quelques minutes. Le livret se traduit automatiquement dans la langue de chaque voyageur, se personnalise avec des templates design et se partage par lien ou QR code. Côté propriétaire, un dashboard complet permet de gérer plusieurs hébergements, de réorganiser les modules en glisser-déposer et d'importer une annonce Airbnb, Booking ou VRBO pour un remplissage automatique par IA. Développé en 2 semaines, en production sur app.bunkly.co.",
    year: "2024",
    role: "Conception & développement full-stack",
    partner: { name: "Agence Web Armor", url: "https://agence-web-armor.fr/" },
    services: ["Concept", "UX / UI Design", "Développement web", "Dashboard SaaS", "Traduction auto", "Déploiement"],
    gallery: [
      { src: "https://firebasestorage.googleapis.com/v0/b/livret-d-accueil-b98ba.firebasestorage.app/o/image%2022.png?alt=media&token=ef050d7a-0e53-4b32-802c-180de481b910", alt: "Vue d'ensemble des livrets, statut de publication et statistiques", wide: true },
      { src: "https://firebasestorage.googleapis.com/v0/b/livret-d-accueil-b98ba.firebasestorage.app/o/image%2023.png?alt=media&token=e64c2445-0e94-4b84-b925-a0f17acd1dac", alt: "Édition d'un module avec aperçu mobile en temps réel" },
      { src: "https://firebasestorage.googleapis.com/v0/b/livret-d-accueil-b98ba.firebasestorage.app/o/image%2024.png?alt=media&token=6840d98e-e79b-4e1e-864f-80ad245a7f90", alt: "Modules du livret réorganisables en glisser-déposer" },
      { src: "https://firebasestorage.googleapis.com/v0/b/livret-d-accueil-b98ba.firebasestorage.app/o/image%2025.png?alt=media&token=2f7d5256-39de-46b7-9ef7-fd10b3b49c02", alt: "Traduction automatique du livret en plusieurs langues", wide: true },
      { src: "https://firebasestorage.googleapis.com/v0/b/livret-d-accueil-b98ba.firebasestorage.app/o/image%2026.png?alt=media&token=5b4ff726-f0c3-4791-8543-120caae1db09", alt: "Import IA depuis une annonce Airbnb, Booking ou VRBO" },
    ],
  },
  {
    slug: "histoire-eternelle",
    name: "Histoire Eternelle",
    service: "ecommerce",
    tagline: "Bijoux artisanaux façonnés à la main.",
    category: "E-commerce",
    type: "Boutique en ligne",
    color: "#C0622D",
    textColor: "#FFFBF0",
    badge: "bg-[#C0622D] text-white",
    icon: "💍",
    description:
      "Boutique e-commerce complète pour L'Atelier d'Anaïs. Catalogue bijoux, espace client, paiement Stripe, avis vérifiés et panel admin Firebase.",
    tags: ["Next.js", "Firebase", "Stripe", "E-commerce"],
    image: "/portfolio/histoire-eternelle.png",
    previewUrl: "https://www.histoire-eternelle-l-atelier.fr/",
    externalUrl: "https://www.histoire-eternelle-l-atelier.fr/",
    caseIntro:
      "Histoire Eternelle est la boutique en ligne de L'Atelier d'Anaïs, créatrice de bijoux artisanaux en résine façonnés à la main en Bretagne. Le site marie une direction artistique élégante — serif Playfair Display, palette terracotta et crème — à un socle e-commerce complet : catalogue de pièces uniques avec variantes, panier et tunnel d'achat, paiement Stripe (CB, Apple Pay, Google Pay), espace client avec historique et liste de souhaits, avis vérifiés et messagerie pour les commandes sur mesure. Anaïs gère toute sa boutique en autonomie depuis un panel admin Firebase : produits, commandes, codes promo et modération des avis.",
    year: "2024",
    role: "Direction artistique & développement e-commerce",
    services: ["Concept", "Direction artistique", "Développement e-commerce", "Intégration Stripe", "Panel admin", "SEO"],
    gallery: [
      { src: "https://firebasestorage.googleapis.com/v0/b/fir-boutique-754bb.firebasestorage.app/o/image%20171.png?alt=media&token=0b58df62-b2a0-4154-9d5f-37028df9a118", alt: "Dashboard admin : chiffre d'affaires, commandes et produits actifs", wide: true },
      { src: "https://firebasestorage.googleapis.com/v0/b/fir-boutique-754bb.firebasestorage.app/o/image%20231.png?alt=media&token=7a678b6e-9968-4496-8566-9c53b16fa0c9", alt: "Gestion des produits : ajout, prix et disponibilité" },
      { src: "https://firebasestorage.googleapis.com/v0/b/fir-boutique-754bb.firebasestorage.app/o/Group%20256.png?alt=media&token=def1d244-a682-4f31-b171-393225977ccc", alt: "Suivi et traitement des commandes en temps réel" },
      { src: "https://firebasestorage.googleapis.com/v0/b/fir-boutique-754bb.firebasestorage.app/o/Group%20257.png?alt=media&token=a3445f31-8795-42df-9e71-11fa1802c81e", alt: "Codes promo paramétrables", wide: true },
      { src: "https://firebasestorage.googleapis.com/v0/b/fir-boutique-754bb.firebasestorage.app/o/image%20235.png?alt=media&token=e3a5d0a0-3eef-4de7-ba09-9f6b5d5e098a", alt: "Modération des avis clients avant publication" },
    ],
  },
  {
    slug: "demo-paysagiste",
    name: "Paradis Vert",
    service: "site-web",
    tagline: "Votre jardin entre de bonnes mains.",
    category: "Site web",
    type: "Vitrine professionnelle",
    color: "#2D5016",
    textColor: "#FFFBF0",
    badge: "bg-[#2D5016] text-white",
    icon: "🌿",
    description:
      "Site vitrine pour paysagiste avec galerie réalisations, demande de devis en ligne et back-office Firebase pour gérer les contenus sans développeur.",
    tags: ["Next.js", "Firebase", "SEO local", "Artisan"],
    image: "/portfolio/demo-paysagiste.png",
    previewUrl: "https://demo.paysagiste.breizhapp.tech/",
    externalUrl: "https://demo.paysagiste.breizhapp.tech/",
    caseIntro:
      "Paradis Vert est un site vitrine complet conçu pour un paysagiste professionnel intervenant à Biscarrosse et dans les Landes. Vidéo héro plein écran, direction éditoriale serif (Instrument Serif), présentation des prestations avec photos, galerie de chantiers réalisés, blog d'actualités et formulaire de devis détaillé qui arrive directement dans la boîte mail de l'artisan. L'ensemble du contenu — textes, photos, services, réalisations, vidéo d'accueil — se pilote depuis un panel admin Firebase, sans aucune intervention du développeur. Le référencement local est optimisé pour ressortir sur les recherches de la zone.",
    year: "2024",
    role: "Conception, développement & SEO local",
    services: ["Concept", "Direction éditoriale", "Développement web", "Panel admin Firebase", "SEO local", "Déploiement"],
    gallery: [],
  },
];

export function getProjectsForService(service: string): Project[] {
  return projects.filter((p) => p.service === service);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

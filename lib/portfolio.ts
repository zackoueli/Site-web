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
  previewUrl?: string;
  externalUrl?: string;
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
    previewUrl: "https://app.bunkly.co/b/NAvq6yDTOe",
    externalUrl: "https://app.bunkly.co",
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
    previewUrl: "https://www.histoire-eternelle-l-atelier.fr/",
    externalUrl: "https://www.histoire-eternelle-l-atelier.fr/",
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
    previewUrl: "https://demo.paysagiste.breizhapp.tech/",
    externalUrl: "https://demo.paysagiste.breizhapp.tech/",
  },
];

export function getProjectsForService(service: string): Project[] {
  return projects.filter((p) => p.service === service);
}

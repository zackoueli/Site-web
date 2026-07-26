export type ServiceSlug = "application-mobile" | "site-web" | "ecommerce" | "plateforme";

export type Service = {
  slug: ServiceSlug;
  href: string;
  label: string;
};

export type Secteur = {
  slug: string;
  href: string;
  label: string;
  service: ServiceSlug;
};

export const SERVICES: Service[] = [
  { slug: "application-mobile", href: "/services/application-mobile", label: "Application mobile" },
  { slug: "site-web", href: "/services/site-web", label: "Site web" },
  { slug: "ecommerce", href: "/services/ecommerce", label: "E-commerce" },
  { slug: "plateforme", href: "/services/plateforme", label: "Plateforme digitale" },
];

export const SECTEURS: Secteur[] = [
  { slug: "restaurant", href: "/services/secteur/restaurant", label: "Restaurant", service: "application-mobile" },
  { slug: "coiffeur", href: "/services/secteur/coiffeur", label: "Coiffeur & salon", service: "application-mobile" },
  { slug: "hotel", href: "/services/secteur/hotel", label: "Hôtel & hébergement", service: "application-mobile" },
  { slug: "salle-de-sport", href: "/services/secteur/salle-de-sport", label: "Salle de sport & fitness", service: "application-mobile" },
  { slug: "maraicher-commerce-local", href: "/services/secteur/maraicher-commerce-local", label: "Maraîcher & commerce local", service: "application-mobile" },
  { slug: "jeu-mobile", href: "/services/secteur/jeu-mobile", label: "Jeu mobile", service: "application-mobile" },
  { slug: "portfolio-vitrine", href: "/services/secteur/portfolio-vitrine", label: "Vitrine professionnelle", service: "application-mobile" },
  { slug: "reservation-prise-de-rdv", href: "/services/secteur/reservation-prise-de-rdv", label: "Prise de rendez-vous", service: "application-mobile" },
  { slug: "livraison-logistique", href: "/services/secteur/livraison-logistique", label: "Livraison & logistique", service: "application-mobile" },
  { slug: "reseau-social-communaute", href: "/services/secteur/reseau-social-communaute", label: "Réseau social & communauté", service: "application-mobile" },
  { slug: "sante-bien-etre", href: "/services/secteur/sante-bien-etre", label: "Santé & bien-être", service: "application-mobile" },
  { slug: "education-formation", href: "/services/secteur/education-formation", label: "Éducation & formation", service: "application-mobile" },
  { slug: "evenementiel-billetterie", href: "/services/secteur/evenementiel-billetterie", label: "Événementiel & billetterie", service: "application-mobile" },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getSecteur(slug: string): Secteur | undefined {
  return SECTEURS.find((s) => s.slug === slug);
}

/** Resolves a taxonomy slug (service or secteur) to its href, label, and parent service. */
export function resolveTaxonomySlug(
  slug: string
): { href: string; label: string; service: ServiceSlug } | undefined {
  const service = getService(slug);
  if (service) return { href: service.href, label: service.label, service: service.slug };
  const secteur = getSecteur(slug);
  if (secteur) return { href: secteur.href, label: secteur.label, service: secteur.service };
  return undefined;
}

export function secteursForService(service: ServiceSlug): Secteur[] {
  return SECTEURS.filter((s) => s.service === service);
}

import type { MetadataRoute } from "next";
import { articles } from "@/lib/blog";
import { getAllProjects } from "@/lib/portfolioStore";

// Régénéré à chaque requête pour refléter les projets ajoutés via /admin
export const dynamic = "force-dynamic";

const STATIC_PAGES: MetadataRoute.Sitemap = [
  { url: "https://breizhapp.tech/",                                       lastModified: new Date("2026-10-01"), changeFrequency: "weekly",  priority: 1.0 },
  { url: "https://breizhapp.tech/blog",                                   lastModified: new Date("2026-10-01"), changeFrequency: "weekly",  priority: 0.9 },
  { url: "https://breizhapp.tech/services/application-mobile",            lastModified: new Date("2026-10-01"), changeFrequency: "monthly", priority: 0.9 },
  { url: "https://breizhapp.tech/services/site-web",                      lastModified: new Date("2026-10-01"), changeFrequency: "monthly", priority: 0.8 },
  { url: "https://breizhapp.tech/services/web-app",                       lastModified: new Date("2026-10-01"), changeFrequency: "monthly", priority: 0.8 },
  { url: "https://breizhapp.tech/services/ecommerce",                     lastModified: new Date("2026-10-01"), changeFrequency: "monthly", priority: 0.8 },
  { url: "https://breizhapp.tech/services/secteur/restaurant",                    lastModified: new Date("2026-10-01"), changeFrequency: "monthly", priority: 0.9 },
  { url: "https://breizhapp.tech/services/secteur/coiffeur",                      lastModified: new Date("2026-10-01"), changeFrequency: "monthly", priority: 0.85 },
  { url: "https://breizhapp.tech/services/secteur/hotel",                         lastModified: new Date("2026-10-01"), changeFrequency: "monthly", priority: 0.85 },
  { url: "https://breizhapp.tech/services/secteur/salle-de-sport",                lastModified: new Date("2026-10-01"), changeFrequency: "monthly", priority: 0.85 },
  { url: "https://breizhapp.tech/services/secteur/maraicher-commerce-local",      lastModified: new Date("2026-10-01"), changeFrequency: "monthly", priority: 0.85 },
  { url: "https://breizhapp.tech/services/secteur/jeu-mobile",                    lastModified: new Date("2026-09-30"), changeFrequency: "monthly", priority: 0.85 },
  { url: "https://breizhapp.tech/services/secteur/portfolio-vitrine",             lastModified: new Date("2026-09-30"), changeFrequency: "monthly", priority: 0.85 },
  { url: "https://breizhapp.tech/services/secteur/reservation-prise-de-rdv",      lastModified: new Date("2026-10-01"), changeFrequency: "monthly", priority: 0.85 },
  { url: "https://breizhapp.tech/services/secteur/livraison-logistique",          lastModified: new Date("2026-09-30"), changeFrequency: "monthly", priority: 0.85 },
  { url: "https://breizhapp.tech/services/secteur/reseau-social-communaute",      lastModified: new Date("2026-09-30"), changeFrequency: "monthly", priority: 0.85 },
  { url: "https://breizhapp.tech/services/secteur/sante-bien-etre",               lastModified: new Date("2026-10-01"), changeFrequency: "monthly", priority: 0.85 },
  { url: "https://breizhapp.tech/services/secteur/education-formation",           lastModified: new Date("2026-09-30"), changeFrequency: "monthly", priority: 0.85 },
  { url: "https://breizhapp.tech/services/secteur/evenementiel-billetterie",      lastModified: new Date("2026-10-01"), changeFrequency: "monthly", priority: 0.85 },
  { url: "https://breizhapp.tech/portfolio",                              lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.75 },
  { url: "https://breizhapp.tech/mentions-legales",                       lastModified: new Date("2026-07-26"), changeFrequency: "yearly",  priority: 0.3 },
  { url: "https://breizhapp.tech/politique-de-confidentialite",           lastModified: new Date("2026-07-26"), changeFrequency: "yearly",  priority: 0.3 },
  { url: "https://breizhapp.tech/cgv",                                    lastModified: new Date("2026-07-26"), changeFrequency: "yearly",  priority: 0.3 },
];

/** URLs absolues et dédoublonnées pour le sitemap d'images (Google Images). */
function absoluteImages(srcs: (string | undefined)[]): string[] {
  const urls = srcs
    .filter((s): s is string => !!s)
    .map((s) => (s.startsWith("/") ? `https://breizhapp.tech${s}` : s))
    .filter((s) => s.startsWith("https://breizhapp.tech/"));
  return [...new Set(urls)];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogArticles = articles.map((a) => ({
    url: `https://breizhapp.tech/blog/${a.slug}`,
    lastModified: new Date(a.lastModified ?? a.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
    images: absoluteImages([
      a.image?.src,
      ...a.sections.flatMap((s) => [s.image?.src, ...(s.subsections ?? []).map((sub) => sub.image?.src)]),
    ]),
  }));

  const projects = await getAllProjects();
  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `https://breizhapp.tech/portfolio/${p.slug}`,
    lastModified: new Date(p.updatedAt ?? p.createdAt ?? Date.now()),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: absoluteImages([p.image, ...(p.gallery ?? []).map((g) => g.src)]),
  }));

  return [...STATIC_PAGES, ...projectPages, ...blogArticles];
}

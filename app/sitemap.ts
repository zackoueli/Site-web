import type { MetadataRoute } from "next";
import { articles } from "@/lib/blog";

const STATIC_PAGES: MetadataRoute.Sitemap = [
  { url: "https://breizhapp.tech",                                        lastModified: new Date("2026-06-11"), changeFrequency: "weekly",  priority: 1.0 },
  { url: "https://breizhapp.tech/blog",                                   lastModified: new Date("2026-06-11"), changeFrequency: "weekly",  priority: 0.9 },
  { url: "https://breizhapp.tech/services/application-mobile",            lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.9 },
  { url: "https://breizhapp.tech/services/site-web",                      lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.8 },
  { url: "https://breizhapp.tech/services/plateforme",                    lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.8 },
  { url: "https://breizhapp.tech/services/ecommerce",                     lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.8 },
  { url: "https://breizhapp.tech/services/secteur/restaurant",            lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.9 },
  { url: "https://breizhapp.tech/services/secteur/coiffeur",              lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.85 },
  { url: "https://breizhapp.tech/services/secteur/hotel",                 lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.85 },
  { url: "https://breizhapp.tech/services/secteur/salle-de-sport",        lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.85 },
  { url: "https://breizhapp.tech/portfolio",                              lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.75 },
  { url: "https://breizhapp.tech/portfolio/forno-pizzeria",               lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.7 },
  { url: "https://breizhapp.tech/portfolio/histoire-eternelle",           lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.7 },
  { url: "https://breizhapp.tech/portfolio/demo-paysagiste",              lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const blogArticles = articles.map((a) => ({
    url: `https://breizhapp.tech/blog/${a.slug}`,
    lastModified: new Date(a.lastModified ?? a.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...STATIC_PAGES, ...blogArticles];
}

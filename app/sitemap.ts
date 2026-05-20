import type { MetadataRoute } from "next";
import { articles } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://breizhapp.tech";
  const now = new Date();

  const blogArticles = articles.map((a) => ({
    url: `${base}/blog/${a.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [
    { url: base,                                        lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/blog`,                              lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/services/application-mobile`,       lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/site-web`,                 lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/plateforme`,               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/ecommerce`,                lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/portfolio`,                         lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/portfolio/forno-pizzeria`,          lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/portfolio/histoire-eternelle`,      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/portfolio/demo-paysagiste`,         lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...blogArticles,
  ];
}

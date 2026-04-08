import type { MetadataRoute } from "next";
import { articles } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://breizhapp.tech";

  const blogArticles = articles.map((a) => ({
    url: `${base}/blog/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: base,             lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/blog`,   lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    ...blogArticles,
  ];
}

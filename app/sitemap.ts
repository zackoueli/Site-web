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
    { url: base,             lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/blog`,   lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    ...blogArticles,
  ];
}

import Link from "next/link";
import { getArticlesForService } from "@/lib/blog";

export default function RelatedArticles({ service }: { service: string }) {
  const pool = getArticlesForService(service);
  // Rotation déterministe par service pour ne pas toujours lier les 3 mêmes articles
  const hash = service.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const offset = pool.length ? hash % pool.length : 0;
  const articles = [...pool.slice(offset), ...pool.slice(0, offset)].slice(0, 3);
  if (articles.length === 0) return null;

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-6">À lire aussi</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {articles.map((a) => (
            <Link key={a.slug} href={`/blog/${a.slug}`} className="brutal-border bg-white p-4 hover:bg-[#FFE234] transition-colors block">
              <p className="font-bold text-sm leading-snug">{a.title} →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

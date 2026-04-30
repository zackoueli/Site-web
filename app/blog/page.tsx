import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — Conseils développement application mobile | BreizhApp",
  description:
    "Articles sur la création d'apps mobiles iOS & Android : tarifs, comparatifs techniques, conseils. Par BreizhApp, développeur freelance à Brest.",
  alternates: { canonical: "https://breizhapp.tech/blog" },
  openGraph: {
    title: "Blog BreizhApp — Conseils application mobile",
    description:
      "Articles sur la création d'applications mobiles iOS & Android par un développeur freelance à Brest.",
    url: "https://breizhapp.tech/blog",
  },
};

const categoryColors: Record<string, string> = {
  Tarifs: "bg-[#FFE234] text-[#0A0A0A]",
  Restaurants: "bg-[#FF6B35] text-white",
  Tech: "bg-[#7C3AED] text-white",
  Conseils: "bg-[#00D4AA] text-[#0A0A0A]",
  Comparatifs: "bg-[#FF3B82] text-white",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-16">
          <p className="mono text-sm font-bold text-gray-500 mb-2">// ressources</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Blog &{" "}
            <span className="bg-[#FFE234] px-2 brutal-border">conseils</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Tout ce que vous devez savoir sur la création d'applications mobiles iOS & Android — tarifs, fonctionnalités, choix techniques.
          </p>
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`}>
              <article className="brutal-card p-6 h-full flex flex-col gap-4 cursor-pointer">
                <div className="flex items-center justify-between">
                  <span
                    className={`mono text-xs font-bold px-2 py-1 brutal-border ${
                      categoryColors[article.category] ?? "bg-white"
                    }`}
                  >
                    {article.category}
                  </span>
                  <span className="mono text-xs text-gray-400">{article.readTime} de lecture</span>
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-bold leading-snug mb-2">{article.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">{article.description}</p>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-black">
                  <span className="mono text-xs text-gray-400">
                    {new Date(article.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="font-bold text-sm">Lire →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 brutal-border brutal-shadow bg-[#FFE234] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-bold text-xl">Vous avez un projet d'application mobile ?</p>
            <p className="text-gray-700">Devis gratuit, réponse sous 24h.</p>
          </div>
          <Link
            href="/#contact"
            className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3 whitespace-nowrap"
          >
            Démarrer mon projet →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

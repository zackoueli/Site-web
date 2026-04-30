import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticle } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | BreizhApp`,
    description: article.description,
    alternates: { canonical: `https://breizhapp.tech/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://breizhapp.tech/blog/${article.slug}`,
      type: "article",
      publishedTime: article.date,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
  };
}

function ArticleSchema({ article }: { article: NonNullable<ReturnType<typeof getArticle>> }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://breizhapp.tech/blog/${article.slug}#article`,
        headline: article.title,
        description: article.description,
        datePublished: article.date,
        dateModified: article.date,
        mainEntityOfPage: `https://breizhapp.tech/blog/${article.slug}`,
        author: {
          "@type": "Person",
          name: "Enzo Omnes",
          url: "https://breizhapp.tech",
        },
        publisher: { "@id": "https://breizhapp.tech/#business" },
        image: "https://breizhapp.tech/opengraph-image",
        inLanguage: "fr-FR",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://breizhapp.tech" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://breizhapp.tech/blog" },
          { "@type": "ListItem", position: 3, name: article.title, item: `https://breizhapp.tech/blog/${article.slug}` },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const categoryColors: Record<string, string> = {
  Tarifs: "bg-[#FFE234] text-[#0A0A0A]",
  Restaurants: "bg-[#FF6B35] text-white",
  Tech: "bg-[#7C3AED] text-white",
  Conseils: "bg-[#00D4AA] text-[#0A0A0A]",
  Comparatifs: "bg-[#FF3B82] text-white",
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const others = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <ArticleSchema article={article} />
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-20">
        {/* Breadcrumb */}
        <nav className="mono text-sm text-gray-500 mb-10 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-black font-bold truncate">{article.title}</span>
        </nav>

        {/* Article header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`mono text-xs font-bold px-2 py-1 brutal-border ${
                categoryColors[article.category] ?? "bg-white"
              }`}
            >
              {article.category}
            </span>
            <span className="mono text-xs text-gray-400">{article.readTime} de lecture</span>
            <span className="mono text-xs text-gray-400">
              {new Date(article.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{article.title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-[#FFE234] pl-4">
            {article.description}
          </p>
        </header>

        {/* Article body */}
        <div className="flex flex-col gap-8">
          {article.sections.map((section, i) => (
            <section key={i}>
              {section.heading && (
                <h2 className="text-2xl font-bold mb-3">{section.heading}</h2>
              )}
              {section.paragraphs?.map((p, j) => (
                <p key={j} className="text-gray-700 leading-relaxed mb-3">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="flex flex-col gap-2 mt-2">
                  {section.list.map((item, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className="mt-1 w-3 h-3 min-w-[12px] bg-[#FFE234] brutal-border inline-block" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 brutal-border brutal-shadow bg-[#0A0A0A] text-[#FFFBF0] p-8">
          <p className="mono text-xs text-[#FFE234] font-bold mb-2">// développeur freelance · Brest</p>
          <p className="text-2xl font-bold mb-2">Vous avez un projet d'application mobile ?</p>
          <p className="text-gray-400 mb-6">Devis gratuit et sans engagement — je réponds sous 24h.</p>
          <Link
            href="/#contact"
            className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-6 py-3 inline-flex"
          >
            Demander un devis gratuit →
          </Link>
        </div>

        {/* Other articles */}
        {others.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-bold mb-6">À lire aussi</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {others.map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}`}>
                  <div className="brutal-card p-4 h-full">
                    <span
                      className={`mono text-xs font-bold px-2 py-0.5 brutal-border mb-2 inline-block ${
                        categoryColors[a.category] ?? "bg-white"
                      }`}
                    >
                      {a.category}
                    </span>
                    <p className="font-bold leading-snug">{a.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

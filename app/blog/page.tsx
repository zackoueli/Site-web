import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ARTICLES_PER_PAGE = 9;

const sortedArticles = [...articles].sort((a, b) => b.date.localeCompare(a.date));
const totalPages = Math.ceil(sortedArticles.length / ARTICLES_PER_PAGE);

type Props = { searchParams: Promise<{ page?: string }> };

function parsePage(raw: string | undefined): number {
  const n = Number(raw ?? "1");
  return Number.isInteger(n) ? n : NaN;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const page = parsePage((await searchParams).page);
  const suffix = page > 1 ? ` — page ${page}` : "";
  const canonical = page > 1 ? `https://breizhapp.tech/blog?page=${page}` : "https://breizhapp.tech/blog";
  return {
    title: `Blog — Conseils développement application mobile${suffix} | BreizhApp`,
    description:
      "Articles sur la création d'apps mobiles iOS & Android : tarifs, comparatifs techniques, conseils. Par BreizhApp, développeur freelance à Brest.",
    alternates: { canonical },
    openGraph: {
      title: "Blog BreizhApp — Conseils application mobile",
      description:
        "Articles sur la création d'applications mobiles iOS & Android par un développeur freelance à Brest.",
      url: canonical,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
  };
}

const categoryColors: Record<string, string> = {
  Tarifs: "bg-[#FFE234] text-[#0A0A0A]",
  Restaurants: "bg-[#FF6B35] text-white",
  Tech: "bg-[#7C3AED] text-white",
  Conseils: "bg-[#00D4AA] text-[#0A0A0A]",
  Comparatifs: "bg-[#FF3B82] text-white",
  Guides: "bg-[#00D4AA] text-[#0A0A0A]",
  Secteurs: "bg-[#FF6B35] text-white",
  Local: "bg-[#0A0A0A] text-white",
};

const faqItems = [
  {
    q: "Quels sujets sont traités sur ce blog ?",
    a: "Tout ce qui touche à la création d'applications mobiles et de sites web pour les TPE et commerçants : comparatifs techniques (React Native, Flutter, no-code), guides par secteur (restaurants, coiffeurs, artisans, salles de sport…), conseils de publication sur l'App Store et Google Play, et retours d'expérience concrets.",
  },
  {
    q: "Combien coûte une application mobile ou un site web ?",
    a: "Chaque projet est différent : le budget dépend des fonctionnalités, du nombre d'écrans et des intégrations souhaitées. Le plus simple est de demander un devis gratuit et sans engagement — je réponds sous 24h avec une estimation précise.",
  },
  {
    q: "En combien de temps une application mobile est-elle livrée ?",
    a: "Généralement entre 2 et 5 semaines selon les fonctionnalités, publication sur l'App Store et Google Play incluse. Un site web vitrine est livré plus rapidement.",
  },
  {
    q: "Travaillez-vous uniquement en Bretagne ?",
    a: "Je suis basé à Brest et j'interviens dans toute la France : les échanges se font par visio, téléphone ou email, et la livraison est entièrement à distance.",
  },
  {
    q: "Quelle technologie utilisez-vous pour les applications mobiles ?",
    a: "React Native : une seule base de code pour iOS et Android, ce qui réduit les délais et simplifie la maintenance, avec des performances très proches du natif.",
  },
  {
    q: "Comment obtenir un devis pour mon projet ?",
    a: "Via le formulaire de contact du site, même si votre idée est encore floue. Le devis est gratuit, sans engagement, et vous recevez une réponse sous 24h.",
  },
];

function BlogSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://breizhapp.tech/blog#blog",
        name: "Blog BreizhApp",
        description: "Conseils sur la création d'applications mobiles iOS & Android : tarifs, comparatifs techniques, guides pratiques.",
        url: "https://breizhapp.tech/blog",
        publisher: { "@id": "https://breizhapp.tech/#business" },
        inLanguage: "fr-FR",
        blogPost: articles.map((a) => ({
          "@type": "BlogPosting",
          headline: a.title,
          description: a.description,
          url: `https://breizhapp.tech/blog/${a.slug}`,
          datePublished: a.date,
          dateModified: a.lastModified ?? a.date,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://breizhapp.tech" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://breizhapp.tech/blog" },
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

function pageHref(page: number) {
  return page <= 1 ? "/blog" : `/blog?page=${page}`;
}

function Pagination({ current }: { current: number }) {
  if (totalPages <= 1) return null;
  return (
    <nav aria-label="Pagination des articles" className="mt-16">
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {current > 1 ? (
          <Link href={pageHref(current - 1)} className="brutal-btn bg-white px-4 py-2 text-sm font-bold">
            ← Précédent
          </Link>
        ) : (
          <span className="brutal-border bg-gray-100 text-gray-400 px-4 py-2 text-sm font-bold cursor-not-allowed">
            ← Précédent
          </span>
        )}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) =>
          n === current ? (
            <span
              key={n}
              aria-current="page"
              className="brutal-border bg-[#FF6B35] text-white w-10 h-10 flex items-center justify-center text-sm font-bold"
            >
              {n}
            </span>
          ) : (
            <Link
              key={n}
              href={pageHref(n)}
              className="brutal-btn bg-white w-10 h-10 flex items-center justify-center text-sm font-bold"
            >
              {n}
            </Link>
          )
        )}
        {current < totalPages ? (
          <Link href={pageHref(current + 1)} className="brutal-btn bg-white px-4 py-2 text-sm font-bold">
            Suivant →
          </Link>
        ) : (
          <span className="brutal-border bg-gray-100 text-gray-400 px-4 py-2 text-sm font-bold cursor-not-allowed">
            Suivant →
          </span>
        )}
      </div>
      <p className="mono text-xs text-gray-400 text-center mt-4">
        Page {current} sur {totalPages} — {sortedArticles.length} articles
      </p>
    </nav>
  );
}

export default async function BlogPage({ searchParams }: Props) {
  const page = parsePage((await searchParams).page);
  if (!Number.isInteger(page) || page < 1 || page > totalPages) notFound();

  const pageArticles = sortedArticles.slice(
    (page - 1) * ARTICLES_PER_PAGE,
    page * ARTICLES_PER_PAGE
  );

  return (
    <>
      <BlogSchema />
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pageArticles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`}>
              <article className="brutal-card h-full flex flex-col cursor-pointer overflow-hidden">
                {article.image && (
                  <img
                    src={article.image.src}
                    alt={article.image.alt}
                    className="w-full h-44 object-cover border-b-2 border-black"
                    loading="lazy"
                  />
                )}
                <div className="p-6 flex flex-col gap-4 flex-1">
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
                    <h2 className="text-lg font-bold leading-snug mb-2">{article.title}</h2>
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
                </div>
              </article>
            </Link>
          ))}
        </div>

        <Pagination current={page} />

        {/* FAQ */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="bg-[#FFE234] brutal-border px-2 py-0.5 text-xl mono">FAQ</span>
            <span>Questions fréquentes</span>
          </h2>
          <dl className="flex flex-col gap-3">
            {faqItems.map((item) => (
              <div key={item.q} className="brutal-border bg-white p-5">
                <dt className="font-bold mb-1">{item.q}</dt>
                <dd className="text-gray-700 text-sm leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* CTA */}
        <div className="mt-20 brutal-border brutal-shadow bg-[#FFE234] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-bold text-xl">Vous avez un projet d'application mobile ?</p>
            <p className="text-gray-700">Devis gratuit, réponse sous 24h.</p>
          </div>
          <a
            href="/#contact"
            className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3 whitespace-nowrap"
          >
            Démarrer mon projet →
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}

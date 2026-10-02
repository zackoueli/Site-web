import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticle, getArticlesForService, type Article } from "@/lib/blog";
import { resolveTaxonomySlug } from "@/lib/taxonomy";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import BlogServiceShowcase from "@/components/BlogServiceShowcase";
import ArticleToc from "@/components/ArticleToc";

/** Ancre d'une section, dérivée de son titre (utilisée par le sommaire). */
function headingId(heading: string) {
  return heading
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Liens internes écrits « [texte](/chemin) » dans le texte des articles (lib/blog.ts). */
const INLINE_LINK = /\[([^\]]+)\]\(((?:\/|#)[^)\s]*)\)/g;

/** Rend un texte d'article en remplaçant ses liens internes par des liens cliquables. */
function renderInline(text: string): React.ReactNode {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(INLINE_LINK)) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const className = "font-semibold text-[#0A0A0A] underline decoration-2 underline-offset-2 hover:text-[#7C3AED] transition-colors";
    nodes.push(
      m[2].startsWith("#") ? (
        <a key={m.index} href={m[2]} className={className}>{m[1]}</a>
      ) : (
        <Link key={m.index} href={m[2]} className={className}>{m[1]}</Link>
      )
    );
    last = m.index + m[0].length;
  }
  if (nodes.length === 0) return text;
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/** Version texte brut (sans liens), pour les données structurées. */
function stripInlineLinks(text: string) {
  return text.replace(INLINE_LINK, "$1");
}

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
  // Detect FAQ section (heading starts with "FAQ") and build FAQPage entity
  const faqSection = article.sections.find(
    (s) => s.heading?.startsWith("FAQ") && s.list && s.list.length > 0
  );
  const faqEntity = faqSection?.list
    ? {
        "@type": "FAQPage",
        mainEntity: faqSection.list.map((raw) => {
          const item = stripInlineLinks(raw);
          const sep = item.indexOf(" ? ");
          const q = sep !== -1 ? item.slice(0, sep + 2).trim() : item.split(":")[0].trim();
          const a = sep !== -1 ? item.slice(sep + 3).trim() : item.slice(item.indexOf(":") + 1).trim();
          return {
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          };
        }),
      }
    : null;

  const graph: object[] = [
    {
      "@type": "BlogPosting",
      "@id": `https://breizhapp.tech/blog/${article.slug}#article`,
      headline: article.title,
      description: article.description,
      datePublished: article.date,
      dateModified: article.lastModified ?? article.date,
      mainEntityOfPage: `https://breizhapp.tech/blog/${article.slug}`,
      author: {
        "@type": "Person",
        name: "Enzo Omnes",
        url: "https://breizhapp.tech",
      },
      publisher: { "@id": "https://breizhapp.tech/#business" },
      image: article.image?.src ?? "https://breizhapp.tech/opengraph-image",
      inLanguage: "fr-FR",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: buildBreadcrumbItems(article),
    },
  ];
  if (faqEntity) graph.push(faqEntity);

  const schema = { "@context": "https://schema.org", "@graph": graph };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function buildBreadcrumbItems(article: Article) {
  const taxon = resolveTaxonomySlug(article.service);
  const items = [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://breizhapp.tech" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://breizhapp.tech/blog" },
  ];
  if (taxon) {
    items.push({
      "@type": "ListItem",
      position: 3,
      name: taxon.label,
      item: `https://breizhapp.tech${taxon.href}`,
    });
  }
  items.push({
    "@type": "ListItem",
    position: items.length + 1,
    name: article.title,
    item: `https://breizhapp.tech/blog/${article.slug}`,
  });
  return items;
}

function MidArticleCTA({ article }: { article: Article }) {
  const taxon = resolveTaxonomySlug(article.service);
  const pool = getArticlesForService(article.service).filter((a) => a.slug !== article.slug);
  // Rotation déterministe par article : chaque article lie des voisins différents,
  // ce qui distribue le maillage interne sur tout le pool du service
  const hash = article.slug.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const offset = pool.length ? hash % pool.length : 0;
  const relatedArticles = [...pool.slice(offset), ...pool.slice(0, offset)].slice(0, 3);

  const links = relatedArticles.map((a) => ({ label: a.title, href: `/blog/${a.slug}` }));

  if (!taxon && links.length === 0) return null;

  return (
    <>
      {taxon && <BlogServiceShowcase service={article.service} />}
      {links.length > 0 && (
        <div className="my-2 brutal-border border-l-4 border-[#FFE234] bg-[#FFFBF0] p-4">
          <p className="mono text-xs font-bold text-gray-500 mb-2">{"// articles liés"}</p>
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm font-semibold text-[#0A0A0A] hover:text-[#7C3AED] transition-colors underline underline-offset-2">
                  → {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
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

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  // Deterministic shuffle based on slug hash so each article gets a unique rotation
  const taxon = resolveTaxonomySlug(article.service);

  const slugHash = slug.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const rotate = <T,>(arr: T[], n: number): T[] => {
    const offset = n % arr.length;
    return [...arr.slice(offset), ...arr.slice(0, offset)];
  };

  const sameCategory = rotate(
    articles.filter((a) => a.slug !== slug && a.category === article.category),
    slugHash
  );
  const different = rotate(
    articles.filter((a) => a.slug !== slug && a.category !== article.category),
    slugHash + 3
  );

  // Take 2 from same category + 2 from different ones for better cross-linking
  const others = [
    ...sameCategory.slice(0, 2),
    ...different.slice(0, 2),
  ].slice(0, 4);

  const toc = article.sections
    .filter((s) => s.heading)
    .map((s) => ({ id: headingId(s.heading!), label: s.heading!.replace(/^FAQ\s*[—:]?\s*/i, "FAQ : ") }));

  return (
    <>
      <ArticleSchema article={article} />
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-16 lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
        <aside>
            <div className="lg:sticky lg:top-28 flex flex-col gap-8">
              <ArticleToc items={toc} />
              <div className="hidden lg:block brutal-border brutal-shadow bg-[#0A0A0A] text-[#FFFBF0] p-5">
                <p className="text-lg font-bold leading-snug mb-2">Un projet ?</p>
                <p className="text-sm text-gray-400 mb-4">Devis gratuit et sans engagement, réponse sous 24h.</p>
                <a href="#contact" className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-4 py-2 text-sm font-bold inline-flex">
                  Demander un devis →
                </a>
              </div>
            </div>
        </aside>
        <div className="min-w-0">
        {/* Breadcrumb */}
        <nav className="mono text-sm text-gray-500 mb-10 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
          {taxon && (
            <>
              <span>/</span>
              <Link href={taxon.href} className="hover:text-black transition-colors">{taxon.label}</Link>
            </>
          )}
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
            <span className="mono text-xs text-gray-400">
              {article.lastModified && article.lastModified !== article.date ? (
                <>Mis à jour le {new Date(article.lastModified).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</>
              ) : (
                new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })
              )}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{article.title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-[#FFE234] pl-4">
            {article.description}
          </p>
        </header>

        {/* Image d'illustration */}
        {article.image && (
          <figure className="mb-12">
            <img
              src={article.image.src}
              alt={article.image.alt}
              className="brutal-border brutal-shadow w-full max-h-96 object-cover rounded-sm"
              loading="eager"
            />
            {article.image.credit && (
              <figcaption className="mt-2 text-xs text-gray-400 mono text-right">
                {article.image.credit}
              </figcaption>
            )}
          </figure>
        )}

        {/* Mockup PC — articles site web / comparatifs plateformes */}
        {[
          "cout-reel-site-wix",
          "cout-reel-site-shopify",
          "cout-reel-planity",
          "squarespace-tarif-prix",
          "comparatif-createurs-site-web-prix",
          "tarif-creation-site-internet",
          "shopify-wix-vs-application-mobile-sur-mesure",
          "combien-coute-site-web-sur-mesure",
          "wordpress-vs-sur-mesure",
          "no-code-vs-developpeur",
          "site-web-artisan-sur-mesure",
          "creation-site-web-brest",
          "application-mobile-coiffeur",
        ].includes(article.slug) && (
          <div className="mb-12">
            <div className="mb-4">
              <p className="mono text-xs font-bold text-[#FF6B9D] mb-1">// alternative à Wix</p>
              <h2 className="text-xl font-bold mb-1">
                Un site pro fait sur mesure,{" "}
                <span className="bg-[#FFE234] brutal-border px-1">sans abonnement qui grimpe</span>
              </h2>
              <p className="text-sm text-gray-600">
                Voici un vrai site réalisé par BreizhApp pour un salon de coiffure. Vous possédez votre site, votre code, votre domaine. Naviguez librement.
              </p>
            </div>
            <div className="brutal-border brutal-shadow bg-[#1a1a1a] rounded-t-xl p-3 pb-0">
              <div className="bg-[#2d2d2d] rounded-t-lg px-4 py-2 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 bg-[#3d3d3d] rounded px-3 py-1 mono text-xs text-gray-400 truncate">
                  coiffeur.breizhapp.tech
                </div>
              </div>
              <div className="w-full overflow-hidden" style={{ height: "580px" }}>
                <iframe
                  src="https://coiffeur.breizhapp.tech/"
                  title="Exemple de site web BreizhApp, salon de coiffure"
                  className="w-full h-full border-0 block"
                  loading="eager"
                />
              </div>
            </div>
            <div className="brutal-border border-t-0 bg-[#1a1a1a] h-4 rounded-b-sm" />
            <div className="brutal-border border-t-0 bg-[#2d2d2d] h-3 mx-8 rounded-b-md" />
            <div className="brutal-border border-t-0 bg-[#3d3d3d] h-2 mx-16 rounded-b-lg" />
          </div>
        )}

        {/* Mockup PC — articles restaurant / pizzeria */}
        {[
          "application-mobile-restaurant",
          "site-web-restaurant-brest",
          "creation-site-pizzeria-brest",
        ].includes(article.slug) && (
          <div className="mb-12">
            <div className="mb-4">
              <p className="mono text-xs font-bold text-[#FF6B35] mb-1">// exemple concret</p>
              <h2 className="text-xl font-bold mb-1">
                Une vraie app restaurant{" "}
                <span className="bg-[#FFE234] brutal-border px-1">faite avec BreizhApp</span>
              </h2>
              <p className="text-sm text-gray-600">
                Naviguez librement dans la démo, c&apos;est l&apos;application réelle. Commande, menu, paiement.
              </p>
            </div>
            <div className="brutal-border brutal-shadow bg-[#1a1a1a] rounded-t-xl p-3 pb-0">
              <div className="bg-[#2d2d2d] rounded-t-lg px-4 py-2 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 bg-[#3d3d3d] rounded px-3 py-1 mono text-xs text-gray-400 truncate">
                  demo.pizzeria.breizhapp.tech
                </div>
              </div>
              <div className="w-full overflow-hidden" style={{ height: "580px" }}>
                <iframe
                  src="https://demo.pizzeria.breizhapp.tech/"
                  title="Démo application restaurant BreizhApp"
                  className="w-full h-full border-0 block"
                  loading="eager"
                />
              </div>
            </div>
            <div className="brutal-border border-t-0 bg-[#1a1a1a] h-4 rounded-b-sm" />
            <div className="brutal-border border-t-0 bg-[#2d2d2d] h-3 mx-8 rounded-b-md" />
            <div className="brutal-border border-t-0 bg-[#3d3d3d] h-2 mx-16 rounded-b-lg" />
          </div>
        )}

        {/* Article body */}
        <div className="flex flex-col gap-8">
          {article.sections.map((section, i) => {
            const isFaq = section.heading?.startsWith("FAQ");
            return (
              <>
                <section key={i} id={section.heading ? headingId(section.heading) : undefined} className="scroll-mt-28">
                  {section.heading && (
                    isFaq ? (
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <span className="bg-[#FFE234] brutal-border px-2 py-0.5 text-base mono">FAQ</span>
                        <span>{section.heading.replace(/^FAQ\s*[—:]?\s*/i, "")}</span>
                      </h2>
                    ) : (
                      <h2 className="text-3xl font-bold mb-5 leading-tight">{section.heading}</h2>
                    )
                  )}
                  {section.paragraphs?.map((p, j) => (
                    <p key={j} className="text-[17px] text-gray-800 leading-8 mb-5">
                      {renderInline(p)}
                    </p>
                  ))}
                  {section.subsections?.map((sub) => (
                    <div key={sub.heading} className="mt-6">
                      <h3 className="text-xl font-bold mb-3">{sub.heading}</h3>
                      {sub.paragraphs.map((p, j) => (
                        <p key={j} className="text-[17px] text-gray-800 leading-8 mb-4">
                          {renderInline(p)}
                        </p>
                      ))}
                      {sub.image && (
                        <figure className="my-6 max-w-md mx-auto">
                          <img
                            src={sub.image.src}
                            alt={sub.image.alt}
                            className="brutal-border brutal-shadow w-full rounded-sm"
                            loading="lazy"
                          />
                          {sub.image.caption && (
                            <figcaption className="mt-2 text-xs text-gray-500 mono text-center">
                              {sub.image.caption}
                            </figcaption>
                          )}
                        </figure>
                      )}
                    </div>
                  ))}
                  {section.table && (
                    <div className="my-6 brutal-border bg-white overflow-x-auto">
                      <table className="w-full text-left text-[15px]">
                        <thead className="bg-[#0A0A0A] text-[#FFFBF0]">
                          <tr>
                            {section.table.head.map((h) => (
                              <th key={h} className="px-4 py-3 font-bold">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, r) => (
                            <tr key={r} className={r % 2 ? "bg-[#FFFBF0]" : "bg-white"}>
                              {row.map((cell, c) => (
                                <td key={c} className={`px-4 py-3 border-t border-gray-200 align-top ${c === 0 ? "font-semibold" : "text-gray-700"}`}>
                                  {renderInline(cell)}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {section.callout && (
                    <div className="my-6 border-l-4 border-[#FF6B35] bg-[#FFF1E8] p-5">
                      {section.callout.title && <p className="font-bold mb-1">⚠️ {section.callout.title}</p>}
                      <p className="text-gray-800 leading-relaxed">{renderInline(section.callout.text)}</p>
                    </div>
                  )}
                  {section.image && (
                    <figure className="my-6">
                      <img
                        src={section.image.src}
                        alt={section.image.alt}
                        className="brutal-border brutal-shadow w-full rounded-sm"
                        loading="lazy"
                      />
                      {section.image.caption && (
                        <figcaption className="mt-2 text-xs text-gray-500 mono text-center">
                          {section.image.caption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                  {section.list && (
                    isFaq ? (
                      <dl className="flex flex-col gap-3 mt-2">
                        {section.list.map((item, j) => {
                          const sep = item.indexOf(" ? ");
                          const q = sep !== -1 ? item.slice(0, sep + 2) : item.split(":")[0];
                          const a = sep !== -1 ? item.slice(sep + 3) : item.slice(item.indexOf(":") + 1).trim();
                          return (
                            <div key={j} className="brutal-border bg-white p-4">
                              <dt className="font-bold text-sm mb-1">{q}</dt>
                              <dd className="text-gray-700 text-sm leading-relaxed">{renderInline(a)}</dd>
                            </div>
                          );
                        })}
                      </dl>
                    ) : (
                      <ul className="flex flex-col gap-2 mt-2">
                        {section.list.map((item, j) => (
                          <li key={j} className="flex gap-3 items-start">
                            <span className="mt-1 w-3 h-3 min-w-[12px] bg-[#FFE234] brutal-border inline-block" />
                            <span className="text-gray-700 leading-relaxed">{renderInline(item)}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                </section>
                {i === 1 && <MidArticleCTA article={article} />}
              </>
            );
          })}
        </div>

        {/* Article Planity : renvoie les gérants de salon vers l'offre coiffeur */}
        {article.slug === "cout-reel-planity" && (
          <div className="mt-12 brutal-border brutal-shadow bg-[#FFE234] p-6">
            <p className="mono text-xs font-bold text-[#0A0A0A]/60 mb-2">// vous gérez un salon ?</p>
            <p className="font-bold text-2xl mb-2">L&apos;application de votre salon, à votre nom</p>
            <p className="text-[#0A0A0A]/80 mb-5">
              Réservation 24h/24, rappels anti no-show, fidélité et panel admin. Vos clientes réservent chez vous, pas sur un annuaire partagé avec vos concurrents.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/services/secteur/coiffeur"
                className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-5 py-3 text-sm font-bold"
              >
                Voir l&apos;offre salon de coiffure →
              </Link>
              <Link
                href="/blog/application-mobile-coiffeur"
                className="brutal-btn bg-white text-[#0A0A0A] px-5 py-3 text-sm font-bold"
              >
                Les fonctionnalités d&apos;une app coiffeur →
              </Link>
              <Link
                href="/blog/panel-admin-salon-coiffure"
                className="brutal-btn bg-white text-[#0A0A0A] px-5 py-3 text-sm font-bold"
              >
                Le panel admin salon →
              </Link>
            </div>
          </div>
        )}

        {/* Liens niches — article panel admin généraliste */}
        {article.slug === "panel-admin-site-web-application-mobile" && (
          <div className="mt-12 brutal-border bg-[#FFFBF0] p-6">
            <p className="mono text-xs font-bold text-gray-400 mb-4">// voir par secteur</p>
            <p className="font-bold text-lg mb-4">Découvrez le panel admin de votre secteur</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/blog/panel-admin-salon-coiffure"
                className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-5 py-3 text-sm font-bold"
              >
                Panel admin coiffeur →
              </Link>
              <Link
                href="/blog/panel-admin-restaurant-pizzeria"
                className="brutal-btn bg-[#FF6B35] text-white px-5 py-3 text-sm font-bold"
              >
                Panel admin restaurant →
              </Link>
              <Link
                href="/blog/panel-admin-boutique-ecommerce"
                className="brutal-btn bg-[#FF6B9D] text-white px-5 py-3 text-sm font-bold"
              >
                Panel admin boutique →
              </Link>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 brutal-border brutal-shadow bg-[#0A0A0A] text-[#FFFBF0] p-8">
          <p className="mono text-xs text-[#FFE234] font-bold mb-2">// développeur freelance · Brest</p>
          <p className="text-2xl font-bold mb-2">Vous avez un projet ?</p>
          <p className="text-gray-400 mb-6">Devis gratuit et sans engagement, je réponds sous 24h.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-6 py-3 inline-flex justify-center">
              Demander un devis gratuit →
            </a>
            {taxon && (
              <Link href={taxon.href} className="brutal-btn bg-white text-[#0A0A0A] px-6 py-3 inline-flex justify-center">
                Voir l&apos;offre {taxon.label} →
              </Link>
            )}
          </div>
        </div>

        {/* Other articles */}
        {others.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-bold mb-6">À lire aussi</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {others.map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}`}>
                  <div className="brutal-card h-full overflow-hidden">
                    {a.image && (
                      <img
                        src={a.image.src}
                        alt={a.image.alt}
                        className="w-full h-36 object-cover border-b-2 border-black"
                        loading="lazy"
                      />
                    )}
                    <div className="p-4">
                    <span
                      className={`mono text-xs font-bold px-2 py-0.5 brutal-border mb-2 inline-block ${
                        categoryColors[a.category] ?? "bg-white"
                      }`}
                    >
                      {a.category}
                    </span>
                    <p className="font-bold leading-snug">{a.title}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}

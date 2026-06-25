import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticle, type Article } from "@/lib/blog";
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
  // Detect FAQ section (heading starts with "FAQ") and build FAQPage entity
  const faqSection = article.sections.find(
    (s) => s.heading?.startsWith("FAQ") && s.list && s.list.length > 0
  );
  const faqEntity = faqSection?.list
    ? {
        "@type": "FAQPage",
        mainEntity: faqSection.list.map((item) => {
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

const serviceLinks: Record<string, { label: string; href: string }[]> = {
  Restaurants: [
    { label: "App mobile pour restaurant", href: "/services/secteur/restaurant" },
    { label: "App restaurant Bretagne", href: "/blog/application-mobile-restaurant-bretagne" },
    { label: "Site web restaurant Brest", href: "/blog/site-web-restaurant-brest" },
    { label: "Créer un site pizzeria à Brest", href: "/blog/creation-site-pizzeria-brest" },
  ],
  Tarifs: [
    { label: "Combien coûte une app mobile ?", href: "/blog/combien-coute-application-mobile" },
    { label: "App mobile pas chère dès 490€", href: "/blog/application-mobile-pas-chere" },
    { label: "Coût maintenance app mobile", href: "/blog/cout-maintenance-application-mobile" },
    { label: "Nos services application mobile", href: "/services/application-mobile" },
  ],
  Comparatifs: [
    { label: "Freelance vs Agence", href: "/blog/developpeur-freelance-vs-agence" },
    { label: "No-code vs Développeur", href: "/blog/no-code-vs-developpeur" },
    { label: "PWA vs application native", href: "/blog/progressive-web-app-vs-application-native" },
    { label: "React Native vs Flutter", href: "/blog/react-native-vs-flutter" },
  ],
  Tech: [
    { label: "React Native vs Flutter", href: "/blog/react-native-vs-flutter" },
    { label: "PWA vs application native", href: "/blog/progressive-web-app-vs-application-native" },
    { label: "Créer une app sans coder", href: "/blog/creer-application-mobile-sans-coder" },
    { label: "No-code vs Développeur", href: "/blog/no-code-vs-developpeur" },
  ],
  Conseils: [
    { label: "Fidéliser ses clients avec une app", href: "/blog/comment-fideliser-clients-application-mobile" },
    { label: "App fidélité clients", href: "/blog/application-mobile-fidelite-clients" },
    { label: "Faire développer une app mobile", href: "/blog/faire-developper-application-mobile" },
    { label: "J'ai une idée d'app mobile", href: "/blog/j-ai-une-idee-d-application-mobile" },
  ],
  Guides: [
    { label: "Je veux créer une app mobile", href: "/blog/je-veux-creer-une-application-mobile" },
    { label: "J'ai une idée d'app mobile", href: "/blog/j-ai-une-idee-d-application-mobile" },
    { label: "Faire développer une app mobile", href: "/blog/faire-developper-application-mobile" },
    { label: "Combien coûte une app mobile ?", href: "/blog/combien-coute-application-mobile" },
  ],
  Secteurs: [
    { label: "App mobile pour coiffeur", href: "/services/secteur/coiffeur" },
    { label: "App mobile pour restaurant", href: "/services/secteur/restaurant" },
    { label: "App mobile salle de sport", href: "/services/secteur/salle-de-sport" },
    { label: "App mobile pour hôtel", href: "/services/secteur/hotel" },
  ],
  Local: [
    { label: "Développeur freelance à Brest", href: "/blog/developpeur-freelance-application-mobile-brest" },
    { label: "Développeur freelance à Quimper", href: "/blog/developpeur-freelance-quimper" },
    { label: "Développeur freelance à Rennes", href: "/blog/developpeur-freelance-rennes" },
    { label: "App mobile en Bretagne", href: "/blog/developpeur-application-mobile-bretagne" },
  ],
};

function MidArticleCTA({ article }: { article: Article }) {
  const links = serviceLinks[article.category] ?? serviceLinks.Conseils;
  return (
    <div className="my-2 brutal-border border-l-4 border-[#FFE234] bg-[#FFFBF0] p-4">
      <p className="mono text-xs font-bold text-gray-500 mb-2">// articles liés</p>
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

        {/* Mockup PC — articles site web / comparatifs plateformes */}
        {[
          "cout-reel-site-wix",
          "cout-reel-site-shopify",
          "cout-reel-planity",
          "planity-tarif-prix-abonnement-2025",
          "wix-tarif-prix-abonnement-2025",
          "shopify-tarif-prix-abonnement-2025",
          "squarespace-tarif-prix-2025",
          "comparatif-createurs-site-web-prix-2025",
          "tarif-creation-site-internet-2025",
          "shopify-wix-vs-application-mobile-sur-mesure",
          "combien-coute-site-web-sur-mesure",
          "wordpress-vs-sur-mesure",
          "no-code-vs-developpeur",
          "site-web-artisan-sur-mesure",
          "creation-site-web-brest",
          "application-mobile-coiffeur-salon",
        ].includes(article.slug) && (
          <div className="mb-12 -mx-4 sm:-mx-8 md:-mx-16 lg:-mx-32 xl:-mx-48">
            <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 mb-4">
              <p className="mono text-xs font-bold text-[#FF6B9D] mb-1">// alternative à Wix</p>
              <h2 className="text-xl font-bold mb-1">
                Un site pro fait sur mesure —{" "}
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
                  title="Exemple de site web BreizhApp — salon de coiffure"
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
          "application-mobile-restaurant-bretagne",
          "site-web-restaurant-brest",
          "creation-site-pizzeria-brest",
        ].includes(article.slug) && (
          <div className="mb-12 -mx-4 sm:-mx-8 md:-mx-16 lg:-mx-32 xl:-mx-48">
            <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 mb-4">
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
                <section key={i}>
                  {section.heading && (
                    isFaq ? (
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <span className="bg-[#FFE234] brutal-border px-2 py-0.5 text-base mono">FAQ</span>
                        <span>{section.heading.replace(/^FAQ\s*—?\s*/i, "")}</span>
                      </h2>
                    ) : (
                      <h2 className="text-2xl font-bold mb-3">{section.heading}</h2>
                    )
                  )}
                  {section.paragraphs?.map((p, j) => (
                    <p key={j} className="text-gray-700 leading-relaxed mb-3">
                      {p}
                    </p>
                  ))}
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
                              <dd className="text-gray-700 text-sm leading-relaxed">{a}</dd>
                            </div>
                          );
                        })}
                      </dl>
                    ) : (
                      <ul className="flex flex-col gap-2 mt-2">
                        {section.list.map((item, j) => (
                          <li key={j} className="flex gap-3 items-start">
                            <span className="mt-1 w-3 h-3 min-w-[12px] bg-[#FFE234] brutal-border inline-block" />
                            <span className="text-gray-700 leading-relaxed">{item}</span>
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

        {/* CTA */}
        <div className="mt-16 brutal-border brutal-shadow bg-[#0A0A0A] text-[#FFFBF0] p-8">
          <p className="mono text-xs text-[#FFE234] font-bold mb-2">// développeur freelance · Brest</p>
          <p className="text-2xl font-bold mb-2">Vous avez un projet d'application mobile ?</p>
          <p className="text-gray-400 mb-6">Devis gratuit et sans engagement — je réponds sous 24h.</p>
          <a
            href="/#contact"
            className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-6 py-3 inline-flex"
          >
            Demander un devis gratuit →
          </a>
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

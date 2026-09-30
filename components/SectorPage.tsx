import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedArticles from "@/components/RelatedArticles";
import Contact from "@/components/Contact";
import FAQItem from "@/components/FAQItem";
import { CheckCircle2, ArrowRight } from "lucide-react";

/**
 * Gabarit commun des pages /services/secteur/<slug> :
 * fil d'Ariane, hero avec visuel à droite, En bref, sections de cartes,
 * « site, app ou les deux », méthode, FAQ en accordéon, CTA.
 * Chaque page ne fournit que son contenu.
 */

export type Card = { title: string; desc: string; emoji?: string };

export type Section = {
  title: string;
  /** Partie du titre surlignée en jaune (sections claires uniquement). */
  highlight?: string;
  intro?: string;
  items: Card[];
  dark?: boolean;
  cols?: 2 | 3;
  /** Coche de couleur devant chaque carte. */
  check?: boolean;
};

export type SectorPageProps = {
  slug: string;
  color: string;
  /** Couleur de l'icône sur la pastille (blanc sur fond foncé). */
  iconClass?: string;
  icon: LucideIcon;
  breadcrumb: string;
  h1: string;
  subtitle: string;
  intro: string;
  guide?: { href: string; label: string };
  visual: ReactNode;
  enBref: string;
  stats: { label: string; value: string }[];
  sections: Section[];
  choices?: Card[];
  steps: Card[];
  faq: { q: string; a: string }[];
  faqTitle: string;
  ctaTitle: string;
  serviceName: string;
  serviceDescription: string;
};

function Title({ title, highlight, dark }: { title: string; highlight?: string; dark?: boolean }) {
  if (dark || !highlight || !title.includes(highlight)) {
    return <>{title}</>;
  }
  const [before, after] = title.split(highlight);
  return (
    <>
      {before}
      <span className="bg-[#FFE234] px-2 brutal-border">{highlight}</span>
      {after}
    </>
  );
}

function CardsSection({ section, color }: { section: Section; color: string }) {
  const { title, highlight, intro, items, dark, cols = 2, check } = section;
  const grid = cols === 3 ? "grid sm:grid-cols-2 md:grid-cols-3 gap-4" : "grid sm:grid-cols-2 gap-4";
  return (
    <section className={`py-16 px-4 ${dark ? "bg-[#0A0A0A]" : ""}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-2xl font-bold mb-2 ${dark ? "text-[#FFE234]" : ""}`}>
          <Title title={title} highlight={highlight} dark={dark} />
        </h2>
        {intro && <p className={`mb-8 max-w-2xl ${dark ? "text-gray-400" : "text-gray-600"}`}>{intro}</p>}
        {!intro && <div className="mb-6" />}
        <div className={grid}>
          {items.map(({ title: t, desc, emoji }) =>
            dark ? (
              <div key={t} className="border-2 border-gray-800 p-5 transition-colors hover:border-[#FFE234]">
                {emoji && <div className="text-3xl mb-3">{emoji}</div>}
                {check && <CheckCircle2 size={18} className="mb-3" style={{ color }} />}
                <h3 className="font-bold text-[#FFFBF0] mb-1">{t}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ) : (
              <div key={t} className="brutal-border bg-white p-5">
                {emoji && <div className="text-3xl mb-3">{emoji}</div>}
                {check && <CheckCircle2 size={18} className="mb-3" style={{ color }} />}
                <h3 className="font-bold mb-1">{t}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default function SectorPage(p: SectorPageProps) {
  const url = `https://breizhapp.tech/services/secteur/${p.slug}`;
  const Icon = p.icon;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: p.serviceName,
        description: p.serviceDescription,
        provider: { "@id": "https://breizhapp.tech/#business" },
        areaServed: [
          { "@type": "City", name: "Brest" },
          { "@type": "AdministrativeArea", name: "Bretagne" },
          { "@type": "Country", name: "France" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://breizhapp.tech" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://breizhapp.tech/services/application-mobile" },
          { "@type": "ListItem", position: 3, name: p.breadcrumb, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: p.faq.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        {/* Breadcrumb */}
        <nav className="max-w-6xl mx-auto px-4 pt-6 mono text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/services/application-mobile" className="hover:text-black transition-colors">Services</Link>
          <span>/</span>
          <span className="text-black font-bold">{p.breadcrumb}</span>
        </nav>

        {/* Hero */}
        <section className="border-b-[3px] border-black py-12 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[3fr_2fr] gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="brutal-border p-3 shrink-0" style={{ backgroundColor: p.color }}>
                  <Icon size={32} className={p.iconClass ?? "text-white"} />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">{p.h1}</h1>
                  <p className="text-xl font-bold text-gray-500 mt-1">{p.subtitle}</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">{p.intro}</p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">
                  Demander un devis gratuit
                </a>
                {p.guide ? (
                  <Link href={p.guide.href} className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-8 py-4">
                    {p.guide.label} →
                  </Link>
                ) : (
                  <Link href="/portfolio" className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-8 py-4">
                    Voir les réalisations →
                  </Link>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">{p.visual}</div>
          </div>
        </section>

        {/* En bref */}
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[2fr_1fr] gap-10">
            <div className="border-l-4 border-[#FFE234] pl-6">
              <p className="mono text-sm font-bold text-[#FFE234] mb-4">EN BREF</p>
              <p className="text-gray-300 leading-relaxed">{p.enBref}</p>
            </div>
            <div className="flex flex-col gap-6">
              {p.stats.map(({ label, value }) => (
                <div key={label} className="border-t border-gray-800 pt-4">
                  <p className="mono text-xs font-bold text-gray-500 uppercase mb-1">{label}</p>
                  <p className="text-xl font-bold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {p.sections.map((s) => (
          <CardsSection key={s.title} section={s} color={p.color} />
        ))}

        {/* Site, app ou les deux */}
        {p.choices && (
          <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px] border-b-[3px]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-2">Site web, <span className="bg-[#FFE234] px-2 brutal-border">application</span> ou les deux ?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl">Je vous conseille la formule utile pour votre activité, pas la plus chère.</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {p.choices.map(({ title, desc }) => (
                  <div key={title} className="brutal-border brutal-shadow bg-white p-5">
                    <h3 className="font-bold mb-2">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Méthode */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Comment <span className="bg-[#FFE234] px-2 brutal-border">ça se passe</span></h2>
            <p className="text-gray-600 mb-8 max-w-2xl">Du premier échange à la mise en ligne, en 4 étapes et sans intermédiaire.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {p.steps.map(({ title, desc }, i) => (
                <div key={title} className="brutal-border bg-white p-5">
                  <p className="mono text-xs font-bold text-gray-400 mb-2">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">{p.faqTitle}</h2>
            <div className="flex flex-col gap-3">
              {p.faq.map(({ q, a }) => (
                <FAQItem key={q} q={q} a={a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto brutal-border brutal-shadow bg-[#FFE234] p-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">{p.ctaTitle}</h2>
              <p className="text-sm mt-1">Devis gratuit · Réponse sous 24h · Basé à Brest</p>
            </div>
            <a href="#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3 inline-flex items-center gap-2">
              Demander un devis <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <RelatedArticles service={p.slug} />

        <Contact />

      </main>
      <Footer />
    </>
  );
}

/** Aperçu d'écran dessiné (quand aucune vraie démo n'existe pour le secteur). */
export function MockScreen({
  kicker,
  title,
  accent,
  rows,
  footer,
}: {
  kicker: string;
  title: string;
  accent: string;
  rows: { top: string; main: string; badge: string; muted?: boolean }[];
  footer?: { kicker: string; text: string };
}) {
  return (
    <>
      <div className="w-[280px] rounded-[40px] border-[3px] border-black bg-[#111] p-2.5 shadow-[6px_6px_0_#0A0A0A]">
        <div className="rounded-[32px] bg-[#FFFBF0] overflow-hidden">
          <div className="bg-[#0A0A0A] text-[#FFFBF0] px-5 pt-6 pb-4">
            <p className="mono text-[10px] font-bold" style={{ color: accent }}>{kicker}</p>
            <p className="text-xl font-bold">{title}</p>
          </div>
          <div className="p-3 flex flex-col gap-2">
            {rows.map(({ top, main, badge, muted }) => (
              <div key={main} className="brutal-border bg-white px-3 py-2 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="mono text-[10px] text-gray-400 font-bold truncate">{top}</p>
                  <p className="text-sm font-bold truncate">{main}</p>
                </div>
                <span
                  className="shrink-0 text-[10px] font-bold px-2 py-1 border-2 border-black"
                  style={{ backgroundColor: muted ? "#fff" : accent }}
                >
                  {badge}
                </span>
              </div>
            ))}
            {footer && (
              <div className="brutal-border bg-[#FFE234] px-3 py-2 mt-1">
                <p className="mono text-[10px] font-bold">{footer.kicker}</p>
                <p className="text-sm font-bold">{footer.text}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-500 text-center max-w-xs">Aperçu illustratif.</p>
    </>
  );
}

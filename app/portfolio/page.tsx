"use client";
import { useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/portfolio";

// Les métadonnées SEO sont définies dans app/portfolio/layout.tsx

/**
 * Grille de projets façon lusion.co/projects, gardant l'identité BreizhApp :
 * grandes cartes visuelles en grille 2 colonnes, zoom doux + glitch au survol.
 * Au clic : la carte s'agrandit en plein écran (« on entre dans le projet »)
 * puis la navigation se fait.
 */
export default function PortfolioPage() {
  const router = useRouter();
  const [entering, setEntering] = useState<string | null>(null);
  // Rectangle figé de la carte au moment du clic, animé ensuite vers le plein écran
  const [rect, setRect] = useState<{ top: number; left: number; width: number; height: number } | null>(null);
  const overlayImg = useRef<string | undefined>(undefined);
  const overlayColor = useRef<string>("#000");

  const enterProject = useCallback(
    (e: React.MouseEvent, slug: string, image: string | undefined, color: string) => {
      // Laisser passer ctrl/cmd+clic (nouvel onglet) et le clic milieu
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      if (entering) return;

      const media = (e.currentTarget as HTMLElement).querySelector(".portfolio-media");
      if (!media) {
        router.push(`/portfolio/${slug}`);
        return;
      }
      const r = media.getBoundingClientRect();
      overlayImg.current = image;
      overlayColor.current = color;
      setRect({ top: r.top, left: r.left, width: r.width, height: r.height });
      setEntering(slug);

      // Frame suivante : bascule vers le plein écran (déclenche la transition CSS)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setRect({ top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }));
      });

      // Navigue une fois l'animation terminée
      window.setTimeout(() => router.push(`/portfolio/${slug}`), 620);
    },
    [entering, router]
  );

  return (
    <>
      <Navbar />
      <main className={`min-h-screen bg-[#FFFBF0] transition-opacity duration-300 ${entering ? "opacity-0" : "opacity-100"}`}>

        {/* Header */}
        <section className="border-b-[3px] border-[#0A0A0A] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <p className="mono text-sm font-bold text-gray-500 mb-2">// réalisations</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
              Portfolio &{" "}
              <span className="bg-[#F25C1F] text-white px-2 brutal-border">projets</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Applications mobiles, boutiques e-commerce et sites web créés sur mesure
              pour des restaurateurs, artisans et commerçants.
            </p>
          </div>
        </section>

        {/* Grille de projets */}
        <section className="max-w-[1600px] mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-x-8 md:gap-x-10 gap-y-16 md:gap-y-28">
            {projects.map((p, i) => (
              <Link
                key={p.slug}
                href={`/portfolio/${p.slug}`}
                className="portfolio-card group block"
                onClick={(e) => enterProject(e, p.slug, p.image, p.color)}
              >
                {/* Média — toujours visible, coins arrondis, zoom au survol */}
                <div
                  className="portfolio-media overflow-hidden relative"
                  style={{ aspectRatio: "16 / 11", backgroundColor: p.color, borderRadius: "2rem" }}
                >
                  {p.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.image}
                      alt={`Aperçu du projet ${p.name}`}
                      className="portfolio-img w-full h-full object-cover object-top"
                      loading={i < 2 ? "eager" : "lazy"}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-white">
                      <span className="text-6xl">{p.icon}</span>
                      <span className="mono text-xs font-bold opacity-80">{p.type}</span>
                    </div>
                  )}
                </div>

                {/* Infos sous le média */}
                <div className="mt-6 px-1">
                  <p className="mono text-xs md:text-sm font-bold uppercase tracking-wide text-gray-500 mb-3">
                    {[p.category, ...p.tags].slice(0, 5).join("  •  ")}
                  </p>
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                    {p.name}
                  </h2>
                  <p className="mt-3 text-lg text-gray-500 font-medium italic">{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming soon */}
          <div className="mt-16 md:mt-24 brutal-border bg-[#0A0A0A] text-[#FFFBF0] flex flex-col items-center justify-center p-16 text-center">
            <p className="mono text-xs text-gray-500 mb-4">// en cours</p>
            <div className="text-4xl mb-4">🔨</div>
            <h3 className="text-xl font-black mb-2">Prochain projet</h3>
            <p className="text-gray-500 text-sm mb-6">
              D'autres réalisations arrivent bientôt.
              Contactez-moi pour discuter du vôtre.
            </p>
            <a
              href="#contact"
              className="brutal-border bg-[#FFE234] text-[#0A0A0A] px-5 py-2.5 text-sm font-bold hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#FFE234] transition-all"
            >
              Démarrer mon projet
            </a>
          </div>

          <Link
            href="/#contact"
            className="mt-6 inline-flex items-center gap-2 font-bold text-sm brutal-border px-4 py-2 hover:bg-[#0A0A0A] hover:text-[#FFFBF0] transition-colors"
          >
            Discuter de mon projet <ArrowRight size={14} />
          </Link>
        </section>
      </main>

      {/* Overlay « on entre dans le projet » */}
      {entering && rect && (
        <div className="portfolio-enter-overlay" aria-hidden>
          <div
            className="portfolio-enter-card"
            style={{
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height,
              backgroundColor: overlayColor.current,
              borderRadius: rect.top === 0 ? "0" : "2rem",
            }}
          >
            {overlayImg.current && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={overlayImg.current} alt="" className="portfolio-enter-img" />
            )}
          </div>
        </div>
      )}

      <Contact />
      <Footer />
    </>
  );
}

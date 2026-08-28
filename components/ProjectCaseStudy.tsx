"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ArrowRight, Volume2, VolumeX } from "lucide-react";
import type { Project } from "@/lib/portfolio";
import { SERVICES } from "@/lib/taxonomy";
import { useSiteAudio } from "@/components/AudioProvider";

/**
 * Étude de cas d'un projet, architecture façon lusion.co/projects/<slug> :
 * page à défilement HORIZONTAL plein écran, sans scroll vertical, sans
 * Navbar/Footer du site. Bande de panneaux full-height côte à côte —
 * titre & infos → média(s) → panneau « Projet suivant ».
 * Piloté par les données de lib/portfolio.ts.
 */
export default function ProjectCaseStudy({
  project: p,
  allProjects,
}: {
  project: Project;
  /** Tous les projets (pour « projet suivant »). */
  allProjects: Project[];
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const laneRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const { playing, toggle: toggleMusic } = useSiteAudio();

  // Desktop = défilement horizontal ; mobile/tablette = scroll vertical classique
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => setIsDesktop(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const serviceLabel =
    SERVICES.find((s) => s.slug === p.service)?.label ?? p.category;

  // Projet suivant : d'abord dans le même service, sinon le suivant dans la liste globale
  const sameService = allProjects.filter(
    (x) => x.service === p.service && x.slug !== p.slug
  );
  const globalIdx = allProjects.findIndex((x) => x.slug === p.slug);
  const nextProject =
    sameService[0] ??
    allProjects[(globalIdx + 1) % Math.max(allProjects.length, 1)] ??
    p;

  // ── Défilement horizontal fluide (desktop uniquement) ──
  useEffect(() => {
    if (!isDesktop) return;
    const viewport = viewportRef.current;
    const lane = laneRef.current;
    if (!viewport || !lane) return;
    // Références non-null pour les closures ci-dessous
    const vp: HTMLDivElement = viewport;
    const ln: HTMLDivElement = lane;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let pos = 0;        // position courante (px)
    let target = 0;     // position visée (px)
    let max = 0;
    let raf = 0;

    const measure = () => { max = Math.max(0, ln.scrollWidth - vp.clientWidth); };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(ln);
    ro.observe(vp);

    function render() {
      // approche exponentielle : rapide au début, doux à l'arrivée
      pos += (target - pos) * 0.12;
      if (Math.abs(target - pos) < 0.15) pos = target;
      ln.style.transform = `translate3d(${-pos}px,0,0)`;
      setProgress(max > 0 ? pos / max : 0);
      raf = pos === target ? 0 : requestAnimationFrame(render);
    }
    function kick() { if (!raf) raf = requestAnimationFrame(render); }

    function unit(mode: number) {
      if (mode === 1) return 16;
      if (mode === 2) return vp.clientWidth;
      return 1;
    }
    function addDelta(px: number) {
      target = Math.max(0, Math.min(target + px, max));
      kick();
    }

    function onWheel(e: WheelEvent) {
      const raw = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (raw === 0) return;
      e.preventDefault();
      const gain = e.deltaMode === 0 ? 1 : 1.1;
      addDelta(raw * unit(e.deltaMode) * gain);
    }
    function onKey(e: KeyboardEvent) {
      const step = vp.clientWidth * 0.85;
      if (["ArrowRight", "PageDown", " "].includes(e.key)) { e.preventDefault(); addDelta(step); }
      else if (["ArrowLeft", "PageUp"].includes(e.key)) { e.preventDefault(); addDelta(-step); }
      else if (e.key === "Home") { e.preventDefault(); target = 0; kick(); }
      else if (e.key === "End") { e.preventDefault(); target = max; kick(); }
    }

    // Glisser (tactile / souris pressée)
    let dragging = false;
    let startX = 0;
    let startTarget = 0;
    function onPointerDown(e: PointerEvent) {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      if ((e.target as HTMLElement).closest("a,button")) return;
      dragging = true;
      startX = e.clientX;
      startTarget = target;
    }
    function onPointerMove(e: PointerEvent) {
      if (!dragging) return;
      target = Math.max(0, Math.min(startTarget - (e.clientX - startX), max));
      kick();
    }
    function onPointerUp() { dragging = false; }

    if (!reduce) {
      vp.addEventListener("wheel", onWheel, { passive: false });
      window.addEventListener("wheel", onWheel, { passive: false });
    }
    window.addEventListener("keydown", onKey);
    vp.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      ro.disconnect();
      vp.removeEventListener("wheel", onWheel);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      vp.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isDesktop]);

  // Bloque le scroll vertical de la page seulement en mode horizontal (desktop)
  useEffect(() => {
    if (!isDesktop) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [isDesktop]);

  // Révélation subtile des figures de galerie quand elles entrent dans le viewport
  useEffect(() => {
    if (!isDesktop) return;
    const root = viewportRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = root.querySelectorAll<HTMLElement>("[data-case-reveal]");
    if (!items.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          // déclenche dès qu'un petit bout de l'image pointe au bord droit
          if (e.isIntersecting && e.intersectionRatio > 0.03) {
            e.target.classList.add("is-revealed");
            io.unobserve(e.target);
          }
        }
      },
      { root, threshold: [0.03, 0.1] }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [isDesktop]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: p.name,
        headline: `${p.name} — ${p.tagline}`,
        description: p.caseIntro ?? p.description,
        url: `https://breizhapp.tech/portfolio/${p.slug}`,
        image: p.image ? `https://breizhapp.tech${p.image}` : undefined,
        dateCreated: p.year,
        creator: { "@type": "Organization", name: "BreizhApp", url: "https://breizhapp.tech" },
        keywords: p.tags.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://breizhapp.tech/" },
          { "@type": "ListItem", position: 2, name: "Réalisations", item: "https://breizhapp.tech/portfolio" },
          { "@type": "ListItem", position: 3, name: p.name, item: `https://breizhapp.tech/portfolio/${p.slug}` },
        ],
      },
    ],
  };

  return (
    <div className="case-root bg-[#0A0A0A] text-[#FFFBF0] lg:fixed lg:inset-0 lg:overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Barre supérieure — sticky sur mobile, fixe sur desktop */}
      <header className="sticky lg:absolute top-0 left-0 right-0 z-30 flex items-center justify-between gap-3 px-4 md:px-8 h-20 lg:h-28 bg-[#0A0A0A]/80 lg:bg-transparent backdrop-blur lg:backdrop-blur-0">
        {/* Logo */}
        <Link href="/portfolio" className="hover:opacity-70 transition-opacity shrink-0" aria-label="BreizhApp — retour aux réalisations">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpg" alt="BreizhApp" className="h-9 lg:h-12 w-auto rounded-lg" />
        </Link>

        {/* Retour — centré sur desktop, dans le flux sur mobile */}
        <Link
          href="/portfolio"
          className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-[#FFFBF0] text-[#0A0A0A] px-4 lg:px-6 h-10 lg:h-12 text-sm lg:text-[15px] font-bold hover:bg-[#FF4D8D] hover:text-white transition-colors"
        >
          <ArrowLeft size={16} /> <span className="hidden sm:inline">Retour</span>
        </Link>

        {/* Groupe droit */}
        <div className="flex items-center gap-2 lg:gap-3 shrink-0">
          <button
            type="button"
            onClick={toggleMusic}
            aria-label={playing ? "Couper la musique" : "Activer la musique"}
            aria-pressed={playing}
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#FFFBF0] text-[#0A0A0A] flex items-center justify-center hover:bg-[#FF4D8D] hover:text-white transition-colors"
          >
            {playing ? <Volume2 size={17} /> : <VolumeX size={17} />}
          </button>
          <Link
            href="/#contact"
            className="group hidden md:inline-flex items-center gap-2.5 rounded-full bg-white/10 text-[#FFFBF0] px-5 lg:px-6 h-10 lg:h-12 text-sm lg:text-[15px] font-bold hover:bg-[#FF4D8D] hover:text-white transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF4D8D] group-hover:bg-white transition-colors" />
            Prendre contact
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            className="inline-flex items-center gap-2 lg:gap-2.5 rounded-full bg-[#FFFBF0] text-[#0A0A0A] px-4 lg:px-6 h-10 lg:h-12 text-sm lg:text-[15px] font-bold hover:bg-[#FF4D8D] hover:text-white transition-colors"
          >
            {menuOpen ? "Fermer" : "Menu"}
            <span className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
            </span>
          </button>
        </div>
      </header>

      {/* Menu façon Lusion — panneau blanc sous le groupe droit, puis newsletter, puis bloc sombre */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-30"
            onClick={() => setMenuOpen(false)}
            aria-hidden
          />
          <div className="case-menu absolute top-[76px] lg:top-[92px] right-4 md:right-8 z-40 w-[min(420px,calc(100vw-2rem))] flex flex-col gap-3">
            {/* Liens principaux */}
            <nav className="rounded-3xl bg-[#FFFBF0] text-[#0A0A0A] p-4 md:p-5 shadow-2xl">
              {[
                { label: "Accueil", href: "/" },
                { label: "À propos", href: "/#about" },
                { label: "Réalisations", href: "/portfolio" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/#contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-3 rounded-2xl text-2xl md:text-3xl font-black tracking-tight hover:bg-[#FF4D8D] hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Newsletter */}
            <div className="rounded-3xl bg-[#FFFBF0] text-[#0A0A0A] p-5 md:p-6 shadow-2xl">
              <p className="text-2xl md:text-3xl font-black tracking-tight leading-[1.05] mb-4">
                Recevez nos<br />actualités
              </p>
              <form
                onSubmit={(e) => { e.preventDefault(); setMenuOpen(false); }}
                className="flex items-center gap-2 rounded-full bg-black/[0.06] pl-5 pr-2 h-12"
              >
                <input
                  type="email"
                  required
                  placeholder="Votre e-mail"
                  className="flex-1 bg-transparent outline-none text-sm placeholder:text-black/40"
                />
                <button
                  type="submit"
                  aria-label="S'inscrire"
                  className="w-9 h-9 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center hover:bg-[#FF4D8D] transition-colors"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>

            {/* Bloc sombre — CTA projet */}
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="group rounded-3xl bg-[#0A0A0A] text-[#FFFBF0] px-6 h-16 flex items-center justify-between shadow-2xl border border-white/10 hover:border-white/30 transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="text-xl">✦</span>
                <span className="text-lg font-black tracking-tight">Démarrer un projet</span>
              </span>
              <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </>
      )}

      {/* Barre de progression — desktop uniquement */}
      <div className="hidden lg:block absolute bottom-0 left-0 right-0 z-30 h-1 bg-white/10">
        <div
          className="h-full origin-left transition-transform duration-150"
          style={{ backgroundColor: p.color, transform: `scaleX(${progress || 0.001})` }}
        />
      </div>

      {/* Piste : translate horizontal sur desktop, empilement vertical sur mobile */}
      <div
        ref={viewportRef}
        className="case-viewport lg:h-full w-full lg:overflow-hidden lg:touch-pan-y lg:select-none"
      >
        <div ref={laneRef} className="case-lane flex flex-col lg:flex-row lg:h-full lg:w-max lg:items-stretch lg:will-change-transform">
        {/* Panneau 1 — texte + média du projet */}
        <section className="case-panel shrink-0 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-14 pt-8 lg:pt-28 pb-12 px-5 md:px-16 lg:pl-24 lg:pr-8">
          <>
            <div className="w-full lg:w-[38vw] lg:max-w-[560px] shrink-0 lg:max-h-[calc(100vh-11rem)] lg:overflow-y-auto no-scrollbar lg:pr-2">
              <p className="mono text-[11px] font-bold uppercase tracking-[0.12em] mb-5 text-white/40">
                {[serviceLabel, ...p.tags].slice(0, 5).join("  ·  ")}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[0.92] mb-6">
                {p.name}
              </h1>
              <p className="text-white/55 leading-relaxed text-sm md:text-[15px] mb-7">
                {p.caseIntro ?? p.description}
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-5 text-[13px] mb-8">
                {p.services && p.services.length > 0 && (
                  <div>
                    <p className="mono text-[10px] font-bold uppercase tracking-[0.12em] mb-2.5 text-white/40">
                      Services
                    </p>
                    <ul className="space-y-1.5 text-white/75">
                      {p.services.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <dl className="space-y-4">
                  {p.year && (
                    <div>
                      <dt className="mono text-[10px] font-bold uppercase tracking-[0.12em] text-white/40 mb-1">Année</dt>
                      <dd className="text-white/75">{p.year}</dd>
                    </div>
                  )}
                  {p.role && (
                    <div>
                      <dt className="mono text-[10px] font-bold uppercase tracking-[0.12em] text-white/40 mb-1">Rôle</dt>
                      <dd className="text-white/75">{p.role}</dd>
                    </div>
                  )}
                  {p.partner && (
                    <div>
                      <dt className="mono text-[10px] font-bold uppercase tracking-[0.12em] text-white/40 mb-1">Partenaire</dt>
                      <dd>
                        <a
                          href={p.partner.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/75 inline-flex items-center gap-1 hover:text-white"
                        >
                          {p.partner.name} <ArrowUpRight size={12} />
                        </a>
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
              {p.externalUrl && (
                <a
                  href={p.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#FFFBF0] text-[#0A0A0A] px-5 py-2.5 text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                  Voir le projet en ligne
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </a>
              )}
            </div>

            {/* Média principal */}
            <figure
              className="w-full lg:w-auto shrink-0 lg:h-[min(68vh,760px)] overflow-hidden"
              style={{ borderRadius: "1.5rem", backgroundColor: p.color, aspectRatio: "16 / 10" }}
            >
              {p.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.image}
                  alt={`Aperçu du projet ${p.name}`}
                  className="w-full h-full object-cover object-top"
                  draggable={false}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-7xl lg:text-8xl">{p.icon}</div>
              )}
            </figure>
          </>
        </section>

        {/* Galerie — rangée horizontale (desktop) / colonne (mobile) */}
        {p.gallery && p.gallery.length > 0 && (
          <section className="case-panel shrink-0 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8 pt-0 lg:pt-28 pb-12 px-5 md:px-16 lg:pl-0 lg:pr-16">
            {p.gallery.map((g, i) => (
              <figure
                key={i}
                data-case-reveal
                className="case-figure w-full lg:w-auto shrink-0 lg:h-[min(68vh,760px)] overflow-hidden"
                style={{
                  borderRadius: "1.5rem",
                  backgroundColor: p.color,
                  aspectRatio: "16 / 10",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.src}
                  alt={g.alt}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  draggable={false}
                />
                <figcaption className="sr-only">{g.alt}</figcaption>
              </figure>
            ))}
          </section>
        )}

        {/* Panneau final « Projet suivant » — bande étroite (desktop) / bloc plein (mobile) */}
        <section className="case-panel shrink-0 lg:h-full w-full lg:w-[22vw] lg:min-w-[300px] bg-[#F3F1EC] text-[#0A0A0A] relative flex flex-col justify-center px-5 md:px-16 lg:px-10 py-16 lg:py-0 overflow-hidden">
          {/* Nom du projet suivant en filigrane vertical — desktop seulement */}
          <span
            aria-hidden
            className="hidden lg:block pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 font-black tracking-tight text-black/[0.06] whitespace-nowrap select-none"
            style={{ writingMode: "vertical-rl", fontSize: "clamp(4rem, 9vw, 9rem)", lineHeight: 1 }}
          >
            {nextProject.name}
          </span>

          <p className="mono text-xs font-bold uppercase tracking-wide text-black/40 mb-5 relative">
            Projet suivant
          </p>

          <Link href={`/portfolio/${nextProject.slug}`} className="group block relative">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.05] flex items-start gap-2">
              {nextProject.name}
              <ArrowUpRight
                size={26}
                strokeWidth={2.5}
                className="shrink-0 mt-1 -translate-x-1 opacity-40 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </h2>
            <p className="text-black/55 mt-3 text-sm leading-relaxed">{nextProject.tagline}</p>
          </Link>

          <Link
            href="/portfolio"
            className="mt-10 relative inline-flex items-center gap-2 text-xs font-bold text-black/50 hover:text-black transition-colors"
          >
            <ArrowLeft size={13} /> Tous les projets
          </Link>
        </section>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";

/**
 * Sommaire collant des articles de blog + barre de progression de lecture.
 * La section active est celle dont le titre a dépassé le haut de l'écran en dernier.
 */
export default function ArticleToc({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(100, (doc.scrollTop / max) * 100) : 0);

      let current = items[0]?.id ?? "";
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 140) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-1 z-[80] bg-transparent" aria-hidden>
        <div className="h-full bg-[#FFE234] border-b border-black transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>
      <nav aria-label="Sommaire" className="hidden lg:block">
        <p className="font-bold mb-3 pb-3 border-b-[3px] border-black">Sommaire</p>
        <ol className="flex flex-col gap-1">
          {items.map(({ id, label }) => {
            const isActive = id === active;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`block border-l-[3px] pl-3 py-1 text-sm leading-snug transition-colors ${
                    isActive ? "border-[#FF6B35] text-[#0A0A0A] font-bold" : "border-transparent text-gray-500 hover:text-[#0A0A0A]"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

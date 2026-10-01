"use client";
import { useEffect, useState } from "react";

interface Props {
  src: string;
  title: string;
  className?: string;
  sandbox?: string;
  style?: React.CSSProperties;
}

const WAKE_EVENTS = ["pointermove", "pointerdown", "touchstart", "scroll", "keydown"] as const;

export default function LazyIframe({ src, title, className, sandbox, style }: Props) {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    // Charge l'iframe à la première interaction du visiteur (souris, toucher, scroll, clavier) :
    // le site embarqué et ses scripts tiers ne pèsent plus sur le chargement initial de la page.
    const wake = () => setLoad(true);
    const opts = { once: true, passive: true } as const;
    WAKE_EVENTS.forEach((e) => window.addEventListener(e, wake, opts));
    return () => WAKE_EVENTS.forEach((e) => window.removeEventListener(e, wake));
  }, []);

  return (
    <div className={className} style={style}>
      {load ? (
        <iframe
          src={src}
          title={title}
          className="w-full h-full border-0"
          sandbox={sandbox}
        />
      ) : (
        <div className="w-full h-full bg-[#0A0A0A] flex items-center justify-center" aria-hidden="true">
          <span className="text-3xl animate-pulse">📱</span>
        </div>
      )}
    </div>
  );
}

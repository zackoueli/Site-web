"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const TRACK_SRC = "/lofcosmos-cloudy-skies-and-coffee-vibes-509784.mp3";
const TARGET_VOLUME = 0.35;
const STORAGE_KEY = "ba-music-on";

type AudioCtx = {
  /** true si la musique joue */
  playing: boolean;
  /** bascule lecture / pause (l'appel doit venir d'un geste utilisateur) */
  toggle: () => void;
};

const Ctx = createContext<AudioCtx | null>(null);

export function useSiteAudio() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useSiteAudio must be used within <AudioProvider>");
  return ctx;
}

export default function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  // Fondu du volume pour éviter les à-coups
  const fadeTo = useCallback((el: HTMLAudioElement, to: number, done?: () => void) => {
    const from = el.volume;
    const start = performance.now();
    const dur = 450;
    function step(now: number) {
      const t = Math.min(1, (now - start) / dur);
      el.volume = from + (to - from) * t;
      if (t < 1) requestAnimationFrame(step);
      else done?.();
    }
    requestAnimationFrame(step);
  }, []);

  const toggle = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      el.volume = 0;
      el.play()
        .then(() => {
          setPlaying(true);
          try { localStorage.setItem(STORAGE_KEY, "1"); } catch {}
          fadeTo(el, TARGET_VOLUME);
        })
        .catch(() => setPlaying(false));
    } else {
      fadeTo(el, 0, () => {
        el.pause();
        setPlaying(false);
        try { localStorage.setItem(STORAGE_KEY, "0"); } catch {}
      });
    }
  }, [fadeTo]);

  // Démarrage automatique au tout premier geste de l'utilisateur.
  // Les navigateurs interdisent l'autoplay audio avant interaction : on ne peut
  // pas lancer au chargement, mais on part dès le 1er clic / touche / scroll.
  // Exception : si l'utilisateur a explicitement coupé la musique, on respecte.
  useEffect(() => {
    let stopped = false;
    try { stopped = localStorage.getItem(STORAGE_KEY) === "0"; } catch {}
    if (stopped) return;

    const events = ["pointerdown", "keydown", "touchstart", "wheel", "scroll"] as const;
    const start = () => {
      const el = audioRef.current;
      if (el && el.paused) {
        el.volume = 0;
        el.play().then(() => {
          setPlaying(true);
          try { localStorage.setItem(STORAGE_KEY, "1"); } catch {}
          fadeTo(el, TARGET_VOLUME);
        }).catch(() => {});
      }
      events.forEach((ev) => window.removeEventListener(ev, start));
    };
    events.forEach((ev) =>
      window.addEventListener(ev, start, { once: true, passive: true })
    );
    return () => events.forEach((ev) => window.removeEventListener(ev, start));
  }, [fadeTo]);

  // Filet de sécurité : si `loop` ne reboucle pas (certains navigateurs),
  // on relance manuellement à la fin de la piste — SAUF si l'utilisateur a coupé.
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onEnded = () => {
      let stopped = false;
      try { stopped = localStorage.getItem(STORAGE_KEY) === "0"; } catch {}
      if (stopped) return;
      el.currentTime = 0;
      el.play().then(() => setPlaying(true)).catch(() => {});
    };
    el.addEventListener("ended", onEnded);
    return () => el.removeEventListener("ended", onEnded);
  }, []);

  return (
    <Ctx.Provider value={{ playing, toggle }}>
      <audio ref={audioRef} src={TRACK_SRC} loop preload="none" />
      {children}
    </Ctx.Provider>
  );
}

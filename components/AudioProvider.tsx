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
  // pas lancer au chargement, mais on part dès la 1re interaction.
  // Exception : si l'utilisateur a explicitement coupé la musique, on respecte.
  useEffect(() => {
    let stopped = false;
    try { stopped = localStorage.getItem(STORAGE_KEY) === "0"; } catch {}
    if (stopped) return;

    // pointerdown/keydown/pointerup/click sont fiables pour débloquer l'autoplay ;
    // touchstart/wheel/scroll aident sur mobile. On garde les listeners tant que
    // la lecture n'a pas réellement démarré (un scroll seul peut être rejeté).
    const events = [
      "pointerdown", "pointerup", "click", "keydown", "touchstart", "touchend", "wheel", "scroll",
    ] as const;
    let done = false;

    const cleanup = () => {
      events.forEach((ev) => {
        window.removeEventListener(ev, start, true);
        document.removeEventListener(ev, start, true);
      });
    };
    const start = () => {
      if (done) return;
      const el = audioRef.current;
      if (!el) return;
      if (!el.paused) { done = true; cleanup(); return; }
      el.volume = 0;
      const pr = el.play();
      if (pr === undefined) {
        // vieux navigateurs : play() ne renvoie pas de promesse
        done = true;
        setPlaying(true);
        el.volume = TARGET_VOLUME;
        cleanup();
        return;
      }
      pr.then(() => {
        done = true;
        setPlaying(true);
        try { localStorage.setItem(STORAGE_KEY, "1"); } catch {}
        el.volume = TARGET_VOLUME;   // valeur sûre immédiate
        fadeTo(el, TARGET_VOLUME);   // + fondu depuis le point courant
        cleanup();
      }).catch(() => {
        // rejeté (ex. scroll seul, fichier pas prêt) → on retentera au geste suivant
      });
    };

    // capture:true → on attrape l'événement même si un composant fait stopPropagation
    events.forEach((ev) => {
      window.addEventListener(ev, start, { capture: true, passive: true });
      document.addEventListener(ev, start, { capture: true, passive: true });
    });
    return cleanup;
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

  // Précharge le fichier dès le montage : sinon play() doit d'abord télécharger
  // ~7 Mo et le "user gesture" expire → lecture refusée au 1er geste.
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    let stopped = false;
    try { stopped = localStorage.getItem(STORAGE_KEY) === "0"; } catch {}
    if (stopped) return;
    el.preload = "auto";
    el.load();
  }, []);

  return (
    <Ctx.Provider value={{ playing, toggle }}>
      <audio ref={audioRef} src={TRACK_SRC} loop preload="auto" />
      {children}
    </Ctx.Provider>
  );
}

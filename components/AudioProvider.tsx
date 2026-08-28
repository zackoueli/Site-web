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
const TARGET_VOLUME = 0.3; // -15 % (0.35 -> 0.30)
// "on"  = l'utilisateur veut la musique  |  "off" = il l'a coupée  |  absent = jamais choisi
const PREF_KEY = "ba-music-pref";

type AudioCtx = {
  playing: boolean;
  toggle: () => void;
};

const Ctx = createContext<AudioCtx | null>(null);

export function useSiteAudio() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useSiteAudio must be used within <AudioProvider>");
  return ctx;
}

function readPref(): "on" | "off" | null {
  try {
    const v = localStorage.getItem(PREF_KEY);
    return v === "on" || v === "off" ? v : null;
  } catch {
    return null;
  }
}
function writePref(v: "on" | "off") {
  try { localStorage.setItem(PREF_KEY, v); } catch {}
}

export default function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);
  const [playing, setPlaying] = useState(false);

  // Fondu linéaire du volume (ms), annule un fondu en cours
  const fade = useCallback((to: number, ms: number, onDone?: () => void) => {
    const el = audioRef.current;
    if (!el) return;
    if (fadeRef.current) cancelAnimationFrame(fadeRef.current);
    const from = el.volume;
    const t0 = performance.now();
    const step = (now: number) => {
      const k = Math.min(1, (now - t0) / ms);
      el.volume = from + (to - from) * k;
      if (k < 1) {
        fadeRef.current = requestAnimationFrame(step);
      } else {
        fadeRef.current = null;
        onDone?.();
      }
    };
    fadeRef.current = requestAnimationFrame(step);
  }, []);

  // Lance la lecture avec un fondu d'entrée (~1,4 s) depuis le silence
  const play = useCallback(() => {
    const el = audioRef.current;
    if (!el) return Promise.reject(new Error("no <audio>"));
    el.volume = 0;
    const pr = el.play();
    const done = pr ?? Promise.resolve();
    return done.then(() => { fade(TARGET_VOLUME, 1400); });
  }, [fade]);

  // Bouton son : bascule et mémorise le choix explicite (avec fondus)
  const toggle = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      play()
        .then(() => { setPlaying(true); writePref("on"); })
        .catch((e) => console.warn("[audio] play refusé:", e?.name));
    } else {
      // fondu de sortie (~0,5 s) puis pause
      fade(0, 500, () => {
        el.pause();
        setPlaying(false);
        writePref("off");
      });
    }
  }, [play, fade]);

  // Précharge le fichier dès que possible (sauf si coupé explicitement)
  useEffect(() => {
    const el = audioRef.current;
    if (!el || readPref() === "off") return;
    el.preload = "auto";
    el.load();
  }, []);

  // Démarrage auto : au 1er geste utilisateur, sauf si coupé explicitement.
  // Les listeners RESTENT tant que la lecture n'a pas réussi (scroll seul souvent rejeté).
  useEffect(() => {
    if (readPref() === "off") return;

    const events: (keyof WindowEventMap)[] = [
      "pointerdown", "pointerup", "click", "keydown",
      "touchstart", "touchend", "wheel", "scroll",
    ];
    let started = false;

    const cleanup = () => {
      events.forEach((ev) => document.removeEventListener(ev, onGesture, true));
    };
    const onGesture = (e: Event) => {
      if (started || readPref() === "off") { cleanup(); return; }
      const el = audioRef.current;
      if (!el || !el.paused) { started = true; cleanup(); return; }
      play()
        .then(() => {
          started = true;
          setPlaying(true);
          writePref("on");
          cleanup();
          console.info("[audio] auto-start via", e.type);
        })
        .catch((err) => {
          console.warn("[audio] auto-start refusé sur", e.type, "→", err?.name);
        });
    };

    events.forEach((ev) =>
      document.addEventListener(ev, onGesture, { capture: true, passive: true })
    );
    return cleanup;
  }, [play]);

  // Rebouclage manuel si `loop` échoue (sauf si coupé)
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onEnded = () => {
      if (readPref() === "off") return;
      el.currentTime = 0;
      play().then(() => setPlaying(true)).catch(() => {});
    };
    el.addEventListener("ended", onEnded);
    return () => el.removeEventListener("ended", onEnded);
  }, [play]);

  return (
    <Ctx.Provider value={{ playing, toggle }}>
      <audio ref={audioRef} src={TRACK_SRC} loop preload="auto" />
      {children}
    </Ctx.Provider>
  );
}

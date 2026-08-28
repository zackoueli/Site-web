"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { useSiteAudio } from "@/components/AudioProvider";

/**
 * Effets sonores "pouic" façon lusion.co.
 *
 * - Sons 100 % synthétisés (Web Audio API) : 0 Ko, 0 requête réseau, latence nulle.
 * - 5 variantes : hover / click / pop / blip / toggle.
 * - Auto-bind global : au survol et au clic de tout <button>, <a>, [role="button"]
 *   ou .sfx, on joue "hover" puis "click". Rien à câbler dans les composants.
 *   Pour exclure un élément : lui mettre l'attribut  data-no-sfx.
 * - Le son SFX suit la préférence musique : si la musique de fond est coupée
 *   (ou jamais autorisée), les SFX sont muets. prefers-reduced-motion force OFF.
 */

type SfxName = "hover" | "click" | "pop" | "blip" | "toggle";

type SfxCtx = {
  play: (name: SfxName) => void;
};

const Ctx = createContext<SfxCtx | null>(null);

export function useSfx() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useSfx must be used within <SfxProvider>");
  return ctx;
}

const MUSIC_PREF_KEY = "ba-music-pref";

function musicMutedByPref(): boolean {
  try {
    return localStorage.getItem(MUSIC_PREF_KEY) === "off";
  } catch {
    return false;
  }
}

function prefersReducedMotion(): boolean {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

/**
 * Une note "ronde" : oscillateur -> filtre passe-bas -> gain (enveloppe douce).
 * Attaque non nulle + release lente + lowpass = pas de "clic" sec.
 */
function tone(
  ac: AudioContext,
  out: GainNode,
  opts: {
    type?: OscillatorType;
    from: number;
    to?: number;
    dur: number; // secondes (release comprise)
    gain: number;
    delay?: number; // secondes
    attack?: number; // secondes
    cutoff?: number; // Hz, plafond du lowpass
    detune?: number; // cents, léger désaccord pour épaissir
  },
) {
  const {
    type = "triangle",
    from,
    to = from,
    dur,
    gain,
    delay = 0,
    attack = 0.012,
    cutoff = 2600,
    detune = 0,
  } = opts;
  const t0 = ac.currentTime + delay;
  const osc = ac.createOscillator();
  const lp = ac.createBiquadFilter();
  const g = ac.createGain();

  osc.type = type;
  osc.detune.value = detune;
  osc.frequency.setValueAtTime(from, t0);
  if (to !== from) {
    // portamento en douceur -> effet "boing" Mario
    osc.frequency.exponentialRampToValueAtTime(Math.max(1, to), t0 + dur * 0.7);
  }

  lp.type = "lowpass";
  lp.frequency.setValueAtTime(cutoff, t0);
  lp.frequency.exponentialRampToValueAtTime(
    Math.max(400, cutoff * 0.45),
    t0 + dur,
  );
  lp.Q.value = 0.7;

  // Enveloppe : attaque douce, plateau court, release exponentielle
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.linearRampToValueAtTime(gain, t0 + attack);
  g.gain.setValueAtTime(gain, t0 + attack + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);

  osc.connect(lp).connect(g).connect(out);
  osc.start(t0);
  osc.stop(t0 + dur + 0.03);
}

const RECIPES: Record<SfxName, (ac: AudioContext, out: GainNode) => void> = {
  // survol : petit "bip" rond et discret qui monte
  hover: (ac, out) =>
    tone(ac, out, {
      type: "sine",
      from: 520,
      to: 720,
      dur: 0.11,
      gain: 0.05,
      attack: 0.015,
      cutoff: 2000,
    }),

  // clic : petit "boup" court et rond (monte vite puis se pose)
  click: (ac, out) => {
    tone(ac, out, {
      type: "sine",
      from: 480,
      to: 760,
      dur: 0.075,
      gain: 0.13,
      attack: 0.016,
      cutoff: 1700,
      detune: -4,
    });
    // légère doublure triangle pour un peu de corps, sans agressivité
    tone(ac, out, {
      type: "triangle",
      from: 720,
      to: 1040,
      dur: 0.06,
      gain: 0.03,
      attack: 0.016,
      cutoff: 2200,
    });
  },

  // pop : bulle ronde qui rebondit vers le haut
  pop: (ac, out) =>
    tone(ac, out, {
      type: "sine",
      from: 380,
      to: 1040,
      dur: 0.14,
      gain: 0.14,
      attack: 0.01,
      cutoff: 2600,
    }),

  // blip : note courte mais moelleuse (triangle filtré, pas de square)
  blip: (ac, out) =>
    tone(ac, out, {
      type: "triangle",
      from: 900,
      to: 900,
      dur: 0.08,
      gain: 0.07,
      attack: 0.012,
      cutoff: 1800,
    }),

  // toggle : deux notes rondes qui montent, façon "power-up" court
  toggle: (ac, out) => {
    tone(ac, out, {
      type: "triangle",
      from: 523,
      to: 523,
      dur: 0.1,
      gain: 0.1,
      cutoff: 2200,
    });
    tone(ac, out, {
      type: "triangle",
      from: 784,
      to: 784,
      dur: 0.14,
      gain: 0.1,
      delay: 0.08,
      cutoff: 2400,
    });
  },
};

export default function SfxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { playing } = useSiteAudio();
  const acRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const lastHoverRef = useRef(0);
  const lastPlayRef = useRef(0);

  const ensureContext = useCallback(() => {
    if (acRef.current) {
      if (acRef.current.state === "suspended") void acRef.current.resume();
      return acRef.current;
    }
    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!AC) return null;
    const ac = new AC();
    const master = ac.createGain();
    master.gain.value = 0.9;
    master.connect(ac.destination);
    acRef.current = ac;
    masterRef.current = master;
    return ac;
  }, []);

  const soundEnabled = useCallback(() => {
    if (prefersReducedMotion()) return false;
    if (musicMutedByPref()) return false;
    // musique jamais autorisée -> pas de contexte audio "gestuel" garanti,
    // mais on tente quand même si l'utilisateur interagit (ensureContext gère).
    return true;
  }, []);

  const play = useCallback(
    (name: SfxName) => {
      if (!soundEnabled()) return;
      const now = performance.now();
      // throttle global anti-mitraillette
      if (now - lastPlayRef.current < 25) return;
      lastPlayRef.current = now;
      if (name === "hover") {
        if (now - lastHoverRef.current < 70) return;
        lastHoverRef.current = now;
      }
      const ac = ensureContext();
      const out = masterRef.current;
      if (!ac || !out) return;
      if (ac.state === "suspended") void ac.resume();
      try {
        RECIPES[name](ac, out);
      } catch {
        /* pas grave */
      }
    },
    [ensureContext, soundEnabled],
  );

  // Auto-bind global en délégation d'événements.
  useEffect(() => {
    const INTERACTIVE = 'button, a[href], [role="button"], summary, .sfx';

    const target = (e: Event): HTMLElement | null => {
      const path = e.composedPath?.() ?? [];
      for (const n of path) {
        if (n instanceof HTMLElement && n.matches(INTERACTIVE)) return n;
      }
      const t = e.target;
      return t instanceof HTMLElement ? t.closest(INTERACTIVE) : null;
    };

    const onOver = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return; // pas de "hover" au tactile
      const el = target(e);
      if (!el || el.hasAttribute("data-no-sfx") || el.closest("[data-no-sfx]"))
        return;
      // évite de re-jouer quand on bouge à l'intérieur du même bouton
      const related = e.relatedTarget;
      if (related instanceof Node && el.contains(related)) return;
      play(el.dataset.sfxHover ? (el.dataset.sfxHover as SfxName) : "hover");
    };

    const onDown = (e: PointerEvent) => {
      const el = target(e);
      if (!el || el.hasAttribute("data-no-sfx") || el.closest("[data-no-sfx]"))
        return;
      play(el.dataset.sfx ? (el.dataset.sfx as SfxName) : "click");
    };

    document.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerdown", onDown, { passive: true });
    return () => {
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [play]);

  // Reprend le contexte quand l'onglet redevient visible
  useEffect(() => {
    const onVis = () => {
      if (document.visibilityState === "visible" && acRef.current?.state === "suspended")
        void acRef.current.resume();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Ferme proprement à l'unmount
  useEffect(() => {
    return () => {
      void acRef.current?.close().catch(() => {});
      acRef.current = null;
      masterRef.current = null;
    };
  }, []);

  // (playing sert juste à garder le provider "vivant" avec l'état musique)
  void playing;

  const value = useMemo<SfxCtx>(() => ({ play }), [play]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

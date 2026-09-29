"use client";
import { usePathname } from "next/navigation";
import { Volume2, VolumeX } from "lucide-react";
import { useSiteAudio } from "@/components/AudioProvider";

/**
 * Bouton flottant de contrôle musique, présent sur tout le site.
 * Au survol (ou au focus clavier), un curseur de volume vertical apparaît au-dessus du bouton.
 * Masqué sur les études de cas /portfolio/<slug> : leur header a déjà son
 * propre contrôle son (câblé sur le même lecteur via useSiteAudio).
 */
export default function MusicToggle() {
  const pathname = usePathname();
  const { playing, toggle, volume, setVolume } = useSiteAudio();

  const isCaseStudy = /^\/portfolio\/[^/]+$/.test(pathname ?? "");
  if (isCaseStudy) return null;

  // Bouton flottant sur desktop uniquement ; sur mobile le contrôle est dans le menu Navbar
  return (
    <div className="group hidden md:flex fixed bottom-5 right-5 z-[70] flex-col items-center">
      {/* Curseur de volume vertical (le pb-3 sert de « pont » pour ne pas perdre le survol) */}
      <div className="pb-3 opacity-0 translate-y-2 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto">
        <div className="brutal-border bg-[#FFFBF0] shadow-[3px_3px_0_#0A0A0A] px-2 py-3 flex justify-center">
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            aria-label="Volume de la musique"
            // Vertical, volume max en haut
            style={{ writingMode: "vertical-lr", direction: "rtl" }}
            className="h-28 w-4 accent-[#0A0A0A] cursor-pointer"
          />
        </div>
      </div>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Couper la musique" : "Activer la musique"}
        aria-pressed={playing}
        className="relative w-12 h-12 rounded-full brutal-border bg-[#FFFBF0] text-[#0A0A0A] flex items-center justify-center shadow-[3px_3px_0_#0A0A0A] hover:bg-[#FFE234] transition-colors"
      >
        {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
        {playing && (
          <span className="absolute inset-0 rounded-full border-2 border-[#0A0A0A] animate-ping opacity-30" />
        )}
      </button>
    </div>
  );
}

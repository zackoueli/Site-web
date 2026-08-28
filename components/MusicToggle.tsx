"use client";
import { usePathname } from "next/navigation";
import { Volume2, VolumeX } from "lucide-react";
import { useSiteAudio } from "@/components/AudioProvider";

/**
 * Bouton flottant de contrôle musique, présent sur tout le site.
 * Masqué sur les études de cas /portfolio/<slug> : leur header a déjà son
 * propre contrôle son (câblé sur le même lecteur via useSiteAudio).
 */
export default function MusicToggle() {
  const pathname = usePathname();
  const { playing, toggle } = useSiteAudio();

  const isCaseStudy = /^\/portfolio\/[^/]+$/.test(pathname ?? "");
  if (isCaseStudy) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? "Couper la musique" : "Activer la musique"}
      aria-pressed={playing}
      className="fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full brutal-border bg-[#FFFBF0] text-[#0A0A0A] flex items-center justify-center shadow-[3px_3px_0_#0A0A0A] hover:bg-[#FFE234] transition-colors"
    >
      {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
      {playing && (
        <span className="absolute inset-0 rounded-full border-2 border-[#0A0A0A] animate-ping opacity-30" />
      )}
    </button>
  );
}

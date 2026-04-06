"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PhoneCarouselProps {
  images: string[];
  appName: string;
}

// Frame = ratio EXACT des captures iPhone 8 Plus (1242×2208 = 9:16)
// → zéro marge noire garantie avec object-cover
const W = 300;
const H = Math.round(W * (2208 / 1242)); // = 533px

export default function PhoneCarousel({ images, appName }: PhoneCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)),
    [images.length]
  );
  const next = useCallback(
    () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)),
    [images.length]
  );

  return (
    <div className="flex items-center gap-5">
      {/* Flèche gauche */}
      <button
        onClick={prev}
        className="brutal-btn bg-[#0A0A0A] text-[#FFE234] p-3 flex-shrink-0"
        aria-label="Capture précédente"
      >
        <ChevronLeft size={20} />
      </button>

      <div className="flex flex-col items-center gap-4">
        {/* ── Boîtier iPhone ── */}
        <div
          style={{
            width: W + 16,   // +16 pour les bordures latérales du boîtier
            height: H + 28,  // +28 pour la barre supérieure (Dynamic Island) + inférieure (home)
            background: "#111",
            borderRadius: 44,
            border: "3px solid #0A0A0A",
            boxShadow: "6px 6px 0px #0A0A0A",
            padding: "14px 8px 14px 8px",
            position: "relative",
            boxSizing: "border-box",
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: "absolute",
              top: 8,
              left: "50%",
              transform: "translateX(-50%)",
              width: 80,
              height: 22,
              background: "#000",
              borderRadius: 16,
              zIndex: 10,
            }}
          />

          {/* Écran — ratio exact = zéro marge */}
          <div
            style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              borderRadius: 36,
              position: "relative",
              background: "#000",
            }}
          >
            {images.map((src, i) => (
              <div
                key={src}
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: i === current ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <Image
                  src={src}
                  alt={`${appName} écran ${i + 1}`}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes={`${W}px`}
                  priority={i === 0}
                />
              </div>
            ))}

            {/* Compteur overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(6px)",
                color: "#fff",
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: 11,
                padding: "2px 8px",
                borderRadius: 4,
                zIndex: 10,
              }}
            >
              {current + 1} / {images.length}
            </div>

            {/* Home indicator */}
            <div
              style={{
                position: "absolute",
                bottom: 6,
                left: "50%",
                transform: "translateX(-50%)",
                width: 80,
                height: 4,
                background: "rgba(255,255,255,0.35)",
                borderRadius: 999,
                zIndex: 10,
              }}
            />
          </div>

          {/* Bouton power (droite) */}
          <div style={{
            position: "absolute", right: -5, top: 90,
            width: 4, height: 52, background: "#2a2a2a",
            borderRadius: "0 3px 3px 0",
          }} />
          {/* Boutons volume (gauche) */}
          {[75, 130, 175].map((top) => (
            <div key={top} style={{
              position: "absolute", left: -5, top,
              width: 4, height: top === 75 ? 28 : 42,
              background: "#2a2a2a",
              borderRadius: "3px 0 0 3px",
            }} />
          ))}
        </div>

        {/* Dots navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 20 : 6,
                height: 6,
                background: i === current ? "#0A0A0A" : "#ccc",
                border: "1.5px solid #0A0A0A",
                borderRadius: 0,
                cursor: "pointer",
                transition: "all 0.2s",
                padding: 0,
              }}
              aria-label={`Écran ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Flèche droite */}
      <button
        onClick={next}
        className="brutal-btn bg-[#0A0A0A] text-[#FFE234] p-3 flex-shrink-0"
        aria-label="Capture suivante"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

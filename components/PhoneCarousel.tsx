"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PhoneCarouselProps {
  images: string[];
  appName: string;
}

// iPhone 8 Plus screenshots : 1242 × 2208 px → ratio 9:16 (1:1.778)
const W = 260;
const H = Math.round(W * (16 / 9)); // 462px

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
    <div className="flex items-center gap-4">
      {/* Flèche gauche — capture précédente */}
      <button
        onClick={prev}
        className="brutal-btn bg-[#0A0A0A] text-[#FFE234] p-3 flex-shrink-0"
        aria-label="Capture précédente"
      >
        <ChevronLeft size={20} />
      </button>

      {/* ── iPhone body ── */}
      <div className="flex flex-col items-center gap-3">
        <div
          className="relative"
          style={{
            width: W,
            height: H,
            borderRadius: 40,
            background: "#1a1a1a",
            border: "3px solid #0A0A0A",
            boxShadow: "6px 6px 0px #0A0A0A",
            overflow: "hidden",
          }}
        >
          {/* Images plein écran */}
          {images.map((src, i) => (
            <div
              key={src}
              className="absolute inset-0 transition-opacity duration-300"
              style={{ opacity: i === current ? 1 : 0 }}
            >
              <Image
                src={src}
                alt={`${appName} écran ${i + 1}`}
                fill
                className="object-contain"
                sizes={`${W}px`}
                priority={i === 0}
              />
            </div>
          ))}

          {/* Notch iPhone 8 Plus (pas de Dynamic Island) */}
          <div
            className="absolute z-20 bg-[#1a1a1a]"
            style={{
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: 60,
              height: 6,
              borderRadius: "0 0 8px 8px",
            }}
          />

          {/* Compteur overlay */}
          <div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 mono font-bold text-xs text-white px-2 py-0.5 rounded"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
          >
            {current + 1} / {images.length}
          </div>

          {/* Bouton home en bas (iPhone 8 Plus) */}
          <div
            className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20 bg-white rounded-full opacity-30"
            style={{ width: 28, height: 28, border: "1px solid rgba(255,255,255,0.4)" }}
          />
        </div>

        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all"
              style={{
                width: i === current ? 20 : 6,
                height: 6,
                background: i === current ? "#0A0A0A" : "#ccc",
                border: "1.5px solid #0A0A0A",
                borderRadius: 0,
              }}
              aria-label={`Écran ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Flèche droite — capture suivante */}
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

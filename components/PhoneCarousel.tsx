"use client";
import { useState, useCallback } from "react";
import Image from "next/image";

interface PhoneCarouselProps {
  images: string[];
  appName: string;
}

// Ratio exact iPhone 15 Pro : 1179 × 2556 → 1 : 2.168
const W = 260;
const H = Math.round(W * 2.168); // 563px

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
    <div className="flex flex-col items-center gap-4 select-none">
      {/* ── iPhone body ── */}
      <div
        className="relative"
        style={{
          width: W,
          height: H,
          borderRadius: 52,
          background: "#1a1a1a",
          border: "3px solid #0A0A0A",
          boxShadow: "6px 6px 0px #0A0A0A",
          overflow: "hidden", // Le border-radius clippe directement l'écran
        }}
      >
        {/* ── Images (plein écran, zéro padding) ── */}
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
              className="object-cover object-top"
              sizes={`${W}px`}
              priority={i === 0}
            />
          </div>
        ))}

        {/* ── Dynamic Island — par dessus l'image ── */}
        <div
          className="absolute z-20 bg-black"
          style={{
            top: 12,
            left: "50%",
            transform: "translateX(-50%)",
            width: 95,
            height: 28,
            borderRadius: 20,
          }}
        />

        {/* ── Zones de tap (moitié gauche = prev, droite = next) ── */}
        <button
          onClick={prev}
          className="absolute inset-y-0 left-0 z-10 cursor-pointer"
          style={{ width: "45%" }}
          aria-label="Capture précédente"
        />
        <button
          onClick={next}
          className="absolute inset-y-0 right-0 z-10 cursor-pointer"
          style={{ width: "45%" }}
          aria-label="Capture suivante"
        />

        {/* ── Home indicator ── */}
        <div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 bg-white rounded-full"
          style={{ width: 100, height: 4, opacity: 0.4 }}
        />

        {/* ── Compteur en overlay (bas de l'écran) ── */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 mono font-bold text-xs text-white px-2 py-0.5 rounded"
          style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
        >
          {current + 1} / {images.length}
        </div>

        {/* ── Bouton côté droit (power) ── */}
        <div
          className="absolute"
          style={{
            right: -4,
            top: 110,
            width: 4,
            height: 60,
            background: "#2a2a2a",
            borderRadius: "0 3px 3px 0",
            boxShadow: "1px 0 0 #444",
          }}
        />
        {/* ── Boutons côté gauche (volume) ── */}
        {[90, 145, 195].map((top) => (
          <div
            key={top}
            className="absolute"
            style={{
              left: -4,
              top,
              width: 4,
              height: top === 90 ? 30 : 45,
              background: "#2a2a2a",
              borderRadius: "3px 0 0 3px",
              boxShadow: "-1px 0 0 #444",
            }}
          />
        ))}
      </div>

      {/* ── Indicateur discret (dots) ── */}
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
  );
}

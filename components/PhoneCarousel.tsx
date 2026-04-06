"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PhoneCarouselProps {
  images: string[];
  appName: string;
}

export default function PhoneCarousel({ images, appName }: PhoneCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() =>
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)), [images.length]);

  const next = useCallback(() =>
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)), [images.length]);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Phone frame */}
      <div
        className="relative bg-[#0A0A0A] brutal-border brutal-shadow-lg"
        style={{
          width: 220,
          height: 460,
          borderRadius: "2.5rem",
          padding: "12px 8px",
        }}
      >
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#0A0A0A] z-10 flex items-center justify-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#1a1a1a] border border-[#333]" />
          <div className="w-8 h-1.5 rounded-full bg-[#1a1a1a] border border-[#333]" />
        </div>

        {/* Screen */}
        <div
          className="w-full h-full overflow-hidden bg-black relative"
          style={{ borderRadius: "2rem" }}
        >
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
                sizes="220px"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Side button decoration */}
        <div className="absolute -right-[5px] top-20 w-[4px] h-10 bg-[#0A0A0A] brutal-border rounded-sm" />
        <div className="absolute -left-[5px] top-16 w-[4px] h-7 bg-[#0A0A0A] brutal-border rounded-sm" />
        <div className="absolute -left-[5px] top-28 w-[4px] h-7 bg-[#0A0A0A] brutal-border rounded-sm" />
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={prev}
          className="brutal-btn bg-white p-2"
          aria-label="Précédent"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Dots — max 10 visible */}
        <div className="flex items-center gap-1.5">
          {images.slice(0, 10).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all brutal-border ${
                i === current
                  ? "w-5 h-2.5 bg-[#0A0A0A]"
                  : "w-2 h-2 bg-white"
              }`}
              aria-label={`Écran ${i + 1}`}
            />
          ))}
          {images.length > 10 && (
            <span className="text-xs font-bold mono text-gray-500">
              +{images.length - 10}
            </span>
          )}
        </div>

        <button
          onClick={next}
          className="brutal-btn bg-white p-2"
          aria-label="Suivant"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Screen counter */}
      <span className="mono text-xs font-bold text-gray-500">
        {current + 1} / {images.length}
      </span>
    </div>
  );
}

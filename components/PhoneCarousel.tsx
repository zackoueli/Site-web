"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PhoneCarouselProps {
  images: string[];
  appName: string;
}

// iPhone screenshot ratio ≈ 1179:2556 = 1:2.168
const W = 240;
const H = Math.round(W * 2.168); // 520px

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
    <div className="flex flex-col items-center gap-5">
      {/* ── iPhone frame ── */}
      <div
        className="relative bg-[#111] brutal-border brutal-shadow-lg select-none"
        style={{
          width: W,
          height: H,
          borderRadius: 48,
          padding: "10px 6px 14px",
          boxShadow: "6px 6px 0px #0A0A0A, inset 0 0 0 1px #333",
        }}
      >
        {/* Dynamic Island */}
        <div
          className="absolute z-20"
          style={{
            top: 14,
            left: "50%",
            transform: "translateX(-50%)",
            width: 90,
            height: 26,
            background: "#000",
            borderRadius: 20,
          }}
        />

        {/* Screen */}
        <div
          className="w-full h-full overflow-hidden relative bg-black"
          style={{ borderRadius: 42 }}
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
                sizes={`${W}px`}
                priority={i === 0}
              />
            </div>
          ))}

          {/* Home indicator */}
          <div
            className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 bg-white rounded-full opacity-60"
            style={{ width: 100, height: 4 }}
          />
        </div>

        {/* Physical buttons */}
        <div className="absolute -right-[4px] top-28 w-[4px] h-14 bg-[#222] rounded-r-sm" style={{ boxShadow: "1px 0 0 #444" }} />
        <div className="absolute -left-[4px] top-24 w-[4px] h-8 bg-[#222] rounded-l-sm" style={{ boxShadow: "-1px 0 0 #444" }} />
        <div className="absolute -left-[4px] top-36 w-[4px] h-8 bg-[#222] rounded-l-sm" style={{ boxShadow: "-1px 0 0 #444" }} />
        <div className="absolute -left-[4px] top-48 w-[4px] h-8 bg-[#222] rounded-l-sm" style={{ boxShadow: "-1px 0 0 #444" }} />
      </div>

      {/* ── Screenshot navigation ── */}
      <div className="flex items-center gap-3">
        <button onClick={prev} className="brutal-btn bg-white p-2" aria-label="Précédent">
          <ChevronLeft size={14} />
        </button>

        <div className="flex items-center gap-1">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all brutal-border ${
                i === current ? "w-4 h-2 bg-[#0A0A0A]" : "w-1.5 h-1.5 bg-white"
              }`}
              aria-label={`Écran ${i + 1}`}
            />
          ))}
        </div>

        <button onClick={next} className="brutal-btn bg-white p-2" aria-label="Suivant">
          <ChevronRight size={14} />
        </button>
      </div>

      <span className="mono text-xs font-bold text-gray-400">
        {current + 1} / {images.length}
      </span>
    </div>
  );
}

"use client";
import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoCarouselProps {
  slides: { src: string; alt: string }[];
  caption?: string;
}

/** Carrousel de photos (format 3:4) avec flèches, points et swipe sur mobile. */
export default function PhotoCarousel({ slides, caption }: PhotoCarouselProps) {
  const [current, setCurrent] = useState(0);
  const touchX = useRef<number | null>(null);

  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1)),
    [slides.length]
  );
  const next = useCallback(
    () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1)),
    [slides.length]
  );

  return (
    <div className="brutal-border brutal-shadow bg-white overflow-hidden w-full max-w-sm mx-auto">
      <div
        className="relative w-full aspect-[3/4] overflow-hidden bg-[#0A0A0A]"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) (dx > 0 ? prev : next)();
          touchX.current = null;
        }}
      >
        {slides.map(({ src, alt }, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-300"
            style={{ opacity: i === current ? 1 : 0 }}
            aria-hidden={i !== current}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 384px, 100vw"
              priority={i === 0}
            />
          </div>
        ))}

        <button
          onClick={prev}
          className="brutal-btn bg-[#0A0A0A] text-[#FFE234] p-2 absolute left-3 top-1/2 -translate-y-1/2 z-10"
          aria-label="Photo précédente"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="brutal-btn bg-[#0A0A0A] text-[#FFE234] p-2 absolute right-3 top-1/2 -translate-y-1/2 z-10"
          aria-label="Photo suivante"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 border-[1.5px] border-black transition-all ${i === current ? "w-6 bg-[#FFE234]" : "w-2 bg-white"}`}
              aria-label={`Photo ${i + 1}`}
            />
          ))}
        </div>
      </div>
      {caption && (
        <p className="text-xs text-gray-500 px-4 py-3 border-t-[3px] border-black">{caption}</p>
      )}
    </div>
  );
}

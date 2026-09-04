"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=85&auto=format&fit=crop", alt: "Bright modern living room" },
  { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=85&auto=format&fit=crop", alt: "Clean exterior of a residential home" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85&auto=format&fit=crop", alt: "Modern kitchen in a rental home" },
  { src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1400&q=85&auto=format&fit=crop", alt: "Comfortable bedroom in a managed property" },
  { src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1400&q=85&auto=format&fit=crop", alt: "Inviting rental property interior" },
];

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [sliding, setSliding] = useState(false);

  const goTo = useCallback((index: number) => {
    if (sliding) return;
    setSliding(true);
    setCurrent(index);
    setTimeout(() => setSliding(false), 500);
  }, [sliding]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl"
      style={{ aspectRatio: "16/7" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-500 ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority={i === 0}
          />
          {/* Subtle gradient overlay for text/controls readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      ))}

      {/* Prev button */}
      <button
        onClick={prev}
        aria-label="Previous photo"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white backdrop-blur-sm flex items-center justify-center shadow-md transition-all hover:scale-105 cursor-pointer"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={next}
        aria-label="Next photo"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white backdrop-blur-sm flex items-center justify-center shadow-md transition-all hover:scale-105 cursor-pointer"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to photo ${i + 1}`}
            className="cursor-pointer transition-all duration-300 rounded-full"
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              background: i === current ? "#C6F23C" : "rgba(255,255,255,0.6)",
            }}
          />
        ))}
      </div>

      {/* Pause indicator */}
      {paused && (
        <div className="absolute top-4 right-4 z-10 bg-black/40 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
          Paused
        </div>
      )}
    </div>
  );
}

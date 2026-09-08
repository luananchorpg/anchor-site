"use client";

import { useEffect, useRef, useState } from "react";

function parseValue(val: string): { prefix: string; number: number; suffix: string } {
  const match = val.match(/^([^0-9]*)([0-9,]+)(\+|M\+|K\+)?(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: val };
  const prefix = match[1] || "";
  const number = parseInt(match[2].replace(/,/g, ""), 10);
  const suffix = (match[3] || "") + (match[4] || "");
  return { prefix, number, suffix };
}

function formatNumber(n: number, original: string): string {
  if (original.includes(",")) {
    return n.toLocaleString("en-US");
  }
  return n.toString();
}

export default function CountUp({ value }: { value: string }) {
  const { prefix, number, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          observer.disconnect();

          const duration = 1800;
          const startTime = performance.now();

          function tick(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.floor(eased * number));
            if (progress < 1) requestAnimationFrame(tick);
            else setDisplay(number);
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [number]);

  // Non-numeric values (like "2023") just show as-is
  if (number === 0 || value === "2023") {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {prefix}{formatNumber(display, value)}{suffix}
    </span>
  );
}

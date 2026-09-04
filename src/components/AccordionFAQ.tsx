"use client";

import { useState } from "react";

export default function AccordionFAQ({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-black/10 border-t border-black/10">
      {items.map((item, i) => (
        <div key={item.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left gap-4 cursor-pointer group"
          >
            <span className={`text-base font-bold transition-colors ${open === i ? "text-black" : "text-black/70 group-hover:text-black"}`}>
              {item.q}
            </span>
            <span
              className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
              style={{ background: open === i ? "#C6F23C" : "rgba(0,0,0,0.06)" }}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                className={`transition-transform ${open === i ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </button>

          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: open === i ? "400px" : "0px" }}
          >
            <p className={`pb-5 text-sm text-black/55 leading-relaxed ${item.a.startsWith("[PLACEHOLDER") ? "text-amber-600 font-medium" : ""}`}>
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

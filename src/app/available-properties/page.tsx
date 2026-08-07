import { Metadata } from "next";

export const metadata: Metadata = { title: "Available Properties | Anchor Property Group" };

export default function AvailableProperties() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20 text-center">
      <p className="text-[11px] font-bold text-lime-text bg-lime-light inline-block px-3 py-1.5 rounded-full mb-6 tracking-widest uppercase">
        Coming soon
      </p>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-5">
        Browsable listings, on the way
      </h1>
      <p className="text-lg text-black/55 mb-10 max-w-md mx-auto leading-relaxed">
        We&apos;re building a live listings page so you can browse available units directly.
        In the meantime, our team can tell you exactly what&apos;s open right now — just ask.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="/get-started" className="bg-black text-lime font-bold text-sm px-8 py-3.5 rounded-md hover:opacity-90 transition-opacity">
          Ask about open units
        </a>
        <a href="/how-it-works" className="text-sm font-semibold text-black hover:opacity-70 transition-opacity">
          See how leasing works →
        </a>
      </div>
    </div>
  );
}

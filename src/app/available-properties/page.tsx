import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Available Properties | Anchor Property Group",
};

export default function AvailableProperties() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20 text-center">
      <p className="text-xs font-medium text-lime-text bg-lime-light inline-block px-3 py-1.5 rounded-full mb-6 tracking-wide">
        COMING SOON
      </p>

      <h1 className="text-[32px] font-medium tracking-tight text-black mb-4">
        Browsable listings, on the way
      </h1>

      <p className="text-black/60 mb-10 max-w-md mx-auto leading-relaxed">
        We&apos;re building a live listings page so you can browse available
        units directly. In the meantime, our team can tell you exactly
        what&apos;s open right now — just ask.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href="/get-started"
          className="bg-black text-lime font-medium text-sm px-7 py-3 rounded-md hover:opacity-90 transition-opacity"
        >
          Ask about open units
        </a>
        <a
          href="/how-it-works"
          className="text-sm font-medium text-black hover:opacity-70 transition-opacity"
        >
          See how leasing works →
        </a>
      </div>
    </div>
  );
}

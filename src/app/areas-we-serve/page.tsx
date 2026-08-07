import { Metadata } from "next";

export const metadata: Metadata = { title: "Areas we serve | Anchor Property Group" };

const cities = ["San Jose", "SF Bay Area", "Sacramento"];

export default function AreasWeServe() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="text-center max-w-md mx-auto mb-14">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">Where we manage</h1>
        <p className="text-lg text-black/55">Rooted in the Bay Area, with coverage stretching all the way to Sacramento.</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {cities.map((city) => (
          <div key={city} className="border border-black/10 rounded-xl p-5">
            <p className="text-lg font-bold text-black mb-1">{city}</p>
            <p className="text-xs font-medium text-black/40 uppercase tracking-wide">Now managing</p>
          </div>
        ))}
      </div>

      <div className="bg-black/[0.04] rounded-xl p-5 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-base font-bold text-black mb-0.5">Somewhere in between?</p>
          <p className="text-sm text-black/55">If you&apos;re along this corridor, we likely cover you. Check your address.</p>
        </div>
        <a href="/get-started" className="text-sm font-bold text-black border border-black/20 px-5 py-2.5 rounded-md whitespace-nowrap hover:bg-white transition-colors">
          Check my address
        </a>
      </div>
    </div>
  );
}

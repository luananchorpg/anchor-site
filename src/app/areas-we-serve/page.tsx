import { Metadata } from "next";

export const metadata: Metadata = { title: "Areas we serve | Anchor Property Group" };

const cities = ["San Jose", "SF Bay Area", "Sacramento"];

export default function AreasWeServe() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="text-center max-w-md mx-auto mb-10">
        <h1 className="text-[32px] font-medium tracking-tight text-black mb-3">
          Where we manage
        </h1>
        <p className="text-black/60">
          Rooted in the Bay Area, with coverage stretching all the way to
          Sacramento.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3.5 mb-6">
        {cities.map((city) => (
          <div key={city} className="border border-black/10 rounded-xl p-4">
            <p className="text-sm font-medium text-black mb-1">{city}</p>
            <p className="text-xs text-black/45">Now managing</p>
          </div>
        ))}
      </div>

      <div className="bg-black/[0.04] rounded-xl p-4.5 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-[13px] font-medium text-black mb-0.5">
            Somewhere in between?
          </p>
          <p className="text-xs text-black/55">
            If you&apos;re along this corridor, we likely cover you. Check
            your address.
          </p>
        </div>
        <a
          href="/get-started"
          className="text-[13px] font-medium text-black border border-black/15 px-4 py-2 rounded-md whitespace-nowrap hover:bg-white transition-colors"
        >
          Check my address
        </a>
      </div>
    </div>
  );
}

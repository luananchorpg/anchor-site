import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Available Properties | Anchor Property Group",
};

export default function AvailableProperties() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-center max-w-lg mx-auto mb-14">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4">
          Find your next home.
        </h1>
        <p className="text-lg text-black/55">
          Browse our available long-term rentals or explore short-term stays —
          we manage both.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Long-term */}
        <div className="border border-black/10 rounded-2xl p-8 flex flex-col">
          <span className="text-[11px] font-bold text-lime-text bg-lime-light inline-block px-3 py-1.5 rounded-full mb-5 tracking-widest uppercase w-fit">
            Long-term Rentals
          </span>
          <h2 className="text-2xl font-bold text-black mb-3">
            12-month leases
          </h2>
          <p className="text-sm text-black/55 leading-relaxed mb-8 flex-1">
            Traditional rentals managed by our team — screened tenants, handled
            maintenance, and monthly reporting. Browse what&apos;s currently available.
          </p>
          <div>
            <span className="inline-block text-[11px] font-bold text-black/40 bg-black/[0.05] px-3 py-1.5 rounded-full tracking-widest uppercase mb-4">
              Coming soon
            </span>
            <p className="text-xs text-black/40 mb-4">
              Live listings are on the way. In the meantime, ask our team what&apos;s open.
            </p>
            <Link
              href="/get-started"
              className="inline-block bg-black text-lime font-bold text-sm px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              Ask about open units
            </Link>
          </div>
        </div>

        {/* Short-term */}
        <div className="border-2 border-lime rounded-2xl p-8 flex flex-col">
          <span className="text-[11px] font-bold text-lime-text bg-lime-light inline-block px-3 py-1.5 rounded-full mb-5 tracking-widest uppercase w-fit">
            Short-term Rentals
          </span>
          <h2 className="text-2xl font-bold text-black mb-3">
            Vacation stays
          </h2>
          <p className="text-sm text-black/55 leading-relaxed mb-8 flex-1">
            Browse our vacation rental portfolio — fully managed, professionally
            cleaned after every stay, and available to book directly.
          </p>
          <a
            href="https://simplyanchor.hospitable.rentals/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-lime font-bold text-sm px-6 py-3 rounded-md hover:opacity-90 transition-opacity w-fit"
          >
            Browse short-term rentals
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
          <p className="text-xs text-black/40 mt-3">Opens on Hospitable</p>
        </div>
      </div>
    </div>
  );
}

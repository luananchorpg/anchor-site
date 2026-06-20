import { Metadata } from "next";

export const metadata: Metadata = { title: "How it works | Anchor Property Group" };

const steps = [
  {
    n: 1,
    title: "Tell us about your property",
    body: "Enter your address and a few details. Takes about a minute, no account needed yet.",
  },
  {
    n: 2,
    title: "Talk to a real person",
    body: "Your dedicated contact calls to understand your property and what you need.",
  },
  {
    n: 3,
    title: "We find your tenant",
    body: "Listing, showings, screening, and lease signing — handled start to finish.",
  },
  {
    n: 4,
    title: "We keep it running",
    body: "Rent, maintenance, renewals, and reporting — ongoing, without you chasing updates.",
  },
];

const trust = [
  {
    title: "One point of contact",
    body: "Not a ticket queue. A person who knows your property.",
  },
  {
    title: "No lock-in contract",
    body: "Leave anytime. We'd rather earn your business every month.",
  },
  {
    title: "Pricing you can repeat back",
    body: "A percentage of rent. That's the whole pitch.",
  },
];

export default function HowItWorks() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="text-center max-w-lg mx-auto mb-12">
        <h1 className="text-[32px] font-medium leading-tight tracking-tight text-black mb-3">
          From address to managed,
          <br />
          in four steps.
        </h1>
        <p className="text-black/60">
          No applications to fill out twice, no sales calls you didn&apos;t
          ask for. Just tell us about your property and we&apos;ll take it
          from there.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-3 mb-16">
        {steps.map((s) => (
          <div key={s.n} className="border border-black/10 rounded-xl p-4">
            <div className="w-[26px] h-[26px] rounded-full bg-black text-lime text-xs font-medium flex items-center justify-center mb-3">
              {s.n}
            </div>
            <p className="text-sm font-medium text-black mb-1.5">
              {s.title}
            </p>
            <p className="text-xs text-black/55 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-black/10 pt-10 grid md:grid-cols-3 gap-6 mb-12">
        {trust.map((t) => (
          <div key={t.title}>
            <p className="text-sm font-medium text-black mb-1">{t.title}</p>
            <p className="text-xs text-black/55 leading-relaxed">{t.body}</p>
          </div>
        ))}
      </div>

      <div className="text-center border-t border-black/10 pt-10">
        <a
          href="/get-started"
          className="inline-block bg-black text-lime font-medium text-sm px-7 py-3 rounded-md hover:opacity-90 transition-opacity"
        >
          Get started
        </a>
      </div>
    </div>
  );
}

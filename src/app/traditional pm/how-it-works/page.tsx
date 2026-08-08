import { Metadata } from "next";

export const metadata: Metadata = { title: "How it works | Traditional Property Management | Anchor Property Group" };

const steps = [
  { n: 1, title: "Tell us about your property", body: "Enter your address and a few details. Takes about a minute, no account needed yet." },
  { n: 2, title: "Talk to a real person", body: "Your dedicated contact calls to understand your property and what you need." },
  { n: 3, title: "We find your tenant", body: "Listing, showings, screening, and lease signing — handled start to finish." },
  { n: 4, title: "We keep it running", body: "Rent, maintenance, renewals, and reporting — ongoing, without you chasing updates." },
];

const trust = [
  { title: "One point of contact", body: "Not a ticket queue. A person who knows your property." },
  { title: "No lock-in contract", body: "Leave anytime. We'd rather earn your business every month." },
  { title: "Pricing you can repeat back", body: "A percentage of rent. That's the whole pitch." },
];

export default function TraditionalHowItWorks() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="text-center max-w-lg mx-auto mb-4">
        <span className="inline-block text-[11px] font-bold text-lime-text bg-lime-light px-3 py-1.5 rounded-full mb-4 tracking-widest uppercase">
          Traditional Property Management
        </span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-black mb-4">
          From address to managed,<br />in four steps.
        </h1>
        <p className="text-lg text-black/55">
          No applications to fill out twice, no sales calls you didn&apos;t ask for.
          Just tell us about your property and we&apos;ll take it from there.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-20 mt-12">
        {steps.map((s) => (
          <div key={s.n} className="border border-black/10 rounded-xl p-5">
            <div className="w-10 h-10 rounded-full bg-black text-lime flex items-center justify-center font-bold text-base mb-4">
              {s.n}
            </div>
            <p className="text-base font-bold text-black mb-2">{s.title}</p>
            <p className="text-sm text-black/55 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-black/10 pt-16 mb-16">
        <h2 className="text-2xl font-bold text-black text-center mb-12">Why owners choose us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {trust.map((t) => (
            <div key={t.title} className="text-center">
              <p className="text-lg font-bold text-black mb-2">{t.title}</p>
              <p className="text-sm text-black/55 leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center border-t border-black/10 pt-12">
        <a href="/get-started" className="inline-block bg-black text-lime font-bold text-sm px-8 py-3.5 rounded-md hover:opacity-90 transition-opacity">
          Get started
        </a>
      </div>
    </div>
  );
}

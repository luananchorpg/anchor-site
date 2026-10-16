import Link from "next/link";
import AccordionFAQ from "@/components/AccordionFAQ";

export const metadata = {
  title: "Buy or Sell | Anchor Property Group",
  description:
    "Tired of being a landlord? Sell as-is with no renovations. Ready to add a rental? Buy with a team that already knows rentals. Anchor Property Group, San Jose and the Bay Area.",
};

const sellCards = [
  {
    title: "Sell as-is",
    body: "No repairs or renovations from you, and no staging to schedule. Buyers may still inspect and take the condition into account, so we talk through what to expect up front.",
  },
  {
    title: "Tenants in place or vacant",
    body: "You can sell with tenants in place or plan for a vacant sale. Each has trade-offs, and we lay them out for your situation before you decide.",
  },
  {
    title: "We already know the property",
    body: "If Anchor manages your property today, the rent roll, lease details, and maintenance history are already organized. That makes it easier for buyers to say yes.",
  },
];

const buyCards = [
  {
    title: "Search with a plan",
    body: "Tell us your budget, area, and goals, and we focus on properties that fit instead of sending you everything on the market.",
  },
  {
    title: "Know what it takes to run",
    body: "We manage homes across the Bay Area, so we can speak to realistic rents and what a property needs day to day before you make an offer.",
  },
  {
    title: "Management ready at closing",
    body: "If you want it, we take over management after you close, so the property is rented and running without you starting from scratch.",
  },
];

const steps = [
  { n: "1", title: "Tell us your goal", body: "Selling, buying, or not sure yet. A short conversation is enough to start." },
  { n: "2", title: "We talk through options", body: "We explain what to expect, what it may cost, and what we would recommend, in plain language." },
  { n: "3", title: "We list or we search", body: "We market your property, or we search for the right one for you." },
  { n: "4", title: "Close, and keep going", body: "Once it closes, we can keep managing the property if you want us to." },
];

const faqs = [
  {
    q: "Do I have to fix anything before selling?",
    a: "No. You can sell as-is, with no repairs or renovations required from you. Buyers may still inspect the property and take its condition into account when they make an offer.",
  },
  {
    q: "Can I sell with tenants in place?",
    a: "Often yes. When a property sells with tenants, the lease generally continues with the new owner. Another option is a vacant sale. Each approach has trade-offs, and tenant rules in California are strict, so we walk through your situation with you and recommend you review it with an attorney.",
  },
  {
    q: "What does it cost?",
    a: "It depends on whether you are buying or selling and on the property itself. We give you a clear number before you commit, with no fine print.",
  },
  {
    q: "What about taxes if I sell a rental?",
    a: "Selling a rental can have tax consequences. We are not tax advisors, so we recommend talking with a CPA before you decide.",
  },
  {
    q: "Can Anchor manage the property after I buy?",
    a: "Yes. If you want, we can manage the property after closing.",
  },
];

export default function BuySellPage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <p className="text-[11px] font-bold text-lime-text bg-lime-light inline-block px-2.5 py-1 rounded-md mb-5 tracking-widest uppercase">
          Buy / Sell
        </p>
        <h1 className="text-5xl md:text-[64px] font-extrabold leading-[1.04] tracking-tight text-black mb-5 max-w-3xl">
          Buy or sell with a team that already knows rentals.
        </h1>
        <p className="text-lg text-black/55 leading-relaxed mb-8 max-w-xl">
          Whether you are done being a landlord or ready to add a property, we guide the sale or the purchase in plain
          language, with no fine print.
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <a
            href="mailto:team@anchorpg.com"
            className="h-12 px-7 flex items-center justify-center bg-lime text-lime-dark text-sm font-bold rounded-md hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Talk to our team
          </a>
          <a href="#sell" className="text-sm font-semibold text-black hover:opacity-70 transition-opacity">
            Sell as-is →
          </a>
          <a href="#buy" className="text-sm font-semibold text-black hover:opacity-70 transition-opacity">
            Buy a rental →
          </a>
        </div>
      </section>

      {/* Sell */}
      <section id="sell" className="mx-auto max-w-6xl px-6 py-16 border-t border-black/10">
        <p className="text-[11px] font-bold text-lime-text bg-lime-light inline-block px-2.5 py-1 rounded-md mb-4 tracking-widest uppercase">
          Selling
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">Tired of being a landlord?</h2>
        <p className="text-lg text-black/55 mb-10 max-w-xl">
          We can sell your home for you. Sell as-is, without renovations. We handle the listing and the details so you
          can move on.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {sellCards.map((c) => (
            <div key={c.title} className="card-hover border border-black/10 rounded-2xl p-7 h-full">
              <p className="text-xl font-bold text-black mb-2">{c.title}</p>
              <p className="text-sm text-black/55 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Buy */}
      <section id="buy" className="mx-auto max-w-6xl px-6 py-16 border-t border-black/10">
        <p className="text-[11px] font-bold text-lime-text bg-lime-light inline-block px-2.5 py-1 rounded-md mb-4 tracking-widest uppercase">
          Buying
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">Ready to add a rental?</h2>
        <p className="text-lg text-black/55 mb-10 max-w-xl">
          Tell us what you are looking for. We help you find and buy it, then manage it once it is yours.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {buyCards.map((c) => (
            <div key={c.title} className="card-hover border border-black/10 rounded-2xl p-7 h-full">
              <p className="text-xl font-bold text-black mb-2">{c.title}</p>
              <p className="text-sm text-black/55 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-black text-white my-8 mx-4 md:mx-8 rounded-3xl overflow-hidden">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <p className="text-lime text-[11px] font-bold tracking-widest uppercase mb-4">How it works</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12">Four steps. No surprises.</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="border border-white/10 rounded-2xl p-6 hover:border-lime/40 transition-colors h-full">
                <p className="text-lime text-sm font-bold mb-3">{s.n}</p>
                <p className="text-base font-bold text-white mb-2">{s.title}</p>
                <p className="text-sm text-white/55 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-extrabold text-black mb-8">Common questions</h2>
        <AccordionFAQ items={faqs} />
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-black/10">
        <h2 className="text-3xl font-extrabold text-black mb-3">Let us talk it through.</h2>
        <p className="text-black/55 text-lg max-w-lg mb-6">
          No pressure and no obligation. Tell us what you have in mind and we will tell you honestly what we would do.
        </p>
        <div className="flex flex-wrap items-center gap-5 mb-10">
          <a
            href="mailto:team@anchorpg.com"
            className="h-12 px-7 flex items-center justify-center bg-lime text-lime-dark text-sm font-bold rounded-md hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            team@anchorpg.com
          </a>
          <a href="tel:+14085492858" className="text-sm font-bold text-black hover:opacity-70 transition-opacity">
            Call 408.549.2858
          </a>
          <Link href="/get-started" className="text-sm font-semibold text-black/55 hover:text-black transition-colors">
            Want us to manage a property instead? →
          </Link>
        </div>
        <p className="text-xs text-black/40">Anchor Property Group · California DRE #02067839</p>
      </section>
    </div>
  );
}

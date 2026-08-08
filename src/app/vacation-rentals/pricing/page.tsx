import { Metadata } from "next";

export const metadata: Metadata = { title: "Pricing | Vacation Rental Management | Anchor Property Group" };

export default function VacationPricing() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-center max-w-lg mx-auto mb-14">
        <span className="inline-block text-[11px] font-bold text-lime-text bg-lime-light px-3 py-1.5 rounded-full mb-4 tracking-widest uppercase">
          Vacation Rental Management
        </span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-black mb-4">
          One simple fee.<br />Everything included.
        </h1>
        <p className="text-lg text-black/55">
          No setup fees, no hidden charges, no à la carte add-ons.
          We earn when you earn.
        </p>
      </div>

      {/* Main pricing card */}
      <div className="border-2 border-lime rounded-2xl p-8 md:p-12 text-center mb-8 relative">
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-lime text-lime-dark text-[11px] font-bold px-4 py-1.5 rounded-full tracking-wide whitespace-nowrap">
          Full-service vacation rental management
        </span>
        <div className="flex items-end justify-center gap-2 mb-2">
          <span className="text-7xl md:text-8xl font-bold text-black tracking-tight">15%</span>
          <span className="text-lg text-black/40 font-medium mb-3">of nightly revenue</span>
        </div>
        <p className="text-black/55 mb-10 max-w-md mx-auto">
          We take 15% of every booking. That&apos;s it. No monthly retainer,
          no fee when your property sits empty, no surprises on your statement.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 text-left max-w-lg mx-auto mb-10">
          {[
            "Listing on Airbnb, VRBO & direct booking",
            "Professional photography coordination",
            "Dynamic pricing & revenue optimization",
            "24/7 guest communication & support",
            "Cleaning coordination after every stay",
            "Regular property inspections",
            "Maintenance coordination",
            "Monthly owner statements",
          ].map((f) => (
            <p key={f} className="text-sm flex items-start gap-2">
              <span className="text-[#639922] font-bold mt-0.5">✓</span>
              <span className="text-black/70">{f}</span>
            </p>
          ))}
        </div>
        <a href="/get-started" className="inline-block bg-black text-lime font-bold text-sm px-10 py-3.5 rounded-md hover:opacity-90 transition-opacity">
          Get started
        </a>
      </div>

      {/* Comparison callout */}
      <div className="bg-black/[0.03] rounded-xl p-6 text-center">
        <p className="text-sm font-bold text-black mb-1">Also offer long-term rental management?</p>
        <p className="text-sm text-black/55 mb-3">
          Our traditional property management pricing is separate — 5% for your first property, 4% for each after.
        </p>
        <a href="/traditional-pm/pricing" className="text-sm font-bold text-black underline underline-offset-2 hover:opacity-70 transition-opacity">
          See traditional PM pricing →
        </a>
      </div>
    </div>
  );
}

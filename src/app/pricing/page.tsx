import { Metadata } from "next";

export const metadata: Metadata = { title: "Pricing | Anchor Property Group" };

export default function Pricing() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="text-center max-w-lg mx-auto mb-14">
        <span className="inline-flex items-center gap-2 bg-lime-light border border-lime text-lime-text text-[11px] font-bold px-3 py-1.5 rounded-full mb-5 tracking-widest uppercase">
          No flat fees. No fine print.
        </span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-black mb-4">
          Pay for results,<br />not promises.
        </h1>
        <p className="text-lg text-black/55">
          We earn a percentage of your rent — never a fixed rate, regardless
          of whether your unit is occupied. When you do well, we do well.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-12">
        <div className="border border-black/10 rounded-xl p-6">
          <p className="text-[11px] font-bold text-black/40 tracking-widest uppercase mb-3">First property</p>
          <div className="flex items-end gap-1 mb-1">
            <span className="text-6xl font-bold text-black tracking-tight">5%</span>
            <span className="text-base text-black/40 font-medium mb-2">/mo</span>
          </div>
          <p className="text-sm text-black/40 mb-6">of monthly rent</p>
          <div className="border-t border-black/8 pt-5 flex flex-col gap-3">
            {["Rent collection", "Maintenance coordination", "Owner reporting"].map((f) => (
              <p key={f} className="text-sm flex items-center gap-2">
                <span className="text-[#639922] font-bold">✓</span>
                <span className="text-black/70">{f}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="border-2 border-lime rounded-xl p-6 relative">
          <span className="absolute -top-3 left-5 bg-lime text-lime-dark text-[11px] font-bold px-3 py-1 rounded-full tracking-wide">
            Most properties
          </span>
          <p className="text-[11px] font-bold text-black/40 tracking-widest uppercase mb-3">Every property after</p>
          <div className="flex items-end gap-1 mb-1">
            <span className="text-6xl font-bold text-black tracking-tight">4%</span>
            <span className="text-base text-black/40 font-medium mb-2">/mo</span>
          </div>
          <p className="text-sm text-black/40 mb-6">of monthly rent</p>
          <div className="border-t border-black/8 pt-5 flex flex-col gap-3">
            {["Everything in the first tier", "Same team, same dashboard", "No portfolio cap"].map((f) => (
              <p key={f} className="text-sm flex items-center gap-2">
                <span className="text-[#639922] font-bold">✓</span>
                <span className="text-black/70">{f}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="border border-black/10 rounded-xl p-6">
          <p className="text-[11px] font-bold text-black/40 tracking-widest uppercase mb-3">One-time fees</p>
          <div className="mb-6">
            <p className="text-2xl font-bold text-black mb-0.5">50% of rent</p>
            <p className="text-sm text-black/40">tenant placement, capped at $2,000</p>
            <p className="text-2xl font-bold text-black mt-4 mb-0.5">$200</p>
            <p className="text-sm text-black/40">lease renewal</p>
          </div>
          <div className="border-t border-black/8 pt-5">
            <p className="text-sm flex items-center gap-2">
              <span className="text-[#639922] font-bold">✓</span>
              <span className="text-black/70">Only pay when it happens</span>
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <a href="/get-started" className="inline-block bg-black text-lime font-bold text-sm px-8 py-3.5 rounded-md hover:opacity-90 transition-opacity">
          Get started
        </a>
        <p className="text-xs text-black/35 mt-3">Cancel anytime. No lock-in period.</p>
      </div>
    </div>
  );
}

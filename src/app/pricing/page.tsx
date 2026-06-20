import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Anchor Property Group",
};

const tiers = [
  {
    label: "First property",
    price: "5%",
    suffix: "/mo",
    sub: "of monthly rent",
    features: ["Rent collection", "Maintenance coordination", "Owner reporting"],
    featured: false,
  },
  {
    label: "Every property after",
    price: "4%",
    suffix: "/mo",
    sub: "of monthly rent",
    features: [
      "Everything in the first tier",
      "Same team, same dashboard",
      "No portfolio cap",
    ],
    featured: true,
    badge: "Most properties",
  },
];

export default function Pricing() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="text-center max-w-lg mx-auto mb-12">
        <span className="inline-flex items-center gap-2 bg-lime-light border border-lime text-lime-text text-xs font-medium px-3 py-1.5 rounded-full mb-5">
          No flat fees. No fine print.
        </span>
        <h1 className="text-[34px] font-medium leading-tight tracking-tight text-black mb-3">
          Pay for results,
          <br />
          not promises.
        </h1>
        <p className="text-black/60">
          We earn a percentage of your rent — never a fixed rate, regardless
          of whether your unit is occupied. When you do well, we do well.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-3.5">
        {tiers.map((tier) => (
          <div
            key={tier.label}
            className={`rounded-xl p-5 ${
              tier.featured
                ? "border-2 border-lime"
                : "border border-black/10"
            }`}
          >
            {tier.badge && (
              <span className="inline-block bg-lime text-lime-dark text-[11px] font-medium px-2.5 py-1 rounded-md mb-2.5">
                {tier.badge}
              </span>
            )}
            <p className="text-xs text-black/50 tracking-wide mb-1">
              {tier.label.toUpperCase()}
            </p>
            <p className="text-3xl font-medium text-black mb-1">
              {tier.price}
              <span className="text-sm text-black/50 font-normal">
                {tier.suffix}
              </span>
            </p>
            <p className="text-xs text-black/50 mb-4">{tier.sub}</p>
            <div className="border-t border-black/10 pt-3.5 flex flex-col gap-2.5">
              {tier.features.map((f) => (
                <p key={f} className="text-sm flex items-start gap-1.5">
                  <span className="text-[#639922] mt-0.5">✓</span>
                  {f}
                </p>
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-xl p-5 border border-black/10">
          <p className="text-xs text-black/50 tracking-wide mb-1">
            ONE-TIME FEES
          </p>
          <p className="text-lg font-medium text-black mb-0.5">
            50% of rent
          </p>
          <p className="text-xs text-black/50 mb-2.5">
            tenant placement, capped at $2,000
          </p>
          <p className="text-lg font-medium text-black mb-0.5">$200</p>
          <p className="text-xs text-black/50 mb-4">lease renewal</p>
          <div className="border-t border-black/10 pt-3.5">
            <p className="text-sm flex items-start gap-1.5">
              <span className="text-[#639922] mt-0.5">✓</span>
              Only pay when it happens
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <a
          href="/get-started"
          className="inline-block bg-black text-lime font-medium text-sm px-7 py-3 rounded-md hover:opacity-90 transition-opacity"
        >
          Get started
        </a>
        <p className="text-xs text-black/40 mt-2.5">
          Cancel anytime. No lock-in period.
        </p>
      </div>
    </div>
  );
}

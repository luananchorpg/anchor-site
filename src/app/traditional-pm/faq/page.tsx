import { Metadata } from "next";
import AccordionFAQ from "@/components/AccordionFAQ";

export const metadata: Metadata = { title: "FAQ | Traditional Property Management | Anchor Property Group" };

const faqs = [
  { q: "Do you offer just tenant placement, without ongoing management?", a: "No. We only offer full property management. Placing a tenant and then walking away leaves you on your own for everything that happens after move-in — that's the part that actually matters, and it's exactly what we don't think should be optional." },
  { q: "How is pricing calculated?", a: "A percentage of your monthly rent — 5% for your first property, 4% for every property after. Tenant placement is 50% of one month's rent, capped at $2,000. Lease renewals are a flat $200." },
  { q: "What if my unit is vacant?", a: "You're not charged the management fee while a unit is vacant and unoccupied, since it's based on rent collected. We're working to fill it as quickly as you are." },
  { q: "Is there a contract or lock-in period?", a: "Yes, there's a standard management agreement, but no lock-in period and no breakup fee. You can cancel anytime, and we'll help with the transition to a new manager or self-management." },
  { q: "Will I have one point of contact, or a support queue?", a: "One point of contact who knows your property. We're a small team by design." },
  { q: "What areas do you serve?", a: "The Bay Area and select California cities, with more on the way. See our full coverage area." },
];

export default function TraditionalFAQ() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <span className="block text-center text-[11px] font-bold text-lime-text bg-lime-light px-3 py-1.5 rounded-full mb-4 tracking-widest uppercase w-fit mx-auto">
        Traditional Property Management
      </span>
      <h1 className="text-4xl md:text-5xl font-extrabold text-black text-center mb-3">Questions, answered</h1>
      <p className="text-lg text-black/55 text-center mb-12">Everything you need to know before getting started.</p>
      <AccordionFAQ items={faqs} />
    </div>
  );
}

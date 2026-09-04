import { Metadata } from "next";
import AccordionFAQ from "@/components/AccordionFAQ";

export const metadata: Metadata = { title: "FAQ | Vacation Rental Management | Anchor Property Group" };

const faqs = [
  { q: "What is your management fee?", a: "15% of nightly revenue. That covers everything — listings, guest management, cleaning coordination, maintenance, and monthly statements. No setup fees, no monthly retainer, no hidden charges." },
  { q: "Which platforms do you list on?", a: "Airbnb, VRBO, and our own direct booking channel. More platforms means more visibility and more bookings." },
  { q: "Can I still use my property for personal stays?", a: "Yes. You can block off dates for personal use anytime. Just let us know as far in advance as possible so we can avoid conflicting with existing bookings." },
  { q: "Do you handle cleaning between guests?", a: "Yes — professional turnover cleaning is coordinated after every checkout, before the next guest arrives. This is included in the management fee." },
  { q: "What happens if a guest damages my property?", a: "[PLACEHOLDER — confirm your damage policy, e.g. whether you require a security deposit, use Airbnb's AirCover, or carry separate damage protection.]" },
  { q: "How do you screen guests?", a: "[PLACEHOLDER — confirm your guest screening process, e.g. ID verification, review history requirements, minimum stay age, etc.]" },
  { q: "How long does it take to go live?", a: "[PLACEHOLDER — confirm your typical onboarding timeline from signing to first guest booking.]" },
  { q: "Is there a contract or lock-in period?", a: "[PLACEHOLDER — confirm your vacation rental contract terms, e.g. month-to-month or minimum term, and any cancellation policy.]" },
];

export default function VacationFAQ() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <span className="block text-center text-[11px] font-bold text-lime-text bg-lime-light px-3 py-1.5 rounded-full mb-4 tracking-widest uppercase w-fit mx-auto">
        Vacation Rental Management
      </span>
      <h1 className="text-4xl md:text-5xl font-extrabold text-black text-center mb-3">Questions, answered</h1>
      <p className="text-lg text-black/55 text-center mb-12">Everything homeowners ask before getting started.</p>
      <AccordionFAQ items={faqs} />
      <p className="text-xs text-black/40 mt-8 text-center">Answers marked in amber are placeholders — fill these in before going live.</p>
    </div>
  );
}

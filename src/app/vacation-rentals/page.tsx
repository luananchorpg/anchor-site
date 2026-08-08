import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Vacation Rental Management | Anchor Property Group" };

const benefits = [
  {
    label: "Listings & Marketing",
    title: "Listed everywhere guests look",
    body: "We publish your property on Airbnb, VRBO, and direct booking channels — with professional photography, optimized descriptions, and dynamic pricing to maximize occupancy year-round.",
  },
  {
    label: "Guest Management",
    title: "Every guest, handled",
    body: "From the first inquiry to checkout, we manage all guest communication, booking confirmations, check-in coordination, and 24/7 support during their stay.",
  },
  {
    label: "Your Home",
    title: "Cared for between every stay",
    body: "Professional cleaning after each checkout, regular property inspections, and maintenance coordination — so your home is always guest-ready and well-protected.",
  },
];

const whyUs = [
  { title: "One flat fee", body: "15% of nightly revenue. No hidden charges, no nickel-and-diming on services that should be included." },
  { title: "You keep control", body: "Block dates for personal use anytime. Your home, your calendar — we just handle the rest." },
  { title: "Both platforms", body: "Listed on Airbnb and VRBO simultaneously, plus direct booking. More channels means more bookings." },
  { title: "Local team", body: "A real team in your area — not a remote call center — handling inspections, vendors, and emergencies." },
];

export default function VacationRentals() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <span className="inline-block text-[11px] font-bold text-lime-text bg-lime-light px-3 py-1.5 rounded-full mb-5 tracking-widest uppercase">
          Vacation Rental Management
        </span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-black mb-5">
          Your vacation rental,<br />working harder for you.
        </h1>
        <p className="text-lg text-black/55 max-w-xl mx-auto mb-8">
          We handle everything — listings, guests, cleaning, maintenance —
          so you earn more without managing more. Just 15% of nightly revenue, no hidden fees.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/get-started" className="h-12 px-8 flex items-center justify-center bg-black text-lime text-sm font-bold rounded-md hover:opacity-90 transition-opacity">
            Get started
          </Link>
          <Link href="/vacation-rentals/how-it-works" className="text-sm font-semibold text-black hover:opacity-70 transition-opacity inline-flex items-center gap-1.5">
            See how it works →
          </Link>
        </div>
      </section>

      {/* Stats — placeholder for real numbers */}
      <section className="border-t border-b border-black/10">
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4">
          {[
            { value: "[#]", label: "Vacation rentals managed" },
            { value: "[#]", label: "Avg. occupancy rate" },
            { value: "[#]", label: "Guest reviews" },
            { value: "15%", label: "Simple flat fee" },
          ].map((s, i) => (
            <div key={s.label} className={`px-6 py-6 ${i < 3 ? "border-r border-black/10" : ""}`}>
              <p className="text-3xl font-bold text-black tracking-tight">{s.value}</p>
              <p className="text-xs font-medium text-black/50 mt-1 uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What we handle */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">What we handle, end to end.</h2>
        <p className="text-lg text-black/55 mb-12 max-w-lg">
          Full-service management means exactly that — you shouldn&apos;t have to think about any of this.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {benefits.map((b) => (
            <div key={b.label} className="border border-black/10 rounded-xl p-6">
              <p className="text-[11px] font-bold text-lime-text bg-lime-light inline-block px-2.5 py-1 rounded-md mb-4 tracking-widest uppercase">
                {b.label}
              </p>
              <p className="text-xl font-bold text-black mb-2">{b.title}</p>
              <p className="text-sm text-black/55 leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-14">Why owners choose Anchor</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {whyUs.map((w) => (
              <div key={w.title}>
                <p className="text-lg font-bold text-black mb-2">{w.title}</p>
                <p className="text-sm text-black/55 leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-black mb-3">Ready to put your property to work?</h2>
          <p className="text-black/55 mb-8 max-w-md mx-auto">
            Tell us about your vacation rental and we&apos;ll reach out with next steps — no commitment required.
          </p>
          <Link href="/get-started" className="inline-block bg-black text-lime font-bold text-sm px-8 py-3.5 rounded-md hover:opacity-90 transition-opacity">
            Get started
          </Link>
        </div>
      </section>
    </div>
  );
}

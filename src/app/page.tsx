import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PhotoCarousel from "@/components/PhotoCarousel";

const stats = [
  { value: "2023", label: "Year founded" },
  { value: "126", label: "Units managed", suffix: "and counting" },
  { value: "10", label: "Cities served", suffix: "and counting" },
  { value: "303", label: "Tenant placements", suffix: "and counting" },
  { value: "1,075+", label: "On-demand showings" },
  { value: "$45M+", label: "Rent processed" },
  { value: "1,372+", label: "Repairs coordinated" },
  { value: "4,541+", label: "Applications processed" },
  { value: "50+", label: "Trusted vendors" },
];

const services = [
  {
    label: "Traditional PM",
    title: "Long-term rental management",
    body: "Tenant placement, rent collection, maintenance, and renewals — handled end to end. You collect rent, we handle everything else.",
    href: "/traditional-pm/how-it-works",
    linkLabel: "How it works →",
  },
  {
    label: "Vacation Rentals",
    title: "Short-term rental management",
    body: "Listed on Airbnb, VRBO, and direct booking. Dynamic pricing, guest management, and professional cleaning after every stay.",
    href: "/vacation-rentals",
    linkLabel: "See vacation rentals →",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-10">
        <div className="max-w-2xl mb-10">
          <FadeUp>
            <span className="inline-flex items-center gap-2 bg-lime-light border border-lime text-lime-text text-xs font-bold px-3 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              Now leasing in the Bay Area
            </span>
          </FadeUp>
          <FadeUp delay={80}>
            <h1 className="text-5xl md:text-[60px] font-extrabold leading-[1.04] tracking-tight text-black mb-5">
              Less to manage.<br />More to show for it.
            </h1>
          </FadeUp>
          <FadeUp delay={160}>
            <p className="text-lg text-black/55 leading-relaxed mb-8 max-w-lg">
              A real team that answers the phone, handles the details, and only
              gets paid when your property does. No fine print, no jargon, no surprises.
            </p>
          </FadeUp>
          <FadeUp delay={240}>
            <div className="flex items-center gap-5">
              <Link href="/get-started"
                className="h-12 px-7 flex items-center justify-center bg-lime text-lime-dark text-sm font-bold rounded-md hover:opacity-90 transition-opacity whitespace-nowrap shadow-sm">
                Get started
              </Link>
              <Link href="/traditional-pm/how-it-works"
                className="text-sm font-semibold text-black hover:opacity-70 transition-opacity inline-flex items-center gap-1.5">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </FadeUp>
        </div>

        {/* Carousel — full width below hero text */}
        <FadeUp delay={320}>
          <PhotoCarousel />
        </FadeUp>
      </section>

      {/* Two services */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-black/10">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
            Two services. One team.
          </h2>
          <p className="text-lg text-black/55 mb-12 max-w-lg">
            Whether you need a long-term tenant or short-term guests, we manage both — under one roof.
          </p>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <FadeUp key={s.label} delay={i * 100}>
              <div className="card-hover border border-black/10 rounded-2xl p-7 h-full flex flex-col">
                <p className="text-[11px] font-bold text-lime-text bg-lime-light inline-block px-2.5 py-1 rounded-md mb-4 tracking-widest uppercase w-fit">
                  {s.label}
                </p>
                <p className="text-xl font-bold text-black mb-2">{s.title}</p>
                <p className="text-sm text-black/55 leading-relaxed mb-6 flex-1">{s.body}</p>
                <Link href={s.href} className="text-sm font-bold text-black hover:opacity-70 transition-opacity">
                  {s.linkLabel}
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Dark section */}
      <section className="bg-black text-white my-8 mx-4 md:mx-8 rounded-3xl overflow-hidden">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <FadeUp>
            <p className="text-lime text-[11px] font-bold tracking-widest uppercase mb-4">Why Anchor</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-14">
              A property manager that actually<br className="hidden md:block" /> does the managing.
            </h2>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "You only pay when rent comes in", body: "Percentage-based pricing means we're incentivized to keep your property occupied. If it sits empty, we don't charge." },
              { title: "One real person, not a queue", body: "You get a dedicated contact who knows your property — not a rotating support team reading from a script." },
              { title: "No lock-in, no breakup fee", body: "Cancel anytime. We'd rather earn your trust month by month than hold you to a contract you didn't love." },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 100}>
                <div className="border border-white/10 rounded-2xl p-6 hover:border-lime/40 transition-colors h-full">
                  <p className="text-base font-bold text-white mb-2">{item.title}</p>
                  <p className="text-sm text-white/55 leading-relaxed">{item.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <FadeUp>
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">Built by owners, for owners.</h2>
            <p className="text-black/55 text-lg">A track record you can check, not a promise you have to take on faith.</p>
          </div>
        </FadeUp>
        <div className="grid sm:grid-cols-3 gap-3.5">
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 50}>
              <div className="card-hover border border-black/10 rounded-2xl p-6">
                <p className="text-4xl font-extrabold text-black tracking-tight">{s.value}</p>
                <p className="text-sm font-semibold text-black/60 mt-1.5">{s.label}</p>
                {s.suffix && <p className="text-xs text-black/35 mt-0.5">{s.suffix}</p>}
              </div>
            </FadeUp>
          ))}
        </div>
        <p className="text-xs text-black/35 text-center mt-6">
          Figures as of June 2026. Updated periodically as our portfolio grows.
        </p>
      </section>

      {/* Pricing close */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-black/10">
        <FadeUp>
          <h2 className="text-3xl font-extrabold text-black mb-3">Pay for results, not promises.</h2>
          <p className="text-black/55 text-lg max-w-lg mb-6">
            We earn a percentage of your revenue — never a flat rate regardless of occupancy. When you do well, we do well.
          </p>
          <Link href="/traditional-pm/pricing"
            className="inline-block text-sm font-bold text-black border border-black/20 px-5 py-2.5 rounded-md hover:bg-black/5 transition-colors">
            See pricing →
          </Link>
        </FadeUp>
      </section>
    </div>
  );
}

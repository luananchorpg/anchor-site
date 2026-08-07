import Link from "next/link";
import Image from "next/image";

const photos = [
  { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&auto=format&fit=crop", alt: "Bright modern living room" },
  { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&auto=format&fit=crop", alt: "Clean exterior of a residential home" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop", alt: "Modern kitchen in a rental home" },
  { src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80&auto=format&fit=crop", alt: "Comfortable bedroom in a managed property" },
  { src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80&auto=format&fit=crop", alt: "Inviting rental property interior" },
];

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

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-lime-light border border-lime text-lime-text text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase">
              Now leasing in the Bay Area
            </span>
            <h1 className="text-5xl md:text-[52px] font-bold leading-[1.08] tracking-tight text-black mb-5">
              Less to manage.<br />More to show for it.
            </h1>
            <p className="text-lg text-black/55 leading-relaxed mb-8">
              A real team that answers the phone, handles the details, and only
              gets paid when your property does. No fine print, no jargon, no surprises.
            </p>
            <div className="flex items-center gap-5">
              <Link href="/get-started" className="h-12 px-7 flex items-center justify-center bg-lime text-lime-dark text-sm font-bold rounded-md hover:opacity-90 transition-opacity whitespace-nowrap">
                Get started
              </Link>
              <Link href="/how-it-works" className="text-sm font-semibold text-black hover:opacity-70 transition-opacity inline-flex items-center gap-1.5">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-3 h-[480px]">
            <div className="flex flex-col gap-3">
              <div className="relative rounded-xl overflow-hidden flex-1">
                <Image src={photos[0].src} alt={photos[0].alt} fill className="object-cover" sizes="300px" priority />
              </div>
              <div className="relative rounded-xl overflow-hidden h-40">
                <Image src={photos[1].src} alt={photos[1].alt} fill className="object-cover" sizes="300px" />
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-8">
              <div className="relative rounded-xl overflow-hidden h-40">
                <Image src={photos[2].src} alt={photos[2].alt} fill className="object-cover" sizes="300px" />
              </div>
              <div className="relative rounded-xl overflow-hidden flex-1">
                <Image src={photos[3].src} alt={photos[3].alt} fill className="object-cover" sizes="300px" />
              </div>
              <div className="relative rounded-xl overflow-hidden h-32">
                <Image src={photos[4].src} alt={photos[4].alt} fill className="object-cover" sizes="300px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-black/10">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3 max-w-lg">
          A property manager that actually does the managing.
        </h2>
        <p className="text-black/55 text-lg max-w-lg mb-12">
          From your first call to your monthly statement, here&apos;s what working with us actually looks like.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard label="Get started" title="Tell us about your property" body="We learn what you need before anything else happens." href="/get-started" linkLabel="Start here" />
          <InfoCard label="Leasing" title="We find the right tenant" body="Listing, screening, and lease signing, handled start to finish." href="/how-it-works" linkLabel="See how it works" />
          <InfoCard label="Ongoing" title="We keep things running" body="Rent, maintenance, renewals, and reporting, without you chasing updates." href="/pricing" linkLabel="See pricing" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-black/10">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">Built by owners, for owners.</h2>
          <p className="text-black/55 text-lg">A track record you can check, not a promise you have to take on faith.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-3.5">
          {stats.map((s) => (
            <div key={s.label} className="border border-black/10 rounded-xl p-5">
              <p className="text-4xl font-bold text-black tracking-tight">{s.value}</p>
              <p className="text-sm font-medium text-black/70 mt-1.5">{s.label}</p>
              {s.suffix && <p className="text-xs text-black/35 mt-0.5">{s.suffix}</p>}
            </div>
          ))}
        </div>
        <p className="text-xs text-black/35 text-center mt-6">Figures as of June 2026. Updated periodically as our portfolio grows.</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-black/10">
        <h2 className="text-3xl font-bold text-black mb-3">Pay for results, not promises.</h2>
        <p className="text-black/55 text-lg max-w-lg mb-6">
          We earn a percentage of your rent — never a flat rate, regardless of whether your unit is occupied. When you do well, we do well.
        </p>
        <Link href="/pricing" className="inline-block text-sm font-semibold text-black border border-black/20 px-5 py-2.5 rounded-md hover:bg-black/5 transition-colors">
          See pricing →
        </Link>
      </section>
    </div>
  );
}

function InfoCard({ label, title, body, href, linkLabel }: { label: string; title: string; body: string; href: string; linkLabel: string }) {
  return (
    <div className="border border-black/10 rounded-xl p-6">
      <p className="text-[11px] font-bold text-lime-text bg-lime-light inline-block px-2.5 py-1 rounded-md mb-4 tracking-widest uppercase">
        {label}
      </p>
      <p className="text-xl font-bold text-black mb-2">{title}</p>
      <p className="text-sm text-black/55 leading-relaxed mb-4">{body}</p>
      <Link href={href} className="text-sm font-semibold text-black hover:opacity-70 transition-opacity">
        {linkLabel} →
      </Link>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 bg-lime-light border border-lime text-lime-text text-xs font-medium px-3 py-1.5 rounded-full mb-5">
            Now leasing in the Bay Area
          </span>

          <h1 className="text-4xl md:text-[40px] font-medium leading-[1.12] tracking-tight text-black mb-4">
            Less to manage.
            <br />
            More to show for it.
          </h1>

          <p className="text-base text-black/60 leading-relaxed mb-7">
            A real team that answers the phone, handles the details, and only
            gets paid when your property does. No fine print, no jargon, no
            surprises.
          </p>

          <form
            action="/api/lead"
            method="POST"
            className="flex flex-col sm:flex-row gap-2.5 mb-3 max-w-md"
          >
            <input
              type="text"
              name="address"
              placeholder="Enter your property address"
              className="flex-1 h-11 px-3.5 rounded-md border border-black/15 text-sm focus:outline-none focus:ring-2 focus:ring-lime"
            />
            <button
              type="submit"
              className="h-11 px-5 bg-lime text-lime-dark text-sm font-medium rounded-md hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              See your rate
            </button>
          </form>
          <p className="text-xs text-black/40">
            Free, no commitment. Takes a minute.
          </p>
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-3">
          <Stat value="97%" label="Avg. occupancy" border />
          <Stat value="2 days" label="Avg. payout speed" border />
          <Stat value="24/7" label="Support coverage" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-black/10">
        <h2 className="text-2xl md:text-[28px] font-medium text-black mb-3 max-w-lg">
          A property manager that actually does the managing.
        </h2>
        <p className="text-black/60 max-w-lg mb-10">
          From your first call to your monthly statement, here&apos;s what
          working with us actually looks like.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard
            label="Get started"
            title="Tell us about your property"
            body="We learn what you need before anything else happens."
            href="/get-started"
            linkLabel="Start here"
          />
          <InfoCard
            label="Leasing"
            title="We find the right tenant"
            body="Listing, screening, and lease signing, handled start to finish."
            href="/how-it-works"
            linkLabel="See how it works"
          />
          <InfoCard
            label="Ongoing"
            title="We keep things running"
            body="Rent, maintenance, renewals, and reporting, without you chasing updates."
            href="/pricing"
            linkLabel="See pricing"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-black/10">
        <h2 className="text-2xl font-medium text-black mb-3">
          Pay for results, not promises.
        </h2>
        <p className="text-black/60 max-w-lg mb-6">
          We earn a percentage of your rent — never a flat rate, regardless
          of whether your unit is occupied. When you do well, we do well.
        </p>
        <Link
          href="/pricing"
          className="inline-block text-sm font-medium text-black border border-black/15 px-4 py-2.5 rounded-md hover:bg-black/5 transition-colors"
        >
          See pricing →
        </Link>
      </section>
    </div>
  );
}

function InfoCard({
  label,
  title,
  body,
  href,
  linkLabel,
}: {
  label: string;
  title: string;
  body: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <div className="border border-black/10 rounded-xl p-6">
      <p className="text-xs font-medium text-lime-text bg-lime-light inline-block px-2.5 py-1 rounded-md mb-4 tracking-wide">
        {label.toUpperCase()}
      </p>
      <p className="text-lg font-medium text-black mb-2">{title}</p>
      <p className="text-sm text-black/60 leading-relaxed mb-4">{body}</p>
      <Link
        href={href}
        className="text-sm font-medium text-black hover:opacity-70 transition-opacity"
      >
        {linkLabel} →
      </Link>
    </div>
  );
}

function Stat({
  value,
  label,
  border,
}: {
  value: string;
  label: string;
  border?: boolean;
}) {
  return (
    <div
      className={`px-6 py-5 ${
        border ? "sm:border-r border-black/10" : ""
      }`}
    >
      <p className="text-xl font-medium text-black">{value}</p>
      <p className="text-xs text-black/50 mt-0.5">{label}</p>
    </div>
  );
}

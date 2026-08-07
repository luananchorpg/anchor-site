import { Metadata } from "next";

export const metadata: Metadata = { title: "Agent Referrals | Anchor Property Group" };

export default function Agents() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-center max-w-lg mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
          Refer a client, keep the relationship.
        </h1>
        <p className="text-lg text-black/55">
          We manage rentals — we don&apos;t sell them. When your client&apos;s ready to sell, you&apos;ll be the first call we make.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-20">
        {[
          { n: "01", title: "You refer", body: "Send us your client's info through the form below. We reach out directly and take it from there." },
          { n: "02", title: "We onboard your client", body: "We walk them through pricing and what to expect, with no pressure and no surprises." },
          { n: "03", title: "You get paid", body: "Referral terms are set case-by-case with each agent, in a written agreement signed before any referral changes hands." },
        ].map((s) => (
          <div key={s.n} className="border border-black/10 rounded-xl p-5">
            <p className="text-[11px] font-bold text-lime-text bg-lime-light inline-block px-2.5 py-1 rounded-md mb-4 tracking-widest">
              {s.n}
            </p>
            <p className="text-lg font-bold text-black mb-2">{s.title}</p>
            <p className="text-sm text-black/55 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-black/10 pt-16 mb-16">
        <h2 className="text-2xl font-bold text-black text-center mb-12">Why agents refer to us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "We don't compete with you", body: "We're a property management company, not a brokerage. A non-compete is part of every referral agreement, so your client relationship stays yours." },
            { title: "You hear it first", body: "If a referred owner ever decides to sell, we let you know before anyone else." },
            { title: "It's in writing", body: "Once we agree on terms, you get a signed referral agreement — not a verbal promise." },
          ].map((t) => (
            <div key={t.title}>
              <p className="text-lg font-bold text-black mb-2">{t.title}</p>
              <p className="text-sm text-black/55 leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-black/10 pt-14 text-center">
        <h2 className="text-2xl font-bold text-black mb-3">Have a client to refer?</h2>
        <p className="text-black/55 mb-7 max-w-md mx-auto">
          Reach out and we&apos;ll set up referral terms with you directly — every agreement is its own conversation.
        </p>
        <a href="/get-started" className="inline-block bg-black text-lime font-bold text-sm px-8 py-3.5 rounded-md hover:opacity-90 transition-opacity">
          Get in touch
        </a>
      </div>
    </div>
  );
}

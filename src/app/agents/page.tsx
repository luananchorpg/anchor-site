import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Referrals | Anchor Property Group",
};

export default function Agents() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-center max-w-lg mx-auto mb-14">
        <h1 className="text-[32px] font-medium tracking-tight text-black mb-3">
          Refer a client, keep the relationship.
        </h1>
        <p className="text-black/60">
          We manage rentals — we don&apos;t sell them. When your client&apos;s
          ready to sell, you&apos;ll be the first call we make.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-16">
        <div className="border border-black/10 rounded-xl p-5">
          <p className="text-xs font-medium text-lime-text bg-lime-light inline-block px-2.5 py-1 rounded-md mb-4 tracking-wide">
            01
          </p>
          <p className="text-base font-medium text-black mb-2">
            You refer
          </p>
          <p className="text-sm text-black/60 leading-relaxed">
            Send us your client&apos;s info through the form below. We reach
            out directly and take it from there.
          </p>
        </div>

        <div className="border border-black/10 rounded-xl p-5">
          <p className="text-xs font-medium text-lime-text bg-lime-light inline-block px-2.5 py-1 rounded-md mb-4 tracking-wide">
            02
          </p>
          <p className="text-base font-medium text-black mb-2">
            We onboard your client
          </p>
          <p className="text-sm text-black/60 leading-relaxed">
            We walk them through pricing and what to expect, with no pressure
            and no surprises.
          </p>
        </div>

        <div className="border border-black/10 rounded-xl p-5">
          <p className="text-xs font-medium text-lime-text bg-lime-light inline-block px-2.5 py-1 rounded-md mb-4 tracking-wide">
            03
          </p>
          <p className="text-base font-medium text-black mb-2">
            You get paid
          </p>
          <p className="text-sm text-black/60 leading-relaxed">
            Referral terms are set case-by-case with each agent, in a written
            agreement signed before any referral changes hands.
          </p>
        </div>
      </div>

      <div className="border-t border-black/10 pt-14 mb-14">
        <h2 className="text-2xl font-medium text-black text-center mb-10">
          Why agents refer to us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-base font-medium text-black mb-2">
              We don&apos;t compete with you
            </p>
            <p className="text-sm text-black/60 leading-relaxed">
              We&apos;re a property management company, not a brokerage. A
              non-compete is part of every referral agreement, so your client
              relationship stays yours.
            </p>
          </div>
          <div>
            <p className="text-base font-medium text-black mb-2">
              You hear it first
            </p>
            <p className="text-sm text-black/60 leading-relaxed">
              If a referred owner ever decides to sell, we let you know before
              anyone else.
            </p>
          </div>
          <div>
            <p className="text-base font-medium text-black mb-2">
              It&apos;s in writing
            </p>
            <p className="text-sm text-black/60 leading-relaxed">
              Once we agree on terms, you get a signed referral agreement —
              not a verbal promise.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 pt-14 text-center">
        <h2 className="text-2xl font-medium text-black mb-3">
          Have a client to refer?
        </h2>
        <p className="text-black/60 mb-6 max-w-md mx-auto">
          Reach out and we&apos;ll set up referral terms with you directly —
          every agreement is its own conversation.
        </p>
        <a
          href="/get-started"
          className="inline-block bg-black text-lime font-medium text-sm px-7 py-3 rounded-md hover:opacity-90 transition-opacity"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Privacy Policy | Anchor Property Group",
  description: "How Anchor Property Group collects, uses, and protects your information, including SMS/text messaging data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-extrabold text-black mb-2">Privacy Policy</h1>
      <p className="text-sm text-black/40 mb-10">Last updated: October 13, 2026</p>

      <div className="space-y-10">
        <section>
          <p className="text-black/70 leading-relaxed">
            Anchor Property Group (&quot;Anchor,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your
            privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you
            have, including when you provide your phone number to receive SMS/text messages from us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">Information We Collect</h2>
          <p className="text-black/70 leading-relaxed mb-3">
            We collect information you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-black/70 leading-relaxed">
            <li>Contact information, such as your name, email address, phone number, and property address</li>
            <li>Property details you submit through our website, such as property type and unit count</li>
            <li>Communications you send us, including messages, calls, and support requests</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">How We Use Your Information</h2>
          <p className="text-black/70 leading-relaxed mb-3">We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-black/70 leading-relaxed">
            <li>Respond to inquiries and provide property management services</li>
            <li>Send account-related updates, including by SMS, with your consent</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">SMS / Text Messaging Privacy</h2>
          <p className="text-black/70 leading-relaxed mb-3">
            If you provide your mobile phone number and opt in to receive text messages from Anchor Property Group,
            we use that number solely to send you the account-related updates you&apos;ve agreed to receive. Message
            frequency varies. Message and data rates may apply.
          </p>
          <p className="text-black/70 leading-relaxed mb-3">
            No mobile information, including text messaging originator opt-in data and consent, will be shared with
            any third parties or affiliates for marketing or promotional purposes. This excludes text messaging
            originator opt-in data and consent from all of the above categories — this information will not be
            shared with any third parties.
          </p>
          <p className="text-black/70 leading-relaxed">
            You can opt out of SMS messages at any time by replying <strong>STOP</strong> to any message you receive
            from us. For help, reply <strong>HELP</strong> or see the opt-out instructions in our{" "}
            <a href="/sms-terms" className="font-semibold text-black underline hover:no-underline">
              SMS Terms &amp; Conditions
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">How We Share Information</h2>
          <p className="text-black/70 leading-relaxed">
            We do not sell your personal information. We may share information with service providers who help us
            operate our business (such as our property management software and communications platforms), or when
            required by law. As noted above, SMS opt-in data and consent are never shared with third parties for
            marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">Data Security</h2>
          <p className="text-black/70 leading-relaxed">
            We use reasonable administrative, technical, and physical safeguards designed to protect the information
            we collect from unauthorized access, use, or disclosure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">Your Choices</h2>
          <p className="text-black/70 leading-relaxed">
            You may opt out of SMS communications at any time by replying STOP, and you may contact us directly to
            request access to, correction of, or deletion of your personal information, subject to applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">Changes to This Policy</h2>
          <p className="text-black/70 leading-relaxed">
            We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date above reflects the
            most recent revision.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">Contact Us</h2>
          <p className="text-black/70 leading-relaxed">
            If you have questions about this Privacy Policy, contact us at{" "}
            <a href="mailto:team@anchorpg.com" className="font-semibold text-black underline hover:no-underline">
              team@anchorpg.com
            </a>{" "}
            or{" "}
            <a href="tel:+14085492858" className="font-semibold text-black underline hover:no-underline">
              408.549.2858
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}

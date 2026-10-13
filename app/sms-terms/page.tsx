export const metadata = {
  title: "SMS Terms & Conditions | Anchor Property Group",
  description: "Terms and conditions for SMS/text message communications from Anchor Property Group, including opt-in, opt-out, and help instructions.",
};

export default function SmsTermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-extrabold text-black mb-2">SMS Terms &amp; Conditions</h1>
      <p className="text-sm text-black/40 mb-10">Last updated: October 13, 2026</p>

      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-bold text-black mb-3">Program Description</h2>
          <p className="text-black/70 leading-relaxed">
            Anchor Property Group offers SMS/text message communications to property owners who opt in, including
            account-related notifications such as maintenance updates, showing coordination, and service
            communications tied to your property management agreement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">How to Opt In</h2>
          <p className="text-black/70 leading-relaxed">
            Property owners opt in to receive SMS updates by providing their phone number during account setup or
            service enrollment with Anchor Property Group. Consent is obtained verbally or through written agreement
            as part of the property management service contract. By opting in, you agree to receive recurring
            account-related notifications via SMS from Anchor Property Group.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">Message Frequency</h2>
          <p className="text-black/70 leading-relaxed">
            Message frequency varies depending on your property and account activity.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">Message and Data Rates</h2>
          <p className="text-black/70 leading-relaxed">
            Message and data rates may apply. Contact your wireless carrier for details about your plan.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">How to Opt Out</h2>
          <p className="text-black/70 leading-relaxed">
            You can cancel SMS messages at any time. Just reply <strong>STOP</strong> to any message we send you.
            After you text STOP, we will send you a one-time confirmation message, and you will no longer receive SMS
            messages from us unless you opt back in. You may also opt out by contacting your Anchor Property Group
            account manager directly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">Help</h2>
          <p className="text-black/70 leading-relaxed">
            If you need help at any time, reply <strong>HELP</strong> to any message, or contact us at{" "}
            <span className="bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-medium">
              [ADD SUPPORT EMAIL]
            </span>{" "}
            or{" "}
            <span className="bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-medium">
              [ADD SUPPORT PHONE NUMBER]
            </span>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">Carrier Liability</h2>
          <p className="text-black/70 leading-relaxed">
            Carriers are not liable for delayed or undelivered messages.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">Privacy</h2>
          <p className="text-black/70 leading-relaxed">
            For details on how we collect, use, and protect your information, including SMS opt-in data, please
            review our{" "}
            <a href="/privacy-policy" className="font-semibold text-black underline hover:no-underline">
              Privacy Policy
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}

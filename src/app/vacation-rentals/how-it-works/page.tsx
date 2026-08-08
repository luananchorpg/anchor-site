import { Metadata } from "next";

export const metadata: Metadata = { title: "How it works | Vacation Rental Management | Anchor Property Group" };

const steps = [
  { n: 1, title: "Tell us about your property", body: "Share your property details and what you're looking for. We'll assess your home's vacation rental potential and walk you through what to expect." },
  { n: 2, title: "We get your home guest-ready", body: "We coordinate professional photography, write your listing, and set up your property on Airbnb, VRBO, and our direct booking channel." },
  { n: 3, title: "Guests start booking", body: "Dynamic pricing kicks in — adjusting your nightly rate based on demand, local events, and seasonality to maximize your occupancy and revenue." },
  { n: 4, title: "We handle everything in between", body: "Guest communication, check-ins, cleaning after every stay, maintenance, and monthly owner statements — handled without you lifting a finger." },
];

const included = [
  { title: "Listings on Airbnb & VRBO", body: "Plus our own direct booking channel — more visibility means more bookings." },
  { title: "Professional photography", body: "We coordinate the shoot. Great photos are the single biggest driver of booking rates." },
  { title: "Dynamic pricing", body: "Rates adjust automatically based on demand, local events, and seasonality." },
  { title: "Guest communication", body: "Every message, inquiry, and review — handled by our team 24/7." },
  { title: "Cleaning after every stay", body: "Professional turnover cleaning coordinated between every checkout and check-in." },
  { title: "Maintenance & inspections", body: "Regular property checks and vendor coordination to keep your home in top shape." },
];

export default function VacationHowItWorks() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="text-center max-w-lg mx-auto mb-4">
        <span className="inline-block text-[11px] font-bold text-lime-text bg-lime-light px-3 py-1.5 rounded-full mb-4 tracking-widest uppercase">
          Vacation Rental Management
        </span>
        <h1 className="text-2xl md:text-5xl font-bold leading-tight tracking-tight text-black mb-4">
          Listed, booked, and managed. We handle the whole thing.
        </h1>
        <p className="text-base md:text-lg text-black/55">
          From your first conversation to your first guest checkout, here&apos;s exactly what working with us looks like.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-20 mt-12">
        {steps.map((s) => (
          <div key={s.n} className="border border-black/10 rounded-xl p-5">
            <div className="w-10 h-10 rounded-full bg-black text-lime flex items-center justify-center font-bold text-base mb-4">
              {s.n}
            </div>
            <p className="text-base font-bold text-black mb-2">{s.title}</p>
            <p className="text-sm text-black/55 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-black/10 pt-16 mb-16">
        <h2 className="text-2xl font-bold text-black text-center mb-12">What&apos;s included in full-service</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {included.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <span className="text-[#639922] font-bold text-lg mt-0.5">✓</span>
              <div>
                <p className="text-sm font-bold text-black mb-1">{item.title}</p>
                <p className="text-sm text-black/55 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center border-t border-black/10 pt-12">
        <a href="/get-started" className="inline-block bg-black text-lime font-bold text-sm px-8 py-3.5 rounded-md hover:opacity-90 transition-opacity">
          Get started
        </a>
      </div>
    </div>
  );
}

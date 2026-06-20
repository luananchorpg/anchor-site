"use client";

import { useState } from "react";

type FormData = {
  address: string;
  city: string;
  state: string;
  zip: string;
  propertyType: string;
  unitCount: string;
  occupancy: string;
  name: string;
  email: string;
  phone: string;
};

const initialData: FormData = {
  address: "",
  city: "",
  state: "",
  zip: "",
  propertyType: "",
  unitCount: "",
  occupancy: "",
  name: "",
  email: "",
  phone: "",
};

export default function GetStartedForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof FormData>(key: K, value: string) {
    setData((d) => ({ ...d, [key]: value }));
  }

  async function handleSubmit() {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStep(4);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="max-w-[520px] mx-auto border border-black/10 rounded-xl overflow-hidden">
      <div className="p-6 pb-0">
        <div className="flex items-center gap-1.5 mb-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className={`h-[3px] flex-1 rounded-full transition-colors ${
                n <= step ? "bg-lime" : "bg-black/[0.06]"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="px-6 pb-6">
        {step === 1 && (
          <div>
            <p className="text-xs text-black/40 mb-1">Step 1 of 3</p>
            <h2 className="text-xl font-medium text-black mb-5">
              Where&apos;s your property?
            </h2>

            <Field label="Street address">
              <input
                type="text"
                placeholder="123 Main St"
                value={data.address}
                onChange={(e) => update("address", e.target.value)}
                className="input"
              />
            </Field>

            <div className="grid grid-cols-[2fr_1fr_1fr] gap-2.5 mb-1.5">
              <Field label="City">
                <input
                  type="text"
                  placeholder="San Jose"
                  value={data.city}
                  onChange={(e) => update("city", e.target.value)}
                  className="input"
                />
              </Field>
              <Field label="State">
                <input
                  type="text"
                  placeholder="CA"
                  value={data.state}
                  onChange={(e) => update("state", e.target.value)}
                  className="input"
                />
              </Field>
              <Field label="Zip">
                <input
                  type="text"
                  placeholder="95112"
                  value={data.zip}
                  onChange={(e) => update("zip", e.target.value)}
                  className="input"
                />
              </Field>
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!data.address || !data.city}
              className="btn-primary w-full mt-5 disabled:opacity-40"
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="text-xs text-black/40 mb-1">Step 2 of 3</p>
            <h2 className="text-xl font-medium text-black mb-5">
              Tell us about the property
            </h2>

            <Field label="Property type">
              <select
                value={data.propertyType}
                onChange={(e) => update("propertyType", e.target.value)}
                className="input"
              >
                <option value="">Select one</option>
                <option value="single-family">Single-family home</option>
                <option value="condo">Condo / townhouse</option>
                <option value="multi-family">Multi-family (2-4 units)</option>
                <option value="apartment">Apartment building (5+ units)</option>
              </select>
            </Field>

            <Field label="How many units do you own total?">
              <select
                value={data.unitCount}
                onChange={(e) => update("unitCount", e.target.value)}
                className="input"
              >
                <option value="">Select one</option>
                <option value="1">Just this one</option>
                <option value="2-4">2 to 4</option>
                <option value="5-9">5 to 9</option>
                <option value="10+">10 or more</option>
              </select>
            </Field>

            <Field label="Is the property currently occupied?">
              <select
                value={data.occupancy}
                onChange={(e) => update("occupancy", e.target.value)}
                className="input"
              >
                <option value="">Select one</option>
                <option value="occupied">Yes, occupied</option>
                <option value="vacant">No, vacant</option>
                <option value="self">I live there now</option>
              </select>
            </Field>

            <div className="flex gap-2.5 mt-5">
              <button onClick={() => setStep(1)} className="btn-secondary">
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!data.propertyType || !data.unitCount}
                className="btn-primary flex-1 disabled:opacity-40"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <p className="text-xs text-black/40 mb-1">Step 3 of 3</p>
            <h2 className="text-xl font-medium text-black mb-5">
              How should we reach you?
            </h2>

            <Field label="Full name">
              <input
                type="text"
                placeholder="Jordan Lee"
                value={data.name}
                onChange={(e) => update("name", e.target.value)}
                className="input"
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                placeholder="you@email.com"
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
                className="input"
              />
            </Field>
            <Field label="Phone number">
              <input
                type="tel"
                placeholder="(408) 555-0123"
                value={data.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="input"
              />
            </Field>

            <p className="text-[11px] text-black/40 mt-2 leading-relaxed">
              No commitment. A team member will reach out within 24 hours.
            </p>

            {error && (
              <p className="text-[12px] text-red-600 mt-2">{error}</p>
            )}

            <div className="flex gap-2.5 mt-5">
              <button onClick={() => setStep(2)} className="btn-secondary">
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={!data.name || !data.email || !data.phone || submitting}
                className="btn-primary flex-1 disabled:opacity-40"
              >
                {submitting ? "Submitting…" : "Get my rate"}
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="text-center py-4">
            <p className="text-[28px] text-[#639922] mb-2.5">✓</p>
            <p className="text-lg font-medium text-black mb-1.5">
              You&apos;re all set
            </p>
            <p className="text-[13px] text-black/55">
              Someone from our team will reach out within 24 hours to confirm
              your rate and next steps.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-3.5">
      <label className="text-[13px] font-medium text-black block mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}

import { Metadata } from "next";
import GetStartedForm from "@/components/GetStartedForm";

export const metadata: Metadata = { title: "Get started | Anchor Property Group" };

export default function GetStarted() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="text-center max-w-md mx-auto mb-10">
        <h1 className="text-[30px] font-medium tracking-tight text-black mb-2.5">
          Let&apos;s get your property managed
        </h1>
        <p className="text-black/60 text-sm">
          Three quick steps. No commitment, no credit card.
        </p>
      </div>
      <GetStartedForm />
    </div>
  );
}

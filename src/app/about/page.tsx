import { Metadata } from "next";

export const metadata: Metadata = { title: "About | Anchor Property Group" };

const leadership = [
  { name: "Luan", title: "CEO" },
  { name: "Paige", title: "CMO" },
  { name: "Toby", title: "COO" },
  { name: "Sam", title: "President" },
  { name: "Duyen", title: "CFO" },
];

const ops = [
  { name: "Dylan", title: "SVP" },
  { name: "Ali", title: "Operations Manager" },
  { name: "Aldi", title: "Operations Manager" },
];

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
  return (
    <div className="w-11 h-11 rounded-full bg-black/5 flex items-center justify-center text-sm font-medium text-black mx-auto mb-2.5">
      {initials}
    </div>
  );
}

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-center max-w-lg mx-auto mb-10">
        <h1 className="text-[32px] font-medium tracking-tight text-black mb-3">
          The team behind Anchor
        </h1>
        <p className="text-black/60">
          We started Anchor because property management shouldn&apos;t mean
          handing your home to a call center. Every owner gets a team that
          actually knows their property.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-3">
        {leadership.map((p) => (
          <div
            key={p.name}
            className="border border-black/10 rounded-xl p-4 text-center"
          >
            <Avatar name={p.name} />
            <p className="text-[13px] font-medium text-black">{p.name}</p>
            <p className="text-[11px] text-black/50">{p.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2.5 max-w-md mx-auto mb-12">
        {ops.map((p) => (
          <div
            key={p.name}
            className="border border-black/10 rounded-xl p-3.5 text-center"
          >
            <Avatar name={p.name} />
            <p className="text-xs font-medium text-black">{p.name}</p>
            <p className="text-[10px] text-black/50 leading-tight">
              {p.title}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center border-t border-black/10 pt-10">
        <a
          href="/get-started"
          className="inline-block bg-black text-lime font-medium text-sm px-7 py-3 rounded-md hover:opacity-90 transition-opacity"
        >
          Get started
        </a>
      </div>
    </div>
  );
}

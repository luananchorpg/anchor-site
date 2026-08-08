import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Image src="/logo-full.png" alt="Anchor Property Group" width={840} height={385} className="h-6 w-auto mb-3" />
          <p className="text-xs text-black/40">© {new Date().getFullYear()} Anchor Property Group</p>
        </div>

        <div>
          <p className="text-xs font-bold text-black uppercase tracking-widest mb-3">Traditional PM</p>
          <nav className="flex flex-col gap-2">
            <Link href="/traditional-pm/how-it-works" className="text-sm text-black/55 hover:text-black">How it works</Link>
            <Link href="/traditional-pm/pricing" className="text-sm text-black/55 hover:text-black">Pricing</Link>
            <Link href="/traditional-pm/faq" className="text-sm text-black/55 hover:text-black">FAQ</Link>
          </nav>
        </div>

        <div>
          <p className="text-xs font-bold text-black uppercase tracking-widest mb-3">Vacation Rentals</p>
          <nav className="flex flex-col gap-2">
            <Link href="/vacation-rentals" className="text-sm text-black/55 hover:text-black">Overview</Link>
            <Link href="/vacation-rentals/how-it-works" className="text-sm text-black/55 hover:text-black">How it works</Link>
            <Link href="/vacation-rentals/pricing" className="text-sm text-black/55 hover:text-black">Pricing</Link>
            <Link href="/vacation-rentals/faq" className="text-sm text-black/55 hover:text-black">FAQ</Link>
          </nav>
        </div>

        <div>
          <p className="text-xs font-bold text-black uppercase tracking-widest mb-3">Company</p>
          <nav className="flex flex-col gap-2">
            <Link href="/about" className="text-sm text-black/55 hover:text-black">About</Link>
            <Link href="/available-properties" className="text-sm text-black/55 hover:text-black">Available properties</Link>
            <Link href="/areas-we-serve" className="text-sm text-black/55 hover:text-black">Areas we serve</Link>
            <Link href="/agents" className="text-sm text-black/55 hover:text-black">Agents</Link>
            <Link href="/get-started" className="text-sm text-black/55 hover:text-black">Get started</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

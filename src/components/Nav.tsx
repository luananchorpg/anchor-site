import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/areas-we-serve", label: "Areas we serve" },
];

export default function Nav() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 sm:py-4 flex flex-wrap items-center justify-between gap-y-3 gap-x-4">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo-full.png"
            alt="Anchor Property Group"
            width={840}
            height={385}
            className="h-6 sm:h-7 w-auto"
            priority
          />
        </Link>

        <nav className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-black/70 order-3 sm:order-2 w-full sm:w-auto justify-center sm:justify-start">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-black transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/get-started"
          className="bg-black text-lime text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity order-2 sm:order-3 shrink-0"
        >
          Get started
        </Link>
      </div>
    </header>
  );
}

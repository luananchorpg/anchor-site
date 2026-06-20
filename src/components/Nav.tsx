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
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-full.png"
            alt="Anchor Property Group"
            width={840}
            height={385}
            className="h-7 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-black/70">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/get-started"
          className="bg-black text-lime text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
        >
          Get started
        </Link>
      </div>
    </header>
  );
}

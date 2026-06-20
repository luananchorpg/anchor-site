import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <Image
          src="/logo-full.png"
          alt="Anchor Property Group"
          width={840}
          height={385}
          className="h-6 w-auto"
        />

        <nav className="flex flex-wrap gap-5 text-sm text-black/60">
          <Link href="/how-it-works" className="hover:text-black">
            How it works
          </Link>
          <Link href="/pricing" className="hover:text-black">
            Pricing
          </Link>
          <Link href="/about" className="hover:text-black">
            About
          </Link>
          <Link href="/faq" className="hover:text-black">
            FAQ
          </Link>
          <Link href="/areas-we-serve" className="hover:text-black">
            Areas we serve
          </Link>
        </nav>

        <p className="text-xs text-black/40">
          © {new Date().getFullYear()} Anchor Property Group
        </p>
      </div>
    </footer>
  );
}

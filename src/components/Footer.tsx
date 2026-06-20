import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="block w-[20px] h-[26px] border-2 border-black rounded-sm" />
          <span className="font-medium text-sm tracking-wide text-black">
            ANCHOR
          </span>
        </div>

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

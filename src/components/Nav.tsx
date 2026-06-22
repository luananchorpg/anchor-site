"use client";

import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-black/10 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-full.png"
            alt="Anchor Property Group"
            width={840}
            height={385}
            className="h-6 sm:h-7 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-black/70">
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

        <div className="flex items-center gap-3">
          <Link
            href="/get-started"
            className="bg-black text-lime text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity shrink-0"
          >
            Get started
          </Link>

          {/* Hamburger button, mobile only */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden p-1.5 -mr-1 text-black"
          >
            {open ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-black/10 shadow-lg z-50">
          <nav className="flex flex-col px-4 py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-black border-b border-black/5 last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 pb-4">
            <Link
              href="/get-started"
              onClick={() => setOpen(false)}
              className="block text-center bg-black text-lime font-medium text-sm py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

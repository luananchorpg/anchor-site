"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const OWNER_LOGIN_URL = "#";
const RESIDENT_LOGIN_URL = "#";

const navGroups = [
  {
    label: "Traditional Property Management",
    links: [
      { href: "/traditional-pm/how-it-works", label: "How it works" },
      { href: "/traditional-pm/pricing", label: "Pricing" },
      { href: "/traditional-pm/faq", label: "FAQ" },
    ],
  },
  {
    label: "Vacation Rental Management",
    links: [
      { href: "/vacation-rentals", label: "Overview" },
      { href: "/vacation-rentals/how-it-works", label: "How it works" },
      { href: "/vacation-rentals/pricing", label: "Pricing" },
      { href: "/vacation-rentals/faq", label: "FAQ" },
    ],
  },
];

const secondaryLinks = [
  { href: "/about", label: "About" },
  { href: "/available-properties", label: "Available properties" },
];

const resourceLinks = [
  { href: "/areas-we-serve", label: "Areas we serve" },
  { href: "/agents", label: "Agents" },
];

const loginLinks = [
  { href: OWNER_LOGIN_URL, label: "Owner login" },
  { href: RESIDENT_LOGIN_URL, label: "Resident login" },
];

function useDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [close]);

  return { open, setOpen, ref, close };
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className={`transition-transform ${open ? "rotate-180" : ""}`}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ServiceDropdown({ label, links }: { label: string; links: { href: string; label: string }[] }) {
  const { open, setOpen, ref, close } = useDropdown();
  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(v => !v)} aria-expanded={open}
        className="flex items-center gap-1 text-sm text-black/70 hover:text-black transition-colors whitespace-nowrap cursor-pointer font-medium">
        {label} <Chevron open={open} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-black/10 rounded-xl shadow-lg py-2 min-w-[200px] z-50">
          {links.map((l) => (
            <Link key={l.label} href={l.href} onClick={close}
              className="block px-4 py-2.5 text-sm text-black/65 hover:text-black hover:bg-black/[0.03] whitespace-nowrap">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function SimpleDropdown({ label, links }: { label: string; links: { href: string; label: string }[] }) {
  const { open, setOpen, ref, close } = useDropdown();
  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(v => !v)} aria-expanded={open}
        className="flex items-center gap-1 text-sm text-black/70 hover:text-black transition-colors whitespace-nowrap cursor-pointer">
        {label} <Chevron open={open} />
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-2 bg-white border border-black/10 rounded-xl shadow-lg py-2 min-w-[160px] z-50">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={close}
              className="block px-4 py-2.5 text-sm text-black/65 hover:text-black hover:bg-black/[0.03] whitespace-nowrap">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="border-b border-black/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center shrink-0" onClick={() => setMobileOpen(false)}>
          <Image src="/logo-full.png" alt="Anchor Property Group" width={840} height={385} className="h-6 sm:h-7 w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm text-black/70 flex-1">
          {navGroups.map((g) => (
            <ServiceDropdown key={g.label} label={g.label} links={g.links} />
          ))}
          {secondaryLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-black transition-colors whitespace-nowrap">
              {l.label}
            </Link>
          ))}
          <SimpleDropdown label="Resources" links={resourceLinks} />
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <SimpleDropdown label="Login" links={loginLinks} />
          </div>
          <Link href="/get-started" className="bg-black text-lime text-sm font-bold px-4 py-2 rounded-md hover:opacity-90 transition-opacity shrink-0">
            Get started
          </Link>
          <button onClick={() => setMobileOpen(v => !v)} aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-1.5 -mr-1 text-black cursor-pointer">
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-black/10 shadow-lg z-50 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col px-4 py-3">
            {navGroups.map((g) => (
              <div key={g.label}>
                <button onClick={() => setMobileExpanded(mobileExpanded === g.label ? null : g.label)}
                  className="w-full flex items-center justify-between py-3 text-base font-semibold text-black border-b border-black/5 cursor-pointer">
                  {g.label}
                  <Chevron open={mobileExpanded === g.label} />
                </button>
                {mobileExpanded === g.label && (
                  <div className="pl-4 pb-2">
                    {g.links.map((l) => (
                      <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                        className="block py-2.5 text-sm text-black/65 border-b border-black/5">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {secondaryLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                className="py-3 text-base text-black border-b border-black/5">
                {l.label}
              </Link>
            ))}
            {resourceLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                className="py-3 text-base text-black border-b border-black/5">
                {l.label}
              </Link>
            ))}
            {loginLinks.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
                className="py-3 text-base text-black border-b border-black/5">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="px-4 pb-4 pt-1">
            <Link href="/get-started" onClick={() => setMobileOpen(false)}
              className="block text-center bg-black text-lime font-bold text-sm py-3 rounded-md hover:opacity-90 transition-opacity">
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const topLevelLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

const resourceLinks = [
  { href: "/faq", label: "FAQ" },
  { href: "/areas-we-serve", label: "Areas we serve" },
  { href: "/agents", label: "Agents" },
];

// TODO: replace with your actual property management platform's portal
// login URL once decided. This is intentionally a placeholder ("#") so it
// doesn't link anywhere broken or misleading in the meantime.
const PORTAL_LOGIN_URL = "#";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(e.target as Node)
      ) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="border-b border-black/10 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center shrink-0"
          onClick={() => setMobileOpen(false)}
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
          {topLevelLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-black transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}

          {/* Resources dropdown */}
          <div className="relative" ref={resourcesRef}>
            <button
              onClick={() => setResourcesOpen((v) => !v)}
              aria-expanded={resourcesOpen}
              className="flex items-center gap-1 hover:text-black transition-colors whitespace-nowrap"
            >
              Resources
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform ${
                  resourcesOpen ? "rotate-180" : ""
                }`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {resourcesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-black/10 rounded-md shadow-lg py-1.5 min-w-[160px] z-50">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setResourcesOpen(false)}
                    className="block px-4 py-2 text-sm text-black/70 hover:text-black hover:bg-black/[0.03] whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href={PORTAL_LOGIN_URL}
            className="hover:text-black transition-colors whitespace-nowrap"
          >
            Owner / Resident login
          </a>
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
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="md:hidden p-1.5 -mr-1 text-black"
          >
            {mobileOpen ? (
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
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-black/10 shadow-lg z-50">
          <nav className="flex flex-col px-4 py-3">
            {[...topLevelLinks, ...resourceLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-base text-black border-b border-black/5"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={PORTAL_LOGIN_URL}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-base text-black"
            >
              Owner / Resident login
            </a>
          </nav>
          <div className="px-4 pb-4">
            <Link
              href="/get-started"
              onClick={() => setMobileOpen(false)}
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

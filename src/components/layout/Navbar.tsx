"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, Container } from "@/components/ui";

// Client-side navbar: left-justified navigation with responsive mobile menu
export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative border-b border-brand-ink/10 bg-brand-paper">
      <Container className="flex items-center justify-start gap-6 py-5">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Property Dreamz home">
          <img
            src="/brand/property-dreamz-logo-horizontal.png"
            alt="Property Dreamz"
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop nav: placed directly after brand (left-justified) */}
        <nav className="hidden md:flex items-center gap-6 text-sm uppercase tracking-[0.12em] text-brand-ink/75">
          <Link href="/" className="transition hover:text-brand-ink">
            Home
          </Link>
          <Link href="/about" className="transition hover:text-brand-ink">
            About Us
          </Link>
          <Link href="/explore-map" className="transition hover:text-brand-ink">
            Explore Map
          </Link>
          <Link href="/properties" className="transition hover:text-brand-ink">
            Properties
          </Link>
          <Link href="/buyers-guide" className="transition hover:text-brand-ink">
            Buyers Guide
          </Link>
          <Link href="/for-developers" className="transition hover:text-brand-ink">
            For Developers
          </Link>
          <Link href="/saved" className="transition hover:text-brand-ink">
            Saved
          </Link>
          <Link href="/contact" className="transition hover:text-brand-ink">
            Contact
          </Link>
        </nav>

        {/* spacer to push utility actions to the right */}
        <div className="ml-auto flex items-center gap-4">
          <Button href="/contact" variant="premium" className="hidden md:inline-flex">
            Talk to advisor
          </Button>

          {/* Mobile menu toggle */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={`md:hidden inline-flex items-center justify-center rounded p-2 text-brand-ink/90 transition ${
              open ? "bg-brand-ink/10" : "hover:bg-brand-ink/5"
            }`}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden absolute inset-x-0 top-full z-40">
          <div className="absolute inset-0 bg-brand-ink/70 backdrop-blur-sm" aria-hidden="true" onClick={() => setOpen(false)} />
          <div className="relative border-t border-brand-paper/10 bg-brand-ink/95 text-brand-paper shadow-2xl shadow-brand-ink/20">
            <div className="px-4 py-4 space-y-2">
              <Link href="/" className="block rounded px-2 py-2 text-sm font-medium text-brand-paper hover:bg-brand-paper/10">
                Home
              </Link>
              <Link href="/about" className="block rounded px-2 py-2 text-sm font-medium text-brand-paper hover:bg-brand-paper/10">
                About Us
              </Link>
              <Link href="/explore-map" className="block rounded px-2 py-2 text-sm font-medium text-brand-paper hover:bg-brand-paper/10">
                Explore Map
              </Link>
              <Link href="/properties" className="block rounded px-2 py-2 text-sm font-medium text-brand-paper hover:bg-brand-paper/10">
                Properties
              </Link>
              <Link href="/buyers-guide" className="block rounded px-2 py-2 text-sm font-medium text-brand-paper hover:bg-brand-paper/10">
                Buyers Guide
              </Link>
              <Link href="/for-developers" className="block rounded px-2 py-2 text-sm font-medium text-brand-paper hover:bg-brand-paper/10">
                For Developers
              </Link>
              <Link href="/saved" className="block rounded px-2 py-2 text-sm font-medium text-brand-paper hover:bg-brand-paper/10">
                Saved
              </Link>
              <Link href="/contact" className="block rounded px-2 py-2 text-sm font-medium text-brand-paper hover:bg-brand-paper/10">
                Contact
              </Link>

              <div className="pt-2">
                <Button href="/contact" variant="premium" className="w-full">
                  Talk to advisor
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

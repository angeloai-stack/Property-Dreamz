"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Explore map", href: "/explore-map" },
  { label: "Buyer's guide", href: "/buyers-guide" },
  { label: "For developers", href: "/for-developers" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

const currencies = ["USD", "MXN"] as const;

type Currency = (typeof currencies)[number];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [currency, setCurrency] = useState<Currency>("USD");

  return (
    <header className="relative z-50 border-b border-brand-ink/10 bg-white">
      <Container className="flex items-center gap-4 py-4 md:py-5">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Property Dreamz home">
          <img
            src="/brand/property-dreamz-logo-horizontal.png"
            alt="Property Dreamz"
            className="h-8 w-auto md:h-9"
          />
        </Link>

        <nav className="ml-auto hidden items-center gap-4 font-ibrand text-[1.05rem] text-brand-ink/80 xl:gap-6 xl:text-subtitle lg:flex">
          {navLinks.map((item) => (
            <Link key={item.label} href={item.href} className="whitespace-nowrap transition hover:text-brand-emerald">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-6">
          <div
            className="hidden items-center rounded-[var(--radius-btn)] border border-brand-ink/10 bg-brand-paper p-1 sm:flex"
            role="group"
            aria-label="Currency"
          >
            {currencies.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCurrency(c)}
                className={cn(
                  "rounded-[var(--radius-btn)] px-3 py-1.5 font-ewangi text-label font-semibold uppercase transition",
                  currency === c
                    ? "bg-brand-emerald text-brand-paper"
                    : "text-brand-muted hover:text-brand-ink"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={cn(
              "inline-flex items-center justify-center rounded p-2 text-brand-ink/90 transition lg:hidden",
              open ? "bg-brand-ink/10" : "hover:bg-brand-ink/5"
            )}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {open && (
        <div className="absolute inset-x-0 top-full z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-brand-ink/70 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          <div className="relative border-t border-brand-paper/10 bg-brand-ink/95 text-brand-paper shadow-2xl">
            <div className="space-y-2 px-4 py-4">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded px-2 py-2 font-ibrand text-subtitle hover:bg-brand-paper/10"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex gap-1 pt-2">
                {currencies.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCurrency(c)}
                    className={cn(
                      "flex-1 rounded-[var(--radius-btn)] px-3 py-2 font-ewangi text-label font-semibold uppercase",
                      currency === c ? "bg-brand-emerald text-brand-paper" : "bg-brand-paper/10"
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

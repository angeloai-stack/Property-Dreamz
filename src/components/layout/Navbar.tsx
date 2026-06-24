"use client";
// Sticky top navigation with dark/light modes, Properties dropdown, currency toggle, and mobile drawer.
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";

type SubItem = { label: string; href: string; tag?: string };
type NavItem =
  | { label: string; href: string; sub?: never }
  | { label: string; href: string; sub: SubItem[] };

const navItems: NavItem[] = [
  { label: "Explore map",    href: "/explore-map" },
  {
    label: "Properties",
    href: "/properties",
    sub: [
      { label: "Del Mar",              href: "/properties/delmar" },
      { label: "Andares",              href: "/properties/andares" },
      { label: "Alimar",               href: "/properties/alimar" },
      { label: "Torre 51",              href: "/properties/torre51" },
      { label: "Tierra de Agua",       href: "/properties/tierra-de-agua" },
      { label: "Punta Piedra",         href: "/properties/punta-piedra" },
      { label: "Palacio del Mar",      href: "/properties/palacio-del-mar" },
      { label: "Naos",                 href: "/properties/naos" },
      { label: "Loma Serena",          href: "/properties/loma-serena" },
      { label: "Pacifica",             href: "/properties/pacifica" },
      { label: "Encanto del Valle",    href: "/properties/encanto-del-valle" },
      { label: "Laguna Bay",           href: "/properties/laguna-bay" },
      { label: "Costa Real",           href: "/properties/costa-real" },
      { label: "Valle Dorado",         href: "/properties/valle",   tag: "Soon" },
    ],
  },
  { label: "Buyer's guide",  href: "/buyers-guide" },
  { label: "For developers", href: "/for-developers" },
  { label: "The Mission",    href: "/about" },
  { label: "Saved",          href: "/saved" },
  { label: "Contact",        href: "/contact" },
];

const currencies = ["USD", "MXN"] as const;
type Currency = (typeof currencies)[number];

export function Navbar() {
  const pathname = usePathname();
  // Dark navbar for property detail pages that have dark hero sections; white for everything else.
  const dark = pathname.startsWith("/properties/delmar") || pathname.startsWith("/properties/andares") || pathname.startsWith("/properties/torre51") || pathname.startsWith("/properties/tierra-de-agua") || pathname.startsWith("/properties/punta-piedra")
    || pathname.startsWith("/properties/alimar")
    || pathname.startsWith("/properties/palacio-del-mar")
    || pathname.startsWith("/properties/naos")
    || pathname.startsWith("/properties/loma-serena")
    || pathname.startsWith("/properties/pacifica")
    || pathname.startsWith("/properties/encanto-del-valle")
    || pathname.startsWith("/properties/laguna-bay")
    || pathname.startsWith("/properties/costa-real");

  const [mobileOpen, setMobileOpen] = useState(false);
  const [propertiesOpen, setPropertiesOpen] = useState(false);
  const [currency, setCurrency] = useState<Currency>("USD");
  const [scrolled, setScrolled] = useState(false);

  // Apply frosted-glass background after 10px scroll; passive avoids blocking scroll performance.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 border-b transition-all duration-300",
      dark
        ? scrolled ? "border-white/5 bg-brand-ink/80 backdrop-blur-md" : "border-white/10 bg-brand-ink"
        : scrolled ? "border-brand-ink/5 bg-white/80 backdrop-blur-md"  : "border-brand-ink/10 bg-white"
    )}>
      <Container className="flex items-center gap-4 py-4 md:py-5">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center" aria-label="Property Dreamz home">
          <Image
            src="https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto/brand/property-dreamz-logo-horizontal"
            alt="Property Dreamz"
            width={180}
            height={36}
            className={cn("h-8 w-auto md:h-9", dark && "brightness-0 invert")}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className={cn("ml-auto hidden items-center gap-5 font-ewangi text-[15px] xl:gap-7 lg:flex", dark ? "text-white" : "text-black")}>
          {navItems.map((item) =>
            item.sub ? (
              /* Properties dropdown — CSS group-hover; label is a Link so it's also navigable */
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={cn("flex items-center gap-1 whitespace-nowrap transition", dark ? "hover:text-brand-teal" : "hover:text-brand-teal")}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                    strokeWidth={2.5}
                  />
                </Link>

                {/* Dropdown panel */}
                <div className="pointer-events-none absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="min-w-55 overflow-hidden rounded-2xl border border-brand-ink/8 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                    {item.sub.map((sub, i) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className={cn(
                          "flex items-center justify-between px-5 py-3.5 transition hover:bg-[#eaedf0]",
                          i < item.sub.length - 1 && "border-b border-brand-ink/6"
                        )}
                      >
                        <span className="font-ewangi text-[14px] text-brand-ink">{sub.label}</span>
                        {sub.tag && (
                          <span className="ml-3 rounded-full bg-brand-teal/15 px-2 py-0.5 font-ewangi text-[10px] uppercase tracking-wide text-brand-teal">
                            {sub.tag}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={cn("whitespace-nowrap transition", dark ? "hover:text-brand-teal" : "hover:text-brand-teal")}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Currency toggle + mobile hamburger */}
        <div className="ml-auto flex items-center gap-3 lg:ml-6">
          <div
            className={cn("hidden items-center rounded-(--radius-btn) border p-1 sm:flex", dark ? "border-white/15 bg-white/10" : "border-brand-ink/10 bg-brand-paper")}
            role="group"
            aria-label="Currency"
          >
            {currencies.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCurrency(c)}
                className={cn(
                  "rounded-(--radius-btn) px-3 py-1.5 font-ewangi text-label font-semibold uppercase transition",
                  currency === c ? "bg-brand-teal text-[#1e1e1e]" : "bg-[#d9d9d9] text-[#1e1e1e]"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "inline-flex items-center justify-center rounded p-2 transition lg:hidden",
              dark ? "text-white/90" : "text-brand-ink/90",
              mobileOpen
                ? dark ? "bg-white/10" : "bg-brand-ink/10"
                : dark ? "hover:bg-white/10" : "hover:bg-brand-ink/5"
            )}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute inset-x-0 top-full z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-brand-ink/70 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative border-t border-brand-paper/10 bg-brand-ink/80 text-brand-paper shadow-2xl backdrop-blur-md">
            <div className="space-y-1 px-4 py-4">
              {navItems.map((item) =>
                item.sub ? (
                  /* Properties accordion in mobile — label navigates, chevron toggles */
                  <div key={item.label}>
                    <div className="flex items-center justify-between rounded hover:bg-brand-paper/10">
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex-1 px-3 py-3.5 font-ewangi text-[1rem]"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setPropertiesOpen((o) => !o)}
                        className="flex min-h-11 min-w-11 items-center justify-center px-2"
                        aria-label="Toggle properties submenu"
                      >
                        {propertiesOpen
                          ? <ChevronUp className="h-4 w-4 text-brand-paper/60" />
                          : <ChevronDown className="h-4 w-4 text-brand-paper/60" />}
                      </button>
                    </div>

                    {propertiesOpen && (
                      <div className="ml-4 mt-1 space-y-1 border-l border-brand-paper/10 pl-3">
                        {item.sub.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-between rounded px-3 py-3 font-ewangi text-[0.9rem] hover:bg-brand-paper/10"
                          >
                            <span>{sub.label}</span>
                            {sub.tag && (
                              <span className="ml-2 rounded-full bg-brand-teal/20 px-2 py-0.5 text-[10px] uppercase tracking-wide text-brand-teal">
                                {sub.tag}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded px-3 py-3.5 font-ewangi text-[1rem] hover:bg-brand-paper/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}

              <div className="flex gap-1 pt-2">
                {currencies.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCurrency(c)}
                    className={cn(
                      "flex-1 rounded-(--radius-btn) px-3 py-3 font-ewangi text-label font-semibold uppercase",
                      currency === c ? "bg-brand-teal text-[#1e1e1e]" : "bg-[#d9d9d9] text-[#1e1e1e]"
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

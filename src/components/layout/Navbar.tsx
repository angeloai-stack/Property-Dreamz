"use client";
// Sticky top navigation with dark/light modes, Properties mega-menu by zone, currency toggle, and mobile drawer.
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";

type SubItem  = { label: string; href: string; tag?: string };
type Zone     = { zone: string; href: string; items: SubItem[] };
type NavItem  =
  | { label: string; href: string; zones?: never }
  | { label: string; href: string; zones: Zone[] };

// ─── Properties grouped by zone ───────────────────────────────────────────────
// City assignments follow the SEO content document (source of truth as of Jul 2026).
// Zone header links to the dedicated city page. Alma Nova, Divino, and Quinta Misión
// are in the document but have no detail page yet — add them here once built.
const propertyZones: Zone[] = [
  {
    zone: "Tijuana",
    href: "/tijuana-real-estate",
    items: [
      { label: "Costa Baja",          href: "/properties/costa-baja" },
      { label: "Costa Real",          href: "/properties/costa-real" },
      { label: "Del Mar Residencial", href: "/properties/delmar" },
      { label: "Andares",             href: "/properties/andares" },
    ],
  },
  {
    zone: "Ensenada",
    href: "/ensenada-real-estate",
    items: [
      { label: "Cíbola del Mar",    href: "/properties/cibola-del-mar" },
      { label: "Encanto del Valle", href: "/properties/encanto-del-valle" },
      { label: "Pacifica",          href: "/properties/pacifica" },
      { label: "Punta Piedra",      href: "/properties/punta-piedra" },
    ],
  },
  {
    zone: "Rosarito",
    href: "/rosarito-real-estate",
    items: [
      { label: "Alimar",          href: "/properties/alimar" },
      { label: "Costa Bella",     href: "/properties/costa-bella" },
      { label: "Laguna Bay",      href: "/properties/laguna-bay" },
      { label: "Loma Serena",     href: "/properties/loma-serena" },
      { label: "Naos",            href: "/properties/naos" },
      { label: "Palacio del Mar", href: "/properties/palacio-del-mar" },
      { label: "Tierra de Agua",  href: "/properties/tierra-de-agua" },
      { label: "Tower 51",        href: "/properties/torre51" },
      { label: "The Wavve",       href: "/properties/the-wave" },
    ],
  },
];

const navItems: NavItem[] = [
  { label: "Home",        href: "/" },
  { label: "About us",    href: "/about" },
  { label: "Properties",  href: "/properties", zones: propertyZones },
  { label: "Map",         href: "/explore-map" },
  { label: "Buyers",      href: "/buyers-guide" },
  { label: "Developers",  href: "/for-developers" },
  // Blog tab hidden until the CMS is in place — restore alongside the Footer link.
  // { label: "Blog",        href: "/blog" },
  { label: "Contact",     href: "/contact" },
];

const currencies = ["USD", "MXN"] as const;
type Currency = (typeof currencies)[number];

export function Navbar() {
  const pathname = usePathname();
  const dark = pathname.startsWith("/properties/delmar")
    || pathname.startsWith("/properties/andares")
    || pathname.startsWith("/properties/torre51")
    || pathname.startsWith("/properties/tierra-de-agua")
    || pathname.startsWith("/properties/punta-piedra")
    || pathname.startsWith("/properties/alimar")
    || pathname.startsWith("/properties/cibola-del-mar")
    || pathname.startsWith("/properties/palacio-del-mar")
    || pathname.startsWith("/properties/naos")
    || pathname.startsWith("/properties/loma-serena")
    || pathname.startsWith("/properties/pacifica")
    || pathname.startsWith("/properties/encanto-del-valle")
    || pathname.startsWith("/properties/laguna-bay")
    || pathname.startsWith("/properties/costa-real")
    || pathname.startsWith("/properties/costa-baja")
    || pathname.startsWith("/properties/costa-bella")
    || pathname.startsWith("/properties/the-wave");

  const [mobileOpen, setMobileOpen]         = useState(false);
  const [propertiesOpen, setPropertiesOpen] = useState(false);
  const [currency, setCurrency]             = useState<Currency>("USD");
  const [scrolled, setScrolled]             = useState(false);
  const [navHidden, setNavHidden]           = useState(false);
  const lastScrollY                         = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      if (y > 80) {
        setNavHidden(y > lastScrollY.current);
      } else {
        setNavHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header className={cn(
      "sticky top-0 z-50 border-b transition-all duration-300",
      navHidden ? "-translate-y-full" : "translate-y-0",
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
            item.zones ? (
              /* ── Properties mega-menu ── */
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 whitespace-nowrap transition hover:text-brand-teal"
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" strokeWidth={2.5} />
                </Link>

                {/* Mega-menu panel — centered under the trigger, 7 zone columns */}
                <div className="pointer-events-none absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-brand-ink/8 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.14)]">
                    <div className="flex divide-x divide-brand-ink/6">
                      {item.zones.map((zoneGroup) => (
                        <div key={zoneGroup.zone} className="flex min-w-30 flex-col px-4 py-4">
                          {/* Zone header — links to the city page/map */}
                          <Link
                            href={zoneGroup.href}
                            className="mb-2 whitespace-nowrap font-ewangi text-[11px] font-semibold uppercase tracking-widest text-brand-teal hover:text-brand-pine"
                          >
                            {zoneGroup.zone}
                          </Link>
                          {/* Properties in this zone */}
                          <div className="flex flex-col gap-0.5">
                            {zoneGroup.items.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className="flex items-center justify-between gap-2 rounded-lg px-2 py-2 transition hover:bg-[#eaedf0]"
                              >
                                <span className="whitespace-nowrap font-ewangi text-[13px] text-brand-ink">{sub.label}</span>
                                {sub.tag && (
                                  <span className="rounded-full bg-brand-teal/15 px-1.5 py-0.5 font-ewangi text-[9px] uppercase tracking-wide text-brand-teal">
                                    {sub.tag}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
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

        {/* Currency toggle + login + mobile hamburger */}
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

        <Link
          href="/login"
          className={cn(
            "hidden items-center gap-1.5 rounded-(--radius-btn) border px-3.5 py-1.5 font-ewangi text-label font-semibold transition lg:flex",
            dark
              ? "border-white/20 text-white hover:bg-white/10"
              : "border-brand-ink/20 text-brand-ink hover:bg-brand-ink/5"
          )}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
          Login
        </Link>
      </Container>

    </header>

    {/* Mobile menu — outside <header> so it's not trapped inside its stacking context */}
    {mobileOpen && (
      <div className="fixed inset-x-0 bottom-0 top-14.25 z-9999 overflow-y-auto overscroll-contain border-t border-brand-paper/10 bg-brand-ink/85 backdrop-blur-sm text-brand-paper lg:hidden">
        <div className="space-y-1 px-4 py-4 pb-28">
          {navItems.map((item) =>
            item.zones ? (
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
                  <div className="ml-4 mt-1 space-y-3 border-l border-brand-paper/10 pl-3">
                    {item.zones.map((zoneGroup) => (
                      <div key={zoneGroup.zone}>
                        <Link
                          href={zoneGroup.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-1 font-ewangi text-[10px] font-semibold uppercase tracking-widest text-brand-teal"
                        >
                          {zoneGroup.zone}
                        </Link>
                        {zoneGroup.items.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-between rounded px-3 py-2.5 font-ewangi text-[0.9rem] hover:bg-brand-paper/10"
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

          <Link
            href="/login"
            onClick={() => setMobileOpen(false)}
            className="mt-1 flex items-center justify-center gap-2 rounded-(--radius-btn) border border-brand-paper/20 py-3 font-ewangi text-[1rem] text-brand-paper hover:bg-brand-paper/10"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
            Login
          </Link>
        </div>
      </div>
    )}
    </>
  );
}

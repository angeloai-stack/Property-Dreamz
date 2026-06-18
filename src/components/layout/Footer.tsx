import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";

// Site-wide footer rendered from the root layout on every public page.
// Content is driven by the constants below so links can be updated in one place.

/** Quick-access links shown beside the logo in the top footer row. */
const topNav = [
  { label: "Explore map", href: "/explore-map" },
  { label: "Buyer's guide", href: "/buyers-guide" },
  { label: "For developers", href: "/for-developers" },
  { label: "The Mission", href: "/about" },
  { label: "Saved", href: "/saved" },
] as const;

/** Grouped link columns for buyers, developers, and company info. */
const linkColumns = [
  {
    title: "For buyers",
    links: [
      { label: "Browse", href: "/properties" },
      { label: "Guide", href: "/buyers-guide" },
      { label: "Closing", href: "/buyers-guide" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Get listed", href: "/for-developers" },
      { label: "Pricing", href: "/for-developers" },
      { label: "Portal", href: "/for-developers" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Mission", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Press", href: "/contact" },
    ],
  },
] as const;

/** External social profiles. Replace href values when official accounts are live. */
const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "TikTok", href: "https://tiktok.com", icon: FaTiktok },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  { label: "YouTube", href: "https://youtube.com", icon: FaYoutube },
  { label: "X", href: "https://x.com", icon: FaXTwitter },
] as const;

/** Handle and inbox lines shown under the social icons. */
const contactLines = [
  "@Property Dreamz",
  "contact@propertydreamz.com",
  "buyers@propertydreamz.com",
  "developers@propertydreamz.com",
] as const;

// Shared text link styles for internal footer navigation.
function FooterLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "font-body text-label text-brand-muted transition hover:text-brand-emerald",
        className
      )}
    >
      {children}
    </Link>
  );
}

// Single column of titled links used in the main footer grid.
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div className="space-y-2">
      <h3 className="font-ewangi text-label font-bold uppercase text-brand-ink">{title}</h3>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.label}>
            <FooterLink href={link.href}>{link.label}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    // mt-auto keeps the footer at the bottom on short pages (see root layout flex column).
    <footer className="mt-auto bg-brand-paper text-brand-ink">
      <Container className="space-y-4 py-4 md:py-5">
        {/* Logo and condensed navigation */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="inline-flex shrink-0 items-center" aria-label="Property Dreamz home">
            <Image
              src="/brand/property-dreamz-logo-horizontal.png"
              alt="Property Dreamz"
              width={3562}
              height={684}
              className="h-7 w-auto"
            />
          </Link>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-4 gap-y-1"
          >
            {topNav.map((item) => (
              <FooterLink key={item.href} href={item.href} className="whitespace-nowrap">
                {item.label}
              </FooterLink>
            ))}
          </nav>
        </div>

        {/* Line 1 — Figma: horizontal separator between logo row and main content */}
        <hr className="border-t border-brand-ink/80" />

        {/* Brand blurb, socials, contact details, and grouped links */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-6">
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <p className="max-w-xs text-xs leading-5 text-brand-muted">
              The verified portal for Americans buying in Mexico. English. USD. Every title checked.
            </p>

            <div className="flex flex-wrap gap-1.5">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-pine text-brand-paper transition hover:bg-brand-emerald"
                >
                  <Icon className="h-3 w-3" aria-hidden="true" />
                </a>
              ))}
            </div>

            <ul className="space-y-0.5 text-xs text-brand-muted">
              {contactLines.map((line) => (
                <li key={line}>
                  {/* Render email addresses as mailto links; leave handles as plain text. */}
                  {line.includes("@") && !line.startsWith("@") ? (
                    <a
                      href={`mailto:${line}`}
                      className="transition hover:text-brand-emerald"
                    >
                      {line}
                    </a>
                  ) : (
                    <span>{line}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {linkColumns.map((column) => (
            <FooterColumn key={column.title} title={column.title} links={column.links} />
          ))}
        </div>

        {/* Copyright, legal links, and certification */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1 text-[11px] leading-4 text-brand-muted">
            <p>
              © {year} Property Dreamz LLC • All Rights Reserved | San Diego, CA • Serving all of
              Mexico
            </p>
            <div className="flex flex-wrap gap-x-2 gap-y-0.5">
              <FooterLink href="/contact">Privacy Policy</FooterLink>
              <span aria-hidden="true">•</span>
              <FooterLink href="/contact">Terms of Service</FooterLink>
            </div>
          </div>

          <Image
            src="https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto/CMRE_Logo-03_fuisiq.png"
            alt="CMRE Certified Mexico Real Estate"
            width={171}
            height={54}
            className="h-10 w-auto shrink-0 self-start object-contain sm:self-center"
          />
        </div>
      </Container>
    </footer>
  );
}

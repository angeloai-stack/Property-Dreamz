// Site-wide footer: logo, nav, social icons, link columns, copyright, and CMRE badge.
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
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
// Content is driven by the constants below so links can be updated in one place;
// labels are translation keys resolved against the "footer" namespace at render time.

/** Quick-access links shown beside the logo in the top footer row. */
const topNav = [
  { key: "exploreMap", href: "/explore-map" },
  { key: "buyersGuide", href: "/buyers-guide" },
  { key: "forDevelopers", href: "/for-developers" },
  { key: "mission", href: "/about" },
  // Blog link hidden until the CMS is in place — restore alongside the Navbar tab.
  // { key: "blog", href: "/blog" },
  { key: "saved", href: "/saved" },
] as const;

/** Grouped link columns for buyers, developers, and company info. */
const linkColumns = [
  {
    key: "forBuyers",
    links: [
      { key: "browse", href: "/properties" },
      { key: "guide", href: "/buyers-guide" },
      { key: "closing", href: "/buyers-guide" },
    ],
  },
  {
    key: "developers",
    links: [
      { key: "getListed", href: "/for-developers" },
      { key: "pricing", href: "/for-developers" },
      { key: "portal", href: "/for-developers" },
    ],
  },
  {
    key: "company",
    links: [
      { key: "mission", href: "/about" },
      { key: "contact", href: "/contact" },
      { key: "press", href: "/contact" },
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
  titleKey,
  links,
  t,
}: {
  titleKey: string;
  links: readonly { key: string; href: string }[];
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <div className="space-y-2">
      <h3 className="font-ewangi text-label font-bold uppercase text-brand-ink">
        {t(`columns.${titleKey}.title`)}
      </h3>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.key}>
            <FooterLink href={link.href}>{t(`columns.${titleKey}.${link.key}`)}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    // mt-auto keeps the footer at the bottom on short pages (see root layout flex column).
    <footer className="mt-auto bg-brand-paper text-brand-ink">
      <Container className="space-y-4 py-4 md:py-5">
        {/* Logo and condensed navigation */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="inline-flex shrink-0 items-center" aria-label={t("logoAlt")}>
            <Image
              src="https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto/brand/property-dreamz-logo-horizontal"
              alt="Property Dreamz"
              width={3562}
              height={684}
              className="h-7 w-auto"
            />
          </Link>

          <nav
            aria-label={t("footerNav")}
            className="flex flex-wrap gap-x-4 gap-y-1"
          >
            {topNav.map((item) => (
              <FooterLink key={item.href} href={item.href} className="whitespace-nowrap">
                {t(`topNav.${item.key}`)}
              </FooterLink>
            ))}
          </nav>
        </div>

        {/* Line 1 — Figma: horizontal separator between logo row and main content */}
        <hr className="border-t border-brand-ink/80" />

        {/* Brand blurb, socials, contact details, and grouped links */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-6">
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <p className="max-w-xs text-xs leading-5 text-brand-muted">{t("blurb")}</p>

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
            <FooterColumn key={column.key} titleKey={column.key} links={column.links} t={t} />
          ))}
        </div>

        {/* Copyright, legal links, and certification */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1 text-[11px] leading-4 text-brand-muted">
            <p>{t("copyright", { year })}</p>
            <div className="flex flex-wrap gap-x-2 gap-y-0.5">
              <FooterLink href="/contact">{t("privacyPolicy")}</FooterLink>
              <span aria-hidden="true">•</span>
              <FooterLink href="/contact">{t("termsOfService")}</FooterLink>
            </div>
          </div>

          <Image
            src="https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto/CMRE_Logo-03_fuisiq.png"
            alt={t("cmreLogoAlt")}
            width={171}
            height={54}
            className="h-10 w-auto shrink-0 self-start object-contain sm:self-center"
          />
        </div>
      </Container>
    </footer>
  );
}

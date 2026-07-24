// Root layout — shared shell (Navbar, Footer, WhatsApp) injected on every page except /coming-soon and /portal.
// Locale-aware: validates the [locale] segment, sets <html lang>, and provides next-intl messages to the tree.
import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LayoutShell } from "@/components/layout/LayoutShell";
import { SavedPropertiesProvider } from "@/hooks/useSavedProperties";
import { routing } from "@/i18n/routing";
import { ewangi } from "@/lib/fonts";
import "../globals.css";

// Font variables are declared here so every page inherits them via CSS custom properties.

// metadataBase is required for Next.js to build absolute OG/canonical URLs.
const SITE_URL = "https://propertydreamz.com";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });

  return {
    metadataBase: new URL(SITE_URL),
    // %s is replaced by each page's own title string; default is used when no title is set.
    title: {
      template: t("titleTemplate"),
      default: t("defaultTitle"),
    },
    description: t("description"),
    keywords: t.raw("keywords") as string[],
    authors: [{ name: "Property Dreamz", url: SITE_URL }],
    creator: "Property Dreamz",
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((loc) => [loc, loc === routing.defaultLocale ? "/" : `/${loc}`])
      ),
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_MX" : "en_US",
      url: SITE_URL,
      siteName: "Property Dreamz",
      title: t("defaultTitle"),
      description: t("description"),
      images: [
        {
          url: "/brand/property-dreamz-logo-stacked.png",
          width: 800,
          height: 600,
          alt: t("ogImageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["/brand/property-dreamz-logo-stacked.png"],
      creator: "@propertydreamz",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/brand/property-dreamz-logo-circle.png", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
      apple: "/brand/property-dreamz-logo-circle.png",
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={ewangi.variable}>
      {/* flex-col + min-h-screen ensures the footer is always pushed to the bottom */}
      <body className="flex min-h-screen flex-col bg-brand-paper text-brand-ink">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SavedPropertiesProvider>
            <LayoutShell>{children}</LayoutShell>
          </SavedPropertiesProvider>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

// Root layout — shared shell (Navbar, Footer, WhatsApp) injected on every page except /coming-soon and /portal.
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { LayoutShell } from "@/components/layout/LayoutShell";
import { SavedPropertiesProvider } from "@/hooks/useSavedProperties";
import { ewangi } from "@/lib/fonts";
import "./globals.css";

// Font variables are declared here so every page inherits them via CSS custom properties.

// metadataBase is required for Next.js to build absolute OG/canonical URLs.
const SITE_URL = "https://propertydreamz.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // %s is replaced by each page's own title string; default is used when no title is set.
  title: {
    template: "%s — Property Dreamz",
    default: "Mexico Real Estate | Verified Properties | Property Dreamz",
  },
  description:
    "Explore certified Mexico real estate listings. Buy a house in Mexico with confidence — every property title-searched, developer-reviewed, and HOA-audited.",
  keywords: [
    "mexico real estate",
    "buy property mexico",
    "verified developments mexico",
    "fideicomiso",
    "expat real estate mexico",
    "baja california real estate",
    "riviera maya real estate",
    "certified developer mexico",
  ],
  authors: [{ name: "Property Dreamz", url: SITE_URL }],
  creator: "Property Dreamz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Property Dreamz",
    title: "Mexico Real Estate | Verified Properties | Property Dreamz",
    description:
      "Explore certified Mexico real estate listings. Buy a house in Mexico with confidence — every property title-searched, developer-reviewed, and HOA-audited.",
    images: [
      {
        url: "/brand/property-dreamz-logo-stacked.png",
        width: 800,
        height: 600,
        alt: "Property Dreamz — Verified Mexican Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Property Dreamz | Verified Mexican Real Estate",
    description:
      "Browse 47 certified developments in Mexico. Every title searched, every developer reviewed.",
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={ewangi.variable}>
      {/* flex-col + min-h-screen ensures the footer is always pushed to the bottom */}
      <body className="flex min-h-screen flex-col bg-brand-paper text-brand-ink">
        <SavedPropertiesProvider>
          <LayoutShell>{children}</LayoutShell>
        </SavedPropertiesProvider>
        <Analytics />
      </body>
    </html>
  );
}

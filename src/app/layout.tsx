import type { Metadata } from "next";
import { Navbar, Main, Footer, WhatsAppButton } from "@/components/layout";
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
    default: "Property Dreamz | Verified Mexican Real Estate for Americans",
  },
  description:
    "The only portal where every Mexico property is certified before listing. Browse 47 verified developments — title searched, developer reviewed, HOA audited.",
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
    title: "Property Dreamz | Verified Mexican Real Estate for Americans",
    description:
      "The only portal where every Mexico property is certified before listing. Browse 47 verified developments.",
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
        <Navbar />
        <Main>{children}</Main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

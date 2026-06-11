import type { Metadata } from "next";
import { Navbar, Main, Footer, WhatsAppButton } from "@/components/layout";
import { inter, playfair, ibrand, ewangi } from "@/lib/fonts";
import "./globals.css";

// Font variables are declared here so every page inherits them via CSS custom properties.

export const metadata: Metadata = {
  title: "Property Dreamz | Verified Mexican Real Estate",
  description:
    "Luxury real estate platform connecting American buyers with verified Mexican developments.",
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
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${ibrand.variable} ${ewangi.variable}`}>
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

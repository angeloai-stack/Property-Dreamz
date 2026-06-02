import type { Metadata } from "next";
import { Navbar, Main, Footer, WhatsAppButton } from "@/components/layout";
import { inter, playfair } from "@/lib/fonts";
import "./globals.css";

// Root layout for the application uses centralized font exports
// and applies the global dark theme across all pages.

export const metadata: Metadata = {
  title: "Property Dreamz | Verified Mexican Real Estate",
  description:
    "Luxury real estate platform connecting American buyers with verified Mexican developments.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      {/* Root layout para toda la aplicación. */}
      {/* El fondo global y los ajustes de tipografía se aplican aquí. */}
      <body className="min-h-full bg-[#0A1628] text-white">
        <Navbar />
        <Main>{children}</Main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

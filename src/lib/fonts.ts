import { Inter, Playfair_Display, Oswald, Montserrat } from "next/font/google";

// Centralized font exports for consistent usage across the app.
// These variables are referenced by the Tailwind config and the root layout.
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// Ibrand: display font used for headings and prominent CTAs.
// Using Oswald as a pragmatic fallback until the brand font files are provided.
export const ibrand = Oswald({
  subsets: ["latin"],
  variable: "--font-ibrand",
  weight: ["400", "600", "700"],
});

// Ewangi: label / microcopy font. Using Montserrat as a placeholder.
export const ewangi = Montserrat({
  subsets: ["latin"],
  variable: "--font-ewangi",
  weight: ["400", "600"],
});

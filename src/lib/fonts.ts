import { Inter, Playfair_Display, Oswald } from "next/font/google";
import localFont from "next/font/local";

// Centralized font exports; CSS variables are applied in the root layout.
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// Ibrand: display 46, title 30, subtitle 21. Oswald fallback until brand files ship.
export const ibrand = Oswald({
  subsets: ["latin"],
  variable: "--font-ibrand",
  weight: ["400", "600", "700"],
});

// Ewangi: primary brand typeface loaded from the local TTF file.
export const ewangi = localFont({
  src: "../fonts/Ewangi.ttf",
  variable: "--font-ewangi",
  display: "swap",
  weight: "100 900",
});

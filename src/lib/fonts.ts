import { Inter, Playfair_Display, Oswald, Montserrat } from "next/font/google";

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

// Ewangi: primary typeface for all text. Montserrat fallback until brand files ship.
export const ewangi = Montserrat({
  subsets: ["latin"],
  variable: "--font-ewangi",
  weight: ["300", "400", "700"],
});

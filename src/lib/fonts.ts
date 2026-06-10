import { Inter, Playfair_Display, Oswald, Montserrat } from "next/font/google";

// Centralized font exports for the Property Dreamz typography system.
// Ibrand → headlines & buttons | Playfair → body | Ewangi → labels
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

// Ewangi: labels and microcopy. Montserrat fallback until brand files ship.
export const ewangi = Montserrat({
  subsets: ["latin"],
  variable: "--font-ewangi",
  weight: ["400", "600"],
});

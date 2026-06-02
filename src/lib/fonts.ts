import { Inter, Playfair_Display } from "next/font/google";

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

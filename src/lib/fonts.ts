// Registers the Ewangi variable font; the CSS variable --font-ewangi is applied in layout.tsx.
import localFont from "next/font/local";

export const ewangi = localFont({
  src: "../fonts/Ewangi.ttf",
  variable: "--font-ewangi",
  display: "swap",
  weight: "100 900",
});

import type { Config } from "tailwindcss";

// Tailwind CSS configuration for the Property Dreamz design system.
// This file defines the brand palette, the only allowed font mappings,
// and the CSS classes that can be used across the app.
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0A1628",       // Hero background, navbar, footer, dark sections
          blue: "#1A3A5C",       // Secondary sections, card hover states, secondary CTAs
          gold: "#C9933A",       // Primary CTA buttons, prices, logo accent, Elite highlights
          green: "#1A7A5E",      // Legal verified badge, success states, savings text[cite: 1]
          white: "#FFFFFF",      // Card backgrounds on light sections, text on dark[cite: 1]
          lightBlue: "#EEF4FA",  // Light section backgrounds, alternating rows[cite: 1]
          gray: "#4A6274",       // Secondary text, captions, meta info, subheadings[cite: 1]
        },
      },
      backgroundColor: {
        // Tarjetas translúcidas sobre fondos oscuros (especificación técnica)
        "glass-white": "rgba(255, 255, 255, 0.06)",
      },
      fontFamily: {
        // Mapeo de las dos únicas fuentes permitidas
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

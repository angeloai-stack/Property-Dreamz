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
          pine: "#024139",
          emerald: "#026559",
          gold: "#B98A3E",
          ink: "#191919",
          paper: "#F4F1EA",
          white: "#FFFFFF",
          muted: "#6F7669",
          gray: "#5C665E",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;

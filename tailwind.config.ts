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
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '32px',
        8: '40px',
      },
      fontFamily: {
        ewangi: ["var(--font-ewangi)", "ui-sans-serif", "sans-serif"],
        body: ["var(--font-ewangi)", "ui-sans-serif", "sans-serif"],
      },
      fontSize: {
        display: ["2.875rem", { lineHeight: "1.05" }],
        title: ["1.875rem", { lineHeight: "1.15" }],
        subtitle: ["1.3125rem", { lineHeight: "1.25" }],
        body: ["1.0625rem", { lineHeight: "1.65" }],
        label: ["0.8125rem", { lineHeight: "1.4" }],
      },
      borderRadius: {
        xl2: "1.5rem",
        card: "4px",
        input: "8px",
        pill: "999px",
      },
      boxShadow: {
        subtle: '0 1px 3px rgba(0,0,0,0.08)'
      },
    },
  },
  plugins: [],
};

export default config;

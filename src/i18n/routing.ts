import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  // Browsers that send Accept-Language: es would otherwise auto-redirect visitors to /es.
  // Always serve English by default; users switch language explicitly via the ENG/ESP toggle.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];

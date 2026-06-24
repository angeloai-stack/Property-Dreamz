// Generates /robots.txt — controls which paths crawlers can index.
import type { MetadataRoute } from "next";

const SITE_URL = "https://propertydreamz.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Saved listings are user-specific — no SEO value and should stay private.
        disallow: ["/saved", "/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

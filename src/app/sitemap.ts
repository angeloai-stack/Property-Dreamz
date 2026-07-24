// Generates the XML sitemap served at /sitemap.xml for search-engine crawlers.
// Every static route is listed once per locale, with hreflang alternates linking the two versions together.
import type { MetadataRoute } from "next";
import { posts } from "./[locale]/blog/data";
import { properties } from "./[locale]/properties/data";
import { routing } from "@/i18n/routing";

const SITE_URL = "https://propertydreamz.com";

// "en" (default locale) has no URL prefix; "es" is served under /es.
function localizedPath(path: string, locale: string) {
  return locale === routing.defaultLocale ? `${SITE_URL}${path}` : `${SITE_URL}/${locale}${path}`;
}

function alternates(path: string) {
  return {
    languages: Object.fromEntries(routing.locales.map((locale) => [locale, localizedPath(path, locale)])),
  };
}

// Static routes only — dynamic property/listing pages will be added once the CMS is wired.
const STATIC_ROUTES: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/explore-map", changeFrequency: "daily", priority: 0.9 },
  { path: "/properties", changeFrequency: "daily", priority: 0.9 },
  { path: "/buyers-guide", changeFrequency: "monthly", priority: 0.8 },
  { path: "/baja-california-real-estate", changeFrequency: "weekly", priority: 0.8 },
  { path: "/tijuana-real-estate", changeFrequency: "weekly", priority: 0.8 },
  { path: "/rosarito-real-estate", changeFrequency: "weekly", priority: 0.8 },
  { path: "/ensenada-real-estate", changeFrequency: "weekly", priority: 0.8 },
  { path: "/for-developers", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const route of STATIC_ROUTES) {
      entries.push({
        url: localizedPath(route.path, locale),
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: alternates(route.path),
      });
    }

    // "Coming Soon" entries have no detail page yet, so they stay out of the sitemap.
    for (const p of properties.filter((p) => p.availability === "Available")) {
      entries.push({
        url: localizedPath(p.href, locale),
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
        alternates: alternates(p.href),
      });
    }

    for (const post of posts) {
      const path = `/blog/${post.slug}`;
      entries.push({
        url: localizedPath(path, locale),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: alternates(path),
      });
    }
  }

  return entries;
}

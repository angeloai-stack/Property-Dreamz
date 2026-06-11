import type { Metadata } from "next";
import { BuyersGuideSteps } from "@/components/home/BuyersGuideSteps";
import { CertifiedBanner } from "@/components/home/CertifiedBanner";
import { FeatureCards } from "@/components/home/FeatureCards";
import { HeroSection } from "@/components/home/HeroSection";
import { TopDevelopers } from "@/components/home/TopDevelopers";
import { VerifySection } from "@/components/home/VerifySection";

export const metadata: Metadata = {
  // Home page uses the root layout default title (no template wrapping needed).
  title: {
    absolute: "Property Dreamz | Verified Mexican Real Estate for Americans",
  },
  description:
    "Browse 47 certified developments in Mexico — title searched, developer reviewed, HOA audited. The only portal where every property is verified before listing.",
  openGraph: {
    title: "Property Dreamz | Verified Mexican Real Estate for Americans",
    description:
      "Browse 47 certified developments in Mexico. Every property verified before listing.",
    url: "https://propertydreamz.com",
  },
};

// JSON-LD for Organization + WebSite — surfaces the sitelinks searchbox in Google.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://propertydreamz.com/#organization",
      name: "Property Dreamz",
      url: "https://propertydreamz.com",
      logo: "https://propertydreamz.com/brand/property-dreamz-logo-horizontal.png",
      description:
        "The only real estate portal where every Mexico property is certified before listing.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Diego",
        addressRegion: "CA",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@propertydreamz.com",
        availableLanguage: ["English", "Spanish"],
      },
      sameAs: [
        "https://facebook.com/propertydreamz",
        "https://instagram.com/propertydreamz",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://propertydreamz.com/#website",
      url: "https://propertydreamz.com",
      name: "Property Dreamz",
      publisher: { "@id": "https://propertydreamz.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://propertydreamz.com/explore-map?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/*
        Section order matches the Figma Hero frame (sorted by Y position):
        1. HeroSection       — Y 126  (headline + search + hero image)
        2. VerifySection     — Y 874  (dark bg, "The only portal…", CMRE)
        3. FeatureCards      — Y 874+ (3 white trust cards, continues dark section)
        4. TopDevelopers     — Y 1708 (white bg, 4 portrait property cards)
        5. BuyersGuideSteps  — Y 2509 (3 alternating steps)
        6. CertifiedBanner   — Y 4237 (pine bg, "All certified by" + "Browse 47")
      */}
      <main className="flex-1 bg-brand-ink">
        <HeroSection />
        <VerifySection />
        <FeatureCards />
        <TopDevelopers />
        <BuyersGuideSteps />
        <CertifiedBanner />
      </main>
    </>
  );
}

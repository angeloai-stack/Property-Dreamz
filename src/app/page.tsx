import type { Metadata } from "next";
import { BuyersGuideSteps } from "@/components/home/BuyersGuideSteps";
import { CertifiedBanner } from "@/components/home/CertifiedBanner";
import { DestinationsStrip } from "@/components/home/DestinationsStrip";
import { FeatureCards } from "@/components/home/FeatureCards";
import { FeaturedDevelopments } from "@/components/home/FeaturedDevelopments";
import { HeroSection } from "@/components/home/HeroSection";
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
          urlTemplate: "https://propertydreamz.com/explore-map?q={search_term_string}",
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
      <main className="flex-1 bg-brand-ink">
        <HeroSection />
        <DestinationsStrip />
        <FeaturedDevelopments />
        <VerifySection />
        <BuyersGuideSteps />
        <CertifiedBanner />
        <FeatureCards />
      </main>
    </>
  );
}

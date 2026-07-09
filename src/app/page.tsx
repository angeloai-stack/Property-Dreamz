// Homepage — assembles the marketing sections in Figma-spec order and injects Organization/WebSite schema.
import type { Metadata } from "next";
import { BuyersGuideSteps } from "@/components/home/BuyersGuideSteps";
import { CertifiedBanner } from "@/components/home/CertifiedBanner";
import { FaqSection } from "@/components/home/FaqSection";
import { faqs } from "@/components/home/faq-data";
import { FeatureCards } from "@/components/home/FeatureCards";
import { HeroSection } from "@/components/home/HeroSection";
import { TopDevelopers } from "@/components/home/TopDevelopers";
import { VerifySection } from "@/components/home/VerifySection";
import { BajaSeoBlock } from "@/components/baja/BajaSeoBlock";
import { PropertiesByCity } from "@/components/baja/PropertiesByCity";
import { CampaignForm } from "@/components/forms";

// Title/description from the SEO content document (source of truth as of Jul 2026).
export const metadata: Metadata = {
  // Home page uses an absolute title (no template wrapping needed).
  title: {
    absolute: "Mexico Real Estate | Verified Properties | Property Dreamz",
  },
  description:
    "Explore certified Mexico real estate listings. Buy a house in Mexico with confidence — every property title-searched, developer-reviewed, and HOA-audited.",
  openGraph: {
    title: "Mexico Real Estate | Verified Properties | Property Dreamz",
    description:
      "Explore certified Mexico real estate listings. Buy a house in Mexico with confidence — every property title-searched, developer-reviewed, and HOA-audited.",
    url: "https://propertydreamz.com",
  },
};

// JSON-LD for Organization + WebSite + FAQPage — surfaces the sitelinks searchbox and FAQ rich results.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://propertydreamz.com/#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
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
        1. HeroSection       — Y 117  (headline + search + hero image)
        2. VerifySection     — Y 865  (dark bg, "The only portal…", CMRE)
        3. FeatureCards      — Y 865+ (3 white trust cards, continues dark section)
        4. TopDevelopers     — Y 1671 (white bg, 4 portrait property cards)
        5. BajaSeoBlock      — Y 2470 ("Baja California Real Estate" SEO text + stats)
        6. PropertiesByCity  — Y 3025 (tabbed carousel: Tijuana / Ensenada / Rosarito)
        7. BuyersGuideSteps  — Y 3792 (3 alternating steps)
        8. CertifiedBanner   — Y 5522 (pine bg, "All certified by" + "Browse 47")
      */}
      <main className="flex-1 overflow-x-hidden bg-brand-ink">
        <HeroSection />
        <VerifySection />
        <FeatureCards />
        <TopDevelopers />
        <BajaSeoBlock />
        <PropertiesByCity />
        <BuyersGuideSteps />
        <CertifiedBanner />
        <FaqSection />
        <CampaignForm />
      </main>
    </>
  );
}

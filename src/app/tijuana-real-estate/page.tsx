"use client";
// Tijuana Real Estate regional landing page — Figma: "Tijuana Real Estate" (node 1303:17725).
// Reuses homepage sections where content matches (Verify, top developers, buyer's guide, certified
// banner) and adds Tijuana-specific sections (hero copy, SEO block, properties grid, related posts).
// Figma's own frame ends with a placeholder screenshot image (not real content) between the related-blog
// grid and the footer — that gap is intentionally skipped here.
import { CertifiedBanner } from "@/components/home/CertifiedBanner";
import { FeatureCards } from "@/components/home/FeatureCards";
import { TopDevelopersCards } from "@/components/home/TopDevelopersCards";
import { VerifySection } from "@/components/home/VerifySection";
import { Container } from "@/components/ui";
import { BuyersGuideCarousel } from "@/components/baja/BuyersGuideCarousel";
import { TijuanaHero } from "@/components/tijuana/TijuanaHero";
import { TijuanaProperties } from "@/components/tijuana/TijuanaProperties";
import { TijuanaRelatedBlog } from "@/components/tijuana/TijuanaRelatedBlog";
import { TijuanaSeoBlock } from "@/components/tijuana/TijuanaSeoBlock";

// Figma's "Why Us?" cards carry Tijuana-specific copy, passed in via the `features` override prop.
const tijuanaFeatures = [
  {
    title: "Title clean before you wire a dollar",
    body: "Every Tijuana real estate development on our platform has cleared a rigorous due diligence review — judicial records, corporate filings, and project documentation included. We do the vetting so you don't have to guess who you're buying from.",
  },
  {
    title: "Cross-Border Expertise You Can Count On",
    body: "Our team has deep experience guiding U.S. and Canadian buyers through Tijuana real estate transactions — from understanding the fideicomiso trust structure to navigating notary requirements and closing costs. We speak your language, literally and legally.",
  },
  {
    title: "20 Minutes from San Diego, a World Apart",
    body: "Tijuana sits right at the U.S. border — close enough to visit on a weekend, compelling enough to own. Our buyers get the best of both worlds: Pacific coast living at Mexican prices, with the convenience of being a short drive from San Diego's international airport, hospitals, and retail.",
  },
] as const;

export default function TijuanaRealEstatePage() {
  return (
    <main className="flex-1 overflow-x-hidden bg-white">
      <TijuanaHero />
      <VerifySection />
      <FeatureCards features={tijuanaFeatures} />

      <section className="w-full bg-brand-paper py-8 md:py-16">
        <Container>
          <TopDevelopersCards />
        </Container>
      </section>

      <TijuanaSeoBlock />
      <TijuanaProperties />
      <BuyersGuideCarousel />
      <CertifiedBanner />
      <TijuanaRelatedBlog />
    </main>
  );
}

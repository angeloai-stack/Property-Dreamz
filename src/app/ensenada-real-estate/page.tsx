"use client";
// Ensenada Real Estate regional landing page — Figma: "Ensenada Real Estate" (node 1313:17496).
// Reuses homepage sections where content matches (Verify, top developers, buyer's guide, certified
// banner) and adds Ensenada-specific sections (hero copy, SEO block, properties grid, related posts).
// Figma's own frame ends with a placeholder screenshot image (not real content) between the related-blog
// grid and the footer — that gap is intentionally skipped here, same as on the Tijuana/Rosarito pages.
import { CertifiedBanner } from "@/components/home/CertifiedBanner";
import { FeatureCards } from "@/components/home/FeatureCards";
import { TopDevelopersCards } from "@/components/home/TopDevelopersCards";
import { VerifySection } from "@/components/home/VerifySection";
import { Container } from "@/components/ui";
import { BuyersGuideCarousel } from "@/components/baja/BuyersGuideCarousel";
import { EnsenadaHero } from "@/components/ensenada/EnsenadaHero";
import { EnsenadaProperties } from "@/components/ensenada/EnsenadaProperties";
import { EnsenadaRelatedBlog } from "@/components/ensenada/EnsenadaRelatedBlog";
import { EnsenadaSeoBlock } from "@/components/ensenada/EnsenadaSeoBlock";

// Figma's "Why Us?" verify cards carry Ensenada-specific copy, passed in via the `features` override prop.
const ensenadaFeatures = [
  {
    title: "Verified Developers, Clear Title",
    body: "Every Ensenada development on our platform has passed a rigorous due diligence review — judicial records, corporate filings, and project documentation included. We help you identify builders with a clean track record before you commit a single dollar.",
  },
  {
    title: "Wine Country, Ocean Views, and Real Value",
    body: "Ensenada is the only place in Baja where you can own oceanfront property and be 20 minutes from one of Mexico's premier wine regions. Valle de Guadalupe adds a lifestyle dimension that sets Ensenada real estate apart — world-class restaurants, boutique wineries, and a culinary scene that rivals Napa, at a fraction of the cost.",
  },
  {
    title: "Bilingual Support for American Buyers",
    body: "We specialize in guiding U.S. and Canadian buyers through Ensenada real estate transactions — from property selection and fideicomiso setup to notary coordination and closing. We speak your language, know the local market, and make the cross-border process straightforward.",
  },
] as const;

export default function EnsenadaRealEstatePage() {
  return (
    <main className="flex-1 overflow-x-hidden bg-white">
      <EnsenadaHero />
      <VerifySection />
      <FeatureCards features={ensenadaFeatures} />

      <section className="w-full bg-brand-paper py-8 md:py-16">
        <Container>
          <TopDevelopersCards />
        </Container>
      </section>

      <EnsenadaSeoBlock />
      <EnsenadaProperties />
      <BuyersGuideCarousel />
      <CertifiedBanner />
      <EnsenadaRelatedBlog />
    </main>
  );
}

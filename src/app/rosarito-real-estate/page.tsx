"use client";
// Rosarito Real Estate regional landing page — Figma: "Rosarito Real Estate" (node 1313:18151).
// Reuses homepage sections where content matches (Verify, top developers, buyer's guide, certified
// banner) and adds Rosarito-specific sections (hero copy, SEO block, properties grid, related posts).
// Figma's own frame ends with a placeholder screenshot image (not real content) between the related-blog
// grid and the footer — that gap is intentionally skipped here, same as on the Tijuana page.
import { CertifiedBanner } from "@/components/home/CertifiedBanner";
import { FeatureCards } from "@/components/home/FeatureCards";
import { TopDevelopersCards } from "@/components/home/TopDevelopersCards";
import { VerifySection } from "@/components/home/VerifySection";
import { Container } from "@/components/ui";
import { BuyersGuideCarousel } from "@/components/baja/BuyersGuideCarousel";
import { RosaritoHero } from "@/components/rosarito/RosaritoHero";
import { RosaritoProperties } from "@/components/rosarito/RosaritoProperties";
import { RosaritoRelatedBlog } from "@/components/rosarito/RosaritoRelatedBlog";
import { RosaritoSeoBlock } from "@/components/rosarito/RosaritoSeoBlock";

// Figma's "Why Us?" verify cards carry Rosarito-specific copy, passed in via the `features` override prop.
const rosaritoFeatures = [
  {
    title: "Vetted Developers, Zero Guesswork",
    body: "Every Rosarito development listed here has passed our due diligence process — judicial records, corporate history, and project documentation reviewed. We help you identify developers with a proven track record of delivering on their promises.",
  },
  {
    title: "30 Minutes from San Diego, Right on the Beach",
    body: "Rosarito is the closest beach town to San Diego — close enough for a weekend drive, compelling enough to own. Our buyers enjoy Pacific Ocean frontage at a fraction of California prices, with the convenience of San Diego's airport, hospitals, and shopping just across the border.",
  },
  {
    title: "Bilingual Guidance from Search to Close",
    body: "We guide American buyers through every step of a Rosarito real estate purchase — from selecting the right development to setting up a fideicomiso and closing with confidence. Bilingual support in English and Spanish throughout the entire process.",
  },
] as const;

export default function RosaritoRealEstatePage() {
  return (
    <main className="flex-1 overflow-x-hidden bg-white">
      <RosaritoHero />
      <VerifySection />
      <FeatureCards features={rosaritoFeatures} />

      <section className="w-full bg-brand-paper py-8 md:py-16">
        <Container>
          <TopDevelopersCards />
        </Container>
      </section>

      <RosaritoSeoBlock />
      <RosaritoProperties />
      <BuyersGuideCarousel />
      <CertifiedBanner />
      <RosaritoRelatedBlog />
    </main>
  );
}

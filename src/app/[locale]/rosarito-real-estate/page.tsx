"use client";
// Rosarito Real Estate regional landing page — Figma: "Rosarito Real Estate" (node 1313:18151).
// Reuses homepage sections where content matches (Verify, top developers, buyer's guide, certified
// banner) and adds Rosarito-specific sections (hero copy, SEO block, properties grid, related posts).
// Figma's own frame ends with a placeholder screenshot image (not real content) between the related-blog
// grid and the footer — that gap is intentionally skipped here, same as on the Tijuana page.
import { useTranslations } from "next-intl";
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

export default function RosaritoRealEstatePage() {
  // Figma's "Why Us?" verify cards carry Rosarito-specific copy, passed in via the `features` override prop.
  const t = useTranslations("rosarito");
  const rosaritoFeatures = t.raw("features") as { title: string; body: string }[];

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

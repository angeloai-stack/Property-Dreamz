"use client";
// Ensenada Real Estate regional landing page — Figma: "Ensenada Real Estate" (node 1313:17496).
// Reuses homepage sections where content matches (Verify, top developers, buyer's guide, certified
// banner) and adds Ensenada-specific sections (hero copy, SEO block, properties grid, related posts).
// Figma's own frame ends with a placeholder screenshot image (not real content) between the related-blog
// grid and the footer — that gap is intentionally skipped here, same as on the Tijuana/Rosarito pages.
import { useTranslations } from "next-intl";
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

type Feature = { title: string; body: string };

export default function EnsenadaRealEstatePage() {
  // Figma's "Why Us?" verify cards carry Ensenada-specific copy, passed in via the `features` override prop.
  const t = useTranslations("ensenada");
  const ensenadaFeatures = t.raw("features") as Feature[];

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

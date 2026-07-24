"use client";
// Tijuana Real Estate regional landing page — Figma: "Tijuana Real Estate" (node 1303:17725).
// Reuses homepage sections where content matches (Verify, top developers, buyer's guide, certified
// banner) and adds Tijuana-specific sections (hero copy, SEO block, properties grid, related posts).
// Figma's own frame ends with a placeholder screenshot image (not real content) between the related-blog
// grid and the footer — that gap is intentionally skipped here.
import { useTranslations } from "next-intl";
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

export default function TijuanaRealEstatePage() {
  const t = useTranslations("tijuana");
  // Figma's "Why Us?" cards carry Tijuana-specific copy, passed in via the `features` override prop.
  const tijuanaFeatures = t.raw("features.items") as { title: string; body: string }[];

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

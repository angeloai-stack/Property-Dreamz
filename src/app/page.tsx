import { BuyersGuideSteps } from "@/components/home/BuyersGuideSteps";
import { CertifiedBanner } from "@/components/home/CertifiedBanner";
import { DestinationsStrip } from "@/components/home/DestinationsStrip";
import { FeatureCards } from "@/components/home/FeatureCards";
import { FeaturedDevelopments } from "@/components/home/FeaturedDevelopments";
import { HeroSection } from "@/components/home/HeroSection";
import { VerifySection } from "@/components/home/VerifySection";

export default function Home() {
  return (
    <main className="flex-1 bg-brand-ink">
      <HeroSection />
      <DestinationsStrip />
      <FeaturedDevelopments />
      <VerifySection />
      <BuyersGuideSteps />
      <CertifiedBanner />
      <FeatureCards />
    </main>
  );
}

import { FeatureCards } from "@/components/home/FeatureCards";
import { HeroSection } from "@/components/home/HeroSection";
import { VerifySection } from "@/components/home/VerifySection";

export default function Home() {
  return (
    <main className="flex-1 bg-brand-ink">
      <HeroSection />
      <VerifySection />
      <FeatureCards />
    </main>
  );
}

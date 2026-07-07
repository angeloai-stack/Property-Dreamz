// "Inside the platform" feature grid + showcase image — Figma nodes 1405:18529-19118.
import Image from "next/image";
import { Camera, LayoutGrid, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { Container, RevealOnScroll } from "@/components/ui";

const features = [
  { icon: ShieldCheck, title: "Certified developments only", body: "All listings are verified for legitimacy, legal standing and quality." },
  { icon: null, title: "Immersive 360º tours", body: "Walk through every space with a smooth, interactive 360º experience." },
  { icon: Camera, title: "High-quality photo & video", body: "Stunning galleries and videos that showcase every detail." },
  { icon: MapPin, title: "Interactive location search", body: "Explore by map, neighborhood, or lifestyle with real-time location insights." },
  { icon: LayoutGrid, title: "Development details & amenities", body: "View floor plans, pricing, amenities and community information clearly." },
  { icon: MessageCircle, title: "Direct contact & guidance", body: "Connect directly with advisors or developers for fast, personalized guidance." },
] as const;

export function PlatformFeatures() {
  return (
    <section className="w-full bg-white py-14 md:py-20">
      <Container>
        <RevealOnScroll className="mb-10 max-w-xl">
          <span className="inline-flex items-center rounded-full bg-brand-teal/15 px-4 py-1.5 font-ewangi text-label font-semibold text-brand-emerald">
            Inside the platform
          </span>
          <h2 className="mt-4 font-ewangi text-[clamp(1.7rem,3.2vw,2.25rem)] font-bold leading-tight text-brand-ink">
            Powerful tools. Premium experience.
          </h2>
          <p className="mt-3 font-ewangi text-[15px] leading-relaxed text-brand-ink/60">
            Everything you need to explore, evaluate, and connect — all in one seamless platform.
          </p>
        </RevealOnScroll>

        <div className="grid gap-6 lg:grid-cols-[1fr_420px] lg:items-start">
          <RevealOnScroll direction="left" delay={80} className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-lg bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
                {feature.icon ? (
                  <feature.icon className="h-6.5 w-6.5 text-brand-teal-dark" strokeWidth={2} />
                ) : (
                  <span className="font-ewangi text-[1.05rem] font-bold text-brand-teal-dark">360°</span>
                )}
                <p className="mt-3 font-ewangi text-[1rem] font-bold leading-snug text-brand-ink">{feature.title}</p>
                <p className="mt-2 font-ewangi text-[12px] leading-relaxed text-brand-ink/55">{feature.body}</p>
              </div>
            ))}
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={140} className="relative h-64 overflow-hidden rounded-2xl sm:h-full sm:min-h-100">
            <Image
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80"
              alt="Aerial view of a certified residential development"
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover"
            />
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}

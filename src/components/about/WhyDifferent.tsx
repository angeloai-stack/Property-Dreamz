// "Why Property Dreamz exists" copy + 5-step process row — Figma nodes 1359:17907 / 1366:17524-528.
import { Heart, Search, ShieldCheck, Tag, Building2 } from "lucide-react";
import { Container, RevealOnScroll } from "@/components/ui";

const steps = [
  { icon: Search, title: "Discover", body: "Explore verified developments in the best locations." },
  { icon: ShieldCheck, title: "Verify", body: "We review each project to ensure it meets our standards." },
  { icon: Building2, title: "Compare", body: "Easily compare options, prices, amenities and locations." },
  { icon: Tag, title: "Invest", body: "Connect directly with developers and move forward." },
  { icon: Heart, title: "Enjoy Mexico", body: "Live, vacation or invest in the lifestyle you deserve." },
] as const;

export function WhyDifferent() {
  return (
    <section className="w-full bg-white py-14 md:py-20">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
        <RevealOnScroll direction="left">
          <span className="mb-4 inline-flex w-fit items-center rounded-full bg-brand-teal/15 px-4 py-1.5 font-ewangi text-label font-semibold text-brand-emerald">
            Why Property Dreamz® exists
          </span>
          <h2 className="font-ewangi text-[clamp(1.6rem,3vw,2.1rem)] font-bold leading-tight text-brand-ink">
            Buying in another country should feel exciting, not risky.
          </h2>
          <p className="mt-5 font-ewangi text-[15px] leading-relaxed text-brand-ink/60">
            Many buyers face challenges understanding legal requirements, verifying developers, and comparing real
            opportunities. Property Dreamz® was created to simplify that journey by providing a trusted platform
            focused on transparency, verification, and buyer confidence.
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="right" delay={120}>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:relative lg:flex lg:grid-cols-none lg:items-start lg:justify-between lg:gap-0">
            <div className="pointer-events-none absolute inset-x-0 top-8.5 hidden h-px bg-brand-teal/30 lg:block" aria-hidden="true" />
            {steps.map((step) => (
              <div key={step.title} className="relative flex flex-col items-center text-center lg:w-1/5 lg:px-2">
                <span className="relative z-10 flex h-17 w-17 shrink-0 items-center justify-center rounded-full bg-brand-teal text-brand-ink">
                  <step.icon className="h-7 w-7" strokeWidth={2} />
                </span>
                <p className="mt-3 font-ewangi text-[1.1rem] font-bold text-brand-ink">{step.title}</p>
                <p className="mt-1.5 font-ewangi text-[13px] leading-snug text-brand-ink/60">{step.body}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

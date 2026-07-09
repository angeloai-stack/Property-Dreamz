// Three trust/certification feature cards with staggered scroll-reveal animations.
import { BadgeCheck } from "lucide-react";
import { Container, Icon, RevealOnScroll } from "@/components/ui";
import { cn } from "@/lib/utils";

// Default homepage copy — from the SEO content document (source of truth as of Jul 2026).
const features = [
  {
    title: "Clean Title Before You Wire a Dollar",
    body: "Trust starts with transparency. When you are buying property in Mexico, the last thing you want is a legal surprise after closing. Our certification process includes a thorough review of judicial records, title history, and ownership chain to help you identify developers who meet the highest standards of professionalism and integrity. Every listing on Property Dreamz has passed our title search protocol — so you can invest with confidence from day one.",
  },
  {
    title: "Verified Regulatory Compliance",
    body: "Mexico real estate is governed by a unique set of federal, state, and municipal regulations — and not every developer plays by the rules. Property Dreamz verifies that every certified developer meets relevant legal, regulatory, and professional standards before they appear on our platform. This review covers permits, zoning, HOA structures, and adherence to industry best practices, ensuring that the property you buy in Mexico is fully compliant and protected by law.",
  },
  {
    title: "Property Security Assessment",
    body: "A secure development reflects a reliable organization. When buying a house in Mexico, the quality of on-site security and property management directly impacts your investment value and peace of mind. Our certification includes a rigorous evaluation of each development's security infrastructure, access controls, and management practices — confirming that the properties we list are not only legally sound but physically safe and well-maintained for owners and residents.",
  },
] as const;

type Feature = { title: string; body: string };

type FeatureCardsProps = {
  features?: readonly Feature[];
};

export function FeatureCards({ features: items = features }: FeatureCardsProps) {
  return (
    <section className="w-full bg-brand-ink pb-8 pt-2 md:pb-16">
      <Container>
        <div className="grid gap-3 md:grid-cols-3 md:gap-6">
          {items.map((feature, i) => (
            <RevealOnScroll key={feature.title} delay={i * 180} duration={1100} direction={i === 0 ? "left" : i === 2 ? "right" : "up"}>
            <article
              className={cn(
                "flex flex-col items-center rounded-2xl bg-white px-4 py-5 text-center shadow-subtle transition-all duration-300",
                "sm:rounded-4xl sm:px-7 sm:py-10",
                "hover:-translate-y-2 hover:shadow-xl"
              )}
            >
              <span className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand-emerald/10 text-brand-emerald sm:mb-5 sm:h-16 sm:w-16">
                <Icon as={BadgeCheck} size={32} color="currentColor" />
              </span>
              <h3 className="mb-2 font-ewangi text-[1rem] leading-snug text-brand-emerald sm:mb-4 sm:text-subtitle">
                {feature.title}
              </h3>
              <p className="font-body text-[0.85rem] text-brand-muted sm:text-body">{feature.body}</p>
            </article>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

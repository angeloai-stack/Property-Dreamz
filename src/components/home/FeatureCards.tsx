// Three trust/certification feature cards with staggered scroll-reveal animations.
import { useTranslations } from "next-intl";
import { BadgeCheck } from "lucide-react";
import { Container, Icon, RevealOnScroll } from "@/components/ui";
import { cn } from "@/lib/utils";

type Feature = { title: string; body: string };

type FeatureCardsProps = {
  features?: readonly Feature[];
};

export function FeatureCards({ features: itemsProp }: FeatureCardsProps) {
  const t = useTranslations("home.featureCards");
  // Default homepage copy comes from the "home.featureCards" translation namespace;
  // regional pages (e.g. Baja California) pass their own `features` prop instead.
  const items = itemsProp ?? (t.raw("items") as Feature[]);
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

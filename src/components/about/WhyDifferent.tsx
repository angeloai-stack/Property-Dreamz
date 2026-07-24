// "Why Property Dreamz exists" copy + 5-step process row — Figma nodes 1359:17907 / 1366:17524-528.
import { useTranslations } from "next-intl";
import { Heart, Search, ShieldCheck, Tag, Building2 } from "lucide-react";
import { Container, RevealOnScroll } from "@/components/ui";

// Icons stay in code — translated title/body come from "about.whyDifferent.steps".
const stepIcons = [Search, ShieldCheck, Building2, Tag, Heart] as const;

export function WhyDifferent() {
  const t = useTranslations("about.whyDifferent");
  const steps = t.raw("steps") as { title: string; body: string }[];

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
        <RevealOnScroll direction="left">
          <span className="mb-4 inline-flex w-fit items-center rounded-full bg-brand-teal/15 px-4 py-1.5 font-ewangi text-label font-semibold text-brand-emerald">
            {t("badge")}
          </span>
          <h2 className="font-ewangi text-[clamp(1.6rem,3vw,2.1rem)] font-bold leading-tight text-brand-ink">
            {t("heading")}
          </h2>
          <p className="mt-5 font-ewangi text-[15px] leading-relaxed text-brand-ink/60">
            {t("body")}
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="right" delay={120}>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:relative lg:flex lg:grid-cols-none lg:items-start lg:justify-between lg:gap-0">
            <div className="pointer-events-none absolute inset-x-0 top-8.5 hidden h-px bg-brand-teal/30 lg:block" aria-hidden="true" />
            {steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <div key={step.title} className="relative flex flex-col items-center text-center lg:w-1/5 lg:px-2">
                  <span className="relative z-10 flex h-17 w-17 shrink-0 items-center justify-center rounded-full bg-brand-teal text-brand-ink">
                    <Icon className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <p className="mt-3 font-ewangi text-[1.1rem] font-bold text-brand-ink">{step.title}</p>
                  <p className="mt-1.5 font-ewangi text-[13px] leading-snug text-brand-ink/60">{step.body}</p>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

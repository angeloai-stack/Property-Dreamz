// "Simple steps to grow your sales" — Figma "steps developers", nodes 1423:19426-1424:20172.
import { useTranslations } from "next-intl";
import { ClipboardEdit, Handshake, MonitorSmartphone, ShieldCheck, Users } from "lucide-react";
import { Container, RevealOnScroll } from "@/components/ui";

// Icons stay in code, paired by index with the translated title/body copy.
const icons = [ClipboardEdit, ShieldCheck, MonitorSmartphone, Users, Handshake] as const;

type Step = { title: string; body: string };

export function DevSteps() {
  const t = useTranslations("forDevelopers.steps");
  const items = t.raw("items") as Step[];

  return (
    <section id="how-it-works" className="w-full bg-white pb-14 md:pb-20">
      <Container>
        <RevealOnScroll className="text-center">
          <span className="inline-flex items-center rounded-full bg-brand-teal/15 px-4 py-1.5 font-ewangi text-label font-semibold text-brand-emerald">
            {t("badge")}
          </span>
          <h2 className="mx-auto mt-4 max-w-lg font-ewangi text-[clamp(1.7rem,3.2vw,2.25rem)] font-bold leading-tight text-brand-ink">
            {t("heading")}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={120} className="mt-12">
          <div className="relative grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:flex lg:grid-cols-none lg:items-start lg:justify-between lg:gap-0">
            <div className="pointer-events-none absolute inset-x-0 top-8.5 hidden h-px bg-brand-teal/30 lg:block" aria-hidden="true" />
            {items.map((step, i) => {
              const Icon = icons[i];
              return (
                <div key={step.title} className="relative flex flex-col items-center text-center lg:w-1/5 lg:px-2">
                  <span className="relative z-10 flex h-17 w-17 shrink-0 items-center justify-center rounded-full bg-brand-teal text-brand-ink">
                    <Icon className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <p className="mt-3 font-ewangi text-[1rem] font-bold text-brand-ink">{step.title}</p>
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

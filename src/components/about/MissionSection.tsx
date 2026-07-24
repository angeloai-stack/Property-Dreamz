// "Our mission" centered headline + 3 value cards — Figma nodes 1369:17531-17559.
import { useTranslations } from "next-intl";
import { Eye, ShieldCheck, Star } from "lucide-react";
import { Container, RevealOnScroll } from "@/components/ui";

// Icons stay in code — translated title/body come from "about.mission.values".
const valueIcons = [Eye, ShieldCheck, Star] as const;

export function MissionSection() {
  const t = useTranslations("about.mission");
  const values = t.raw("values") as { title: string; body: string }[];

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <Container className="flex flex-col items-center text-center">
        <RevealOnScroll className="flex flex-col items-center">
          <span className="mb-4 inline-flex items-center rounded-full bg-brand-teal/15 px-4 py-1.5 font-ewangi text-label font-semibold text-brand-emerald">
            {t("badge")}
          </span>
          <h2 className="max-w-3xl font-ewangi text-[clamp(1.5rem,3vw,2.1rem)] font-bold leading-tight text-brand-ink">
            {t("heading")}
          </h2>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {values.map((value, i) => {
            const Icon = valueIcons[i];
            return (
              <RevealOnScroll key={value.title} delay={i * 100} direction="up" className="flex flex-col items-center">
                <Icon className="h-8 w-8 text-brand-teal-dark" strokeWidth={1.75} />
                <p className="mt-3 font-ewangi text-[1.2rem] font-bold text-brand-teal-dark">{value.title}</p>
                <p className="mt-2 max-w-56 font-ewangi text-[14px] leading-relaxed text-brand-ink/60">{value.body}</p>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

// "Why contact us?" section — Figma nodes 1425:21042-21053, form card on the right.
import { useTranslations } from "next-intl";
import { Clock, Headphones, Languages, ShieldCheck } from "lucide-react";
import { Container, RevealOnScroll } from "@/components/ui";
import { ContactQuickForm } from "./ContactQuickForm";

const reasons = [
  { key: "expertGuidance", icon: Headphones },
  { key: "trustedSupport", icon: ShieldCheck },
  { key: "fastResponse", icon: Clock },
  { key: "bilingualTeam", icon: Languages },
] as const;

export function WhyContactUs() {
  const t = useTranslations("contact.whyContactUs");

  return (
    <section className="w-full bg-[#eaedf0] py-14 md:py-20">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <RevealOnScroll direction="left">
          <span className="font-ewangi text-[13px] font-semibold text-brand-ink/60">{t("eyebrow")}</span>
          <h2 className="mt-2 max-w-md font-ewangi text-[clamp(1.6rem,3vw,2.1rem)] font-bold leading-tight text-brand-teal-dark">
            {t("heading")}
          </h2>

          <div className="mt-10 space-y-8">
            {reasons.map((reason) => (
              <div key={reason.key} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-teal/15 text-brand-teal-dark">
                  <reason.icon className="h-5.5 w-5.5" strokeWidth={2} />
                </span>
                <div>
                  <p className="font-ewangi text-[1.05rem] font-bold text-brand-ink">
                    {t(`reasons.${reason.key}.title`)}
                  </p>
                  <p className="mt-1 font-ewangi text-[14px] leading-relaxed text-brand-ink/60">
                    {t(`reasons.${reason.key}.body`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="right" delay={120}>
          <ContactQuickForm />
        </RevealOnScroll>
      </Container>
    </section>
  );
}

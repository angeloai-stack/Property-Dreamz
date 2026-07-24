// About page hero — Figma: "About US" root frame, hero band (badge, headline, stats card, region map).
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Building2, MapPin, ShieldCheck, Users } from "lucide-react";
import { Container, RevealOnScroll } from "@/components/ui";

// Icons + position classNames stay in code — the translated copy (values/labels) comes from "about.hero".
const statIcons = [Building2, Users, ShieldCheck, MapPin] as const;

const regionPillPositions = [
  "left-[8%] top-[10%]",
  "left-[35%] top-[52%]",
  "right-[6%] bottom-[8%]",
] as const;

export function AboutHero() {
  const t = useTranslations("about.hero");
  const stats = t.raw("stats") as { value: string; label: string }[];
  const regionPills = t.raw("regionPills") as string[];

  return (
    <section className="w-full bg-[#eaedf0]">
      <Container className="grid gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll direction="left" className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit items-center rounded-full bg-brand-teal/15 px-4 py-1.5 font-ewangi text-label font-semibold text-brand-emerald">
            {t("badge")}
          </span>
          <h1 className="font-ewangi text-[clamp(2rem,4.2vw,2.75rem)] font-bold leading-tight text-brand-ink">
            {t("heading")}
          </h1>
          <p className="mt-5 max-w-lg font-ewangi text-[1.1rem] font-light leading-relaxed text-brand-ink/70">
            {t("paragraph1")}
          </p>
          <p className="mt-4 max-w-lg font-ewangi text-[1.1rem] font-light leading-relaxed text-brand-ink/70">
            {t("paragraph2")}
          </p>

          <p className="mt-7 flex items-center gap-2 font-ewangi text-[1.05rem] font-bold text-brand-emerald">
            <MapPin className="h-5 w-5 shrink-0" strokeWidth={2.25} />
            {t("location")}
          </p>

          <div className="mt-7 space-y-2.5">
            <p className="font-ewangi text-[13px] text-brand-ink/55">{t("certifiedByLabel")}</p>
            <div className="relative h-11 w-36">
              <Image
                src="https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto/CMRE_Logo-03_fuisiq.png"
                alt={t("cmreLogoAlt")}
                fill
                className="object-contain object-left"
                sizes="145px"
              />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="right" delay={120} className="relative">
          <div className="relative h-72 w-full overflow-hidden rounded-3xl bg-white sm:h-96 lg:h-full lg:min-h-100">
            <iframe
              src="https://maps.google.com/maps?q=Baja+California+Peninsula+Mexico&output=embed&z=6"
              className="absolute inset-0 h-full w-full border-0 grayscale-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("mapTitle")}
            />

            {regionPills.map((label, i) => (
              <span
                key={label}
                className={`pointer-events-none absolute z-10 rounded-full bg-brand-teal px-3.5 py-1.5 font-ewangi text-[12px] font-semibold text-brand-ink shadow-md ${regionPillPositions[i]}`}
              >
                {label}
              </span>
            ))}

            {/* Stats card — Figma: "Tb topics", floating top-right */}
            <div className="absolute right-4 top-4 z-10 grid grid-cols-2 gap-x-6 gap-y-4 rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:right-6 sm:top-6">
              {stats.map((stat, i) => {
                const Icon = statIcons[i];
                return (
                  <div key={stat.label} className="flex flex-col items-start gap-1">
                    <Icon className="h-4 w-4 text-brand-teal" strokeWidth={2} />
                    <p className="font-ewangi text-[1.1rem] font-bold leading-none text-brand-teal">{stat.value}</p>
                    <p className="max-w-20 font-ewangi text-[10px] leading-tight text-brand-ink/70">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

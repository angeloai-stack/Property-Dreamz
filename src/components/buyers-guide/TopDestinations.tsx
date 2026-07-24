// "Explore top destinations" grid + closing CTA — Figma nodes 1405:19140-1407:19364.
"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import { Container, RevealOnScroll } from "@/components/ui";
import { properties } from "@/app/[locale]/properties/data";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto/Propery%20Dreamz/Property%20Pics/Mascot";

// One certified, available development per region — Figma repeats a single placeholder card 4x.
const FEATURED_IDS = ["delmar", "andares", "punta-piedra", "encanto-del-valle"];
const featured = FEATURED_IDS.map((id) => properties.find((p) => p.id === id)).filter(
  (p): p is (typeof properties)[number] => p !== undefined
);

function formatPrice(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  return `$${Math.round(n / 1_000)}K`;
}

export function TopDestinations() {
  const t = useTranslations("buyersGuide.topDestinations");

  return (
    <section className="w-full bg-brand-ink py-14 md:py-20">
      <Container>
        <RevealOnScroll direction="left" className="mb-9">
          <span className="inline-flex items-center rounded-full bg-brand-teal/15 px-4 py-1.5 font-ewangi text-label font-semibold text-brand-teal">
            {t("badge")}
          </span>
          <h2 className="mt-4 font-ewangi text-[clamp(1.7rem,3.2vw,2.25rem)] font-bold leading-tight text-white">
            {t("heading")}
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((property, i) => (
            <RevealOnScroll key={property.id} delay={i * 90} direction="up">
              <Link href={property.href} className="group block overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:ring-brand-teal/50">
                <div className="relative h-44 w-full">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 rounded-[9px] bg-[#028e7f] px-2.5 py-1.5 shadow-md">
                    <span className="font-ewangi text-[13px] leading-none text-white">
                      {t("priceFrom", { price: formatPrice(property.priceUSD) })}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-ewangi text-[1.05rem] leading-snug text-white">{property.title}</p>
                  <p className="mt-1 flex items-center gap-1 font-ewangi text-[12px] text-white/50">
                    <MapPin className="h-3 w-3 shrink-0" />
                    {property.zone}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 font-ewangi text-[13px] font-semibold text-brand-teal">
                    {t("viewDevelopment")} <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={150} className="mt-10 rounded-2xl bg-brand-teal px-6 py-8 md:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <h3 className="font-ewangi text-[1.4rem] font-bold leading-tight text-brand-ink">{t("cta.heading")}</h3>
              <p className="mt-2 font-ewangi text-[14px] leading-relaxed text-brand-ink/70">
                {t("cta.body")}
              </p>
            </div>

            <div className="flex flex-col-reverse items-center gap-6 sm:flex-row sm:items-center">
              <div className="flex shrink-0 flex-wrap justify-center gap-3">
                <Link
                  href="/properties"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-ink px-6 py-3 font-ewangi text-[14px] font-semibold text-white transition hover:bg-black"
                >
                  {t("cta.ctaExplore")} <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-brand-ink/60 px-6 py-3 font-ewangi text-[14px] font-semibold text-brand-ink transition hover:bg-brand-ink hover:text-white"
                >
                  {t("cta.ctaAdvisor")}
                </Link>
              </div>

              {/* Dreamzy mascot — Figma "Dreamzy 1" / "image 82" */}
              <div className="hidden shrink-0 flex-col items-center md:flex">
                <div className="relative -mb-2 h-auto w-40">
                  <Image src={`${CLD}/dreamzy-speech-bubble`} alt="" width={624} height={442} className="h-auto w-full" />
                </div>
                <div className="relative z-10 h-20 w-20 shrink-0 overflow-hidden rounded-full ring-4 ring-white/40">
                  <Image src={`${CLD}/dreamzy-avatar`} alt={t("cta.mascotAlt")} fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

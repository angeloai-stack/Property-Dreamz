"use client";
// "Properties by City" tabbed carousel — Figma: "Section / Properties by City Carousel".
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Bath, Bed, Heart, Maximize2 } from "lucide-react";
import { RevealOnScroll } from "@/components/ui";
import { properties, toSavedProperty } from "@/app/[locale]/properties/data";
import { useSavedProperties } from "@/hooks/useSavedProperties";
import { cn } from "@/lib/utils";

const CITIES = ["Tijuana", "Ensenada", "Rosarito"] as const;

export function PropertiesByCity() {
  const t = useTranslations("home.propertiesByCity");
  const [city, setCity] = useState<(typeof CITIES)[number]>("Tijuana");
  const trackRef = useRef<HTMLDivElement>(null);
  const { isSaved, toggleSaved } = useSavedProperties();

  const cityProperties = useMemo(() => properties.filter((p) => p.region === city), [city]);

  function scrollBy(dir: -1 | 1) {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  }

  return (
    <section className="w-full bg-[#f4f8f6] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
        <RevealOnScroll direction="up" className="flex flex-col items-center gap-3 text-center">
          <p className="font-ewangi text-[11px] font-bold uppercase tracking-[0.14em] text-brand-teal">
            {t("eyebrow")}
          </p>
          <span className="rounded-full bg-brand-emerald px-7 py-2.5 font-ewangi text-[1.1rem] font-semibold text-brand-paper shadow-subtle">
            {t("pill")}
          </span>
        </RevealOnScroll>

        {/* City tabs */}
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {CITIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCity(c)}
              className={cn(
                "rounded-[22px] px-8 py-3 font-ewangi text-[15px] font-semibold transition",
                city === c ? "bg-brand-pine text-white" : "bg-white text-brand-ink/60 hover:text-brand-pine"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Cards row */}
        <div className="relative mt-10">
          {cityProperties.length > 0 ? (
            <div
              ref={trackRef}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
            >
              {cityProperties.map((property, i) => {
                const saved = isSaved(`catalog-${property.id}`);
                return (
                <RevealOnScroll key={property.id} delay={Math.min(i, 4) * 90} className="shrink-0 snap-start">
                  <article className="w-70 overflow-hidden rounded-[24px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)]">
                    <div className="relative h-75 w-full overflow-hidden">
                      <Image src={property.image} alt={property.title} fill sizes="280px" className="object-cover" />

                      {/* Amenity bars — left edge */}
                      <div className="absolute left-3 top-1/2 flex -translate-y-1/2 flex-col gap-1.5">
                        <span className="flex h-6 w-10.5 items-center justify-center gap-1 rounded-md bg-brand-teal text-white">
                          <Maximize2 className="h-3 w-3" strokeWidth={2} />
                        </span>
                        <span className="flex h-6 w-10.5 items-center justify-center gap-1 rounded-md bg-brand-teal text-white">
                          <Bed className="h-3 w-3" strokeWidth={2} />
                        </span>
                        <span className="flex h-6 w-10.5 items-center justify-center gap-1 rounded-md bg-brand-teal text-white">
                          <Bath className="h-3 w-3" strokeWidth={2} />
                        </span>
                      </div>

                      {/* Heart */}
                      <button
                        type="button"
                        aria-label={
                          saved
                            ? t("removeFromSaved", { title: property.title })
                            : t("save", { title: property.title })
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          toggleSaved(toSavedProperty(property));
                        }}
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-brand-ink backdrop-blur-sm transition hover:bg-white"
                      >
                        <Heart className={cn("h-4 w-4", saved && "fill-brand-teal text-brand-teal")} strokeWidth={saved ? 0 : 2} />
                      </button>

                      {/* Price badge */}
                      <div className="absolute bottom-3 right-3 rounded-[10px] bg-[#024139] px-4 py-2">
                        <span className="font-ewangi text-[15px] font-bold text-white">
                          {t("priceFrom", { amount: Math.round(property.priceUSD / 1000) })}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2.5 px-5 pb-5 pt-4">
                      <p className="font-ewangi text-[17px] font-bold text-brand-pine">{property.title}</p>
                      <p className="font-ewangi text-[13px] text-brand-ink/50">{property.type}</p>
                      <span className="rounded-full bg-brand-teal/15 px-3 py-1 font-ewangi text-[11px] font-semibold text-brand-pine">
                        {property.region}
                      </span>

                      <Link
                        href={property.href}
                        className="mt-1 flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#024139] py-2.5 font-ewangi text-[13px] font-semibold text-white transition hover:bg-black"
                      >
                        {t("viewDevelopment")} <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                      </Link>
                    </div>
                  </article>
                </RevealOnScroll>
                );
              })}
            </div>
          ) : (
            <p className="py-10 text-center font-ewangi text-brand-ink/40">{t("noListings", { city })}</p>
          )}

          {cityProperties.length > 1 && (
            <div className="mt-6 flex justify-center gap-3">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                aria-label={t("scrollLeft")}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-pine shadow-subtle transition hover:bg-brand-teal/20"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                aria-label={t("scrollRight")}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-pine shadow-subtle transition hover:bg-brand-teal/20"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

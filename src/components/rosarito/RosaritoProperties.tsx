"use client";
// "Properties in Rosarito" grid — Figma: "Section / Properties by City Carousel" (nodes 1313:18301-18488).
// Figma repeats one placeholder card 9x; shown here are the real certified Rosarito listings instead.
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bath, Bed, Heart, Maximize2 } from "lucide-react";
import { RevealOnScroll } from "@/components/ui";
import { properties, toSavedProperty } from "@/app/properties/data";
import { useSavedProperties } from "@/hooks/useSavedProperties";
import { cn } from "@/lib/utils";

const rosaritoProperties = properties.filter((p) => p.region === "Rosarito");

export function RosaritoProperties() {
  const { isSaved, toggleSaved } = useSavedProperties();

  return (
    <section className="w-full bg-[#f4f8f6] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
        <RevealOnScroll direction="up" className="flex flex-col items-center gap-3 text-center">
          <p className="font-ewangi text-[11px] font-bold uppercase tracking-[0.14em] text-brand-teal">
            Browse properties and developments in Rosarito
          </p>
          <span className="rounded-full bg-brand-emerald px-7 py-2.5 font-ewangi text-[1.1rem] font-semibold text-brand-paper shadow-subtle">
            Properties in Rosarito
          </span>
          <p className="font-ewangi text-[14px] text-brand-ink/60">
            <span className="font-bold text-brand-pine">{rosaritoProperties.length}</span> certified developments
            in Rosarito
          </p>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rosaritoProperties.map((property, i) => {
            const saved = isSaved(`catalog-${property.id}`);
            return (
            <RevealOnScroll key={property.id} delay={i * 100} direction="up">
              <article className="overflow-hidden rounded-[24px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)]">
                <div className="relative h-75 w-full overflow-hidden">
                  <Image src={property.image} alt={property.title} fill sizes="(max-width: 1024px) 100vw, 380px" className="object-cover" />

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

                  <button
                    type="button"
                    aria-label={saved ? `Remove ${property.title} from saved` : `Save ${property.title}`}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSaved(toSavedProperty(property));
                    }}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-brand-ink backdrop-blur-sm transition hover:bg-white"
                  >
                    <Heart className={cn("h-4 w-4", saved && "fill-brand-teal text-brand-teal")} strokeWidth={saved ? 0 : 2} />
                  </button>

                  <div className="absolute bottom-3 right-3 rounded-[10px] bg-[#024139] px-4 py-2">
                    <span className="font-ewangi text-[15px] font-bold text-white">
                      From ${Math.round(property.priceUSD / 1000)}K
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2.5 px-5 pb-5 pt-4">
                  <p className="font-ewangi text-[17px] font-bold text-brand-pine">{property.title}</p>
                  <p className="font-ewangi text-[13px] text-brand-ink/50">{property.type}</p>
                  <span className="rounded-full bg-brand-teal/15 px-3 py-1 font-ewangi text-[11px] font-semibold text-brand-pine">
                    {property.zone}
                  </span>

                  <Link
                    href={property.href}
                    className="mt-1 flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#024139] py-2.5 font-ewangi text-[13px] font-semibold text-white transition hover:bg-black"
                  >
                    View Development <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                  </Link>
                </div>
              </article>
            </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

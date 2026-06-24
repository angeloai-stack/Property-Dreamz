"use client";
// Torre 51 Negativo page — oceanfront pre-sale condos, amenity viewer (Pool/Spa/Gym), model floor plans, and YouTube CTA.
import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";
const IMG_HERO     = `${CLD}/torre51/hero`;
const IMG_LOGO     = `${CLD}/torre51/logo`;
const IMG_INTERIOR = `${CLD}/torre51/interior`;
const IMG_MODEL    = `${CLD}/torre51/model-floor-plan`;
const IMG_CMRE     = `${CLD}/CMRE_Logo-04_yjsknz.png`;

const stats = [
  { value: "90",   label: "Condos" },
  { value: "9",    label: "Amenities" },
  { value: "3",    label: "Pools" },
  { value: "100%", label: "Verified" },
];

const trustBadges = [
  "Legal reviewed",
  "Regulatory compliance",
  "Infrastructure validated",
];

type AmenityTab = "Pool" | "Spa" | "Gym";

const amenities: Record<AmenityTab, { description: string; sub: string }> = {
  Pool: {
    description:
      "Three pools including an oceanfront infinity pool, adult pool and children's pool — on a 16-meter cliff with 134 m of beach frontage and elevator to the beach.",
    sub: "Oceanfront infinity pool with direct Pacific views.",
  },
  Spa: {
    description:
      "A full-service spa with ocean views, designed for relaxation and rejuvenation after a day at the beach.",
    sub: "World-class spa treatments in a serene oceanfront setting.",
  },
  Gym: {
    description:
      "A fully equipped fitness center with panoramic Pacific views, open 24 hours exclusively for residents.",
    sub: "State-of-the-art equipment with oceanfront views.",
  },
};

export default function Torre51Page() {
  const [activeTab, setActiveTab] = useState<AmenityTab>("Pool");

  return (
    <div className="bg-[#171717] text-white">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-205 overflow-hidden bg-brand-ink">
        <Image
          src={IMG_HERO}
          alt="Torre 51 Negativo oceanfront development"
          fill
          priority
          className="object-cover object-top animate-[ken-burns_14s_ease-in-out_infinite_alternate]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(23,23,23,0.15) 3%, #171717 100%)" }}
        />

        <div className="relative z-10 flex min-h-205 flex-col px-6 pt-8 pb-10 lg:px-20 lg:pt-12 lg:pb-14">

          {/* Title + description + badges — upper area */}
          <div className="flex flex-col gap-7 lg:max-w-[56%]">
            <h1 className="font-ewangi text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] text-white animate-[fade-left_0.9s_ease-out_both]">
              Wake up every morning<br />to the sound of the waves
            </h1>
            <RevealOnScroll direction="up" delay={200}>
            <p className="font-ewangi text-[1.1rem] leading-relaxed text-white/80">
              A project inspired by luxury and the beach, creating a unique oceanfront atmosphere in Rosarito. Pre-sale from $396K USD.
            </p>
            </RevealOnScroll>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {trustBadges.map((b, i) => (
                <div key={b} className="flex flex-col items-center gap-1.5 animate-[fade-up_0.8s_ease-out_both]" style={{ animationDelay: `${250 + i * 150}ms` }}>
                  <CheckCircle2 className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                  <span className="text-center font-ewangi text-[14px] leading-tight text-white">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row: stats left + logo/CMRE right */}
          <div className="mt-auto flex items-end justify-between gap-8">

            <div className="flex flex-wrap gap-x-10 gap-y-3 sm:gap-x-14">
              {stats.map((s, i) => (
                <div key={s.label} className="flex flex-col gap-1 animate-[fade-up_0.7s_ease-out_both]" style={{ animationDelay: `${i * 100}ms` }}>
                  <span className="font-ewangi text-[2.25rem] leading-none text-white">{s.value}</span>
                  <span className="font-ewangi text-[1.1rem] text-white/80">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Logo + CMRE — bottom right */}
            <RevealOnScroll direction="right" delay={150}>
            <div className="hidden shrink-0 flex-col items-end gap-3 lg:flex">
              <Image
                src={IMG_LOGO}
                alt="Torre 51 Negativo"
                width={170}
                height={51}
                className="w-44 brightness-0 invert"
              />
              <Image
                src={IMG_CMRE}
                alt="CMRE Certified"
                width={135}
                height={32}
                className="w-36"
              />
            </div>
            </RevealOnScroll>

          </div>

        </div>
      </section>

      {/* ── INTERIOR EXPLORER ─────────────────────────────────────────── */}
      <section className="bg-[#171717] px-8 py-16 lg:px-20 lg:py-20">

        <RevealOnScroll direction="center">
        <div className="mb-10 flex items-center gap-6">
          <div className="hidden h-px flex-1 bg-white/30 lg:block" />
          <h2 className="text-center font-ewangi text-[clamp(1.25rem,2.5vw,2.25rem)] text-white">
            Exclusivity and comfort in every corner, by the sea
          </h2>
          <div className="hidden h-px flex-1 bg-white/30 lg:block" />
        </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" duration={1100}>
        <div
          className="relative mx-auto overflow-hidden rounded-[60px]"
          style={{ maxWidth: "1283px", minHeight: "524px" }}
        >
          <Image
            src={IMG_INTERIOR}
            alt="Torre 51 interior living area"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 rounded-[60px]"
            style={{ background: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(30,30,30,0.62) 100%)" }}
          />

          {/* Right panel */}
          <div className="absolute inset-0 flex flex-col justify-center p-8 lg:left-[56.66%] lg:p-10">
            <div className="rounded-[20px] bg-white/10 p-6 backdrop-blur-sm">
              <p className="font-ewangi text-[1.1rem] leading-relaxed text-white lg:text-[1.375rem]">
                {amenities[activeTab].description}
              </p>
              <p className="mt-4 font-ewangi text-[1rem] text-white/80">
                {amenities[activeTab].sub}
              </p>
              <div className="mt-6 flex flex-col items-start gap-1.5">
                {(["Pool", "Spa", "Gym"] as AmenityTab[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTab(t)}
                    style={{ width: "152px", height: "36px", borderRadius: "5px" }}
                    className={cn(
                      "font-ewangi text-[1.1rem] text-center transition",
                      t === activeTab
                        ? "bg-[#1e1e1e] text-brand-teal"
                        : "border border-white/40 bg-white text-brand-ink hover:bg-white/90"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        </RevealOnScroll>
      </section>

      {/* ── MODELS ────────────────────────────────────────────────────── */}
      <section className="rounded-tl-[24px] rounded-tr-[24px] bg-[#d9d9d9] px-8 pt-8 pb-16 lg:px-20">

        <RevealOnScroll direction="left">
        <div className="mb-8 flex items-center gap-4">
          <p className="font-ewangi text-[1.875rem] text-brand-ink">Explore our 5 models</p>
          <button
            style={{ width: "43px", height: "43px", borderRadius: "13px" }}
            className="flex items-center justify-center border-[3px] border-brand-ink transition hover:bg-brand-ink/10"
          >
            <ChevronLeft className="h-5 w-5 text-brand-ink" strokeWidth={2.5} />
          </button>
          <button
            style={{ width: "43px", height: "43px", borderRadius: "13px" }}
            className="flex items-center justify-center border-[3px] border-brand-ink transition hover:bg-brand-ink/10"
          >
            <ChevronRight className="h-5 w-5 text-brand-ink" strokeWidth={2.5} />
          </button>
        </div>
        </RevealOnScroll>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">

          <RevealOnScroll direction="left" delay={100} duration={1100}>
          <div className="flex flex-col gap-3 lg:w-[37%]">
            <h2 className="font-ewangi text-[clamp(3rem,5vw,3.25rem)] leading-none text-brand-ink">
              Vista
            </h2>
            <p className="font-ewangi text-[2.5rem] leading-none text-[#00c9a7]">136.08 m²</p>
            <div className="mt-2 space-y-1">
              <p className="font-ewangi text-[1.25rem] text-brand-ink">2  Bedrooms</p>
              <p className="font-ewangi text-[1.25rem] text-brand-ink">2 Bathrooms</p>
              <p className="font-ewangi text-[1.25rem] text-brand-ink">136.08 m²</p>
            </div>
          </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={100} duration={1100}>
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-[15px]" style={{ aspectRatio: "1034/730" }}>
              <Image
                src={IMG_MODEL}
                alt="Vista model interior render"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 60vw"
              />
            </div>
          </div>
          </RevealOnScroll>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="h-2 w-6 rounded-full bg-brand-teal" />
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-2 w-2 rounded-full bg-[#b3b3b3]" />
          ))}
        </div>

      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-8 py-16 lg:px-20 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">

          <RevealOnScroll direction="left" duration={1100}>
          <div className="lg:w-[39%]">
            <div className="overflow-hidden rounded-[26px]" style={{ aspectRatio: "560/315" }}>
              <iframe
                src="https://www.youtube.com/embed/ewrYgcNHV8Q?si=zVZA55AsGvDzGrQh"
                title="Torre 51 Negativo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={1100}>
          <div className="flex flex-col items-start gap-6 lg:flex-1 lg:items-end lg:text-right">
            <h2 className="font-ewangi text-[clamp(2rem,3.5vw,2.5rem)] leading-tight text-white">
              Reserve your oceanfront<br />paradise from $5,000 USD
            </h2>
            <p className="font-ewangi text-[1.25rem] leading-relaxed text-white/65 lg:max-w-130">
              Two towers, 90 luxury condos on a privileged stretch of the Rosarito coast. The developer&apos;s experience is your guarantee; your property value is guaranteed.
            </p>
            <button className="rounded-[10px] bg-brand-teal px-10 py-5 font-ewangi text-[2.1875rem] text-brand-ink transition hover:bg-brand-teal/90">
              Schedule your appointment
            </button>
          </div>
          </RevealOnScroll>

        </div>
      </section>

    </div>
  );
}

"use client";
// NAOS beachfront condos page — interior room explorer, floor plan carousel, and CTA section on a light background.
import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";
const IMG_HERO     = `${CLD}/naos/hero`;
const IMG_LOGO     = `${CLD}/naos/logo`;
const IMG_INTERIOR = `${CLD}/naos/interior`;
const IMG_FLOOR    = `${CLD}/naos/floor-plan`;
const IMG_CTA      = `${CLD}/naos/cta`;
const IMG_CMRE     = `${CLD}/CMRE_Logo-04_yjsknz.png`;

const stats = [
  { value: "16",   label: "Condos" },
  { value: "4",    label: "Models" },
  { value: "82%",  label: "Available" },
  { value: "100%", label: "Verified" },
];

const trustBadges = [
  "Legal reviewed",
  "Regulatory compliance",
  "Infrastructure validated",
];

type RoomTab = "Living room" | "Bedroom" | "Bathroom" | "Kitchen" | "Terrace";

const rooms: Record<RoomTab, { description: string; sub: string }> = {
  "Living room": {
    description:
      "Experience a collection of interiors crafted for elevated living. From open-concept layouts to stunning finishes, every space is designed to inspire.",
    sub: "Floor-to-ceiling windows, refined finishes, and seamless comfort designed for modern living.",
  },
  Bedroom: {
    description:
      "Spacious bedrooms designed as personal sanctuaries with panoramic ocean views and premium finishes that redefine restful living.",
    sub: "Custom cabinetry, premium flooring, and thoughtful lighting for ultimate comfort.",
  },
  Bathroom: {
    description:
      "Resort-style bathrooms featuring designer fixtures, natural stone finishes, and spa-inspired layouts for your daily ritual.",
    sub: "Rainfall showers, soaking tubs, and heated floors in a serene oceanfront setting.",
  },
  Kitchen: {
    description:
      "Gourmet kitchens equipped with integrated appliances, bespoke cabinetry, and premium countertops — the perfect space to create and entertain.",
    sub: "High-end appliances and custom millwork blended with contemporary design.",
  },
  Terrace: {
    description:
      "Private terraces with sweeping Pacific views — an extension of your living space where the inside flows seamlessly to the outdoors.",
    sub: "Expansive outdoor areas with unobstructed ocean and coastline panoramas.",
  },
};

const modelFeatures = [
  "3  balconies",
  "Living room with balcony",
  "Dining room",
  "Breakfast bar",
  "Kitchen (Integral)",
  "2  Bedrooms",
  "2 Bathrooms",
  "Patio with laundry room",
  "1 covered parking space",
];

export default function NaosPage() {
  const [activeRoom, setActiveRoom] = useState<RoomTab>("Living room");

  return (
    <div className="overflow-x-hidden bg-[#171717] text-white">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-205 overflow-hidden bg-brand-ink">
        <Image
          src={IMG_HERO}
          alt="NAOS beachfront development"
          fill
          priority
          className="object-cover object-center animate-[ken-burns_14s_ease-in-out_infinite_alternate]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(23,23,23,0.15) 3%, #171717 100%)" }}
        />

        <div className="relative z-10 flex min-h-205 flex-col px-6 pt-8 pb-10 lg:px-20 lg:pt-12 lg:pb-14">

          {/* Title + description + badges */}
          <div className="flex flex-col gap-7 lg:max-w-[56%]">
            <h1
              className="font-ewangi text-[clamp(2.5rem,6.5vw,6rem)] leading-none text-white animate-[fade-left_0.9s_ease-out_both]"
              style={{ textShadow: "10px 4px 11px rgba(0,0,0,0.61)" }}
            >
              NAOS is more than<br />a place to live
            </h1>
            <RevealOnScroll direction="up" delay={200}>
              <p
                className="font-ewangi text-[1.1rem] leading-relaxed text-white/80"
                style={{ textShadow: "12px 4px 9px rgba(0,0,0,0.58)" }}
              >
                A design-forward beachfront community shaped by Baja&apos;s coastline. A space to pause, feel and reconnect with what&apos;s essential.
              </p>
            </RevealOnScroll>
            {/* Trust badges — staggered */}
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {trustBadges.map((b, i) => (
                <div
                  key={b}
                  className="flex flex-col items-center gap-1.5 animate-[fade-up_0.8s_ease-out_both]"
                  style={{ animationDelay: `${420 + i * 150}ms` }}
                >
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
                <div
                  key={s.label}
                  className="flex flex-col gap-1 animate-[fade-up_0.7s_ease-out_both]"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
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
                alt="NAOS"
                width={132}
                height={58}
                className="w-36 brightness-0 invert"
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
            Unrivaled coastal living with resort-inspired amenities
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
            alt="NAOS interior living area"
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
                {rooms[activeRoom].description}
              </p>
              <p className="mt-4 font-ewangi text-[1rem] text-white/80">
                {rooms[activeRoom].sub}
              </p>
              <div className="mt-6 flex flex-col items-start gap-1.5">
                {(["Living room", "Bedroom", "Bathroom", "Kitchen", "Terrace"] as RoomTab[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveRoom(t)}
                    style={{ width: "152px", height: "36px", borderRadius: "5px" }}
                    className={cn(
                      "font-ewangi text-[1rem] text-center transition",
                      t === activeRoom
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

      {/* ── MODELS + CTA (light bg) ────────────────────────────────────── */}
      <section className="rounded-tl-[50px] rounded-tr-[50px] bg-[#d9d9d9] px-8 pt-16 pb-20 lg:px-20">

        {/* Models */}
        <div className="mb-16">
          <RevealOnScroll direction="left">
          <div className="mb-8 flex items-center gap-4">
            <p className="font-ewangi text-[1.875rem] text-brand-ink">Explore our 4 models</p>
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

          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
            <RevealOnScroll direction="left" delay={100} duration={1100}>
            <div className="lg:w-[42%]">
              <h2 className="font-ewangi text-[clamp(2rem,3.5vw,3.25rem)] leading-tight text-brand-ink">
                Layout A —{" "}
                <span className="text-brand-teal">1,287 sq. ft.</span>
              </h2>
              <ul className="mt-6 space-y-1.5">
                {modelFeatures.map((f) => (
                  <li key={f} className="font-ewangi text-[1.25rem] text-brand-ink">{f}</li>
                ))}
              </ul>
            </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={100} duration={1100} className="flex-1">
            <div className="flex-1">
              <div className="relative overflow-hidden rounded-[15px]" style={{ aspectRatio: "4096/2845" }}>
                <Image
                  src={IMG_FLOOR}
                  alt="Layout A floor plan"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 58vw"
                />
              </div>
            </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
          <RevealOnScroll direction="left" duration={1100}>
          <div className="lg:w-[46%]">
            <div className="relative overflow-hidden rounded-[26px]" style={{ aspectRatio: "663/370" }}>
              <Image
                src={IMG_CTA}
                alt="NAOS building exterior"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 46vw"
              />
            </div>
          </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={1100} className="lg:flex-1">
          <div className="flex flex-col gap-6 lg:flex-1 lg:items-end lg:text-right">
            <h2 className="font-ewangi text-[clamp(2.5rem,4vw,3.75rem)] leading-tight text-brand-ink">
              A Limited Collection.<br />An Extraordinary Lifestyle.
            </h2>
            <p className="font-ewangi text-[1.375rem] leading-relaxed text-brand-ink/80 lg:max-w-130">
              Designed for those who seek more than just a residence, these 16 exclusive condominiums offer refined living spaces, breathtaking views, and a sense of community unlike any other.
            </p>
            <button className="mt-2 rounded-[10px] bg-brand-teal px-10 py-5 font-ewangi text-[2.1875rem] text-brand-ink transition hover:bg-brand-teal/90">
              Talk to an expert
            </button>
          </div>
          </RevealOnScroll>
        </div>

      </section>

    </div>
  );
}

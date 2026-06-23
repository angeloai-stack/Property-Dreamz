"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";
const IMG_LOGO      = `${CLD}/palacio-del-mar/logo`;
const IMG_AMENITIES = `${CLD}/palacio-del-mar/amenities`;
const IMG_FLOOR     = `${CLD}/palacio-del-mar/floor-plan`;
const IMG_EXTERIOR  = `${CLD}/palacio-del-mar/exterior`;
const IMG_CMRE      = `${CLD}/CMRE_Logo-04_yjsknz.png`;

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

const amenityRooms = ["Living room", "Bedroom", "Bathroom", "Kitchen", "Terrace"];

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

export default function PalacioDelMarPage() {
  const [activeRoom, setActiveRoom] = useState("Living room");

  return (
    <div className="bg-[#171717] text-white">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-205 overflow-hidden bg-brand-ink">
        <video
          src="https://palaciodelmar.com/wp-content/uploads/2025/06/palacio-del-mar-home-page-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #171717 30%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #171717 5%, transparent 50%)" }}
        />

        <div className="relative z-10 flex min-h-205 flex-col px-6 pt-8 pb-10 lg:px-20 lg:pt-10 lg:pb-12">

          <RevealOnScroll direction="up" className="mb-auto">
            <div className="flex flex-wrap gap-x-10 gap-y-3">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-ewangi text-xl leading-none text-white sm:text-3xl lg:text-[2.25rem]">{s.value}</span>
                  <span className="font-ewangi text-xs text-white/80 sm:text-base lg:text-[1.25rem]">{s.label}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <div className="mt-auto flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <RevealOnScroll direction="left">
              <div className="flex flex-col gap-6">
                <Image
                  src={IMG_LOGO}
                  alt="Palacio del Mar"
                  width={269}
                  height={130}
                  className="w-48 lg:w-64"
                />
                <Image
                  src={IMG_CMRE}
                  alt="CMRE Certified"
                  width={204}
                  height={48}
                  className="w-44"
                />
              </div>
            </RevealOnScroll>

            <div className="flex flex-col items-start gap-6 lg:items-end">
              <RevealOnScroll direction="up" delay={100}>
                <div className="flex flex-wrap gap-6 lg:justify-end">
                  {trustBadges.map((b) => (
                    <div key={b} className="flex flex-col items-center gap-1.5">
                      <CheckCircle2 className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                      <span className="text-center font-ewangi text-[14px] leading-tight text-white">{b}</span>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>

              <div className="lg:text-right">
                <h1 className="font-ewangi text-[clamp(2.5rem,6vw,6rem)] leading-[0.92] text-white animate-[fade-right_0.9s_ease-out_0.15s_both]">
                  Luxury condos,<br />luxury villas
                </h1>
                <RevealOnScroll direction="up" delay={350}>
                  <p className="mt-4 font-ewangi text-[1.1rem] text-white/80 lg:max-w-140">
                    The premiere oceanfront community in Baja — finished, move-in-ready luxury condos and oceanfront villas in Rosarito, just south of the San Diego border.
                  </p>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AMENITIES ─────────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-8 py-16 lg:px-20 lg:py-20">
        <RevealOnScroll direction="center">
          <h2 className="mb-10 text-center font-ewangi text-[clamp(1.5rem,3vw,2.25rem)] text-white">
            Resort-style amenities designed for everyday living
          </h2>
        </RevealOnScroll>

        <RevealOnScroll direction="up" duration={1000}>
          <div className="relative min-h-80 overflow-hidden rounded-[30px] lg:min-h-130">
          <Image
            src={IMG_AMENITIES}
            alt="Palacio del Mar amenities"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />

          {/* Description — left (desktop) */}
          <div className="absolute inset-0 hidden flex-col justify-center p-12 lg:flex lg:w-[58%]">
            <p className="max-w-[520px] font-ewangi text-[1.25rem] leading-relaxed text-white">
              Amenities Define Luxury Real Estate. It is the Amenities at Palacio del Mar that define what luxury real estate is in Baja compared to real estate developments in general.
            </p>
            <p className="mt-4 max-w-[520px] font-ewangi text-[1rem] text-white/80">
              Palacio del Mar is the only community on the coast that has a large indoor heated pool.
            </p>
          </div>

          {/* Room tabs — right */}
          <div
            className="absolute inset-y-0 right-0 flex w-full flex-col justify-center gap-2 p-8 lg:w-[38%] lg:p-10"
            style={{ background: "linear-gradient(to left, rgba(23,23,23,0.92) 55%, transparent 100%)" }}
          >
            {amenityRooms.map((room) => (
              <button
                key={room}
                onClick={() => setActiveRoom(room)}
                className={cn(
                  "rounded-[5px] px-5 py-3 text-left font-ewangi text-[1.1rem] transition",
                  activeRoom === room
                    ? "bg-brand-teal text-brand-ink"
                    : "bg-[#1e1e1e] text-white hover:bg-white/10"
                )}
              >
                {room}
              </button>
            ))}
          </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── MODELS + FINISHED RESIDENCES (light bg) ───────────────────── */}
      <section className="rounded-tl-[50px] rounded-tr-[50px] bg-[#d9d9d9] px-8 pt-16 pb-20 lg:px-20">

        {/* Models */}
        <div className="mb-16">
          <RevealOnScroll direction="left">
            <div className="mb-8 flex items-center gap-4">
              <p className="font-ewangi text-[1.25rem] text-brand-ink">Explore our 4 models</p>
              <button className="flex h-10 w-10 items-center justify-center rounded-[13px] border-2 border-brand-ink transition hover:bg-brand-ink/10">
                <ChevronLeft className="h-5 w-5 text-brand-ink" strokeWidth={2.5} />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-[13px] border-2 border-brand-ink transition hover:bg-brand-ink/10">
                <ChevronRight className="h-5 w-5 text-brand-ink" strokeWidth={2.5} />
              </button>
            </div>
          </RevealOnScroll>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
            <RevealOnScroll direction="left" delay={100}>
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

            <RevealOnScroll direction="right" delay={100}>
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

        {/* Finished residences */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
          <RevealOnScroll direction="left">
            <div className="lg:w-[46%]">
              <div className="relative aspect-video overflow-hidden rounded-[26px]">
                <Image
                  src={IMG_EXTERIOR}
                  alt="Palacio del Mar building exterior"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 46vw"
                />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150}>
            <div className="flex flex-col gap-6 lg:flex-1 lg:items-end lg:text-right">
              <h2 className="font-ewangi text-[clamp(2.5rem,4vw,3.75rem)] leading-tight text-brand-ink">
                Finished residences,<br />ready to move in
              </h2>
              <p className="font-ewangi text-[1.375rem] leading-relaxed text-brand-ink/80 lg:max-w-130">
                An established oceanfront community in Rosarito&apos;s Bahía Descanso. Tower II represents the final inventory of luxury condos currently available — fully built and move-in ready.
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

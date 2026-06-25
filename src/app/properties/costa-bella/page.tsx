"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";
const IMG_HERO      = `${CLD}/costa-bella/hero`;
const IMG_LOGO      = `${CLD}/costa-bella/logo`;
const IMG_AMENITIES = `${CLD}/costa-bella/amenities`;
const IMG_CTA       = `${CLD}/costa-bella/cta`;
const IMG_CMRE      = `${CLD}/CMRE_Logo-04_yjsknz.png`;

type ModelId = "A" | "B" | "C" | "D";

const MODELS_IMG: Record<ModelId, string> = {
  A: `${CLD}/costa-bella/model-a`,
  B: `${CLD}/costa-bella/model-b`,
  C: `${CLD}/costa-bella/model-c`,
  D: `${CLD}/costa-bella/model-d`,
};

const stats = [
  { value: "16",   label: "Condos" },
  { value: "4",    label: "Models" },
  { value: "70%",  label: "Available" },
  { value: "100%", label: "Verified" },
];

const trustBadges = ["Title reviewed", "Regulatory compliance", "Infrastructure validated"];

type AmenityTab = "Pool" | "Terrace" | "Gym" | "Kitchen" | "Bedroom";

const amenities: Record<AmenityTab, { title: string; description: string }> = {
  Pool:    {
    title: "Rooftop pool with panoramic Pacific views.",
    description: "Resort-style rooftop pool with sun deck and lounging areas, overlooking the Pacific Ocean. The perfect setting to unwind just steps from the beach in Rosarito.",
  },
  Terrace: {
    title: "Private terraces with breathtaking ocean views.",
    description: "Expansive terraces designed for outdoor living — enjoy sunrises over the Pacific and Rosarito's coastline from the comfort of your own home.",
  },
  Gym:     {
    title: "Fully equipped fitness center.",
    description: "State-of-the-art gym with premium equipment, natural light, and sweeping views of the Pacific. Stay active without leaving the comfort of your building.",
  },
  Kitchen: {
    title: "Designer kitchens with premium finishes.",
    description: "Integral kitchens with marble countertops, high-end appliances, and clean modern lines — designed to inspire every meal with a Pacific backdrop.",
  },
  Bedroom: {
    title: "Spacious bedrooms with walk-in closets.",
    description: "Thoughtfully designed bedrooms with direct terrace access, walk-in closets, and premium finishes that bring coastal elegance to every corner of your home.",
  },
};

interface UnitModel { id: ModelId; area: string; features: string[] }

const models: UnitModel[] = [
  {
    id: "A",
    area: "2,152.78 ft²",
    features: [
      "Kitchen, living, and dining area",
      "Primary bedroom with full bathroom and walk-in closet",
      "Secondary bedroom with closet and shared full bathroom",
      "Open-concept multipurpose room",
      "Laundry room",
      "Ocean-view terrace 40 m²",
    ],
  },
  {
    id: "B",
    area: "2,152.78 ft²",
    features: [
      "Kitchen, living, and dining area",
      "Primary bedroom with full bathroom and walk-in closet",
      "Secondary bedroom with shared full bathroom",
      "Open-concept multipurpose room",
      "Laundry room",
      "Ocean-view terrace 40 m²",
      "Bar cabinet / wine cellar",
      "Appliances included",
    ],
  },
  {
    id: "C",
    area: "2,152.78 ft²",
    features: [
      "Living and dining area",
      "Primary bedroom",
      "Kitchen with pantry",
      "Walk-in closet",
      "Terraces",
      "Primary bathroom",
      "Laundry area and storage",
      "Half bathroom",
      "Bedroom 1 with full bathroom",
      "Bedroom 2 with full bathroom",
      "Staircase to rooftop",
    ],
  },
  {
    id: "D",
    area: "4,305.56 ft²",
    features: [
      "Living and dining area",
      "Staircase to rooftop",
      "Kitchen with pantry",
      "Primary bedroom",
      "Terraces",
      "Walk-in closet",
      "Laundry area and storage",
      "Primary bathroom",
      "Half bathroom",
      "Bedroom 1 with full bathroom",
      "Bedroom 2 with full bathroom",
    ],
  },
];

export default function CostaBellaPage() {
  const [activeTab, setActiveTab] = useState<AmenityTab>("Pool");
  const [modelIndex, setModelIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const currentModel   = models[modelIndex];
  const currentAmenity = amenities[activeTab];

  return (
    <div className="bg-[#171717] text-white">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-205 overflow-hidden bg-[#171717]">
        <Image
          src={IMG_HERO}
          alt="Costa Bella luxury condominiums exterior"
          fill
          priority
          className="object-cover animate-[ken-burns_14s_ease-in-out_infinite_alternate]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(23,23,23,0.15) 3%, #171717 100%)" }}
        />

        <div className="relative z-10 flex min-h-205 flex-col px-6 pt-10 pb-12 lg:px-20">

          {/* Left content */}
          <div className="mt-auto max-w-[800px] flex flex-col gap-6">
            <h1 className="font-ewangi text-[clamp(3rem,7vw,6rem)] leading-[0.92] text-white [text-shadow:10px_4px_11.2px_rgba(0,0,0,0.61)] animate-[fade-left_0.9s_ease-out_both]">
              Beachside living.<br />Steps from the Pacific.
            </h1>
            <RevealOnScroll direction="up" delay={150}>
              <p className="font-ewangi text-[1.125rem] leading-relaxed text-white/80 [text-shadow:12px_4px_9.1px_rgba(0,0,0,0.58)]">
                A limited collection of only 16 luxury condominiums designed for those who seek coastal elegance.
              </p>
            </RevealOnScroll>
            <div className="flex flex-wrap gap-8 mt-2">
              {trustBadges.map((badge, i) => (
                <div
                  key={badge}
                  className="flex flex-col items-center gap-1.5 animate-[fade-up_0.8s_ease-out_both]"
                  style={{ animationDelay: `${420 + i * 150}ms` }}
                >
                  <CheckCircle2 className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                  <span className="font-ewangi text-[13px] leading-tight text-white text-center">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dev logo + CMRE — right side */}
          <div className="absolute right-6 bottom-44 lg:right-20 flex flex-col items-center gap-4">
            <Image
              src={IMG_LOGO}
              alt="Costa Bella"
              width={159}
              height={113}
              className="w-28 lg:w-36"
            />
            <Image
              src={IMG_CMRE}
              alt="CMRE Certified"
              width={135}
              height={32}
              className="w-28 lg:w-32"
            />
          </div>

          {/* Stats bar */}
          <RevealOnScroll direction="up" delay={200} className="mt-8 flex flex-wrap rounded-2xl bg-white/10 backdrop-blur-sm px-6 py-4 gap-4 lg:gap-0 max-w-lg">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-1 flex-col items-center min-w-[80px] animate-[fade-up_0.6s_ease-out_both]"
                style={{ animationDelay: `${300 + i * 80}ms` }}
              >
                <span className="font-ewangi text-[clamp(1.8rem,3vw,2.5rem)] leading-none text-white">{s.value}</span>
                <span className="font-ewangi text-sm text-white/70 mt-1">{s.label}</span>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* ── EXPLORE YOUR NEXT HOME ────────────────────────────────────────── */}
      <section className="bg-[#171717] px-6 py-16 lg:px-20 lg:py-20">

        <RevealOnScroll direction="center">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-white/30" />
            <h2 className="font-ewangi text-[clamp(1.75rem,3vw,2.25rem)] text-white whitespace-nowrap">
              Explore your next home
            </h2>
            <div className="h-px flex-1 bg-white/30" />
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" duration={1100}>
          <div className="mx-auto max-w-[1283px] relative rounded-[60px] overflow-hidden" style={{ height: "524px" }}>
            {/* Background */}
            <Image
              src={IMG_AMENITIES}
              alt={activeTab}
              fill
              className="object-cover"
              sizes="100vw"
            />
            {/* Gradient + frosted right panel */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(30,30,30,0.62) 57%)" }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 rounded-r-[60px]"
              style={{ width: "43.3%", background: "rgba(217,217,217,0.2)" }}
            />

            {/* Right panel */}
            <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-center px-10 lg:px-14" style={{ width: "43.3%" }}>
              <p className="font-ewangi text-[1.05rem] leading-relaxed text-white mb-2">
                {currentAmenity.description}
              </p>
              <p className="font-ewangi text-[0.875rem] text-brand-teal mb-7">
                {currentAmenity.title}
              </p>
              <div className="flex flex-col gap-2">
                {(Object.keys(amenities) as AmenityTab[]).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "rounded-[5px] px-4 py-2 text-right font-ewangi text-[1.3rem] font-bold transition w-[152px] self-end",
                      activeTab === tab
                        ? "bg-[#1e1e1e] text-brand-teal"
                        : "bg-white text-[#1e1e1e] hover:bg-brand-teal/20"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── MODELS ────────────────────────────────────────────────────────── */}
      <section className="bg-[#d9d9d9] rounded-tl-[50px] rounded-tr-[50px] px-8 py-10 lg:px-20 lg:py-12">
        <div className="mx-auto max-w-[1280px]">

          <RevealOnScroll direction="left">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-ewangi text-[1.875rem] text-[#1e1e1e]">Explore our 4 models</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setModelIndex((i) => Math.max(0, i - 1))}
                  disabled={modelIndex === 0}
                  className="flex h-[43px] w-[43px] items-center justify-center rounded-[13px] border-[3px] border-black transition disabled:opacity-30 hover:bg-black/10"
                >
                  <ChevronLeft className="h-5 w-5 text-black" />
                </button>
                <button
                  type="button"
                  onClick={() => setModelIndex((i) => Math.min(models.length - 1, i + 1))}
                  disabled={modelIndex === models.length - 1}
                  className="flex h-[43px] w-[43px] items-center justify-center rounded-[13px] border-[3px] border-black transition disabled:opacity-30 hover:bg-black/10"
                >
                  <ChevronRight className="h-5 w-5 text-black" />
                </button>
              </div>
            </div>
          </RevealOnScroll>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:min-h-[460px]">
            <RevealOnScroll direction="left" delay={100} duration={1100}>
              <div className="lg:w-[480px] flex flex-col gap-3">
                <h3 className="font-ewangi text-[clamp(2.5rem,5vw,3.25rem)] text-black leading-none">
                  Model {currentModel.id}
                </h3>
                <p className="font-ewangi text-[clamp(1.5rem,2.5vw,2.5rem)] text-brand-teal">
                  {currentModel.area}
                </p>
                <ul className="font-ewangi text-[1.05rem] text-black space-y-0.5 mt-2">
                  {currentModel.features.map((f) => (
                    <li key={f}>— {f}</li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={100} duration={1100}>
              <div className="flex-1 flex justify-center lg:justify-end">
                <div className="relative h-[460px] w-full max-w-[848px]">
                  <Image
                    key={currentModel.id}
                    src={MODELS_IMG[currentModel.id]}
                    alt={`Model ${currentModel.id} floor plan`}
                    fill
                    className="object-contain"
                    sizes="(max-width:1024px) 100vw, 55vw"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {models.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setModelIndex(i)}
                className={cn(
                  "rounded-[4px] h-2 transition-all",
                  i === modelIndex ? "w-6 bg-brand-teal" : "w-2 bg-[#b3b3b3]"
                )}
                aria-label={`Model ${m.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#d9d9d9] px-6 py-12 lg:px-20 lg:py-16">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

          <RevealOnScroll direction="left" duration={1100}>
            <div className="lg:w-[44%]">
              <div className="relative overflow-hidden rounded-[20px]" style={{ aspectRatio: "560/317" }}>
                <Image
                  src={IMG_CTA}
                  alt="Costa Bella — Rosarito beachfront"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 44vw"
                />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={1100}>
            <div className="flex flex-col gap-5 lg:flex-1 lg:text-right">
              <h2 className="font-ewangi text-[clamp(2rem,5vw,3.75rem)] leading-tight text-black">
                A Limited Collection.<br />An Exceptional Lifestyle.
              </h2>
              <p className="font-ewangi text-[1.125rem] leading-relaxed text-black/70">
                Designed for those who seek more than just a residence, these 16 exclusive condominiums offer refined coastal living, breathtaking Pacific views, and a private community unlike any other. Every home delivers comfort, elegance, and lasting value just steps from the beach. Contact us today to reserve your place in this exceptional development.
              </p>
              <div className="mt-2 flex lg:justify-end">
                <button
                  type="button"
                  className="rounded-[10px] bg-brand-teal px-10 py-5 font-ewangi text-[2.1875rem] text-brand-ink transition hover:bg-brand-teal/90"
                >
                  Talk to an expert
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
}

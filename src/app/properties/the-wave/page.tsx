"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui";
import { cn } from "@/lib/utils";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";
const IMG_HERO      = `${CLD}/the-wave/the-wave/hero`;
const IMG_LOGO      = `${CLD}/the-wave/the-wave/logo`;
const IMG_AMENITIES = `${CLD}/the-wave/the-wave/amenities`;
const IMG_CTA       = `${CLD}/the-wave/the-wave/hero`; // TODO: replace with dedicated cta image once uploaded
const IMG_CMRE      = `${CLD}/CMRE_Logo-04_yjsknz.png`;

const stats = [
  { value: "40",   label: "Units" },
  { value: "4",    label: "Models" },
  { value: "65%",  label: "Available" },
  { value: "100%", label: "Verified" },
];

const trustBadges = ["Title reviewed", "Regulatory compliance", "Infrastructure validated"];

type AmenityTab = "Pool" | "Rooftop" | "Gym" | "Kitchen" | "Terrace";

const amenities: Record<AmenityTab, { title: string; description: string }> = {
  Pool: {
    title: "Infinity pool with direct Pacific Ocean views.",
    description: "Infinity-edge pool overlooking the Pacific Ocean, with sun loungers, swim-up bar, and a dedicated relaxation deck. The centerpiece of resort-style living at The Wavve Baja.",
  },
  Rooftop: {
    title: "Panoramic rooftop lounge with 360° views.",
    description: "An exclusive rooftop terrace offering unobstructed views of the Pacific and the Rosarito coastline — perfect for sunsets, social gatherings, and private events.",
  },
  Gym: {
    title: "State-of-the-art fitness center.",
    description: "Fully equipped fitness studio with premium machines, free weights, and a dedicated yoga and stretching zone — all with natural light and ocean-facing windows.",
  },
  Kitchen: {
    title: "Premium kitchens with European finishes.",
    description: "Open-concept kitchens featuring European cabinetry, quartz countertops, stainless steel appliances, and a breakfast bar designed for both everyday living and entertaining.",
  },
  Terrace: {
    title: "Private ocean-view terraces in every unit.",
    description: "Every residence features a private terrace with sweeping Pacific Ocean views — ideal for morning coffee, evening dining, or simply breathing in the coastal air.",
  },
};

const models = [
  {
    name: "The Studio",
    area: "543 sq. ft.",
    features: [
      "Open-concept living & kitchen",
      "Full bathroom",
      "Ocean-view terrace",
      "Laundry hookup",
      "1 Parking space",
      "Floor-to-ceiling windows",
      "Premium kitchen finishes",
    ],
  },
  {
    name: "The Coastal",
    area: "756 sq. ft.",
    features: [
      "1 Bedroom",
      "1 Bathroom",
      "Open kitchen & dining area",
      "Ocean-view terrace",
      "Laundry hookup",
      "1 Parking space",
      "Floor-to-ceiling windows",
    ],
  },
  {
    name: "The Pacific",
    area: "1,087 sq. ft.",
    features: [
      "2 Bedrooms",
      "2 Bathrooms",
      "Open kitchen & living room",
      "Panoramic ocean terrace",
      "Laundry room",
      "1 Parking space",
      "Premium finishes throughout",
    ],
  },
  {
    name: "The Penthouse",
    area: "1,458 sq. ft.",
    features: [
      "3 Bedrooms",
      "3 Bathrooms",
      "Chef's kitchen",
      "Expansive living & dining room",
      "Two private ocean terraces",
      "Laundry room",
      "2 Parking spaces",
    ],
  },
];

export default function TheWavePage() {
  const [activeTab, setActiveTab] = useState<AmenityTab>("Pool");
  const [modelIndex, setModelIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const currentModel = models[modelIndex];
  const modelImg = `${CLD}/the-wave/the-wave/model-studio`;

  return (
    <div className="overflow-x-hidden bg-[#171717] text-white">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-205 overflow-hidden bg-[#171717]">
        {/* Background photo */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMG_HERO}
            alt="The Wave oceanfront residences, Rosarito Beach"
            className="absolute inset-0 h-full w-full object-cover object-center animate-[ken-burns_14s_ease-in-out_infinite_alternate]"
          />
        </div>

        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #171717 42%, rgba(23,23,23,0.50) 65%, transparent 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #171717 8%, transparent 50%)" }}
        />

        {/* Content */}
        <div className="relative z-10 flex min-h-205 flex-col px-6 pt-10 pb-12 lg:px-20">

          {/* Top row — dev logo + CMRE */}
          <div className="flex justify-start items-center gap-5 lg:justify-end">
            <RevealOnScroll direction="right">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_LOGO} alt="The Wave" className="h-10 w-auto object-contain" />
            </RevealOnScroll>
            <RevealOnScroll direction="right" delay={100}>
              <Image src={IMG_CMRE} alt="CMRE Certified" width={135} height={32} className="w-32" />
            </RevealOnScroll>
          </div>

          {/* Headline + description + badges */}
          <div className="mt-10 max-w-2xl lg:mt-auto">
            <h1 className="font-ewangi text-[clamp(3rem,6.5vw,5.5rem)] leading-[0.93] text-white animate-[fade-left_0.9s_ease-out_both]">
              Where the wave<br />meets luxury.
            </h1>
            <RevealOnScroll direction="up" delay={200}>
              <p className="mt-6 font-ewangi text-[1.125rem] leading-relaxed text-white/75 max-w-140">
                A curated collection of oceanfront residences in Rosarito Beach, designed for those who live on the edge of extraordinary.
              </p>
            </RevealOnScroll>

            <div className="mt-8 grid grid-cols-3 gap-x-6 gap-y-3">
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

          {/* Separator */}
          <div className="mt-8 h-px w-64 bg-white/40" />

          {/* Stats bar */}
          <RevealOnScroll direction="up" delay={200} className="mt-6 flex w-full max-w-lg rounded-2xl bg-white/10 backdrop-blur-sm px-6 py-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-1 flex-col items-center animate-[fade-up_0.6s_ease-out_both]"
                style={{ animationDelay: `${300 + i * 80}ms` }}
              >
                <span className="font-ewangi text-[clamp(2rem,3.5vw,3rem)] leading-none text-white">{s.value}</span>
                <span className="font-ewangi text-sm text-white/70 mt-1">{s.label}</span>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* ── STEP INSIDE THE WAVVE ─────────────────────────────────────────── */}
      <section className="bg-[#171717] px-6 py-16 lg:px-20 lg:py-20">
        <RevealOnScroll direction="center">
          <div className="flex items-center gap-6 mb-10">
            <div className="h-px flex-1 bg-white/30" />
            <h2 className="font-ewangi text-[clamp(1.5rem,2.5vw,2.25rem)] text-white whitespace-nowrap">Step inside The Wavve</h2>
            <div className="h-px flex-1 bg-white/30" />
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" duration={1100}>

          {/* ── Mobile ── */}
          <div className="lg:hidden">
            <div className="relative overflow-hidden rounded-3xl" style={{ height: 260 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_AMENITIES} alt={activeTab} className="absolute inset-0 h-full w-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 35%, transparent 100%)" }}
              />
              <p className="absolute bottom-4 left-5 right-5 font-ewangi text-[0.8rem] text-brand-teal leading-snug">
                {amenities[activeTab].title}
              </p>
            </div>
            <p className="mt-5 font-ewangi text-[0.95rem] leading-relaxed text-white/80">
              {amenities[activeTab].description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {(Object.keys(amenities) as AmenityTab[]).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "rounded-1.25 px-4 py-2 font-ewangi text-[0.95rem] transition",
                    activeTab === tab
                      ? "bg-[#1e1e1e] text-brand-teal border border-brand-teal/50"
                      : "bg-white/10 text-white hover:bg-white/20"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* ── Desktop ── */}
          <div className="hidden lg:block mx-auto max-w-320.75 relative rounded-15 overflow-hidden h-131">
            <div className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_AMENITIES} alt={activeTab} className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to left, rgba(30,30,30,0.90) 36%, transparent 60%)" }}
            />
            <div className="absolute right-0 top-0 bottom-0 w-2/5 flex flex-col justify-center px-14">
              <p className="font-ewangi text-[1.1rem] leading-relaxed text-white mb-3">
                {amenities[activeTab].description}
              </p>
              <p className="font-ewangi text-[0.9rem] text-white/65 mb-8">
                {amenities[activeTab].title}
              </p>
              <div className="flex flex-col gap-1.5 items-end">
                {(Object.keys(amenities) as AmenityTab[]).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "rounded-1.25 px-4 py-2 text-right font-ewangi text-[1.3rem] font-bold transition w-38",
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
      <section className="bg-[#d9d9d9] rounded-tl-12.5 rounded-tr-12.5 px-8 py-12 lg:px-20 lg:py-16">
        <div className="mx-auto max-w-7xl">

          <RevealOnScroll direction="left">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-ewangi text-[1.75rem] text-[#1e1e1e]">Explore our {models.length} models</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setModelIndex((i) => Math.max(0, i - 1))}
                  disabled={modelIndex === 0}
                  className="flex h-10.75 w-10.75 items-center justify-center rounded-3.25 border-[3px] border-black transition disabled:opacity-30 hover:bg-black/10"
                >
                  <ChevronLeft className="h-5 w-5 text-black" />
                </button>
                <button
                  type="button"
                  onClick={() => setModelIndex((i) => Math.min(models.length - 1, i + 1))}
                  disabled={modelIndex === models.length - 1}
                  className="flex h-10.75 w-10.75 items-center justify-center rounded-3.25 border-[3px] border-black transition disabled:opacity-30 hover:bg-black/10"
                >
                  <ChevronRight className="h-5 w-5 text-black" />
                </button>
              </div>
            </div>
          </RevealOnScroll>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <RevealOnScroll direction="left" delay={100} duration={1100}>
              <div className="lg:w-95 shrink-0">
                <h3 className="font-ewangi text-[clamp(2.25rem,4vw,3.25rem)] font-bold text-black leading-tight mb-3">
                  {currentModel.name}
                </h3>
                <p className="font-ewangi text-[2rem] text-brand-teal mb-6">— {currentModel.area}</p>
                <ul className="font-ewangi text-[1.2rem] text-black space-y-1.5">
                  {currentModel.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={100} duration={1100} className="flex-1 flex justify-end">
              <div className="relative w-full max-w-204.5 aspect-818/460 rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={modelImg}
                  alt={`${currentModel.name} interior`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </RevealOnScroll>
          </div>

          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {models.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setModelIndex(i)}
                className={cn(
                  "rounded-1 h-2 transition-all",
                  i === modelIndex ? "bg-brand-teal w-6" : "bg-[#b3b3b3] w-2"
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#d9d9d9] px-8 py-16 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-7xl flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

          <RevealOnScroll direction="left" duration={1100}>
            <div className="lg:w-[46%] shrink-0">
              <div className="relative overflow-hidden rounded-2.5 aspect-531/354">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMG_CTA}
                  alt="Pacific coastline at Rosarito Beach"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={1100} className="flex flex-col gap-5 lg:flex-1">
            <h2 className="font-ewangi text-[clamp(2rem,4.5vw,3.75rem)] leading-tight text-black">
              Life Elevated.<br />Ocean Uninterrupted.
            </h2>
            <p className="font-ewangi text-[1.1rem] leading-relaxed text-black/70">
              At The Wavve Baja, every residence is an invitation to live differently — with the Pacific Ocean as your backyard, premium finishes as your standard, and a private community designed for those who expect more. Only 40 exclusive units, each certified and ready to deliver the coastal lifestyle you deserve.
            </p>
            <p className="font-ewangi text-[1.05rem] leading-relaxed text-black/60">
              Reserve your residence today and live where the wave meets luxury.
            </p>
            <div className="mt-2">
              <button
                type="button"
                className="rounded-2.5 bg-brand-teal px-10 py-4 font-ewangi text-[1.5rem] font-bold text-brand-ink transition hover:bg-brand-teal/90"
              >
                Talk to an expert
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
}

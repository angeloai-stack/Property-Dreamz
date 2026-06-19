"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

// ── Images ──────────────────────────────────────────────────────────────────
const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";
const IMG_HERO     = `${CLD}/alimar/hero.png`;
const IMG_INTERIOR = `${CLD}/alimar/interior.png`;
const IMG_PLAN     = `${CLD}/alimar/floor_plan.png`;
const IMG_CTA      = `${CLD}/alimar/cta.jpg`;
const IMG_LOGO     = `${CLD}/alimar/logo.svg`;
const IMG_CMRE     = `${CLD}/CMRE_Logo-04_yjsknz.png`;

// ── Data ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: "16",   label: "Condos" },
  { value: "4",    label: "Models" },
  { value: "82%",  label: "Available" },
  { value: "100%", label: "Verified" },
];

const trustBadges = ["Legal reviewed", "Regulatory compliance", "Infrastructure validated"];

const amenityTabs = ["Living room", "Bedroom", "Bathroom", "Kitchen", "Terrace"] as const;
type AmenityTab = (typeof amenityTabs)[number];

const amenityDescriptions: Record<AmenityTab, string> = {
  "Living room": "Floor-to-ceiling windows, refined finishes, and seamless comfort designed for modern living.",
  "Bedroom":     "Spacious bedrooms with premium finishes and ample natural light.",
  "Bathroom":    "Elegant bathrooms with high-end fixtures and spa-like details.",
  "Kitchen":     "Integral kitchen with premium appliances and clean modern lines.",
  "Terrace":     "Private terraces with breathtaking panoramic views of the city.",
};

const layouts = [
  {
    name: "Layout A",
    area: "1287 sq. ft.",
    features: [
      "3 balconies",
      "Living room with balcony",
      "Dining room",
      "Breakfast bar",
      "Kitchen (Integral)",
      "2 Bedrooms",
      "2 Bathrooms",
      "Patio with laundry room",
      "1 covered parking space",
    ],
  },
];

export default function AlimarPage() {
  const [activeTab, setActiveTab] = useState<AmenityTab>("Living room");
  const [modelIndex, setModelIndex] = useState(0);

  const currentLayout = layouts[modelIndex];

  return (
    <div className="bg-[#171717] text-white">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[820px] overflow-hidden bg-[#171717]">
        {/* Background building photo */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMG_HERO}
            alt="Alimar building exterior"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>

        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #171717 45%, rgba(23,23,23,0.55) 70%, transparent 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #171717 8%, transparent 50%)" }}
        />

        {/* Content */}
        <div className="relative z-10 flex min-h-[820px] flex-col px-6 pt-10 pb-12 lg:px-20">

          {/* Top row — CMRE badge top-right */}
          <div className="flex justify-end">
            <Image
              src={IMG_CMRE}
              alt="CMRE Certified"
              width={135}
              height={32}
              className="w-32"
            />
          </div>

          {/* Middle — headline + subtitle + badges */}
          <div className="mt-auto max-w-2xl">
            <h1 className="font-ewangi text-[clamp(3rem,6.5vw,5.5rem)] leading-[0.93] text-white">
              Elevated living.<br />Exceptional views.
            </h1>
            <p className="mt-6 font-ewangi text-[1.125rem] leading-relaxed text-white/75 max-w-[560px]">
              A limited collection of only 16 luxury residences designed for those who expect more.
            </p>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-8">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex flex-col items-center gap-1.5">
                  <CheckCircle2 className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                  <span className="font-ewangi text-[13px] leading-tight text-white text-center">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Separator line */}
          <div className="mt-8 h-px w-[247px] bg-white/40" />

          {/* Stats bar */}
          <div className="mt-6 flex w-full max-w-[651px] rounded-2xl bg-white/10 backdrop-blur-sm px-6 py-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-1 flex-col items-center">
                <span className="font-ewangi text-[clamp(2rem,3.5vw,3rem)] leading-none text-white">{s.value}</span>
                <span className="font-ewangi text-sm text-white/70 mt-1">{s.label}</span>
              </div>
            ))}
          </div>

          {/* ALIMAR logo — bottom right of hero */}
          <div className="absolute right-20 bottom-24 hidden lg:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG_LOGO}
              alt="Alimar"
              className="w-28 opacity-90"
            />
          </div>
        </div>
      </section>

      {/* ── EXPLORE YOUR NEXT HOME ────────────────────────────────────────── */}
      <section className="bg-[#171717] px-6 py-16 lg:px-20 lg:py-20">
        <h2 className="font-ewangi text-[clamp(1.75rem,3vw,2.5rem)] text-white mb-10 text-center">
          Explore your next home
        </h2>

        {/* Amenities viewer */}
        <div className="mx-auto max-w-[1317px] relative rounded-[60px] overflow-hidden h-[420px] lg:h-[538px]">
          {/* Interior photo */}
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG_INTERIOR}
              alt={activeTab}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* Gradient right overlay for panel */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to left, rgba(30,30,30,0.85) 30%, transparent 60%)" }}
          />

          {/* Right panel */}
          <div className="absolute right-0 top-0 bottom-0 w-[38%] flex flex-col justify-center px-8 lg:px-12">
            {/* Description */}
            <p className="font-ewangi text-[1.1rem] leading-relaxed text-white mb-4">
              Experience a collection of interiors crafted for elevated living. From open-concept layouts to stunning finishes, every space is designed to inspire.
            </p>
            <p className="font-ewangi text-[0.95rem] text-white/70 mb-8">
              {amenityDescriptions[activeTab]}
            </p>

            {/* Room tabs */}
            <div className="flex flex-col gap-3">
              {amenityTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-[5px] px-5 py-2.5 text-right font-ewangi text-[1.125rem] font-bold transition ${
                    activeTab === tab
                      ? "bg-brand-teal text-brand-ink"
                      : "bg-white text-[#1e1e1e] hover:bg-brand-teal/20"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MODELS ────────────────────────────────────────────────────────── */}
      <section className="bg-[#d9d9d9] rounded-tl-[51px] rounded-tr-[50px] px-8 py-12 lg:px-20 lg:py-16">
        <div className="mx-auto max-w-[1440px]">

          {/* Header row */}
          <div className="flex items-center gap-6 mb-6">
            <span className="font-ewangi text-[1.6rem] text-[#1e1e1e]">Explore our {layouts.length > 1 ? `${layouts.length} models` : "4 models"}</span>
            <div className="flex gap-2">
              <button
                onClick={() => setModelIndex((i) => Math.max(0, i - 1))}
                disabled={modelIndex === 0}
                className="flex h-10 w-10 items-center justify-center rounded-[13px] border-[3px] border-black transition disabled:opacity-30 hover:bg-black/10"
              >
                <ChevronLeft className="h-5 w-5 text-black" />
              </button>
              <button
                onClick={() => setModelIndex((i) => Math.min(layouts.length - 1, i + 1))}
                disabled={modelIndex === layouts.length - 1}
                className="flex h-10 w-10 items-center justify-center rounded-[13px] border-[3px] border-black transition disabled:opacity-30 hover:bg-black/10"
              >
                <ChevronRight className="h-5 w-5 text-black" />
              </button>
            </div>
          </div>

          {/* Layout row */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">

            {/* Left — name + features */}
            <div className="lg:w-[45%]">
              <h3 className="font-ewangi text-[clamp(2rem,4vw,3.25rem)] font-bold text-black leading-tight mb-6">
                {currentLayout.name}{" "}
                <span className="text-[#03a593]">– {currentLayout.area}</span>
              </h3>
              <ul className="font-ewangi text-[1.25rem] text-black space-y-1">
                {currentLayout.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            {/* Right — floor plan */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[640px] aspect-[1280/889]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMG_PLAN}
                  alt={`${currentLayout.name} floor plan`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-6 py-16 lg:px-20 lg:py-24">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

          {/* Left — building photo */}
          <div className="lg:w-[46%]">
            <div className="relative overflow-hidden rounded-[26px] aspect-[663/370]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_CTA}
                alt="Alimar luxury residences"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right — text + CTA */}
          <div className="flex flex-col gap-6 lg:flex-1">
            <h2 className="font-ewangi text-[clamp(2rem,4.5vw,4rem)] leading-tight text-white">
              A Limited Collection.<br />An Extraordinary Lifestyle.
            </h2>
            <p className="font-ewangi text-[1.1rem] leading-relaxed text-white/70">
              Designed for those who seek more than just a residence, these 16 exclusive condominiums
              offer refined living spaces, breathtaking views, and a sense of community unlike any other.
              Every home is crafted to deliver comfort, elegance, and lasting value. Contact us today
              to learn more and reserve your place in this exceptional development.
            </p>
            <div className="mt-2">
              <button className="rounded-[10px] bg-brand-teal px-10 py-4 font-ewangi text-[1.5rem] text-brand-ink transition hover:bg-brand-teal/90">
                Talk to an expert
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CertifiedBanner } from "@/components/home/CertifiedBanner";

const IMG_HERO_CARD = "/fracc/hero-card.jpg";
const IMG_AERIAL    = "/fracc/aerial-map.jpg";
const IMG_VIENTO    = "/fracc/model-viento.jpg";
const IMG_CMRE      = "/fracc/cmre-hero.png";

function TrustIcon() {
  return (
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M10 1L2 4.5V12C2 16 5.5 20 10 22.5C14.5 20 18 16 18 12V4.5L10 1Z"
            stroke="#3AD3C1" strokeWidth="2.2" fill="none" />
      <path d="M6.5 12L9 14.5L13.5 9.5"
            stroke="#3AD3C1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const trustLabels = [
  "Legal background reviewed",
  "Regulatory compliance",
  "Infrastructure validated",
];

const stats = [
  { value: "120",  label: "Lots" },
  { value: "25",   label: "Condos" },
  { value: "5",    label: "Models" },
  { value: "80",   label: "Houses" },
  { value: "70%",  label: "Available" },
  { value: "100%", label: "Verified" },
];

const mapBtns = [
  { label: "lots",   left: 324, top: 151 },
  { label: "house",  left: 577, top: 237 },
  { label: "condos", left: 732, top: 237 },
];

const models = [
  {
    name: "VIENTO",
    image: IMG_VIENTO,
    body: "1 Bedroom Condo\nTotal Area: 55 m² / 592.015 sqft\n\nSpace Description\n- 1 bedroom\n- 1 full bathroom\n- Open-concept living and dining area\n- Ocean-view terrace",
  },
  {
    name: "TIERRA",
    image: IMG_VIENTO,
    body: "3 Bedroom House\nTotal Area: 120 m² / 1,292 sqft\n\nSpace Description\n- 3 bedrooms\n- 2 full bathrooms\n- Spacious open terrace\n- Private garden & parking",
  },
  {
    name: "MAR",
    image: IMG_VIENTO,
    body: "4 Bedroom Villa\nTotal Area: 200 m² / 2,153 sqft\n\nSpace Description\n- 4 bedrooms\n- 3 full bathrooms\n- Private pool\n- Ocean view from every room",
  },
];

export default function FraccPage() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + models.length) % models.length);
  const next = () => setIdx((i) => (i + 1) % models.length);
  const model = models[idx];

  return (
    <main>

      {/* ══════════════════════════════════════════════════════
          HERO
          Mobile:  screenshot full-width → text block below
          Desktop: 983px fixed, all elements absolute
          ══════════════════════════════════════════════════════ */}
      <section className="bg-white">

        {/* ── MOBILE HERO ── */}
        <div className="lg:hidden">
          <div className="h-56 overflow-hidden sm:h-72">
            <img src={IMG_HERO_CARD} alt="Del Mar development" className="h-full w-full object-cover" />
          </div>
          <div className="px-6 py-8">
            <span className="font-ewangi text-[2rem] font-bold text-brand-pine">Del Mar</span>
            <h1 className="mt-3 font-ewangi text-[1.75rem] leading-snug text-black">
              Home, condos and lots.
            </h1>
            <div className="mt-4 flex flex-col gap-2.5">
              {trustLabels.map((label) => (
                <div key={label} className="flex items-center gap-2">
                  <TrustIcon />
                  <span className="font-ewangi text-[0.95rem] text-[#1e1e1e]">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3">
              <div className="rounded-full bg-[#E1BB35]" style={{ width: 36, height: 36 }} />
              <span className="font-ewangi text-[1.5rem] text-black">Available</span>
            </div>
            <img src={IMG_CMRE} alt="CMRE Certified" className="mt-5 h-10 object-contain" />
          </div>
        </div>

        {/* ── DESKTOP HERO (≥ lg) ── */}
        <div className="relative hidden lg:block" style={{ height: 983 }}>

          {/* Screenshot card — Figma: x=248 y=224 1197×727 */}
          <img
            src={IMG_HERO_CARD}
            alt="Del Mar development view"
            className="absolute"
            style={{ left: 248, top: 224, width: 1197, height: 727, objectFit: "cover" }}
          />

          {/* Del Mar logo — Figma: x=129 y=182 */}
          <div className="absolute z-10" style={{ left: 129, top: 182 }}>
            <span className="font-ewangi text-[2.6rem] font-bold leading-none tracking-[0.06em] text-brand-pine">
              Del Mar
            </span>
          </div>

          {/* Title — Figma: Ewangi 36px black x=124 y=609 */}
          <h1 className="absolute z-10 font-ewangi text-[2.25rem] text-black" style={{ left: 124, top: 609 }}>
            Home, condos and lots.
          </h1>

          {/* Trust badges — Figma: horizontal row y=729 */}
          <div className="absolute z-10 flex items-center gap-8" style={{ left: 124, top: 729 }}>
            {trustLabels.map((label) => (
              <div key={label} className="flex items-center gap-2">
                <TrustIcon />
                <span className="font-ewangi text-[1rem] text-[#1e1e1e]">{label}</span>
              </div>
            ))}
          </div>

          {/* Gold badge + Available — Figma: x=124 y=827 */}
          <div className="absolute z-10 flex items-center gap-4" style={{ left: 124, top: 827 }}>
            <div className="rounded-full bg-[#E1BB35]" style={{ width: 43, height: 43 }} />
            <span className="font-ewangi text-[2.25rem] text-black">Available</span>
          </div>

          {/* CMRE — Figma: x=1180 y=851 171×54 */}
          <img
            src={IMG_CMRE}
            alt="CMRE Certified Mexico Real Estate"
            className="absolute"
            style={{ left: 1180, top: 851, width: 171, height: 54, objectFit: "contain" }}
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PROPERTY TYPE SELECTOR
          Mobile:  map image → buttons centered → stats grid
          Desktop: 851px fixed, all elements absolute
          ══════════════════════════════════════════════════════ */}
      <section className="bg-white">

        {/* ── MOBILE SELECTOR ── */}
        <div className="lg:hidden">
          {/* Map with buttons overlaid — keep relative aspect box */}
          <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <img src={IMG_AERIAL} alt="Aerial view" className="h-full w-full object-cover" />
            {/* Buttons positioned by percentage so they scale with the image */}
            {[
              { label: "lots",   left: "22%", top: "18%"  },
              { label: "house",  left: "39%", top: "28%"  },
              { label: "condos", left: "50%", top: "28%"  },
            ].map(({ label, left, top }) => (
              <button
                key={label}
                type="button"
                className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#3AD3C1] transition hover:scale-105"
                style={{ left, top, width: 56, height: 56 }}
              >
                <span className="font-ewangi text-[0.85rem] text-white">{label}</span>
              </button>
            ))}
          </div>
          {/* Stats — 3-col grid */}
          <div className="grid grid-cols-3 bg-black">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center justify-center py-4">
                <span className="font-ewangi text-[1.5rem] leading-none text-white">{value}</span>
                <span className="font-ewangi text-[0.85rem] leading-none text-white/70">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP SELECTOR (≥ lg) ── */}
        <div className="relative hidden overflow-hidden bg-white lg:block" style={{ height: 851 }}>
          {/* Aerial map bg — Figma: 1451×810 x=-4 y=-15 */}
          <img
            src={IMG_AERIAL}
            alt="Aerial view of Del Mar"
            className="absolute"
            style={{ left: -4, top: -15, width: 1451, height: 810, objectFit: "cover" }}
          />

          {/* Circular property type buttons — Figma: 71×71 #3AD3C1 */}
          {mapBtns.map(({ label, left, top }) => (
            <button
              key={label}
              type="button"
              className="absolute flex items-center justify-center rounded-full bg-[#3AD3C1] transition hover:scale-105"
              style={{ left, top, width: 71, height: 71 }}
            >
              <span className="font-ewangi text-[1rem] text-white">{label}</span>
            </button>
          ))}

          {/* Stats bar — Figma: #000 1187×99 x=127 y=611 */}
          <div
            className="absolute flex items-stretch"
            style={{ left: 127, top: 611, width: 1187, height: 99, background: "#000000" }}
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-1 flex-col items-center justify-center">
                <span className="font-ewangi text-[2.25rem] leading-none text-white">{value}</span>
                <span className="font-ewangi text-[1.25rem] leading-none text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          HOUSE MODELS
          Mobile:  vertical stack
          Desktop: 620px fixed, all elements absolute
          ══════════════════════════════════════════════════════ */}
      <section className="bg-brand-ink">

        {/* ── MOBILE MODELS ── */}
        <div className="px-6 py-10 lg:hidden">
          {/* Heading + arrows */}
          <div className="flex items-center justify-between">
            <h2 className="font-ewangi text-[1.75rem] text-white">House models</h2>
            <div className="flex gap-2">
              {[prev, next].map((fn, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={fn}
                  aria-label={i === 0 ? "Previous" : "Next"}
                  className="flex items-center justify-center text-brand-pine transition hover:bg-brand-pine hover:text-white"
                  style={{ width: 40, height: 40, borderRadius: 11, border: "3px solid #024139" }}
                >
                  {i === 0
                    ? <ChevronLeft style={{ width: 10, height: 14 }} strokeWidth={3} />
                    : <ChevronRight style={{ width: 10, height: 14 }} strokeWidth={3} />}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mt-5 border-t-2 border-white" style={{ width: 200 }} />

          {/* Model name */}
          <h3 className="mt-3 font-ewangi text-[3rem] text-white">{model.name}</h3>

          {/* Image */}
          <div className="mt-4 overflow-hidden rounded-[16px]" style={{ height: 220 }}>
            <img key={model.name} src={model.image} alt={model.name} className="h-full w-full object-cover" />
          </div>

          {/* Description */}
          <pre className="mt-4 whitespace-pre-wrap font-ewangi text-[1.1rem] leading-relaxed text-white">
            {model.body}
          </pre>

          {/* Dots */}
          <div className="mt-6 flex gap-4">
            {models.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIdx(i)}
                aria-label={`Model ${i + 1}`}
                className={cn("rounded-full transition-colors", i === idx ? "bg-[#3AD3C1]" : "bg-[#D9D9D9]")}
                style={{ width: 16, height: 16 }}
              />
            ))}
          </div>
        </div>

        {/* ── DESKTOP MODELS (≥ lg) ── */}
        <div className="relative hidden lg:block" style={{ height: 620 }}>

          {/* "House models" — Figma: Ewangi 36px white x=126 y=18 */}
          <h2 className="absolute font-ewangi text-[2.25rem] text-white" style={{ left: 126, top: 18 }}>
            House models
          </h2>

          {/* Divider — Figma: 260×0 border-white sw=2 x=126 y=95 */}
          <div className="absolute border-t-2 border-white" style={{ left: 126, top: 95, width: 260 }} />

          {/* Model name — Figma: Ewangi 64px white x=126 y=107 */}
          <h3 className="absolute font-ewangi text-[4rem] text-white" style={{ left: 126, top: 107 }}>
            {model.name}
          </h3>

          {/* Left arrow — Figma: 43×43 r=13 border #024139 x=477 y=115 */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous model"
            className="absolute flex items-center justify-center text-brand-pine transition hover:bg-brand-pine hover:text-white"
            style={{ left: 477, top: 115, width: 43, height: 43, borderRadius: 13, border: "3px solid #024139" }}
          >
            <ChevronLeft style={{ width: 10, height: 15 }} strokeWidth={3} />
          </button>

          {/* Right arrow — Figma: x=536 y=115 */}
          <button
            type="button"
            onClick={next}
            aria-label="Next model"
            className="absolute flex items-center justify-center text-brand-pine transition hover:bg-brand-pine hover:text-white"
            style={{ left: 536, top: 115, width: 43, height: 43, borderRadius: 13, border: "3px solid #024139" }}
          >
            <ChevronRight style={{ width: 10, height: 15 }} strokeWidth={3} />
          </button>

          {/* Carousel dots — Figma: 20×20 active #3AD3C1 inactive #D9D9D9 gap=43 x=903 */}
          {models.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIdx(i)}
              aria-label={`Model ${i + 1}`}
              className={cn("absolute rounded-full transition-colors", i === idx ? "bg-[#3AD3C1]" : "bg-[#D9D9D9]")}
              style={{ left: 903 + i * 43, top: 125, width: 20, height: 20 }}
            />
          ))}

          {/* Product image — Figma: 730×345 r=20 x=599 y=167 */}
          <div
            className="absolute overflow-hidden"
            style={{ left: 599, top: 167, width: 730, height: 345, borderRadius: 20 }}
          >
            <img key={model.name} src={model.image} alt={model.name} className="h-full w-full object-cover" />
          </div>

          {/* Description — Figma: Ewangi 24px white x=124 y=249 364×263 */}
          <pre
            className="absolute whitespace-pre-wrap font-ewangi text-[1.5rem] leading-[1.3] text-white"
            style={{ left: 124, top: 249, width: 364 }}
          >
            {model.body}
          </pre>
        </div>
      </section>

      <CertifiedBanner />
    </main>
  );
}

"use client";
// Encanto del Valle page — wine-country lots in Valle de Guadalupe with a developer-hosted 360° showroom iframe.
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { RevealOnScroll } from "@/components/ui";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";
const IMG_LOGO         = `${CLD}/encanto-del-valle/logo`;
const IMG_SAFETY       = `${CLD}/encanto-del-valle/safety`;
const IMG_LOCATION_MAP = `${CLD}/encanto-del-valle/location-map`;
const IMG_CMRE         = `${CLD}/CMRE_Logo-04_yjsknz.png`;

const stats = [
  { value: "300",  label: "Lots" },
  { value: "10",   label: "Condos" },
  { value: "2",    label: "Models" },
  { value: "45",   label: "Houses" },
  { value: "82%",  label: "Available" },
  { value: "100%", label: "Verified" },
];

const trustBadges = [
  "Legal reviewed",
  "Regulatory compliance",
  "Infrastructure validated",
];

export default function EncantoDelVallePage() {

  return (
    <div className="bg-[#171717] text-white">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-ink">
        <video
          src="https://encantodelvalle.com.mx/assets/Video/vid-hero-encanto_del_valle.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover animate-[ken-burns_18s_ease-in-out_infinite_alternate]"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(23,23,23,0.25) 0%, rgba(23,23,23,0.5) 55%, #171717 100%)" }}
        />

        <div className="relative z-10 flex min-h-205 flex-col px-6 pt-0 pb-0 lg:px-20">

          {/* Stats banner sits at the very top of the hero — negative margin breaks out of the flex padding. */}
          {/* Stats banner — top */}
          <div className="-mx-6 lg:-mx-20 bg-black/30 backdrop-blur-sm">
            <div className="flex flex-wrap items-center justify-around gap-x-4 gap-y-3 px-6 py-5 lg:flex-nowrap lg:justify-between lg:px-20">
              {stats.map((s, i) => (
                <div key={s.label} className="flex flex-col items-center gap-0.5 animate-[fade-up_0.7s_ease-out_both]" style={{ animationDelay: `${i * 100}ms` }}>
                  <span className="font-ewangi text-[1.625rem] leading-none text-white lg:text-[2.25rem]">{s.value}</span>
                  <span className="font-ewangi text-[0.875rem] text-white/80 lg:text-[1.1rem]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Bottom content: logo+CMRE left — badges+title+subtitle right */}
          <div className="flex items-end justify-between gap-6 pb-10 lg:pb-14">

            {/* Left: Logo + CMRE */}
            <RevealOnScroll direction="left">
              <div className="hidden flex-col gap-3 lg:flex">
                <Image
                  src={IMG_LOGO}
                  alt="Encanto del Valle"
                  width={339}
                  height={60}
                  className="w-44 lg:w-56"
                />
                <Image
                  src={IMG_CMRE}
                  alt="CMRE Certified"
                  width={204}
                  height={48}
                  className="w-40 lg:w-48"
                />
              </div>
            </RevealOnScroll>

            {/* Right: badges + title + subtitle */}
            <div className="flex flex-col items-start gap-5 lg:items-end lg:max-w-[62%]">

              {/* Mobile logo */}
              <div className="flex flex-col gap-2 lg:hidden">
                <Image
                  src={IMG_LOGO}
                  alt="Encanto del Valle"
                  width={339}
                  height={60}
                  className="w-36"
                />
                <Image
                  src={IMG_CMRE}
                  alt="CMRE Certified"
                  width={204}
                  height={48}
                  className="w-32"
                />
              </div>

              <div className="flex flex-wrap gap-x-10 gap-y-4 lg:justify-end">
                {trustBadges.map((b, i) => (
                  <div key={b} className="flex flex-col items-center gap-1.5 animate-[fade-up_0.8s_ease-out_both]" style={{ animationDelay: `${250 + i * 150}ms` }}>
                    <CheckCircle2 className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                    <span className="text-center font-ewangi text-[14px] leading-tight text-white">{b}</span>
                  </div>
                ))}
              </div>

              <h1
                className="font-ewangi text-[clamp(2.5rem,7vw,6rem)] leading-[1.0] text-white lg:text-right animate-[fade-right_0.9s_ease-out_0.1s_both]"
                style={{ textShadow: "10px 4px 11px rgba(0,0,0,0.61)" }}
              >
                The privilege of the<br />heart of the valle
              </h1>

              <RevealOnScroll direction="up" delay={350}>
                <p
                  className="font-ewangi text-[1.1rem] leading-relaxed text-white/80 lg:text-right"
                  style={{ textShadow: "12px 4px 9px rgba(0,0,0,0.58)" }}
                >
                  An exclusive low-density development of residential lots in the mountains of Valle de Guadalupe, Baja California — surrounded by nature, vineyards and the Ruta del Vino.
                </p>
              </RevealOnScroll>

            </div>
          </div>

        </div>
      </section>

      {/* ── EXPLORE DEVELOPMENT ─────────────────────────────────────────── */}
      <section className="bg-[#171717] px-6 py-16 lg:px-20 lg:py-20">
        <RevealOnScroll direction="left">
          <p className="mb-6 font-ewangi text-[1.25rem] text-white">
            Explore the development
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="center" duration={1100}>
        <div className="overflow-hidden rounded-[27px]" style={{ aspectRatio: "16/9" }}>
          <iframe
            src="https://encantodelvalle.com.mx/showroom/?sct=Luis"
            title="Encanto del Valle 360 Showroom"
            className="h-full w-full border-0"
            allow="fullscreen; accelerometer; gyroscope"
          />
        </div>
        </RevealOnScroll>
      </section>

      {/* ── SAFETY FOR YOUR FAMILY ────────────────────────────────────────── */}
      <section className="bg-[#171717] px-6 py-16 lg:px-20 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">

          <RevealOnScroll direction="left" duration={1100}>
            <div className="flex flex-col gap-6 lg:flex-1">
              <h2 className="font-ewangi text-[clamp(2.5rem,4.5vw,3.875rem)] leading-tight text-white">
                Safety For Your Family
              </h2>
              <p className="font-ewangi text-[1.375rem] leading-relaxed text-white/80 lg:max-w-[480px]">
                Encanto del Valle prioritizes the safety and tranquility of its residents through rigorous measures that guarantee a secure community. The development features a highly efficient 24-hour access control system, strategically placed surveillance cameras for continuous monitoring of common areas, and proactive security policies.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={1100}>
            <div className="lg:w-[50%]">
              <div className="relative overflow-hidden rounded-[15px]" style={{ aspectRatio: "650/470" }}>
                <Image
                  src={IMG_SAFETY}
                  alt="Encanto del Valle valley landscape"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-6 py-10 lg:px-20">
        <RevealOnScroll direction="center">
        <div className="flex items-center gap-6 lg:gap-10">

          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-teal" strokeWidth={2} />
            <span className="font-ewangi text-[1.5rem] text-brand-teal lg:text-[2.1875rem]">
              Trusted by + 100 Families
            </span>
          </div>

          <div className="hidden h-px flex-1 bg-white/20 lg:block" />

          <Link
            href="https://www.facebook.com/reel/1517193329340563"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 items-center justify-center rounded-[18px] bg-white px-8 py-5 font-ewangi text-[1.5rem] text-brand-ink transition hover:bg-white/90 lg:flex"
          >
            Hear From Our Residents
          </Link>

        </div>
        </RevealOnScroll>
      </section>

      {/* ── MORE THAN AMENITIES ───────────────────────────────────────────── */}
      <section className="bg-[#171717] px-6 py-16 lg:px-20 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">

          <RevealOnScroll direction="left" duration={1100}>
            <div className="lg:w-[37%]">
              <div className="relative overflow-hidden rounded-[45px]" style={{ aspectRatio: "452/499" }}>
                <Image
                  src={IMG_LOCATION_MAP}
                  alt="Valle de Guadalupe location map"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width:1024px) 100vw, 37vw"
                />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={1100}>
            <div className="flex flex-col gap-6 lg:flex-1 lg:items-end lg:text-right">
              <h2 className="font-ewangi text-[clamp(2rem,4.5vw,3.875rem)] leading-tight text-white">
                More than amenities,<br />it&apos;s an experience
              </h2>
              <p className="font-ewangi text-[1.375rem] leading-relaxed text-white/80 lg:max-w-[520px]">
                Controlled access gate, artificial lake, green areas, golf course and recreational spaces in a private, secure community in the heart of Mexico&apos;s wine country.
              </p>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#171717] flex justify-center px-6 pb-20 lg:px-20 lg:pb-24">
        <RevealOnScroll direction="up">
          <button
            type="button"
            className="rounded-[10px] bg-brand-teal px-14 py-5 font-ewangi text-[2.1875rem] text-brand-ink transition hover:bg-brand-teal/90"
          >
            Talk to an expert
          </button>
        </RevealOnScroll>
      </section>

    </div>
  );
}

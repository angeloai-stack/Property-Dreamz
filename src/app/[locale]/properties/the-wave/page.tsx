"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { RevealOnScroll } from "@/components/ui";
import { cn } from "@/lib/utils";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";
const IMG_HERO            = `${CLD}/the-wave/the-wave/hero`;
const IMG_LOGO            = `${CLD}/the-wave/the-wave/logo`;
const IMG_TOUR            = `${CLD}/the-wave/the-wave/virtual-tour-preview`;
const IMG_AMENITY_TENNIS  = `${CLD}/the-wave/the-wave/amenity-tennis`;
const IMG_AMENITY_POOL    = `${CLD}/the-wave/the-wave/amenity-pool`;
const IMG_AMENITY_TERRACE = `${CLD}/the-wave/the-wave/amenity-terrace`;
const IMG_FLOORPLAN       = `${CLD}/the-wave/the-wave/floorplan-teal`;
const IMG_LOCATION_MAP    = `${CLD}/the-wave/the-wave/location-map`;
const IMG_CMRE            = `${CLD}/CMRE_Logo-04_yjsknz.png`;

type Stat = { value: string; label: string };

export default function TheWavePage() {
  const t = useTranslations("propertyTheWave");
  const stats = t.raw("stats") as Stat[];
  const trustBadges = t.raw("trustBadges") as string[];
  const modelFeatures = t.raw("models.features") as string[];

  const [tourStarted, setTourStarted] = useState(false);
  const [propertyPrice, setPropertyPrice] = useState(247000);
  const [downPaymentPct, setDownPaymentPct] = useState(30);
  const [termYears, setTermYears] = useState(15);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(1590);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  function calculateMonthlyPayment() {
    const principal = propertyPrice * (1 - downPaymentPct / 100);
    const monthlyRate = 0.10 / 12;
    const months = termYears * 12;
    const payment = months <= 0
      ? 0
      : (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    setMonthlyPayment(Math.round(payment));
  }

  return (
    <div className="overflow-x-hidden bg-[#000f2c] text-white">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-205 overflow-hidden bg-[#000f2c]">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMG_HERO}
            alt={t("hero.heroImageAlt")}
            className="absolute inset-0 h-full w-full object-cover object-center animate-[ken-burns_14s_ease-in-out_infinite_alternate]"
          />
        </div>

        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #000f2c 42%, rgba(0,15,44,0.50) 65%, transparent 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #000f2c 8%, transparent 50%)" }}
        />

        <div className="relative z-10 flex min-h-205 flex-col px-6 pt-10 pb-12 lg:px-20">

          {/* Top row — logo + CMRE + book a tour */}
          <div className="flex items-start justify-between">
            <RevealOnScroll direction="left">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_LOGO} alt={t("hero.logoAlt")} className="h-16 w-auto object-contain lg:h-20" />
            </RevealOnScroll>
            <div className="flex flex-col items-end gap-4 lg:flex-row lg:items-center lg:gap-6">
              <RevealOnScroll direction="right">
                <Image src={IMG_CMRE} alt={t("hero.cmreAlt")} width={135} height={32} className="w-28 lg:w-32" />
              </RevealOnScroll>
              <RevealOnScroll direction="right" delay={100}>
                <button
                  type="button"
                  className="rounded-3.75 bg-brand-teal px-8 py-3.5 font-ewangi text-[1.1rem] font-bold text-[#000f2c] transition hover:bg-brand-teal/90"
                >
                  {t("hero.bookTourButton")}
                </button>
              </RevealOnScroll>
            </div>
          </div>

          {/* Headline + description */}
          <div className="mt-10 max-w-2xl lg:mt-auto">
            <h1 className="font-ewangi text-[clamp(3rem,6.5vw,6rem)] leading-[0.93] text-white animate-[fade-left_0.9s_ease-out_both]">
              {t("hero.headline")}
            </h1>
            <RevealOnScroll direction="up" delay={200}>
              <p className="mt-6 font-ewangi text-[1.125rem] leading-relaxed text-white/75 max-w-140">
                {t("hero.description")}
              </p>
            </RevealOnScroll>
          </div>

          {/* Stats bar + trust badges */}
          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
            <RevealOnScroll direction="up" delay={200} className="flex w-full max-w-lg rounded-2xl bg-white/10 backdrop-blur-sm px-6 py-4 gap-6">
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

            <RevealOnScroll direction="up" delay={280} className="grid grid-cols-3 gap-x-6 gap-y-3">
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
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── VIRTUAL TOUR ─────────────────────────────────────────────────── */}
      <section className="px-6 py-16 lg:px-20 lg:py-20">
        <RevealOnScroll direction="up" duration={1100}>

          {/* ── Mobile: stacked photo + panel ── */}
          <div className="mx-auto flex max-w-320.75 flex-col gap-4 lg:hidden">
            <div className="relative h-64 overflow-hidden rounded-6">
              {tourStarted ? (
                <iframe
                  src="https://kuula.co/share/collection/7TDJ1?logo=1&info=1&fs=1&vr=0&thumbs=1"
                  className="absolute inset-0 h-full w-full border-0"
                  allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
                  allowFullScreen
                  title={t("virtualTour.iframeTitle")}
                />
              ) : (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IMG_TOUR} alt={t("virtualTour.photoAlt")} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute left-[38%] top-[57%] flex items-center gap-1 rounded-md bg-brand-teal px-2 py-1 font-ewangi text-[11px] font-bold text-[#000f2c] shadow-lg">
                    <MapPin className="h-3 w-3" strokeWidth={2.5} /> {t("virtualTour.pinTeal")}
                  </div>
                  <div className="absolute left-[46%] top-[57%] flex items-center gap-1 rounded-md bg-[#00c9a7] px-2 py-1 font-ewangi text-[11px] font-bold text-[#000f2c] shadow-lg">
                    <MapPin className="h-3 w-3" strokeWidth={2.5} /> {t("virtualTour.pinAzure")}
                  </div>
                </>
              )}
            </div>
            <div className="rounded-6 bg-white/10 px-6 py-8">
              <p className="font-ewangi text-[1.4rem] font-bold leading-snug text-white">{t("virtualTour.heading")}</p>
              <p className="mt-4 font-ewangi text-[0.95rem] leading-relaxed text-white/85">{t("virtualTour.description")}</p>
              {!tourStarted && (
                <button
                  type="button"
                  onClick={() => setTourStarted(true)}
                  className="mt-6 w-fit rounded-3 bg-brand-teal px-8 py-3.5 font-ewangi text-lg font-bold text-[#000f2c] transition hover:bg-brand-teal/90"
                >
                  {t("virtualTour.startTourLabel")}
                </button>
              )}
            </div>
          </div>

          {/* ── Desktop: photo with overlaid glass panel ── */}
          <div className="relative mx-auto hidden aspect-1312/540 max-w-320.75 overflow-hidden rounded-8.5 lg:block">
            {tourStarted ? (
              <iframe
                src="https://kuula.co/share/collection/7TDJ1?logo=1&info=1&fs=1&vr=0&thumbs=1"
                className="absolute inset-0 h-full w-full border-0"
                allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
                allowFullScreen
                title={t("virtualTour.iframeTitle")}
              />
            ) : (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG_TOUR} alt={t("virtualTour.photoAlt")} className="absolute inset-0 h-full w-full object-cover" />

                <div className="absolute left-[38%] top-[57%] flex items-center gap-1 rounded-md bg-brand-teal px-2 py-1 font-ewangi text-[11px] font-bold text-[#000f2c] shadow-lg">
                  <MapPin className="h-3 w-3" strokeWidth={2.5} /> {t("virtualTour.pinTeal")}
                </div>
                <div className="absolute left-[46%] top-[57%] flex items-center gap-1 rounded-md bg-[#00c9a7] px-2 py-1 font-ewangi text-[11px] font-bold text-[#000f2c] shadow-lg">
                  <MapPin className="h-3 w-3" strokeWidth={2.5} /> {t("virtualTour.pinAzure")}
                </div>

                <div className="absolute inset-y-0 right-0 flex w-[43%] flex-col justify-center bg-white/10 px-14 py-10 backdrop-blur-xl">
                  <p className="font-ewangi text-[1.6rem] font-bold leading-snug text-white">{t("virtualTour.heading")}</p>
                  <p className="mt-4 font-ewangi text-[1.05rem] leading-relaxed text-white/85">{t("virtualTour.description")}</p>
                  <button
                    type="button"
                    onClick={() => setTourStarted(true)}
                    className="mt-8 w-fit rounded-3 bg-brand-teal px-8 py-3.5 font-ewangi text-lg font-bold text-[#000f2c] transition hover:bg-brand-teal/90"
                  >
                    {t("virtualTour.startTourLabel")}
                  </button>
                </div>
              </>
            )}
          </div>
        </RevealOnScroll>
      </section>

      {/* ── RESORT-STYLE AMENITIES ──────────────────────────────────────── */}
      <section className="px-6 py-8 lg:px-20 lg:py-10">
        <RevealOnScroll direction="left">
          <h2 className="mb-8 font-ewangi text-[clamp(1.5rem,2.5vw,2.25rem)] text-white">{t("amenities.heading")}</h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {[
            { src: IMG_AMENITY_TENNIS, alt: t("amenities.tennisAlt") },
            { src: IMG_AMENITY_POOL, alt: t("amenities.poolAlt") },
            { src: IMG_AMENITY_TERRACE, alt: t("amenities.terraceAlt") },
          ].map((amenity, i) => (
            <RevealOnScroll key={amenity.alt} direction="up" delay={i * 100} duration={900}>
              <div className="relative aspect-379/282 overflow-hidden rounded-7 border-2 border-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={amenity.src} alt={amenity.alt} className="absolute inset-0 h-full w-full object-cover" />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ── EXPLORE AVAILABLE MODELS ─────────────────────────────────────── */}
      <section className="px-6 py-8 lg:px-20 lg:py-10">
        <RevealOnScroll direction="left">
          <h2 className="mb-8 font-ewangi text-[clamp(1.5rem,2.5vw,2.25rem)] text-white">{t("models.heading")}</h2>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={100} duration={1100}>
          <div className="mx-auto max-w-336.5 rounded-15 bg-[#7cd4b2] px-8 py-10 lg:px-16 lg:py-12">
            <div className="mb-8 flex gap-2">
              <button
                type="button"
                disabled
                className="flex h-10.75 w-10.75 items-center justify-center rounded-3.25 border-[3px] border-black/40"
              >
                <ChevronLeft className="h-5 w-5 text-black/40" />
              </button>
              <button
                type="button"
                disabled
                className="flex h-10.75 w-10.75 items-center justify-center rounded-3.25 border-[3px] border-black/40"
              >
                <ChevronRight className="h-5 w-5 text-black/40" />
              </button>
            </div>

            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="lg:w-80 shrink-0">
                <h3 className="font-ewangi text-[clamp(2.25rem,4vw,3rem)] font-bold text-black leading-tight">
                  {t("models.name")}
                </h3>
                <p className="font-ewangi text-[clamp(1.75rem,3vw,2.25rem)] text-[#00112e] mb-6">{t("models.area")}</p>
                <ul className="font-ewangi text-[1.15rem] text-black space-y-1.5">
                  {modelFeatures.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-start gap-4 lg:w-56 shrink-0">
                <div>
                  <p className="font-ewangi text-[1.05rem] text-black">{t("models.startingAtLabel")}</p>
                  <p className="font-ewangi text-[1.7rem] font-bold text-[#000f2c]">
                    {t("models.price")}{" "}
                    <span className="font-ewangi text-base font-normal text-[#000f2c]">{t("models.priceCurrency")}</span>
                  </p>
                </div>
                <button
                  type="button"
                  className="rounded-1.25 bg-[#000f2c] px-6 py-2.5 font-ewangi text-[0.95rem] text-white transition hover:bg-[#000f2c]/85"
                >
                  {t("models.exploreModelButton")}
                </button>
              </div>

              <div className="relative mx-auto aspect-1792/2400 w-44 shrink-0 overflow-hidden rounded-3 lg:w-52">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG_FLOORPLAN} alt={t("models.floorplanAlt")} className="absolute inset-0 h-full w-full object-cover" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-teal" />
            <span className="font-ewangi text-[1.05rem] font-bold text-white">{t("models.availableLabel")}</span>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── CONSTRUCTION PROGRESS + PRIME LOCATION ──────────────────────── */}
      <section className="px-6 py-8 lg:px-20 lg:py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.4fr]">

          <RevealOnScroll direction="left" duration={1000}>
            <div className="h-full rounded-5.5 border border-white/30 p-8">
              <h3 className="font-ewangi text-2xl font-bold text-white">{t("constructionProgress.heading")}</h3>
              <div className="mt-8 flex items-end justify-between">
                <div className="font-ewangi text-lg text-white/80 leading-snug">
                  <p>{t("constructionProgress.month")}</p>
                  <p>{t("constructionProgress.updatedLabel")}</p>
                </div>
                <p className="font-ewangi text-5xl font-bold text-white">{t("constructionProgress.percentage")}</p>
              </div>
              <div className="mt-6 h-[7px] w-full overflow-hidden rounded-full border border-white/40">
                <div className="h-full rounded-full bg-brand-teal" style={{ width: t("constructionProgress.percentage") }} />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={100} duration={1000}>
            <div className="flex h-full flex-col gap-6 rounded-5.5 border border-white/30 p-8 sm:flex-row sm:items-center">
              <div className="relative aspect-322/214 w-full shrink-0 overflow-hidden rounded-3 sm:w-72">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG_LOCATION_MAP} alt={t("location.mapAlt")} className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div>
                <p className="font-ewangi text-lg font-light text-white/80">{t("location.headingLine1")}</p>
                <p className="font-ewangi text-2xl font-bold text-white">{t("location.headingLine2")}</p>
                <p className="mt-3 font-ewangi text-[0.95rem] leading-relaxed text-white/75">{t("location.description")}</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── ESTIMATE YOUR INVESTMENT ─────────────────────────────────────── */}
      <section className="px-6 py-8 lg:px-20 lg:py-10">
        <RevealOnScroll direction="left">
          <h2 className="mb-8 font-ewangi text-[clamp(1.5rem,2.5vw,2.25rem)] text-white">{t("investment.heading")}</h2>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={100} duration={1000}>
          <div className="rounded-6 border border-white/25 p-8 lg:p-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <span className="inline-block rounded-md bg-[#000f2c] px-4 py-1.5 font-ewangi text-sm text-white">
                  {t("investment.propertyPriceLabel")}
                </span>
                <div className="mt-3 rounded-4.5 border border-white/40 px-5 py-4">
                  <input
                    type="number"
                    value={propertyPrice}
                    onChange={(e) => setPropertyPrice(Number(e.target.value))}
                    className="w-full bg-transparent font-ewangi text-2xl text-white outline-none"
                  />
                </div>
              </div>
              <div>
                <span className="inline-block rounded-md bg-[#000f2c] px-4 py-1.5 font-ewangi text-sm text-white">
                  {t("investment.downPaymentLabel")}
                </span>
                <div className="mt-3 rounded-4.5 border border-white/40 px-5 py-4">
                  <input
                    type="number"
                    value={downPaymentPct}
                    onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                    className="w-full bg-transparent font-ewangi text-2xl text-white outline-none"
                  />
                </div>
              </div>
              <div>
                <span className="inline-block rounded-md bg-[#000f2c] px-4 py-1.5 font-ewangi text-sm text-white">
                  {t("investment.termLabel")}
                </span>
                <div className="mt-3 rounded-4.5 border border-white/40 px-5 py-4">
                  <input
                    type="number"
                    value={termYears}
                    onChange={(e) => setTermYears(Number(e.target.value))}
                    className="w-full bg-transparent font-ewangi text-2xl text-white outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="my-8 h-px w-full bg-white/25" />

            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-ewangi text-lg text-white/80">{t("investment.monthlyPaymentLabel")}</p>
                <p className="font-ewangi text-3xl font-bold text-white">
                  {monthlyPayment !== null ? `$ ${monthlyPayment.toLocaleString("en-US")} USD` : "—"}
                </p>
              </div>
              <div>
                <p className="font-ewangi text-lg text-white/80">{t("investment.annualRoiLabel")}</p>
                <p className="font-ewangi text-3xl font-bold text-white">{t("investment.roiRange")}</p>
              </div>
              <button
                type="button"
                onClick={calculateMonthlyPayment}
                className="w-fit rounded-4.25 bg-brand-teal px-14 py-5 font-ewangi text-2xl font-bold text-[#000f2c] transition hover:bg-brand-teal/90"
              >
                {t("investment.calculateButton")}
              </button>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-16 lg:px-20 lg:py-20">
        <RevealOnScroll direction="up" duration={1000}>
          <div className={cn(
            "mx-auto flex max-w-7xl flex-col gap-6 rounded-3.75 bg-[#000f2c] px-8 py-10",
            "sm:flex-row sm:items-center sm:justify-between lg:px-14"
          )}>
            <div>
              <p className="font-ewangi text-2xl font-bold text-white">{t("cta.headingLine1")}</p>
              <p className="font-ewangi text-lg font-light text-white/75">{t("cta.headingLine2")}</p>
            </div>
            <button
              type="button"
              className="w-fit rounded-2.5 bg-brand-teal px-10 py-4 font-ewangi text-xl font-bold text-black transition hover:bg-brand-teal/90"
            >
              {t("cta.button")}
            </button>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
}

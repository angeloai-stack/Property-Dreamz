"use client";
// Horizontal buyer's-guide step carousel — Figma: "Buyer's Guide — Carrusel (scroll horizontal)".
import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container, RevealOnScroll } from "@/components/ui";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "1",
    title: "Choose your location",
    body: "Select your location to view developers, services, and certification information relevant to your region. This helps us provide a more personalized experience and ensure you see the most accurate content based on local requirements and availability.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=75",
    imageAlt: "Mexico city skyline",
  },
  {
    number: "2",
    title: "Set up your Fideicomiso",
    body: "Whether you're purchasing property or securing long-term ownership rights in Mexico's restricted zones, our network of verified professionals can help you establish your fideicomiso efficiently and with peace of mind. Navigate the process with expert guidance and trusted support from start to finish.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=75",
    imageAlt: "Business professionals shaking hands",
  },
  {
    number: "3",
    title: "Decide and Purchase",
    body: "Compare properties, evaluate your options, and choose the investment that best fits your goals. With verified professionals and a streamlined process, you can complete your purchase with confidence and peace of mind.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=75",
    imageAlt: "House keys and realtor",
  },
] as const;

export function BuyersGuideCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function goTo(i: number) {
    const clamped = Math.max(0, Math.min(steps.length - 1, i));
    setActive(clamped);
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[clamped] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }

  return (
    <section className="w-full bg-brand-ink py-14 md:py-20">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <RevealOnScroll direction="left">
            <p className="font-ewangi text-[1.35rem] leading-tight text-white md:text-[2rem]">Buyer&apos;s Guide</p>
            <h2 className="font-ewangi font-bold text-[clamp(1.75rem,4vw,2.75rem)] leading-tight text-white">
              How to buy property in <span className="text-brand-teal">Mexico</span>
            </h2>
          </RevealOnScroll>

          <div className="hidden shrink-0 gap-3 sm:flex">
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
              aria-label="Previous step"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white transition enabled:hover:bg-white/20 disabled:opacity-30"
            >
              <ArrowLeft className="h-5 w-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              disabled={active === steps.length - 1}
              aria-label="Next step"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white transition enabled:hover:bg-white/20 disabled:opacity-30"
            >
              <ArrowRight className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {steps.map((step, i) => (
            <RevealOnScroll key={step.number} delay={i * 120} direction="up" className="w-full shrink-0 snap-start sm:w-115">
              <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_10px_28px_rgba(0,0,0,0.2)]">
                <div className="relative h-57.5 w-full">
                  <Image src={step.image} alt={step.imageAlt} fill sizes="(max-width: 640px) 100vw, 460px" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col gap-3 px-7 py-6">
                  <span className="font-ewangi text-[3.5rem] leading-none text-[#03a593]">{step.number}</span>
                  <h3 className="font-ewangi text-[1.5rem] font-bold leading-tight text-[#012824]">{step.title}</h3>
                  <p className="font-ewangi text-[15px] leading-relaxed text-black/75">{step.body}</p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        {/* Dot pagination */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {steps.map((step, i) => (
            <button
              key={step.number}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to step ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all",
                active === i ? "w-6.5 bg-brand-teal" : "w-2 bg-white/25 hover:bg-white/40"
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

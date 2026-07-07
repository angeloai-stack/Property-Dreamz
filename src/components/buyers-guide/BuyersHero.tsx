// Buyer's Guide hero — Figma nodes 1377:18059-1378:18780 ("Buyers" root frame, hero band).
import Image from "next/image";
import Link from "next/link";
import { Check, DollarSign, Plane, Play, TrendingUp, ArrowRight } from "lucide-react";
import { Container, RevealOnScroll } from "@/components/ui";

const checklist = ["100% verified developments", "Transparent information", "Expert guidance in your language"] as const;

const benefits = [
  { icon: DollarSign, title: "Unbeatable lifestyle", body: "Enjoy beautiful beaches, great weather, and vibrant culture." },
  { icon: TrendingUp, title: "Strong Investment Potential", body: "High demand in top coastal and city destinations." },
  { icon: DollarSign, title: "Affordable opportunities", body: "Luxury and value options that fit your goals." },
  { icon: Plane, title: "Easy access from USA", body: "Close, convenient, and buyer-friendly." },
] as const;

export function BuyersHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#eaedf0]">
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=75"
        alt="Modern residential development in Mexico"
        fill
        priority
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#eaedf0] via-[#eaedf0]/80 to-[#eaedf0]/40" />

      <Container className="relative z-10 grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_442px] lg:items-start lg:gap-16">
        <RevealOnScroll direction="left">
          <span className="mb-5 inline-flex w-fit items-center rounded-full bg-brand-teal/20 px-4 py-1.5 font-ewangi text-label font-semibold text-brand-emerald">
            Buyer&apos;s guide
          </span>
          <h1 className="font-ewangi text-[clamp(2rem,4.2vw,2.75rem)] font-bold leading-tight text-brand-ink">
            Your journey to owning in Mexico, made simple.
          </h1>
          <p className="mt-4 max-w-md font-ewangi text-[15px] leading-relaxed text-brand-ink/65">
            We help international buyers explore verified properties with confidence, clarity, and full support
            every step of the way.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {checklist.map((item) => (
              <span key={item} className="flex items-center gap-2 font-ewangi text-[13px] font-semibold text-brand-ink/80">
                <Check className="h-4 w-4 text-brand-teal-dark" strokeWidth={2.5} />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 rounded-full bg-brand-teal px-7 py-3 font-ewangi text-[15px] font-semibold text-brand-ink transition hover:bg-brand-teal-dark"
            >
              Explore properties <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a
              href="#how-we-help"
              className="inline-flex items-center gap-2 rounded-full bg-brand-ink/8 px-7 py-3 font-ewangi text-[15px] font-semibold text-brand-ink transition hover:bg-brand-ink/15"
            >
              How it works <Play className="h-3.5 w-3.5" strokeWidth={2.5} />
            </a>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="right" delay={120} className="rounded-2xl bg-white/85 p-7 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-sm">
          <h2 className="font-ewangi text-[1.15rem] font-bold text-brand-emerald">Why buy in Mexico?</h2>
          <div className="mt-4 h-px w-full bg-brand-ink/10" />
          <div className="mt-5 space-y-5">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-3">
                <benefit.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal-dark" strokeWidth={2} />
                <div>
                  <p className="font-ewangi text-[15px] font-bold text-brand-ink">{benefit.title}</p>
                  <p className="font-ewangi text-[13px] leading-snug text-brand-ink/55">{benefit.body}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

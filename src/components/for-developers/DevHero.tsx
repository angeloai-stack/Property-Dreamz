// For Developers hero — Figma nodes 1423:19365-1423:20103.
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Container, RevealOnScroll } from "@/components/ui";
import { DevQuickForm } from "./DevQuickForm";
import { TrustChecklist } from "@/components/shared/TrustChecklist";

export function DevHero() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-ink">
      <Image
        src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=75"
        alt="Aerial view of a certified residential development"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-r from-brand-ink via-brand-ink/70 to-brand-ink/20" />

      <Container className="relative z-10 grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_442px] lg:items-start lg:gap-16">
        <RevealOnScroll direction="left">
          <span className="mb-5 inline-flex w-fit items-center rounded-full bg-brand-teal/20 px-4 py-1.5 font-ewangi text-label font-semibold text-brand-teal">
            For developers
          </span>
          <h1 className="font-ewangi text-[clamp(2rem,4.2vw,2.75rem)] font-bold leading-tight text-white">
            We help you build visibility, trust, and qualified leads.
          </h1>
          <p className="mt-4 max-w-md font-ewangi text-[15px] leading-relaxed text-white/70">
            Property Dreamz® is the all-in-one platform that helps developers showcase their projects, gain the
            trust of international buyers, and close more sales.
          </p>

          <TrustChecklist className="mt-6" />

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 rounded-full bg-brand-teal px-7 py-3 font-ewangi text-[15px] font-semibold text-brand-ink transition hover:bg-brand-teal-dark"
            >
              Verified developments <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3 font-ewangi text-[15px] font-semibold text-white transition hover:bg-white/20"
            >
              How it works <Play className="h-3.5 w-3.5" strokeWidth={2.5} />
            </a>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="right" delay={120}>
          <DevQuickForm />
        </RevealOnScroll>
      </Container>
    </section>
  );
}

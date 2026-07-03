// Closing CTA banner with photo background — Figma nodes 1369:17561-17570.
import Image from "next/image";
import Link from "next/link";
import { Container, RevealOnScroll } from "@/components/ui";

export function AboutCta() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      <Image
        src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1600&q=80"
        alt="Sunset over the Baja California coastline"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-brand-ink/60" />

      <Container className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <RevealOnScroll direction="left">
          <h2 className="max-w-md font-ewangi text-[clamp(1.6rem,3vw,2.1rem)] font-bold leading-tight text-white">
            Ready to explore Mexico&apos;s verified developments?
          </h2>
          <p className="mt-3 font-ewangi text-[15px] text-white/75">Discover opportunities with confidence.</p>
        </RevealOnScroll>

        <RevealOnScroll direction="right" delay={120} className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/properties"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-8 py-3 font-ewangi text-[15px] font-semibold text-white transition hover:bg-white hover:text-brand-ink"
          >
            Explore properties
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-teal px-8 py-3 font-ewangi text-[15px] font-semibold text-brand-ink transition hover:bg-brand-teal-dark"
          >
            Talk to an advisor
          </Link>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

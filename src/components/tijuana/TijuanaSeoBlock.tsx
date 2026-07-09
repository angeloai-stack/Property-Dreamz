// SEO text block with trust stats — Figma: "Section / Baja California SEO Text" (Tijuana copy).
import Image from "next/image";
import { RevealOnScroll } from "@/components/ui";

const stats = [
  { value: "47+", label: "Certified Developments" },
  { value: "3", label: "Cities Covered" },
  { value: "100%", label: "Title Verified" },
] as const;

export function TijuanaSeoBlock() {
  return (
    <section className="w-full bg-[#f4f8f6] py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:px-12 lg:grid-cols-[1fr_480px] lg:items-center lg:gap-16">
        <RevealOnScroll direction="left">
          <div className="flex gap-5">
            <span className="mt-1.5 w-1.5 shrink-0 self-stretch rounded-[2px] bg-brand-teal" aria-hidden="true" />
            <div className="space-y-4">
              <p className="font-ewangi text-[11px] font-bold uppercase tracking-[0.14em] text-brand-teal">
                Certified developments · Tijuana, Mexico
              </p>
              <h2 className="font-ewangi text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight text-brand-pine">
                Homes for sale in Tijuana
              </h2>
              <p className="max-w-xl font-ewangi text-[15px] leading-[1.75] text-[#3a4a44]">
                Tijuana real estate offers American buyers something rare: world-class Pacific Ocean views,
                modern resort-style developments, and prices that are a fraction of comparable properties in
                San Diego or Los Angeles — just 20 minutes across the border. Whether you&apos;re looking for a
                luxury oceanfront condo at a full-service marina, a master-planned gated community with golf,
                or a coastal home along the scenic Tijuana–Ensenada corridor, the Tijuana market delivers. For
                U.S. and Canadian buyers, the proximity is unbeatable: you can drive to Tijuana real estate
                from downtown San Diego in under 30 minutes, then be back in California the same day. The
                developments featured below represent the most established and trusted options in the greater
                Tijuana coastal zone — each one carefully vetted for legal clarity, developer integrity, and
                long-term value.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="min-w-40 flex-1 rounded-2xl bg-white px-5 py-4 shadow-subtle">
                    <p className="font-ewangi text-[1.6rem] font-bold text-brand-pine">{stat.value}</p>
                    <p className="font-ewangi text-[12px] text-brand-ink/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="right" delay={120} className="relative">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-[24px] shadow-[0_10px_32px_rgba(0,0,0,0.14)]">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
              alt="Modern residential development in Tijuana, Mexico"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 px-5 py-3 shadow-subtle backdrop-blur-sm">
              <p className="font-ewangi text-[14px] font-bold text-brand-pine">Pacific Coastline</p>
              <p className="font-ewangi text-[12px] text-brand-ink/50">Tijuana, Baja California</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

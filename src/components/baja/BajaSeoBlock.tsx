// SEO text block with trust stats — Figma: "Section / Baja California SEO Text".
import Image from "next/image";
import { RevealOnScroll } from "@/components/ui";

const stats = [
  { value: "47+", label: "Certified Developments" },
  { value: "3", label: "Cities Covered" },
  { value: "100%", label: "Title Verified" },
] as const;

export function BajaSeoBlock() {
  return (
    <section className="w-full bg-[#f4f8f6] py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:px-12 lg:grid-cols-[1fr_480px] lg:items-center lg:gap-16">
        <RevealOnScroll direction="left">
          <div className="flex gap-5">
            <span className="mt-1.5 w-1.5 shrink-0 self-stretch rounded-[2px] bg-brand-teal" aria-hidden="true" />
            <div className="space-y-4">
              <p className="font-ewangi text-[11px] font-bold uppercase tracking-[0.14em] text-brand-teal">
                Certified developments · Baja California, Mexico
              </p>
              <h2 className="font-ewangi text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight text-brand-pine">
                Baja California Real Estate
              </h2>
              <p className="max-w-xl font-ewangi text-[15px] leading-[1.75] text-[#3a4a44]">
                Baja California is one of the most sought-after destinations for Americans and Canadians
                buying property in Mexico. With its stunning Pacific coastline, thriving border economy,
                and proximity to San Diego, cities like Tijuana, Ensenada, and Rosarito offer exceptional
                value for buyers at every budget. Whether you are searching for a beachfront condo, a
                gated community home, or a vacation retreat, Baja California real estate delivers
                world-class lifestyle options backed by a strong legal framework for foreign ownership.
                All developments listed on Property Dreamz are certified — every title has been searched,
                every developer background-checked, and every HOA reserve audited before a single property
                goes live on our platform. Investing in Baja California real estate has never been more
                transparent or secure.
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
              src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80"
              alt="Pacific coastline in Baja California, Mexico"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 px-5 py-3 shadow-subtle backdrop-blur-sm">
              <p className="font-ewangi text-[14px] font-bold text-brand-pine">Pacific Coastline</p>
              <p className="font-ewangi text-[12px] text-brand-ink/50">Baja California, Mexico</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

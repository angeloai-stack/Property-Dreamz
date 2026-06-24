// Horizontally scrollable pill strip of popular destination cities that link to the explore map.
import Link from "next/link";
import { Container } from "@/components/ui";

const destinations = [
  { label: "Tijuana", slug: "Tijuana" },
  { label: "Rosarito", slug: "Rosarito" },
  { label: "Ensenada", slug: "Ensenada" },
  // Slugs use + instead of %20 to keep URLs readable in the browser bar
  { label: "Boga Telchac", slug: "Boga+Telchac" },
  { label: "Yucatán", slug: "Yucatan" },
  { label: "Isla Mujeres", slug: "Isla+Mujeres" },
  { label: "Costa Mujeres", slug: "Costa+Mujeres" },
  { label: "Punta de Mita", slug: "Punta+de+Mita" },
  { label: "Nayarit", slug: "Nayarit" },
  { label: "Los Cabos", slug: "Los+Cabos" },
  { label: "Puerto Vallarta", slug: "Puerto+Vallarta" },
] as const;

export function DestinationsStrip() {
  return (
    <section className="w-full bg-brand-ink py-8 md:py-10">
      <Container>
        <p className="mb-5 font-ewangi text-label font-semibold uppercase tracking-widest text-brand-emerald/70">
          +2,369 buyers active right now
        </p>
        <div className="relative">
          <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden">
            {destinations.map((d) => (
              <Link
                key={d.slug}
                href={`/explore-map?q=${d.slug}`}
                className="shrink-0 rounded-full border border-brand-emerald/30 px-4 py-1.5 font-ewangi text-label font-semibold text-brand-paper/70 transition hover:border-brand-emerald hover:text-brand-emerald"
              >
                {d.label}
              </Link>
            ))}
          </div>
          {/* Fade mask hints that the row is scrollable without a visible scrollbar. */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-brand-ink to-transparent" />
        </div>
      </Container>
    </section>
  );
}

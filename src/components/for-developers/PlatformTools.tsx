// "All the tools. One powerful platform." 5-card grid — Figma nodes 1423:20106-20126.
import Image from "next/image";
import { Container, RevealOnScroll } from "@/components/ui";

const cards = [
  {
    title: "360° tours & media",
    body: "Immersive 360° tours, high-quality photos, videos and floor plans that bring your development to life.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=75",
    alt: "Aerial view of a residential development",
  },
  {
    title: "Qualified leads",
    body: "We generate and deliver high-intent leads from international buyers actively looking to invest in Mexico.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=75",
    alt: "Team reviewing buyer leads",
  },
  {
    title: "CMRE Certification",
    body: "Stand out with the CMRE certification badge and build instant trust with international buyers.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=75",
    alt: "Modern condominium tower",
  },
  {
    title: "Verifiable information",
    body: "Buyers have everything they need: documents, legal info, amenities, pricing and more — all verified and accessible.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=75",
    alt: "Legal documents and paperwork",
  },
  {
    title: "Marketing & exposure",
    body: "We promote your development across digital channels, putting it in front of thousands of potential buyers.",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=700&q=75",
    alt: "Residential community from above",
  },
] as const;

export function PlatformTools() {
  return (
    <section className="w-full bg-white py-14 md:py-20">
      <Container>
        <RevealOnScroll className="mb-9 text-center">
          <span className="inline-flex items-center rounded-full bg-brand-teal/15 px-4 py-1.5 font-ewangi text-label font-semibold text-brand-emerald">
            Everything you need to succeed
          </span>
          <h2 className="mx-auto mt-4 max-w-lg font-ewangi text-[clamp(1.7rem,3.2vw,2.25rem)] font-bold leading-tight text-brand-ink">
            All the tools. One powerful platform.
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map((card, i) => (
            <RevealOnScroll key={card.title} delay={i * 80} direction="up">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
                <div className="flex flex-1 flex-col gap-2 px-5 pt-5 pb-3">
                  <h3 className="font-ewangi text-[1.05rem] font-bold leading-tight text-brand-teal-dark">{card.title}</h3>
                  <p className="font-ewangi text-[12px] leading-relaxed text-brand-ink/60">{card.body}</p>
                </div>
                <div className="relative h-28 w-full">
                  <Image src={card.image} alt={card.alt} fill sizes="(max-width: 1024px) 50vw, 20vw" className="object-cover" />
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

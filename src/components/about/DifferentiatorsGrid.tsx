// "What makes us different" 4-card grid — Figma nodes 1366:17549-17552.
import Image from "next/image";
import { Container, RevealOnScroll } from "@/components/ui";

const cards = [
  {
    title: "Verified Developments",
    body: "Every listing goes through a review process before being featured on our platform.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=75",
    alt: "Modern residential building facade",
  },
  {
    title: "Buyer-Focused Platform",
    body: "Built specifically for international buyers with clear information and local expertise.",
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=700&q=75",
    alt: "Couple reviewing a property together",
  },
  {
    title: "Direct Developer Access",
    body: "Connect directly with qualified developers. No middlemen, no confusion.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=75",
    alt: "Aerial view of a residential development",
  },
  {
    title: "Trusted Information",
    body: "Clear details, transparent documentation, and reliable guidance at every step.",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=700&q=75",
    alt: "Aerial view of coastal terrain",
  },
] as const;

export function DifferentiatorsGrid() {
  return (
    <section className="w-full bg-white pb-14 md:pb-20">
      <Container>
        <RevealOnScroll className="mb-9 text-center">
          <span className="inline-flex items-center rounded-full bg-brand-teal/15 px-4 py-1.5 font-ewangi text-label font-semibold text-brand-emerald">
            What makes us different
          </span>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <RevealOnScroll key={card.title} delay={i * 100} direction="up">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
                <div className="flex flex-1 flex-col gap-2 px-6 pt-6 pb-4">
                  <h3 className="font-ewangi text-[1.2rem] font-bold leading-tight text-brand-teal-dark">{card.title}</h3>
                  <p className="font-ewangi text-[13px] leading-relaxed text-brand-ink/60">{card.body}</p>
                </div>
                <div className="relative h-28 w-full">
                  <Image src={card.image} alt={card.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

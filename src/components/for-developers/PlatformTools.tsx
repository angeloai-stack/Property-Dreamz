// "All the tools. One powerful platform." 5-card grid — Figma nodes 1423:20106-20126.
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container, RevealOnScroll } from "@/components/ui";

// Images stay in code, paired by index with the translated title/body/alt copy.
const images = [
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=75",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=75",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=75",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=75",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=700&q=75",
] as const;

type Card = { title: string; body: string; alt: string };

export function PlatformTools() {
  const t = useTranslations("forDevelopers.platformTools");
  const cards = t.raw("cards") as Card[];

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <Container>
        <RevealOnScroll className="mb-9 text-center">
          <span className="inline-flex items-center rounded-full bg-brand-teal/15 px-4 py-1.5 font-ewangi text-label font-semibold text-brand-emerald">
            {t("badge")}
          </span>
          <h2 className="mx-auto mt-4 max-w-lg font-ewangi text-[clamp(1.7rem,3.2vw,2.25rem)] font-bold leading-tight text-brand-ink">
            {t("heading")}
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
                  <Image src={images[i]} alt={card.alt} fill sizes="(max-width: 1024px) 50vw, 20vw" className="object-cover" />
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

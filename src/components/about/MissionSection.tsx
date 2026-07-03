// "Our mission" centered headline + 3 value cards — Figma nodes 1369:17531-17559.
import { Eye, ShieldCheck, Star } from "lucide-react";
import { Container, RevealOnScroll } from "@/components/ui";

const values = [
  { icon: Eye, title: "Transparency", body: "We believe in clear information and open communication." },
  { icon: ShieldCheck, title: "Trust", body: "We verify, we review, and we stand behind what we promote." },
  { icon: Star, title: "Opportunity", body: "We connect buyers with incredible places and real possibilities." },
] as const;

export function MissionSection() {
  return (
    <section className="w-full bg-white py-14 md:py-20">
      <Container className="flex flex-col items-center text-center">
        <RevealOnScroll className="flex flex-col items-center">
          <span className="mb-4 inline-flex items-center rounded-full bg-brand-teal/15 px-4 py-1.5 font-ewangi text-label font-semibold text-brand-emerald">
            Our mission
          </span>
          <h2 className="max-w-3xl font-ewangi text-[clamp(1.5rem,3vw,2.1rem)] font-bold leading-tight text-brand-ink">
            Making real estate in Mexico easier to understand, safer to explore, and more accessible to international
            buyers.
          </h2>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {values.map((value, i) => (
            <RevealOnScroll key={value.title} delay={i * 100} direction="up" className="flex flex-col items-center">
              <value.icon className="h-8 w-8 text-brand-teal-dark" strokeWidth={1.75} />
              <p className="mt-3 font-ewangi text-[1.2rem] font-bold text-brand-teal-dark">{value.title}</p>
              <p className="mt-2 max-w-56 font-ewangi text-[14px] leading-relaxed text-brand-ink/60">{value.body}</p>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

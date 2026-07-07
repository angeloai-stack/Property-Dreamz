// "How we help buyers" 5-step process — Figma nodes 1379:18513-18565.
import { Building2, Handshake, MessageCircleQuestion, Search, ShieldCheck } from "lucide-react";
import { Container, RevealOnScroll } from "@/components/ui";

const steps = [
  { icon: Search, title: "Discover", body: "Explore verified properties that match your lifestyle and goals." },
  { icon: Building2, title: "Compare", body: "Easily compare developments, locations, prices, and amenities." },
  { icon: MessageCircleQuestion, title: "Get answers", body: "Our team and AI advisor (Dreamzy) provide clear answers in English." },
  { icon: Handshake, title: "Connect", body: "Speak directly with trusted developers or book a call with our advisors." },
  { icon: ShieldCheck, title: "Own with confidence", body: "We support you from due diligence to closing and beyond." },
] as const;

export function HowWeHelp() {
  return (
    <section id="how-we-help" className="w-full bg-[#028e7f] py-14 md:py-20">
      <Container>
        <RevealOnScroll className="text-center">
          <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 font-ewangi text-label font-semibold text-white">
            How we help buyers
          </span>
          <h2 className="mx-auto mt-4 max-w-xl font-ewangi text-[clamp(1.7rem,3.2vw,2.25rem)] font-bold leading-tight text-white">
            A better way to buy in Mexico
          </h2>
          <p className="mx-auto mt-3 max-w-lg font-ewangi text-[15px] text-white/75">
            We&apos;ve built a platform and process designed specifically for international buyers.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={120} className="mt-12">
          <div className="relative grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:flex lg:grid-cols-none lg:items-start lg:justify-between lg:gap-0">
            <div className="pointer-events-none absolute inset-x-0 top-8.5 hidden h-px bg-white/25 lg:block" aria-hidden="true" />
            {steps.map((step) => (
              <div key={step.title} className="relative flex flex-col items-center text-center lg:w-1/5 lg:px-2">
                <span className="relative z-10 flex h-17 w-17 shrink-0 items-center justify-center rounded-full bg-white text-brand-teal-dark">
                  <step.icon className="h-7 w-7" strokeWidth={2} />
                </span>
                <p className="mt-3 font-ewangi text-[1.05rem] font-bold text-white">{step.title}</p>
                <p className="mt-1.5 font-ewangi text-[13px] leading-snug text-white/70">{step.body}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

// "Simple steps to grow your sales" — Figma "steps developers", nodes 1423:19426-1424:20172.
import { ClipboardEdit, Handshake, MonitorSmartphone, ShieldCheck, Users } from "lucide-react";
import { Container, RevealOnScroll } from "@/components/ui";

const steps = [
  { icon: ClipboardEdit, title: "Submit your project", body: "Tell us about your development and upload key information." },
  { icon: ShieldCheck, title: "Get verified", body: "We review your documentation and certify your project." },
  { icon: MonitorSmartphone, title: "We build your showcase", body: "We create your premium listing with 360° tours and media." },
  { icon: Users, title: "We bring you leads", body: "We promote your development and deliver qualified leads." },
  { icon: Handshake, title: "You close more sales", body: "Connect with buyers and close with confidence." },
] as const;

export function DevSteps() {
  return (
    <section id="how-it-works" className="w-full bg-white pb-14 md:pb-20">
      <Container>
        <RevealOnScroll className="text-center">
          <span className="inline-flex items-center rounded-full bg-brand-teal/15 px-4 py-1.5 font-ewangi text-label font-semibold text-brand-emerald">
            How it works
          </span>
          <h2 className="mx-auto mt-4 max-w-lg font-ewangi text-[clamp(1.7rem,3.2vw,2.25rem)] font-bold leading-tight text-brand-ink">
            Simple steps to grow your sales
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={120} className="mt-12">
          <div className="relative grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:flex lg:grid-cols-none lg:items-start lg:justify-between lg:gap-0">
            <div className="pointer-events-none absolute inset-x-0 top-8.5 hidden h-px bg-brand-teal/30 lg:block" aria-hidden="true" />
            {steps.map((step) => (
              <div key={step.title} className="relative flex flex-col items-center text-center lg:w-1/5 lg:px-2">
                <span className="relative z-10 flex h-17 w-17 shrink-0 items-center justify-center rounded-full bg-brand-teal text-brand-ink">
                  <step.icon className="h-7 w-7" strokeWidth={2} />
                </span>
                <p className="mt-3 font-ewangi text-[1rem] font-bold text-brand-ink">{step.title}</p>
                <p className="mt-1.5 font-ewangi text-[13px] leading-snug text-brand-ink/60">{step.body}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

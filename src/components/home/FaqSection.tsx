"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Container, RevealOnScroll } from "@/components/ui";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Can Americans legally own property in Mexico?",
    a: "Yes — through a bank trust called a Fideicomiso, U.S. citizens can hold full ownership rights to property in Mexico's restricted zones (within 50 km of the coast or 100 km of borders). Outside those zones, direct title ownership is available.",
  },
  {
    q: "What exactly is a Fideicomiso?",
    a: "A Fideicomiso is a Mexican bank trust that holds title on your behalf. You retain all ownership rights — sell, lease, remodel, or pass to heirs — while the bank acts as trustee in name only. It renews every 50 years.",
  },
  {
    q: "How does Property Dreamz verify each property?",
    a: "Every development passes a 4-point review: title search, developer background check, HOA financial audit, and on-site inspection. Only developments that pass all four gates earn the Certified badge.",
  },
  {
    q: "What does CMRE certification mean?",
    a: "CMRE (Certified Mexican Real Estate) is the independent body that validates our review process. Their seal confirms Property Dreamz meets the highest professional standards for cross-border real estate brokerage.",
  },
  {
    q: "How long does the buying process take?",
    a: "From signed offer to recorded deed, most buyers close in 60–90 days. Fideicomiso approval from the Mexican Ministry of Foreign Affairs takes 30–45 days and is typically the longest single step.",
  },
  {
    q: "Are prices listed in USD?",
    a: "Yes. Every listing is priced in U.S. dollars and our closing coordinators work exclusively in USD. We also partner with U.S.-based lenders who offer financing for Mexico properties.",
  },
];

function FaqItem({
  q,
  a,
  index,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={cn("border-b transition-colors duration-200", isOpen ? "border-brand-teal/40" : "border-brand-ink/10")}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="flex items-baseline gap-3">
          <span className="shrink-0 font-ewangi text-[0.78rem] font-semibold tabular-nums text-brand-teal/50">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={cn(
              "font-ewangi text-[1rem] font-semibold leading-snug transition-colors duration-200 md:text-[1.075rem]",
              isOpen ? "text-brand-teal" : "text-brand-ink"
            )}
          >
            {q}
          </span>
        </span>

        <span
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300",
            isOpen ? "rotate-45 bg-brand-teal text-brand-ink" : "bg-brand-ink/[0.07] text-brand-ink"
          )}
        >
          <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
        </span>
      </button>

      {/* CSS grid row trick: height transitions from 0 to auto without JS measurement */}
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="pb-5 pl-8 font-body text-[0.9rem] leading-relaxed text-brand-ink/60">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  function toggle(i: number) {
    setOpen((prev) => (prev === i ? null : i));
  }

  return (
    <section className="w-full bg-brand-paper py-14 md:py-24">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">

          {/* Left — headline, sticky on desktop */}
          <RevealOnScroll className="lg:w-72 lg:shrink-0" direction="left">
            <div className="lg:sticky lg:top-28">
              <span className="mb-5 inline-block rounded-full bg-brand-teal/15 px-4 py-1.5 font-ewangi text-label font-semibold text-brand-teal">
                FAQ
              </span>
              <h2 className="font-ewangi font-bold text-[clamp(2rem,3.5vw,2.75rem)] leading-tight text-brand-ink">
                Have questions?{" "}
                <span className="text-brand-emerald">We have answers.</span>
              </h2>
              <p className="mt-4 font-body text-sm leading-relaxed text-brand-muted">
                Everything you need to know before buying property in Mexico — from legal ownership to closing day.
              </p>
              <a
                href="/buyers-guide"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-pine px-5 py-2.5 font-ewangi text-label font-semibold text-brand-paper transition-colors duration-200 hover:bg-brand-emerald"
              >
                Full Buyer&apos;s Guide →
              </a>
            </div>
          </RevealOnScroll>

          {/* Right — accordion */}
          <RevealOnScroll className="min-w-0 flex-1" delay={120} direction="right">
            <div>
              {faqs.map((faq, i) => (
                <FaqItem
                  key={faq.q}
                  index={i}
                  q={faq.q}
                  a={faq.a}
                  isOpen={open === i}
                  onToggle={() => toggle(i)}
                />
              ))}
            </div>
          </RevealOnScroll>

        </div>
      </Container>
    </section>
  );
}

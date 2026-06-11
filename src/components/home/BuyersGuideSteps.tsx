import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Choose your location",
    body: "Select your location to view developers, services, and certification information relevant to your region. This helps us provide a more personalized experience and ensure you see the most accurate content based on local requirements and availability.",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=75",
    imageAlt: "Mexico city skyline",
    cta: { label: "Explore the map", href: "/explore-map" },
  },
  {
    number: "02",
    title: "Set up your Fideicomiso",
    body: "Whether you're purchasing property or securing long-term ownership rights in Mexico's restricted zones, our network of verified professionals can help you establish your fideicomiso efficiently and with peace of mind. Navigate the process with expert guidance and trusted support from start to finish.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=75",
    imageAlt: "Business professionals shaking hands",
    cta: { label: "Learn about fideicomiso", href: "/buyers-guide" },
  },
  {
    number: "03",
    title: "Decide and Purchase",
    body: "Compare properties, evaluate your options, and choose the investment that best fits your goals. With verified professionals and a streamlined process, you can complete your purchase with confidence and peace of mind.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=75",
    imageAlt: "House keys and contract",
    cta: { label: "Browse properties", href: "/properties" },
  },
] as const;

export function BuyersGuideSteps() {
  return (
    <section className="w-full bg-brand-paper py-16 md:py-20">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 font-ewangi text-label font-semibold uppercase tracking-widest text-brand-emerald">
            Buyer&apos;s Guide
          </p>
          <h2 className="font-ibrand text-title leading-tight text-brand-ink">
            How to buy property in Mexico
          </h2>
        </div>

        <div className="space-y-16 md:space-y-20">
          {steps.map((step, i) => {
            const isEven = i % 2 === 1;
            return (
              <div
                key={step.number}
                className={cn(
                  "flex flex-col gap-8 md:grid md:grid-cols-2 md:items-center md:gap-12",
                  isEven && "md:[&>*:first-child]:order-2"
                )}
              >
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="space-y-5">
                  <span className="font-ibrand text-[5rem] font-bold leading-none text-brand-emerald/15 select-none">
                    {step.number}
                  </span>
                  <h3 className="font-ibrand text-title leading-snug text-brand-ink">
                    {step.title}
                  </h3>
                  <p className="font-body text-body leading-relaxed text-brand-muted">
                    {step.body}
                  </p>
                  <Link
                    href={step.cta.href}
                    className="inline-flex items-center gap-2 font-ewangi text-label font-semibold text-brand-emerald transition hover:text-brand-ink"
                  >
                    {step.cta.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

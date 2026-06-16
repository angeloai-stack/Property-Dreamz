import Image from "next/image";
import { MapPin, Building2, Sofa, BedDouble } from "lucide-react";
import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";

function BrandMark() {
  return (
    <svg width="69" height="57" viewBox="0 0 69 57" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.113861 27.7515L29.6441 56.3556C31.2918 57.9469 33.6025 56.416 33.6092 53.7235L33.636 29.5443C33.636 29.4234 33.5958 29.316 33.5221 29.2489L3.99185 0.644778C2.3442 -0.946575 0.0267909 0.591062 0.0267909 3.27689L0 27.4561C0 27.5702 0.0401864 27.6844 0.113861 27.7515Z" fill="#3AD3C1"/>
      <path d="M68.8861 27.7514L39.3559 56.3555C37.7082 57.9468 35.3975 56.4159 35.3908 53.7234L35.364 29.5442C35.364 29.4233 35.4042 29.3159 35.4779 29.2488L65.0082 0.644682C66.6558 -0.953386 68.9732 0.584251 68.9732 3.27679L69 27.456C69 27.5701 68.9598 27.6843 68.8861 27.7514Z" fill="#3AD3C1"/>
    </svg>
  );
}

const steps = [
  {
    number: "1",
    title: "Choose your location",
    body: "Select your location to view developers, services, and certification information relevant to your region. This helps us provide a more personalized experience and ensure you see the most accurate content based on local requirements and availability.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=75",
    imageAlt: "Mexico city skyline",
    location: "Tijuana",
    price: "$653,894.79",
  },
  {
    number: "2",
    title: "Set up your Fideicomiso",
    body: "Whether you're purchasing property or securing long-term ownership rights in Mexico's restricted zones, our network of verified professionals can help you establish your fideicomiso efficiently and with peace of mind.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=75",
    imageAlt: "Business professionals shaking hands",
    location: "Rosarito",
    price: "$420,000.00",
  },
  {
    number: "3",
    title: "Decide and Purchase",
    body: "Compare properties, evaluate your options, and choose the investment that best fits your goals. With verified professionals and a streamlined process, you can complete your purchase with confidence and peace of mind.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=75",
    imageAlt: "House keys and realtor",
    location: "Puerto Nuevo",
    price: "$890,500.00",
  },
];

export function BuyersGuideSteps() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1e1e1e] py-16 md:py-20">

      {/* Background brand marks — Figma: radial-repeat vectors gradient(#000000 → #026559)
          right side near step 1, left side near step 3 */}
      <div className="pointer-events-none absolute -right-16 top-32 select-none">
        <Image
          src="/brand/property-dreamz-logo-circle.png"
          alt=""
          width={420}
          height={420}
          className="filter-[brightness(0)_saturate(100%)_invert(18%)_sepia(60%)_saturate(600%)_hue-rotate(140deg)]"
        />
      </div>
      <div className="pointer-events-none absolute -left-16 bottom-24 select-none">
        <Image
          src="/brand/property-dreamz-logo-circle.png"
          alt=""
          width={420}
          height={420}
          className="filter-[brightness(0)_saturate(100%)_invert(18%)_sepia(60%)_saturate(600%)_hue-rotate(140deg)]"
        />
      </div>

      <Container className="relative z-10">
        {/* Section header — Figma: Ewangi 34px label + 64px headline, white */}
        <div className="mb-8">
          <p className="font-ewangi text-[2.125rem] leading-tight text-white">
            Buyer&apos;s Guide
          </p>
          <h2 className="font-ewangi font-bold text-[clamp(2.25rem,4.5vw,4rem)] leading-tight text-white">
            How to buy property in <span className="text-brand-teal">Mexico</span>
          </h2>
        </div>

        {/* Step cards */}
        <div className="space-y-4">
          {steps.map((step, i) => {
            const isEven = i % 2 === 1;
            return (
              <div key={step.number} className="relative rounded-[35px] bg-[#fcfdff] px-6 py-6 lg:px-8 lg:py-7">
                {/* Brand mark decorator — top left */}
                <div className="absolute -top-5 left-8 flex gap-1">
                  <BrandMark />
                  <BrandMark />
                </div>

                <div
                  className={cn(
                    "flex flex-col gap-6 md:grid md:items-center md:gap-8",
                    "md:grid-cols-[1fr_1fr]",
                    isEven && "md:[direction:rtl] *:[direction:ltr]!"
                  )}
                >
                  {/* Text content — always first in DOM = left on odd steps */}
                  <div className="space-y-3">
                    <span className="block font-ewangi text-[4rem] leading-none text-brand-teal">
                      {step.number}
                    </span>
                    <h3 className="font-ewangi font-bold text-[1.75rem] leading-tight text-[#002823]">
                      {step.title}
                    </h3>
                    <p className="font-ewangi text-[15px] leading-relaxed text-black/80">
                      {step.body}
                    </p>
                  </div>

                  {/* Image with overlays */}
                  <div className="relative">
                    <div className="relative aspect-4/3 overflow-hidden rounded-[27px]">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 45vw"
                        className="object-cover"
                      />

                      {/* Location label — top right */}
                      <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 backdrop-blur-sm">
                        <MapPin className="h-3.5 w-3.5 text-brand-teal" strokeWidth={2} />
                        <span className="font-ewangi text-[13px] font-semibold text-brand-ink">{step.location}</span>
                      </div>

                      {/* Property type icons — left side */}
                      <div className="absolute left-3 top-1/2 flex -translate-y-1/2 flex-col gap-2">
                        {[Building2, Sofa, BedDouble].map((Icon, idx) => (
                          <div key={idx} className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-teal">
                            <Icon className="h-4 w-4 text-white" strokeWidth={1.5} />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price badge */}
                    <div className="absolute bottom-3 right-3 rounded-[9px] bg-brand-teal px-3 py-1.5">
                      <span className="font-ewangi font-semibold text-xl text-white">{step.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

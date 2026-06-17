import Image from "next/image";
import { MapPin, Building2, Sofa, BedDouble } from "lucide-react";
import { Container, RevealOnScroll } from "@/components/ui";
import { cn } from "@/lib/utils";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";
const LOGO_SECTION_BG = `${CLD}/Logos_Property_D_Variante_2_mvzi3l`;

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
    <section className="relative w-full overflow-hidden bg-[#1e1e1e] py-8 md:py-20">

      {/* Background logo decorators — top-right and bottom-left, natural colors */}
      <div className="pointer-events-none absolute -right-22.5 -top-10 select-none w-45 md:-right-45.5 md:w-91">
        <Image
          src={LOGO_SECTION_BG}
          alt=""
          width={364}
          height={123}
          className="h-auto w-full object-contain"
        />
      </div>
      <div className="pointer-events-none absolute -left-22.5 -bottom-6 select-none w-45 md:-left-45.5 md:w-91">
        <Image
          src={LOGO_SECTION_BG}
          alt=""
          width={364}
          height={123}
          className="h-auto w-full object-contain"
        />
      </div>

      <Container className="relative z-10">
        {/* Section header */}
        <RevealOnScroll>
        <div className="mb-4 md:mb-8">
          <p className="font-ewangi text-[1.35rem] leading-tight text-white md:text-[2.125rem]">
            Buyer&apos;s Guide
          </p>
          <h2 className="font-ewangi font-bold text-[clamp(1.75rem,4.5vw,4rem)] leading-tight text-white">
            How to buy property in <span className="text-brand-teal">Mexico</span>
          </h2>
        </div>
        </RevealOnScroll>

        {/* Step cards */}
        <div className="space-y-6 md:space-y-8">
          {steps.map((step, i) => {
            const isEven = i % 2 === 1;
            return (
              <RevealOnScroll key={step.number} delay={i * 150}>
              <div
                className="relative mx-3 rounded-[2.5rem] bg-[#fcfdff] px-4 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:mx-16 md:rounded-[3.5rem] lg:px-8 lg:py-7"
              >
                {/* BrandMark decorator — top left, bleeds above the card */}
                <div className={cn(
                  "absolute -top-4 md:-top-5",
                  isEven ? "right-6 md:right-8" : "left-6 md:left-8"
                )}>
                  <BrandMark />
                </div>

                <div
                  className={cn(
                    "relative z-10 flex flex-col gap-4 md:grid md:items-center md:gap-8",
                    "md:grid-cols-[1fr_1fr]",
                    isEven && "md:[direction:rtl] *:[direction:ltr]!"
                  )}
                >
                  {/* Text content */}
                  <div className="space-y-2 md:space-y-3">
                    <span className="block font-ewangi text-[2.5rem] leading-none text-brand-teal md:text-[4rem]">
                      {step.number}
                    </span>
                    <h3 className="font-ewangi font-bold text-[1.2rem] leading-tight text-[#002823] md:text-[1.75rem]">
                      {step.title}
                    </h3>
                    <p className="font-ewangi text-[15px] leading-relaxed text-black/80">
                      {step.body}
                    </p>
                  </div>

                  {/* Image with overlays */}
                  <div className="relative">
                    <div className="relative aspect-4/3 overflow-hidden rounded-2xl md:rounded-[27px]">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 45vw"
                        className="object-cover"
                      />

                      {/* Location label */}
                      <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 backdrop-blur-sm">
                        <MapPin className="h-3.5 w-3.5 text-brand-teal" strokeWidth={2} />
                        <span className="font-ewangi text-[13px] font-semibold text-brand-ink">{step.location}</span>
                      </div>

                      {/* Property type icons */}
                      <div className="absolute left-3 top-1/2 flex -translate-y-1/2 flex-col gap-2">
                        {[Building2, Sofa, BedDouble].map((Icon, idx) => (
                          <div key={idx} className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-teal">
                            <Icon className="h-4 w-4 text-white" strokeWidth={1.5} />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price badge */}
                    <div className="absolute bottom-3 right-3 rounded-[9px] bg-brand-teal px-2.5 py-1">
                      <span className="font-ewangi font-semibold text-sm text-white md:text-xl">{step.price}</span>
                    </div>
                  </div>
                </div>
              </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

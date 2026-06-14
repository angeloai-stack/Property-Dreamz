import Image from "next/image";
import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";

function Asterisk() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <line x1="13" y1="1"  x2="13" y2="25" stroke="#39d3c0" strokeWidth="2" strokeLinecap="round" />
      <line x1="1"  y1="13" x2="25" y2="13" stroke="#39d3c0" strokeWidth="2" strokeLinecap="round" />
      <line x1="4"  y1="4"  x2="22" y2="22" stroke="#39d3c0" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="4"  x2="4"  y2="22" stroke="#39d3c0" strokeWidth="2" strokeLinecap="round" />
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
    price: "$653,894",
  },
  {
    number: "2",
    title: "Set up your Fideicomiso",
    body: "Whether you're purchasing property or securing long-term ownership rights in Mexico's restricted zones, our network of verified professionals can help you establish your fideicomiso efficiently and with peace of mind.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=75",
    imageAlt: "Business professionals shaking hands",
    price: "$653,894",
  },
  {
    number: "3",
    title: "Decide and Purchase",
    body: "Compare properties, evaluate your options, and choose the investment that best fits your goals. With verified professionals and a streamlined process, you can complete your purchase with confidence and peace of mind.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=75",
    imageAlt: "House keys and realtor",
    price: "$653,894",
  },
] as const;

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
          className="[filter:brightness(0)_saturate(100%)_invert(18%)_sepia(60%)_saturate(600%)_hue-rotate(140deg)]"
        />
      </div>
      <div className="pointer-events-none absolute -left-16 bottom-24 select-none">
        <Image
          src="/brand/property-dreamz-logo-circle.png"
          alt=""
          width={420}
          height={420}
          className="[filter:brightness(0)_saturate(100%)_invert(18%)_sepia(60%)_saturate(600%)_hue-rotate(140deg)]"
        />
      </div>

      <Container className="relative z-10">
        {/* Section header — Figma: Ewangi 34px label + 64px headline, white */}
        <div className="mb-8">
          <p className="font-ewangi text-[2.125rem] leading-tight text-white">
            Buyer&apos;s Guide
          </p>
          <h2 className="font-ewangi text-[clamp(2.25rem,4.5vw,4rem)] leading-tight text-white">
            How to buy property in Mexico
          </h2>
        </div>

        {/* Step cards — Figma: rounded-[35px] bg-[#fcfdff], compact horizontal layout */}
        <div className="space-y-4">
          {steps.map((step, i) => {
            const isEven = i % 2 === 1;
            return (
              <div key={step.number} className="rounded-[35px] bg-[#fcfdff] px-4 py-4 lg:px-6 lg:py-5">
                {/* Asterisk decorators — Figma: 2× "Repetición radial" in #39d3c0 */}
                <div className="mb-3 flex items-center gap-2">
                  <Asterisk />
                  <Asterisk />
                </div>

                <div
                  className={cn(
                    "flex flex-col gap-6 md:grid md:items-center md:gap-8",
                    "md:grid-cols-[3fr_2fr]",
                    isEven && "md:[&>*:first-child]:order-2"
                  )}
                >
                  {/* Image + price badge */}
                  <div className="relative">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[27px]">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover"
                      />
                    </div>
                    {/* Price badge — Figma: #028e7f bg, white Ewangi 24px, r=9 */}
                    <div className="absolute bottom-3 right-3 rounded-[9px] bg-[#028e7f] px-3 py-1.5">
                      <span className="font-ewangi text-xl text-white">{step.price}</span>
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="space-y-2">
                    {/* Number — Figma: Ewangi 64px, #02a592 */}
                    <span className="block font-ewangi text-[3.5rem] leading-none text-[#02a592]">
                      {step.number}
                    </span>
                    {/* Title — Figma: Ewangi 34px, #002823 */}
                    <h3 className="font-ewangi text-[1.75rem] leading-tight text-[#002823]">
                      {step.title}
                    </h3>
                    {/* Body — Figma: Ewangi 15px, #000000 */}
                    <p className="font-ewangi text-[15px] leading-relaxed text-black">
                      {step.body}
                    </p>
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

// "Powered by certification" dark-teal band — Figma nodes 1366:17553-17567, 1369:17530.
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container, RevealOnScroll } from "@/components/ui";

const checklist = [
  "Legal & title review",
  "Financial & regulatory compliance",
  "Developer background verification",
  "Projects transparency standards",
] as const;

export function CertificationSection() {
  return (
    <section className="w-full bg-[#028e7f] py-14 md:py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-12">
        <RevealOnScroll direction="left">
          <span className="mb-4 inline-flex w-fit items-center rounded-full bg-white/15 px-4 py-1.5 font-ewangi text-label font-semibold text-white">
            Powered by certification
          </span>
          <h2 className="font-ewangi text-[clamp(1.7rem,3.2vw,2.25rem)] font-bold leading-tight text-white">
            Raising the standard of real estate in Mexico.
          </h2>
          <p className="mt-5 max-w-md font-ewangi text-[15px] leading-relaxed text-white/80">
            Property Dreamz® works alongside the <span className="font-bold">CMRE® certification</span> framework to
            promote transparency and higher standards within Mexico&apos;s real estate market.
          </p>
          <p className="mt-4 max-w-md font-ewangi text-[15px] leading-relaxed text-white/80">
            Buyers can easily identify developments that have completed independent verification processes.
          </p>
          <Link
            href="/properties"
            className="mt-7 inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-6 py-2.5 font-ewangi text-[14px] font-semibold text-white transition hover:bg-white hover:text-[#028e7f]"
          >
            Browse certified developments <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </Link>
        </RevealOnScroll>

        <RevealOnScroll delay={100} className="flex justify-center">
          <div className="relative h-44 w-44 shrink-0 sm:h-56 sm:w-56">
            <Image
              src="https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto/CMRE_Logo-06_x2rax4.png"
              alt="CMRE — Certified Mexico Real Estate seal"
              fill
              className="object-contain"
              sizes="224px"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="right" delay={150}>
          <ul className="space-y-4">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span className="font-ewangi text-[15px] text-white">{item}</span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

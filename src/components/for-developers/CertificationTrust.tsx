// "The CMRE Certification makes the difference." — Figma nodes 1425:20199-20226.
import Image from "next/image";
import { Building, Building2, Camera, FileCheck } from "lucide-react";
import { Container, RevealOnScroll } from "@/components/ui";

const points = [
  { icon: FileCheck, title: "Title & Deed Verification", body: "Property ownership documentation review and validation." },
  { icon: Building, title: "Developer", body: "Corporate, legal, and operational review of the developer." },
  { icon: Building2, title: "Bank Trust (Fideicomiso)", body: "Review of applicable trust structures and supporting documentation." },
  { icon: Camera, title: "Media Production", body: "Verification that marketing materials accurately represent the development." },
] as const;

export function CertificationTrust() {
  return (
    <section className="w-full bg-[#0f2540] py-14 md:py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_auto_1.2fr] lg:items-center lg:gap-12">
        <RevealOnScroll direction="left">
          <span className="mb-4 inline-flex w-fit items-center rounded-full bg-white/10 px-4 py-1.5 font-ewangi text-label font-semibold text-white/80">
            Trust that sells
          </span>
          <h2 className="font-ewangi text-[clamp(1.6rem,3vw,2.1rem)] font-bold leading-tight text-brand-teal">
            The CMRE® Certification makes the difference.
          </h2>
          <p className="mt-4 max-w-sm font-ewangi text-[14px] leading-relaxed text-white/70">
            Our certification process verifies the legal, financial and operational status of your development,
            giving buyers the confidence they need to invest.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={100} className="flex justify-center">
          <div className="relative h-32 w-32 shrink-0 sm:h-40 sm:w-40">
            <Image
              src="https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto/CMRE_Logo-06_x2rax4.png"
              alt="CMRE — Certified Mexico Real Estate seal"
              fill
              className="object-contain"
              sizes="160px"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="right" delay={150} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point.title} className="flex items-start gap-3">
              <point.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" strokeWidth={2} />
              <div>
                <p className="font-ewangi text-[14px] font-bold text-white">{point.title}</p>
                <p className="mt-1 font-ewangi text-[12px] leading-snug text-white/60">{point.body}</p>
              </div>
            </div>
          ))}
        </RevealOnScroll>
      </Container>
    </section>
  );
}

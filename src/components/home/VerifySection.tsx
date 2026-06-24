// Compact trust bar that pairs the "Property Dreamz Verify" headline with the CMRE logo.
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { Container, Icon, Label, RevealOnScroll } from "@/components/ui";

export function VerifySection() {
  return (
    <section className="w-full bg-brand-ink text-brand-emerald">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between md:py-12">
        <RevealOnScroll direction="left" className="max-w-2xl space-y-3">
          <h2 className="flex flex-wrap items-center gap-2 font-ewangi text-title text-brand-emerald">
            <span className="text-white">Property Dreamz&apos;s</span>
            <span className="inline-flex items-center gap-1.5 italic text-brand-teal">
              Verify
              <Icon as={BadgeCheck} size={28} color="currentColor" className="text-brand-teal" />
            </span>
          </h2>
          <p className="font-body text-body text-white">
            The only portal where every property is certified before it&apos;s listed.
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="right" delay={120} className="flex flex-col gap-2">
          <Label className="text-white">Certified by</Label>
          <Image
            src="https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto/CMRE_Logo-04_yjsknz.png"
            alt="CMRE Certified Mexico Real Estate"
            width={204}
            height={48}
            className="h-12 w-auto"
          />
        </RevealOnScroll>
      </Container>
    </section>
  );
}

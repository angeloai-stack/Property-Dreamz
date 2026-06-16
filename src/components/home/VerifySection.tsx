import { BadgeCheck } from "lucide-react";
import { CmreBadge } from "@/components/shared/CmreBadge";
import { Container, Icon, Label } from "@/components/ui";

export function VerifySection() {
  return (
    <section className="w-full bg-brand-ink text-brand-emerald">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="max-w-2xl space-y-3">
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
        </div>

        <div className="flex items-center gap-3">
          <Label className="text-brand-emerald/80">Certified by</Label>
          <CmreBadge />
        </div>
      </Container>
    </section>
  );
}

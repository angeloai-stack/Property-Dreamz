import Link from "next/link";
import { BadgeCheck, ArrowRight } from "lucide-react";
import { CmreBadge } from "@/components/shared/CmreBadge";
import { Container, Icon } from "@/components/ui";

const trustPoints = [
  "HOA reserves audited — no surprise assessments after you close.",
  "Title searched before any property is listed.",
  "Developer background reviewed by CM RE.",
] as const;

export function CertifiedBanner() {
  return (
    <section className="w-full bg-brand-pine py-16 md:py-20">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Left: copy */}
          <div className="max-w-2xl space-y-6">
            <p className="font-ewangi text-label font-semibold uppercase tracking-widest text-brand-emerald/80">
              Certified inventory
            </p>
            <h2 className="font-ibrand text-[clamp(2rem,4vw,2.75rem)] leading-tight text-brand-paper">
              Browse 47 certified developments
            </h2>

            <ul className="space-y-2">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 font-body text-body text-brand-paper/80"
                >
                  <Icon
                    as={BadgeCheck}
                    size={18}
                    color="currentColor"
                    className="mt-0.5 shrink-0 text-brand-emerald"
                  />
                  {point}
                </li>
              ))}
            </ul>

            <Link
              href="/properties"
              className="inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3 font-ewangi text-label font-semibold text-brand-paper transition hover:bg-brand-paper hover:text-brand-pine"
            >
              Browse properties
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Right: badge + stat */}
          <div className="flex flex-col items-start gap-6 lg:items-end">
            <CmreBadge />
            <div className="text-right">
              <p className="font-ibrand text-[3.5rem] font-bold leading-none text-brand-emerald">
                47
              </p>
              <p className="font-ewangi text-label text-brand-paper/70">
                certified developments
              </p>
            </div>
            <div>
              <p className="font-ibrand text-[3.5rem] font-bold leading-none text-brand-emerald">
                100%
              </p>
              <p className="font-ewangi text-label text-brand-paper/70">
                title-verified before listing
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

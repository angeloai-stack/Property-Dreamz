import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";

/** Figma Group 26 — Exclude boolean, #00be7c, 222×326px.
 *  5 concentric rings + two ribbon tails below the circle. */
function MedalBadge() {
  return (
    <svg
      width="111"
      height="163"
      viewBox="0 0 222 326"
      fill="none"
      aria-hidden="true"
    >
      {/* Concentric ring medal — outer → inner alternating green / white */}
      <circle cx="111" cy="111" r="111" fill="#00be7c" />
      <circle cx="111" cy="111" r="88"  fill="#024139" />
      <circle cx="111" cy="111" r="80"  fill="#00be7c" />
      <circle cx="111" cy="111" r="71"  fill="#024139" />
      <circle cx="111" cy="111" r="48"  fill="#00be7c" />

      {/* Left ribbon tail */}
      <path d="M 60 185 L 15 326 L 117 326 L 125 185 Z" fill="#00be7c" />
      {/* Right ribbon tail */}
      <path d="M 130 185 L 108 326 L 207 326 L 190 185 Z" fill="#00be7c" />
    </svg>
  );
}

export function CertifiedBanner() {
  return (
    <section className="w-full bg-[#028e7f] py-14 md:py-20">
      <Container>
        {/* Pine card — Figma: Rectangle 44, #024139, r=34, 1262×489px */}
        <div className="rounded-[34px] bg-brand-pine px-10 py-12 md:px-14 md:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
            {/* Left: "All certified by" + CMRE logo + description */}
            <div className="flex-1 space-y-6">
              {/* Figma: Ewangi 40px white */}
              <p className="font-ewangi text-[2.5rem] leading-tight text-white">
                All certified by
              </p>

              {/* Figma: CMRE Logo-04 2, 620×147px image */}
              <div className="relative h-18.5 w-77.5 max-w-full">
                <Image
                  src="/brand/cmre-logo.png"
                  alt="CMRE — Certified Mexico Real Estate"
                  fill
                  className="object-contain object-left"
                  sizes="310px"
                />
              </div>

              {/* Figma: description text Ewangi 15px white */}
              <p className="max-w-lg font-ewangi text-[15px] leading-relaxed text-white/75">
                Every property and development featured on our platform undergoes
                a thorough verification process, including legal documentation,
                ownership validation, regulatory compliance, and developer
                background checks. Our certification helps ensure transparency,
                security, and confidence throughout your real estate investment
                journey in Mexico.
              </p>
            </div>

            {/* Right: medal badge — Figma: Group 26, Exclude #00be7c, 222×326px */}
            <div className="shrink-0 self-center">
              <MedalBadge />
            </div>
          </div>
        </div>

        {/* Big headline — Figma: Ewangi 96px white, y=4819 */}
        <div className="mt-14 md:mt-20">
          <h2 className="font-ewangi text-[clamp(3rem,7.5vw,6rem)] leading-[0.9] text-white">
            Browse 47 certified
            <br />
            developments
          </h2>

          {/* Figma: Ewangi 36px white, y=5093 */}
          <p className="mt-5 font-ewangi text-[clamp(1.125rem,2.8vw,2.25rem)] leading-snug text-white/85">
            HOA reserves audited — no surprise assessments after you close.
          </p>

          <Link
            href="/properties"
            className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-white/60 px-8 py-3.5 font-ewangi text-[1.1rem] text-white transition hover:bg-white hover:text-[#028e7f]"
          >
            Browse developments
          </Link>
        </div>
      </Container>
    </section>
  );
}

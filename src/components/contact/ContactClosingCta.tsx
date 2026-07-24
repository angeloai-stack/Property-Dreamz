// Closing CTA band — Figma nodes 1425:21086-21098. Reuses the Dreamzy mascot uploaded for Buyer's Guide.
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { Container, RevealOnScroll } from "@/components/ui";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto/Propery%20Dreamz/Property%20Pics/Mascot";

export function ContactClosingCta() {
  const t = useTranslations("contact.closingCta");

  return (
    <section className="w-full bg-white py-10 md:py-14">
      <Container>
        <RevealOnScroll className="rounded-2xl bg-brand-teal px-6 py-8 md:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <h2 className="font-ewangi text-[1.4rem] font-bold leading-tight text-brand-ink">
                {t("heading")}
              </h2>
              <p className="mt-2 font-ewangi text-[14px] leading-relaxed text-brand-ink/70">
                {t("body")}
              </p>
            </div>

            <div className="flex flex-col-reverse items-center gap-6 sm:flex-row sm:items-center">
              <div className="flex shrink-0 flex-wrap justify-center gap-3">
                <Link
                  href="#message-form"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-ink px-6 py-3 font-ewangi text-[14px] font-semibold text-white transition hover:bg-black"
                >
                  {t("ctaAdvisor")} <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </Link>
                <a
                  href="https://wa.me/16191234567"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-brand-ink/60 px-6 py-3 font-ewangi text-[14px] font-semibold text-brand-ink transition hover:bg-brand-ink hover:text-white"
                >
                  {t("ctaWhatsapp")}
                </a>
              </div>

              <div className="hidden shrink-0 flex-col items-center md:flex">
                <div className="relative -mb-2 h-auto w-40">
                  <Image src={`${CLD}/dreamzy-speech-bubble`} alt="" width={624} height={442} className="h-auto w-full" />
                </div>
                <div className="relative z-10 h-20 w-20 shrink-0 overflow-hidden rounded-full ring-4 ring-white/40">
                  <Image src={`${CLD}/dreamzy-avatar`} alt="Dreamzy, the Property Dreamz AI advisor" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

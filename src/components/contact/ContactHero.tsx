// Contact Us hero — Figma nodes 1425:20299-21038.
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, Mail, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Container, RevealOnScroll } from "@/components/ui";
import { TrustChecklist } from "@/components/shared/TrustChecklist";

const quickContacts = [
  { key: "liveChat", icon: MessageCircle, href: "#message-form" },
  { key: "email", icon: Mail, href: "mailto:hello@propertydreamz.com" },
  { key: "call", icon: Phone, href: "tel:+16191234567" },
  { key: "whatsapp", icon: FaWhatsapp, href: "https://wa.me/16191234567" },
] as const;

export function ContactHero() {
  const t = useTranslations("contact.hero");

  return (
    <section className="relative w-full overflow-hidden bg-brand-ink">
      <Image
        src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&q=75"
        alt="Residential development at sunset"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-brand-ink via-brand-ink/60 to-brand-ink/20" />

      <Container className="relative z-10 py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_429px] lg:items-start">
          <RevealOnScroll direction="left">
            <p className="mb-4 font-ewangi text-[1.4rem] font-bold text-brand-teal">{t("eyebrow")}</p>
            <h1 className="max-w-xl font-ewangi text-[clamp(1.9rem,4vw,2.5rem)] font-bold leading-tight text-white">
              {t.rich("heading", {
                hl: (chunks) => <span className="text-brand-teal">{chunks}</span>,
              })}
            </h1>
            <p className="mt-4 max-w-md font-ewangi text-[15px] leading-relaxed text-white/70">
              {t("subtitle")}
            </p>

            <TrustChecklist className="mt-6" />
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={100} className="flex justify-end lg:pt-1">
            <div className="flex max-w-sm items-start gap-3 rounded-xl bg-white/15 p-5 backdrop-blur-sm">
              <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-white" strokeWidth={2} />
              <div>
                <p className="font-ewangi text-[14px] font-bold text-white">{t("badgeTitle")}</p>
                <p className="mt-1 font-ewangi text-[12px] leading-snug text-white/70">
                  {t("badgeBody")}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={150} className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickContacts.map((item) => (
            <a
              key={item.key}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-3 rounded-xl bg-brand-teal px-5 py-4 transition hover:bg-brand-teal-dark"
            >
              <item.icon className="h-6 w-6 shrink-0 text-brand-ink" />
              <div className="min-w-0 flex-1">
                <p className="font-ewangi text-[14px] font-bold leading-tight text-brand-ink">
                  {t(`quickContacts.${item.key}.title`)}
                </p>
                <p className="truncate font-ewangi text-[12px] leading-tight text-brand-ink/70">
                  {t(`quickContacts.${item.key}.detail`)}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-brand-ink" strokeWidth={2.5} />
            </a>
          ))}
        </RevealOnScroll>
      </Container>
    </section>
  );
}

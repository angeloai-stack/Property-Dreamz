// Contact Us hero — Figma nodes 1425:20299-21038.
import Image from "next/image";
import { ArrowRight, Mail, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Container, RevealOnScroll } from "@/components/ui";
import { TrustChecklist } from "@/components/shared/TrustChecklist";

const quickContacts = [
  { icon: MessageCircle, title: "Live chat", detail: "Chat with Dreamzy or our team now.", href: "#message-form" },
  { icon: Mail, title: "Email us", detail: "hello@propertydreamz.com", href: "mailto:hello@propertydreamz.com" },
  { icon: Phone, title: "Call us", detail: "+1 (619) 123 4567", href: "tel:+16191234567" },
  { icon: FaWhatsapp, title: "WhatsApp", detail: "+1 (619) 123 4567", href: "https://wa.me/16191234567" },
] as const;

export function ContactHero() {
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
            <p className="mb-4 font-ewangi text-[1.4rem] font-bold text-brand-teal">Contact us</p>
            <h1 className="max-w-xl font-ewangi text-[clamp(1.9rem,4vw,2.5rem)] font-bold leading-tight text-white">
              We&apos;re here to help you make the <span className="text-brand-teal">right move.</span>
            </h1>
            <p className="mt-4 max-w-md font-ewangi text-[15px] leading-relaxed text-white/70">
              Whether you&apos;re a buyer, developer, or real estate professional, our team is ready to provide
              the support and information you need.
            </p>

            <TrustChecklist className="mt-6" />
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={100} className="flex justify-end lg:pt-1">
            <div className="flex max-w-sm items-start gap-3 rounded-xl bg-white/15 p-5 backdrop-blur-sm">
              <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-white" strokeWidth={2} />
              <div>
                <p className="font-ewangi text-[14px] font-bold text-white">Personalized. Fast. Reliable.</p>
                <p className="mt-1 font-ewangi text-[12px] leading-snug text-white/70">
                  Real people, real answers. Here for you every step of the way.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={150} className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickContacts.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-3 rounded-xl bg-brand-teal px-5 py-4 transition hover:bg-brand-teal-dark"
            >
              <item.icon className="h-6 w-6 shrink-0 text-brand-ink" />
              <div className="min-w-0 flex-1">
                <p className="font-ewangi text-[14px] font-bold leading-tight text-brand-ink">{item.title}</p>
                <p className="truncate font-ewangi text-[12px] leading-tight text-brand-ink/70">{item.detail}</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-brand-ink" strokeWidth={2.5} />
            </a>
          ))}
        </RevealOnScroll>
      </Container>
    </section>
  );
}

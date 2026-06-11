import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, ArrowRight, HelpCircle } from "lucide-react";
import { CmreBadge } from "@/components/shared/CmreBadge";
import { Container, Icon } from "@/components/ui";

export const metadata = {
  title: "Buyer's Guide — Property Dreamz",
  description:
    "Everything you need to know about buying property in Mexico: fideicomiso, legal steps, financing, and certified developers.",
};

const steps = [
  {
    number: "01",
    title: "Choose your location",
    body: "Select your region to view developers, services, and certification information relevant to your area. Mexico offers dramatically different markets — from the border region near Tijuana and Rosarito to the Caribbean beaches of Isla Mujeres and the Pacific coast of Nayarit. Each region has unique legal requirements and lifestyle advantages.",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=75",
    imageAlt: "Mexico city panorama",
  },
  {
    number: "02",
    title: "Understand the Fideicomiso",
    body: "Foreign nationals cannot directly own property in Mexico's 'restricted zone' — within 50km of any coastline or 100km of any border. Instead, ownership is held through a bank trust called a Fideicomiso. The bank acts as trustee while you hold all ownership rights including renting, selling, and improving the property. Setup costs typically range from $1,500–$2,500 USD with annual fees of $500–$800 USD.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=75",
    imageAlt: "Legal professionals in meeting",
  },
  {
    number: "03",
    title: "Due diligence & title search",
    body: "Every Property Dreamz listing has passed a CM RE certification review covering judicial records, title history, developer background, and HOA financial health. Before signing anything, your notary (notario público) will conduct an independent title search. Budget 1–2% of the purchase price for notary and closing fees.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=75",
    imageAlt: "Legal documents and paperwork",
  },
  {
    number: "04",
    title: "Financing & payment",
    body: "Most international buyers purchase with cash or wire transfers. Mexican mortgages are available but typically carry higher rates. Some developers offer in-house financing for pre-sale inventory at competitive terms. Always verify funds transfer instructions with your notary directly — wire fraud is a known risk in real estate transactions.",
    image:
      "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=75",
    imageAlt: "Banking and financial planning",
  },
  {
    number: "05",
    title: "Closing & title transfer",
    body: "Closing is handled before a Mexican notario público who is a government-certified attorney. They verify identities, confirm the deed, calculate taxes, and register the transfer with the Public Registry of Property. Allow 30–60 days from signed purchase agreement to title transfer. You'll need a valid passport and RFC (Mexican tax ID) for the transaction.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=75",
    imageAlt: "Signing purchase agreement",
  },
] as const;

const faqs = [
  {
    q: "Can Americans legally own property in Mexico?",
    a: "Yes. Through a Fideicomiso (bank trust) in the restricted zone, or direct ownership inland. There are no restrictions on the number of properties you can own.",
  },
  {
    q: "How long does the buying process take?",
    a: "Typically 30–90 days from signed purchase agreement to title registration. Pre-sale developments may have longer timelines tied to construction completion.",
  },
  {
    q: "What taxes apply when buying?",
    a: "ISAI (Impuesto Sobre Adquisición de Inmuebles) is typically 2–4% of the purchase price depending on the state. Annual property tax (predial) is minimal — usually under $500 USD/year for residential property.",
  },
  {
    q: "Do I need a Mexican bank account?",
    a: "Not necessarily for the purchase, but helpful for paying ongoing costs like HOA, predial, and utilities. Several banks (Intercam, Banorte) offer accounts to non-residents.",
  },
] as const;

export default function BuyersGuidePage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-ink py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=60"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>
        <Container className="relative z-10 max-w-3xl space-y-4">
          <p className="font-ewangi text-label font-semibold uppercase tracking-widest text-brand-emerald">
            Buyer&apos;s Guide
          </p>
          <h1 className="font-ibrand text-[clamp(2rem,5vw,3rem)] leading-tight text-brand-paper">
            How to buy property in Mexico
          </h1>
          <p className="font-body text-body leading-relaxed text-brand-paper/70">
            A complete guide for international buyers — from choosing your
            destination to signing at the notario. Every step explained in plain
            English.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <CmreBadge />
            <span className="font-ewangi text-label text-brand-paper/50">
              All listed properties certified by CM RE
            </span>
          </div>
        </Container>
      </section>

      {/* Steps */}
      <section className="bg-brand-paper py-16 md:py-20">
        <Container className="space-y-16 md:space-y-20">
          {steps.map((step, i) => {
            const isEven = i % 2 === 1;
            return (
              <div
                key={step.number}
                className={`flex flex-col gap-8 md:grid md:grid-cols-2 md:items-center md:gap-12 ${
                  isEven ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <span className="font-ibrand text-[5rem] font-bold leading-none text-brand-emerald/15 select-none">
                    {step.number}
                  </span>
                  <h2 className="font-ibrand text-title leading-snug text-brand-ink">
                    {step.title}
                  </h2>
                  <p className="font-body text-body leading-relaxed text-brand-muted">
                    {step.body}
                  </p>
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-brand-ink py-16 md:py-20">
        <Container className="max-w-3xl space-y-8">
          <div className="space-y-2">
            <p className="font-ewangi text-label font-semibold uppercase tracking-widest text-brand-emerald/70">
              Common questions
            </p>
            <h2 className="font-ibrand text-title text-brand-paper">FAQ</h2>
          </div>

          <div className="divide-y divide-brand-paper/10">
            {faqs.map(({ q, a }) => (
              <div key={q} className="py-5 space-y-2">
                <h3 className="flex items-start gap-2 font-ibrand text-subtitle text-brand-paper">
                  <Icon
                    as={HelpCircle}
                    size={18}
                    color="currentColor"
                    className="mt-0.5 shrink-0 text-brand-emerald"
                  />
                  {q}
                </h3>
                <p className="pl-6 font-body text-body text-brand-paper/70">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-pine py-14">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Icon
            as={BadgeCheck}
            size={48}
            color="currentColor"
            className="text-brand-emerald"
          />
          <h2 className="font-ibrand text-title text-brand-paper">
            Ready to start your search?
          </h2>
          <p className="max-w-lg font-body text-body text-brand-paper/70">
            Browse 47 certified developments — every title verified, every
            developer reviewed.
          </p>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3 font-ewangi text-label font-semibold text-brand-paper transition hover:bg-brand-paper hover:text-brand-pine"
          >
            Browse properties
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Container>
      </section>
    </main>
  );
}

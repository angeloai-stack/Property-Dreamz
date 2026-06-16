import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, BarChart2, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import { CmreBadge } from "@/components/shared/CmreBadge";
import { Container, Icon } from "@/components/ui";
import { cn } from "@/lib/utils";
import { DeveloperListingForm } from "@/components/forms";

export const metadata: Metadata = {
  title: "For Developers",
  description:
    "List your Mexico development on Property Dreamz and reach thousands of pre-qualified international buyers. Get CM RE certified and access the developer portal.",
  openGraph: {
    title: "List Your Development — Property Dreamz",
    description:
      "Reach thousands of pre-qualified international buyers. Get CM RE certified and list your Mexico development.",
    url: "https://propertydreamz.com/for-developers",
  },
};

const benefits = [
  {
    icon: Globe,
    title: "International reach",
    body: "Access thousands of US-based buyers actively searching for Mexico real estate — buyers who are pre-qualified and ready to transact.",
  },
  {
    icon: BadgeCheck,
    title: "CM RE certification badge",
    body: "Certified developers display the CM RE trust badge across all listings, significantly increasing buyer confidence and conversion rates.",
  },
  {
    icon: BarChart2,
    title: "Analytics dashboard",
    body: "Track views, saved count, inquiry volume, and price interest breakdowns. Know exactly how buyers are engaging with your inventory.",
  },
] as const;

const tiers = [
  {
    name: "Listed",
    price: "Free",
    description: "Get your development in front of international buyers.",
    features: [
      "Up to 3 active listings",
      "Basic property detail page",
      "Contact form leads",
      "Map pin placement",
    ],
    cta: "Apply to list",
    highlight: false,
  },
  {
    name: "Certified",
    price: "$1,200 / yr",
    description: "CM RE certification review + premium placement.",
    features: [
      "Unlimited active listings",
      "CM RE certification badge",
      "Featured placement in search",
      "Analytics dashboard",
      "Priority buyer introductions",
      "Developer portal access",
    ],
    cta: "Get certified",
    highlight: true,
  },
  {
    name: "Partner",
    price: "Custom",
    description: "White-glove service for large-scale developments.",
    features: [
      "Everything in Certified",
      "Dedicated account manager",
      "Co-marketing opportunities",
      "Custom landing page",
      "CRM integration",
    ],
    cta: "Contact us",
    highlight: false,
  },
] as const;

const process = [
  { step: "01", label: "Submit your development", detail: "Fill out our developer intake form with project details, legal status, and contact information." },
  { step: "02", label: "CM RE review", detail: "Our certification partner reviews judicial records, title history, HOA financials, and developer background. Takes 5–10 business days." },
  { step: "03", label: "Listing setup", detail: "Our team builds your property page with professional copy, photos, floor plans, and map placement." },
  { step: "04", label: "Go live", detail: "Your development goes live to thousands of international buyers. Track performance from your dashboard." },
] as const;

export default function ForDevelopersPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-ink py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=60"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>
        <Container className="relative z-10 max-w-3xl space-y-4">
          <p className="font-ewangi text-label font-semibold uppercase tracking-widest text-brand-emerald">
            For Developers
          </p>
          <h1 className="font-ewangi text-[clamp(2rem,5vw,3rem)] leading-tight text-brand-paper">
            Reach buyers who are ready to close
          </h1>
          <p className="font-body text-body leading-relaxed text-brand-paper/70">
            Property Dreamz is the only portal where every listing is certified before it goes live.
            That trust converts — our buyers are pre-qualified international purchasers actively looking in Mexico.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#listing-form"
              className="inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3 font-ewangi text-label font-semibold text-brand-paper transition hover:bg-brand-paper hover:text-brand-pine"
            >
              Apply to list
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <CmreBadge />
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-brand-paper py-16 md:py-20">
        <Container className="space-y-12">
          <div className="max-w-2xl space-y-2">
            <p className="font-ewangi text-label font-semibold uppercase tracking-widest text-brand-emerald">
              Why list with us
            </p>
            <h2 className="font-ewangi text-title text-brand-ink">
              Built for Mexico&apos;s international market
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map(({ icon, title, body }) => (
              <div key={title} className="rounded-3xl bg-white p-7 shadow-subtle space-y-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-emerald/10 text-brand-emerald">
                  <Icon as={icon} size={24} color="currentColor" />
                </span>
                <h3 className="font-ewangi text-subtitle text-brand-ink">{title}</h3>
                <p className="font-body text-body text-brand-muted">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-brand-ink py-16 md:py-20">
        <Container className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <p className="font-ewangi text-label font-semibold uppercase tracking-widest text-brand-emerald/70">
              How it works
            </p>
            <h2 className="font-ewangi text-title text-brand-paper">
              From application to live listing
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(({ step, label, detail }) => (
              <div key={step} className="space-y-3">
                <span className="font-ewangi text-[3rem] font-bold leading-none text-brand-emerald/20 select-none">
                  {step}
                </span>
                <h3 className="font-ewangi text-subtitle text-brand-paper">{label}</h3>
                <p className="font-body text-body text-brand-paper/60">{detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="bg-brand-paper py-16 md:py-20">
        <Container className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <p className="font-ewangi text-label font-semibold uppercase tracking-widest text-brand-emerald">
              Pricing
            </p>
            <h2 className="font-ewangi text-title text-brand-ink">
              Simple, transparent tiers
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={cn(
                  "flex flex-col rounded-3xl p-7 space-y-6",
                  tier.highlight
                    ? "bg-brand-pine text-brand-paper ring-2 ring-brand-emerald"
                    : "bg-white text-brand-ink shadow-subtle"
                )}
              >
                <div className="space-y-1">
                  <h3 className={cn("font-ewangi text-subtitle", tier.highlight ? "text-brand-paper" : "text-brand-ink")}>
                    {tier.name}
                  </h3>
                  <p className={cn("font-ewangi text-title font-bold", tier.highlight ? "text-brand-emerald" : "text-brand-ink")}>
                    {tier.price}
                  </p>
                  <p className={cn("font-body text-body", tier.highlight ? "text-brand-paper/70" : "text-brand-muted")}>
                    {tier.description}
                  </p>
                </div>
                <ul className="flex-1 space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className={cn("flex items-start gap-2 font-body text-body", tier.highlight ? "text-brand-paper/80" : "text-brand-muted")}>
                      <CheckCircle2 className={cn("mt-0.5 h-4 w-4 shrink-0", tier.highlight ? "text-brand-emerald" : "text-brand-emerald")} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#listing-form"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-ewangi text-label font-semibold transition",
                    tier.highlight
                      ? "bg-brand-emerald text-brand-paper hover:bg-brand-paper hover:text-brand-pine"
                      : "bg-brand-ink text-brand-paper hover:bg-brand-emerald"
                  )}
                >
                  {tier.cta}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Developer listing application form */}
      <section className="bg-brand-paper py-16 md:py-20" id="listing-form">
        <Container className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <p className="font-ewangi text-label font-semibold uppercase tracking-widest text-brand-emerald">
              Submit your development
            </p>
            <h2 className="font-ewangi text-title text-brand-ink">
              Apply to list on Property Dreamz
            </h2>
            <p className="font-body text-body text-brand-muted">
              Fill out the form below. Our team will review your submission and reach out within 3
              business days to discuss next steps and CM RE certification.
            </p>
          </div>
          <DeveloperListingForm />
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-pine py-14">
        <Container className="flex flex-col items-center gap-6 text-center">
          <CmreBadge />
          <h2 className="font-ewangi text-title text-brand-paper">
            Ready to reach international buyers?
          </h2>
          <p className="max-w-lg font-body text-body text-brand-paper/70">
            Join 47 certified developments already listed on Property Dreamz.
          </p>
          <Link
            href="#listing-form"
            className="inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3 font-ewangi text-label font-semibold text-brand-paper transition hover:bg-brand-paper hover:text-brand-pine"
          >
            Apply now
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Container>
      </section>
    </main>
  );
}

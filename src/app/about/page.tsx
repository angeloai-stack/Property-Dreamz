import type { Metadata } from "next";
import { Badge, Button, Container, Heading, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "The Mission",
  description:
    "Property Dreamz is on a mission to make buying real estate in Mexico safe, transparent, and accessible for international buyers. Learn who we are and why we built this.",
  openGraph: {
    title: "The Mission — Property Dreamz",
    description:
      "Safe, transparent, and accessible Mexican real estate for international buyers.",
    url: "https://propertydreamz.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="flex-1 bg-brand-paper text-brand-ink">
      <Section className="pt-20 pb-16">
        <Container className="space-y-12">
          <div className="space-y-6">
            {/* About page overview content for the editorial property brand */}
            <Badge variant="gold">About us</Badge>
            <Heading level={1}>
              We help buyers move from inspiration to a confident property purchase.
            </Heading>
            <p className="max-w-2xl font-body text-body text-brand-muted">
              Property Dreamz is a bilingual real estate partner for pre-sale buyers in Mexico and the United States.
              We combine verified listings, transparent financing guidance, and a polished editorial experience so
              modern buyers can make decisions with clarity.
            </p>
          </div>

          <Section className="grid gap-8 xl:grid-cols-2">
            <div className="space-y-6 rounded-4xl border border-brand-ink/10 bg-white p-10 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
              <Heading level={2} className="text-2xl sm:text-3xl">
                Our approach
              </Heading>
              <p className="text-base leading-8 text-brand-muted">
                We focus on verified developments with clear pricing, project transparency, and bilingual support.
                Every property is presented with an editorial layout, curated details, and personalized advisory.
              </p>
              <div className="space-y-4 text-sm uppercase tracking-[0.22em] text-brand-gray">
                <p>Verified contracts</p>
                <p>Local & international guidance</p>
                <p>Pre-sale and financing clarity</p>
              </div>
            </div>

            <div className="space-y-6 rounded-4xl border border-brand-ink/10 bg-brand-paper/90 p-10">
              <Heading level={2} className="text-2xl sm:text-3xl">
                Why clients choose us
              </Heading>
              <ul className="space-y-4 text-base leading-7 text-brand-muted">
                <li>
                  <span className="font-semibold text-brand-ink">Clear buying process.</span> From search to closing, we keep every
                  step simple and understandable.
                </li>
                <li>
                  <span className="font-semibold text-brand-ink">Dedicated bilingual service.</span> Our team supports both English
                  and Spanish-speaking buyers with local and cross-border expertise.
                </li>
                <li>
                  <span className="font-semibold text-brand-ink">Verified projects.</span> We highlight developments with strong
                  credentials, live financing options, and thoughtful presentation.
                </li>
              </ul>
            </div>
          </Section>

          <Section className="rounded-4xl border border-brand-ink/10 bg-white p-10 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-4">
                <Heading level={2} className="text-2xl sm:text-3xl">
                  Ready to explore verified properties?
                </Heading>
                <p className="text-base leading-7 text-brand-muted">
                  Schedule a conversation with our advisory team to review developments that match your budget,
                  lifestyle, and international financing needs.
                </p>
              </div>
              <Button href="/contact" variant="accent">
                Contact our team
              </Button>
            </div>
          </Section>
        </Container>
      </Section>
    </main>
  );
}

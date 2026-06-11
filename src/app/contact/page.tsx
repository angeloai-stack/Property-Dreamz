import type { Metadata } from "next";
import { Badge, Container, Heading, Section } from "@/components/ui";
import { ContactForm } from "@/components/forms";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Property Dreamz team. Reach verified buyers, request a callback, or start your property search in Mexico today.",
  openGraph: {
    title: "Contact Property Dreamz",
    description:
      "Talk to our bilingual team about buying or listing real estate in Mexico.",
    url: "https://propertydreamz.com/contact",
  },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-brand-paper text-brand-ink">
      <Section className="pt-20 pb-16">
        <Container className="space-y-12">
          <div className="space-y-6">
            <Badge variant="gold">Contact</Badge>
            <Heading level={1}>
              Find your next investment in Mexican real estate.
            </Heading>
            <p className="max-w-2xl font-body text-body text-brand-muted">
              Fill out the form below to receive verified options, bilingual guidance, and
              financing opportunities in Mexico and the US.
            </p>
          </div>

          <Section className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6 rounded-4xl border border-brand-ink/10 bg-white p-10 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
              <Heading level={2} className="text-2xl sm:text-3xl">
                Contact information
              </Heading>
              <p className="text-base leading-8 text-brand-muted">
                Prefer to talk directly? Our bilingual sales team is ready to help.
              </p>
              <div className="space-y-4 text-sm leading-7 text-brand-ink">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:hello@propertydreamz.com" className="hover:underline">
                    hello@propertydreamz.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> +1 (123) 456-7890
                </p>
                <p>
                  <span className="font-semibold">WhatsApp:</span> +52 (123) 456-7890
                </p>
                <p>
                  <span className="font-semibold">Hours:</span> Mon–Fri, 9AM–6PM CST
                </p>
              </div>
              <div className="space-y-4 text-sm uppercase tracking-[0.22em] text-brand-gray">
                <p>Verified projects</p>
                <p>Bilingual support</p>
                <p>Transparent financing</p>
              </div>
            </div>

            <ContactForm />
          </Section>
        </Container>
      </Section>
    </main>
  );
}

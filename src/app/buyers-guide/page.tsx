import { Container, Heading, Section } from "@/components/ui";

export default function BuyersGuidePage() {
  return (
    <main className="min-h-screen bg-brand-paper text-brand-ink">
      <Section className="pt-20 pb-16">
        <Container className="space-y-8">
          <Heading level={1} className="text-3xl sm:text-4xl">
            Buyers Guide
          </Heading>
          <p className="text-base text-brand-muted">
            Practical guides for buyers: financing, legal steps, and guidance for international
            purchasers.
          </p>
        </Container>
      </Section>
    </main>
  );
}

import { Container, Heading, Section } from "@/components/ui";

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-brand-paper text-brand-ink">
      <Section className="pt-20 pb-16">
        <Container className="space-y-8">
          <Heading level={1} className="text-3xl sm:text-4xl">
            Properties
          </Heading>
          <p className="text-base text-brand-muted">
            Browse all properties and developments. Use the filters to refine results by location,
            price and availability.
          </p>
        </Container>
      </Section>
    </main>
  );
}

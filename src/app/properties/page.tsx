import { Container, Heading, Section } from "@/components/ui";

export default function PropertiesPage() {
  return (
    <main className="flex-1 bg-brand-paper text-brand-ink">
      <Section className="pt-20 pb-16">
        <Container className="space-y-8">
          <Heading level={1}>
            Properties
          </Heading>
          <p className="font-body text-body text-brand-muted">
            Browse all properties and developments. Use the filters to refine results by location,
            price and availability.
          </p>
        </Container>
      </Section>
    </main>
  );
}

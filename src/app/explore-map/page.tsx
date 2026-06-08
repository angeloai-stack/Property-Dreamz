import { Container, Heading, Section } from "@/components/ui";

export default function ExploreMapPage() {
  return (
    <main className="min-h-screen bg-brand-paper text-brand-ink">
      <Section className="pt-20 pb-16">
        <Container className="space-y-8">
          <Heading level={1} className="text-3xl sm:text-4xl">
            Explore Map
          </Heading>
          <p className="text-base text-brand-muted">
            Interactive map and discovery tools will appear here. Use filters to locate projects by
            region, price and amenities.
          </p>
        </Container>
      </Section>
    </main>
  );
}

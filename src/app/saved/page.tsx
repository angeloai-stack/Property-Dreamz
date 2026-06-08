import { Container, Heading, Section } from "@/components/ui";

export default function SavedPage() {
  return (
    <main className="min-h-screen bg-brand-paper text-brand-ink">
      <Section className="pt-20 pb-16">
        <Container className="space-y-8">
          <Heading level={1} className="text-3xl sm:text-4xl">
            Saved
          </Heading>
          <p className="text-base text-brand-muted">Your saved projects and favorites will appear here.</p>
        </Container>
      </Section>
    </main>
  );
}

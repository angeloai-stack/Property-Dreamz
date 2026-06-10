import { Container, Heading, Section } from "@/components/ui";

export default function SavedPage() {
  return (
    <main className="flex-1 bg-brand-paper text-brand-ink">
      <Section className="pt-20 pb-16">
        <Container className="space-y-8">
          <Heading level={1}>
            Saved
          </Heading>
          <p className="font-body text-body text-brand-muted">Your saved projects and favorites will appear here.</p>
        </Container>
      </Section>
    </main>
  );
}

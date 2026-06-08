import { Container, Heading, Section } from "@/components/ui";

export default function ForDevelopersPage() {
  return (
    <main className="min-h-screen bg-brand-paper text-brand-ink">
      <Section className="pt-20 pb-16">
        <Container className="space-y-8">
          <Heading level={1} className="text-3xl sm:text-4xl">
            For Developers
          </Heading>
          <p className="text-base text-brand-muted">
            Information for developers to list projects, partnerships, and submission guidelines.
          </p>
        </Container>
      </Section>
    </main>
  );
}

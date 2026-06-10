import { Container, Heading, Section } from "@/components/ui";

export default function ForDevelopersPage() {
  return (
    <main className="flex-1 bg-brand-paper text-brand-ink">
      <Section className="pt-20 pb-16">
        <Container className="space-y-8">
          <Heading level={1}>
            For Developers
          </Heading>
          <p className="font-body text-body text-brand-muted">
            Information for developers to list projects, partnerships, and submission guidelines.
          </p>
        </Container>
      </Section>
    </main>
  );
}

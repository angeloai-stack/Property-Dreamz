import type { Metadata } from "next";
import { Container, Heading, Section } from "@/components/ui";

// Saved listings are user-specific — tell search engines not to index this page.
export const metadata: Metadata = {
  title: "Saved Properties",
  robots: { index: false, follow: false },
};

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

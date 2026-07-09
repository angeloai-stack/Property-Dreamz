"use client";
// Homepage section: scrollable developer cards — Figma: "Section / Top Developers".
import { Container } from "@/components/ui";
import { TopDevelopersCards } from "./TopDevelopersCards";

export function TopDevelopers() {
  return (
    <section className="w-full bg-brand-paper py-8 md:py-16">
      <Container>
        <TopDevelopersCards />
      </Container>
    </section>
  );
}

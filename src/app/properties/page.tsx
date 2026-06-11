import type { Metadata } from "next";
import { Container, Heading, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Browse Certified Properties",
  description:
    "Browse 47 certified real estate developments in Mexico — every title searched, every developer reviewed by CM RE. Filter by location, price, and property type.",
  openGraph: {
    title: "Browse Certified Properties — Property Dreamz",
    description:
      "47 certified developments in Mexico. Title searched, developer reviewed, HOA audited.",
    url: "https://propertydreamz.com/properties",
  },
};

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

import { Badge, Button, Card, Container, Heading, Section } from "@/components/ui";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-navy text-white">
      <Section className="pt-24 pb-20">
        <Container className="space-y-12">
          <div className="max-w-3xl space-y-6">
            <Badge className="bg-white/10 text-white">Verified Mexican Real Estate</Badge>
            <Heading level={1} className="max-w-3xl text-5xl">
              Find Your Dream Home in Mexico
            </Heading>
            <p className="max-w-2xl text-base leading-8 text-brand-gray">
              100% in English · Priced in USD · Legal verified by our team. Browse luxury
              developments with full support for American buyers and transparent local
              guidance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button>Get Started</Button>
              <Button variant="secondary">Book a Tour</Button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="space-y-4 bg-white/5">
              <p className="text-xs uppercase tracking-[0.28em] text-brand-lightBlue">Verified</p>
              <Heading level={3} className="text-2xl">
                Legal Review
              </Heading>
              <p className="text-sm text-brand-gray">
                Every listing is reviewed by our local legal team before it reaches the platform.
              </p>
            </Card>
            <Card className="space-y-4 bg-white/5">
              <p className="text-xs uppercase tracking-[0.28em] text-brand-lightBlue">Secure</p>
              <Heading level={3} className="text-2xl">
                USD Pricing
              </Heading>
              <p className="text-sm text-brand-gray">
                All property prices are shown in USD for simplicity and stability.
              </p>
            </Card>
            <Card className="space-y-4 bg-white/5">
              <p className="text-xs uppercase tracking-[0.28em] text-brand-lightBlue">Assisted</p>
              <Heading level={3} className="text-2xl">
                Dedicated Support
              </Heading>
              <p className="text-sm text-brand-gray">
                Get fast, English-speaking support for your property search and purchase process.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-blue/5">
        <Container className="space-y-8">
          <Heading level={2} className="text-3xl text-white">
            Why trusted service matters
          </Heading>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="space-y-3 bg-white/5">
              <Heading level={4} className="text-xl">
                Dual market expertise
              </Heading>
              <p className="text-sm text-brand-gray">
                Combine U.S. buyer needs with Mexican local market knowledge for stronger deals.
              </p>
            </Card>
            <Card className="space-y-3 bg-white/5">
              <Heading level={4} className="text-xl">
                Full transparency
              </Heading>
              <p className="text-sm text-brand-gray">
                Clear prices, verified documents, and a step-by-step real estate process.
              </p>
            </Card>
            <Card className="space-y-3 bg-white/5">
              <Heading level={4} className="text-xl">
                Pass-through support
              </Heading>
              <p className="text-sm text-brand-gray">
                Local agents, legal review, and buyer guidance throughout closing.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}

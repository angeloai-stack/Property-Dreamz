import { Badge, Button, Card, Container, Heading, Section } from "@/components/ui";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-paper text-brand-ink">
      <Section className="pt-20 pb-16">
        <Container className="space-y-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-8">
              {/* Headline and CTA copy translated to English */}
              <Badge variant="gold">Verified projects</Badge>
              <Heading level={1} className="max-w-3xl text-4xl sm:text-5xl leading-[1.02] tracking-[-0.03em]">
                Find your home with trust and editorial design.
              </Heading>
              <p className="max-w-2xl text-base leading-8 text-brand-muted">
                Pre-sale homes and apartments with 360° tours, financing, and bilingual support
                for buyers from Mexico and the United States.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button href="/about" className="w-full sm:w-auto">
                  Learn more
                </Button>
                <Button href="/contact" variant="premium" className="w-full sm:w-auto">
                  Talk to advisor
                </Button>
              </div>
            </div>

            <div className="grid gap-4 rounded-3xl border border-brand-ink/10 bg-white p-6 text-brand-ink shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
              <div className="flex items-center justify-between rounded-2xl border border-brand-ink/10 bg-brand-paper p-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-brand-gray">Verified</p>
                  <p className="text-xl font-semibold">Residencial Altamar</p>
                </div>
                <Badge>Pre-Sale</Badge>
              </div>
              <div className="grid gap-3 text-sm text-brand-muted">
                <p>Zona Río, Tijuana · 3 beds · 2 baths · 180 m²</p>
                <p>From $4,250,000 MXN · USD $250,000</p>
              </div>
              <Button variant="default">View project</Button>
            </div>
          </div>

          <Section className="space-y-10 bg-brand-paper/90 p-8 rounded-[2rem] border border-brand-ink/10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-3">
                {/* Featured project section translated to English */}
                <Heading level={2} className="text-3xl">
                  Featured projects
                </Heading>
                <p className="max-w-2xl text-sm leading-7 text-brand-muted">
                  Browse selected developments with clear details, verified tags, and direct visual language.
                </p>
              </div>
              <Badge>Pre-Sale</Badge>
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
              <Card className="space-y-4">
                <Badge variant="success">Verified</Badge>
                <Heading level={3} className="text-2xl">
                  Vista Bahía
                </Heading>
                <p className="text-sm text-brand-muted">
                  Beachfront apartments with USD financing and bilingual legal support.
                </p>
                <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-brand-gray">
                  <span>3 beds</span>
                  <span>2 baths</span>
                  <span>180 m²</span>
                </div>
                <div className="flex flex-col items-start gap-3 text-sm text-brand-ink sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-semibold">$4,250,000 MXN</span>
                  <Button variant="default" className="w-full sm:w-auto px-5 py-2 text-xs">
                    View project
                  </Button>
                </div>
              </Card>
              <Card className="space-y-4">
                <Badge variant="success">Recommended</Badge>
                <Heading level={3} className="text-2xl">
                  Altamar Residencial
                </Heading>
                <p className="text-sm text-brand-muted">
                  Editorial floor plan with virtual tour options and secure closing.
                </p>
                <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-brand-gray">
                  <span>2 beds</span>
                  <span>2 baths</span>
                  <span>145 m²</span>
                </div>
                <div className="flex flex-col items-start gap-3 text-sm text-brand-ink sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-semibold">USD $250,000</span>
                  <Button variant="default" className="w-full sm:w-auto px-5 py-2 text-xs">
                    View project
                  </Button>
                </div>
              </Card>
              <Card className="space-y-4">
                <Badge variant="gold">Top</Badge>
                <Heading level={3} className="text-2xl">
                  Jardines del Lago
                </Heading>
                <p className="text-sm text-brand-muted">
                  High-value developments with a flat design and a polished buying experience.
                </p>
                <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-brand-gray">
                  <span>4 beds</span>
                  <span>3 baths</span>
                  <span>220 m²</span>
                </div>
                <div className="flex flex-col items-start gap-3 text-sm text-brand-ink sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-semibold">$5,350,000 MXN</span>
                  <Button variant="default" className="w-full sm:w-auto px-5 py-2 text-xs">
                    View project
                  </Button>
                </div>
              </Card>
            </div>
          </Section>
        </Container>
      </Section>
    </main>
  );
}

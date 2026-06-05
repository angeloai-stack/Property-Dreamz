import { Badge, Button, Container, Heading, Section } from "@/components/ui";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-paper text-brand-ink">
      <Section className="pt-20 pb-16">
        <Container className="space-y-12">
          <div className="space-y-6">
            <Badge variant="gold">Contáctanos</Badge>
            <Heading level={1} className="max-w-3xl text-5xl leading-[1.02] tracking-[-0.03em]">
              Escríbenos para recibir asesoría personalizada en propiedades.
            </Heading>
            <p className="max-w-2xl text-base leading-8 text-brand-muted">
              Completa el formulario con tus datos y comentarios. Nuestro equipo te contactará pronto con opciones y guía bilingüe.
            </p>
          </div>

          <Section className="grid gap-8 xl:grid-cols-2">
            <div className="space-y-6 rounded-[2rem] border border-brand-ink/10 bg-white p-10 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
              <Heading level={2} className="text-3xl">
                Reach our team
              </Heading>
              <p className="text-base leading-8 text-brand-muted">
                Email us for an appointment, ask about a specific development, or request financing details for your next investment.
              </p>
              <div className="space-y-4 text-sm leading-7 text-brand-ink">
                <p>
                  <span className="font-semibold">Email:</span> hello@propertydreamz.com
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> +1 (123) 456-7890
                </p>
                <p>
                  <span className="font-semibold">Availability:</span> Mon–Fri, 9AM–6PM CST
                </p>
              </div>
            </div>

            <div className="space-y-6 rounded-[2rem] border border-brand-ink/10 bg-brand-paper/90 p-10">
              <Heading level={2} className="text-3xl">
                Request a consultation
              </Heading>
              <p className="text-base leading-8 text-brand-muted">
                Start with a short introduction and tell us which market or property style you want to explore.
              </p>
              <div className="space-y-4 text-sm uppercase tracking-[0.22em] text-brand-gray">
                <p>Finance review</p>
                <p>Cross-border support</p>
                <p>Verified property insights</p>
              </div>
              <Button href="mailto:hello@propertydreamz.com" variant="accent">
                Email our advisor
              </Button>
            </div>
          </Section>

          <Section className="rounded-[2rem] border border-brand-ink/10 bg-white p-10 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
            <Heading level={2} className="mb-8 text-3xl">
              Formulario de contacto
            </Heading>
            <form className="grid gap-6">
              <div className="grid gap-3 md:grid-cols-2">
                <label className="space-y-2 text-sm text-brand-ink">
                  <span className="font-semibold">Nombre completo</span>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Escribe tu nombre"
                    className="w-full rounded-3xl border border-brand-ink/10 bg-brand-paper px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-pine focus:ring-2 focus:ring-brand-pine/20"
                  />
                </label>
                <label className="space-y-2 text-sm text-brand-ink">
                  <span className="font-semibold">Correo</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="ejemplo@email.com"
                    className="w-full rounded-3xl border border-brand-ink/10 bg-brand-paper px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-pine focus:ring-2 focus:ring-brand-pine/20"
                  />
                </label>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <label className="space-y-2 text-sm text-brand-ink">
                  <span className="font-semibold">Número telefónico</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+52 123 456 7890"
                    className="w-full rounded-3xl border border-brand-ink/10 bg-brand-paper px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-pine focus:ring-2 focus:ring-brand-pine/20"
                  />
                </label>
                <label className="space-y-2 text-sm text-brand-ink">
                  <span className="font-semibold">Lugar de procedencia</span>
                  <input
                    type="text"
                    name="origin"
                    placeholder="Ciudad o país"
                    className="w-full rounded-3xl border border-brand-ink/10 bg-brand-paper px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-pine focus:ring-2 focus:ring-brand-pine/20"
                  />
                </label>
              </div>

              <label className="space-y-2 text-sm text-brand-ink">
                <span className="font-semibold">Comentarios</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Cuéntanos qué tipo de propiedad buscas, tu presupuesto o cualquier duda."
                  className="w-full rounded-[1.75rem] border border-brand-ink/10 bg-brand-paper px-4 py-4 text-sm text-brand-ink outline-none transition focus:border-brand-pine focus:ring-2 focus:ring-brand-pine/20"
                />
              </label>

              <div className="flex justify-end">
                <Button type="submit" variant="default">
                  Enviar mensaje
                </Button>
              </div>
            </form>
          </Section>

          <Section className="rounded-[2rem] border border-brand-ink/10 bg-white p-10 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-4">
                <Heading level={2} className="text-3xl">
                  ¿Prefieres una llamada rápida?
                </Heading>
                <p className="text-base leading-7 text-brand-muted">
                  Podemos agendar una breve llamada para hablar sobre tus prioridades y sugerir propiedades con la financiación adecuada.
                </p>
              </div>
              <Button href="tel:+11234567890" variant="accent">
                Llámanos ahora
              </Button>
            </div>
          </Section>
        </Container>
      </Section>
    </main>
  );
}

import { Badge, Button, Container, Heading, Section } from "@/components/ui";

export default function ContactPage() {
  return (
    <main className="flex-1 bg-brand-paper text-brand-ink">
      <Section className="pt-20 pb-16">
        <Container className="space-y-12">
          <div className="space-y-6">
            <Badge variant="gold">Contact</Badge>
            <Heading level={1}>
              Find your next investment in Mexican real estate.
            </Heading>
            <p className="max-w-2xl font-body text-body text-brand-muted">
              Fill out the form below to receive verified options, bilingual guidance, and financing opportunities in Mexico and the US.
            </p>
          </div>

          <Section className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6 rounded-[2rem] border border-brand-ink/10 bg-white p-10 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
              <Heading level={2} className="text-2xl sm:text-3xl">
                Contact information
              </Heading>
              <p className="text-base leading-8 text-brand-muted">
                Prefer to talk directly? Our sales team is ready to help.
              </p>
              <div className="space-y-4 text-sm leading-7 text-brand-ink">
                <p>
                  <span className="font-semibold">Email:</span> hello@propertydreamz.com
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> +1 (123) 456-7890
                </p>
                <p>
                  <span className="font-semibold">WhatsApp:</span> +52 (123) 456-7890
                </p>
                <p>
                  <span className="font-semibold">Hours:</span> Mon–Fri, 9AM–6PM CST
                </p>
              </div>
              <div className="space-y-4 text-sm uppercase tracking-[0.22em] text-brand-gray">
                <p>Verified projects</p>
                <p>Bilingual support</p>
                <p>Transparent financing</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-brand-ink/10 bg-brand-paper/90 p-10 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
              <Heading level={2} className="mb-8 text-2xl sm:text-3xl">
                Get in touch
              </Heading>
              <form className="grid gap-6">
                <label className="space-y-2 text-sm text-brand-ink">
                  <span className="font-semibold">Full name *</span>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your full name"
                    required
                    className="w-full rounded-3xl border border-brand-ink/10 bg-brand-paper px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-emerald focus:ring-2 focus:ring-brand-emerald/20"
                  />
                </label>

                <label className="space-y-2 text-sm text-brand-ink">
                  <span className="font-semibold">Phone / WhatsApp *</span>
                  <div className="grid gap-2 sm:grid-cols-[110px_1fr]">
                    <select
                      name="phoneCode"
                      className="w-full rounded-(--radius-input) border border-brand-ink/10 bg-brand-paper px-3 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-emerald focus:ring-2 focus:ring-brand-emerald/20"
                    >
                      <option value="+1">+1</option>
                      <option value="+52">+52</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="123 456 7890"
                      required
                      className="w-full rounded-(--radius-input) border border-brand-ink/10 bg-brand-paper px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-emerald focus:ring-2 focus:ring-brand-emerald/20"
                    />
                  </div>
                </label>

                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="space-y-2 text-sm text-brand-ink">
                    <span className="font-semibold">Email *</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@email.com"
                      required
                      className="w-full rounded-(--radius-input) border border-brand-ink/10 bg-brand-paper px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-emerald focus:ring-2 focus:ring-brand-emerald/20"
                    />
                  </label>

                  <label className="space-y-2 text-sm text-brand-ink">
                    <span className="font-semibold">Investment budget</span>
                    <select
                      name="budget"
                      className="w-full rounded-(--radius-input) border border-brand-ink/10 bg-brand-paper px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-emerald focus:ring-2 focus:ring-brand-emerald/20"
                    >
                      <option value="">Select a range</option>
                      <option value="under150k">Under $150k USD</option>
                      <option value="150k-300k">$150k–$300k USD</option>
                      <option value="300k-500k">$300k–$500k USD</option>
                      <option value="over500k">$500k+ USD</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </label>
                </div>

                <label className="space-y-2 text-sm text-brand-ink">
                  <span className="font-semibold">Region of interest</span>
                  <select
                    name="zone"
                    className="w-full rounded-(--radius-input) border border-brand-ink/10 bg-brand-paper px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-emerald focus:ring-2 focus:ring-brand-emerald/20"
                  >
                    <option value="">Select a region</option>
                    <option value="baja">Baja California</option>
                    <option value="riviera">Riviera Maya</option>
                    <option value="cdmx">Mexico City</option>
                    <option value="monterrey">Monterrey</option>
                    <option value="playa">Playa del Carmen</option>
                    <option value="otros">Other</option>
                  </select>
                </label>

                <fieldset className="space-y-3 text-sm text-brand-ink">
                  <span className="font-semibold">Preferred contact method</span>
                  <div className="grid gap-2 sm:grid-cols-3">
                    <label className="flex items-center gap-3 rounded-(--radius-input) border border-brand-ink/10 bg-brand-paper px-3 py-2">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="whatsapp"
                        className="h-4 w-4 cursor-pointer accent-brand-emerald"
                      />
                      <span>WhatsApp</span>
                    </label>
                    <label className="flex items-center gap-3 rounded-(--radius-input) border border-brand-ink/10 bg-brand-paper px-3 py-2">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="call"
                        className="h-4 w-4 cursor-pointer accent-brand-emerald"
                      />
                      <span>Phone call</span>
                    </label>
                    <label className="flex items-center gap-3 rounded-(--radius-input) border border-brand-ink/10 bg-brand-paper px-3 py-2">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        className="h-4 w-4 cursor-pointer accent-brand-emerald"
                      />
                      <span>Email</span>
                    </label>
                  </div>
                </fieldset>

                <label className="flex items-start gap-3 text-sm text-brand-ink">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-1 h-4 w-4 cursor-pointer accent-brand-emerald"
                  />
                  <span>
                    I agree to the{" "}
                    <a href="#privacy" className="font-semibold underline">
                      privacy policy
                    </a>
                    *
                  </span>
                </label>

                <div className="flex justify-end pt-4">
                  <Button type="submit" variant="default" className="w-full sm:w-auto">
                    Send message
                  </Button>
                </div>
              </form>
            </div>
          </Section>
        </Container>
      </Section>
    </main>
  );
}

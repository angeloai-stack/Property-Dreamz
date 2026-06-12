"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Container } from "@/components/ui";

const F =
  "w-full rounded-(--radius-input) border-0 bg-[#d9d9d9] px-4 py-3 text-sm text-brand-ink placeholder:text-brand-ink/50 outline-none transition focus:ring-2 focus:ring-[#39d3c0]/50";

type Fields = {
  name: string;
  phone: string;
  email: string;
  timeline: string;
  financing: string;
  contactMethod: string;
  message: string;
};

const INIT: Fields = {
  name: "",
  phone: "",
  email: "",
  timeline: "",
  financing: "",
  contactMethod: "whatsapp",
  message: "",
};

export function PropertyInquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [fields, setFields] = useState<Fields>(INIT);
  const set =
    (k: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setFields((p) => ({ ...p, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/property-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="w-full bg-brand-pine py-14 md:py-16" id="inquire">
      <Container>
        <div className="mx-auto max-w-2xl space-y-8">
          <div className="space-y-3 text-center">
            <p className="font-ewangi text-label font-semibold uppercase tracking-widest text-[#39d3c0]">
              Speak with an advisor
            </p>
            <h2 className="font-ibrand text-[clamp(1.75rem,4vw,2.5rem)] leading-tight text-brand-paper">
              Didn&apos;t find your dream property?
            </h2>
            <p className="font-body text-body text-brand-paper/60">
              Tell us your requirements and our certified advisors will hand-pick matching
              developments.
            </p>
          </div>

          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <CheckCircle2 className="h-14 w-14 text-[#39d3c0]" aria-hidden="true" />
              <p className="font-ibrand text-subtitle text-brand-paper">Request sent!</p>
              <p className="font-body text-body text-brand-paper/60">
                An advisor will reach out within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-1.5">
                  <span className="font-ewangi text-label font-semibold text-brand-paper/70">
                    Full name *
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    value={fields.name}
                    onChange={set("name")}
                    className={F}
                  />
                </label>
                <label className="space-y-1.5">
                  <span className="font-ewangi text-label font-semibold text-brand-paper/70">
                    Phone / WhatsApp *
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 555 000 0000"
                    required
                    value={fields.phone}
                    onChange={set("phone")}
                    className={F}
                  />
                </label>
              </div>

              <label className="block space-y-1.5">
                <span className="font-ewangi text-label font-semibold text-brand-paper/70">
                  Email *
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  required
                  value={fields.email}
                  onChange={set("email")}
                  className={F}
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-1.5">
                  <span className="font-ewangi text-label font-semibold text-brand-paper/70">
                    Purchase timeline *
                  </span>
                  <select
                    name="timeline"
                    required
                    value={fields.timeline}
                    onChange={set("timeline")}
                    className={F}
                  >
                    <option value="">Select timeline</option>
                    <option value="now">Ready to buy now</option>
                    <option value="3mo">Within 3 months</option>
                    <option value="6mo">3 – 6 months</option>
                    <option value="12mo">6 – 12 months</option>
                    <option value="browsing">Just browsing</option>
                  </select>
                </label>
                <label className="space-y-1.5">
                  <span className="font-ewangi text-label font-semibold text-brand-paper/70">
                    Financing method *
                  </span>
                  <select
                    name="financing"
                    required
                    value={fields.financing}
                    onChange={set("financing")}
                    className={F}
                  >
                    <option value="">Select method</option>
                    <option value="cash">Cash</option>
                    <option value="us-mortgage">US mortgage</option>
                    <option value="developer">Developer financing</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </label>
              </div>

              <fieldset className="space-y-2">
                <span className="font-ewangi text-label font-semibold text-brand-paper/70">
                  Preferred contact
                </span>
                <div className="grid gap-2 sm:grid-cols-3">
                  {[
                    { value: "whatsapp", label: "WhatsApp" },
                    { value: "call", label: "Phone call" },
                    { value: "email", label: "Email" },
                  ].map(({ value, label }) => (
                    <label
                      key={value}
                      className="flex cursor-pointer items-center gap-3 rounded-(--radius-input) border border-[#d9d9d9]/30 bg-[#d9d9d9]/10 px-3 py-2"
                    >
                      <input
                        type="radio"
                        name="contactMethod"
                        value={value}
                        checked={fields.contactMethod === value}
                        onChange={set("contactMethod")}
                        className="h-4 w-4 cursor-pointer accent-[#39d3c0]"
                      />
                      <span className="font-ewangi text-label text-brand-paper/80">{label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="block space-y-1.5">
                <span className="font-ewangi text-label font-semibold text-brand-paper/70">
                  Message (optional)
                </span>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Budget, preferred region, bedrooms, or any specific requirements..."
                  value={fields.message}
                  onChange={set("message")}
                  className={`${F} resize-none`}
                />
              </label>

              <label className="flex items-start gap-3 text-sm text-brand-paper/70">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-1 h-4 w-4 cursor-pointer accent-[#39d3c0]"
                />
                <span>
                  I agree to the{" "}
                  <a href="/privacy" className="underline hover:text-brand-paper">
                    privacy policy
                  </a>
                  . *
                </span>
              </label>

              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please try again or email hello@propertydreamz.com
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#39d3c0] px-6 py-3.5 font-ewangi text-label font-semibold text-brand-ink transition hover:bg-[#2bbba8] disabled:opacity-60"
              >
                {status === "submitting" && (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                )}
                Request more information
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}

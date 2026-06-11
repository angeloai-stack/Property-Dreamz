"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Container } from "@/components/ui";

const F =
  "w-full rounded-(--radius-input) border border-brand-paper/20 bg-brand-paper/10 px-4 py-3 text-sm text-brand-paper placeholder:text-brand-paper/40 outline-none transition focus:border-brand-emerald focus:ring-2 focus:ring-brand-emerald/20";

type Fields = { name: string; phone: string; email: string; budget: string; region: string };
const INIT: Fields = { name: "", phone: "", email: "", budget: "", region: "" };

export function CampaignForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [fields, setFields] = useState<Fields>(INIT);
  const set =
    (k: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setFields((p) => ({ ...p, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, source: "campaign" }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="w-full bg-brand-ink py-14 md:py-16" id="connect">
      <Container>
        <div className="mx-auto max-w-2xl space-y-8">
          <div className="space-y-3 text-center">
            <p className="font-ewangi text-label font-semibold uppercase tracking-widest text-brand-emerald">
              Free consultation
            </p>
            <h2 className="font-ibrand text-[clamp(1.75rem,4vw,2.5rem)] leading-tight text-brand-paper">
              Find your ideal development
            </h2>
            <p className="font-body text-body text-brand-paper/60">
              Tell us what you&apos;re looking for. We&apos;ll match you with certified developments that fit.
            </p>
          </div>

          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <CheckCircle2 className="h-14 w-14 text-brand-emerald" aria-hidden="true" />
              <p className="font-ibrand text-subtitle text-brand-paper">You&apos;re all set!</p>
              <p className="font-body text-body text-brand-paper/60">
                Our team will reach out within 24 hours with verified listings matching your criteria.
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
                    Budget (optional)
                  </span>
                  <select name="budget" value={fields.budget} onChange={set("budget")} className={F}>
                    <option value="">Select a range</option>
                    <option value="under150k">Under $150k USD</option>
                    <option value="150k-300k">$150k – $300k USD</option>
                    <option value="300k-500k">$300k – $500k USD</option>
                    <option value="over500k">$500k+ USD</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </label>
                <label className="space-y-1.5">
                  <span className="font-ewangi text-label font-semibold text-brand-paper/70">
                    Region (optional)
                  </span>
                  <select name="region" value={fields.region} onChange={set("region")} className={F}>
                    <option value="">Any region</option>
                    <option value="baja">Baja California</option>
                    <option value="riviera">Riviera Maya</option>
                    <option value="nayarit">Nayarit</option>
                    <option value="yucatan">Yucatán</option>
                    <option value="cdmx">Mexico City</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <label className="flex items-start gap-3 text-sm text-brand-paper/70">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-1 h-4 w-4 cursor-pointer accent-brand-emerald"
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
                className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 font-ewangi text-label font-semibold text-brand-paper transition hover:bg-brand-paper hover:text-brand-pine disabled:opacity-60"
              >
                {status === "submitting" && (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                )}
                Get verified listings
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}

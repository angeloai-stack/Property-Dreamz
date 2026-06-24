"use client";
// Full contact form with preferred-contact radio group — posts to /api/contact with source:"contact".
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Heading, RevealOnScroll } from "@/components/ui";

const F =
  "w-full rounded-(--radius-input) border-0 bg-[#d9d9d9] px-4 py-3 text-sm text-brand-ink placeholder:text-brand-ink/50 outline-none transition focus:ring-2 focus:ring-brand-teal/50";

type Fields = {
  name: string;
  phoneCode: string;
  phone: string;
  email: string;
  budget: string;
  region: string;
  contactMethod: string;
  message: string;
};

const INIT: Fields = {
  name: "",
  phoneCode: "+1",
  phone: "",
  email: "",
  budget: "",
  region: "",
  contactMethod: "whatsapp",
  message: "",
};

export function ContactForm() {
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, source: "contact" }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <RevealOnScroll direction="up" duration={900}>
    <div className="rounded-[42px] bg-brand-ink p-10 shadow-[0_8px_48px_rgba(0,0,0,0.5)]">
      <Heading level={2} className="mb-8 text-2xl text-brand-paper sm:text-3xl">
        Get in touch
      </Heading>

      {status === "success" ? (
        <div className="flex flex-col items-center gap-4 py-12 text-center">
          <CheckCircle2 className="h-14 w-14 text-brand-teal" aria-hidden="true" />
          <p className="font-ewangi text-subtitle text-brand-paper">Message sent!</p>
          <p className="font-body text-body text-brand-paper/60">
            We&apos;ll be in touch within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => { setStatus("idle"); setFields(INIT); }}
            className="mt-2 font-ewangi text-label text-brand-teal underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-6">
          <label className="space-y-2 text-sm text-brand-paper/70">
            <span className="font-semibold">Full name *</span>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
              value={fields.name}
              onChange={set("name")}
              className={F}
            />
          </label>

          <label className="space-y-2 text-sm text-brand-paper/70">
            <span className="font-semibold">Phone / WhatsApp *</span>
            <div className="grid gap-2 sm:grid-cols-[110px_1fr]">
              <select
                name="phoneCode"
                value={fields.phoneCode}
                onChange={set("phoneCode")}
                className={F}
              >
                <option value="+1">+1</option>
                <option value="+52">+52</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="123 456 7890"
                required
                value={fields.phone}
                onChange={set("phone")}
                className={F}
              />
            </div>
          </label>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-brand-paper/70">
              <span className="font-semibold">Email *</span>
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
            <label className="space-y-2 text-sm text-brand-paper/70">
              <span className="font-semibold">Investment budget</span>
              <select
                name="budget"
                value={fields.budget}
                onChange={set("budget")}
                className={F}
              >
                <option value="">Select a range</option>
                <option value="under150k">Under $150k USD</option>
                <option value="150k-300k">$150k – $300k USD</option>
                <option value="300k-500k">$300k – $500k USD</option>
                <option value="over500k">$500k+ USD</option>
                <option value="unsure">Not sure yet</option>
              </select>
            </label>
          </div>

          <label className="space-y-2 text-sm text-brand-paper/70">
            <span className="font-semibold">Region of interest</span>
            <select name="region" value={fields.region} onChange={set("region")} className={F}>
              <option value="">Select a region</option>
              <option value="baja">Baja California</option>
              <option value="riviera">Riviera Maya</option>
              <option value="nayarit">Nayarit</option>
              <option value="yucatan">Yucatán</option>
              <option value="cdmx">Mexico City</option>
              <option value="other">Other</option>
            </select>
          </label>

          <fieldset className="space-y-3 text-sm text-brand-paper/70">
            <span className="font-semibold">Preferred contact method</span>
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
                    className="h-4 w-4 cursor-pointer accent-brand-teal"
                  />
                  <span className="text-brand-paper/80">{label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="space-y-2 text-sm text-brand-paper/70">
            <span className="font-semibold">Message (optional)</span>
            <textarea
              name="message"
              rows={3}
              placeholder="Tell us more about what you're looking for..."
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
              className="mt-1 h-4 w-4 cursor-pointer accent-brand-teal"
            />
            <span>
              I agree to the{" "}
              <a href="/privacy" className="font-semibold underline hover:text-brand-paper">
                privacy policy
              </a>{" "}
              *
            </span>
          </label>

          {status === "error" && (
            <p className="text-sm text-red-400">
              Something went wrong. Please try again or email hello@propertydreamz.com
            </p>
          )}

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-teal px-6 py-3 font-ewangi text-label font-semibold text-brand-ink transition hover:bg-brand-teal-dark disabled:opacity-60 sm:w-auto"
            >
              {status === "submitting" && (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              )}
              Send message
            </button>
          </div>
        </form>
      )}
    </div>
    </RevealOnScroll>
  );
}

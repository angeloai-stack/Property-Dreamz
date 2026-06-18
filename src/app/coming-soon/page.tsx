/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";
import { CheckCircle2, Loader2 } from "lucide-react";

const F =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-brand-paper placeholder:text-brand-paper/40 outline-none transition focus:border-[#39d3c0]/60 focus:ring-2 focus:ring-[#39d3c0]/20";

type Fields = { name: string; email: string; phone: string };
const INIT: Fields = { name: "", email: "", phone: "" };

function fadeUp(mounted: boolean, delay = 0) {
  return {
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  };
}

export default function ComingSoonPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [fields, setFields] = useState<Fields>(INIT);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const set =
    (k: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setFields((p) => ({ ...p, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/coming-soon", {
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
    <>
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        @keyframes float-med {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(20px) scale(0.95); }
        }
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes counter-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        .logo-bg-spin {
          animation: spin-slow 30s linear infinite;
        }
        .logo-bg-counter {
          animation: counter-spin 45s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(57,211,192,0.3), 0 0 40px rgba(57,211,192,0.1); }
          50% { box-shadow: 0 0 30px rgba(57,211,192,0.5), 0 0 60px rgba(57,211,192,0.2); }
        }
        @keyframes border-spin {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #39d3c0 0%, #fff 40%, #39d3c0 60%, #2bbba8 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .logo-glow { filter: brightness(0) invert(1) drop-shadow(0 0 18px rgba(57,211,192,0.4)); }
      `}</style>

      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brand-ink px-6 py-20">

        {/* Animated background orbs */}
        <div className="pointer-events-none absolute -left-32 top-[-10%] h-125 w-125 rounded-full bg-[#39d3c0]/10 blur-[100px]" style={{ animation: "float-slow 8s ease-in-out infinite" }} />
        <div className="pointer-events-none absolute -right-40 bottom-[-5%] h-150 w-150 rounded-full bg-[#39d3c0]/8 blur-[120px]" style={{ animation: "float-med 10s ease-in-out infinite 1s" }} />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-pine/10 blur-[80px]" style={{ animation: "float-slow 12s ease-in-out infinite 3s" }} />

        {/* Circular logo — one per corner */}
        {(
          [
            { css: { top: "-120px",    left: "-120px",   right: "auto", bottom: "auto" }, anim: "logo-bg-spin"    },
            { css: { top: "-120px",    right: "-120px",  left: "auto",  bottom: "auto" }, anim: "logo-bg-counter" },
            { css: { bottom: "-120px", left: "-120px",   right: "auto", top: "auto"    }, anim: "logo-bg-counter" },
            { css: { bottom: "-120px", right: "-120px",  left: "auto",  top: "auto"    }, anim: "logo-bg-spin"    },
          ] as const
        ).map(({ css, anim }, i) => (
          <CldImage
            key={i}
            src="Logos_Property_D_Variante_2_mvzi3l"
            width={380}
            height={380}
            alt=""
            aria-hidden="true"
            className={`${anim} pointer-events-none absolute opacity-[0.07]`}
            style={{ objectFit: "contain", ...css }}
          />
        ))}

        {/* Subtle grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-md text-center">

          {/* Logo */}
          <div className="flex justify-center" style={fadeUp(mounted, 0)}>
            <CldImage
              src="Logos_Property_D_Variante_Negativo_1_op4iwl"
              alt="Property Dreamz"
              width={320}
              height={160}
              style={{
                width: "320px",
                height: "auto",
                filter: "drop-shadow(0 0 18px rgba(57,211,192,0.4))",
              }}
            />
          </div>

          {/* Divider line */}
          <div
            className="mx-auto mt-8 h-px w-24 rounded-full bg-linear-to-r from-transparent via-brand-teal to-transparent"
            style={fadeUp(mounted, 150)}
          />

          {/* Headline */}
          <div className="mt-8 space-y-3">
            <h1
              className="font-ewangi text-[clamp(2rem,5vw,3rem)] leading-tight text-brand-paper"
              style={fadeUp(mounted, 250)}
            >
              Something big<br />
              <span className="shimmer-text">is coming</span>
            </h1>
            <p
              className="font-body text-base text-brand-paper/60"
              style={fadeUp(mounted, 380)}
            >
              We&apos;re putting the final touches on our platform. Leave your details and be the
              first to explore verified luxury developments across Mexico.
            </p>
          </div>

          {/* Form card */}
          <div
            className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_8px_48px_rgba(0,0,0,0.4)] backdrop-blur-sm"
            style={fadeUp(mounted, 500)}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-6 text-center">
                <CheckCircle2 className="h-14 w-14 text-[#39d3c0]" aria-hidden="true" />
                <p className="font-ewangi text-xl text-brand-paper">You&apos;re on the list!</p>
                <p className="font-body text-sm text-brand-paper/60">
                  We&apos;ll notify you the moment we go live. Stay tuned.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <p className="font-ewangi text-sm font-semibold uppercase tracking-widest text-[#39d3c0]">
                  Get early access
                </p>

                <label className="block space-y-1.5">
                  <span className="font-ewangi text-xs font-semibold uppercase tracking-wider text-brand-paper/60">
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

                <label className="block space-y-1.5">
                  <span className="font-ewangi text-xs font-semibold uppercase tracking-wider text-brand-paper/60">
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

                <label className="block space-y-1.5">
                  <span className="font-ewangi text-xs font-semibold uppercase tracking-wider text-brand-paper/60">
                    Phone / WhatsApp (optional)
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 555 000 0000"
                    value={fields.phone}
                    onChange={set("phone")}
                    className={F}
                  />
                </label>

                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-glow flex w-full items-center justify-center gap-2 rounded-lg bg-[#39d3c0] px-6 py-3.5 font-ewangi text-sm font-semibold text-brand-ink transition hover:bg-[#2bbba8] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
                >
                  {status === "submitting" && (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  )}
                  Notify me at launch
                </button>
              </form>
            )}
          </div>

          {/* Footer note */}
          <p
            className="mt-8 font-body text-xs text-brand-paper/30"
            style={fadeUp(mounted, 650)}
          >
            © 2025 Property Dreamz · hello@propertydreamz.com
          </p>
        </div>
      </main>
    </>
  );
}

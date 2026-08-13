"use client";
// QR-only landing page for developers — reached exclusively via the developer flyer/booth QR
// code. Mini sticky nav (logo + language toggle), split hero (banner photo + quick inquiry
// form), and the full site footer.
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Container } from "@/components/ui";
import { Footer } from "@/components/layout";
import { DevQuickForm } from "@/components/for-developers/DevQuickForm";
import { cn } from "@/lib/utils";

const HERO_IMAGE =
  "https://res.cloudinary.com/dserzvrwe/image/upload/c_fill,g_north,ar_16:9,w_1600,q_auto,f_auto/Roll-Up-01_qrfgyp.png";

const locales = ["en", "es"] as const;

/** Logo + EN/ES switch — the only navigation this standalone QR page needs. */
function QrNav() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-pine">
      <Container className="flex items-center justify-between py-3.5">
        <Link href="/" aria-label="Property Dreamz">
          <Image
            src="https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto/brand/property-dreamz-logo-horizontal"
            alt="Property Dreamz"
            width={180}
            height={36}
            className="h-7 w-auto brightness-0 invert"
          />
        </Link>

        <div className="flex items-center rounded-full border border-white/15 bg-white/10 p-1" role="group" aria-label="Language">
          {locales.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => router.replace(pathname, { locale: l })}
              className={cn(
                "rounded-full px-3.5 py-1.5 font-ewangi text-[12px] font-bold uppercase tracking-wide transition",
                locale === l ? "bg-brand-teal text-brand-pine" : "text-white/60 hover:text-white/90"
              )}
            >
              {l}
            </button>
          ))}
        </div>
      </Container>
    </header>
  );
}

export function DeveloperQrLanding() {
  const t = useTranslations("developerLinks.hero");

  return (
    <main className="min-h-screen bg-brand-paper">
      <QrNav />

      <section className="grid lg:grid-cols-2">
        {/* Banner photo with eyebrow/headline/subheading baked into the overlay */}
        <div className="relative min-h-80 overflow-hidden lg:min-h-140">
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-brand-pine/95 via-brand-pine/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
            <p className="font-ewangi text-[11px] font-semibold uppercase tracking-widest text-brand-teal">
              {t("eyebrow")}
            </p>
            <h1 className="mt-3 whitespace-pre-line font-ewangi text-[clamp(1.9rem,4.5vw,2.7rem)] font-bold leading-[1.05] text-white">
              {t("headline")}
            </h1>
            <p className="mt-4 whitespace-pre-line font-ewangi text-[14px] leading-relaxed text-white/75">
              {t("subheading")}
            </p>
          </div>
        </div>

        {/* Quick inquiry form */}
        <div className="flex items-center justify-center bg-brand-pine px-6 py-12 sm:px-10">
          <DevQuickForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}

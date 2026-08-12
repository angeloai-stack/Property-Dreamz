"use client";
// QR-only landing page — Linktree-style, reuses the Roll-Up-01 banner photo (cropped above its
// baked-in headline) as the hero, then stacks the developer form and quick links below.
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FileText, Globe } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { DevQuickForm } from "@/components/for-developers/DevQuickForm";

const HERO_IMAGE =
  "https://res.cloudinary.com/dserzvrwe/image/upload/c_fill,g_north,ar_16:9,w_1200,q_auto,f_auto/Roll-Up-01_qrfgyp.png";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/propertydreamz", icon: FaInstagram },
  { label: "Facebook", href: "https://facebook.com/propertydreamz", icon: FaFacebookF },
] as const;

function LinkButton({
  href,
  icon: IconComponent,
  children,
  external,
}: {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className =
    "flex w-full items-center gap-3 rounded-xl bg-white px-5 py-4 font-ewangi text-[14px] font-semibold text-brand-ink shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]";
  const inner = (
    <>
      <IconComponent className="h-5 w-5 shrink-0 text-brand-teal-dark" aria-hidden="true" />
      {children}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}

export function DeveloperQrLanding() {
  const t = useTranslations("developerLinks");
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-brand-paper">
      <div className="relative h-[34vh] min-h-[220px] w-full overflow-hidden sm:h-[38vh]">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-brand-paper via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto -mt-14 flex max-w-md flex-col items-center px-6 pb-16 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg ring-4 ring-white">
          <Image
            src="/brand/property-dreamz-logo-circle.png"
            alt="Property Dreamz"
            width={64}
            height={64}
          />
        </div>

        <span className="mt-5 font-ewangi text-[13px] font-semibold uppercase tracking-wide text-brand-teal-dark">
          {t("hero.eyebrow")}
        </span>
        <h1 className="mt-2 font-ewangi text-[clamp(1.6rem,6vw,2.1rem)] font-bold leading-tight text-brand-pine">
          {t("hero.headline")}
        </h1>
        <p className="mt-3 font-ewangi text-[15px] leading-relaxed text-brand-ink/60">
          {t("hero.subheading")}
        </p>

        <div className="mt-8 w-full">
          <DevQuickForm />
        </div>

        <div className="mt-6 flex w-full flex-col gap-3">
          <LinkButton href="https://propertydreamz.com" icon={Globe} external>
            {t("links.website")}
          </LinkButton>
          <LinkButton href="/for-developers" icon={FileText}>
            {t("links.developerProgram")}
          </LinkButton>
        </div>

        <div className="mt-7 flex items-center gap-4">
          <span className="font-ewangi text-[13px] text-brand-ink/50">{t("links.followUs")}</span>
          {socialLinks.map(({ label, href, icon: SocialIcon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-ink/70 shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition hover:bg-brand-teal hover:text-brand-ink"
            >
              <SocialIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>

        <p className="mt-10 font-ewangi text-[12px] text-brand-ink/40">
          {t("footer", { year })}
        </p>
      </div>
    </main>
  );
}

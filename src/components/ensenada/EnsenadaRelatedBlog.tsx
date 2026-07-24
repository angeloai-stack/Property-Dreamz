// "Related Blog" grid, curated for Ensenada — Figma: "Related Blog — Baja California (cuadrícula)" (nodes 1313:18089-18117).
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { BlogCard } from "@/components/blog/BlogCard";
import { RevealOnScroll } from "@/components/ui";
import { posts } from "@/app/[locale]/blog/data";

// Figma's picks for this page: the fideicomiso guide, Rosarito vs. Ensenada, and closing costs.
const FEATURED_SLUGS = ["fideicomiso-explained", "rosarito-vs-ensenada", "closing-costs-and-taxes"];

export function EnsenadaRelatedBlog() {
  const t = useTranslations("ensenada.relatedBlog");
  const relatedPosts = FEATURED_SLUGS.map((slug) => posts.find((p) => p.slug === slug)).filter(
    (p): p is (typeof posts)[number] => p !== undefined
  );

  return (
    <section className="w-full bg-brand-ink px-5 py-14 sm:px-8 md:px-12 lg:px-20">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div className="space-y-2">
          <p className="font-ewangi text-[11px] font-bold uppercase tracking-[0.14em] text-brand-teal">
            {t("eyebrow")}
          </p>
          <h2 className="max-w-xl font-ewangi text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold leading-tight text-white">
            {t("heading")}
          </h2>
          <p className="max-w-xl font-ewangi text-[15px] text-white/50">
            {t("description")}
          </p>
        </div>
        <Link
          href="/blog"
          className="inline-flex shrink-0 items-center gap-1.5 font-ewangi text-[14px] font-semibold text-brand-teal transition hover:text-white"
        >
          {t("viewAllArticles")} <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
        </Link>
      </div>

      <div className="mt-9 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map((post, i) => (
          <RevealOnScroll key={post.id} delay={Math.min(i, 5) * 70}>
            <BlogCard post={post} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

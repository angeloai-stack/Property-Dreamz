"use client";
// Blog listing page — Figma: dark "Related Blogs" section, featured post, filterable grid, pagination.
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { Link } from "@/i18n/navigation";
import { BlogCard } from "@/components/blog/BlogCard";
import { Pagination } from "@/components/blog/Pagination";
import { CampaignForm } from "@/components/forms/CampaignForm";
import { RevealOnScroll } from "@/components/ui";
import { BLOG_CATEGORIES, posts, type BlogCategoryFilter } from "./data";
import { cn } from "@/lib/utils";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const t = useTranslations("blog");
  const [category, setCategory] = useState<BlogCategoryFilter>("All");
  const [page, setPage] = useState(1);

  const featured = posts.find((p) => p.featured)!;
  const rest = useMemo(() => posts.filter((p) => p.id !== featured.id), [featured.id]);

  const filtered = useMemo(
    () => (category === "All" ? rest : rest.filter((p) => p.category === category)),
    [rest, category]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const pageItems = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  function selectCategory(next: BlogCategoryFilter) {
    setCategory(next);
    setPage(1);
  }

  return (
    <main className="flex-1 bg-brand-ink">
      <section className="px-5 py-14 sm:px-8 md:px-12 lg:px-20 lg:py-20">
        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <p className="font-ewangi text-[11px] font-bold uppercase tracking-[0.14em] text-brand-teal">
            {t("listing.eyebrow")}
          </p>
          <h1 className="font-ewangi text-[clamp(1.9rem,4vw,2.5rem)] font-bold leading-tight text-white">
            {t("listing.heading")}
          </h1>
          <p className="font-ewangi text-[1rem] text-brand-paper/55">
            {t("listing.subheading")}
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-3">
          {BLOG_CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => selectCategory(c)}
              className={cn(
                "rounded-[22px] px-4.5 py-2.5 font-ewangi text-[13px] font-bold transition",
                category === c
                  ? "bg-brand-teal text-brand-pine"
                  : "border border-white/22 text-brand-paper/55 hover:border-white/40 hover:text-white"
              )}
            >
              {t(`categories.${c}`)}
            </button>
          ))}
        </div>

        {/* Featured post */}
        <RevealOnScroll direction="up" delay={100} className="mt-10">
          <Link
            href={`/blog/${featured.slug}`}
            className="flex flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] md:flex-row"
          >
            <div className="relative h-56 w-full shrink-0 md:h-auto md:w-[45%]">
              <Image
                src={featured.image}
                alt={t(`posts.${featured.slug}.title`)}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-4 px-6 py-8 sm:px-11 sm:py-10">
              <span className="inline-flex w-fit items-center rounded-full bg-brand-teal px-3 py-1.5 font-ewangi text-[10px] font-bold uppercase tracking-[0.06em] text-brand-pine">
                {t("listing.featuredBadge")} · {t(`categories.${featured.category}`)}
              </span>
              <p className="font-ewangi text-[1.5rem] font-bold leading-snug text-brand-pine md:text-[1.9rem]">
                {t(`posts.${featured.slug}.title`)}
              </p>
              <p className="font-ewangi text-[15px] leading-relaxed text-brand-ink/55">
                {t(`posts.${featured.slug}.excerpt`)}
              </p>
              <div className="flex items-center gap-3">
                <span className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-full bg-brand-pine font-ewangi text-[13px] font-bold text-white">
                  {featured.authorInitials}
                </span>
                <span className="font-ewangi text-[13px] text-brand-ink/55">
                  {t("listing.byLine", { author: featured.author, date: featured.date, readTime: featured.readTime })}
                </span>
              </div>
            </div>
          </Link>
        </RevealOnScroll>

        {/* Grid */}
        {pageItems.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pageItems.map((post, i) => (
              <RevealOnScroll key={post.id} delay={Math.min(i, 5) * 70}>
                <BlogCard post={post} />
              </RevealOnScroll>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-[22px] border border-white/10 bg-white/5 px-6 py-16 text-center">
            <p className="font-ewangi text-[1.5rem] text-brand-paper/50">{t("listing.noPostsInCategory")}</p>
          </div>
        )}

        {/* Pagination */}
        <div className="mt-10 flex justify-center lg:justify-start">
          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
      </section>

      <CampaignForm />
    </main>
  );
}

"use client";
// Individual blog article — Figma: "Blog artículo" / "Article / Template".
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { ArticleToc } from "@/components/blog/ArticleToc";
import { BlogCard } from "@/components/blog/BlogCard";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { CampaignForm } from "@/components/forms/CampaignForm";
import { RevealOnScroll } from "@/components/ui";
import { BLOG_CATEGORIES, posts, type BlogCategoryFilter } from "../data";
import { cn } from "@/lib/utils";

function RelatedPosts({ currentId }: { currentId: number }) {
  const [category, setCategory] = useState<BlogCategoryFilter>("All");

  const candidates = useMemo(() => posts.filter((p) => p.id !== currentId), [currentId]);
  const filtered = useMemo(
    () => (category === "All" ? candidates : candidates.filter((p) => p.category === category)),
    [candidates, category]
  );
  const related = filtered.slice(0, 3);

  return (
    <section className="bg-white px-5 py-14 sm:px-8 md:px-12 lg:px-20">
      <div className="space-y-2.5">
        <p className="font-ewangi text-[11px] font-bold uppercase tracking-[0.14em] text-brand-teal">
          More content from our blog
        </p>
        <h2 className="max-w-xl font-ewangi text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold leading-tight text-black">
          All about real estate, explained
        </h2>
        <p className="max-w-xl font-ewangi text-[15px] text-brand-ink/50">
          Guides, market insights and neighborhood deep-dives for cross-border buyers.
        </p>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        {BLOG_CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className={cn(
              "rounded-[22px] px-4.5 py-2.5 font-ewangi text-[13px] font-bold transition",
              category === c
                ? "bg-brand-teal text-brand-pine"
                : "border border-brand-ink/15 text-brand-ink/50 hover:border-brand-teal/50 hover:text-brand-pine"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {related.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((post, i) => (
            <RevealOnScroll key={post.id} delay={i * 70}>
              <BlogCard post={post} />
            </RevealOnScroll>
          ))}
        </div>
      ) : (
        <p className="mt-8 font-ewangi text-brand-ink/40">No other posts in this category yet.</p>
      )}
    </section>
  );
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const breadcrumbTitle = post.title.split(":")[0];

  return (
    <main className="flex-1 bg-white">
      <article className="flex flex-col items-start gap-10 px-5 pb-16 pt-8 sm:px-8 md:px-12 lg:px-20 lg:pb-24 lg:pt-13">
        {/* Breadcrumb */}
        <p className="font-ewangi text-[13px] font-bold text-[#8c99a8]">
          <Link href="/" className="hover:text-brand-pine">
            Home
          </Link>{" "}
          ›{" "}
          <Link href="/blog" className="hover:text-brand-pine">
            Blog
          </Link>{" "}
          › {post.category} › <span className="text-brand-pine">{breadcrumbTitle}</span>
        </p>

        {/* Header */}
        <div className="flex w-full flex-col items-start gap-4.5">
          <span className="inline-flex items-center rounded-full bg-brand-teal px-3 py-1.5 font-ewangi text-[10px] font-bold uppercase tracking-[0.06em] text-brand-pine">
            {post.category}
          </span>
          <h1 className="w-full font-ewangi text-[2rem] font-bold leading-tight text-brand-pine sm:text-[2.6rem] lg:text-[46px] lg:leading-[54px]">
            {post.title}
          </h1>
          <p className="w-full max-w-3xl font-ewangi text-[17px] leading-relaxed text-[#5c6978] sm:text-[20px] sm:leading-[30px]">
            {post.dek}
          </p>

          <div className="flex items-center gap-3 pt-1.5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-pine font-ewangi text-[15px] font-bold text-white">
              {post.authorInitials}
            </span>
            <div className="flex flex-col gap-0.5">
              <p className="font-ewangi text-[15px] font-bold text-brand-pine">
                By {post.author} · {post.authorRole}
              </p>
              <p className="font-ewangi text-[13px] text-[#8c99a8]">
                Updated {post.date} · {post.readTime}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pt-1.5">
            <p className="font-ewangi text-[13px] font-medium text-[#5c6978]">Share</p>
            <ShareButtons size="sm" />
          </div>
        </div>

        {/* Hero image */}
        <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-96 lg:h-125">
          <Image src={post.image} alt={post.title} fill sizes="(max-width: 1024px) 100vw, 1080px" className="object-cover" priority />
        </div>

        {/* Body row: TOC + content */}
        <div className="flex w-full flex-col items-start gap-10 lg:flex-row lg:gap-16">
          <ArticleToc items={post.toc} />
          <ArticleBody blocks={[...post.body]} />
        </div>

        {/* Share section */}
        <div className="flex w-full flex-col items-start gap-5.5">
          <hr className="w-full border-t border-[#e3ede8]" />
          <div className="flex w-full flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1.5">
              <p className="font-ewangi text-[11px] font-bold uppercase tracking-[0.14em] text-brand-teal">Share</p>
              <p className="font-ewangi text-[1.3rem] font-bold text-brand-pine sm:text-[22px]">
                Found this useful? Share it with a buyer
              </p>
            </div>
            <ShareButtons size="lg" showCopyLink />
          </div>
        </div>

        {/* CTA */}
        <div className="flex w-full flex-col items-start justify-between gap-6 rounded-3xl bg-brand-pine px-6 py-9 sm:flex-row sm:items-center sm:px-10">
          <div className="max-w-xl space-y-2">
            <p className="font-ewangi text-[11px] font-bold uppercase tracking-[0.14em] text-brand-teal">
              Ready to buy?
            </p>
            <p className="font-ewangi text-[1.5rem] font-bold leading-snug text-white sm:text-[30px]">
              Browse certified developments in Baja California
            </p>
            <p className="font-ewangi text-[15px] text-[#b2f2e5]">
              Every listing is title-searched and developer-verified before it goes live.
            </p>
          </div>
          <Link
            href="/properties"
            className="inline-flex shrink-0 items-center gap-2 rounded-[14px] bg-brand-teal px-7 py-4 font-ewangi text-[16px] font-bold text-brand-pine transition hover:bg-brand-teal-dark"
          >
            Browse properties <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </article>

      <RelatedPosts currentId={post.id} />

      <CampaignForm />
    </main>
  );
}

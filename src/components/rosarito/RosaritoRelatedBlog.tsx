// "Related Blog" grid, curated for Rosarito — Figma: "Related Blog — Baja California (cuadrícula)" (nodes 1313:18743-18771).
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { RevealOnScroll } from "@/components/ui";
import { posts } from "@/app/blog/data";

// Figma's picks for this page: the fideicomiso guide, Rosarito vs. Ensenada, and closing costs.
const FEATURED_SLUGS = ["fideicomiso-explained", "rosarito-vs-ensenada", "closing-costs-and-taxes"];

export function RosaritoRelatedBlog() {
  const relatedPosts = FEATURED_SLUGS.map((slug) => posts.find((p) => p.slug === slug)).filter(
    (p): p is (typeof posts)[number] => p !== undefined
  );

  return (
    <section className="w-full bg-brand-ink px-5 py-14 sm:px-8 md:px-12 lg:px-20">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div className="space-y-2">
          <p className="font-ewangi text-[11px] font-bold uppercase tracking-[0.14em] text-brand-teal">
            From the blog
          </p>
          <h2 className="max-w-xl font-ewangi text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold leading-tight text-white">
            Rosarito real estate, explained
          </h2>
          <p className="max-w-xl font-ewangi text-[15px] text-white/50">
            Guides, market insights and neighborhood deep-dives for cross-border buyers.
          </p>
        </div>
        <Link
          href="/blog"
          className="inline-flex shrink-0 items-center gap-1.5 font-ewangi text-[14px] font-semibold text-brand-teal transition hover:text-white"
        >
          View all articles <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
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

// Blog listing card — Figma: "Blog Card", 405x~330 white card, r=20.
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/app/blog/data";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(0,0,0,0.26)]"
    >
      <div className="relative aspect-[27/14] w-full shrink-0 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col items-start gap-3 px-5.5 pb-6 pt-5.5">
        <span className="inline-flex items-center rounded-full bg-brand-teal px-3 py-1.5 font-ewangi text-[10px] font-bold uppercase tracking-[0.06em] text-brand-pine">
          {post.category}
        </span>
        <p className="font-ewangi text-[19px] font-bold leading-snug text-brand-pine">{post.title}</p>
        <p className="font-ewangi text-[13px] text-brand-ink/50">
          {post.date} · {post.readTime}
        </p>
      </div>
    </Link>
  );
}

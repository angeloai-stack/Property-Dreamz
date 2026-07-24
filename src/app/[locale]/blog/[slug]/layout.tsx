// Thin layout wrapper whose sole purpose is exporting per-post metadata for this "use client" route.
import type { Metadata } from "next";
import { posts } from "../data";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Blog" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://propertydreamz.com/blog/${post.slug}`,
      images: [{ url: post.image }],
    },
  };
}

export default function BlogArticleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

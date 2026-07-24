// Thin layout wrapper whose sole purpose is exporting per-post metadata for this "use client" route.
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { posts } from "../data";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Blog" };

  const t = await getTranslations({ locale, namespace: "blog" });
  const title = t(`posts.${post.slug}.title`);
  const description = t(`posts.${post.slug}.excerpt`);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://propertydreamz.com/blog/${post.slug}`,
      images: [{ url: post.image }],
    },
  };
}

export default function BlogArticleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

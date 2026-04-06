import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = await markdownToHtml(post.body);

  return (
    <SiteShell title={post.title} subtitle={post.description}>
      <p className="meta">
        {post.date ? new Date(post.date).toDateString() : "No date"}
        {post.readingMinutes ? ` · ${post.readingMinutes} min read` : ""}
      </p>
      <article className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    </SiteShell>
  );
}

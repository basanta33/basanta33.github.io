import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { getAllPages, getPageBySlug } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";

const hidden = new Set(["about", "blog", "projects", "publications"]);

export function generateStaticParams() {
  return getAllPages()
    .filter((page) => !hidden.has(page.slug))
    .map((page) => ({ slug: page.slug }));
}

export default async function GenericPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (hidden.has(slug)) notFound();
  const page = getPageBySlug(slug);
  if (!page) notFound();

  const html = await markdownToHtml(page.body);

  return (
    <SiteShell title={page.title} subtitle={page.description}>
      <article className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    </SiteShell>
  );
}

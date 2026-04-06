import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { getAllProjects, getProjectBySlug } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const html = await markdownToHtml(project.body);

  return (
    <SiteShell title={project.title} subtitle={project.description}>
      <article className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    </SiteShell>
  );
}

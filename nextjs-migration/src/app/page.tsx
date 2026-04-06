import { SiteShell } from "@/components/site-shell";
import { getPageBySlug } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";

export default async function Home() {
  const about = getPageBySlug("about");
  const html = await markdownToHtml(about?.body ?? "About content not found.");

  return (
    <SiteShell
      title={about?.title ?? "About"}
      subtitle={String(about?.raw.subtitle ?? "")}
    >
      <article className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    </SiteShell>
  );
}

import { SiteShell } from "@/components/site-shell";
import { getPublications } from "@/lib/content";

export default function PublicationsPage() {
  const publications = getPublications().sort((a, b) => {
    const y1 = Number(a.year ?? 0);
    const y2 = Number(b.year ?? 0);
    return y2 - y1;
  });

  return (
    <SiteShell title="Publications" subtitle="Imported from papers.bib">
      <ul className="card-list">
        {publications.map((publication) => (
          <li key={publication.id}>
            <h3>{publication.title}</h3>
            <p>{publication.authors}</p>
            <p className="meta">
              {[publication.journal, publication.year].filter(Boolean).join(" · ")}
            </p>
          </li>
        ))}
      </ul>
    </SiteShell>
  );
}

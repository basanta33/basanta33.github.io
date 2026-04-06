import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { getAllProjects } from "@/lib/content";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <SiteShell title="Projects" subtitle="Migrated from Jekyll projects collection.">
      <ul className="card-list">
        {projects.map((project) => (
          <li key={project.slug}>
            <h3>
              <Link href={`/projects/${project.slug}`}>{project.title}</Link>
            </h3>
            {project.description ? <p>{project.description}</p> : null}
            <p className="meta">
              Category: {String(project.raw.category ?? "uncategorized")}
            </p>
          </li>
        ))}
      </ul>
    </SiteShell>
  );
}

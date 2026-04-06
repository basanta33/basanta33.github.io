import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { getAllPosts, getSiteConfig } from "@/lib/content";

export default function BlogPage() {
  const posts = getAllPosts();
  const site = getSiteConfig();

  return (
    <SiteShell title={site.blog_name ?? "Blog"} subtitle={site.blog_description}>
      <ul className="card-list">
        {posts.map((post) => (
          <li key={post.slug}>
            <h3>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            {post.description ? <p>{post.description}</p> : null}
            <p className="meta">
              {post.date ? new Date(post.date).toDateString() : "No date"}
              {post.readingMinutes ? ` · ${post.readingMinutes} min read` : ""}
            </p>
          </li>
        ))}
      </ul>
    </SiteShell>
  );
}

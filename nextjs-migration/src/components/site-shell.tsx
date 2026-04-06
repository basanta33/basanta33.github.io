import Link from "next/link";
import type { ReactNode } from "react";

const navLinks = [
  { href: "/", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/publications", label: "Publications" },
  { href: "/projects", label: "Projects" },
  { href: "/cv", label: "CV" },
];

export function SiteShell({
  children,
  title,
  subtitle,
}: {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="brand">
            Basanta Khakurel
          </Link>
          <nav className="nav-links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="content">
        {title ? <h1>{title}</h1> : null}
        {subtitle ? <p className="subtitle">{subtitle}</p> : null}
        {children}
      </main>
    </div>
  );
}

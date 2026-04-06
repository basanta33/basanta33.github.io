import { SiteShell } from "@/components/site-shell";

export default function NotFound() {
  return (
    <SiteShell title="Page not found">
      <p>The requested page does not exist in the migrated Next.js app.</p>
    </SiteShell>
  );
}

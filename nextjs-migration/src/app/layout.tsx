import type { Metadata } from "next";
import "./globals.css";
import { getSiteConfig } from "@/lib/content";

const site = getSiteConfig();

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

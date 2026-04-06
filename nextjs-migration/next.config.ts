import type { NextConfig } from "next";

const isUserPages = process.env.GITHUB_REPOSITORY?.endsWith(".github.io");
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath = isUserPages ? "" : repoName ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;

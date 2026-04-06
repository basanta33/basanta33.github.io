import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import yaml from "js-yaml";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content");
const POSTS_DIR = path.join(CONTENT_DIR, "posts");
const PROJECTS_DIR = path.join(CONTENT_DIR, "projects");
const PAGES_DIR = path.join(CONTENT_DIR, "pages");
const BIB_PATH = path.join(CONTENT_DIR, "bibliography", "papers.bib");
const JEKYLL_CONFIG_PATH = path.join(process.cwd(), "..", "_config.yml");

export type SiteConfig = {
  title: string;
  description: string;
  email?: string;
  blog_name?: string;
  blog_description?: string;
};

export type ContentItem = {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  tags: string[];
  categories: string[];
  body: string;
  readingMinutes?: number;
  raw: Record<string, unknown>;
};

export type Publication = {
  id: string;
  title: string;
  authors: string;
  year?: string;
  journal?: string;
  raw: Record<string, unknown>;
};

function readUtf8(filePath: string): string {
  return fs.readFileSync(filePath, "utf8");
}

function normalizeList(value: unknown): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value.map(String);
  return String(value)
    .split(/[,\s]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function stripLiquid(markdown: string): string {
  return markdown
    .replace(/\{%\s*comment\s*%\}[\s\S]*?\{%\s*endcomment\s*%\}/g, "")
    .replace(/\{%-?[\s\S]*?-?%\}/g, "")
    .replace(/\{\{[\s\S]*?\}\}/g, "");
}

function parseItemFromFile(filePath: string): ContentItem {
  const source = readUtf8(filePath);
  const { data, content } = matter(source);
  const fileName = path.basename(filePath, path.extname(filePath));
  const slug = fileName.replace(/^\d{4}-\d{2}-\d{2}-/, "");
  const cleanedBody = stripLiquid(content).trim();
  const readStats = readingTime(cleanedBody);

  return {
    slug,
    title: String(data.title ?? slug),
    description: data.description ? String(data.description) : undefined,
    date: data.date ? String(data.date) : undefined,
    tags: normalizeList(data.tags),
    categories: normalizeList(data.categories),
    body: cleanedBody,
    readingMinutes: Math.max(1, Math.round(readStats.minutes)),
    raw: data,
  };
}

function readItemsInDir(dirPath: string): ContentItem[] {
  if (!fs.existsSync(dirPath)) return [];
  return fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith(".md"))
    .map((file) => parseItemFromFile(path.join(dirPath, file)));
}

export function getSiteConfig(): SiteConfig {
  const source = readUtf8(JEKYLL_CONFIG_PATH);
  const parsed = yaml.load(source) as Record<string, unknown>;

  return {
    title: String(parsed.title ?? "Personal Website"),
    description: String(parsed.description ?? ""),
    email: parsed.email ? String(parsed.email) : undefined,
    blog_name: parsed.blog_name ? String(parsed.blog_name) : undefined,
    blog_description: parsed.blog_description
      ? String(parsed.blog_description)
      : undefined,
  };
}

export function getAllPosts(): ContentItem[] {
  return readItemsInDir(POSTS_DIR).sort((a, b) => {
    const aTime = a.date ? new Date(a.date).getTime() : 0;
    const bTime = b.date ? new Date(b.date).getTime() : 0;
    return bTime - aTime;
  });
}

export function getPostBySlug(slug: string): ContentItem | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getAllProjects(): ContentItem[] {
  return readItemsInDir(PROJECTS_DIR).sort((a, b) => {
    const aImportance = Number(a.raw.importance ?? 9999);
    const bImportance = Number(b.raw.importance ?? 9999);
    return aImportance - bImportance;
  });
}

export function getProjectBySlug(slug: string): ContentItem | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}

export function getAllPages(): ContentItem[] {
  return readItemsInDir(PAGES_DIR);
}

export function getPageBySlug(slug: string): ContentItem | undefined {
  return getAllPages().find((page) => {
    const permalink = String(page.raw.permalink ?? "");
    if (permalink === "/" && slug === "about") return true;
    return page.slug === slug;
  });
}

export function getPublications(): Publication[] {
  if (!fs.existsSync(BIB_PATH)) return [];
  const source = readUtf8(BIB_PATH);
  const entries = source.split(/\n@/).map((entry, idx) => (idx === 0 ? entry : `@${entry}`));

  return entries
    .map((entry) => {
      const idMatch = entry.match(/^@\w+\{([^,]+),/m);
      if (!idMatch) return null;

      const fields: Record<string, string> = {};
      const fieldRegex = /(\w+)\s*=\s*[\{"]([\s\S]*?)[\}"],?\s*$/gm;
      let match: RegExpExecArray | null = fieldRegex.exec(entry);
      while (match) {
        fields[match[1].toLowerCase()] = match[2].replace(/\s+/g, " ").trim();
        match = fieldRegex.exec(entry);
      }

      return {
        id: idMatch[1].trim(),
        title: fields.title ?? idMatch[1].trim(),
        authors: fields.author ?? "Unknown authors",
        year: fields.year,
        journal: fields.journal || fields.booktitle || fields.publisher,
        raw: fields,
      } as Publication;
    })
    .filter((item): item is Publication => Boolean(item));
}

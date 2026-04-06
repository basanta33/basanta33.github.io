## Next.js migration

This folder is a standalone Next.js migration of `basantakhakurel.github.io`.

It imports content from:

- `content/pages` (from Jekyll `_pages`)
- `content/posts` (from Jekyll `_posts`)
- `content/projects` (from Jekyll `_projects`)
- `content/bibliography/papers.bib` (from Jekyll `_bibliography`)

### Implemented routes

- `/` (About page)
- `/blog` and `/blog/[slug]`
- `/projects` and `/projects/[slug]`
- `/publications`
- `/<slug>` for migrated markdown pages (for example `/cv`, `/books`, `/news`)

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production checks

```bash
npm run lint
npm run build
```

## Notes

- Liquid tags from Jekyll templates are stripped during import.
- Most markdown content is rendered as HTML using `remark`.
- Styling is intentionally lightweight and can be replaced with your preferred design system.
- For GitHub Pages, this app uses static export (`output: "export"`), so deployment should publish `nextjs-migration/out`.

## GitHub Pages with submodule

If this folder is wired as a git submodule in the parent repository, use the workflow
`deploy-next-submodule.yml` in the parent repo. It:

- checks out submodules,
- builds this app,
- deploys `nextjs-migration/out` to Pages.

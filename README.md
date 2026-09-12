# KSA Website · Korean Student Association

A website for our school's Korean Student Association (KSA). It brings student
resources, volunteering, projects, mentorship, health & insurance info, and
journal reports together in one place.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Cloudflare Pages · Notion API (planned)

## Local development

```bash
npm install
npm run dev
```

→ [http://localhost:3000](http://localhost:3000)

```bash
npm run build   # production build
npm run lint    # lint
```

## Page structure

| Route | Contents |
| --- | --- |
| `/` | Home (category overview) |
| `/resources` | Student resources — planner, Canvas & InSite guides, health & insurance |
| `/volunteer` | Volunteer — org list, contacts, application format |
| `/showcase` | Showcase — student project write-ups in journal form (Notion-powered) |
| `/mentorship` | Mentor / mentee program |

Key files:

- `src/lib/site.ts` — site info and the categories/navigation (single source of truth)
- `src/components/` — shared components (Navbar, Footer, PageHeader, cards, ui.tsx)
- `src/lib/notion.ts` — **Notion integration point**

## Deploying to Cloudflare Pages

Connect the repo so Cloudflare builds and deploys automatically on every push.

1. [Cloudflare dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Select the `chemke132/KSAWebsite` repository
3. Build settings:
   - **Framework preset:** `Next.js`
   - **Build command:** `npx @cloudflare/next-on-pages@1`
   - **Build output directory:** `.vercel/output/static`
   - **Environment variable:** `NODE_VERSION = 22`
4. **Save and Deploy** → every push to `main` redeploys automatically

> While the site is only static pages, the framework preset's default
> (`npm run build`) is enough to deploy. Switch to the `@cloudflare/next-on-pages`
> build when you add the Notion server integration below.

## Notion integration

Showcase posts (project write-ups in journal form) are written in a Notion
database and published to the site automatically.

1. `npm install @notionhq/client`
2. Create a Notion integration, issue a token, and share the target database with it
3. Set environment variables (in `.env.local` and in Cloudflare Pages):
   - `NOTION_TOKEN`
   - `NOTION_SHOWCASE_DB_ID`
4. Implement the `TODO` inside `getShowcasePosts()` in `src/lib/notion.ts`
5. For pages that use server fetch (`src/app/showcase/page.tsx`), add
   `export const runtime = "edge"` when deploying on Cloudflare Pages

See the `ShowcasePost` type in `src/lib/notion.ts` for the expected data shape.

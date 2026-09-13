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

## Contributing (team workflow)

We don't push to `main` directly — every change goes through a pull request. This
keeps the deployed site from breaking and makes changes easy to review and undo.

**Getting access:** the repo owner adds you as a collaborator
(GitHub → repo **Settings** → **Collaborators**). Accept the invite, then:

```bash
git clone https://github.com/chemke132/KSAWebsite.git
cd KSAWebsite
npm install
npm run dev
```

**Making a change:**

```bash
git checkout -b your-branch-name     # work on a branch, not main
# ...edit, then:
git add -A && git commit -m "Describe your change"
git push -u origin your-branch-name
```

Then open a **Pull Request** on GitHub and click **Merge** once it's ready.
Before starting new work, `git pull` on `main` to stay up to date.

Rough areas (coordinate before overlapping): pages/design, Notion showcase
integration, content. Talk it out if two people need the same files.

### One-time setup for the owner (branch protection)

To enforce the above, the owner enables a branch ruleset once:
GitHub → repo **Settings** → **Branches** → **Add branch ruleset**, target `main`,
then turn on:

- **Require a pull request before merging** (blocks direct pushes to `main`)
- **Block force pushes** (protects history)
- *(optional)* **Require approvals: 1** — leave off for faster self-merges;
  turn on later if the team grows.

/**
 * Notion integration point
 * -----------------------------------------------------------
 * Showcase posts (project write-ups in journal form) are written in a Notion
 * database and pulled into the site through this function. Until it's wired up,
 * it returns an empty array.
 *
 * How to connect (summary):
 *   1. `npm install @notionhq/client`
 *   2. Create a Notion integration, issue a token, and share the database
 *      with it. Set env vars: NOTION_TOKEN, NOTION_SHOWCASE_DB_ID
 *   3. In getShowcasePosts() below, query the database and map each page
 *      into a ShowcasePost.
 *
 * Note: to use server fetch on Cloudflare Pages (next-on-pages), add
 * `export const runtime = "edge"` to any page that consumes this data.
 */

export type ShowcasePost = {
  id: string;
  title: string;
  author: string;
  date: string; // ISO string
  summary: string;
  tags: string[];
  url?: string; // Notion page or detail link
};

export async function getShowcasePosts(): Promise<ShowcasePost[]> {
  // TODO: wire up the Notion API
  // const notion = new Client({ auth: process.env.NOTION_TOKEN });
  // const res = await notion.databases.query({
  //   database_id: process.env.NOTION_SHOWCASE_DB_ID!,
  //   sorts: [{ property: "Date", direction: "descending" }],
  // });
  // return res.results.map(mapPageToPost);
  return [];
}

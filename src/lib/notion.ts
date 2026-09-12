/**
 * Notion integration point
 * -----------------------------------------------------------
 * Journal reports are written in a Notion database and pulled into the site
 * through this function. Until it's wired up, it returns an empty array.
 *
 * How to connect (summary):
 *   1. `npm install @notionhq/client`
 *   2. Create a Notion integration, issue a token, and share the database
 *      with it. Set env vars: NOTION_TOKEN, NOTION_JOURNAL_DB_ID
 *   3. In getJournalEntries() below, query the database and map each page
 *      into a JournalEntry.
 *
 * Note: to use server fetch on Cloudflare Pages (next-on-pages), add
 * `export const runtime = "edge"` to any page that consumes this data.
 */

export type JournalEntry = {
  id: string;
  title: string;
  author: string;
  date: string; // ISO string
  summary: string;
  tags: string[];
  url?: string; // Notion page or detail link
};

export async function getJournalEntries(): Promise<JournalEntry[]> {
  // TODO: wire up the Notion API
  // const notion = new Client({ auth: process.env.NOTION_TOKEN });
  // const res = await notion.databases.query({
  //   database_id: process.env.NOTION_JOURNAL_DB_ID!,
  //   sorts: [{ property: "Date", direction: "descending" }],
  // });
  // return res.results.map(mapPageToEntry);
  return [];
}

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

import type {
  InsuranceStatus,
  Provider,
  Specialty,
} from "@/lib/healthcare";
import { SPECIALTIES } from "@/lib/healthcare";

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

/**
 * Healthcare providers (added for the Student Resources page)
 * Read from a Notion database at BUILD time. Edits in Notion appear on the
 * site the next time it is deployed.
 *
 * Env vars (set in .env.local and in Cloudflare Pages):
 *   NOTION_TOKEN                       integration token (secret!)
 *   NOTION_HEALTHCARE_DB_ID            database ID from the Notion URL
 *   NOTION_HEALTHCARE_DATA_SOURCE_ID   (optional) skips one lookup if set
 */

/* ------------------------------------------------------------------ */
/* Healthcare providers                                                */
/* ------------------------------------------------------------------ */

/**
 * ⚠️ These must match the column names in the Notion database EXACTLY
 * (including capitalization and spaces). If your teammate's database uses
 * different names, change ONLY the right-hand side here.
 */
const PROP = {
  name: "Name",
  specialties: "Specialties",
  address: "Address",
  phone: "Phone",
  email: "Email",
  contactUrl: "Contact URL",
  howToBook: "How to book",
  insurance: "School insurance",
  insuranceNote: "Insurance note",
  insuranceAppSteps: "Insurance app steps",
  languages: "Languages",
  website: "Website",
  lastVerified: "Last verified",
  status: "Status",
} as const;

/** Only rows whose Status is "Published" are shown on the site. */
const PUBLISHED_VALUE = "published";

const NOTION_VERSION = "2025-09-03";
const API = "https://api.notion.com/v1";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type NotionProps = Record<string, any>;

function headers(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    "Notion-Version": NOTION_VERSION,
    "Content-Type": "application/json",
  };
}

async function resolveDataSourceId(
  token: string,
  databaseId: string,
): Promise<string> {
  const fromEnv = process.env.NOTION_HEALTHCARE_DATA_SOURCE_ID;
  if (fromEnv) return fromEnv;

  const res = await fetch(`${API}/databases/${databaseId}`, {
    headers: headers(token),
  });
  if (!res.ok) throw new Error(`retrieve database failed (${res.status})`);
  const db = await res.json();
  const id = db?.data_sources?.[0]?.id;
  if (!id) throw new Error("no data source found in this database");
  return id;
}

async function queryAllRows(token: string, dataSourceId: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rows: any[] = [];
  let cursor: string | undefined;

  do {
    const res = await fetch(`${API}/data_sources/${dataSourceId}/query`, {
      method: "POST",
      headers: headers(token),
      body: JSON.stringify({
        page_size: 100,
        ...(cursor ? { start_cursor: cursor } : {}),
      }),
    });
    if (!res.ok) throw new Error(`query failed (${res.status})`);
    const data = await res.json();
    rows.push(...data.results);
    cursor = data.has_more ? data.next_cursor : undefined;
  } while (cursor);

  return rows;
}

/* --- small readers for Notion property shapes ---------------------- */

const plain = (arr: { plain_text: string }[] | undefined) =>
  (arr ?? []).map((t) => t.plain_text).join("").trim();

function readText(p: NotionProps | undefined): string | undefined {
  if (!p) return undefined;
  const out =
    p.type === "title"
      ? plain(p.title)
      : p.type === "rich_text"
        ? plain(p.rich_text)
        : p.type === "url"
          ? p.url
          : p.type === "email"
            ? p.email
            : p.type === "phone_number"
              ? p.phone_number
              : p.type === "select"
                ? p.select?.name
                : p.type === "status"
                  ? p.status?.name
                  : undefined;
  return out ? String(out).trim() || undefined : undefined;
}

function readMulti(p: NotionProps | undefined): string[] {
  if (p?.type === "multi_select")
    return p.multi_select.map((o: { name: string }) => o.name);
  const single = readText(p);
  return single ? [single] : [];
}

function readDate(p: NotionProps | undefined): string | undefined {
  return p?.type === "date" ? (p.date?.start ?? undefined) : undefined;
}

function readInsurance(p: NotionProps | undefined): InsuranceStatus {
  const v = (readText(p) ?? "").toLowerCase();
  if (v.includes("not")) return "not-accepted";
  if (v.startsWith("accept") || v === "yes") return "accepted";
  return "call-to-confirm";
}

function mapRowToProvider(page: { id: string; properties: NotionProps }) {
  const props = page.properties;

  const name = readText(props[PROP.name]);
  const address = readText(props[PROP.address]);
  if (!name) return null; // skip rows with no name

  const specialties = readMulti(props[PROP.specialties]).filter(
    (s): s is Specialty => (SPECIALTIES as readonly string[]).includes(s),
  );

  const provider: Provider = {
    id: page.id,
    name,
    specialties,
    address: address ?? "Address not listed",
    phone: readText(props[PROP.phone]),
    email: readText(props[PROP.email]),
    contactUrl: readText(props[PROP.contactUrl]),
    howToBook: readText(props[PROP.howToBook]) ?? "See the clinic website.",
    insurance: readInsurance(props[PROP.insurance]),
    insuranceNote: readText(props[PROP.insuranceNote]),
    insuranceAppSteps: readText(props[PROP.insuranceAppSteps]),
    languages: readMulti(props[PROP.languages]),
    website: readText(props[PROP.website]),
    lastVerified: readDate(props[PROP.lastVerified]) ?? "Not yet verified",
  };
  return provider;
}

/**
 * Returns published providers, sorted by name.
 * Never throws: if Notion is unreachable or not configured, it logs a
 * warning and returns an empty list so the rest of the site still builds.
 */
export async function getHealthcareProviders(): Promise<Provider[]> {
  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_HEALTHCARE_DB_ID;

  if (!token || !databaseId) {
    console.warn(
      "[notion] NOTION_TOKEN or NOTION_HEALTHCARE_DB_ID is missing — healthcare list will be empty.",
    );
    return [];
  }

  try {
    const dataSourceId = await resolveDataSourceId(token, databaseId);
    const rows = await queryAllRows(token, dataSourceId);

    return rows
      .filter(
        (r) =>
          (readText(r.properties[PROP.status]) ?? "").toLowerCase() ===
          PUBLISHED_VALUE,
      )
      .map(mapRowToProvider)
      .filter((p): p is Provider => p !== null)
      .sort((a, b) => a.name.localeCompare(b.name));
  } catch (err) {
    console.warn("[notion] Could not load healthcare providers:", err);
    return [];
  }
}

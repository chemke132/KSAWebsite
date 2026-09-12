/**
 * Notion 연동 지점 (팀원 담당)
 * -----------------------------------------------------------
 * 저널 리포트는 Notion 데이터베이스에 작성되고, 이 함수를 통해
 * 웹사이트로 불러옵니다. 아직 연동 전이므로 빈 배열을 반환합니다.
 *
 * 연동 방법 (요약):
 *   1. `npm install @notionhq/client`
 *   2. Notion integration을 만들고 토큰 발급
 *      → 환경변수 NOTION_TOKEN, NOTION_JOURNAL_DB_ID 설정
 *   3. 아래 getJournalEntries()에서 databases.query 로 페이지 조회 후
 *      JournalEntry[] 형태로 매핑하여 반환
 *
 * 참고: Cloudflare Pages(next-on-pages)에서 서버 fetch를 쓰려면
 * 이 데이터를 사용하는 페이지에 `export const runtime = "edge"` 를 추가하세요.
 */

export type JournalEntry = {
  id: string;
  title: string;
  author: string;
  date: string; // ISO string
  summary: string;
  tags: string[];
  url?: string; // Notion 페이지 또는 상세 링크
};

export async function getJournalEntries(): Promise<JournalEntry[]> {
  // TODO(팀원): Notion API 연동
  // const notion = new Client({ auth: process.env.NOTION_TOKEN });
  // const res = await notion.databases.query({
  //   database_id: process.env.NOTION_JOURNAL_DB_ID!,
  //   sorts: [{ property: "Date", direction: "descending" }],
  // });
  // return res.results.map(mapPageToEntry);
  return [];
}

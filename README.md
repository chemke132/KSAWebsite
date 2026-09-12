# KSA Website · 한인 학생회

우리 학교 한인 학생회(Korean Student Association)를 위한 웹사이트입니다.
학생 자료, 봉사활동, 프로젝트, 멘토링, 건강·보험 정보, 그리고 저널 리포트를 한곳에 모았습니다.

**스택:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Cloudflare Pages · Notion API(예정)

## 로컬 개발

```bash
npm install
npm run dev
```

→ [http://localhost:3000](http://localhost:3000)

```bash
npm run build   # 프로덕션 빌드
npm run lint    # 린트
```

## 페이지 구조

| 경로 | 내용 |
| --- | --- |
| `/` | 홈 (카테고리 안내) |
| `/resources` | 학생 자료 — 플래너, Canvas · InSite 사용법 |
| `/volunteer` | 봉사활동 — 기관 리스트, 연락처, 신청 양식 |
| `/projects` | 프로젝트 — 개인·단체 프로젝트 저널 |
| `/mentorship` | 멘토·멘티 프로그램 |
| `/health` | 건강·보험 — 주변 병원, 보험 팁 |
| `/journal` | 저널 리포트 (Notion 연동) |

주요 파일:

- `src/lib/site.ts` — 사이트 정보와 카테고리/네비게이션 (한곳에서 관리)
- `src/components/` — Navbar, Footer, PageHeader, 카드 등 공통 컴포넌트
- `src/lib/notion.ts` — **Notion 연동 지점** (팀원 담당)

## Cloudflare Pages 배포

GitHub에 push하면 Cloudflare가 자동으로 빌드·배포하도록 연결합니다.

1. [Cloudflare 대시보드](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. `chemke132/KSAWebsite` 저장소 선택
3. 빌드 설정:
   - **Framework preset:** `Next.js`
   - **Build command:** `npx @cloudflare/next-on-pages@1`
   - **Build output directory:** `.vercel/output/static`
   - **환경변수:** `NODE_VERSION = 22`
4. **Save and Deploy** → 이후 `main` 브랜치에 push할 때마다 자동 재배포

> 정적 페이지만 있는 현재 단계에서는 프레임워크 프리셋의 기본 설정(`npm run build`)만으로도 배포됩니다.
> 아래 Notion 서버 연동을 추가할 때 `@cloudflare/next-on-pages` 빌드로 전환하세요.

## Notion 연동 (팀원 담당)

저널 리포트는 Notion 데이터베이스에 작성 → 웹사이트에 자동 게시되는 구조입니다.

1. `npm install @notionhq/client`
2. Notion integration 생성 후 토큰 발급, 대상 데이터베이스에 연결
3. 환경변수 설정 (`.env.local` 및 Cloudflare Pages):
   - `NOTION_TOKEN`
   - `NOTION_JOURNAL_DB_ID`
4. `src/lib/notion.ts`의 `getJournalEntries()` 안 `TODO`를 구현
5. 서버 fetch를 쓰는 페이지(`src/app/journal/page.tsx`)에는 Cloudflare Pages에서
   `export const runtime = "edge"` 추가

데이터 형식은 `src/lib/notion.ts`의 `JournalEntry` 타입을 참고하세요.

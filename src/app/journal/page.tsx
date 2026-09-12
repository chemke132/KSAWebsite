import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section, Card, InfoBanner, ComingSoon } from "@/components/ui";
import { getJournalEntries } from "@/lib/notion";

export const metadata: Metadata = { title: "저널 리포트" };

export default async function JournalPage() {
  const entries = await getJournalEntries();

  return (
    <>
      <PageHeader
        emoji="📝"
        title="저널 리포트"
        titleEn="Journal"
        description="학생뿐 아니라 누구나 작성할 수 있는 저널 리포트입니다. Notion에 작성하면 이곳에 게시됩니다."
      />

      <Section>
        <InfoBanner>
          이 페이지는 Notion과 연동됩니다. Notion 데이터베이스에 정해진 형식으로
          글을 올리면 자동으로 이곳에 나타납니다. <em>(연동은 팀원이 진행 예정)</em>
        </InfoBanner>
      </Section>

      <Section title="최근 리포트 / Recent Reports">
        {entries.length === 0 ? (
          <ComingSoon note="아직 게시된 리포트가 없어요. Notion 연동 후 이곳에 표시됩니다." />
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {entries.map((e) => (
              <Card key={e.id} title={e.title}>
                <p className="text-xs text-muted">
                  {e.author} · {new Date(e.date).toLocaleDateString("ko-KR")}
                </p>
                <p className="mt-2">{e.summary}</p>
                {e.url && (
                  <a href={e.url} className="mt-3 inline-block">
                    자세히 보기 →
                  </a>
                )}
              </Card>
            ))}
          </div>
        )}
      </Section>

      <Section title="작성 방법 / How to Submit">
        <Card>
          <ol className="list-inside list-decimal space-y-1">
            <li>공유된 Notion 템플릿을 엽니다.</li>
            <li>제목, 작성자, 날짜, 내용, 태그를 형식에 맞게 입력합니다.</li>
            <li>저장하면 이 페이지에 자동으로 게시됩니다.</li>
          </ol>
        </Card>
      </Section>
    </>
  );
}

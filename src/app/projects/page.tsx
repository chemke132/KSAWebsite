import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section, ComingSoon, InfoBanner } from "@/components/ui";

export const metadata: Metadata = { title: "프로젝트" };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        emoji="🚀"
        title="프로젝트"
        titleEn="Projects"
        description="학생들의 개인 · 단체 프로젝트를 저널 형식으로 기록하고 공유하는 공간입니다."
      />

      <Section>
        <InfoBanner>
          프로젝트 기록은 저널 리포트와 연동될 예정입니다. Notion에 작성한 프로젝트가
          이곳에 자동으로 표시됩니다.
        </InfoBanner>
      </Section>

      <Section title="프로젝트 목록 / Project List">
        <ComingSoon note="첫 프로젝트가 등록되면 이곳에 카드 형태로 나타납니다." />
      </Section>
    </>
  );
}

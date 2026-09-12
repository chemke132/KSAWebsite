import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section, Card, InfoBanner } from "@/components/ui";

export const metadata: Metadata = { title: "학생 자료" };

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        emoji="📚"
        title="학생 자료"
        titleEn="Student Resources"
        description="학교생활에 필요한 플래너, Canvas · InSite 사용법 등 실용적인 안내를 모았습니다."
      />

      <Section title="학교 플래너 / Academic Planner">
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="학기 플래너 활용법">
            수업 일정, 과제 마감일, 시험 기간을 한눈에 정리하는 방법을 안내합니다.
          </Card>
          <Card title="학사 일정 (Academic Calendar)">
            개강 · 종강, 방학, 공휴일 등 주요 학사 일정을 확인하세요.
          </Card>
        </div>
      </Section>

      <Section title="플랫폼 사용법 / Platform Guides">
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="Canvas 사용법">
            과제 제출, 성적 확인, 알림 설정 등 Canvas 기본 사용법 안내.
          </Card>
          <Card title="InSite 사용법">
            수강 신청, 성적표, 학생 정보 관리 등 InSite 이용 가이드.
          </Card>
        </div>
      </Section>

      <Section>
        <InfoBanner>
          찾는 자료가 없나요? 학생회 운영진에게 알려주시면 추가해 드릴게요.
        </InfoBanner>
      </Section>
    </>
  );
}

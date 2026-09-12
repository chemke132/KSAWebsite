import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section, Card, InfoBanner } from "@/components/ui";

export const metadata: Metadata = { title: "멘토 · 멘티" };

export default function MentorshipPage() {
  return (
    <>
      <PageHeader
        emoji="🧭"
        title="멘토 · 멘티"
        titleEn="Mentorship"
        description="선배와 후배를 연결해 학업 · 진로 · 학교생활 적응을 돕는 멘토링 프로그램입니다."
      />

      <Section title="어떻게 진행되나요? / How it works">
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="1. 신청">
            멘토 또는 멘티로 신청합니다.
          </Card>
          <Card title="2. 매칭">
            관심사와 전공을 바탕으로 짝을 연결해 드립니다.
          </Card>
          <Card title="3. 활동">
            정기적으로 만나 학업 · 진로 · 생활 팁을 나눕니다.
          </Card>
        </div>
      </Section>

      <Section title="참여 신청 / Join">
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="멘토로 참여하기">
            후배들에게 도움을 주고 싶은 선배를 찾습니다. 신청 방법은 곧 안내됩니다.
          </Card>
          <Card title="멘티로 참여하기">
            도움이 필요한 후배를 위한 프로그램입니다. 신청 방법은 곧 안내됩니다.
          </Card>
        </div>
        <div className="mt-5">
          <InfoBanner>
            멘토링 신청 양식과 일정은 준비되는 대로 이곳에 업데이트됩니다.
          </InfoBanner>
        </div>
      </Section>
    </>
  );
}

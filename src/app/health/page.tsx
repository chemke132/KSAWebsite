import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section, Card, InfoBanner } from "@/components/ui";

export const metadata: Metadata = { title: "건강 · 보험" };

export default function HealthPage() {
  return (
    <>
      <PageHeader
        emoji="🏥"
        title="건강 · 보험"
        titleEn="Health & Insurance"
        description="주변 병원 정보와 학생 보험에 관한 유용한 팁을 정리했습니다."
      />

      <Section title="주변 병원 / Nearby Clinics">
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="한국어 가능 병원">
            한국어로 진료가 가능한 인근 병원 · 클리닉 목록 (업데이트 예정).
          </Card>
          <Card title="응급 상황 / Emergency">
            응급 시 연락처와 가까운 응급실 정보를 확인하세요.
          </Card>
        </div>
      </Section>

      <Section title="보험 팁 / Insurance Tips">
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="학생 보험 이해하기">
            학교 보험 · 개인 보험의 차이와 가입 · 청구 방법 안내.
          </Card>
          <Card title="자주 묻는 질문 (FAQ)">
            진료비, 처방, 보험 청구 관련 자주 묻는 질문 모음.
          </Card>
        </div>
        <div className="mt-5">
          <InfoBanner>
            의료 정보는 참고용입니다. 응급 상황에서는 즉시 911(또는 현지 응급번호)에
            연락하세요.
          </InfoBanner>
        </div>
      </Section>
    </>
  );
}

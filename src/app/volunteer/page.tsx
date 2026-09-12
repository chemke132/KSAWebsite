import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section, Card, InfoBanner } from "@/components/ui";

export const metadata: Metadata = { title: "봉사활동" };

type Org = {
  name: string;
  type: string;
  contact: string;
  note: string;
};

// 예시 데이터 — 실제 기관 정보로 교체하세요.
const orgs: Org[] = [
  {
    name: "지역 커뮤니티 센터",
    type: "행사 지원 · 통역",
    contact: "example@community.org",
    note: "주말 행사 보조, 한국어-영어 통역 봉사 모집",
  },
  {
    name: "지역 도서관",
    type: "튜터링 · 정리",
    contact: "(000) 000-0000",
    note: "방과 후 학생 튜터링 및 도서 정리",
  },
  {
    name: "노인 복지관",
    type: "말벗 · 배식",
    contact: "example@care.org",
    note: "정기 방문 봉사, 사전 교육 제공",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <PageHeader
        emoji="🤝"
        title="봉사활동"
        titleEn="Volunteer"
        description="봉사활동이 필요한 기관들의 리스트와 연락처입니다. 아래 신청 양식을 참고해 직접 신청하세요."
      />

      <Section title="봉사 기관 리스트 / Opportunities">
        <div className="overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-2 text-xs uppercase tracking-wider text-muted">
              <tr>
                <th className="px-4 py-3">기관 / Organization</th>
                <th className="px-4 py-3">봉사 종류</th>
                <th className="px-4 py-3">연락처</th>
                <th className="hidden px-4 py-3 md:table-cell">비고</th>
              </tr>
            </thead>
            <tbody>
              {orgs.map((o) => (
                <tr key={o.name} className="border-t border-border bg-surface">
                  <td className="px-4 py-3 font-medium">{o.name}</td>
                  <td className="px-4 py-3 text-muted">{o.type}</td>
                  <td className="px-4 py-3 text-muted">{o.contact}</td>
                  <td className="hidden px-4 py-3 text-muted md:table-cell">
                    {o.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted">
          * 위 정보는 예시입니다. 실제 기관 정보로 업데이트하세요.
        </p>
      </Section>

      <Section title="신청 양식 / Application Format">
        <Card title="이메일 신청 시 아래 형식을 사용하세요">
          <ul className="mt-1 list-inside list-disc space-y-1">
            <li>이름 (Name):</li>
            <li>학년 / 소속 (Grade / School):</li>
            <li>연락처 (Contact):</li>
            <li>희망 봉사 기관 (Preferred organization):</li>
            <li>가능한 날짜 · 시간 (Availability):</li>
            <li>봉사 경험 (Experience, optional):</li>
          </ul>
        </Card>
        <div className="mt-5">
          <InfoBanner>
            신청 후 확인증이나 봉사 시간 증빙이 필요하면 각 기관에 직접 요청하세요.
          </InfoBanner>
        </div>
      </Section>
    </>
  );
}

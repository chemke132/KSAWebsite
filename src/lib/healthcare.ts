// 의료 리소스의 타입과 진료과 목록.
// 병원 데이터 자체는 Notion에서 가져옵니다 (src/lib/notion.ts 참고).

export const SPECIALTIES = [
  "Primary Care",
  "Internal Medicine",
  "Pediatrics",
  "OB/GYN",
  "Dermatology",
  "Orthopedics",
  "Urgent Care",
  "Mental Health",
  "Dental",
  "Optometry",
] as const;

export type Specialty = (typeof SPECIALTIES)[number];

// accepted        = 학교 보험 사용 가능 (확인 완료)
// not-accepted    = 사용 불가 (확인 완료)
// call-to-confirm = 아직 확인 안 됨 / 전화로 확인 필요
export type InsuranceStatus = "accepted" | "not-accepted" | "call-to-confirm";

export type Provider = {
  id: string;
  name: string; // 병원/클리닉 이름
  specialties: Specialty[]; // 진료과 (여러 개 가능)
  address: string; // 위치
  phone?: string; // 전화번호
  email?: string; // 이메일
  contactUrl?: string; // Contact 페이지 링크
  howToBook: string; // 예약 방법
  insurance: InsuranceStatus; // 학교 보험 사용 가능 여부
  insuranceNote?: string; // 보험 관련 추가 설명
  insuranceAppSteps?: string; // 학교 전용 보험 앱에서 예약하는 방법
  languages?: string[]; // 가능한 언어. 예: ["English", "Korean"]
  website?: string; // 공식 웹사이트
  lastVerified: string; // 마지막으로 정보를 확인한 날짜 (YYYY-MM-DD)
};

export const site = {
  name: "KSA",
  fullName: "Korean Student Association",
  fullNameKo: "한인 학생회",
  tagline: "우리 학교 한인 학생들을 위한 자료 · 봉사 · 프로젝트 허브",
  taglineEn: "Resources, volunteering, and projects for Korean students",
};

export type NavItem = {
  href: string;
  label: string; // Korean label
  labelEn: string; // English label
  desc: string; // short description
  emoji: string;
};

/** Main sections — also used to render the home page category grid. */
export const categories: NavItem[] = [
  {
    href: "/resources",
    label: "학생 자료",
    labelEn: "Student Resources",
    desc: "학교 플래너, Canvas · InSite 사용법 등 학교생활에 필요한 안내",
    emoji: "📚",
  },
  {
    href: "/volunteer",
    label: "봉사활동",
    labelEn: "Volunteer",
    desc: "봉사 가능한 기관 리스트와 연락처, 신청 방법 안내",
    emoji: "🤝",
  },
  {
    href: "/projects",
    label: "프로젝트",
    labelEn: "Projects",
    desc: "학생들의 개인 · 단체 프로젝트를 저널 형식으로 기록",
    emoji: "🚀",
  },
  {
    href: "/mentorship",
    label: "멘토 · 멘티",
    labelEn: "Mentorship",
    desc: "선배와 후배를 연결하는 멘토링 프로그램",
    emoji: "🧭",
  },
  {
    href: "/health",
    label: "건강 · 보험",
    labelEn: "Health & Insurance",
    desc: "주변 병원 정보와 보험 관련 팁",
    emoji: "🏥",
  },
  {
    href: "/journal",
    label: "저널 리포트",
    labelEn: "Journal",
    desc: "누구나 작성할 수 있는 저널 리포트 (Notion 연동 예정)",
    emoji: "📝",
  },
];

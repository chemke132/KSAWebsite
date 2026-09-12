import type { IconName } from "@/components/Icon";

export const site = {
  name: "KSA",
  fullName: "Korean Student Association",
  college: "Diablo Valley College",
  tagline:
    "Resources, volunteering, and projects — all in one place for our KSA community.",
};

export type NavItem = {
  href: string;
  label: string;
  desc: string; // short description
  icon: IconName;
  tone: "primary" | "accent"; // alternating brand color for the card icon
};

/** Main sections — also used to render the home page category grid. */
export const categories: NavItem[] = [
  {
    href: "/resources",
    label: "Student Resources",
    desc: "Academic planner plus how-to guides for Canvas and InSite.",
    icon: "book",
    tone: "primary",
  },
  {
    href: "/volunteer",
    label: "Volunteer",
    desc: "A list of volunteer organizations with contacts and how to apply.",
    icon: "users",
    tone: "accent",
  },
  {
    href: "/projects",
    label: "Projects",
    desc: "Individual and group student projects, kept in journal form.",
    icon: "rocket",
    tone: "primary",
  },
  {
    href: "/mentorship",
    label: "Mentorship",
    desc: "A program connecting mentors and mentees.",
    icon: "compass",
    tone: "accent",
  },
  {
    href: "/health",
    label: "Health & Insurance",
    desc: "Nearby clinics and helpful insurance tips.",
    icon: "pulse",
    tone: "primary",
  },
  {
    href: "/journal",
    label: "Journal",
    desc: "Journal reports anyone can write (Notion-powered, coming soon).",
    icon: "pen",
    tone: "accent",
  },
];

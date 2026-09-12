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
    desc: "Planner, Canvas & InSite guides, plus health and insurance tips.",
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
    href: "/showcase",
    label: "Showcase",
    desc: "Individual and group student projects, posted in journal form.",
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
];

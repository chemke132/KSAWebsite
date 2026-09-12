export const site = {
  name: "KSA",
  fullName: "Korean Student Association",
  tagline: "Resources, volunteering, and projects — all in one place for our KSA community",
};

export type NavItem = {
  href: string;
  label: string;
  desc: string; // short description
  emoji: string;
};

/** Main sections — also used to render the home page category grid. */
export const categories: NavItem[] = [
  {
    href: "/resources",
    label: "Student Resources",
    desc: "Academic planner plus how-to guides for Canvas and InSite",
    emoji: "📚",
  },
  {
    href: "/volunteer",
    label: "Volunteer",
    desc: "A list of volunteer organizations with contacts and how to apply",
    emoji: "🤝",
  },
  {
    href: "/projects",
    label: "Projects",
    desc: "Individual and group student projects, kept in journal form",
    emoji: "🚀",
  },
  {
    href: "/mentorship",
    label: "Mentorship",
    desc: "A program connecting mentors and mentees",
    emoji: "🧭",
  },
  {
    href: "/health",
    label: "Health & Insurance",
    desc: "Nearby clinics and helpful insurance tips",
    emoji: "🏥",
  },
  {
    href: "/journal",
    label: "Journal",
    desc: "Journal reports anyone can write (Notion-powered, coming soon)",
    emoji: "📝",
  },
];


import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Explore Opportunities",
};

const categories = [
  {
    title: "Volunteer Opportunities",
    icon: "🤝",
    description:
      "Make a difference through community service, education, healthcare, and STEM volunteer programs.",
    href: "/volunteer",
    available: true,
  },
  {
    title: "Internships",
    icon: "💼",
    description:
      "Explore professional experiences and career opportunities related to your field of study.",
    href: "",
    available: false,
  },
  {
    title: "Research Opportunities",
    icon: "🔬",
    description:
      "Discover opportunities to gain research experience and develop academic skills.",
    href: "",
    available: false,
  },
  {
    title: "Campus & Student Organizations",
    icon: "🎓",
    description:
      "Get involved in campus activities, student clubs, and leadership programs.",
    href: "",
    available: false,
  },
];

export default function OpportunitiesPage() {
  return (
    <>
      <PageHeader
        icon="users"
        title="Explore Opportunities"
        description="Discover experiences beyond the classroom. Find volunteer programs, internships, research opportunities, and campus activities that match your interests."
      />

      <Section title="Find Your Next Opportunity">
        <p className="mb-6 text-muted">
          Choose a category below to start exploring.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <div className="mb-4 text-4xl">
                {category.icon}
              </div>

              <h3 className="mb-3 text-xl font-semibold">
                {category.title}
              </h3>

              <p className="mb-6 text-sm text-muted">
                {category.description}
              </p>

              {category.available ? (
                <Link
                  href={category.href}
                  className="inline-block rounded-lg bg-blue-700 px-5 py-3 text-sm font-medium text-white hover:bg-blue-800"
                >
                  Explore →
                </Link>
              ) : (
                <span className="inline-block rounded-lg bg-surface-2 px-5 py-3 text-sm text-muted">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

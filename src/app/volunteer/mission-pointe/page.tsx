
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Section, InfoBanner } from "@/components/ui";

export const metadata: Metadata = {
  title: "Mission Pointe Church",
};

const schoolPrograms = [
  {
    title: "Korean Language Education",
    description:
      "Concord Korean School provides Korean language education for children in the local community.",
  },
  {
    title: "Korean History & Culture",
    description:
      "Students learn about Korean history, culture, heritage, and traditions.",
  },
  {
    title: "Community Education",
    description:
      "The school supports Korean-American families and helps younger generations connect with their cultural heritage.",
  },
];

export default function MissionPointePage() {
  return (
    <>
      <div className="mb-6">
        <Link
          href="/volunteer"
          className="text-sm text-muted hover:underline"
        >
          ← Back to Volunteer Opportunities
        </Link>
      </div>

      <PageHeader
        icon="users"
        title="Mission Pointe Church"
        description="Learn about Korean language and cultural education through Concord Korean School."
      />

      <Section title="About the Organization">
        <p className="leading-7 text-muted">
          Mission Pointe Church is located in Martinez,
          California. The church hosts Concord Korean School,
          which has served Korean-American families in the
          Martinez, Concord, and Walnut Creek communities
          since 1977.
        </p>
      </Section>

      <Section title="About Concord Korean School">
        <p className="mb-5 text-muted">
          The school offers Korean language and cultural
          education to help younger generations learn about
          their heritage.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {schoolPrograms.map((program) => (
            <div
              key={program.title}
              className="rounded-2xl border border-border bg-surface p-5"
            >
              <h3 className="mb-2 font-semibold">
                {program.title}
              </h3>

              <p className="text-sm leading-6 text-muted">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Volunteer Opportunities">
        <InfoBanner>
          Concord Korean School is a potential community
          education volunteer opportunity. Specific volunteer
          positions, responsibilities, and current availability
          have not yet been confirmed by the school.
        </InfoBanner>
      </Section>

      <Section title="Organization Details">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <dl className="grid gap-5 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-semibold">Category</dt>
              <dd className="mt-1 text-muted">
                Volunteer · Education
              </dd>
            </div>

            <div>
              <dt className="font-semibold">Location</dt>
              <dd className="mt-1 text-muted">
                5000 Hiller Ln, Martinez, CA 94553
              </dd>
            </div>

            <div>
              <dt className="font-semibold">
                Related Interests
              </dt>
              <dd className="mt-1 text-muted">
                Education, Korean Language, Culture,
                Community Service
              </dd>
            </div>

            <div>
              <dt className="font-semibold">
                School Schedule
              </dt>
              <dd className="mt-1 text-muted">
                Saturday classes. Confirm current
                volunteer hours separately.
              </dd>
            </div>

            <div>
              <dt className="font-semibold">Requirements</dt>
              <dd className="mt-1 text-muted">
                Volunteer requirements not confirmed
              </dd>
            </div>

            <div>
              <dt className="font-semibold">Availability</dt>
              <dd className="mt-1 text-muted">
                Contact school administration
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      <Section title="How to Get Involved">
        <ol className="mb-6 list-decimal space-y-3 pl-5 text-sm">
          <li>
            Visit the official Concord Korean School page.
          </li>
          <li>
            Contact the school to ask whether volunteer
            positions are currently available.
          </li>
          <li>
            Confirm responsibilities, eligibility, schedule,
            and application requirements directly.
          </li>
        </ol>

        <a
          href="https://www.missionpointe.church/mpc-korean-school"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
        >
          Visit Official School Website ↗
        </a>

        <div className="mt-5 rounded-xl border border-border bg-surface p-4">
          <p className="mb-2 font-semibold">
            Concord Korean School Contact
          </p>

          <p className="break-all text-sm text-muted">
            cksconcordkoreanschool@gmail.com
          </p>

          <p className="mt-2 text-sm text-muted">
            Phone: (925) 228-3747
          </p>
        </div>
      </Section>

      <Section title="Important Information">
        <InfoBanner>
          KSA provides information about the organization.
          Volunteer availability and application requirements
          must be confirmed directly with Concord Korean School.
        </InfoBanner>
      </Section>
    </>
  );
}

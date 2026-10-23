
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Section, InfoBanner } from "@/components/ui";

export const metadata: Metadata = {
  title: "Robolabs Foundation",
};

const programs = [
  {
    title: "Robotics Education",
    description:
      "Robolabs offers hands-on programs where students explore mechanical design, robot building, and engineering concepts.",
  },
  {
    title: "Coding & Programming",
    description:
      "Students develop programming and computational thinking skills through robotics projects.",
  },
  {
    title: "Robotics Competitions",
    description:
      "Programs introduce students to robotics competitions, teamwork, design, and problem-solving.",
  },
  {
    title: "STEM Camps",
    description:
      "Seasonal camps provide students with practical experience in robotics, coding, and engineering challenges.",
  },
];

const locations = [
  {
    name: "Dublin",
    address: "6500 Dublin Blvd, Dublin, CA 94568",
  },
  {
    name: "Fremont",
    address: "37120 Fremont Blvd, Fremont, CA 94536",
  },
  {
    name: "San Jose - Stevens Creek",
    address: "4140 Stevens Creek Blvd, San Jose, CA 95129",
  },
  {
    name: "San Jose - Evergreen",
    address: "2720 Aborn Road, San Jose, CA 95121",
  },
];

export default function RobolabsPage() {
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
        title="Robolabs Foundation"
        description="Explore robotics and STEM education programs and learn how to inquire about volunteering."
      />

      <Section title="About the Organization">
        <p className="leading-7 text-muted">
          Robolabs provides hands-on robotics and STEM
          education programs for children and teenagers.
          Its programs focus on engineering, coding,
          problem-solving, and robotics competitions.
        </p>
      </Section>

      <Section title="Programs & Activities">
        <p className="mb-6 text-sm text-muted">
          Robolabs offers the following educational programs.
          These describe the organization and are not
          confirmed volunteer job descriptions.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {programs.map((program) => (
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
        <p className="mb-4 leading-7 text-muted">
          Robolabs Foundation welcomes inquiries from people
          interested in supporting its mission. Its official
          contact page invites visitors to ask about
          volunteer opportunities and events.
        </p>

        <InfoBanner>
          Specific volunteer positions, qualifications,
          schedules, and openings are not listed here.
          Contact Robolabs directly for current opportunities.
        </InfoBanner>
      </Section>

      <Section title="Locations">
        <p className="mb-5 text-sm text-muted">
          Robolabs lists the following educational locations.
          Volunteer availability at each location must
          be confirmed separately.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {locations.map((location) => (
            <div
              key={location.name}
              className="rounded-2xl border border-border bg-surface p-5"
            >
              <h3 className="mb-2 font-semibold">
                {location.name}
              </h3>

              <p className="text-sm text-muted">
                {location.address}
              </p>
            </div>
          ))}
        </div>

        <a
          href="https://www.robolabsfoundation.org/locandhours"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block text-sm font-semibold text-blue-700 hover:underline"
        >
          View Official Locations & Hours ↗
        </a>
      </Section>

      <Section title="Opportunity Details">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <dl className="grid gap-5 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-semibold">Category</dt>
              <dd className="mt-1 text-muted">
                Volunteer · STEM Education
              </dd>
            </div>

            <div>
              <dt className="font-semibold">
                Related Interests
              </dt>
              <dd className="mt-1 text-muted">
                Engineering, Computer Science,
                Robotics, Education
              </dd>
            </div>

            <div>
              <dt className="font-semibold">Schedule</dt>
              <dd className="mt-1 text-muted">
                Confirm volunteer schedule with Robolabs
              </dd>
            </div>

            <div>
              <dt className="font-semibold">Requirements</dt>
              <dd className="mt-1 text-muted">
                Contact the organization for eligibility
                and qualifications
              </dd>
            </div>

            <div>
              <dt className="font-semibold">Availability</dt>
              <dd className="mt-1 text-muted">
                Volunteer inquiries accepted;
                current openings not confirmed
              </dd>
            </div>

            <div>
              <dt className="font-semibold">Locations</dt>
              <dd className="mt-1 text-muted">
                Dublin, Fremont, San Jose
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      <Section title="How to Get Involved">
        <ol className="mb-6 list-decimal space-y-3 pl-5 text-sm">
          <li>Visit the Robolabs Foundation contact page.</li>
          <li>
            Ask about current volunteer positions
            and available locations.
          </li>
          <li>
            Confirm responsibilities, qualifications,
            and scheduling with the organization.
          </li>
        </ol>

        <a
          href="https://www.robolabsfoundation.org/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
        >
          Contact Robolabs Foundation ↗
        </a>

        <div className="mt-5 rounded-xl border border-border bg-surface p-4">
          <p className="mb-2 font-semibold">
            Organization Contact
          </p>

          <p className="text-sm text-muted">
            info@robolabs.org
          </p>

          <p className="mt-2 text-sm text-muted">
            Phone: (775) 292-0134
          </p>
        </div>
      </Section>

      <Section title="Important Information">
        <InfoBanner>
          Program descriptions are based on the
          organization's official website. Volunteer
          responsibilities, openings, and eligibility
          must be confirmed directly with Robolabs.
          KSA does not guarantee placement.
        </InfoBanner>
      </Section>
    </>
  );
}

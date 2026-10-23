import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section, InfoBanner } from "@/components/ui";

export const metadata: Metadata = {
  title: "Volunteer Opportunities",
};

type VolunteerOrganization = {
  name: string;
  field: string;
  location: string;
  description: string;
  status: string;
  website?: string;
  detailsHref?: string;
};

const organizations: VolunteerOrganization[] = [
  {
    name: "Center for Elders' Independence (CEI)",
    field: "Healthcare · Community Service",
    location: "East Bay, CA",
    description:
      "Support older adults through social activities, recreation, and community engagement.",
    status: "Official volunteer program",
    website: "https://ceifoundation.elders.org/volunteer/",
    detailsHref: "/volunteer/cei",
  },
  {
    name: "Mission Pointe Church",
    field: "Education · Korean Language",
    location: "Martinez, CA",
    description:
      "Home of Concord Korean School, offering Korean language and cultural education.",
    status: "Volunteer availability to confirm",
    website: "https://www.missionpointe.church/mpc-korean-school",
    detailsHref: "/volunteer/mission-pointe",
  },
  {
    name: "Contra Costa United Methodist Church",
    field: "Education · Korean Culture",
    location: "Contra Costa County, CA",
    description:
      "Korean school and community education activities. Volunteer roles and requirements need confirmation.",
    status: "Volunteer availability to confirm",
  },
  {
    name: "Robolabs Foundation",
    field: "Engineering · STEM Education",
    location: "Dublin · Fremont · San Jose",
    description:
      "Explore volunteer opportunities related to robotics, STEM education, and youth learning.",
    status: "Volunteer inquiries available",
    website: "https://www.robolabsfoundation.org/contact",
    detailsHref: "/volunteer/robolabs",
  },
  {
    name: "Oakland Senior Community Organization",
    field: "Senior Services · Community Service",
    location: "Oakland, CA",
    description:
      "Potential community service opportunities supporting older adults. Exact organization details are being verified.",
    status: "Organization to verify",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <PageHeader
        icon="users"
        title="Volunteer Opportunities"
        description="Explore volunteer programs in healthcare, education, engineering, and community service."
      />

      <Section title="Find Volunteer Opportunities">
        <p className="mb-6 text-sm text-muted">
          Browse organizations and learn more about their programs.
          Contact each organization to confirm current volunteer
          availability and application requirements.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {organizations.map((org) => (
            <div
              key={org.name}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6"
            >
              <span className="mb-4 w-fit rounded-full bg-surface-2 px-3 py-1 text-xs font-medium">
                Volunteer
              </span>

              <h3 className="mb-2 text-xl font-semibold">
                {org.name}
              </h3>

              <p className="mb-2 text-sm font-medium text-muted">
                {org.field}
              </p>

              <p className="mb-4 text-sm text-muted">
                📍 {org.location}
              </p>

              <p className="mb-5 text-sm leading-6">
                {org.description}
              </p>

              <div className="mt-auto border-t border-border pt-4">
                <p className="mb-3 text-xs text-muted">
                  {org.status}
                </p>

                <div className="flex flex-wrap gap-4">
                  {org.detailsHref && (
                    <Link
                      href={org.detailsHref}
                      className="text-sm font-semibold text-blue-700 hover:underline"
                    >
                      Learn More →
                    </Link>
                  )}

                  {org.website && (
                    <a
                      href={org.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-blue-700 hover:underline"
                    >
                      Official Website ↗
                    </a>
                  )}

                  {!org.detailsHref && !org.website && (
                    <span className="text-sm text-muted">
                      More information coming soon
                    </span>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Before You Apply">
        <InfoBanner>
          Volunteer availability, eligibility, schedules, and
          requirements may change. Please confirm details directly
          with each organization. KSA does not guarantee placement.
        </InfoBanner>
      </Section>
    </>
  );
}

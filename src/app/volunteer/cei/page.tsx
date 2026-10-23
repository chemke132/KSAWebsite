
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Section, InfoBanner } from "@/components/ui";

export const metadata: Metadata = {
    title: "Center for Elders' Independence",
};


const individualActivities = [
    {
        title: "Reading & Book Clubs",
        description:
            "Read aloud to seniors or organize book clubs to encourage conversation and social engagement.",
    },
    {
        title: "Music & Dance",
        description:
            "Lead sing-alongs, organize dance activities, or share musical experiences with seniors.",
    },
    {
        title: "Language & Conversation",
        description:
            "Spend time speaking with seniors in their preferred language and encourage meaningful conversations.",
    },
    {
        title: "Games & Recreation",
        description:
            "Play chess, board games, and other recreational games with CEI participants.",
    },
    {
        title: "Education & Skills Sharing",
        description:
            "Share your knowledge through lunchtime talks or organize sewing and other skill-sharing activities.",
    },
];

const groupActivities = [
    {
        title: "Social Events",
        description:
            "Organize social gatherings such as ice cream socials for seniors.",
    },
    {
        title: "Arts & Entertainment",
        description:
            "Plan group activities involving art, theater, or music.",
    },
    {
        title: "Community Outings",
        description:
            "Accompany seniors on organized trips to parks, museums, or other community destinations.",
    },
    {
        title: "Group Games",
        description:
            "Help organize recreational activities such as chair volleyball and other group games.",
    },
    {
        title: "Technology Education",
        description:
            "Teach basic computer and technology skills to help seniors build digital confidence.",
    },
];


export default function CEIPage() {
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
                title="Center for Elders' Independence (CEI)"
                description="Volunteer with older adults and support community engagement across the East Bay."
            />

            <Section title="About the Organization">
                <p className="leading-7 text-muted">
                    Center for Elders' Independence (CEI) is a nonprofit
                    healthcare organization serving older adults in
                    California's East Bay. CEI helps seniors maintain
                    their independence through healthcare and
                    community-based support services.
                </p>
            </Section>


            <Section title="Volunteer Activities">
                <p className="mb-6 text-muted">
                    CEI offers a variety of ways for individuals and groups
                    to share their time and talents with older adults.
                    Activities may vary by location and availability.
                </p>

                <h3 className="mb-4 text-xl font-semibold">
                    Individual Volunteering
                </h3>

                <div className="mb-10 grid gap-4 md:grid-cols-2">
                    {individualActivities.map((activity) => (
                        <div
                            key={activity.title}
                            className="rounded-2xl border border-border bg-surface p-5"
                        >
                            <h4 className="mb-2 font-semibold">
                                {activity.title}
                            </h4>
                            <p className="text-sm leading-6 text-muted">
                                {activity.description}
                            </p>
                        </div>
                    ))}
                </div>

                <h3 className="mb-4 text-xl font-semibold">
                    Group Volunteering
                </h3>

                <div className="grid gap-4 md:grid-cols-2">
                    {groupActivities.map((activity) => (
                        <div
                            key={activity.title}
                            className="rounded-2xl border border-border bg-surface p-5"
                        >
                            <h4 className="mb-2 font-semibold">
                                {activity.title}
                            </h4>
                            <p className="text-sm leading-6 text-muted">
                                {activity.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>


            <Section title="Opportunity Details">
                <div className="rounded-2xl border border-border bg-surface p-6">
                    <dl className="grid gap-5 text-sm sm:grid-cols-2">
                        <div>
                            <dt className="font-semibold">Category</dt>
                            <dd className="mt-1 text-muted">Volunteer</dd>
                        </div>

                        <div>
                            <dt className="font-semibold">Location</dt>
                            <dd className="mt-1 text-muted">
                                Multiple locations in the East Bay
                            </dd>
                        </div>

                        <div>
                            <dt className="font-semibold">Related Interests</dt>
                            <dd className="mt-1 text-muted">
                                Healthcare, Psychology, Social Work,
                                Community Service
                            </dd>
                        </div>

                        <div>
                            <dt className="font-semibold">Schedule</dt>
                            <dd className="mt-1 text-muted">
                                Confirm with CEI
                            </dd>
                        </div>

                        <div>
                            <dt className="font-semibold">Requirements</dt>
                            <dd className="mt-1 text-muted">
                                No special skills required for general
                                activities. Confirm any additional requirements.
                            </dd>
                        </div>

                        <div>
                            <dt className="font-semibold">Volunteer Hours</dt>
                            <dd className="mt-1 text-muted">
                                Documentation availability to be confirmed
                            </dd>
                        </div>
                    </dl>
                </div>
            </Section>

            <Section title="How to Apply">
                <ol className="mb-6 list-decimal space-y-3 pl-5 text-sm">
                    <li>Visit the official CEI volunteer website.</li>
                    <li>
                        Complete the volunteer interest form or
                        download an individual or group application.
                    </li>
                    <li>
                        Contact CEI to discuss available opportunities
                        and the next steps.
                    </li>
                </ol>


                <div className="space-y-4">
                    <a
                        href="https://cei.elders.org/volunteer-cei"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
                    >
                        Apply on Official Website ↗
                    </a>

                    <div className="rounded-xl border border-border bg-surface p-4">
                        <p className="mb-2 text-sm font-semibold">
                            Volunteer Coordinator
                        </p>

                        <p className="mb-2 text-sm text-muted">
                            For questions about volunteering, contact CEI at:
                        </p>

                        <p className="break-all text-sm font-medium">
                            volunteer@cei.elders.org
                        </p>

                        <p className="mt-2 text-xs text-muted">
                            Copy this email address to contact CEI
                            through your preferred email service.
                        </p>
                    </div>
                </div>

            </Section>

            <Section title="Important Information">
                <InfoBanner>
                    Volunteer schedules, eligibility, and openings
                    should be confirmed directly with CEI.
                    KSA provides informational resources and
                    does not guarantee volunteer placement.
                </InfoBanner>
            </Section>
        </>
    );
}

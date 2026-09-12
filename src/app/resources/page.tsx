import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section, Card, InfoBanner } from "@/components/ui";

export const metadata: Metadata = { title: "Student Resources" };

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        icon="book"
        title="Student Resources"
        description="Practical guides for school life — the academic planner, plus how to use Canvas and InSite."
      />

      <Section title="Academic Planner">
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="How to use the planner">
            Keep your class schedule, assignment deadlines, and exam dates in one
            place.
          </Card>
          <Card title="Academic Calendar">
            Check key dates — start and end of term, breaks, and holidays.
          </Card>
        </div>
      </Section>

      <Section title="Platform Guides">
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="Using Canvas">
            Submitting assignments, checking grades, and setting up notifications.
          </Card>
          <Card title="Using InSite">
            Course registration, transcripts, and managing your student profile.
          </Card>
        </div>
      </Section>

      <Section>
        <InfoBanner>
          Can&apos;t find what you&apos;re looking for? Let the KSA board know and
          we&apos;ll add it.
        </InfoBanner>
      </Section>
    </>
  );
}

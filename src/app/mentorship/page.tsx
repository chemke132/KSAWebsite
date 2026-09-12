import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section, Card, InfoBanner } from "@/components/ui";

export const metadata: Metadata = { title: "Mentorship" };

export default function MentorshipPage() {
  return (
    <>
      <PageHeader
        icon="compass"
        title="Mentorship"
        description="A program that connects upperclassmen and newcomers to support academics, careers, and adjusting to school life."
      />

      <Section title="How it works">
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="1. Apply">Sign up as either a mentor or a mentee.</Card>
          <Card title="2. Match">
            We pair you based on interests and field of study.
          </Card>
          <Card title="3. Connect">
            Meet regularly to share tips on academics, careers, and daily life.
          </Card>
        </div>
      </Section>

      <Section title="Join">
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="Become a mentor">
            For upperclassmen who want to support newer students. Sign-up details
            coming soon.
          </Card>
          <Card title="Become a mentee">
            For students looking for guidance. Sign-up details coming soon.
          </Card>
        </div>
        <div className="mt-5">
          <InfoBanner>
            The mentorship application form and schedule will be posted here once
            they&apos;re ready.
          </InfoBanner>
        </div>
      </Section>
    </>
  );
}

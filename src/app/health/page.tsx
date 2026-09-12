import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section, Card, InfoBanner } from "@/components/ui";

export const metadata: Metadata = { title: "Health & Insurance" };

export default function HealthPage() {
  return (
    <>
      <PageHeader
        emoji="🏥"
        title="Health & Insurance"
        description="Information on nearby clinics and helpful tips about student insurance."
      />

      <Section title="Nearby Clinics">
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="Korean-speaking clinics">
            A list of nearby clinics where care is available in Korean (coming
            soon).
          </Card>
          <Card title="Emergency">
            Emergency contacts and the nearest ER.
          </Card>
        </div>
      </Section>

      <Section title="Insurance Tips">
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="Understanding student insurance">
            The difference between school and personal plans, plus how to enroll
            and file claims.
          </Card>
          <Card title="FAQ">
            Common questions about costs, prescriptions, and insurance claims.
          </Card>
        </div>
        <div className="mt-5">
          <InfoBanner>
            This information is for reference only. In an emergency, call 911 (or
            your local emergency number) right away.
          </InfoBanner>
        </div>
      </Section>
    </>
  );
}

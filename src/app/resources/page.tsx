import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section, Card, InfoBanner } from "@/components/ui";
import Icon from "@/components/Icon";
import HealthDirectory from "@/components/HealthDirectory";
import { getHealthcareProviders } from "@/lib/notion";

export const metadata: Metadata = { title: "Student Resources" };

export default async function ResourcesPage() {
  const providers = await getHealthcareProviders();

  return (
    <>
      <PageHeader
        icon="book"
        title="Student Resources"
        description="Practical guides for school life — the academic planner, Canvas and InSite, plus health and insurance tips."
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

      <Section title="Transfer">
        <div className="rounded-2xl border border-primary/30 bg-primary-soft p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <h3 className="text-lg font-semibold">DVC Transfer</h3>
            <p className="mt-1 text-sm text-muted">
              Planning to transfer to a 4-year university? Deadlines, requirements,
              and step-by-step guides — all in one place.
            </p>
          </div>
          <a
            href="https://www.dvctransfer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover sm:mt-0"
          >
            Visit dvctransfer.com
            <Icon name="arrow" className="h-5 w-5" />
          </a>
        </div>
      </Section>

      <Section title="Health & Insurance">
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="Find a provider">
            Browse student-researched clinics by specialty, including
            Korean-speaking providers.{" "}
            <a href="#providers">Jump to the directory</a>
          </Card>
          <Card title="Emergency">
            Emergency contacts and the nearest ER.
          </Card>
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
            Health info is for reference only. In an emergency, call 911 (or your
            local emergency number) right away.
          </InfoBanner>
        </div>
      </Section>

      <div id="providers" className="scroll-mt-20">
        <Section title="Healthcare Provider Directory">
          <p className="-mt-2 mb-6 max-w-2xl text-sm text-muted">
            Local clinics researched and organized by bio and pre-health
            students. Check whether your school insurance works, then book the
            way each clinic recommends. Details can change, so confirm with the
            provider before you go.
          </p>
          <HealthDirectory providers={providers} />
        </Section>
      </div>

      <Section>
        <Card title="Join the team: Healthcare Resources Researcher">
          <p>
            Help keep this directory accurate. We&apos;re looking for bio and
            pre-health students to:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Research local healthcare providers</li>
            <li>Categorize clinics by specialty</li>
            <li>Verify contact and appointment information</li>
            <li>Maintain the student healthcare resource pages</li>
          </ul>
          <p className="mt-3">Interested? Let the KSA board know.</p>
        </Card>
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

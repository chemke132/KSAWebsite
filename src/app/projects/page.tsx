import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section, ComingSoon, InfoBanner } from "@/components/ui";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        icon="rocket"
        title="Projects"
        description="A space to document and share students' individual and group projects in journal form."
      />

      <Section>
        <InfoBanner>
          Project entries will be connected to the journal. Projects written in
          Notion will appear here automatically.
        </InfoBanner>
      </Section>

      <Section title="Project List">
        <ComingSoon note="Once the first project is added, it will show up here as a card." />
      </Section>
    </>
  );
}

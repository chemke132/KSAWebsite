import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section, Card, InfoBanner, ComingSoon } from "@/components/ui";
import { getJournalEntries } from "@/lib/notion";

export const metadata: Metadata = { title: "Journal" };

export default async function JournalPage() {
  const entries = await getJournalEntries();

  return (
    <>
      <PageHeader
        icon="pen"
        title="Journal"
        description="Journal reports anyone can write — not just students. Write in Notion and it's published here."
      />

      <Section>
        <InfoBanner>
          This page is connected to Notion. Post to the Notion database in the
          set format and it appears here automatically.
        </InfoBanner>
      </Section>

      <Section title="Recent Reports">
        {entries.length === 0 ? (
          <ComingSoon note="No reports yet. They'll appear here once Notion is connected." />
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {entries.map((e) => (
              <Card key={e.id} title={e.title}>
                <p className="text-xs text-muted">
                  {e.author} · {new Date(e.date).toLocaleDateString("en-US")}
                </p>
                <p className="mt-2">{e.summary}</p>
                {e.url && (
                  <a href={e.url} className="mt-3 inline-block">
                    Read more →
                  </a>
                )}
              </Card>
            ))}
          </div>
        )}
      </Section>

      <Section title="How to Submit">
        <Card>
          <ol className="list-inside list-decimal space-y-1">
            <li>Open the shared Notion template.</li>
            <li>Fill in the title, author, date, content, and tags.</li>
            <li>Save it — it publishes to this page automatically.</li>
          </ol>
        </Card>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section, Card, InfoBanner, ComingSoon } from "@/components/ui";
import { getShowcasePosts } from "@/lib/notion";

export const metadata: Metadata = { title: "Showcase" };

export default async function ShowcasePage() {
  const posts = await getShowcasePosts();

  return (
    <>
      <PageHeader
        icon="rocket"
        title="Showcase"
        description="Student projects — individual and group — posted in journal form. Anyone can share a write-up, and it publishes here."
      />

      <Section>
        <InfoBanner>
          This page is connected to Notion. Post a project write-up in the set
          format and it appears here automatically.
        </InfoBanner>
      </Section>

      <Section title="Recent Projects">
        {posts.length === 0 ? (
          <ComingSoon note="No posts yet. They'll appear here once Notion is connected." />
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Card key={p.id} title={p.title}>
                <p className="text-xs text-muted">
                  {p.author} · {new Date(p.date).toLocaleDateString("en-US")}
                </p>
                <p className="mt-2">{p.summary}</p>
                {p.url && (
                  <a href={p.url} className="mt-3 inline-block">
                    Read more →
                  </a>
                )}
              </Card>
            ))}
          </div>
        )}
      </Section>

      <Section title="How to Post">
        <Card>
          <ol className="list-inside list-decimal space-y-1">
            <li>Open the shared Notion template.</li>
            <li>Fill in the title, author, date, write-up, and tags.</li>
            <li>Save it — it publishes to this page automatically.</li>
          </ol>
        </Card>
      </Section>
    </>
  );
}

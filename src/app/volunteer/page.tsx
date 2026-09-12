import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section, Card, InfoBanner } from "@/components/ui";

export const metadata: Metadata = { title: "Volunteer" };

type Org = {
  name: string;
  type: string;
  contact: string;
  note: string;
};

// Sample data — replace with real organization details.
const orgs: Org[] = [
  {
    name: "Local Community Center",
    type: "Events · Interpreting",
    contact: "example@community.org",
    note: "Weekend event support and Korean–English interpreting",
  },
  {
    name: "Public Library",
    type: "Tutoring · Organizing",
    contact: "(000) 000-0000",
    note: "After-school student tutoring and shelving books",
  },
  {
    name: "Senior Care Center",
    type: "Companionship · Meals",
    contact: "example@care.org",
    note: "Regular visits; training provided beforehand",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <PageHeader
        emoji="🤝"
        title="Volunteer"
        description="Organizations looking for volunteers, with contacts. Use the application format below to apply directly."
      />

      <Section title="Opportunities">
        <div className="overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-2 text-xs uppercase tracking-wider text-muted">
              <tr>
                <th className="px-4 py-3">Organization</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Contact</th>
                <th className="hidden px-4 py-3 md:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {orgs.map((o) => (
                <tr key={o.name} className="border-t border-border bg-surface">
                  <td className="px-4 py-3 font-medium">{o.name}</td>
                  <td className="px-4 py-3 text-muted">{o.type}</td>
                  <td className="px-4 py-3 text-muted">{o.contact}</td>
                  <td className="hidden px-4 py-3 text-muted md:table-cell">
                    {o.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted">
          * The entries above are examples. Update them with real organization
          details.
        </p>
      </Section>

      <Section title="Application Format">
        <Card title="Use this format when applying by email">
          <ul className="mt-1 list-inside list-disc space-y-1">
            <li>Name:</li>
            <li>Grade / School:</li>
            <li>Contact:</li>
            <li>Preferred organization:</li>
            <li>Availability (dates &amp; times):</li>
            <li>Experience (optional):</li>
          </ul>
        </Card>
        <div className="mt-5">
          <InfoBanner>
            If you need a confirmation letter or proof of volunteer hours, request
            it directly from the organization.
          </InfoBanner>
        </div>
      </Section>
    </>
  );
}

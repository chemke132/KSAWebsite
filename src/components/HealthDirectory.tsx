"use client";

import { useMemo, useState } from "react";
import { ComingSoon } from "@/components/ui";
import {
  SPECIALTIES,
  type InsuranceStatus,
  type Provider,
  type Specialty,
} from "@/lib/healthcare";

const INSURANCE: Record<InsuranceStatus, { label: string; dot: string }> = {
  accepted: { label: "School insurance accepted", dot: "bg-green" },
  "not-accepted": { label: "School insurance not accepted", dot: "bg-accent" },
  "call-to-confirm": { label: "Insurance: call to confirm", dot: "bg-gold" },
};

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export default function HealthDirectory({
  providers,
}: {
  providers: Provider[];
}) {
  const [specialty, setSpecialty] = useState<Specialty | "All">("All");
  const [koreanOnly, setKoreanOnly] = useState(false);
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return providers.filter((p) => {
      if (specialty !== "All" && !p.specialties.includes(specialty)) return false;
      if (koreanOnly && !p.languages?.includes("Korean")) return false;
      if (
        q &&
        !p.name.toLowerCase().includes(q) &&
        !p.address.toLowerCase().includes(q)
      )
        return false;
      return true;
    });
  }, [providers, specialty, koreanOnly, query]);

  const countFor = (s: Specialty) =>
    providers.filter((p) => p.specialties.includes(s)).length;

  return (
    <div>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="health-search" className="sr-only">
            Search by clinic name or location
          </label>
          <input
            id="health-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by clinic name or location"
            className={`w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm placeholder:text-muted ${focusRing}`}
          />
        </div>
        <Chip
          active={koreanOnly}
          onClick={() => setKoreanOnly((v) => !v)}
          className="justify-center"
        >
          Korean-speaking
        </Chip>
      </div>

      <div
        className="mb-6 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter by specialty"
      >
        <Chip active={specialty === "All"} onClick={() => setSpecialty("All")}>
          All ({providers.length})
        </Chip>
        {SPECIALTIES.map((s) => (
          <Chip key={s} active={specialty === s} onClick={() => setSpecialty(s)}>
            {s} ({countFor(s)})
          </Chip>
        ))}
      </div>

      <p className="mb-4 text-sm text-muted" aria-live="polite">
        {results.length} {results.length === 1 ? "provider" : "providers"}
      </p>

      {results.length === 0 ? (
        <ComingSoon
          note={
            providers.length === 0
              ? "No providers have been published yet. Check back soon."
              : "No providers match these filters yet. Try another specialty, or join the research team to help add one."
          }
        />
      ) : (
        <ul className="grid gap-5 md:grid-cols-2">
          {results.map((p) => (
            <li key={p.id}>
              <ProviderCard provider={p} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
  className = "",
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-sm transition-colors ${focusRing} ${
        active
          ? "border-primary bg-primary-soft font-semibold text-primary"
          : "border-border bg-surface text-muted hover:text-foreground"
      } ${className}`}
    >
      {children}
    </button>
  );
}

function ProviderCard({ provider: p }: { provider: Provider }) {
  const ins = INSURANCE[p.insurance];

  return (
    <article className="h-full rounded-2xl border border-border bg-surface p-6">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-base font-semibold">{p.name}</h3>
      </div>
      <p className="mt-1 text-sm text-muted">{p.specialties.join(", ")}</p>

      <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium">
        <span aria-hidden className={`h-2 w-2 rounded-full ${ins.dot}`} />
        {ins.label}
      </p>

      <dl className="mt-5 space-y-3 text-sm [&_a]:text-primary [&_a]:underline">
        <Row label="Location">{p.address}</Row>

        <Row label="Contact">
          <ul className="space-y-0.5">
            {p.phone && (
              <li>
                <a href={`tel:${p.phone}`}>{p.phone}</a>
              </li>
            )}
            {p.email && (
              <li>
                <a href={`mailto:${p.email}`}>{p.email}</a>
              </li>
            )}
            {p.contactUrl && (
              <li>
                <a href={p.contactUrl} target="_blank" rel="noopener noreferrer">
                  Contact page
                </a>
              </li>
            )}
          </ul>
        </Row>

        <Row label="How to book">{p.howToBook}</Row>

        {p.insuranceNote && <Row label="Insurance note">{p.insuranceNote}</Row>}

        {p.insuranceAppSteps && (
          <Row label="Book through the school insurance app">
            {p.insuranceAppSteps}
          </Row>
        )}

        {p.languages && p.languages.length > 0 && (
          <Row label="Languages">{p.languages.join(", ")}</Row>
        )}

        {p.website && (
          <Row label="Website">
            <a href={p.website} target="_blank" rel="noopener noreferrer">
              {p.website.replace(/^https?:\/\//, "")}
            </a>
          </Row>
        )}
      </dl>

      <p className="mt-5 text-xs text-muted">Last verified: {p.lastVerified}</p>
    </article>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="font-medium">{label}</dt>
      <dd className="text-muted">{children}</dd>
    </div>
  );
}

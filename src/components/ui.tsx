import type { ReactNode } from "react";

export function Section({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="container-page py-10">
      {title && <h2 className="mb-5 text-xl font-semibold">{title}</h2>}
      {children}
    </section>
  );
}

export function Card({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      {title && <h3 className="mb-2 text-base font-semibold">{title}</h3>}
      <div className="text-sm text-muted [&_a]:text-primary [&_a]:underline">
        {children}
      </div>
    </div>
  );
}

export function InfoBanner({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-primary/30 bg-primary-soft px-4 py-3 text-sm">
      {children}
    </div>
  );
}

/** Placeholder for sections whose real content/data comes later. */
export function ComingSoon({ note }: { note?: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-surface/60 p-8 text-center">
      <div className="text-2xl">🚧</div>
      <p className="mt-2 text-sm font-medium">Coming soon</p>
      <p className="mx-auto mt-1 max-w-md text-sm text-muted">
        {note ?? "Content will be added here shortly."}
      </p>
    </div>
  );
}

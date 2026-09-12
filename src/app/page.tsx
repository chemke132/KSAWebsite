import Link from "next/link";
import { categories, site } from "@/lib/site";
import CategoryCard from "@/components/CategoryCard";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,var(--color-primary-soft),transparent)]"
        />
        <div className="container-page relative py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
              🇰🇷 {site.fullName}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Everything for our KSA
              <br className="hidden sm:block" /> community, in one place
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
              {site.tagline}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/resources"
                className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                Browse resources
              </Link>
              <Link
                href="/journal"
                className="rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:bg-surface-2"
              >
                Read the journal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="container-page py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Explore</h2>
            <p className="mt-1 text-sm text-muted">
              Find what you need, organized by category.
            </p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <CategoryCard key={c.href} item={c} />
          ))}
        </div>
      </section>
    </>
  );
}

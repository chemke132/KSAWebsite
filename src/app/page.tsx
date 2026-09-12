import Link from "next/link";
import { categories, site } from "@/lib/site";
import CategoryCard from "@/components/CategoryCard";
import Icon from "@/components/Icon";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_-10%,var(--color-primary-soft),transparent)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent-soft blur-3xl opacity-60"
        />
        <div className="container-page relative py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {site.fullName} · {site.college}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
              Everything for our KSA
              <br className="hidden sm:block" />{" "}
              community,{" "}
              <span className="text-accent">in one place</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
              {site.tagline}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/resources"
                className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover"
              >
                Browse resources
              </Link>
              <Link
                href="/journal"
                className="rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold transition-colors hover:bg-surface-2"
              >
                Read the journal
              </Link>
            </div>

            {/* Quick category chips */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              {categories.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Icon name={c.icon} className="h-4 w-4" />
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="container-page py-16 sm:py-20">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Explore
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            What you&apos;ll find here
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Everything the KSA community needs, organized by category.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <CategoryCard key={c.href} item={c} />
          ))}
        </div>
      </section>

      {/* Closing CTA band */}
      <section className="border-t border-border bg-primary">
        <div className="container-page flex flex-col items-center gap-6 py-14 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Have something to share?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-white/75">
              Anyone can write a journal report — projects, events, or reflections.
              Post it in Notion and it shows up here.
            </p>
          </div>
          <Link
            href="/journal"
            className="shrink-0 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Write a report
          </Link>
        </div>
      </section>
    </>
  );
}

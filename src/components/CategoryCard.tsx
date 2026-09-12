import Link from "next/link";
import type { NavItem } from "@/lib/site";

export default function CategoryCard({ item }: { item: NavItem }) {
  return (
    <Link
      href={item.href}
      className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
    >
      <div className="text-3xl">{item.emoji}</div>
      <h3 className="mt-4 text-lg font-semibold">{item.label}</h3>
      <p className="mt-2 text-sm text-muted">{item.desc}</p>
      <span className="mt-4 text-sm font-medium text-primary">
        Learn more{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}

import Link from "next/link";
import type { NavItem } from "@/lib/site";
import Icon from "@/components/Icon";

export default function CategoryCard({ item }: { item: NavItem }) {
  const isAccent = item.tone === "accent";
  const badge = isAccent
    ? "bg-accent-soft text-accent"
    : "bg-primary-soft text-primary";

  return (
    <Link
      href={item.href}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_12px_40px_-12px_rgba(16,24,40,0.25)]"
    >
      {/* top accent bar reveals on hover */}
      <span
        className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
          isAccent ? "bg-accent" : "bg-primary"
        }`}
      />
      <span className={`grid h-12 w-12 place-items-center rounded-xl ${badge}`}>
        <Icon name={item.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-lg font-semibold">{item.label}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.desc}</p>
      <span
        className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${
          isAccent ? "text-accent" : "text-primary"
        }`}
      >
        Learn more
        <Icon
          name="arrow"
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}

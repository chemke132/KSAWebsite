import Icon, { type IconName } from "@/components/Icon";
import { site } from "@/lib/site";

type Props = {
  icon?: IconName;
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageHeader({ icon, eyebrow, title, description }: Props) {
  return (
    <div className="relative overflow-hidden border-b border-border bg-surface">
      {/* soft brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_120%_at_0%_0%,var(--color-primary-soft),transparent)]"
      />
      <div className="container-page relative py-14 sm:py-20">
        <div className="flex items-start gap-5">
          {icon && (
            <span className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary text-white shadow-sm sm:grid">
              <Icon name={icon} className="h-7 w-7" />
            </span>
          )}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {eyebrow ?? site.name}
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h1>
            {description && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

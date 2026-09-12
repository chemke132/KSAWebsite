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
    <div className="relative overflow-hidden border-b border-border bg-brand text-white">
      {/* brand gradient + soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_120%_at_0%_0%,var(--color-brand),var(--color-brand-strong))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="container-page relative py-14 sm:py-20">
        <div className="flex items-start gap-5">
          {icon && (
            <span className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur sm:grid">
              <Icon name={icon} className="h-7 w-7" />
            </span>
          )}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {eyebrow ?? site.name}
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h1>
            {description && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

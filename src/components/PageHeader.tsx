type Props = {
  emoji?: string;
  title: string;
  titleEn?: string;
  description?: string;
};

export default function PageHeader({ emoji, title, titleEn, description }: Props) {
  return (
    <div className="border-b border-border bg-surface">
      <div className="container-page py-12 sm:py-16">
        {emoji && <div className="text-4xl">{emoji}</div>}
        <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
          {titleEn && <span className="text-lg text-muted">{titleEn}</span>}
        </div>
        {description && (
          <p className="mt-4 max-w-2xl text-base text-muted">{description}</p>
        )}
      </div>
    </div>
  );
}

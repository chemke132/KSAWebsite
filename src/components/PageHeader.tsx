type Props = {
  emoji?: string;
  title: string;
  description?: string;
};

export default function PageHeader({ emoji, title, description }: Props) {
  return (
    <div className="border-b border-border bg-surface">
      <div className="container-page py-12 sm:py-16">
        {emoji && <div className="text-4xl">{emoji}</div>}
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base text-muted">{description}</p>
        )}
      </div>
    </div>
  );
}

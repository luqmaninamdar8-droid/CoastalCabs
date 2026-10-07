export function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow text-sea">{eyebrow}</p>
      <h2 className="mt-3 text-3xl leading-tight md:text-5xl">{title}</h2>
      {text ? <p className="mt-3 text-base leading-7 text-ink/75">{text}</p> : null}
    </div>
  );
}

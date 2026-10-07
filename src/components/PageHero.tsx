import { Wave } from "@/components/Wave";

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="hero-coast relative overflow-hidden text-foam">
      <div className="wrap relative z-10 pt-14 pb-24 md:pt-20 md:pb-28">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.02] md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-foam/80 md:text-lg">{lede}</p>
      </div>
      <Wave />
    </section>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { bookHref, getTour, inr, tours } from "@/lib/site";

export function TourArticle({ slug }: { slug: string }) {
  const tour = getTour(slug);
  if (!tour) notFound();

  const others = tours.filter((item) => item.slug !== tour.slug);

  return (
    <article className="wrap py-12">
      <div className="overflow-hidden rounded-[1.8rem] shadow-[0_24px_50px_-32px_rgba(18,33,28,0.7)]">
        <img src={tour.image} alt="" className="h-64 w-full object-cover md:h-80" />
      </div>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
      <div>
        <p className="text-sm text-ink/60">
          <Link href="/tours" className="font-semibold text-sea">
            Tours
          </Link>
          <span aria-hidden="true"> / </span>
          {tour.region}
        </p>
        <h1 className="mt-3 text-4xl leading-tight md:text-5xl">{tour.title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/75">{tour.intro}</p>
        <ol className="mt-10 space-y-6 border-l border-line pl-6">
          {tour.stops.map((stop) => (
            <li key={stop.place} className="relative">
              <span className="absolute -left-[1.85rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-paper bg-gold" />
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-sea">{stop.time}</p>
              <h2 className="text-2xl">{stop.place}</h2>
              <p className="mt-1 text-sm leading-6 text-ink/75">{stop.note}</p>
            </li>
          ))}
        </ol>
      </div>
      <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
        <div className="paper-card p-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-sea">{tour.hours}</p>
          <p className="mt-2 font-display text-4xl">{inr(tour.from)}</p>
          <p className="text-sm text-ink/70">Starting sedan rate</p>
          <Link href={bookHref({ note: tour.title })} className="btn btn-gold mt-4 w-full">
            Book this tour
          </Link>
        </div>
        <div className="paper-card p-5 text-sm leading-6">
          <p className="font-semibold">Included</p>
          <ul className="mt-2 space-y-1 text-ink/75">
            {tour.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 font-semibold">Paid separately</p>
          <ul className="mt-2 space-y-1 text-ink/75">
            {tour.extra.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="paper-card p-5">
          <p className="text-sm font-semibold">Other days</p>
          <ul className="mt-3 space-y-2 text-sm">
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={`/tours/${item.slug}`} className="font-semibold text-sea hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      </div>
    </article>
  );
}

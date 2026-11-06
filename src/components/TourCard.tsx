import Link from "next/link";
import type { Tour } from "@/lib/site";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="paper-card group flex flex-col overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={tour.image}
          alt=""
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
        <p className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-[0.16em] text-gold">
          {tour.region} · {tour.hours}
        </p>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-2xl">{tour.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-ink/75">{tour.summary}</p>
        <div className="mt-5 flex items-center justify-end gap-3">
          <Link href={`/tours/${tour.slug}`} className="btn btn-ink">
            See the day
          </Link>
        </div>
      </div>
    </article>
  );
}

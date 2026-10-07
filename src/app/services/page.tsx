import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { bookHref, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Airport transfers, hourly hire, outstation days, sightseeing, weddings, and night drops across Goa.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Tell us the hour. We will match the cab."
        lede="From a 4 am Mopa pickup to a tempo for a church wedding in Salcete, the booking path is the same: fare first, then the driver."
      />
      <section className="wrap space-y-5 py-14">
        {services.map((service, index) => (
          <article key={service.title} className="paper-card grid gap-6 p-6 md:grid-cols-[auto_1fr_auto] md:items-center">
            <p className="font-display text-4xl text-laterite">{String(index + 1).padStart(2, "0")}</p>
            <div>
              <h2 className="text-3xl">{service.title}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/75">{service.text}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {service.points.map((point) => (
                  <li key={point} className="rounded-full bg-foam px-3 py-1 text-xs font-semibold text-sea">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <Link href={bookHref({ note: service.title })} className="btn btn-sea">
              Book
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}

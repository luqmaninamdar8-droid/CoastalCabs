import Link from "next/link";
import { Suspense } from "react";
import { QuoteWidget } from "@/components/QuoteWidget";
import { SectionTitle } from "@/components/SectionTitle";
import { TourCard } from "@/components/TourCard";
import { Wave } from "@/components/Wave";
import {
  bookHref,
  cabs,
  coasts,
  phoneDisplay,
  phoneTel,
  services,
  steps,
  testimonials,
  tours,
  whatsappHref,
  firstParam,
} from "@/lib/site";

const bands: Record<(typeof cabs)[number]["id"], string> = {
  sedan: "bg-sea",
  suv: "bg-palm",
  premium: "bg-laterite",
  tempo: "bg-gold",
};

type RideSearch = {
  from?: string | string[];
  to?: string | string[];
  fromPlace?: string | string[];
  toPlace?: string | string[];
  date?: string | string[];
  cab?: string | string[];
  note?: string | string[];
  name?: string | string[];
  phone?: string | string[];
  guests?: string | string[];
};

async function HomeRide({ searchParams }: { searchParams: Promise<RideSearch> }) {
  const query = await searchParams;
  const initial = {
    from: firstParam(query.from),
    to: firstParam(query.to),
    fromPlace: firstParam(query.fromPlace),
    toPlace: firstParam(query.toPlace),
    date: firstParam(query.date),
    cab: firstParam(query.cab),
    note: firstParam(query.note),
    name: firstParam(query.name),
    phone: firstParam(query.phone),
    guests: firstParam(query.guests),
  };
  return <QuoteWidget key={Object.values(initial).join("|")} initial={initial} />;
}

export default function HomePage({
  searchParams,
}: {
  searchParams: Promise<RideSearch>;
}) {
  const [leadService, ...otherServices] = services;
  const [leadTour, ...sideTours] = tours.slice(0, 3);
  const [leadNote, ...otherNotes] = testimonials;

  return (
    <>
      <section className="home-hero relative overflow-hidden text-foam">
        <div className="wrap relative z-10 grid items-start gap-10 pt-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pt-16 lg:pb-24">
          <div className="lg:pt-6">
            <p className="eyebrow text-gold">Calangute desk · both airports</p>
            <h1 className="mt-5 max-w-xl text-[3.4rem] leading-[0.9] md:text-8xl">
              The coast,
              <span className="mt-1 block italic text-gold">on your clock.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-foam/80">
              Coastal Cabs meets the flight at Mopa or Dabolim, then stays with you for the beach, Old Goa, or the long road to Palolem.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn btn-gold" href={`tel:${phoneTel}`}>
                Call {phoneDisplay}
              </a>
              <a
                className="btn btn-line"
                href={whatsappHref("Hello Coastal Cabs, I need a taxi in Goa.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp the desk
              </a>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-sm">
              <div className="home-stat">
                <dd className="font-display text-3xl">2</dd>
                <dt className="mt-1 text-foam/65">Airports</dt>
              </div>
              <div className="home-stat">
                <dd className="font-display text-3xl">24h</dd>
                <dt className="mt-1 text-foam/65">Desk</dt>
              </div>
              <div className="home-stat">
                <dd className="font-display text-3xl">Fixed</dd>
                <dt className="mt-1 text-foam/65">Fare first</dt>
              </div>
            </dl>
          </div>
          <Suspense fallback={<div className="quote-panel h-80 animate-pulse" />}>
            <HomeRide searchParams={searchParams} />
          </Suspense>
        </div>
        <Wave />
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="wrap">
          <SectionTitle eyebrow="How a booking works" title="Three messages, then a driver." />
          <ol className="mt-10 grid gap-px overflow-hidden rounded-[1.8rem] border border-line bg-line md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="bg-foam p-7">
                <p className="font-display text-5xl text-gold">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-2xl">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-ink/75">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap py-16 md:py-20">
        <SectionTitle eyebrow="Services" title="Airport nights to wedding mornings." />
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Link
            href={bookHref({ note: leadService.title })}
            className="service-photo flex min-h-80 flex-col justify-end rounded-[1.8rem] p-7 text-foam"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Desk favourite</p>
            <h3 className="mt-3 text-4xl">{leadService.title}</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-foam/85">{leadService.text}</p>
            <span className="mt-5 text-sm font-bold text-gold">Request this ride</span>
          </Link>
          <div className="divide-y divide-line border-y border-line">
            {otherServices.map((service, index) => (
              <Link
                key={service.title}
                href={bookHref({ note: service.title })}
                className="group grid gap-2 py-5 sm:grid-cols-[4rem_1fr] sm:gap-4"
              >
                <span className="font-display text-2xl text-sea/70">{String(index + 2).padStart(2, "0")}</span>
                <span>
                  <span className="block font-display text-2xl group-hover:text-sea">{service.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-ink/70">{service.text}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sea-deep py-16 text-foam md:py-20">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Fleet</p>
              <h2 className="mt-3 max-w-xl text-4xl md:text-5xl">Pick the car by the bags, then the seats.</h2>
            </div>
            <Link href="/fleet" className="btn btn-line">
              See the fleet
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {cabs.map((cab) => (
              <article key={cab.id} className="flex flex-col rounded-[1.6rem] border border-white/10 bg-white/10 p-5">
                <div className={`h-1.5 w-14 rounded-full ${bands[cab.id]}`} />
                <h3 className="mt-5 text-3xl">{cab.name}</h3>
                <p className="text-sm text-foam/65">{cab.cars}</p>
                <p className="mt-6 font-display text-4xl">{cab.seats.replace(" guests", "")}</p>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-foam/50">guests</p>
                <Link href={bookHref({ cab: cab.id })} className="btn btn-gold mt-6 w-full">
                  Book {cab.name}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap py-16 md:py-20">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Day tours"
            title="The cab waits while you swim."
            text="Entry tickets stay separate. The driver and the hours are in the price."
          />
          <Link href="/tours" className="btn btn-ink shrink-0">
            All tours
          </Link>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <Link href={`/tours/${leadTour.slug}`} className="paper-card group relative min-h-[28rem] overflow-hidden">
            <img src={leadTour.image} alt="" className="absolute inset-0 h-full w-full object-cover object-[center_70%] transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/10" />
            <div className="relative flex h-full min-h-[28rem] flex-col justify-end p-7 text-foam">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
                {leadTour.region} · {leadTour.hours}
              </p>
              <h3 className="mt-2 text-4xl md:text-5xl">{leadTour.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-foam/80">{leadTour.summary}</p>
            </div>
          </Link>
          <div className="grid gap-4">
            {sideTours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="wrap">
          <SectionTitle eyebrow="Where we drive" title="North sand, the capital, the south bays." />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {coasts.map((coast) => (
              <article key={coast.name}>
                <h3 className="text-3xl">{coast.name}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {coast.places.map((place) => (
                    <span key={place} className="place-chip">
                      {place}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap py-16 md:py-20">
        <SectionTitle eyebrow="Guest notes" title="What the last rides sounded like." />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <figure className="paper-card p-8 md:p-10">
            <blockquote className="font-display text-3xl leading-snug italic md:text-4xl">“{leadNote.quote}”</blockquote>
            <figcaption className="mt-6 text-sm text-ink/70">
              <span className="font-semibold text-ink">{leadNote.name}</span> · {leadNote.from}
              <span className="mt-1 block">{leadNote.trip}</span>
            </figcaption>
          </figure>
          <div className="grid gap-4">
            {otherNotes.map((item) => (
              <figure key={item.name} className="rounded-[1.6rem] border border-line bg-paper p-6">
                <blockquote className="font-display text-xl leading-snug">“{item.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-ink/70">
                  <span className="font-semibold text-ink">{item.name}</span> · {item.trip}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band text-foam">
        <div className="wrap flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Arrivals</p>
            <h2 className="mt-3 max-w-xl text-4xl md:text-5xl">Send the flight number. We will be at arrivals.</h2>
            <p className="mt-3 max-w-xl text-foam/80">Mopa or Dabolim, including the landings after the last bus.</p>
          </div>
          <Link href="/#ride" className="btn btn-gold">
            Book a cab
          </Link>
        </div>
      </section>
    </>
  );
}

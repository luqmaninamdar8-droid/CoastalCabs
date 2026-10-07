import Link from "next/link";
import { QuoteWidget } from "@/components/QuoteWidget";
import { SectionTitle } from "@/components/SectionTitle";
import { TourCard } from "@/components/TourCard";
import { Wave } from "@/components/Wave";
import {
  bookHref,
  cabs,
  coasts,
  fares,
  formatDrive,
  inr,
  phoneDisplay,
  phoneTel,
  services,
  steps,
  testimonials,
  tours,
  whatsappHref,
} from "@/lib/site";

const bands: Record<(typeof cabs)[number]["id"], string> = {
  sedan: "bg-sea",
  suv: "bg-palm",
  premium: "bg-laterite",
  tempo: "bg-gold",
};

export default function HomePage() {
  return (
    <>
      <section className="hero-coast relative overflow-hidden text-foam">
        <div className="wrap relative z-10 grid items-center gap-10 pt-14 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20 lg:pb-28">
          <div>
            <p className="eyebrow text-gold">Susegad, on schedule</p>
            <h1 className="mt-4 max-w-xl text-5xl leading-[0.95] md:text-7xl">
              Cabs for the <span className="italic text-gold">coast</span> of Goa.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-foam/85">
              Coastal Cabs meets flights at Mopa and Dabolim, then takes you to the beach, Old Goa, or a full day down to Palolem.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
            <dl className="mt-8 grid max-w-lg grid-cols-3 gap-3 text-sm">
              <div className="glass-pill">
                <dt className="text-foam/65">Airports</dt>
                <dd className="font-display text-2xl">GOX + GOI</dd>
              </div>
              <div className="glass-pill">
                <dt className="text-foam/65">Desk</dt>
                <dd className="font-display text-2xl">24 hours</dd>
              </div>
              <div className="glass-pill">
                <dt className="text-foam/65">Fare</dt>
                <dd className="font-display text-2xl">Fixed first</dd>
              </div>
            </dl>
          </div>
          <QuoteWidget />
        </div>
        <Wave />
      </section>

      <section className="wrap py-16">
        <SectionTitle
          eyebrow="Popular drops"
          title="Starting fares people actually book"
          text="One way, sedan price. SUVs and Innovas are on the fare sheet. Tolls stay extra."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {fares.slice(0, 6).map((fare) => (
            <Link
              key={`${fare.from}-${fare.to}`}
              href={bookHref({ from: fare.from, to: fare.to, cab: "sedan" })}
              className="paper-card fare-card flex items-end justify-between gap-4 p-5 pl-6"
            >
              <div>
                <p className="text-sm text-ink/60">{fare.from}</p>
                <p className="font-display text-2xl">to {fare.to}</p>
                <p className="mt-2 text-sm text-ink/60">
                  {fare.km} km · {formatDrive(fare.minutes)}
                </p>
              </div>
              <p className="text-right">
                <span className="block font-display text-2xl text-sea">{inr(fare.sedan)}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-ink/50">sedan</span>
              </p>
            </Link>
          ))}
        </div>
        <Link href="/fares" className="btn btn-ink mt-6">
          Full fare sheet
        </Link>
      </section>

      <section className="bg-paper py-16">
        <div className="wrap">
          <SectionTitle
            eyebrow="How a booking works"
            title="Three messages, then a driver"
          />
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="lift-card rounded-[1.6rem] border border-line bg-foam p-6 shadow-[0_18px_40px_-32px_rgba(18,33,28,0.6)]">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-laterite to-[#8d3018] font-display text-xl text-foam shadow-lg">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/75">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap py-16">
        <SectionTitle eyebrow="Services" title="Airport nights to wedding mornings" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="paper-card lift-card p-6">
              <h3 className="text-2xl">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/75">{service.text}</p>
              <Link href={bookHref({ note: service.title })} className="mt-4 inline-block text-sm font-bold text-sea">
                Request this ride
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-sea-deep py-16 text-foam">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="wrap">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Fleet</p>
          <h2 className="mt-2 max-w-xl text-3xl md:text-4xl">A car that fits the bags, not the other way around.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {cabs.map((cab) => (
              <article key={cab.id} className="lift-card overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/10">
                <div className={`h-2 ${bands[cab.id]}`} />
                <div className="p-5">
                  <h3 className="text-2xl">{cab.name}</h3>
                  <p className="text-sm text-foam/70">{cab.cars}</p>
                  <p className="mt-4 font-display text-3xl">{cab.seats}</p>
                  <p className="mt-2 text-sm text-foam/70">From {inr(cab.startsAt)} on airport drops</p>
                  <Link href={bookHref({ cab: cab.id })} className="btn btn-gold mt-5 w-full">
                    Book {cab.name}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap py-16">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Day tours"
            title="The coast, with the cab waiting"
            text="Entry tickets stay separate. The driver and the hours are in the price."
          />
          <Link href="/tours" className="btn btn-ink">
            All tours
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tours.slice(0, 3).map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="wrap">
          <SectionTitle eyebrow="Where we drive" title="North sand, the capital, and the south bays" />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {coasts.map((coast) => (
              <article key={coast.name} className="rounded-3xl border border-line bg-foam p-5">
                <h3 className="text-2xl">{coast.name}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/75">{coast.places.join(" · ")}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap py-16">
        <SectionTitle eyebrow="Guest notes" title="Recent rides, in their words" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="paper-card lift-card p-6">
              <blockquote className="font-display text-2xl leading-snug">
                <span className="text-gold" aria-hidden="true">
                  “
                </span>
                {item.quote}
              </blockquote>
              <figcaption className="mt-4 text-sm text-ink/70">
                <span className="font-semibold text-ink">{item.name}</span> · {item.from}
                <span className="mt-1 block">{item.trip}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="cta-band text-foam">
        <div className="wrap flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl">Send the flight number. We will be at arrivals.</h2>
            <p className="mt-2 max-w-xl text-foam/80">Mopa or Dabolim, including the landings after the last bus.</p>
          </div>
          <Link href="/book" className="btn btn-gold">
            Book a cab
          </Link>
        </div>
      </section>
    </>
  );
}

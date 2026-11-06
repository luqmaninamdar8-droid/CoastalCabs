import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { bookHref, cabs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fleet",
  description: "Sedans, six-seat SUVs, Innova, and a 12-seat tempo for airport runs and tours in Goa.",
};

const bands: Record<(typeof cabs)[number]["id"], string> = {
  sedan: "bg-sea",
  suv: "bg-palm",
  premium: "bg-laterite",
  tempo: "bg-ink",
};

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Fleet"
        title="Four shapes of cab. All of them private."
        lede="No shared seats. If the bags do not fit, we say so before you land and send a larger car."
      />
      <section className="wrap grid gap-5 py-14 md:grid-cols-2">
        {cabs.map((cab) => (
          <article key={cab.id} className="paper-card overflow-hidden">
            <div className={`flex items-end justify-between px-6 py-8 text-foam ${bands[cab.id]}`}>
              <div>
                <h2 className="text-4xl">{cab.name}</h2>
                <p className="mt-1 text-sm text-foam/80">{cab.cars}</p>
              </div>
            </div>
            <div className="space-y-4 p-6">
              <p className="text-sm leading-6 text-ink/75">{cab.bestFor}</p>
              <dl className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-foam p-3">
                  <dt className="text-ink/50">Seats</dt>
                  <dd className="font-semibold">{cab.seats}</dd>
                </div>
                <div className="rounded-2xl bg-foam p-3">
                  <dt className="text-ink/50">Bags</dt>
                  <dd className="font-semibold">{cab.bags}</dd>
                </div>
              </dl>
              <ul className="space-y-1 text-sm text-ink/80">
                {cab.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link href={bookHref({ cab: cab.id })} className="btn btn-gold">
                Book a {cab.name}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

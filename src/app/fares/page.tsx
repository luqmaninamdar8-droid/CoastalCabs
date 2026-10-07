import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import {
  bookHref,
  cabs,
  dayHires,
  extraRates,
  fareNotes,
  fares,
  faqs,
  formatDrive,
  inr,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Fares",
  description: "Starting taxi fares in Goa for Mopa, Dabolim, beach drops, and day hire.",
};

export default function FaresPage() {
  return (
    <>
      <PageHero
        eyebrow="Fares"
        title="The number before you sit down."
        lede="These are starting rates for a private cab. WhatsApp confirms the exact car and the night or toll additions."
      />
      <section className="wrap py-14">
        <div className="overflow-x-auto paper-card">
          <table className="min-w-[760px] w-full text-left text-sm">
            <thead className="bg-sea-deep text-foam">
              <tr>
                <th className="px-4 py-3 font-semibold">Route</th>
                <th className="px-4 py-3 font-semibold">Drive</th>
                {cabs.map((cab) => (
                  <th key={cab.id} className="px-4 py-3 font-semibold">
                    {cab.name}
                  </th>
                ))}
                <th className="px-4 py-3 font-semibold"> </th>
              </tr>
            </thead>
            <tbody>
              {fares.map((fare) => (
                <tr key={`${fare.from}-${fare.to}`} className="border-t border-line">
                  <td className="px-4 py-3">
                    <span className="block font-semibold">{fare.from}</span>
                    <span className="text-ink/60">to {fare.to}</span>
                  </td>
                  <td className="px-4 py-3 text-ink/70">
                    {fare.km} km
                    <span className="block">{formatDrive(fare.minutes)}</span>
                  </td>
                  {cabs.map((cab) => (
                    <td key={cab.id} className="px-4 py-3 font-semibold">
                      {inr(fare[cab.id])}
                    </td>
                  ))}
                  <td className="px-4 py-3">
                    <Link
                      href={bookHref({ from: fare.from, to: fare.to, cab: "sedan" })}
                      className="font-bold text-sea"
                    >
                      Book
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-14 text-3xl">Day hire</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {dayHires.map((hire) => (
            <article key={hire.name} className="paper-card p-5">
              <h3 className="text-2xl">{hire.name}</h3>
              <p className="text-sm text-ink/60">
                {hire.hours} hours · {hire.km} km
              </p>
              <ul className="mt-4 space-y-1 text-sm">
                {cabs.map((cab) => (
                  <li key={cab.id} className="flex justify-between gap-3">
                    <span>{cab.name}</span>
                    <span className="font-semibold">{inr(hire[cab.id])}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm text-ink/70">
          Extra kilometre: sedan {inr(extraRates.sedan)}, SUV {inr(extraRates.suv)}, Innova{" "}
          {inr(extraRates.premium)}, tempo {inr(extraRates.tempo)}.
        </p>

        <h2 className="mt-14 text-3xl">What changes the fare</h2>
        <ul className="mt-4 space-y-3">
          {fareNotes.map((note) => (
            <li key={note} className="paper-card px-4 py-3 text-sm leading-6 text-ink/80">
              {note}
            </li>
          ))}
        </ul>

        <h2 className="mt-14 text-3xl">Questions</h2>
        <div className="mt-4 paper-card px-5">
          {faqs.map((item) => (
            <details key={item.q} className="border-b border-line py-4 last:border-b-0">
              <summary className="cursor-pointer pr-6 font-semibold">{item.q}</summary>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-ink/75">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

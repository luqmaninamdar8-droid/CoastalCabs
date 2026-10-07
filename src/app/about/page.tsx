import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { coasts, phoneDisplay, phoneTel } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Coastal Cabs is a Calangute desk for airport transfers, beach hops, and day tours across Goa.",
};

const values = [
  {
    title: "Fare before the engine starts",
    text: "You see the starting price on this site, then a confirmation on WhatsApp. Traffic on a point-to-point drop does not rewrite it.",
  },
  {
    title: "Drivers who live on these roads",
    text: "The roster is from Bardez, Tiswadi, and Salcete. They know which beach lane is closed and which ghat needs an early start.",
  },
  {
    title: "Both airports, one desk",
    text: "Manohar International at Mopa and Dabolim are on the same phone. Late arrivals get a name board, not a hunt through the parking lot.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The desk"
        title="A Calangute counter for the whole coast."
        lede="Coastal Cabs started as airport cars for hotels on the Baga road. The same phone now covers Palolem, Old Goa, and the wedding tempos."
      />
      <section className="wrap grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4 text-base leading-8 text-ink/80">
          <p>
            The counter sits on Calangute–Baga Road. Airport runs are answered all night. Between 8 in the morning and 9 at night you can also walk in and fix a day hire.
          </p>
          <p>
            Cars are sedans, Ertigas, Innovas, and a 12-seat Traveller. We do not pool strangers into one seat. If you need two cars for a family, say so and they leave together.
          </p>
          <p>
            Child seats, a pet in a carrier, and a cooler for a south day are easy when they are in the first message. Dudhsagar jeeps and plantation tickets are paid at the gate, and we will tell you that before you commit.
          </p>
        </div>
        <aside className="paper-card h-fit p-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-sea">Visit or call</p>
          <p className="mt-3 font-display text-3xl">Shop 4, Calangute–Baga Road</p>
          <p className="mt-2 text-sm leading-6 text-ink/70">Bardez, Goa 403516</p>
          <a href={`tel:${phoneTel}`} className="btn btn-sea mt-5">
            {phoneDisplay}
          </a>
        </aside>
      </section>
      <section className="bg-paper py-14">
        <div className="wrap grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="rounded-3xl border border-line bg-foam p-5">
              <h2 className="text-2xl">{value.title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/75">{value.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="wrap py-14">
        <h2 className="text-3xl">Coast we cover</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {coasts.map((coast) => (
            <article key={coast.name}>
              <h3 className="text-xl text-sea">{coast.name}</h3>
              <p className="mt-2 text-sm leading-7 text-ink/75">{coast.places.join(" · ")}</p>
            </article>
          ))}
        </div>
        <Link href="/contact" className="btn btn-ink mt-8">
          Contact the desk
        </Link>
      </section>
    </>
  );
}

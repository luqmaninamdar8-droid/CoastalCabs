import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { TourCard } from "@/components/TourCard";
import { tours } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tours",
  description: "Private day tours in Goa: north beaches, south bays, Old Goa, Dudhsagar, and a spice plantation.",
};

export default function ToursPage() {
  return (
    <>
      <PageHero
        eyebrow="Tours"
        title="Days with a driver, not a megaphone."
        lede="Each tour is a private cab. Stop longer where you care, skip what you do not, and keep the evening for yourself."
      />
      <section className="wrap grid gap-5 py-14 md:grid-cols-2">
        {tours.map((tour) => (
          <TourCard key={tour.slug} tour={tour} />
        ))}
      </section>
    </>
  );
}

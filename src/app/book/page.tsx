import type { Metadata } from "next";
import { Suspense } from "react";
import { BookForm } from "@/components/BookForm";
import { PageHero } from "@/components/PageHero";
import { firstParam } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a cab",
  description: "Request a Coastal Cab for the airport, a beach hop, or a day tour. Confirmation goes out on WhatsApp.",
};

type RideQuery = {
  from?: string | string[];
  to?: string | string[];
  fromPlace?: string | string[];
  toPlace?: string | string[];
  date?: string | string[];
  cab?: string | string[];
  note?: string | string[];
};

export default function BookPage({
  searchParams,
}: {
  searchParams: Promise<RideQuery>;
}) {
  return (
    <>
      <PageHero
        eyebrow="Booking"
        title="Hold the fare, then meet the driver."
        lede="Fill the ride once. We open WhatsApp with the details so the Calangute desk can confirm the cab."
      />
      <section className="wrap py-12">
        <Suspense fallback={<p className="text-sm text-sea">Loading the booking form…</p>}>
          <RideRequest searchParams={searchParams} />
        </Suspense>
      </section>
    </>
  );
}

async function RideRequest({ searchParams }: { searchParams: Promise<RideQuery> }) {
  const query = await searchParams;
  return (
    <BookForm
      initial={{
        from: firstParam(query.from),
        to: firstParam(query.to),
        fromPlace: firstParam(query.fromPlace),
        toPlace: firstParam(query.toPlace),
        date: firstParam(query.date),
        cab: firstParam(query.cab),
        note: firstParam(query.note),
      }}
    />
  );
}

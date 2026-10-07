import { cabById, findFare, formatDrive, inr, otherPlace, type CabId } from "@/lib/site";

export function FareEstimate({
  from,
  to,
  cab,
}: {
  from: string;
  to: string;
  cab: CabId;
}) {
  if (from === otherPlace || to === otherPlace) {
    return (
      <p className="rounded-2xl bg-foam px-4 py-3 text-sm leading-6 text-ink/80">
        Type your location. We will quote this ride on WhatsApp.
      </p>
    );
  }

  if (from === to) {
    return (
      <p className="rounded-2xl bg-laterite/10 px-4 py-3 text-sm text-laterite">
        Choose two different places.
      </p>
    );
  }

  const fare = findFare(from, to);
  const cabName = cabById(cab).name;

  if (!fare) {
    return (
      <p className="rounded-2xl bg-foam px-4 py-3 text-sm leading-6 text-ink/80">
        This pair is not on the fixed list. We will quote it on WhatsApp before the cab moves.
      </p>
    );
  }

  return (
    <div className="rounded-2xl bg-sea-deep px-4 py-4 text-foam">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
        Starting {cabName} fare
      </p>
      <p className="mt-1 font-display text-3xl">{inr(fare[cab])}</p>
      <p className="mt-1 text-sm text-foam/75">
        {fare.km} km · about {formatDrive(fare.minutes)} · one way
      </p>
    </div>
  );
}

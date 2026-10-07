"use client";

import { useState, type FormEvent } from "react";
import { FareEstimate } from "@/components/FareEstimate";
import { PlaceSelect } from "@/components/PlaceSelect";
import {
  cabById,
  cabs,
  cleanPhone,
  defaultRide,
  findFare,
  inr,
  isCabId,
  isKnownPlace,
  otherPlace,
  ridePlace,
  whatsappHref,
  type CabId,
} from "@/lib/site";

type Initial = {
  from?: string;
  to?: string;
  fromPlace?: string;
  toPlace?: string;
  date?: string;
  cab?: string;
  note?: string;
};

type Receipt = {
  ref: string;
  href: string;
  summary: string[];
};

function placeOrDefault(value: string | undefined, fallback: string) {
  if (value && isKnownPlace(value)) return value;
  return fallback;
}

export function BookForm({ initial }: { initial?: Initial }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [from, setFrom] = useState(placeOrDefault(initial?.from, defaultRide.from));
  const [to, setTo] = useState(placeOrDefault(initial?.to, defaultRide.to));
  const [fromCustom, setFromCustom] = useState(initial?.fromPlace ?? "");
  const [toCustom, setToCustom] = useState(initial?.toPlace ?? "");
  const [date, setDate] = useState(initial?.date && /^\d{4}-\d{2}-\d{2}$/.test(initial.date) ? initial.date : "");
  const [time, setTime] = useState("10:00");
  const [guests, setGuests] = useState("2");
  const [cab, setCab] = useState<CabId>(initial?.cab && isCabId(initial.cab) ? initial.cab : defaultRide.cab);
  const [notes, setNotes] = useState(initial?.note ?? "");
  const [errors, setErrors] = useState<string[]>([]);
  const [receipt, setReceipt] = useState<Receipt | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: string[] = [];
    if (name.trim().length < 2) nextErrors.push("Add the name for the pickup board.");
    if (!/^[6-9]\d{9}$/.test(cleanPhone(phone))) {
      nextErrors.push("Use a 10-digit Indian mobile number.");
    }
    const pickup = ridePlace(from, fromCustom);
    const drop = ridePlace(to, toCustom);
    if (from === otherPlace && pickup.length < 2) nextErrors.push("Enter your pickup location.");
    if (to === otherPlace && drop.length < 2) nextErrors.push("Enter your drop location.");
    if (pickup && drop && pickup.toLowerCase() === drop.toLowerCase()) {
      nextErrors.push("Pickup and drop need to be different.");
    }
    if (!date) nextErrors.push("Choose the date of the ride.");
    setErrors(nextErrors);
    if (nextErrors.length > 0) return;

    const fare = findFare(pickup, drop);
    const chosen = cabById(cab);
    const ref = `AG-${Date.now().toString().slice(-6)}`;
    const lines = [
      `Coastal Cabs request ${ref}`,
      `Name: ${name.trim()}`,
      `Phone: ${cleanPhone(phone)}`,
      `From: ${pickup}`,
      `To: ${drop}`,
      `When: ${date} at ${time}`,
      `Cab: ${chosen.name} (${chosen.cars})`,
      `Guests: ${guests}`,
      fare ? `Starting fare: ${inr(fare[cab])}` : "Fare: please quote this ride",
      notes.trim() ? `Notes: ${notes.trim()}` : "",
    ].filter(Boolean);

    setReceipt({
      ref,
      href: whatsappHref(lines.join("\n")),
      summary: lines.slice(1),
    });
  }

  if (receipt) {
    return (
      <section className="paper-card p-6 md:p-8" aria-live="polite">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-sea">Request ready</p>
        <h2 className="mt-2 text-3xl">Send {receipt.ref} on WhatsApp</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-ink/75">
          The desk confirms the cab after this message arrives. Nothing is held until you send it.
        </p>
        <ul className="mt-5 space-y-2 text-sm">
          {receipt.summary.map((line) => (
            <li key={line} className="border-b border-line pb-2">
              {line}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a className="btn btn-gold" href={receipt.href} target="_blank" rel="noopener noreferrer">
            Open WhatsApp
          </a>
          <button type="button" className="btn btn-ink" onClick={() => setReceipt(null)}>
            Edit details
          </button>
        </div>
      </section>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]" noValidate>
      <div className="paper-card p-5 sm:p-6">
        <h2 className="text-2xl">Ride details</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-semibold">
            Name
            <input className="field mt-1.5" value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" />
          </label>
          <label className="text-sm font-semibold">
            Mobile
            <input
              className="field mt-1.5"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              inputMode="tel"
              autoComplete="tel"
              placeholder="98XXXXXXXX"
            />
          </label>
          <PlaceSelect
            id="book-from"
            label="From"
            value={from}
            custom={fromCustom}
            onValue={setFrom}
            onCustom={setFromCustom}
          />
          <PlaceSelect
            id="book-to"
            label="To"
            value={to}
            custom={toCustom}
            onValue={setTo}
            onCustom={setToCustom}
          />
          <label className="text-sm font-semibold">
            Date
            <input className="field mt-1.5" type="date" value={date} onChange={(event) => setDate(event.target.value)} />
          </label>
          <label className="text-sm font-semibold">
            Time
            <input className="field mt-1.5" type="time" value={time} onChange={(event) => setTime(event.target.value)} />
          </label>
          <label className="text-sm font-semibold">
            Guests
            <select className="field mt-1.5" value={guests} onChange={(event) => setGuests(event.target.value)}>
              {Array.from({ length: 12 }, (_, index) => String(index + 1)).map((count) => (
                <option key={count}>{count}</option>
              ))}
            </select>
          </label>
          <label className="text-sm font-semibold">
            Cab
            <select
              className="field mt-1.5"
              value={cab}
              onChange={(event) => {
                if (isCabId(event.target.value)) setCab(event.target.value);
              }}
            >
              {cabs.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} · {item.seats}
                </option>
              ))}
            </select>
          </label>
          <label className="sm:col-span-2 text-sm font-semibold">
            Notes
            <textarea
              className="field mt-1.5 min-h-28"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder="Flight number, hotel name, or child seat"
            />
          </label>
        </div>
        {errors.length > 0 ? (
          <ul className="mt-4 space-y-1 text-sm text-laterite" role="alert">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        ) : null}
        <button className="btn btn-sea mt-5" type="submit">
          Prepare WhatsApp request
        </button>
      </div>
      <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
        <FareEstimate
          from={from === otherPlace ? ridePlace(from, fromCustom) || otherPlace : from}
          to={to === otherPlace ? ridePlace(to, toCustom) || otherPlace : to}
          cab={cab}
        />
        <div className="paper-card p-4 text-sm leading-6 text-ink/75">
          <p className="font-semibold text-ink">Before you send</p>
          <p className="mt-2">
            Night rides after 10:00 pm add 15%. Tolls, parking, and waterfall jeeps are extra.
          </p>
        </div>
      </aside>
    </form>
  );
}

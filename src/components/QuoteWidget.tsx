"use client";

import { useState, type MouseEvent } from "react";
import { PlaceSelect } from "@/components/PlaceSelect";
import {
  bookingMessage,
  cabById,
  cabs,
  cleanPhone,
  defaultRide,
  isCabId,
  isKnownPlace,
  otherPlace,
  ridePlace,
  whatsappHref,
  type CabId,
} from "@/lib/site";

function placeOrDefault(value: string | undefined, fallback: string) {
  if (value && isKnownPlace(value)) return value;
  return fallback;
}

export function QuoteWidget({
  initial,
}: {
  initial?: {
    from?: string;
    to?: string;
    fromPlace?: string;
    toPlace?: string;
    date?: string;
    cab?: string;
    note?: string;
    name?: string;
    phone?: string;
    guests?: string;
  };
}) {
  const [name, setName] = useState(initial?.name ?? "");
  const [phone, setPhone] = useState(initial?.phone ?? "");
  const [from, setFrom] = useState<string>(placeOrDefault(initial?.from, defaultRide.from));
  const [to, setTo] = useState<string>(placeOrDefault(initial?.to, defaultRide.to));
  const [fromCustom, setFromCustom] = useState(initial?.fromPlace ?? "");
  const [toCustom, setToCustom] = useState(initial?.toPlace ?? "");
  const [date, setDate] = useState(initial?.date && /^\d{4}-\d{2}-\d{2}$/.test(initial.date) ? initial.date : "");
  const [guests, setGuests] = useState(
    initial?.guests && Number(initial.guests) >= 1 && Number(initial.guests) <= 12 ? initial.guests : "2",
  );
  const [cab, setCab] = useState<CabId>(initial?.cab && isCabId(initial.cab) ? initial.cab : defaultRide.cab);
  const [notes, setNotes] = useState(initial?.note ?? "");
  const [errors, setErrors] = useState<string[]>([]);
  const pickup = ridePlace(from, fromCustom);
  const drop = ridePlace(to, toCustom);
  const missingLocation = (from === otherPlace && pickup.length < 2) || (to === otherPlace && drop.length < 2);
  const samePlace = Boolean(pickup) && pickup.toLowerCase() === drop.toLowerCase();
  const chosen = cabById(cab);
  const message = bookingMessage({
    name,
    phone: phone.trim() ? cleanPhone(phone) : "",
    from: pickup,
    to: drop,
    date,
    cab: `${chosen.name} (${chosen.cars})`,
    guests,
    notes,
  });

  function onWhatsApp(event: MouseEvent<HTMLAnchorElement>) {
    const nextErrors: string[] = [];
    if (name.trim().length < 2) nextErrors.push("Add the name for the pickup board.");
    if (!/^[6-9]\d{9}$/.test(cleanPhone(phone))) {
      nextErrors.push("Use a 10-digit Indian mobile number.");
    }
    setErrors(nextErrors);
    if (nextErrors.length > 0) event.preventDefault();
  }

  return (
    <div id="ride" className="quote-panel relative z-10 scroll-mt-24 p-5 text-ink sm:p-7">
      <p className="eyebrow text-sea before:bg-gold">Plan a ride</p>
      <h2 className="mt-2 text-3xl">Where in Goa?</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
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
          id="quote-from"
          className="sm:col-span-2"
          label="From"
          value={from}
          custom={fromCustom}
          onValue={setFrom}
          onCustom={setFromCustom}
        />
        <PlaceSelect
          id="quote-to"
          className="sm:col-span-2"
          label="To"
          value={to}
          custom={toCustom}
          onValue={setTo}
          onCustom={setToCustom}
        />
        <label className="text-sm font-semibold">
          Date
          <input
            className="field mt-1.5"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>
        <label className="text-sm font-semibold">
          Guests
          <select className="field mt-1.5" value={guests} onChange={(event) => setGuests(event.target.value)}>
            {Array.from({ length: 12 }, (_, index) => String(index + 1)).map((count) => (
              <option key={count}>{count}</option>
            ))}
          </select>
        </label>
        <label className="sm:col-span-2 text-sm font-semibold">
          Type of car
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
            className="field mt-1.5 min-h-24"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            placeholder="Flight number, hotel name, or child seat"
          />
        </label>
      </div>
      {errors.length > 0 ? (
        <ul className="mt-3 space-y-1 text-sm text-laterite" role="alert">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      ) : null}
      {missingLocation ? (
        <span className="btn btn-gold mt-4 w-full opacity-60">Enter your location</span>
      ) : samePlace ? (
        <span className="btn btn-gold mt-4 w-full opacity-60">Choose two places</span>
      ) : (
        <a
          className="btn btn-gold mt-4 w-full"
          href={whatsappHref(message)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onWhatsApp}
        >
          Book on WhatsApp
        </a>
      )}
    </div>
  );
}

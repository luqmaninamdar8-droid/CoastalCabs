"use client";

import Link from "next/link";
import { useState } from "react";
import { FareEstimate } from "@/components/FareEstimate";
import { PlaceSelect } from "@/components/PlaceSelect";
import {
  bookHref,
  cabs,
  defaultRide,
  isCabId,
  otherPlace,
  ridePlace,
  type CabId,
} from "@/lib/site";

export function QuoteWidget() {
  const [from, setFrom] = useState<string>(defaultRide.from);
  const [to, setTo] = useState<string>(defaultRide.to);
  const [fromCustom, setFromCustom] = useState("");
  const [toCustom, setToCustom] = useState("");
  const [date, setDate] = useState("");
  const [cab, setCab] = useState<CabId>(defaultRide.cab);
  const pickup = ridePlace(from, fromCustom);
  const drop = ridePlace(to, toCustom);
  const missingLocation = (from === otherPlace && pickup.length < 2) || (to === otherPlace && drop.length < 2);
  const samePlace = Boolean(pickup) && pickup.toLowerCase() === drop.toLowerCase();

  return (
    <div className="quote-panel relative z-10 p-5 text-ink sm:p-7">
      <p className="eyebrow text-sea before:bg-gold">Plan a ride</p>
      <h2 className="mt-2 text-3xl">Where in Goa?</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
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
      </div>
      <div className="mt-4">
        <FareEstimate
          from={from === otherPlace ? pickup || otherPlace : from}
          to={to === otherPlace ? drop || otherPlace : to}
          cab={cab}
        />
      </div>
      {missingLocation ? (
        <span className="btn btn-gold mt-4 w-full opacity-60">Enter your location</span>
      ) : samePlace ? (
        <span className="btn btn-gold mt-4 w-full opacity-60">Choose two places</span>
      ) : (
        <Link
          className="btn btn-gold mt-4 w-full"
          href={bookHref({
            from,
            to,
            date,
            cab,
            fromPlace: from === otherPlace ? pickup : undefined,
            toPlace: to === otherPlace ? drop : undefined,
          })}
        >
          Continue to booking
        </Link>
      )}
    </div>
  );
}

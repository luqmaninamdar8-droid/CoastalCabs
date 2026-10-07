"use client";

import { useState, type FormEvent } from "react";
import { cleanPhone, whatsappHref } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [href, setHref] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (name.trim().length < 2 || message.trim().length < 8) {
      setError("Add your name and a short note about the ride.");
      setHref("");
      return;
    }
    if (phone.trim() && !/^[6-9]\d{9}$/.test(cleanPhone(phone))) {
      setError("That mobile number does not look complete.");
      setHref("");
      return;
    }
    setError("");
    setHref(
      whatsappHref(
        [`Hello Coastal Cabs`, `Name: ${name.trim()}`, phone.trim() ? `Phone: ${cleanPhone(phone)}` : "", message.trim()].filter(Boolean).join("\n"),
      ),
    );
  }

  return (
    <form onSubmit={onSubmit} className="paper-card p-5 sm:p-6" noValidate>
      <h2 className="text-2xl">Write to the desk</h2>
      <div className="mt-4 grid gap-4">
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
            placeholder="Optional"
          />
        </label>
        <label className="text-sm font-semibold">
          Message
          <textarea
            className="field mt-1.5 min-h-32"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Dates, hotels, and how many people"
          />
        </label>
      </div>
      {error ? (
        <p className="mt-3 text-sm text-laterite" role="alert">
          {error}
        </p>
      ) : null}
      {href ? (
        <a className="btn btn-gold mt-4" href={href} target="_blank" rel="noopener noreferrer">
          Open WhatsApp
        </a>
      ) : (
        <button className="btn btn-sea mt-4" type="submit">
          Prepare message
        </button>
      )}
    </form>
  );
}

import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { address, email, phoneDisplay, phoneTel, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call, WhatsApp, or visit the Coastal Cabs desk on Calangute–Baga Road.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="The desk picks up, including after midnight."
        lede="Airport questions can come in at any hour. The Calangute counter is open from 8:00 to 21:00 if you would rather talk across the table."
      />
      <section className="wrap grid gap-8 py-14 lg:grid-cols-2">
        <div className="space-y-4">
          <article className="paper-card p-5">
            <h2 className="text-2xl">Call</h2>
            <a href={`tel:${phoneTel}`} className="mt-2 block font-display text-3xl text-sea">
              {phoneDisplay}
            </a>
            <p className="mt-2 text-sm text-ink/70">Airport desk all night.</p>
          </article>
          <article className="paper-card p-5">
            <h2 className="text-2xl">WhatsApp</h2>
            <p className="mt-2 text-sm leading-6 text-ink/75">
              Best for flight numbers, hotel pins, and tempo dates.
            </p>
            <a
              className="btn btn-gold mt-4"
              href={whatsappHref("Hello Coastal Cabs, I need a taxi in Goa.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message the desk
            </a>
          </article>
          <article className="paper-card p-5">
            <h2 className="text-2xl">Counter</h2>
            <p className="mt-2 text-sm leading-6">
              {address.line1}
              <br />
              {address.line2}
              <br />
              {address.city}
            </p>
            <a className="mt-3 inline-block text-sm font-bold text-sea" href={address.maps} target="_blank" rel="noopener noreferrer">
              Open in Maps
            </a>
            <p className="mt-3 text-sm">
              <a href={`mailto:${email}`} className="font-semibold">
                {email}
              </a>
            </p>
          </article>
        </div>
        <ContactForm />
      </section>
    </>
  );
}

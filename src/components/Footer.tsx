import Link from "next/link";
import { Mark } from "@/components/Mark";
import {
  address,
  email,
  nav,
  phoneDisplay,
  phoneTel,
  siteName,
  whatsappHref,
} from "@/lib/site";

export function Footer() {
  return (
    <>
      <footer className="mt-auto bg-sea-deep text-foam">
        <div className="wrap grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Mark />
              <span className="font-display text-xl">{siteName}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-foam/75">
              Airport boards, beach hops, and day tours from Mopa to Palolem. The fare is
              confirmed before the cab leaves.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#ride" className="hover:text-gold">
                  Book a cab
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Desk</p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-foam/80">
              <li>
                <a href={`tel:${phoneTel}`} className="hover:text-gold">
                  {phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="hover:text-gold">
                  {email}
                </a>
              </li>
              <li>
                {address.line1}
                <br />
                {address.line2}
                <br />
                {address.city}
              </li>
              <li>Airport desk all night · Calangute counter 8:00–21:00</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="wrap flex flex-col gap-2 py-4 text-xs text-foam/60 sm:flex-row sm:justify-between">
            <p>© 2026 {siteName}. Calangute, Goa.</p>
            <p>Fares are starting rates. Tolls and parking are extra.</p>
          </div>
        </div>
      </footer>
      <a
        href={whatsappHref(`Hello ${siteName}, I need a taxi in Goa.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 14.15c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.14-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.26.64-.38 1.02-.38.12 0 .23 0 .33.01.3.01.45.03.65.5.24.58.82 2 .89 2.15.07.14.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.55.16.26.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.16 1.34.26.14.42.12.57-.07.16-.19.66-.77.84-1.03.17-.26.35-.22.58-.13.24.09 1.5.71 1.76.84.26.12.43.19.49.29.07.1.07.61-.17 1.29Z" />
        </svg>
        WhatsApp
      </a>
    </>
  );
}

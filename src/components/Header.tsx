"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Mark } from "@/components/Mark";
import { nav, siteName } from "@/lib/site";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [seenPath, setSeenPath] = useState(pathname);

  if (pathname !== seenPath) {
    setSeenPath(pathname);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-gold/30 bg-foam/80 shadow-[0_16px_40px_-28px_rgba(18,33,28,0.65)] backdrop-blur-xl">
      <div className="wrap flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-2.5" aria-label={siteName}>
          <Mark />
          <span>
            <span className="block font-display text-lg leading-none">Coastal</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-sea">
              Cabs
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold ${
                isActive(pathname, item.href)
                  ? "text-sea underline decoration-gold decoration-2 underline-offset-8"
                  : "text-ink/70 hover:text-ink"
              }`}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/book" className="btn btn-gold">
            Book a cab
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className={`block h-0.5 w-full bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-full bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-full bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-line bg-paper lg:hidden" aria-label="Mobile">
          <div className="wrap flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-semibold hover:bg-foam"
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/book" className="btn btn-gold mt-2">
              Book a cab
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap py-24">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-laterite">404</p>
      <h1 className="mt-3 max-w-xl text-5xl">This road is not on the map.</h1>
      <p className="mt-4 max-w-lg text-lg leading-8 text-ink/75">
        The page is missing. The cab desk is still open.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-sea">
          Back home
        </Link>
        <Link href="/book" className="btn btn-ink">
          Book a cab
        </Link>
      </div>
    </section>
  );
}

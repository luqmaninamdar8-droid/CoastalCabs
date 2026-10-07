export function Mark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="12" fill="#0f6f6a" />
      <path d="M8 27h24" stroke="#f3efe6" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 27l2.2-7.2h11.6L28 27" stroke="#f3efe6" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="16" cy="27" r="2" fill="#e2a12b" />
      <circle cx="25" cy="27" r="2" fill="#e2a12b" />
      <path
        d="M20 8c1.8 2.6 2.2 4.6.4 7.2 2.8-.6 5.2 1 5.2 3.4"
        stroke="#e2a12b"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

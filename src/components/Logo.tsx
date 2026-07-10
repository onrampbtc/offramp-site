/**
 * Offramp logo system — "The Assay Stamp" (Assay Ledger direction).
 * Three forms: seal (favicon/stamp), wordmark (nav), lockup (seal+wordmark).
 * The seal doubles as the certificate stamp on estimates and the footer mark.
 */

export function Seal({ size = 34, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
    >
      <circle cx="32" cy="32" r="29" fill="none" stroke="#A98D4B" strokeWidth="2.4" />
      <circle cx="32" cy="32" r="23" fill="none" stroke="#A98D4B" strokeWidth="0.9" opacity="0.55" />
      <text
        x="32"
        y="42.5"
        textAnchor="middle"
        fontFamily="var(--font-cormorant), Georgia, serif"
        fontSize="30"
        fontWeight="550"
        fill="currentColor"
      >
        O
      </text>
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display font-semibold tracking-tight text-ink ${className}`}
      style={{ letterSpacing: "-0.02em" }}
    >
      Offramp
    </span>
  );
}

export function Lockup({
  sealSize = 26,
  textClass = "text-[1.45rem]",
}: {
  sealSize?: number;
  textClass?: string;
}) {
  return (
    <span className="flex items-center gap-2.5 text-ink">
      <Seal size={sealSize} />
      <Wordmark className={textClass} />
    </span>
  );
}

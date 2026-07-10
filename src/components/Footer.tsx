import Link from "next/link";

const PHONE_DISPLAY = "(512) 983-5997";
const PHONE_HREF = `tel:${process.env.NEXT_PUBLIC_PHONE ?? "+15129835997"}`;

const LINK_COLUMNS = [
  {
    title: "Sell",
    links: [
      { label: "Sell gold", href: "/sell" },
      { label: "Sell jewelry", href: "/sell-jewelry" },
      { label: "Sell coins", href: "/sell-coins" },
      { label: "Sell dental gold", href: "/sell-dental-gold" },
      { label: "How it works", href: "/how-it-works" },
    ],
  },
  {
    title: "What it's worth",
    links: [
      { label: "Gold calculator", href: "/gold-calculator" },
      { label: "Gold price today", href: "/gold-price" },
      { label: "14k calculator", href: "/calculators/14k" },
      { label: "Scrap gold calculator", href: "/calculators/scrap" },
      { label: "Pawn shop comparison", href: "/calculators/pawn-comparison" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Where to sell gold", href: "/guide/where-to-sell-gold" },
      { label: "Bitcoin vs gold", href: "/guide/bitcoin-vs-gold" },
      { label: "Gold to bitcoin", href: "/gold-to-bitcoin" },
      { label: "Family vault", href: "/family-vault" },
      { label: "Austin drop-off", href: "/austin" },
    ],
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* NAP block */}
          <div>
            <p className="font-display text-xl font-semibold text-ink">Offramp</p>
            <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-ink-2">
              The family way to know, keep, and sell your gold.
            </p>
            <address className="mt-5 space-y-1 font-mono text-[13px] not-italic leading-relaxed text-ink-2">
              <p>500 W 2nd St Ste 1900</p>
              <p>Austin, TX 78701</p>
              <p className="pt-1">
                <a href={PHONE_HREF} className="text-ink transition-colors hover:text-gold-400">
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p className="text-ink-3">Mon-Fri 9:00-5:00 CT · by appointment</p>
            </address>
          </div>

          {LINK_COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="font-body text-sm font-semibold text-ink">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="font-body text-sm text-ink-2 transition-colors hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Hairline + bottom row */}
        <div className="mt-12 border-t border-line pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              {/* Stamped-seal mark */}
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                aria-hidden="true"
                className="text-line-2"
              >
                <circle cx="17" cy="17" r="15.5" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="17" cy="17" r="11.5" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <text
                  x="17"
                  y="21"
                  textAnchor="middle"
                  fontFamily="var(--font-cormorant), Georgia, serif"
                  fontSize="12"
                  fill="#8A6D1F"
                >
                  O
                </text>
              </svg>
              <p className="font-body text-xs leading-relaxed text-ink-3">
                © {year} Offramp. Texas precious-metals dealer registration in progress.{" "}
                <br className="hidden sm:block" />
                Estimates are informational, not insurance appraisals. Bitcoin payouts
                powered by{" "}
                <a
                  href="https://onrampbitcoin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-2 underline decoration-line-2 underline-offset-2 hover:text-ink"
                >
                  Onramp
                </a>
                .
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link href="/privacy" className="font-body text-xs text-ink-3 hover:text-ink">
                Privacy
              </Link>
              <Link href="/terms" className="font-body text-xs text-ink-3 hover:text-ink">
                Terms
              </Link>
              <span className="hidden h-3 w-px bg-line-2 sm:block" aria-hidden="true" />
              <a
                href="https://goldvsbitcoin.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-ink-3 hover:text-ink"
              >
                goldvsbitcoin.org
              </a>
              <a
                href="https://goldbuyer.io"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-ink-3 hover:text-ink"
              >
                goldbuyer.io
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

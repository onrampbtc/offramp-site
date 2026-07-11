import Image from "next/image";
import Link from "next/link";
import { LiveStrip } from "@/components/LiveStrip";

/*
  Homepage per docs/BUILD-SPEC.md §6 — Estate Paper.
  Omitted until real data exists (no fabricated proof):
  payout ticker (needs ≥5 real payouts) and the review line.
*/

const VAULT_PREVIEW_ITEMS = [
  { name: "Grandma's wedding band", detail: "14k · 4.1 g", range: "$212 – $268", up: true },
  { name: "Dad's Krugerrand", detail: "1 oz coin", range: "$3,280 – $3,415", up: true },
  { name: "The charm bracelet", detail: "10k · 22.6 g", range: "$688 – $742", up: false },
] as const;

const STEPS = [
  {
    n: "01",
    title: "Photograph your gold",
    body: "We read the hallmark and give you an honest range in about a minute. No account needed.",
    href: "/gold-calculator",
    link: "See what it's worth",
  },
  {
    n: "02",
    title: "Free insured kit, or drop off in Austin",
    body: "FedEx kit with $25,000 insurance, or a by-appointment visit downtown.",
    href: "/get-kit",
    link: "Request a kit",
  },
  {
    n: "03",
    title: "Watch the assay, get paid your way",
    body: "Every final price comes from a recorded assay. Wire to your bank, or bitcoin via Onramp.",
    href: "/how-it-works",
    link: "How it works",
  },
] as const;

const COMPARISON_ROWS = [
  { label: "Typical payout", pawn: "20–55% of melt", offramp: "80–90% of melt" },
  { label: "Price basis", pawn: "Verbal estimate", offramp: "an assay you can watch" },
  { label: "Pressure", pawn: "Decide on the spot", offramp: "48h price lock, decide at home" },
  { label: "Shipping", pawn: "You drive there", offramp: "Free insured kit, $25k coverage" },
  { label: "If you decline", pawn: "Awkward walk out", offramp: "Free return shipping" },
  { label: "Payment", pawn: "Cash only", offramp: "Wire, or bitcoin via Onramp" },
] as const;

export default function HomePage() {
  return (
    <>
      {/* ============ HERO (split) ============ */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="label-maison text-gold-400">
              Austin, Texas HQ &middot; online everywhere, on demand
            </p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
              Sell your gold for what it&rsquo;s actually worth.
            </h1>
            <p className="mt-5 max-w-xl font-body text-lg leading-relaxed text-ink-2">
              An honest range in about a minute, no account needed. Then a free
              insured kit or an Austin appointment, an assay you can watch, and
              payment by wire or bitcoin — with no obligation at any step.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/gold-calculator"
                className="rounded-full bg-ink px-7 py-3.5 font-body text-sm font-semibold text-paper transition-transform hover:opacity-90 active:scale-[0.98]"
              >
                See what it&rsquo;s worth
              </Link>
              <Link
                href="/sell"
                className="rounded-full border border-line-2 px-7 py-3.5 font-body text-sm font-semibold text-ink transition-colors hover:border-ink active:scale-[0.98]"
              >
                Sell gold for cash
              </Link>
            </div>
            <p className="mt-5 font-body text-sm text-ink-3">
              New — <Link href="/family-vault" className="font-medium text-gold-400 underline decoration-line-2 underline-offset-4 hover:text-ink">the gold ledger</Link>
              <span className="ml-1 rounded-full border border-line-2 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide">beta</span>
              : tech-enabled valuations you can track until you&rsquo;re ready to sell.
            </p>
          </div>

          {/* Hero photograph — human + heirloom, Menē register */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl lg:aspect-auto lg:h-[520px]">
            <Image
              src="/photos/hands-heirloom-ring-passing.jpg"
              alt="Two hands resting together over dark stone, one wearing a fine gold ring"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[50%_62%]"
            />
          </div>
        </div>
      </section>

      {/* ============ LIVE STRIP (dark instrument panel) ============ */}
      <LiveStrip />

      {/* ============ HOW IT WORKS ============ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          From drawer to paid, in three steps
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-xl border border-line bg-raise p-6">
              <p className="font-mono text-xs text-gold-400">{s.n}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-2">{s.body}</p>
              <Link
                href={s.href}
                className="mt-4 inline-block font-body text-sm font-medium text-gold-400 underline decoration-line-2 underline-offset-4 transition-colors hover:text-ink"
              >
                {s.link}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ============ PAWN VS OFFRAMP ============ */}
      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          The honest comparison
        </h2>
        <p className="mt-3 max-w-2xl font-body text-base text-ink-2">
          Pawn shops price for people who need money today. We price for families
          deciding what an heirloom is worth.
        </p>
        <div className="mt-8 overflow-x-auto rounded-xl border border-line bg-raise">
          <table className="w-full min-w-[560px] text-left">
            <thead>
              <tr className="border-b border-line">
                <th className="px-5 py-4 font-body text-xs font-semibold uppercase tracking-wide text-ink-3">
                  &nbsp;
                </th>
                <th className="px-5 py-4 font-body text-sm font-semibold text-coral">Pawn shop</th>
                <th className="px-5 py-4 font-body text-sm font-semibold text-teal">Offramp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.label}>
                  <td className="px-5 py-4 font-body text-sm font-medium text-ink">{row.label}</td>
                  <td className="px-5 py-4 font-body text-sm text-coral">{row.pawn}</td>
                  <td className="px-5 py-4 font-body text-sm text-teal">{row.offramp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <Link
            href="/calculators/pawn-comparison"
            className="font-body text-sm font-medium text-gold-400 underline decoration-line-2 underline-offset-4 hover:text-ink"
          >
            Run the numbers on your own gold
          </Link>
        </div>
      </section>

      {/* ============ FAMILY VAULT ============ */}
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="label-maison text-gold-400">The gold ledger &middot; beta</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Value it once. Watch it until you&rsquo;re ready.
            </h2>
            <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-ink-2">
              The inheritance, the pieces from another chapter, the jewelry you
              never wear — photograph it once and every piece gets an honest,
              tech-enabled valuation, tracked live against the gold price. Sell
              in one step whenever you&rsquo;re ready. And if the pieces belong
              to more than one of you, invite your family to see the same numbers.
            </p>
            <Link
              href="/family-vault"
              className="mt-6 inline-block font-body text-sm font-medium text-gold-400 underline decoration-line-2 underline-offset-4 hover:text-ink"
            >
              Join the ledger beta
            </Link>
          </div>

          {/* Vault preview card (marketing render, clearly illustrative) */}
          <div className="rounded-xl border border-line bg-raise p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display text-lg font-semibold text-ink">Maya&rsquo;s ledger</p>
                <p className="font-body text-xs text-ink-3">3 pieces · shared with 3 family members</p>
              </div>
              <div className="flex -space-x-2" aria-hidden="true">
                {["M", "S", "R", "L"].map((i) => (
                  <span
                    key={i}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-raise bg-cream-08 font-body text-[11px] font-medium text-ink-2"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>

            <ul className="mt-5 divide-y divide-line">
              {VAULT_PREVIEW_ITEMS.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-3 py-3">
                  <div className="min-w-0">
                    <p className="truncate font-body text-sm font-medium text-ink">{item.name}</p>
                    <p className="font-mono text-xs text-ink-3">{item.detail}</p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-sm text-ink">{item.range}</span>
                    <span
                      className={`font-mono text-xs ${item.up ? "text-teal" : "text-ink-3"}`}
                      aria-label={item.up ? "trending up" : "steady"}
                    >
                      {item.up ? "↑" : "→"}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-baseline justify-between border-t border-line-2 pt-4">
              <span className="font-body text-sm text-ink-2">Vault total</span>
              <span className="font-mono text-lg font-medium text-ink">$4,180 – $4,425</span>
            </div>
            <p className="mt-3 font-body text-[11px] text-ink-3">Illustrative example</p>
          </div>
        </div>
      </section>


      {/* ============ DARK THESIS BAND (the one vault moment) ============ */}
      <section className="vault-atmosphere">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="max-w-2xl font-display text-2xl font-medium leading-snug text-panel-ink sm:text-3xl">
                Gold preserved wealth for 5,000 years.
                <span className="text-gold-brt"> Decide its next 5,000.</span>
              </p>
              <Link
                href="/gold-to-bitcoin"
                className="mt-8 inline-block rounded-full border border-gold-brt/40 px-6 py-3 font-body text-sm font-semibold text-gold-brt transition-colors hover:border-gold-brt"
              >
                Gold to bitcoin
              </Link>
            </div>
            <div className="relative hidden aspect-[16/10] overflow-hidden rounded-lg lg:block">
              <Image
                src="/photos/gold-coin-warm-light.jpg"
                alt="A gold coin standing on edge in a blade of warm light"
                fill
                sizes="(min-width: 1024px) 38vw, 0px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, FAQJsonLd, JsonLd } from "@/components/JsonLd";
import { selectRows, isSupabaseConfigured } from "@/lib/supabase";

/*
  /prices/14k-gold-price-per-gram — price-table template instance (spec §9.2).
  Primary keyword: "14k gold price per gram" (74,000/mo, Semrush 2026-07-08).
  Intel: Alloy's equivalent page is their #3 traffic page; they buy the
  question keywords on ads. We beat on dated freshness + honesty columns.
  Server-rendered, ISR daily; spot from Supabase history with live fallback.
*/

// 1h: the daily 11:00 UTC spot row must reach the page the same morning,
// not up to 24h later — "today's price" is the page's core promise.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "14k Gold Price Per Gram Today | Melt Value and What Buyers Pay",
  description:
    "Live 14k gold price per gram, updated daily: melt value plus what pawn shops, mail-in buyers, and Offramp actually pay per gram. With a 30-day price history.",
  alternates: { canonical: "https://offrampgold.com/prices/14k-gold-price-per-gram" },
};

const GRAMS_PER_OZ = 31.1035;
const DWT_PER_OZ = 20;
const PURITY_14K = 0.5833;

interface SpotRow {
  ts: string;
  gold_usd_oz: number;
}

async function getSpot(): Promise<{ latest: number; history: SpotRow[]; asOf: Date }> {
  if (isSupabaseConfigured()) {
    const res = await selectRows(
      "spot_prices",
      "select=ts,gold_usd_oz&order=ts.desc&limit=30"
    );
    if (res.ok && res.data && res.data.length > 0) {
      const rows = res.data as unknown as SpotRow[];
      return {
        latest: Number(rows[0].gold_usd_oz),
        history: rows.slice().reverse(),
        asOf: new Date(rows[0].ts),
      };
    }
  }
  // Fallback: live fetch at build time
  try {
    const r = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=pax-gold&vs_currencies=usd",
      { next: { revalidate: 3600 } }
    );
    const d = (await r.json()) as { "pax-gold"?: { usd?: number } };
    const spot = d["pax-gold"]?.usd ?? 0;
    return { latest: spot, history: [], asOf: new Date() };
  } catch {
    return { latest: 0, history: [], asOf: new Date() };
  }
}

const usd = (n: number, d = 2) =>
  n.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });

const fmtDate = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

function Sparkline({ history }: { history: SpotRow[] }) {
  if (history.length < 2) return null;
  const vals = history.map((r) => Number(r.gold_usd_oz));
  const min = Math.min(...vals);
  const max = Math.max(...vals);
  const span = max - min || 1;
  const w = 320;
  const h = 64;
  const pts = vals
    .map((v, i) => `${(i / (vals.length - 1)) * w},${h - ((v - min) / span) * (h - 8) - 4}`)
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-16 w-full" aria-label="30-day gold price trend">
      <polyline points={pts} fill="none" stroke="#C9A84C" strokeWidth="2" />
    </svg>
  );
}

export default async function Price14kPage() {
  const { latest, history, asOf } = await getSpot();
  const meltPerGram = (latest / GRAMS_PER_OZ) * PURITY_14K;
  const meltPerDwt = (latest / DWT_PER_OZ) * PURITY_14K;
  const meltPerOz14k = latest * PURITY_14K;

  const fairLow = meltPerGram * 0.8;
  const fairHigh = meltPerGram * 0.9;
  const mailLow = meltPerGram * 0.7;
  const mailHigh = meltPerGram * 0.8;
  const pawnLow = meltPerGram * 0.2;
  const pawnHigh = meltPerGram * 0.55;

  const datedFact = `As of ${fmtDate(asOf)}, 14k gold melts at $${usd(meltPerGram)} per gram; a fair mail-in offer is $${usd(fairLow)} to $${usd(fairHigh)} per gram.`;

  const faqs = [
    {
      question: "How much is 14k gold worth per gram today?",
      answer: `${datedFact} Pawn shops typically pay $${usd(pawnLow)} to $${usd(pawnHigh)} per gram for the same 14k gold.`,
    },
    {
      question: "How is the 14k price per gram calculated?",
      answer: `14k gold is 58.33% pure. Divide the gold spot price ($${usd(latest)} per troy ounce) by 31.1035 grams, then multiply by 0.5833. That melt value is the metal's worth; what you receive depends on the buyer's payout rate.`,
    },
    {
      question: "Why do buyers pay less than the melt value?",
      answer:
        "Refining costs, shipping, insurance, and margin come out of the spread. The honest question is how much less: reputable mail-in buyers pay 70 to 90% of melt, while pawn shops average 20 to 55%. Offramp publishes its rate: 80 to 90% of melt, priced by an assay you can watch.",
    },
    {
      question: "How many grams of 14k gold make an ounce of value?",
      answer: `At today's price, one troy ounce of pure gold ($${usd(latest)}) equals the gold content of about ${usd(GRAMS_PER_OZ / PURITY_14K, 1)} grams of 14k. A typical 14k wedding band weighs 3 to 6 grams; a heavy chain can be 20 to 50 grams.`,
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Gold prices", url: "https://offrampgold.com/gold-price" },
          { name: "14k per gram", url: "https://offrampgold.com/prices/14k-gold-price-per-gram" },
        ]}
      />
      <FAQJsonLd questions={faqs} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "14k gold price per gram",
          dateModified: asOf.toISOString(),
          url: "https://offrampgold.com/prices/14k-gold-price-per-gram",
        }}
      />

      <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        14k gold price per gram, updated daily
      </h1>

      {/* Dated fact = the GEO citation target */}
      <p className="mt-5 max-w-2xl font-body text-lg leading-relaxed text-ink-2">
        {datedFact} Spot reference:{" "}
        <span className="font-mono text-ink">${usd(latest)}</span>/oz.
      </p>

      {/* Price grid */}
      <div className="mt-8 overflow-x-auto rounded-xl border border-line bg-raise">
        <table className="w-full min-w-[520px] text-left">
          <thead>
            <tr className="border-b border-line">
              <th className="px-5 py-4 font-body text-xs font-semibold uppercase tracking-wide text-ink-3">Unit</th>
              <th className="px-5 py-4 text-right font-body text-xs font-semibold uppercase tracking-wide text-ink-3">14k melt value</th>
              <th className="px-5 py-4 text-right font-body text-xs font-semibold uppercase tracking-wide text-teal">Offramp pays (80–90%)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            <tr>
              <td className="px-5 py-4 font-body text-sm font-medium text-ink">Per gram</td>
              <td className="px-5 py-4 text-right font-mono text-base text-ink">${usd(meltPerGram)}</td>
              <td className="px-5 py-4 text-right font-mono text-base text-teal">${usd(fairLow)} – ${usd(fairHigh)}</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-body text-sm font-medium text-ink">Per pennyweight (dwt)</td>
              <td className="px-5 py-4 text-right font-mono text-base text-ink">${usd(meltPerDwt)}</td>
              <td className="px-5 py-4 text-right font-mono text-base text-teal">${usd(meltPerDwt * 0.8)} – ${usd(meltPerDwt * 0.9)}</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-body text-sm font-medium text-ink">Per troy ounce (14k)</td>
              <td className="px-5 py-4 text-right font-mono text-base text-ink">${usd(meltPerOz14k)}</td>
              <td className="px-5 py-4 text-right font-mono text-base text-teal">${usd(meltPerOz14k * 0.8)} – ${usd(meltPerOz14k * 0.9)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* History panel */}
      <div className="mt-6 rounded-xl bg-panel p-5">
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-wider text-panel-mut">
            30-day trend · XAU/oz
          </p>
          <p className="font-mono text-xs text-panel-mut">
            {fmtDate(asOf)} · ${usd(latest)}
          </p>
        </div>
        {history.length >= 2 ? (
          <Sparkline history={history} />
        ) : (
          <p className="mt-3 font-mono text-sm text-panel-ink">
            Daily price history for this page began {fmtDate(asOf)}. The trend
            line draws itself as snapshots accrue.
          </p>
        )}
      </div>

      {/* Who pays what */}
      <h2 className="mt-14 font-display text-3xl font-semibold tracking-tight text-ink">
        What buyers actually pay per gram of 14k
      </h2>
      <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-ink-2">
        Melt value is the metal's worth, not an offer. Refining, insurance, and
        margin come out of the spread; the honest question is how much.
      </p>
      <div className="mt-6 overflow-x-auto rounded-xl border border-line bg-raise">
        <table className="w-full min-w-[520px] text-left">
          <thead>
            <tr className="border-b border-line">
              <th className="px-5 py-4 font-body text-xs font-semibold uppercase tracking-wide text-ink-3">Buyer</th>
              <th className="px-5 py-4 text-right font-body text-xs font-semibold uppercase tracking-wide text-ink-3">Share of melt</th>
              <th className="px-5 py-4 text-right font-body text-xs font-semibold uppercase tracking-wide text-ink-3">Per gram today</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            <tr>
              <td className="px-5 py-4 font-body text-sm text-coral">Pawn shops</td>
              <td className="px-5 py-4 text-right font-mono text-sm text-coral">20–55%</td>
              <td className="px-5 py-4 text-right font-mono text-sm text-coral">${usd(pawnLow)} – ${usd(pawnHigh)}</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-body text-sm text-ink">Typical mail-in buyers</td>
              <td className="px-5 py-4 text-right font-mono text-sm text-ink-2">70–80%</td>
              <td className="px-5 py-4 text-right font-mono text-sm text-ink-2">${usd(mailLow)} – ${usd(mailHigh)}</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-body text-sm font-medium text-teal">Offramp, priced by an assay you can watch</td>
              <td className="px-5 py-4 text-right font-mono text-sm text-teal">80–90%</td>
              <td className="px-5 py-4 text-right font-mono text-sm text-teal">${usd(fairLow)} – ${usd(fairHigh)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CTA */}
      <div className="mt-10 rounded-xl border border-line bg-raise p-6 sm:p-8">
        <h2 className="font-display text-2xl font-semibold text-ink">
          What is your 14k worth?
        </h2>
        <p className="mt-2 max-w-xl font-body text-sm text-ink-2">
          Weigh it, or don't. The calculator prices any weight at today's spot;
          the free kit locks your price for 48 hours.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/calculators/14k"
            className="rounded-full bg-ink px-7 py-3.5 font-body text-sm font-semibold text-paper hover:opacity-90"
          >
            Get an exact range from the calculator
          </Link>
          <Link
            href="/get-kit"
            className="rounded-full border border-line-2 px-7 py-3.5 font-body text-sm font-semibold text-ink hover:border-ink"
          >
            Lock this price — free kit
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <h2 className="mt-14 font-display text-3xl font-semibold tracking-tight text-ink">
        14k price questions
      </h2>
      <div className="mt-6 space-y-4">
        {faqs.map((f) => (
          <div key={f.question} className="rounded-xl border border-line bg-raise p-6">
            <h3 className="font-display text-lg font-semibold text-ink">{f.question}</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-ink-2">{f.answer}</p>
          </div>
        ))}
      </div>

      {/* Siblings */}
      <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-6">
        {[
          { href: "/gold-price", label: "All gold prices" },
          { href: "/calculators/14k", label: "14k calculator" },
          { href: "/calculators/scrap", label: "Scrap gold calculator" },
          { href: "/calculators/pawn-comparison", label: "Pawn comparison" },
        ].map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="font-body text-sm text-gold-400 underline decoration-line-2 underline-offset-4 hover:text-ink"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

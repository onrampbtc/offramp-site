import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Gold Calculators | What Your Gold Is Worth",
  description:
    "Free gold calculators with live spot prices: scrap gold, 14k, 10k, 18k, dental gold, and a pawn shop comparison. See melt value and what a fair buyer pays.",
  alternates: { canonical: "https://offrampgold.com/calculators" },
};

const CALCULATORS = [
  {
    href: "/gold-calculator",
    title: "Gold value calculator",
    body: "Any karat, any weight. Melt value, our payout, and the bitcoin equivalent.",
  },
  {
    href: "/calculators/scrap",
    title: "Scrap gold calculator",
    body: "Broken chains, single earrings, mixed karat scrap. Worth more than you think.",
  },
  {
    href: "/calculators/14k",
    title: "14k gold calculator",
    body: "The most common jewelry karat. Price per gram, updated with live spot.",
  },
  {
    href: "/calculators/10k",
    title: "10k gold calculator",
    body: "Class rings and older pieces. Yes, 10k gold is worth real money.",
  },
  {
    href: "/calculators/18k",
    title: "18k gold calculator",
    body: "Higher purity, higher value. Common in fine and European jewelry.",
  },
  {
    href: "/calculators/dental",
    title: "Dental gold calculator",
    body: "Crowns and bridgework, typically 10k-18k equivalent alloys.",
  },
  {
    href: "/calculators/pawn-comparison",
    title: "Pawn shop comparison",
    body: "What a pawn shop pays vs. a fair mail-in buyer, side by side.",
  },
] as const;

export default function CalculatorsHubPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Calculators", url: "https://offrampgold.com/calculators" },
        ]}
      />
      <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        What your gold is worth
      </h1>
      <p className="mt-4 max-w-2xl font-body text-lg text-ink-2">
        Live-price calculators for every kind of gold. Every result shows the melt
        value, what a fair buyer actually pays, and what a pawn shop would offer.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CALCULATORS.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group rounded-xl border border-line bg-raise p-6 transition-colors hover:border-line-2"
          >
            <h2 className="font-display text-xl font-semibold text-ink group-hover:text-gold-400">
              {c.title}
            </h2>
            <p className="mt-2 font-body text-sm leading-relaxed text-ink-2">{c.body}</p>
          </Link>
        ))}
      </div>

      <p className="mt-8 max-w-2xl font-body text-sm text-ink-3">
        Prefer to just photograph it?{" "}
        <Link
          href="/ask"
          className="font-medium text-gold-400 underline decoration-line-2 underline-offset-4 hover:text-ink"
        >
          Ask Offramp
        </Link>{" "}
        reads the hallmarks and gives you a provisional range — the final number
        always comes from the assay.
      </p>

      <div className="mt-12 rounded-xl border border-line bg-raise p-6 sm:p-8">
        <p className="font-body text-base text-ink-2">
          Not sure about karat or weight? Skip the math.
        </p>
        <Link
          href="/get-kit"
          className="mt-4 inline-block rounded-full bg-ink px-7 py-3.5 font-body text-sm font-semibold text-paper hover:opacity-90"
        >
          Lock this price — free kit
        </Link>
      </div>
    </div>
  );
}

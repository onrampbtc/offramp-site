import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, JsonLd } from "@/components/JsonLd";

/*
  Content type: thesis hub · funnel stage: top.
  The education spine — every guide, tool, and evidence page in the
  portfolio, organized around the questions a first-time seller actually
  has. Grows into the full repository; no blog posts (spec hard law).
*/

export const metadata: Metadata = {
  title: "Learn: How to Sell Gold Without Getting Burned",
  description:
    "The whole process, in plain English: what your gold is honestly worth, how assays work, what pawn shops and mail-in buyers actually pay, and the questions to ask any gold buyer before you ship or sell.",
  alternates: { canonical: "https://offrampgold.com/learn" },
};

const SECTIONS = [
  {
    label: "Start here",
    title: "How selling gold actually works",
    body: "What happens between the drawer and the wire transfer — kits, insurance, the recorded assay, the 48-hour lock, and where the money comes from.",
    links: [
      { href: "/how-it-works", label: "The process, step by step" },
      { href: "/sell", label: "Ways to sell: online, kit, or in Austin" },
      { href: "/consult", label: "Free consult — no fee, no obligation" },
    ],
  },
  {
    label: "Know what you have",
    title: "What your gold is honestly worth",
    body: "Hallmarks, karats, and grams — and live numbers instead of guesses. Every figure comes from today's spot price, shown with the math.",
    links: [
      { href: "/ask", label: "Ask Offramp — photograph it, get a read on the hallmarks" },
      { href: "/gold-calculator", label: "Gold calculator — a range in 60 seconds" },
      { href: "/gold-price", label: "Today's gold price, by karat" },
      { href: "/prices/14k-gold-price-per-gram", label: "14k gold price per gram" },
      { href: "/calculators", label: "All calculators" },
    ],
  },
  {
    label: "Protect yourself",
    title: "The questions to ask any gold buyer",
    body: "Payout as a percent of melt, proof of the assay, what happens if you decline — the evidence-based scorecard we publish, applied to the whole industry.",
    links: [
      { href: "/calculators/pawn-comparison", label: "Pawn shop vs. mail-in vs. Offramp" },
      {
        href: "https://goldbuyer.io/methodology",
        label: "The Gold Buyer Score: how buyers get graded",
        external: true,
      },
      {
        href: "https://goldbuyer.io",
        label: "Buyer-by-buyer rankings and evidence",
        external: true,
      },
    ],
  },
  {
    label: "Go deeper",
    title: "Gold, bitcoin, and what to hold",
    body: "For sellers who want part of the payout in bitcoin — and for anyone weighing the two assets side by side.",
    links: [
      { href: "/gold-to-bitcoin", label: "Selling gold for bitcoin" },
      {
        href: "https://goldvsbitcoin.org",
        label: "Gold vs. Bitcoin — the editorial deep dives",
        external: true,
      },
      {
        href: "https://goldvsbitcoin.org/glossary",
        label: "The glossary: every term, defined",
        external: true,
      },
    ],
  },
] as const;

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Learn", url: "https://offrampgold.com/learn" },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Learn: How to Sell Gold Without Getting Burned",
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          itemListElement: SECTIONS.flatMap(
            (s) => s.links as readonly { href: string; label: string }[]
          ).map((l, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: l.label,
            url: l.href.startsWith("http")
              ? l.href
              : `https://offrampgold.com${l.href}`,
          })),
        }}
      />

      <p className="label-maison text-gold-400">Learn</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        Everything a gold seller should know — before talking to any buyer,
        including us
      </h1>
      <p className="mt-5 max-w-2xl font-body text-lg leading-relaxed text-ink-2">
        The industry works because sellers don&rsquo;t know the numbers. We
        publish them: what melt value is, what different buyers actually pay
        against it, and how to check anyone&rsquo;s math — ours included.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {SECTIONS.map((s) => (
          <section key={s.title} className="rounded-xl border border-line bg-raise p-7">
            <p className="label-maison text-gold-400">{s.label}</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink">{s.title}</h2>
            <p className="mt-2 font-body text-sm leading-relaxed text-ink-2">{s.body}</p>
            <ul className="mt-5 space-y-2.5">
              {s.links.map((l) => (
                <li key={l.href}>
                  {"external" in l && l.external ? (
                    <a
                      href={l.href}
                      className="font-body text-sm font-medium text-gold-400 underline decoration-line-2 underline-offset-4 transition-colors hover:text-ink"
                    >
                      {l.label} ↗
                    </a>
                  ) : (
                    <Link
                      href={l.href}
                      className="font-body text-sm font-medium text-gold-400 underline decoration-line-2 underline-offset-4 transition-colors hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-10 max-w-2xl font-body text-sm text-ink-3">
        Still have a question a page can&rsquo;t answer?{" "}
        <Link
          href="/consult"
          className="font-medium text-gold-400 underline decoration-line-2 underline-offset-4 hover:text-ink"
        >
          Book a free consultation
        </Link>{" "}
        — fifteen minutes, a person in Austin, no obligation.
      </p>
    </div>
  );
}

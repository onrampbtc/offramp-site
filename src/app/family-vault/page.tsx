import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { VaultWaitlist } from "./waitlist";

/*
  Repositioned 2026-07-11 per Michael: tracker-first, not family-first.
  Persona: 28–35, inherited pieces / post-divorce / drawer of old jewelry —
  wants a no-obligation valuation, then passive tracking, then a one-step
  sell when ready. Family sharing is a feature, not the headline.
  URL stays /family-vault until the product name is locked (301 rule).
*/

export const metadata: Metadata = {
  title: "The Gold Ledger (Beta) | Value It, Track It, Sell When Ready",
  description:
    "A tech-enabled valuation of every piece you own — tracked live against the gold price until you're ready to sell. No obligation, no appraisal fees. Add family if you want. Join the beta.",
  alternates: { canonical: "https://offrampgold.com/family-vault" },
};

const FEATURES = [
  {
    title: "A valuation, not a guess",
    body: "Start with a photo. Every piece gets an honest range — grams, karat, and the math shown — refreshed against the live gold price, every day.",
  },
  {
    title: "Tracked until you're ready",
    body: "Name pieces by their story, not a SKU. Watch values move, set an alert at your number, and decide on your own schedule. Nothing about this obligates you to sell.",
  },
  {
    title: "One step to sold — family optional",
    body: "When it's time: a free insured kit or an Austin appointment, an assay you can watch, payment by wire or bitcoin. And if the pieces belong to more than one of you, invite family so everyone sees the same numbers.",
  },
] as const;

export default function FamilyVaultPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "The Gold Ledger", url: "https://offrampgold.com/family-vault" },
        ]}
      />

      <div className="max-w-2xl">
        <p className="label-maison text-gold-400">New &middot; in beta</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Know what it&rsquo;s worth. Watch it until you&rsquo;re ready.
        </h1>
        <p className="mt-4 font-body text-lg leading-relaxed text-ink-2">
          The ledger is a tech-enabled valuation of everything in the drawer —
          the inheritance, the pieces from another chapter of life, the jewelry
          you never wear. Photograph it once, get honest numbers, and track them
          against the live market until selling actually makes sense.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {FEATURES.map((f) => (
          <div key={f.title} className="rounded-xl border border-line bg-raise p-6">
            <h2 className="font-display text-xl font-semibold text-ink">{f.title}</h2>
            <p className="mt-2 font-body text-sm leading-relaxed text-ink-2">{f.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-xl rounded-xl border border-line bg-raise p-6 sm:p-8">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Be first in the ledger
        </h2>
        <p className="mt-2 font-body text-sm text-ink-2">
          Leave your email and we&rsquo;ll open yours as soon as the beta is ready.
        </p>
        <VaultWaitlist />
      </div>

      <div className="mt-10">
        <p className="font-body text-sm text-ink-2">
          Want a person, not a product?{" "}
          <Link
            href="/consult"
            className="font-medium text-gold-400 underline decoration-line-2 underline-offset-4 hover:text-ink"
          >
            Book a free consult
          </Link>
          . Ready to sell now instead?{" "}
          <Link
            href="/gold-calculator"
            className="font-medium text-gold-400 underline decoration-line-2 underline-offset-4 hover:text-ink"
          >
            See what it&rsquo;s worth
          </Link>
        </p>
      </div>
    </div>
  );
}

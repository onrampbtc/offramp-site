import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { VaultWaitlist } from "./waitlist";

export const metadata: Metadata = {
  title: "Family Vault | The Family Gold, In One Place",
  description:
    "A shared inventory for the family gold. Invite siblings and parents, everyone sees the same values, and sell only when everyone's ready. Coming soon from Offramp.",
  alternates: { canonical: "https://offrampgold.com/family-vault" },
};

const FEATURES = [
  {
    title: "Everyone sees the same numbers",
    body: "Invite your siblings — each piece shows one honest range, refreshed against the live gold price. No more guessing what the box in the closet is worth.",
  },
  {
    title: "Named by story, not SKU",
    body: "“Grandma's wedding band.” “Dad's Krugerrand.” Photos, notes, and who added what.",
  },
  {
    title: "Sell only when everyone's ready",
    body: "Optional family sign-off before anything ships. The vault is the patient path: watch values, set an alert, decide together.",
  },
] as const;

export default function FamilyVaultPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Family Vault", url: "https://offrampgold.com/family-vault" },
        ]}
      />

      <div className="max-w-2xl">
        <p className="font-display text-base italic text-gold-400">Coming soon</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          The family gold, finally in one place.
        </h1>
        <p className="mt-4 font-body text-lg leading-relaxed text-ink-2">
          A shared vault for the heirlooms. Start with one piece — a photo is enough —
          and manage the family gold together until you&rsquo;re ready.
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
          Be first in the vault
        </h2>
        <p className="mt-2 font-body text-sm text-ink-2">
          Leave your email and we&rsquo;ll open your vault as soon as it&rsquo;s ready.
        </p>
        <VaultWaitlist />
      </div>

      <div className="mt-10">
        <p className="font-body text-sm text-ink-2">
          Talking it through as a family?{" "}
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

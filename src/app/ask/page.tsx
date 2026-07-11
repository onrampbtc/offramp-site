import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { AskClient } from "./AskClient";

/*
  /ask — Ask Offramp, Phase A Valuation flow (docs/ask-offramp/ROADMAP.md).
  Content type: calculator · funnel stage: top → capture.
  Describe pieces → provisional ranges at live spot → email the breakdown.
  Every number here is provisional; the recorded assay sets the final price.

  ?embed=1 renders minimal chrome (the site nav/footer are covered by a
  fixed white layer) for the /embed/ask.js widget iframe; ?brand= tags the
  assistant_session's source_property.
*/

export const metadata: Metadata = {
  title: "Ask Offramp | What Is Your Gold Worth?",
  description:
    "Describe your gold pieces — ring, chain, coin, dental — and get a provisional payout range at today's spot price in about a minute. Your final price comes from a recorded assay.",
  alternates: { canonical: "https://offrampgold.com/ask" },
};

export default async function AskPage({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string; brand?: string }>;
}) {
  const params = await searchParams;
  const embed = params.embed === "1";
  const brand = typeof params.brand === "string" ? params.brand : "offramp";

  if (embed) {
    // Minimal chrome: a fixed white layer covers the site nav/footer/assay
    // line rendered by the root layout, so the iframe shows only the flow.
    return (
      <div className="fixed inset-0 z-[100] overflow-y-auto bg-white">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
          <AskClient embed brand={brand} />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Ask Offramp", url: "https://offrampgold.com/ask" },
        ]}
      />

      <p className="label-maison text-gold-400">Ask Offramp</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        What is your gold worth?
      </h1>
      <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-ink-2">
        Describe your pieces and get a provisional range at today&apos;s spot
        price — about a minute, no account. Provisional means honest: the
        final number comes from a recorded assay of the actual metal, not a
        guess over the internet.
      </p>

      <div className="mt-10">
        <AskClient brand={brand} />
      </div>
    </div>
  );
}

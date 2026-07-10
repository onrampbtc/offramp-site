import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { ConsultEmbed } from "@/components/ConsultEmbed";

export const metadata: Metadata = {
  title: "Free Gold Consult | No Fee, No Obligation",
  description:
    "Book a free consult about your gold: what it's worth, whether to sell or keep it, how inherited pieces get valued, and how payment in USD or bitcoin works. No fee, no requirement to sell.",
  alternates: { canonical: "https://offrampgold.com/consult" },
};

const PHONE_DISPLAY = "(512) 983-5997";
const PHONE_HREF = `tel:${process.env.NEXT_PUBLIC_PHONE ?? "+15129835997"}`;

const FAQS = [
  {
    question: "What does a free gold consult cover?",
    answer:
      "Anything you're weighing: what your pieces are honestly worth at today's spot price, whether selling or keeping makes sense, how inherited gold gets valued and split among family, how the XRF assay works, and how payment in USD or bitcoin works. It is a conversation, not a sales call.",
  },
  {
    question: "Is there really no fee or requirement?",
    answer:
      "Correct. The consult is free, and nothing obligates you to ship, sell, or sign anything. Offramp makes its money on the spread when someone chooses to sell (we pay 80 to 90% of melt value); the consult exists so you can decide with real numbers instead of guesses.",
  },
  {
    question: "Who am I talking to?",
    answer:
      "A person at Offramp in Austin, Texas, not a call center. If your question needs a specialist (numismatic coins, estate paperwork), we say so and point you to one rather than winging it.",
  },
  {
    question: "Should I get my gold appraised before the call?",
    answer:
      "No preparation needed. If you can describe the pieces, or photograph any stamps or hallmarks (14K, 585, 750), that is plenty. We can walk through live per-karat values on the call.",
  },
];

export default function ConsultPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Free consult", url: "https://offrampgold.com/consult" },
        ]}
      />
      <FAQJsonLd questions={FAQS} />

      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-display text-base italic text-gold-400">
            Free · no fee · no requirement to sell
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Talk through your gold with a person
          </h1>
          <p className="mt-4 max-w-xl font-body text-lg leading-relaxed text-ink-2">
            Fifteen minutes with Offramp, free, about whatever the gold question
            is: what the box from the estate is worth, whether now is a good
            time, how a family splits pieces fairly, or how selling for bitcoin
            works. You leave with numbers, not pressure.
          </p>

          <div className="mt-8 space-y-4">
            {FAQS.map((f) => (
              <div key={f.question} className="rounded-xl border border-line bg-raise p-5">
                <h2 className="font-display text-lg font-semibold text-ink">{f.question}</h2>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink-2">{f.answer}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 font-body text-sm text-ink-2">
            Prefer the phone? Call or text{" "}
            <a href={PHONE_HREF} className="font-mono text-ink hover:text-gold-400">
              {PHONE_DISPLAY}
            </a>
            . Rather start with a number?{" "}
            <Link
              href="/gold-calculator"
              className="font-medium text-gold-400 underline decoration-line-2 underline-offset-4 hover:text-ink"
            >
              Check your gold in 60 seconds
            </Link>
            .
          </p>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <ConsultEmbed />
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";

const FAQ_ITEMS = [
  {
    question: "Is Offramp a legitimate company?",
    answer:
      "Yes. Offramp is a registered business that operates as a dedicated online gold buyer. We use professional-grade XRF spectrometer testing, provide fully insured shipping, and process payments via bank wire or Bitcoin within 24-48 hours.",
  },
  {
    question: "How long has Offramp been in business?",
    answer:
      "Offramp was founded by gold industry professionals who saw that most sellers were getting shortchanged by pawn shops and local jewelers. We built Offramp to offer fair, transparent pricing powered by real-time market data.",
  },
  {
    question: "Where is Offramp located?",
    answer:
      "Offramp operates as an online gold buyer serving customers across the United States. Our testing facility uses a Thermo Scientific Niton XRF spectrometer — the same technology used by refineries and assay offices.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Request a Free Kit",
    description:
      "We send you a free insured shipping kit with prepaid labels. No cost, no commitment.",
  },
  {
    step: "02",
    title: "Ship Your Gold",
    description:
      "Pack your gold items using our provided materials and drop the package at any carrier location.",
  },
  {
    step: "03",
    title: "XRF Testing on Video",
    description:
      "We test every item with a Thermo Scientific Niton XRF spectrometer under video so you can see exact purity and weight readings.",
  },
  {
    step: "04",
    title: "Get Paid",
    description:
      "Accept our offer and receive payment via bank wire or Bitcoin within 24-48 hours. Decline and we ship your gold back free.",
  },
];

const VALUES = [
  {
    title: "Transparency",
    description:
      "Every test is performed under video. You see exactly what your gold is worth — no guesswork, no hidden fees.",
  },
  {
    title: "Fair Pricing",
    description:
      "We pay 80% or more of melt value — significantly more than pawn shops and most local jewelers.",
  },
  {
    title: "Zero Risk",
    description:
      "Free insured shipping, no obligation to accept our offer, and free return shipping if you decline.",
  },
  {
    title: "Speed",
    description:
      "From shipping kit to payment in days, not weeks. We test within 24 hours of receiving your gold.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[75vh] flex flex-col items-center justify-center px-6 text-center">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <p className="text-xs font-body uppercase tracking-[0.3em] text-gold-500 mb-6">
            About Us
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1]">
            Sell Gold for
            <br />
            <span className="text-gold-shimmer">What It&rsquo;s Worth</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-cream-60 font-body leading-relaxed">
            Offramp is the bridge between your physical gold and fair market
            value. Transparent testing, honest pricing, and fast payment &mdash;
            the way selling gold should be.
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              Our Mission
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Why Offramp Exists
            </h2>
          </div>
          <div className="space-y-6 text-cream-60 font-body text-lg leading-relaxed">
            <p>
              Most people selling gold get a fraction of what their items are
              actually worth. Pawn shops pay 20&ndash;35% of melt value. Local
              jewelers offer 40&ndash;60%. The industry has been stacked against
              sellers for decades.
            </p>
            <p>
              Offramp was built to change that. By operating online with lower
              overhead, using professional-grade XRF testing, and connecting
              directly to real-time market data, we pay{" "}
              <span className="text-cream font-semibold">
                80% or more of melt value
              </span>{" "}
              &mdash; consistently more than what you&rsquo;ll find locally.
            </p>
            <p>
              We also offer something no local buyer can: the option to get paid
              in Bitcoin. Whether you want a bank wire or BTC sent to your
              wallet, Offramp is the bridge between physical gold and the digital
              economy.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              What We Stand For
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Our Values
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-cream-08 bg-bg-card p-8"
              >
                <h3 className="font-display text-xl font-semibold text-cream mb-3">
                  {value.title}
                </h3>
                <p className="text-cream-60 font-body leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              How It Works
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Simple. Transparent. Fast.
            </h2>
          </div>
          <div className="space-y-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="flex gap-6 rounded-2xl border border-cream-08 bg-bg-card p-6 sm:p-8"
              >
                <span className="shrink-0 font-mono text-2xl font-bold text-gold-500/30">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-cream mb-2">
                    {step.title}
                  </h3>
                  <p className="text-cream-60 font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              Questions
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              About Offramp
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            Ready to Sell Your Gold?
          </h2>
          <p className="text-cream-60 font-body text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Get a free insured shipping kit and see how much your gold is worth.
            No fees, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-kit"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-bg transition-transform hover:scale-105"
            >
              Get Your Free Kit
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            <Link
              href="/calculators"
              className="inline-flex items-center gap-2 rounded-full border border-cream-15 px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-cream transition-all hover:border-gold-500/30 hover:text-gold-500"
            >
              Calculate Value
            </Link>
          </div>
        </div>
      </section>

      {/* ── Internal Links ── */}
      <section className="py-20 px-6 border-t border-cream-08">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "How It Works", href: "/how-it-works" },
              { label: "Gold Calculator", href: "/calculators" },
              { label: "Reviews", href: "/reviews" },
              { label: "Compare Gold Buyers", href: "/compare" },
              { label: "FAQ", href: "/faq" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-cream-15 px-5 py-2.5 font-body text-sm text-cream-60 transition-all hover:border-gold-500/30 hover:text-gold-500"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`rounded-xl border transition-all duration-300 ${
              isOpen
                ? "border-gold-500/20 bg-bg-card shadow-[0_0_30px_rgba(201,168,76,0.04)]"
                : "border-cream-08 bg-bg-card hover:border-cream-15"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between px-6 py-5 sm:px-8 sm:py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-body text-base sm:text-lg font-medium text-cream pr-4">
                {item.question}
              </span>
              <span
                className={`shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "border-gold-500/30 bg-gold-500/10 rotate-45"
                    : "border-cream-15 bg-transparent"
                }`}
              >
                <svg
                  className={`h-4 w-4 transition-colors ${
                    isOpen ? "text-gold-500" : "text-cream-45"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                  <p className="text-cream-60 font-body leading-relaxed text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

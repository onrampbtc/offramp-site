"use client";

import { useState } from "react";
import Link from "next/link";

const FAQ_ITEMS = [
  {
    question: "What types of gold does Offramp accept?",
    answer:
      "We accept all forms of gold including jewelry (rings, chains, bracelets, earrings), coins (American Eagles, Krugerrands, Maple Leafs, and more), dental gold, scrap gold, gold bars, and broken or damaged gold items. We test all karats from 8K to 24K.",
  },
  {
    question: "How does the selling process work?",
    answer:
      "It's simple: 1) Request a free insured shipping kit, 2) Pack your gold and ship it to us for free, 3) We test your gold with an XRF spectrometer under video and send you an offer, 4) Accept the offer and get paid via bank wire or Bitcoin within 24-48 hours.",
  },
  {
    question: "How much does Offramp pay for gold?",
    answer:
      "Offramp pays 80% or more of the current melt value of your gold. This is significantly more than pawn shops (20-35%) and most local jewelers (40-60%). Use our gold calculator to see exactly what your gold is worth.",
  },
  {
    question: "Is shipping free and insured?",
    answer:
      "Yes. We provide a free insured shipping kit with prepaid labels. Your gold is fully insured from the moment you hand it to the carrier until we process your payment.",
  },
  {
    question: "How do you test my gold?",
    answer:
      "We use a Thermo Scientific Niton XRF spectrometer — the same technology used by refineries and assay offices. Every test is performed under video so you can see the exact purity and weight readings for your items.",
  },
  {
    question: "Can I get paid in Bitcoin?",
    answer:
      "Yes. Offramp is the bridge between physical gold and the digital economy. You can choose to receive payment via bank wire or Bitcoin to any wallet address you provide.",
  },
  {
    question: "What if I don't accept the offer?",
    answer:
      "No problem. If you decline our offer, we ship your gold back to you at no cost. There's zero risk and no obligation.",
  },
  {
    question: "How long does the whole process take?",
    answer:
      "Most sellers receive their shipping kit within 2-3 business days. Once we receive your gold, we test and send an offer within 24 hours. Payment is sent within 24-48 hours of acceptance.",
  },
  {
    question: "Do I need to know the karat of my gold?",
    answer:
      "No. Our XRF spectrometer precisely determines the purity of your gold regardless of markings. Many items are unmarked or incorrectly stamped — our testing gives you an accurate reading.",
  },
  {
    question: "Is there a minimum amount of gold I can sell?",
    answer:
      "We accept gold shipments of any size. Whether you have a single ring or a collection of coins, we'll test and make an offer on everything you send.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
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
            Common Questions
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1]">
            Frequently Asked
            <br />
            <span className="text-gold-shimmer">Questions</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-cream-60 font-body leading-relaxed">
            Everything you need to know about selling gold with Offramp.
            Can&rsquo;t find your answer? Contact us anytime.
          </p>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            Still Have Questions?
          </h2>
          <p className="text-cream-60 font-body text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Our team is here to help. Reach out and we&rsquo;ll get back to you
            quickly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-bg transition-transform hover:scale-105"
            >
              Contact Us
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
              href="/get-kit"
              className="inline-flex items-center gap-2 rounded-full border border-cream-15 px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-cream transition-all hover:border-gold-500/30 hover:text-gold-500"
            >
              Get Your Free Kit
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
              { label: "Compare Gold Buyers", href: "/compare" },
              { label: "Reviews", href: "/reviews" },
              { label: "About Offramp", href: "/about" },
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

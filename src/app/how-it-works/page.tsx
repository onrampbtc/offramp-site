"use client";

import { useState } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  HowTo JSON-LD structured data                                     */
/* ------------------------------------------------------------------ */
const HOW_TO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Sell Gold to Offramp",
  description:
    "Sell gold to Offramp in three steps: request a free insured FedEx kit, mail your gold, and receive a transparent quote based on XRF assay and live spot price.",
  totalTime: "P3D",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: "0",
  },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Request Your Free Kit",
      text: "Fill out a short form to request a free, prepaid FedEx shipping kit insured up to $25,000. The kit arrives at your door within 2-3 business days.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Ship Your Gold",
      text: "Pack your gold items into the insured FedEx mailer and drop it off at any FedEx location. Your shipment is tracked and insured the entire way.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Get Paid",
      text: "We assay your gold using an XRF spectrometer under video documentation. Accept our offer and receive wire payment within 48 hours. Decline and we ship your gold back for free.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  FAQ data                                                           */
/* ------------------------------------------------------------------ */
const FAQ_ITEMS = [
  {
    question: "How much does shipping cost?",
    answer:
      "Nothing. We provide a free prepaid FedEx shipping label and insured mailer. You never pay for shipping in either direction. If you decline our offer, we return your gold at no cost.",
  },
  {
    question: "How much insurance coverage does the kit include?",
    answer:
      "Every kit includes up to $25,000 in insurance coverage through FedEx. Your gold is protected from the moment you drop it off until it arrives at our facility. For shipments over $25,000, contact us for enhanced coverage.",
  },
  {
    question: "How long does the entire process take?",
    answer:
      "The kit arrives in 2-3 business days. Once we receive your gold, we typically complete the assay and send your offer within 24 hours. After you accept, wire payment reaches your bank within 48 hours. Total time from kit request to payment is usually 5-7 business days.",
  },
  {
    question: "What happens if I decline the offer?",
    answer:
      "No problem at all. If you decline our offer, we ship your gold back to you via insured FedEx at no cost. There are never any fees or obligations. You can also request a second assay if you have questions about the results.",
  },
  {
    question: "What is XRF spectrometry and how does it work?",
    answer:
      "XRF (X-ray fluorescence) spectrometry is the same laboratory-grade technology used by refineries, the U.S. Mint, and major gold dealers worldwide. It analyzes the elemental composition of your gold non-destructively by directing X-rays at the item and measuring the fluorescent response. This gives us exact purity readings to 0.01% accuracy.",
  },
  {
    question: "Can I convert my payout to Bitcoin instead of cash?",
    answer:
      "Yes. Through our partnership with Onramp, you can convert your cash payout directly into Bitcoin. The conversion happens at the time of payment so you get current market rates. Visit our Gold to Bitcoin page to learn more about this option.",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ Accordion Component                                            */
/* ------------------------------------------------------------------ */
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
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
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

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function HowItWorksPage() {
  return (
    <div className="relative overflow-hidden">
      {/* JSON-LD HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOW_TO_SCHEMA) }}
      />

      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative min-h-[75vh] flex flex-col items-center justify-center px-6 text-center">
        {/* Radial glow */}
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
            The Process
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1]">
            How Selling Gold
            <br />
            <span className="text-gold-shimmer">to Offramp Works</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-cream-60 font-body leading-relaxed">
            Three simple steps. Free insured shipping. Full transparency.
            Wire payment in 48 hours or convert to Bitcoin.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  AEO ANSWER BOX                                              */}
      {/* ============================================================ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="border-gold-gradient rounded-2xl p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/10">
                <svg className="h-5 w-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-gold-500 mb-3">
                  Quick Answer
                </p>
                <p className="font-body text-base sm:text-lg text-cream-60 leading-relaxed">
                  Selling gold to Offramp takes three steps: request a free
                  insured FedEx kit, mail your gold, and receive a transparent
                  quote based on XRF assay and live spot price. Accept and get
                  paid by wire. Decline and get free returns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  DETAILED 3 STEPS                                            */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              Step by Step
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              The Offramp Process
            </h2>
          </div>

          {/* Step 01 */}
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/30 via-gold-500/15 to-gold-500/30 hidden md:block" />

            <div className="space-y-16 md:space-y-24">
              {/* STEP 01 */}
              <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold-500/40 bg-bg">
                    <span className="font-mono text-xl text-gold-500 font-semibold">01</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-3xl sm:text-4xl font-semibold mb-4 text-cream">
                    Request Your Free Kit
                  </h3>
                  <p className="text-cream-60 font-body text-base sm:text-lg leading-relaxed mb-6">
                    Fill out a short form and we ship you everything you need:
                    a prepaid FedEx mailer, tamper-evident packaging, and a
                    detailed instruction card.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Prepaid FedEx shipping label included",
                      "Tamper-evident, insured packaging",
                      "Kit arrives in 2-3 business days",
                      "No cost, no obligation whatsoever",
                    ].map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-cream-45">
                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-500">
                          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="font-body text-base">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* STEP 02 */}
              <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold-500/40 bg-bg">
                    <span className="font-mono text-xl text-gold-500 font-semibold">02</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-3xl sm:text-4xl font-semibold mb-4 text-cream">
                    Ship Your Gold
                  </h3>
                  <p className="text-cream-60 font-body text-base sm:text-lg leading-relaxed mb-6">
                    Pack your gold items into the insured mailer and drop it
                    off at any FedEx location. Your shipment is tracked and
                    insured from the moment you hand it over.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Up to $25,000 in FedEx insurance coverage",
                      "Drop off at any FedEx location nationwide",
                      "Full tracking from pickup to delivery",
                      "We accept jewelry, coins, bullion, dental, and scrap",
                    ].map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-cream-45">
                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-500">
                          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="font-body text-base">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* STEP 03 */}
              <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold-500/40 bg-bg glow-gold">
                    <span className="font-mono text-xl text-gold-500 font-semibold">03</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-3xl sm:text-4xl font-semibold mb-4 text-cream">
                    Get Paid
                  </h3>
                  <p className="text-cream-60 font-body text-base sm:text-lg leading-relaxed mb-6">
                    We test your gold with an XRF spectrometer under video
                    documentation. You get a transparent offer based on exact
                    purity and live spot price. Accept and get paid your way.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "XRF spectrometer assay under video documentation",
                      "Offer based on exact purity and live spot price",
                      "Wire transfer to your bank within 48 hours",
                      "Option to convert payout to Bitcoin via Onramp",
                      "Decline with zero fees and free return shipping",
                    ].map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-cream-45">
                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-500">
                          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="font-body text-base">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TRUST SIGNALS                                               */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              Your Protection
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Built on Trust
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: "$25,000 Insurance",
                desc: "Every shipment is insured up to $25,000 through FedEx. Your gold is protected from the moment you drop it off until we receive it.",
              },
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
                title: "Video Assay",
                desc: "Every XRF spectrometer test is recorded on video. You see exactly what we see. Full transparency with no guessing.",
              },
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                  </svg>
                ),
                title: "Free Returns",
                desc: "Don't like the offer? No problem. We ship your gold back at our expense with full insurance. Zero risk, zero obligation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-bg-card rounded-2xl p-8 sm:p-10 border border-cream-08 transition-all duration-500 hover:border-gold-500/20 hover:shadow-[0_0_40px_rgba(201,168,76,0.06)]"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500 transition-colors group-hover:bg-gold-500/20">
                  {item.icon}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-3 text-cream">
                  {item.title}
                </h3>
                <p className="text-cream-60 font-body leading-relaxed text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TALK TO AN EXPERT                                           */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-6 border-t border-cream-08">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-gold-500/20 bg-bg-card p-8 sm:p-12 text-center">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/10">
              <svg className="h-7 w-7 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-cream mb-3">
              Still have questions?
            </h3>
            <p className="text-cream-60 font-body text-base max-w-xl mx-auto mb-8">
              Talk to one of our gold experts. We&apos;ll help you understand your gold&apos;s value and walk you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 px-8 py-3.5 font-body text-base font-medium text-gold-500 transition-all hover:bg-gold-500/10 hover:border-gold-500/60"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call (555) 123-4567
              </a>
              <Link
                href="/get-kit"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 px-8 py-3.5 font-body text-base font-semibold text-bg transition-all hover:shadow-lg hover:shadow-gold-500/20"
              >
                Request Free Kit
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQ ACCORDION                                               */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              FAQ
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Common Questions
            </h2>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* ============================================================ */}
      {/*  INTERNAL LINKS                                              */}
      {/* ============================================================ */}
      <section className="py-20 px-6 border-t border-cream-08">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                href: "/sell",
                label: "Sell Gold",
                desc: "See what we buy and pricing",
              },
              {
                href: "/gold-calculator",
                label: "Gold Calculator",
                desc: "Estimate your payout instantly",
              },
              {
                href: "/sell-jewelry",
                label: "Sell Jewelry",
                desc: "Sell rings, necklaces, and more",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-bg-card rounded-xl p-6 border border-cream-08 transition-all duration-300 hover:border-gold-500/20 hover:shadow-[0_0_30px_rgba(201,168,76,0.04)]"
              >
                <h3 className="font-body text-base font-semibold text-cream group-hover:text-gold-500 transition-colors">
                  {link.label}
                </h3>
                <p className="mt-1 text-cream-45 font-body text-sm">
                  {link.desc}
                </p>
                <div className="mt-3 flex items-center gap-1 text-gold-500 text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FINAL CTA                                                   */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="relative max-w-3xl mx-auto text-center">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)",
            }}
          />

          <h2 className="relative font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Ready to get started?
          </h2>
          <p className="relative mt-4 text-xl sm:text-2xl text-cream-60 font-body">
            Request your free insured kit today. No cost, no obligation.
          </p>

          <div className="relative mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-kit"
              className="group inline-flex items-center justify-center px-10 py-5 text-lg font-body font-semibold text-bg rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 shadow-lg shadow-gold-500/20 transition-all duration-300 hover:shadow-gold-500/40 hover:scale-[1.03]"
            >
              Get Your Free Kit
              <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/gold-calculator"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-body font-semibold text-gold-500 rounded-full border border-gold-500/40 transition-all duration-300 hover:border-gold-500 hover:bg-gold-500/5"
            >
              Calculate Gold Value
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

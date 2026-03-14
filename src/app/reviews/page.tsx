"use client";

import { useState } from "react";
import Link from "next/link";

const REVIEWS = [
  {
    name: "Michael R.",
    location: "Austin, TX",
    rating: 5,
    title: "Way more than the pawn shop offered",
    body: "I almost took my gold chain to a pawn shop but decided to try Offramp first. They paid me more than double what the pawn shop quoted. The XRF testing video was a nice touch — I could see exactly what my chain was worth.",
    item: "14K Gold Chain",
  },
  {
    name: "Sarah K.",
    location: "Denver, CO",
    rating: 5,
    title: "Fast payment, zero hassle",
    body: "Shipped my late grandmother's jewelry on Monday, had an offer by Wednesday, and the money was in my account by Friday. The whole process was smooth and professional.",
    item: "Mixed Gold Jewelry",
  },
  {
    name: "David L.",
    location: "Miami, FL",
    rating: 5,
    title: "Bitcoin option is a game changer",
    body: "I wanted to convert some old gold coins into Bitcoin. Offramp made it seamless — tested the coins, gave me a great offer, and sent BTC to my wallet within 24 hours.",
    item: "Gold Eagle Coins",
  },
  {
    name: "Jennifer M.",
    location: "Seattle, WA",
    rating: 5,
    title: "Transparent and trustworthy",
    body: "What sold me on Offramp was the video of them testing my gold. No guessing, no sketchy back-room deals. I could see the XRF results and the weight. The offer was fair and I got paid fast.",
    item: "18K Gold Ring",
  },
  {
    name: "James T.",
    location: "Chicago, IL",
    rating: 5,
    title: "Best price I found anywhere",
    body: "I got quotes from three local jewelers before trying Offramp. Offramp beat every single one by a significant margin. Free shipping and insured the whole way — couldn't ask for more.",
    item: "10K Scrap Gold",
  },
  {
    name: "Lisa P.",
    location: "Phoenix, AZ",
    rating: 5,
    title: "Sold dental gold easily",
    body: "I had some dental gold sitting in a drawer for years. Didn't know what to do with it until I found Offramp. They tested it, made an offer, and I got paid. Wish I'd done it sooner.",
    item: "Dental Gold",
  },
  {
    name: "Robert W.",
    location: "Nashville, TN",
    rating: 4,
    title: "Great experience overall",
    body: "The shipping kit arrived quickly and everything was well-packaged. The offer was higher than I expected based on what local shops were offering. Only wish the kit had arrived a day sooner.",
    item: "14K Gold Bracelet",
  },
  {
    name: "Amanda C.",
    location: "Portland, OR",
    rating: 5,
    title: "Finally a gold buyer I can trust",
    body: "After reading horror stories about other mail-in gold buyers, I was nervous. Offramp completely put me at ease with their insured shipping and video testing. The payout was great too.",
    item: "22K Gold Necklace",
  },
];

export default function ReviewsPage() {
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
            Testimonials
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1]">
            What Our
            <br />
            <span className="text-gold-shimmer">Customers Say</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-cream-60 font-body leading-relaxed">
            Real reviews from real sellers. See why people trust Offramp to get
            the most for their gold.
          </p>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="py-16 px-6 border-t border-cream-08">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="font-display text-4xl sm:text-5xl font-bold text-gold-500">
              4.9
            </p>
            <p className="text-cream-45 font-body text-sm mt-1">Average Rating</p>
          </div>
          <div>
            <p className="font-display text-4xl sm:text-5xl font-bold text-gold-500">
              500+
            </p>
            <p className="text-cream-45 font-body text-sm mt-1">Happy Sellers</p>
          </div>
          <div>
            <p className="font-display text-4xl sm:text-5xl font-bold text-gold-500">
              80%+
            </p>
            <p className="text-cream-45 font-body text-sm mt-1">Of Melt Value Paid</p>
          </div>
        </div>
      </section>

      {/* ── Reviews Grid ── */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2">
            {REVIEWS.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            Join Hundreds of Happy Sellers
          </h2>
          <p className="text-cream-60 font-body text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Get a free insured shipping kit and see why our customers rate us 4.9
            out of 5 stars.
          </p>
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
              { label: "FAQ", href: "/faq" },
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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? "text-gold-500" : "text-cream/20"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({
  review,
}: {
  review: {
    name: string;
    location: string;
    rating: number;
    title: string;
    body: string;
    item: string;
  };
}) {
  return (
    <div className="rounded-2xl border border-cream-08 bg-bg-card p-6 sm:p-8">
      <div className="flex items-start justify-between mb-4">
        <div>
          <StarRating rating={review.rating} />
          <h3 className="font-display text-lg font-semibold text-cream mt-3">
            {review.title}
          </h3>
        </div>
        <span className="rounded-full border border-cream-08 px-3 py-1 text-xs font-body text-cream-45">
          {review.item}
        </span>
      </div>
      <p className="text-cream-60 font-body leading-relaxed text-sm mb-4">
        &ldquo;{review.body}&rdquo;
      </p>
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500/10 text-gold-500 font-body text-sm font-semibold">
          {review.name[0]}
        </div>
        <div>
          <p className="font-body text-sm font-medium text-cream">
            {review.name}
          </p>
          <p className="font-body text-xs text-cream-35">{review.location}</p>
        </div>
      </div>
    </div>
  );
}

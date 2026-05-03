"use client";

import { useState } from "react";
import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Gold Price Today", href: "/gold-price" },
      { label: "Gold to Bitcoin", href: "/gold-to-bitcoin" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Sell Gold", href: "/sell" },
      { label: "Sell Jewelry", href: "/sell-jewelry" },
      { label: "Sell Coins", href: "/sell-coins" },
      { label: "Sell Dental Gold", href: "/sell-dental-gold" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Gold Calculator", href: "/gold-calculator" },
      { label: "Bitcoin vs Gold", href: "/guide/bitcoin-vs-gold" },
      { label: "Where to Sell Gold", href: "/guide/where-to-sell-gold" },
      { label: "Buy Gold with BTC", href: "/buy-gold" },
    ],
  },
  {
    title: "Calculators",
    links: [
      { label: "14K Gold Price", href: "/calculators/14k" },
      { label: "Scrap Gold Value", href: "/calculators/scrap" },
      { label: "Pawn Shop Compare", href: "/calculators/pawn-comparison" },
      { label: "Dental Gold Value", href: "/calculators/dental" },
    ],
  },
] as const;

const SOCIAL_LINKS = [
  {
    label: "X (Twitter)",
    href: "https://x.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
  },
];

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-2">
        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        <span className="font-body text-sm text-cream-45">You&apos;re in. Watch your inbox.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="w-full min-w-0 rounded-lg border border-cream-15 bg-bg px-3 py-2 font-body text-sm text-cream transition-colors placeholder:text-cream-25 focus:border-gold-500/50 focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex-shrink-0 rounded-lg bg-gold-gradient px-4 py-2 font-body text-sm font-semibold text-bg transition-all hover:shadow-md hover:shadow-gold-500/20 disabled:opacity-50"
      >
        {status === "loading" ? "..." : "Join"}
      </button>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-bg">
      {/* Gold accent line */}
      <div className="h-px w-full bg-gold-gradient" />

      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        {/* Newsletter bar */}
        <div className="mb-14 flex flex-col items-start gap-6 rounded-2xl border border-cream-08 bg-bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h3 className="font-display text-lg font-bold text-cream sm:text-xl">
              Gold market insights, weekly.
            </h3>
            <p className="mt-1 font-body text-sm text-cream-45">
              Price alerts, market analysis, and selling strategies. No spam.
            </p>
          </div>
          <div className="w-full sm:w-auto sm:min-w-[320px]">
            <NewsletterSignup />
          </div>
        </div>

        {/* Top section: Logo + Columns */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link href="/" className="group inline-flex flex-col items-start">
              <span className="font-display text-2xl font-bold tracking-wide text-cream transition-colors group-hover:text-gold-500">
                OFFRAMP
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-cream-45 transition-colors group-hover:text-cream-60">
                by Onramp
              </span>
            </Link>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-cream-45">
              The most trusted way to sell your gold. Get paid in dollars or
              Bitcoin with fully insured shipping and transparent pricing.
            </p>
            {/* Trust badges */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-1.5 rounded-full border border-cream-08 bg-cream-08 px-3 py-1.5">
                <svg className="h-3.5 w-3.5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 1l2.928 6.472L20 8.264l-5.072 4.584L16.18 20 10 16.472 3.82 20l1.252-7.152L0 8.264l7.072-.792z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-mono text-[10px] font-medium text-cream-60">
                  A+ BBB Rated
                </span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-cream-08 bg-cream-08 px-3 py-1.5">
                <svg className="h-3.5 w-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="font-mono text-[10px] font-medium text-cream-60">
                  Fully Insured
                </span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-cream-60">
                {column.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-cream-35 transition-colors duration-200 hover:text-gold-500"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Network Sites */}
        <div className="mt-10 rounded-xl border border-cream-08 bg-bg-card p-6">
          <h3 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-cream-60 mb-4">
            Our Network
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: "Gold to BTC", url: "https://goldtobtc.com", desc: "Convert gold to Bitcoin" },
              { name: "Gold Buyer", url: "https://goldbuyer.io", desc: "Sell gold for the best price" },
              { name: "Gold vs Bitcoin", url: "https://goldvsbitcoin.org", desc: "Educational comparison hub" },
            ].map((site) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 rounded-lg border border-cream-08 p-3 transition-all hover:border-gold-500/30 hover:bg-gold-500/[0.04]"
              >
                <span className="font-body text-sm font-medium text-cream group-hover:text-gold-500 transition-colors">
                  {site.name}
                </span>
                <span className="font-body text-xs text-cream-35">
                  {site.desc}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px bg-cream-08" />

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Copyright */}
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <p className="font-body text-sm text-cream-35">
              &copy; 2026 Offramp. A product of{" "}
              <Link
                href="https://onramp.com"
                className="text-cream-45 transition-colors hover:text-gold-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Onramp
              </Link>
              .
            </p>
            <p className="font-mono text-[10px] text-cream-25">
              All precious metal transactions are fully insured and compliant.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-cream-08 text-cream-35 transition-all duration-200 hover:border-gold-500/30 hover:bg-gold-500/10 hover:text-gold-500"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

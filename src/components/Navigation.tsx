"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useGoldPrice } from "@/hooks/useGoldPrice";

const NAV_LINKS = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/gold-calculator", label: "Gold Calculator" },
  { href: "/sell", label: "Sell Gold" },
  { href: "/gold-to-bitcoin", label: "Gold to Bitcoin" },
] as const;

const fmtUSD = (n: number) =>
  n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { goldPerOz, btcPrice, isLive } = useGoldPrice();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 16);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* Gold Price Ticker Bar */}
      <div className="relative z-50 w-full bg-[#080808] border-b border-cream-08">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-1.5 sm:justify-between">
          <div className="flex items-center gap-2 text-xs tracking-wider font-mono">
            <span className={`inline-block h-1.5 w-1.5 rounded-full ${isLive ? "bg-green-500" : "bg-yellow-500"} animate-pulse`} />
            <span className="text-cream-45">LIVE</span>
            <span className="mx-1 text-cream-15">|</span>
            <span className="text-gold-500 font-medium">GOLD:</span>
            <span className="text-cream">${fmtUSD(goldPerOz)}</span>
            <span className="text-cream-35">/oz</span>
          </div>
          <div className="hidden items-center gap-4 text-xs font-mono text-cream-35 sm:flex">
            <span>BTC: <span className="text-gold-400">${fmtUSD(btcPrice)}</span></span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-bg/90 shadow-lg shadow-black/20 backdrop-blur-xl border-b border-cream-08"
            : "bg-bg border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="group relative flex flex-col items-start"
            aria-label="Offramp Home"
          >
            <span className="font-display text-2xl font-bold tracking-wide text-cream transition-colors group-hover:text-gold-500 sm:text-[1.7rem]">
              OFFRAMP
            </span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-cream-45 transition-colors group-hover:text-cream-60">
              by Onramp
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="relative px-4 py-2 text-sm font-body font-medium text-cream-60 transition-colors hover:text-cream
                    after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-gold-gradient after:transition-all after:duration-300 after:-translate-x-1/2
                    hover:after:w-3/4"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/get-kit"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gold-gradient px-6 py-2.5 text-sm font-body font-semibold text-bg transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20 active:scale-[0.97]"
            >
              <span className="relative z-10">Get Your Free Kit</span>
              <svg
                className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
              {/* Hover shimmer */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-cream transition-colors hover:bg-cream-08 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <div className="flex w-5 flex-col items-end gap-[5px]">
              <span
                className={`block h-[2px] rounded-full bg-current transition-all duration-300 ${
                  mobileOpen
                    ? "w-5 translate-y-[7px] rotate-45"
                    : "w-5"
                }`}
              />
              <span
                className={`block h-[2px] rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? "w-0 opacity-0" : "w-3.5"
                }`}
              />
              <span
                className={`block h-[2px] rounded-full bg-current transition-all duration-300 ${
                  mobileOpen
                    ? "w-5 -translate-y-[7px] -rotate-45"
                    : "w-4"
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* Mobile Slide-out Panel */}
      <div
        className={`fixed right-0 top-0 z-30 flex h-full w-full max-w-sm flex-col bg-bg/95 backdrop-blur-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Panel header spacer (accounts for ticker + nav bar height) */}
        <div className="h-28 flex-shrink-0" />

        {/* Mobile Nav Links */}
        <div className="flex flex-1 flex-col px-6">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }, i) => (
              <li
                key={href}
                className={`transition-all duration-500 ${
                  mobileOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: mobileOpen ? `${150 + i * 75}ms` : "0ms",
                }}
              >
                <Link
                  href={href}
                  onClick={closeMobile}
                  className="group flex items-center justify-between rounded-xl px-4 py-4 text-lg font-body font-medium text-cream-60 transition-all hover:bg-cream-08 hover:text-cream"
                >
                  <span>{label}</span>
                  <svg
                    className="h-4 w-4 text-cream-25 transition-all group-hover:translate-x-1 group-hover:text-gold-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="my-6 h-px bg-cream-08" />

          {/* Mobile CTA */}
          <div
            className={`transition-all duration-500 ${
              mobileOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: mobileOpen ? "450ms" : "0ms",
            }}
          >
            <Link
              href="/get-kit"
              onClick={closeMobile}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold-gradient px-6 py-4 text-base font-body font-semibold text-bg transition-all active:scale-[0.97]"
            >
              Get Your Free Kit
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>

          {/* Bottom info */}
          <div className="mt-auto pb-10">
            <div className="flex items-center gap-2 font-mono text-xs text-cream-35">
              <span className={`inline-block h-1.5 w-1.5 rounded-full ${isLive ? "bg-green-500" : "bg-yellow-500"}`} />
              <span>GOLD: ${fmtUSD(goldPerOz)}/oz</span>
            </div>
            <p className="mt-3 font-mono text-[11px] text-cream-25">
              Insured shipping. Transparent pricing.
              <br />
              Settle in USD or Bitcoin.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

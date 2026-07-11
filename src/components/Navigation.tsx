"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Lockup } from "@/components/Logo";

const NAV_LINKS = [
  { href: "/sell", label: "Sell gold" },
  { href: "/calculators", label: "What it's worth" },
  { href: "/learn", label: "Learn" },
  { href: "/family-vault", label: "Family vault" },
] as const;

const PHONE_DISPLAY = "(512) 983-5997";
const PHONE_HREF = `tel:${process.env.NEXT_PUBLIC_PHONE ?? "+15129835997"}`;

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 16);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-paper transition-shadow duration-200 ${
          scrolled ? "border-b border-line shadow-[0_1px_0_0_#EAE2D0]" : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Wordmark */}
          <Link href="/" aria-label="Offramp home">
            <Lockup />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href || pathname?.startsWith(href + "/");
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`rounded-full px-4 py-2 label-maison transition-colors ${
                      active
                        ? "font-semibold text-ink"
                        : "font-medium text-ink-2 hover:text-ink"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Consult CTA (nav's right-side element; phone lives in footer + mobile panel) */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/consult"
              className="rounded-full bg-ink px-5 py-2.5 font-body text-sm font-semibold text-paper transition-opacity hover:opacity-90"
            >
              Book a consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((p) => !p)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-cream-08 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <div className="flex w-5 flex-col items-end gap-[5px]">
              <span
                className={`block h-[2px] rounded-full bg-current transition-all duration-200 ${
                  mobileOpen ? "w-5 translate-y-[7px] rotate-45" : "w-5"
                }`}
              />
              <span
                className={`block h-[2px] rounded-full bg-current transition-all duration-200 ${
                  mobileOpen ? "w-0 opacity-0" : "w-3.5"
                }`}
              />
              <span
                className={`block h-[2px] rounded-full bg-current transition-all duration-200 ${
                  mobileOpen ? "w-5 -translate-y-[7px] -rotate-45" : "w-4"
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-30 bg-ink/30 transition-opacity duration-200 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* Mobile panel */}
      <div
        className={`fixed right-0 top-0 z-30 flex h-full w-full max-w-sm flex-col bg-paper transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-[68px] flex-shrink-0" />
        <div className="flex flex-1 flex-col px-6 pt-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={closeMobile}
                  className="flex items-center justify-between rounded-xl px-4 py-4 text-lg font-body font-medium text-ink-2 transition-colors hover:bg-cream-08 hover:text-ink"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="my-6 h-px bg-line" />

          <Link
            href="/consult"
            onClick={closeMobile}
            className="flex w-full items-center justify-center rounded-full bg-ink px-6 py-4 font-body text-base font-semibold text-paper"
          >
            Book a consultation
          </Link>
          <a
            href={PHONE_HREF}
            onClick={closeMobile}
            className="mt-3 flex w-full items-center justify-center rounded-full border border-line-2 px-6 py-3.5 font-mono text-sm text-ink"
          >
            {PHONE_DISPLAY}
          </a>

          <p className="mt-auto pb-10 font-body text-xs leading-relaxed text-ink-3">
            Austin, Texas HQ. Online everywhere.
            <br />
            Free insured kits. Paid in USD or bitcoin. No obligation.
          </p>
        </div>
      </div>
    </>
  );
}

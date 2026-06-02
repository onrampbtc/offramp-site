"use client";

import { useState } from "react";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

const EMBED_CODE = `<iframe
  src="https://offrampgold.com/embed/calculator.html"
  width="100%"
  height="620"
  style="border:0;max-width:460px;border-radius:16px;overflow:hidden"
  title="Gold Value Calculator by Offramp"
  loading="lazy"
></iframe>`;

export default function WidgetPage() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(EMBED_CODE).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative min-h-screen bg-bg">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Free Gold Calculator Widget", url: "https://offrampgold.com/widget" },
        ]}
      />
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />

      {/* HERO */}
      <section className="relative px-4 pt-32 pb-12 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-cream sm:text-5xl">
          Free Gold Calculator Widget
        </h1>
        <p className="mx-auto mt-5 max-w-2xl font-body text-lg text-cream-60">
          Add a live gold value calculator to your website, blog, or article in
          one line of code. Real-time spot prices, USD and Bitcoin values, always
          free.
        </p>
      </section>

      {/* PREVIEW + CODE */}
      <section className="relative mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Live preview */}
          <div>
            <h2 className="mb-4 font-body text-sm font-semibold uppercase tracking-widest text-cream-45">
              Live Preview
            </h2>
            <iframe
              src="/embed/calculator.html"
              width="100%"
              height="620"
              style={{ border: 0, maxWidth: 460, borderRadius: 16 }}
              title="Gold Value Calculator preview"
              loading="lazy"
            />
          </div>

          {/* Embed code */}
          <div>
            <h2 className="mb-4 font-body text-sm font-semibold uppercase tracking-widest text-cream-45">
              Copy &amp; Paste This Code
            </h2>
            <div className="rounded-xl border border-cream-15 bg-bg-card p-5">
              <pre className="overflow-x-auto whitespace-pre-wrap break-all font-mono text-xs leading-relaxed text-cream-60">
{EMBED_CODE}
              </pre>
              <button
                onClick={copy}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3 font-body text-sm font-semibold text-bg transition-all hover:brightness-110 active:scale-[0.98]"
              >
                {copied ? "Copied to clipboard" : "Copy embed code"}
              </button>
            </div>

            <div className="mt-6 space-y-3 font-body text-sm text-cream-60">
              <p className="flex gap-2">
                <span className="text-gold-400">✓</span> Live spot prices, updated every 60 seconds
              </p>
              <p className="flex gap-2">
                <span className="text-gold-400">✓</span> Shows USD melt value, Offramp payout, and Bitcoin equivalent
              </p>
              <p className="flex gap-2">
                <span className="text-gold-400">✓</span> Mobile-responsive, loads in milliseconds, no tracking
              </p>
              <p className="flex gap-2">
                <span className="text-gold-400">✓</span> 100% free — just keep the small &ldquo;Powered by Offramp&rdquo; credit
              </p>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="mx-auto mt-16 max-w-2xl rounded-xl border border-cream-08 bg-bg-card/50 p-6 text-center">
          <p className="font-body text-sm text-cream-45">
            Free for any website. Please keep the &ldquo;Powered by Offramp&rdquo;
            attribution link intact. Questions about embedding?{" "}
            <Link href="/contact" className="text-gold-400 underline-offset-4 hover:underline">
              Contact us
            </Link>
            . Prefer the full experience?{" "}
            <Link href="/gold-calculator" className="text-gold-400 underline-offset-4 hover:underline">
              Use the full calculator
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

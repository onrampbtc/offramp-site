"use client";

import { useEffect } from "react";
import Link from "next/link";

declare global {
  interface Window {
    AskOfframp?: { open?: () => void };
  }
}

/*
  The flagship's primary CTA: opens the Ask Offramp modal in place
  (highest-conversion path — no navigation), falling back to /ask when the
  widget script hasn't loaded. Loads the same embed script every surface
  uses, in manual mode (no floating pill on our own homepage).
*/
export function AskLaunch() {
  useEffect(() => {
    if (document.getElementById("ask-embed-script")) return;
    const s = document.createElement("script");
    s.id = "ask-embed-script";
    s.src = "/embed/ask.js";
    s.setAttribute("data-mode", "manual");
    s.setAttribute("data-brand", "offramp");
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/ask"
          onClick={(e) => {
            if (window.AskOfframp?.open) {
              e.preventDefault();
              window.AskOfframp.open();
            }
          }}
          className="rounded-full bg-ink px-7 py-3.5 font-body text-sm font-semibold text-paper transition-transform hover:opacity-90 active:scale-[0.98]"
        >
          See what it&rsquo;s worth
        </Link>
        <Link
          href="/sell"
          className="rounded-full border border-line-2 px-7 py-3.5 font-body text-sm font-semibold text-ink transition-colors hover:border-ink active:scale-[0.98]"
        >
          Sell gold for cash
        </Link>
      </div>
      <p className="mt-2.5 font-body text-xs text-ink-3">
        ✦ AI-enabled — photograph your gold, get a read in seconds. No account
        needed.
      </p>
    </div>
  );
}

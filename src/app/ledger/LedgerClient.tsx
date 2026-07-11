"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Session } from "@supabase/supabase-js";
import { supabaseBrowser } from "@/lib/supabase-browser";

/*
  The Gold Ledger — client surface.

  Signed out → the pitch + magic-link sign-in (the "track your gold"
  landing). Signed in → claim any pieces saved under this email, then list
  them with live provisional ranges and the dark-hunter total panel.

  V1 auth = email magic link only: the project is on Supabase's built-in
  SMTP (≈2 auth emails/hour — friendlies-beta scale) and the free tier
  blocks email-template edits, so the 6-digit code isn't in the email yet.
  When RESEND_API_KEY exists: Supabase dashboard → Authentication → Emails →
  SMTP Settings → smtp.resend.com, then add {{ .Token }} to the magic-link +
  confirmation templates and light up a code input here (verifyOtp).
*/

interface LedgerItem {
  id: string;
  kind: string;
  karat: string;
  grams: number | null;
  gramsAssumed: { low: number; high: number } | null;
  low: number | null;
  high: number | null;
  savedAt: string;
  spotAtSave: number | null;
  photoUrl: string | null;
}

interface LedgerData {
  email: string;
  spot: number;
  spotAsOf: string;
  items: LedgerItem[];
  total: { low: number; high: number };
}

const usd = (n: number) =>
  n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

const KIND_LABEL: Record<string, string> = {
  ring: "Ring",
  chain: "Chain",
  coin: "Coin",
  bracelet: "Bracelet",
  dental: "Dental gold",
  other: "Piece",
};

type Phase = "checking" | "signed-out" | "email-sent" | "loading" | "ready" | "error";

export function LedgerClient() {
  const supabase = supabaseBrowser();
  const [phase, setPhase] = useState<Phase>("checking");
  const [session, setSession] = useState<Session | null>(null);
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [data, setData] = useState<LedgerData | null>(null);
  const claimedRef = useRef(false);

  // Session bootstrap — also catches the magic-link tokens in the URL hash.
  useEffect(() => {
    if (!supabase) {
      setPhase("signed-out");
      return;
    }
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      setPhase(s ? "loading" : "signed-out");
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      if (s) setPhase((p) => (p === "ready" ? p : "loading"));
    });
    return () => subscription.unsubscribe();
  }, [supabase]);

  // Prefill from the /ask handoff (never carried in the URL).
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("ask-ledger-email");
      if (saved) setEmail(saved);
    } catch {
      /* private mode */
    }
  }, []);

  const loadLedger = useCallback(async () => {
    if (!session) return;
    try {
      // Claim once per visit: attach any pieces saved under this verified
      // email (the /ask handoff), then read the ledger.
      if (!claimedRef.current) {
        claimedRef.current = true;
        await fetch("/api/ledger/claim", {
          method: "POST",
          headers: { Authorization: `Bearer ${session.access_token}` },
        });
      }
      const res = await fetch("/api/ledger/items", {
        headers: { Authorization: `Bearer ${session.access_token}` },
      });
      if (!res.ok) throw new Error(String(res.status));
      setData((await res.json()) as LedgerData);
      setPhase("ready");
    } catch {
      setPhase("error");
    }
  }, [session]);

  useEffect(() => {
    if (phase === "loading" && session) void loadLedger();
  }, [phase, session, loadLedger]);

  const sendLink = useCallback(async () => {
    if (!supabase) return;
    setSending(true);
    setAuthError(null);
    try {
      // Keep the /ask session handoff through the redirect round-trip.
      const url = new URL(window.location.href);
      const askSession = url.searchParams.get("session");
      const redirectTo = `${window.location.origin}/ledger${
        askSession ? `?session=${encodeURIComponent(askSession)}` : ""
      }`;
      const { error } = await supabase.auth.signInWithOtp({
        email: email.trim().toLowerCase(),
        options: { emailRedirectTo: redirectTo, shouldCreateUser: true },
      });
      if (error) {
        setAuthError(
          /rate limit/i.test(error.message)
            ? "Sign-in emails are limited during the beta — give it a little while and try again."
            : "Couldn't send the link — check the address and try again."
        );
      } else {
        setPhase("email-sent");
      }
    } finally {
      setSending(false);
    }
  }, [supabase, email]);

  const signOut = useCallback(async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    claimedRef.current = false;
    setData(null);
    setPhase("signed-out");
  }, [supabase]);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  /* ── checking ── */
  if (phase === "checking") {
    return (
      <p className="py-24 text-center font-body text-sm text-ink-3">
        Opening your ledger…
      </p>
    );
  }

  /* ── signed out: the pitch + the door ── */
  if (phase === "signed-out" || phase === "email-sent") {
    return (
      <div>
        <p className="label-maison text-gold-400">The Gold Ledger · beta</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Your gold, tracked while you wait for your moment.
        </h1>
        <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-ink-2">
          Every piece you save is re-valued against the live gold price each
          time you look — no obligation, no appraisal fees. When the number
          is right, selling is one step.
        </p>

        <div className="mt-10 max-w-xl rounded-xl border border-line bg-raise p-6 sm:p-8">
          {phase === "email-sent" ? (
            <div>
              <p className="label-maison text-gold-400">Check your email</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
                Your sign-in link is on its way
              </h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-2">
                We sent a one-time link to{" "}
                <span className="font-medium text-ink">{email}</span>. Open it
                on this device and your ledger appears here — no password,
                ever.
              </p>
              <p className="mt-3 font-body text-xs leading-relaxed text-ink-3">
                Nothing after a few minutes? Check spam, then try again — beta
                sign-in emails are limited to a couple per hour.
              </p>
              <button
                type="button"
                onClick={() => setPhase("signed-out")}
                className="mt-4 font-body text-sm text-ink-2 underline underline-offset-4 hover:text-ink"
              >
                Use a different email
              </button>
            </div>
          ) : (
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                Sign in / create your ledger
              </h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-2">
                One email, no password. If you saved pieces from the
                estimate, they&apos;ll be waiting under the same address.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && emailValid && !sending) void sendLink();
                  }}
                  aria-label="Email address"
                  className="w-full rounded-lg border border-line-2 bg-white px-4 py-3 font-body text-sm text-ink focus:border-ink focus:outline-none"
                />
                <button
                  type="button"
                  onClick={sendLink}
                  disabled={!emailValid || sending || !supabase}
                  className="shrink-0 rounded-full bg-ink px-7 py-3 font-body text-sm font-semibold text-paper hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {sending ? "Sending…" : "Email me a sign-in link"}
                </button>
              </div>
              {authError && (
                <p className="mt-3 font-body text-sm text-coral">{authError}</p>
              )}
              {!supabase && (
                <p className="mt-3 font-body text-sm text-ink-3">
                  Sign-in isn&apos;t configured in this environment yet.
                </p>
              )}
            </div>
          )}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            {
              title: "Saved with its story",
              body: "Each piece keeps its karat, weight, and photo — the details you confirmed at the estimate.",
            },
            {
              title: "Re-valued live",
              body: "Ranges refresh against the spot price every time you open the ledger. Watch, don't guess.",
            },
            {
              title: "One step to sold",
              body: "Free insured kit or an Austin appointment, an assay you can watch, payment by wire or bitcoin.",
            },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-line bg-raise p-5">
              <h3 className="font-display text-lg font-semibold text-ink">{f.title}</h3>
              <p className="mt-1.5 font-body text-sm leading-relaxed text-ink-2">{f.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 font-body text-sm text-ink-2">
          No pieces saved yet?{" "}
          <Link
            href="/ask"
            className="font-medium text-gold-400 underline decoration-line-2 underline-offset-4 hover:text-ink"
          >
            See what your gold is worth first
          </Link>{" "}
          — free, no account needed.
        </p>
      </div>
    );
  }

  /* ── loading / error ── */
  if (phase === "loading") {
    return (
      <p className="py-24 text-center font-body text-sm text-ink-3">
        Gathering your pieces…
      </p>
    );
  }
  if (phase === "error" || !data) {
    return (
      <div className="py-24 text-center">
        <p className="font-body text-sm text-ink-2">
          Couldn&apos;t open your ledger just now.
        </p>
        <button
          type="button"
          onClick={() => setPhase("loading")}
          className="mt-4 rounded-full border border-line-2 px-6 py-3 font-body text-sm font-semibold text-ink hover:border-ink"
        >
          Try again
        </button>
      </div>
    );
  }

  /* ── signed in: the ledger ── */
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <p className="label-maison text-gold-400">The Gold Ledger · beta</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">
            Your ledger
          </h1>
        </div>
        <button
          type="button"
          onClick={signOut}
          className="font-body text-sm text-ink-3 underline underline-offset-4 hover:text-ink"
        >
          Sign out
        </button>
      </div>
      <p className="mt-2 font-body text-sm text-ink-2">
        {data.email} · {data.items.length} piece{data.items.length === 1 ? "" : "s"}
      </p>

      {/* Total — the page's one dark moment */}
      <div className="mt-8 rounded-xl bg-panel p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <p className="font-mono text-xs uppercase tracking-wider text-panel-mut">
            Provisional total · at today&apos;s spot
          </p>
          <p className="font-mono text-xs text-panel-mut">
            XAU <span className="text-ember-brt">${usd(data.spot)}</span>/oz
          </p>
        </div>
        <p className="mt-2 font-mono text-3xl text-panel-ink sm:text-4xl">
          {data.items.length > 0 ? (
            <>
              <span className="text-ember-brt">${usd(data.total.low)}</span>
              <span className="text-panel-mut"> – </span>
              <span className="text-ember-brt">${usd(data.total.high)}</span>
            </>
          ) : (
            <span className="text-panel-mut">$ —</span>
          )}
        </p>
        <p className="mt-2 font-body text-xs text-panel-mut">
          Ranges are provisional — the recorded assay is final.
        </p>
      </div>

      {/* Pieces */}
      <div className="mt-8 space-y-4">
        {data.items.length === 0 ? (
          <div className="rounded-xl border border-line bg-raise p-6 text-center">
            <p className="font-body text-sm text-ink-2">
              Nothing in the ledger yet. Save pieces from an estimate and
              they&apos;ll appear here, tracked live.
            </p>
          </div>
        ) : (
          data.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 rounded-xl border border-line bg-raise p-4 sm:p-5"
            >
              {item.photoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.photoUrl}
                  alt={`Your ${KIND_LABEL[item.kind] ?? "piece"}`}
                  className="h-16 w-16 shrink-0 rounded-lg border border-line object-cover"
                />
              ) : (
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-line bg-paper font-display text-xl text-ink-3">
                  {(KIND_LABEL[item.kind] ?? "P").charAt(0)}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <p className="font-body text-sm font-semibold text-ink">
                  {KIND_LABEL[item.kind] ?? "Piece"}
                  <span className="ml-2 font-mono text-xs font-normal uppercase text-ink-3">
                    {item.karat === "not-sure" ? "karat tbd" : item.karat}
                  </span>
                </p>
                <p className="mt-0.5 font-mono text-xs text-ink-3">
                  {item.grams
                    ? `${item.grams} g`
                    : item.gramsAssumed
                      ? `${item.gramsAssumed.low}–${item.gramsAssumed.high} g typical`
                      : "weight tbd"}
                </p>
              </div>
              <div className="text-right">
                {item.low !== null && item.high !== null ? (
                  <p className="font-mono text-base text-ink">
                    ${usd(item.low)} – ${usd(item.high)}
                  </p>
                ) : (
                  <p className="font-mono text-sm text-ink-3">—</p>
                )}
                <p className="font-body text-[11px] text-ink-3">provisional</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Routes out */}
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/get-kit"
          className="rounded-full bg-ink px-6 py-3 font-body text-sm font-semibold text-paper hover:opacity-90"
        >
          Sell now — free insured kit
        </Link>
        <Link
          href="/consult"
          className="rounded-full border border-line-2 px-6 py-3 font-body text-sm font-semibold text-ink hover:border-ink"
        >
          Book a consultation
        </Link>
        <Link
          href="/ask"
          className="rounded-full border border-line-2 px-6 py-3 font-body text-sm font-semibold text-ink hover:border-ink"
        >
          + Add pieces
        </Link>
      </div>
    </div>
  );
}

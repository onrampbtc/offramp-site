"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

/*
  Ask Offramp — Phase A client flow.
  Add pieces → live provisional ranges (POST /api/ask/estimate, debounced)
  → email the breakdown (POST /api/ask/lead) → three next steps.
  Photos are client-side previews ONLY in Phase A — nothing uploads.
*/

const KINDS = [
  { value: "ring", label: "Ring" },
  { value: "chain", label: "Chain" },
  { value: "coin", label: "Coin" },
  { value: "bracelet", label: "Bracelet" },
  { value: "dental", label: "Dental gold" },
  { value: "other", label: "Something else" },
] as const;

const KARATS = [
  { value: "10k", label: "10k" },
  { value: "14k", label: "14k" },
  { value: "18k", label: "18k" },
  { value: "22k", label: "22k" },
  { value: "24k", label: "24k" },
  { value: "not-sure", label: "Not sure" },
] as const;

const WEIGHT_HINTS: Record<string, string> = {
  ring: "A typical ring runs 2–8 g; wedding bands 3–6 g.",
  chain: "A typical chain runs 8–30 g; heavy ones reach 50 g.",
  coin: "Common gold coins run 8–34 g; a 1 oz coin is 31.1 g.",
  bracelet: "A typical bracelet runs 8–25 g.",
  dental: "A single crown runs 2–6 g.",
  other: "Small pieces usually run 3–15 g.",
};

const GRAMS_PER_OZ = 31.1035;
const PROVISIONAL_NOTE =
  "provisional — your final price comes from the recorded assay.";
const CONSENT_COPY =
  "Email me this breakdown — and occasional market notes when gold moves";

interface Piece {
  key: number;
  kind: string;
  karat: string;
  weight: string; // user-entered, in the current unit
  unit: "g" | "oz";
  notSureWeight: boolean;
  photoUrl: string | null; // object URL, local preview only
  photoName: string | null;
}

interface ItemRange {
  low: number;
  high: number;
  gramsAssumed: { low: number; high: number } | null;
}

interface EstimateResponse {
  sessionId: string | null;
  spot: number;
  spotAsOf: string;
  items: ItemRange[];
  total: { low: number; high: number };
}

const usd = (n: number) =>
  n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

function gramsOf(p: Piece): number | null {
  if (p.notSureWeight) return null;
  const v = parseFloat(p.weight);
  if (isNaN(v) || v <= 0) return null;
  return p.unit === "oz" ? v * GRAMS_PER_OZ : v;
}

let pieceKey = 1;
const newPiece = (): Piece => ({
  key: pieceKey++,
  kind: "ring",
  karat: "14k",
  weight: "",
  unit: "g",
  notSureWeight: false,
  photoUrl: null,
  photoName: null,
});

export function AskClient({ embed = false, brand = "offramp" }: { embed?: boolean; brand?: string }) {
  const [pieces, setPieces] = useState<Piece[]>(() => [newPiece()]);
  const [estimate, setEstimate] = useState<EstimateResponse | null>(null);
  const [estimating, setEstimating] = useState(false);
  const sessionIdRef = useRef<string | null>(null);

  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const apiItems = useMemo(
    () =>
      pieces.map((p) => ({
        kind: p.kind,
        karat: p.karat,
        grams: gramsOf(p),
      })),
    [pieces]
  );

  // Debounced live estimate
  useEffect(() => {
    if (apiItems.length === 0) {
      setEstimate(null);
      return;
    }
    const t = setTimeout(async () => {
      setEstimating(true);
      try {
        const res = await fetch(`/api/ask/estimate?brand=${encodeURIComponent(brand)}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items: apiItems,
            sessionId: sessionIdRef.current ?? undefined,
            brand,
          }),
        });
        if (res.ok) {
          const data = (await res.json()) as EstimateResponse;
          if (data.sessionId) sessionIdRef.current = data.sessionId;
          setEstimate(data);
        }
      } catch {
        // leave the previous estimate on screen
      } finally {
        setEstimating(false);
      }
    }, 450);
    return () => clearTimeout(t);
  }, [apiItems, brand]);

  const update = useCallback((key: number, patch: Partial<Piece>) => {
    setPieces((prev) => prev.map((p) => (p.key === key ? { ...p, ...patch } : p)));
  }, []);

  const removePiece = useCallback((key: number) => {
    setPieces((prev) => {
      const gone = prev.find((p) => p.key === key);
      if (gone?.photoUrl) URL.revokeObjectURL(gone.photoUrl);
      return prev.filter((p) => p.key !== key);
    });
  }, []);

  const attachPhoto = useCallback(
    (key: number, file: File | null) => {
      if (!file) return;
      const url = URL.createObjectURL(file);
      setPieces((prev) =>
        prev.map((p) => {
          if (p.key !== key) return p;
          if (p.photoUrl) URL.revokeObjectURL(p.photoUrl);
          return { ...p, photoUrl: url, photoName: file.name };
        })
      );
    },
    []
  );

  const submitLead = useCallback(async () => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/ask/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          consentMarketing: consent,
          sessionId: sessionIdRef.current,
          items: apiItems,
          brand,
        }),
      });
      const data = (await res.json()) as { success?: boolean; error?: string };
      if (res.ok && data.success) {
        setSaved(true);
      } else {
        setSubmitError(data.error ?? "Something went wrong — try again.");
      }
    } catch {
      setSubmitError("Something went wrong — try again.");
    } finally {
      setSubmitting(false);
    }
  }, [email, consent, apiItems, brand]);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const canSubmit = emailValid && consent && !submitting && pieces.length > 0;

  const closeEmbed = useCallback(() => {
    window.parent?.postMessage({ type: "ask-offramp:close" }, "*");
  }, []);

  const ctaTarget = embed ? "_blank" : undefined;

  return (
    <div>
      {embed && (
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="label-maison text-gold-400">Ask Offramp</p>
            <h1 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink">
              What is your gold worth?
            </h1>
            <p className="mt-2 font-body text-sm leading-relaxed text-ink-2">
              Provisional ranges at today&apos;s spot — the final price comes
              from a recorded assay.
            </p>
          </div>
          <button
            type="button"
            onClick={closeEmbed}
            aria-label="Close"
            className="rounded-full border border-line px-3 py-1.5 font-body text-sm text-ink-2 hover:border-ink hover:text-ink"
          >
            ✕
          </button>
        </div>
      )}

      {/* ── Add your pieces ── */}
      <div className="space-y-4">
        <p className="label-maison text-ink-3">Add your pieces</p>

        {pieces.map((p, i) => {
          const range = estimate?.items[i];
          return (
            <div key={p.key} className="rounded-xl border border-line bg-raise p-5">
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-body text-sm font-semibold text-ink">
                  Piece {i + 1}
                </p>
                {pieces.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removePiece(p.key)}
                    className="font-body text-xs text-ink-3 underline underline-offset-2 hover:text-coral"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <label className="block">
                  <span className="font-body text-xs font-medium uppercase tracking-wide text-ink-3">
                    What is it?
                  </span>
                  <select
                    value={p.kind}
                    onChange={(e) => update(p.key, { kind: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-line-2 bg-white px-3 py-2.5 font-body text-sm text-ink focus:border-ink focus:outline-none"
                  >
                    {KINDS.map((k) => (
                      <option key={k.value} value={k.value}>{k.label}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="font-body text-xs font-medium uppercase tracking-wide text-ink-3">
                    Karat
                  </span>
                  <select
                    value={p.karat}
                    onChange={(e) => update(p.key, { karat: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-line-2 bg-white px-3 py-2.5 font-body text-sm text-ink focus:border-ink focus:outline-none"
                  >
                    {KARATS.map((k) => (
                      <option key={k.value} value={k.value}>{k.label}</option>
                    ))}
                  </select>
                </label>

                <div>
                  <span className="font-body text-xs font-medium uppercase tracking-wide text-ink-3">
                    Weight
                  </span>
                  <div className="mt-1.5 flex">
                    <input
                      type="number"
                      inputMode="decimal"
                      min={0}
                      step="0.1"
                      placeholder={p.notSureWeight ? "—" : "0.0"}
                      disabled={p.notSureWeight}
                      value={p.notSureWeight ? "" : p.weight}
                      onChange={(e) => update(p.key, { weight: e.target.value })}
                      aria-label={`Weight in ${p.unit === "g" ? "grams" : "troy ounces"}`}
                      className="w-full rounded-l-lg border border-line-2 bg-white px-3 py-2.5 font-mono text-sm text-ink focus:border-ink focus:outline-none disabled:bg-raise disabled:text-ink-3"
                    />
                    <button
                      type="button"
                      onClick={() => update(p.key, { unit: p.unit === "g" ? "oz" : "g" })}
                      disabled={p.notSureWeight}
                      aria-label="Toggle weight unit"
                      className="rounded-r-lg border border-l-0 border-line-2 bg-white px-3 font-mono text-xs text-ink-2 hover:text-ink disabled:text-ink-3"
                    >
                      {p.unit === "g" ? "g" : "oz t"}
                    </button>
                  </div>
                  <label className="mt-2 flex items-center gap-2 font-body text-xs text-ink-2">
                    <input
                      type="checkbox"
                      checked={p.notSureWeight}
                      onChange={(e) => update(p.key, { notSureWeight: e.target.checked })}
                      className="h-3.5 w-3.5 accent-[#122717]"
                    />
                    Not sure
                  </label>
                </div>
              </div>

              {p.notSureWeight && (
                <p className="mt-3 font-body text-xs leading-relaxed text-ink-2">
                  No scale needed — {WEIGHT_HINTS[p.kind]} We&apos;ll price the
                  typical range.
                </p>
              )}

              {/* Photo — local preview only in Phase A */}
              <div className="mt-4 flex items-center gap-4">
                <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-line-2 px-4 py-2 font-body text-xs font-medium text-ink hover:border-ink">
                  <input
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={(e) => attachPhoto(p.key, e.target.files?.[0] ?? null)}
                  />
                  {p.photoUrl ? "Change photo" : "Add a photo (optional)"}
                </label>
                {p.photoUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.photoUrl}
                    alt={`Preview of ${p.photoName ?? "your piece"}`}
                    className="h-12 w-12 rounded-lg border border-line object-cover"
                  />
                )}
                <p className="font-body text-xs leading-snug text-ink-3">
                  Photos help our team refine your range — kept private.
                </p>
              </div>

              {/* Per-piece provisional range */}
              <div className="mt-4 border-t border-line pt-3">
                {range ? (
                  <p className="font-body text-sm text-ink-2">
                    <span className="font-mono text-base text-ink">
                      ${usd(range.low)} – ${usd(range.high)}
                    </span>
                    {range.gramsAssumed && (
                      <span className="ml-2 font-mono text-xs text-ink-3">
                        at {range.gramsAssumed.low}–{range.gramsAssumed.high} g typical
                      </span>
                    )}
                    <span className="mt-1 block font-body text-xs text-ink-3">
                      {PROVISIONAL_NOTE}
                    </span>
                  </p>
                ) : (
                  <p className="font-body text-xs text-ink-3">
                    {estimating ? "Pricing at today's spot…" : "Range appears as you describe the piece."}
                  </p>
                )}
              </div>
            </div>
          );
        })}

        <button
          type="button"
          onClick={() => setPieces((prev) => [...prev, newPiece()])}
          className="rounded-full border border-line-2 px-6 py-3 font-body text-sm font-semibold text-ink hover:border-ink"
        >
          + Add another piece
        </button>
      </div>

      {/* ── Running total — the page's one dark moment ── */}
      <div className="mt-8 rounded-xl bg-panel p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <p className="font-mono text-xs uppercase tracking-wider text-panel-mut">
            Provisional total · {pieces.length} piece{pieces.length === 1 ? "" : "s"}
          </p>
          {estimate && (
            <p className="font-mono text-xs text-panel-mut">
              XAU <span className="text-ember-brt">${usd(estimate.spot)}</span>/oz
            </p>
          )}
        </div>
        <p className="mt-2 font-mono text-3xl text-panel-ink sm:text-4xl">
          {estimate ? (
            <>
              <span className="text-ember-brt">${usd(estimate.total.low)}</span>
              <span className="text-panel-mut"> – </span>
              <span className="text-ember-brt">${usd(estimate.total.high)}</span>
            </>
          ) : (
            <span className="text-panel-mut">$ — </span>
          )}
        </p>
        <p className="mt-2 font-body text-xs text-panel-mut">
          {PROVISIONAL_NOTE.charAt(0).toUpperCase() + PROVISIONAL_NOTE.slice(1)}
        </p>
      </div>

      {/* ── Completion: email the breakdown ── */}
      <div className="mt-8 rounded-xl border border-line bg-raise p-6">
        {saved ? (
          <div>
            <p className="label-maison text-gold-400">Saved</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
              Your breakdown is on its way
            </h2>
            <p className="mt-2 max-w-xl font-body text-sm leading-relaxed text-ink-2">
              Check {email}. When you&apos;re ready, the next step is whichever
              of these fits:
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/family-vault"
                target={ctaTarget}
                className="rounded-full bg-ink px-6 py-3 font-body text-sm font-semibold text-paper hover:opacity-90"
              >
                Save these to your ledger
              </Link>
              <Link
                href="/get-kit"
                target={ctaTarget}
                className="rounded-full border border-line-2 px-6 py-3 font-body text-sm font-semibold text-ink hover:border-ink"
              >
                Get a free insured kit
              </Link>
              <Link
                href="/consult"
                target={ctaTarget}
                className="rounded-full border border-line-2 px-6 py-3 font-body text-sm font-semibold text-ink hover:border-ink"
              >
                Book a consultation
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Keep this breakdown
            </h2>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
                className="w-full rounded-lg border border-line-2 bg-white px-4 py-3 font-body text-sm text-ink focus:border-ink focus:outline-none"
              />
              <button
                type="button"
                onClick={submitLead}
                disabled={!canSubmit}
                className="shrink-0 rounded-full bg-ink px-7 py-3 font-body text-sm font-semibold text-paper hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {submitting ? "Sending…" : "Send my breakdown"}
              </button>
            </div>
            <label className="mt-3 flex items-start gap-2.5 font-body text-sm leading-relaxed text-ink-2">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 accent-[#122717]"
              />
              {CONSENT_COPY}
            </label>
            {submitError && (
              <p className="mt-3 font-body text-sm text-coral">{submitError}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

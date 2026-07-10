"use client";

import { useState } from "react";

export function VaultWaitlist() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setState("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "family-vault-waitlist" }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  };

  if (state === "done") {
    return (
      <p className="mt-5 rounded-lg border border-teal/30 bg-teal/5 px-4 py-3 font-body text-sm text-teal">
        You&rsquo;re on the list. We&rsquo;ll write when your vault is ready.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="mt-5 flex flex-col gap-3 sm:flex-row">
      <label htmlFor="vault-email" className="sr-only">
        Email address
      </label>
      <input
        id="vault-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-full rounded-full border border-line-2 bg-paper px-5 py-3 font-body text-sm text-ink placeholder:text-ink-3 focus:border-ink focus:outline-none"
      />
      <button
        type="submit"
        disabled={state === "sending"}
        className="shrink-0 rounded-full bg-ink px-7 py-3 font-body text-sm font-semibold text-paper transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {state === "sending" ? "Adding you" : "Join the waitlist"}
      </button>
      {state === "error" && (
        <p className="font-body text-sm text-coral">
          That didn&rsquo;t go through. Try again.
        </p>
      )}
    </form>
  );
}

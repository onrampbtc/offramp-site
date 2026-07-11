import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { LedgerClient } from "./LedgerClient";

/*
  /ledger — The Gold Ledger V1 (FLOW-SPEC step 4: "login is NEVER required
  before the number — it buys tracking"). The retention loop: /ask visitors
  save their pieces → sign in with a magic link → return anytime to watch
  value at live spot → one-step sell.
  Content type: proof asset (the product surface) · funnel stage: retention.

  Signed out, this page IS the "track your gold" landing pitch — the sign-in
  form doubles as the ledger's front door. Signed in, it lists the user's
  pieces with live provisional ranges. Auth: Supabase email magic link
  (V1; 6-digit OTP + Google one-tap arrive with Resend SMTP / OAuth creds).
*/

export const metadata: Metadata = {
  title: "The Gold Ledger | Track Your Gold's Value, Live",
  description:
    "Your pieces, saved and re-valued against the live gold price every time you look. Sign in with your email — no password. Ranges are provisional; the recorded assay is final.",
  alternates: { canonical: "https://offrampgold.com/ledger" },
};

export default function LedgerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "The Gold Ledger", url: "https://offrampgold.com/ledger" },
        ]}
      />
      <LedgerClient />
    </div>
  );
}

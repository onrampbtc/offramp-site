import { NextResponse } from "next/server";
import {
  getAuthUser,
  insertRow,
  isSupabaseConfigured,
  selectRows,
  updateRows,
} from "@/lib/supabase";

// POST /api/ledger/claim — attach a signed-in user's saved pieces to their
// account. Claim rule (migration 0004 header): the user's VERIFIED auth
// email must equal leads.email — the email was proven by the magic-link
// sign-in itself, so every unclaimed lead under that address is theirs.
// The client's sessionId is never trusted for the match; identity comes
// only from the validated JWT.
//
// Events: ledger_created (first time this user claims anything) and
// pieces_claimed (with counts) — the retention-loop instrumentation.

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ error: "Not configured" }, { status: 503 });
  }

  const user = await getAuthUser(request);
  if (!user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }
  if (!user.emailConfirmedAt) {
    return NextResponse.json({ error: "Email not verified" }, { status: 403 });
  }

  // Had this user claimed anything before? (Decides ledger_created.)
  const existing = await selectRows(
    "leads",
    `user_id=eq.${user.id}&select=id&limit=1`
  );
  const firstClaim = existing.ok && existing.data !== null && existing.data.length === 0;

  // Claim every unclaimed lead whose email matches the verified auth email.
  const encodedEmail = encodeURIComponent(user.email);
  const claimedLeads = await updateRows(
    "leads",
    `email=eq.${encodedEmail}&user_id=is.null`,
    { user_id: user.id }
  );
  const leadIds = (claimedLeads.data ?? []).map((l) => String(l.id));

  // Stamp their items too (RLS reads key off lead_items.user_id).
  let itemCount = 0;
  if (leadIds.length > 0) {
    const claimedItems = await updateRows(
      "lead_items",
      `lead_id=in.(${leadIds.join(",")})&user_id=is.null`,
      { user_id: user.id }
    );
    itemCount = claimedItems.data?.length ?? 0;
  }

  const anchorLead = leadIds[0] ?? null;
  if (firstClaim) {
    await insertRow("ask_events", {
      lead_id: anchorLead,
      type: "ledger_created",
      meta: { user_id: user.id },
    });
  }
  if (itemCount > 0) {
    await insertRow("ask_events", {
      lead_id: anchorLead,
      type: "pieces_claimed",
      meta: { user_id: user.id, leads: leadIds.length, items: itemCount },
    });
  }

  return NextResponse.json({
    success: true,
    claimedLeads: leadIds.length,
    claimedItems: itemCount,
    firstClaim,
  });
}

import { NextResponse } from "next/server";
import { upsertContact, isHubSpotConfigured } from "@/lib/hubspot";
import { recordIntake } from "@/lib/notify";

export async function POST(request: Request) {
  try {
    const { email, source } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Valid email address required" },
        { status: 400 }
      );
    }

    // Persist + notify hello@ (Supabase always; email once Resend is live).
    await recordIntake(source === "family-vault-waitlist" ? "ledger-waitlist" : "newsletter", email, {
      source: source ?? "newsletter",
    });

    // Push into HubSpot. No-ops gracefully until the HUBSPOT_PRIVATE_APP_TOKEN
    // env var is set — see onramp-hq/secrets/KEYS-INDEX.md.
    const crm = await upsertContact({
      email,
      lead_source: "offramp-newsletter",
    });

    if (!crm.ok) {
      console.error("Newsletter CRM upsert failed:", crm.error);
    }

    if (!isHubSpotConfigured()) {
      console.log("Newsletter signup (CRM not configured):", {
        email,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

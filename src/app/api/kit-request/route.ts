import { NextResponse } from "next/server";
import { upsertContact, isHubSpotConfigured } from "@/lib/hubspot";
import { recordIntake } from "@/lib/notify";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { firstName, lastName, email, address, city, state, zip } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !address || !city || !state || !zip) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Persist + notify hello@ (Supabase always; email once Resend is live).
    await recordIntake("kit-request", email, {
      firstName, lastName, address, city, state, zip,
      goldType: body.goldType ?? null,
      paymentPreference: body.paymentPreference ?? null,
    });

    // Push into HubSpot (Offramp-Transactions). No-ops gracefully until the
    // HUBSPOT_PRIVATE_APP_TOKEN env var is set — see onramp-hq/secrets/KEYS-INDEX.md.
    const crm = await upsertContact({
      email,
      firstname: firstName,
      lastname: lastName,
      address,
      city,
      state,
      zip,
      // custom contact properties (create these in the HubSpot portal):
      gold_type: body.goldType,
      payment_preference: body.paymentPreference,
      lead_source: "offramp-kit-request",
    });

    if (!crm.ok) {
      // Don't fail the user's request if CRM is down — log and continue.
      console.error("Kit request CRM upsert failed:", crm.error);
    }

    if (!isHubSpotConfigured()) {
      // Fallback audit log until CRM is wired.
      console.log("Kit request received (CRM not configured):", {
        name: `${firstName} ${lastName}`,
        email,
        address: `${address}, ${city}, ${state} ${zip}`,
        goldType: body.goldType,
        paymentPreference: body.paymentPreference,
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

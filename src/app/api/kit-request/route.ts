import { NextResponse } from "next/server";

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

    // TODO: Integrate with email service (Beehiiv, SendGrid, etc.)
    // TODO: Store in CRM / database
    // TODO: Trigger shipping kit fulfillment
    // For now, log the submission
    console.log("Kit request received:", {
      name: `${firstName} ${lastName}`,
      email,
      address: `${address}, ${city}, ${state} ${zip}`,
      goldType: body.goldType,
      paymentPreference: body.paymentPreference,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

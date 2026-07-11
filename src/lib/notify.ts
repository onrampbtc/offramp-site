import { insertRow } from "@/lib/supabase";

/*
  Intake spine: every form submission (kit, newsletter, vault waitlist,
  ask lead) is (1) persisted to Supabase and (2) emailed to the inbox.
  The email leg is env-gated on RESEND_API_KEY and no-ops silently until
  the Resend account exists — persistence never depends on it.
*/

const INBOX = process.env.INTAKE_INBOX ?? "hello@offrampgold.com";
const FROM = process.env.RESEND_FROM ?? "Offramp Intake <intake@offrampgold.com>";

export function isResendConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

export async function persistIntake(
  type: string,
  email: string | null,
  payload: Record<string, unknown>
): Promise<void> {
  try {
    if (email) {
      await insertRow("leads", {
        email,
        consent_marketing: Boolean(payload.consentMarketing) || type === "newsletter",
        consent_at: new Date().toISOString(),
        source_property: (payload.sourceProperty as string) ?? "offramp",
        zip: (payload.zip as string) ?? null,
        persona_hints: { intake: type, ...payload },
      });
    }
    await insertRow("ask_events", {
      type: `intake:${type}`,
      meta: { email, ...payload },
    });
  } catch (e) {
    console.error(`persistIntake(${type}) failed:`, e);
  }
}

export async function emailIntake(
  type: string,
  payload: Record<string, unknown>
): Promise<void> {
  if (!isResendConfigured()) {
    console.log(`Intake (email pending Resend): [${type}]`, JSON.stringify(payload));
    return;
  }
  try {
    const lines = Object.entries(payload)
      .filter(([, v]) => v !== null && v !== undefined && v !== "")
      .map(([k, v]) => `${k}: ${typeof v === "object" ? JSON.stringify(v) : String(v)}`)
      .join("\n");
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [INBOX],
        subject: `[intake] ${type} — offrampgold.com`,
        text: `${lines}\n\nreceived: ${new Date().toISOString()}`,
      }),
    });
    if (!res.ok) console.error("Resend intake email failed:", res.status, await res.text());
  } catch (e) {
    console.error(`emailIntake(${type}) failed:`, e);
  }
}

/** Persist + notify. Never throws — form success must not depend on plumbing. */
export async function recordIntake(
  type: string,
  email: string | null,
  payload: Record<string, unknown>
): Promise<void> {
  await Promise.all([persistIntake(type, email, payload), emailIntake(type, { email, ...payload })]);
}

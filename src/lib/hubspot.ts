// HubSpot contact upsert — shared by /api/kit-request and /api/newsletter.
//
// Wiring: set these env vars (see onramp-hq/secrets/KEYS-INDEX.md). Until the
// token exists, every function below no-ops gracefully and returns
// { ok: true, skipped: true } so forms keep working in the meantime.
//
//   HUBSPOT_PRIVATE_APP_TOKEN   Private App token, scopes: crm.objects.contacts.write
//   HUBSPOT_PORTAL_ID           (optional) portal id, for reference/logging only
//
// HubSpot "create or update" by email is idempotent via the upsert endpoint.

const HUBSPOT_API = "https://api.hubspot.com/crm/v3/objects/contacts";

export type HubSpotContact = {
  email: string;
  firstname?: string;
  lastname?: string;
  // free-form extra properties (must exist in the HubSpot portal as contact properties)
  [key: string]: string | undefined;
};

export type UpsertResult =
  | { ok: true; skipped: true }
  | { ok: true; skipped?: false; id: string }
  | { ok: false; error: string };

export function isHubSpotConfigured(): boolean {
  return Boolean(process.env.HUBSPOT_PRIVATE_APP_TOKEN);
}

/**
 * Create or update a HubSpot contact by email. Idempotent.
 * No-ops (returns skipped:true) when no token is configured.
 */
export async function upsertContact(
  contact: HubSpotContact
): Promise<UpsertResult> {
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (!token) {
    return { ok: true, skipped: true };
  }

  const { email, ...rest } = contact;
  const properties: Record<string, string> = { email };
  for (const [k, v] of Object.entries(rest)) {
    if (typeof v === "string" && v.length > 0) properties[k] = v;
  }

  try {
    // Upsert: try create; if the contact already exists (409), patch by email.
    const res = await fetch(HUBSPOT_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ properties }),
    });

    if (res.status === 409) {
      // Already exists — update by email identifier.
      const patch = await fetch(
        `${HUBSPOT_API}/${encodeURIComponent(email)}?idProperty=email`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ properties }),
        }
      );
      if (!patch.ok) {
        return { ok: false, error: `HubSpot patch failed: ${patch.status}` };
      }
      const data = (await patch.json()) as { id: string };
      return { ok: true, id: data.id };
    }

    if (!res.ok) {
      return { ok: false, error: `HubSpot create failed: ${res.status}` };
    }

    const data = (await res.json()) as { id: string };
    return { ok: true, id: data.id };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "HubSpot request failed",
    };
  }
}

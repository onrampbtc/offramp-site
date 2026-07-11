// Shared helpers for the Ask Offramp corpus/cache scripts.
// Reads .env.local, talks to Supabase over PostgREST with the service key.

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export function loadEnv(root = process.cwd()) {
  const env = {};
  const raw = readFileSync(resolve(root, ".env.local"), "utf8");
  for (const line of raw.split("\n")) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  const url = env.NEXT_PUBLIC_SUPABASE_URL;
  const key = env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Supabase env missing in .env.local");
  return { env, url, key };
}

export function makeRest({ url, key }) {
  async function rest(path, init = {}) {
    const res = await fetch(`${url}/rest/v1/${path}`, {
      ...init,
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
        ...init.headers,
      },
    });
    if (!res.ok) {
      throw new Error(`${init.method ?? "GET"} ${path} → ${res.status}: ${(await res.text()).slice(0, 300)}`);
    }
    const text = await res.text();
    return text ? JSON.parse(text) : null;
  }
  return {
    rest,
    insertBatch: (table, rows) =>
      rest(table, { method: "POST", body: JSON.stringify(rows) }),
    deleteWhere: (table, filter) =>
      rest(`${table}?${filter}`, { method: "DELETE" }),
    select: (table, query) =>
      rest(`${table}?${query}`, { headers: { Prefer: "" } }),
    rpc: (fn, args) =>
      rest(`rpc/${fn}`, { method: "POST", body: JSON.stringify(args), headers: { Prefer: "" } }),
  };
}

/** Split long text into ~targetChars chunks on sentence boundaries. */
export function chunkText(text, targetChars = 800) {
  const clean = text.replace(/\s+\n/g, "\n").replace(/[ \t]+/g, " ").trim();
  if (clean.length <= targetChars * 1.3) return clean ? [clean] : [];
  const sentences = clean.split(/(?<=[.!?])\s+(?=[A-Z0-9"'])/);
  const chunks = [];
  let cur = "";
  for (const s of sentences) {
    if (cur && cur.length + s.length + 1 > targetChars) {
      chunks.push(cur.trim());
      cur = s;
    } else {
      cur = cur ? `${cur} ${s}` : s;
    }
  }
  if (cur.trim()) chunks.push(cur.trim());
  return chunks;
}

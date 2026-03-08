import { NextResponse } from "next/server";

/* ──────────────────────────────────────────────────────────────────────
 *  POST /api/indexnow
 *  Pings Bing/Yandex/Seznam IndexNow API to notify of updated URLs.
 *  Called manually or via a webhook after content deploys.
 *
 *  Body: { urls: string[] }  (optional — defaults to all sitemap pages)
 * ────────────────────────────────────────────────────────────────────── */

const INDEX_NOW_KEY = "offramp2026indexnow";
const HOST = "https://offrampgold.com";

const SITEMAP_URLS = [
  "/", "/sell", "/how-it-works", "/gold-calculator", "/gold-to-bitcoin",
  "/gold-price", "/get-kit", "/buy-gold", "/sell-jewelry", "/sell-coins",
  "/sell-dental-gold",
  "/calculators/14k", "/calculators/10k", "/calculators/18k",
  "/calculators/scrap", "/calculators/dental", "/calculators/pawn-comparison",
  "/guide/bitcoin-vs-gold", "/guide/where-to-sell-gold",
  "/guide/best-place-sell-gold", "/guide/how-to-sell-gold-jewelry",
  "/guide/sell-inherited-gold", "/guide/how-to-sell-scrap-gold",
  "/guide/pawn-shop-gold-prices", "/guide/when-to-sell-gold",
  "/guide/digital-gold", "/guide/gold-vs-bitcoin-investment",
  "/guide/money-printing", "/guide/currency-debasement",
  "/guide/store-of-value", "/guide/hard-money", "/guide/gold-standard",
];

export async function POST(request: Request) {
  let urls: string[];

  try {
    const body = await request.json();
    urls = Array.isArray(body?.urls) ? body.urls : SITEMAP_URLS;
  } catch {
    urls = SITEMAP_URLS;
  }

  const fullUrls = urls.map((u) => (u.startsWith("http") ? u : `${HOST}${u}`));

  const payload = {
    host: "offrampgold.com",
    key: INDEX_NOW_KEY,
    keyLocation: `${HOST}/${INDEX_NOW_KEY}.txt`,
    urlList: fullUrls,
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      status: res.status,
      ok: res.ok,
      urlCount: fullUrls.length,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "IndexNow ping failed", detail: String(err) },
      { status: 502 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "POST to this endpoint to ping IndexNow. Body: { urls: string[] }",
    key: INDEX_NOW_KEY,
  });
}

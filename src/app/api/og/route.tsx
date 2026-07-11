import { renderOgCard } from "@/lib/og-template";

/**
 * Branded OG card generator for pages whose metadata lives in config
 * (layout.tsx) rather than a route-level opengraph-image file.
 * Usage: /api/og?t=<headline>&k=<kicker>
 */

const MAX_HEADLINE = 90;
const MAX_KICKER = 28;
// Letters, digits, spaces and ordinary punctuation only — this is a public
// endpoint that renders text onto a branded card, so keep the alphabet tight.
const SAFE = /^[\w\s.,'’&$%?!:;()\-—–\/]*$/;

function clean(value: string | null, max: number): string | undefined {
  if (!value) return undefined;
  const text = value.trim().slice(0, max);
  if (!text || !SAFE.test(text)) return undefined;
  return text;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const headline =
    clean(searchParams.get("t"), MAX_HEADLINE) ??
    "Sell your gold for what it's actually worth.";
  const kicker = clean(searchParams.get("k"), MAX_KICKER);

  const image = await renderOgCard({ headline, kicker });
  image.headers.set(
    "Cache-Control",
    "public, immutable, no-transform, max-age=86400, s-maxage=604800"
  );
  return image;
}

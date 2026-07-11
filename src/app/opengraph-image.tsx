import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template";

export const alt = "Offramp — Sell your gold for what it’s actually worth.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgCard({
    headline: "Sell your gold for what it’s actually worth.",
  });
}

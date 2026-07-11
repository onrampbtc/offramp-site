import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template";

export const alt = "Today’s gold price per gram and per ounce — Offramp.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgCard({
    kicker: "Gold Price",
    headline: "Today’s gold price, per gram and per ounce.",
  });
}

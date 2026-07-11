import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template";

export const alt = "Ask Offramp — describe your gold, get today’s number in about a minute.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgCard({
    kicker: "Ask Offramp",
    headline: "Describe your gold. Get today’s number in about a minute.",
  });
}

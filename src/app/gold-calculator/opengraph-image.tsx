import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template";

export const alt = "Gold calculator — what your gold is worth at today’s spot price.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgCard({
    kicker: "Gold Calculator",
    headline: "What your gold is worth at today’s spot price.",
  });
}

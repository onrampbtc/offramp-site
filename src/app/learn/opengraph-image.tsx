import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template";

export const alt = "Learn — straight answers about selling gold, from Offramp.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgCard({
    kicker: "Learn",
    headline: "Straight answers about selling gold.",
  });
}

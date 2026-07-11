import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Offramp",
    short_name: "Offramp",
    description:
      "Sell your gold for cash or Bitcoin. Free insured shipping, every piece assayed on camera, wire payment to your bank.",
    start_url: "/",
    display: "standalone",
    theme_color: "#122717",
    background_color: "#FFFFFF",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}

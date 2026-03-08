import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scrap Gold Calculator | Live Value Estimate | Offramp",
  description:
    "Use the Offramp scrap gold calculator to find the value of your scrap gold based on weight, purity, and today's spot price. Instant estimates for all karats.",
  openGraph: {
    title: "Scrap Gold Calculator | Live Value Estimate | Offramp",
    description:
      "Use the Offramp scrap gold calculator to find the value of your scrap gold based on weight, purity, and today's spot price.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scrap Gold Calculator | Live Value Estimate | Offramp",
    description:
      "Use the Offramp scrap gold calculator to find the value of your scrap gold based on weight, purity, and today's spot price.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

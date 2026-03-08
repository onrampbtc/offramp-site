import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Gold for Bitcoin | Gold to BTC | Offramp by Onramp",
  description:
    "Offramp is the bridge from physical gold to Bitcoin. Sell your jewelry, coins, or scrap gold for USD wired to your bank, then convert to BTC through Onramp custody. Gold is old hard money. Bitcoin is new hard money.",
  openGraph: {
    title: "Sell Gold for Bitcoin | Gold to BTC | Offramp by Onramp",
    description:
      "Sell your gold for Bitcoin through Offramp. Free insured shipping, XRF assay, wire payment converted to BTC through Onramp custody.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Gold for Bitcoin | Gold to BTC | Offramp by Onramp",
    description:
      "Sell your gold for Bitcoin through Offramp. The bridge from physical gold to the Bitcoin economy.",
  },
};

export default function GoldToBitcoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Gold Coins and Bullion for Cash | Offramp",
  description:
    "Sell gold coins and bullion at competitive rates near spot price. We accept American Eagles, Canadian Maple Leafs, Krugerrands, gold bars, and rounds of any size. Ship free with insurance up to $25,000.",
  openGraph: {
    title: "Sell Gold Coins and Bullion for Cash | Offramp",
    description:
      "Sell gold coins and bullion at competitive rates near spot price. American Eagles, Maple Leafs, Krugerrands, bars, and rounds. Free insured shipping.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Gold Coins and Bullion for Cash | Offramp",
    description:
      "Sell gold coins and bullion at competitive rates near spot price. Free insured shipping up to $25K.",
  },
};

export default function SellCoinsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

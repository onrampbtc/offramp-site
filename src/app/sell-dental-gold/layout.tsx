import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Dental Gold for Cash | Offramp",
  description:
    "Sell dental gold including crowns, bridges, inlays, and dental scrap. We accept both clean and unclean pieces. XRF analysis determines exact gold content for a fair payout based on current market prices.",
  openGraph: {
    title: "Sell Dental Gold for Cash | Offramp",
    description:
      "Sell dental gold for cash. Crowns, bridges, inlays, and scrap — clean or unclean. XRF assay, fair market payouts.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Dental Gold for Cash | Offramp",
    description:
      "Sell dental gold for cash. Crowns, bridges, inlays, and scrap. XRF assay, fair market payouts.",
  },
};

export default function SellDentalGoldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

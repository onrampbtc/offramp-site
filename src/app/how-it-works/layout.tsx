import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works: Mail In Gold for Cash | Offramp",
  description:
    "Sell gold to Offramp in three steps: request a free insured FedEx kit, mail your gold, and receive a transparent quote based on XRF assay and live spot price. Accept and get paid by wire within 48 hours.",
  keywords: [
    "how to sell gold online",
    "mail in gold for cash",
    "sell gold by mail",
    "gold selling process",
    "gold assay service",
    "XRF gold testing",
    "insured gold shipping",
    "sell gold from home",
  ],
  openGraph: {
    title: "How It Works: Mail In Gold for Cash | Offramp",
    description:
      "Three simple steps to sell your gold: request a free insured kit, ship your gold, get paid by wire in 48 hours. Free returns if you decline.",
    type: "website",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offramp.com/how-it-works",
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works: Mail In Gold for Cash | Offramp",
    description:
      "Three simple steps to sell your gold by mail. Free insured kit, XRF assay, wire payment in 48 hours.",
  },
  alternates: {
    canonical: "https://offramp.com/how-it-works",
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

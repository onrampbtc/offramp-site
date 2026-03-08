import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hard Money: From Gold to Bitcoin | Offramp",
  description:
    "Trace the evolution of hard money from ancient gold coins to the gold standard to Bitcoin. Learn why sound money matters and how hard assets protect purchasing power.",
  keywords: [
    "hard money",
    "sound money",
    "gold standard",
    "bitcoin hard money",
    "hard assets",
    "monetary history",
    "gold to bitcoin",
  ],
  openGraph: {
    title: "Hard Money: From Gold to Bitcoin | Offramp",
    description:
      "The evolution of hard money from the gold standard to the Bitcoin standard.",
    type: "article",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offramp.com/guide/hard-money",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hard Money: From Gold to Bitcoin | Offramp",
    description:
      "From the gold standard to the Bitcoin standard.",
  },
  alternates: {
    canonical: "https://offramp.com/guide/hard-money",
  },
};

export default function HardMoneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

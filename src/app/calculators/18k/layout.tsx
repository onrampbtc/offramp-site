import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "18K Gold Price Per Gram Today | Live Calculator | Offramp",
  description:
    "The current 18K gold price per gram is updated live. 18K gold contains 75% pure gold. Calculate your 18K gold value instantly with the Offramp calculator.",
  openGraph: {
    title: "18K Gold Price Per Gram Today | Live Calculator | Offramp",
    description:
      "The current 18K gold price per gram is updated live. 18K gold contains 75% pure gold. Calculate your 18K gold value instantly.",
  },
  twitter: {
    card: "summary_large_image",
    title: "18K Gold Price Per Gram Today | Live Calculator | Offramp",
    description:
      "The current 18K gold price per gram is updated live. 18K gold contains 75% pure gold.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

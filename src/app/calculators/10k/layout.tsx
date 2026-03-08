import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "10K Gold Price Per Gram Today | Live Calculator | Offramp",
  description:
    "The current 10K gold price per gram is updated live. 10K gold contains 41.7% pure gold. Calculate your 10K gold value instantly with the Offramp calculator.",
  openGraph: {
    title: "10K Gold Price Per Gram Today | Live Calculator | Offramp",
    description:
      "The current 10K gold price per gram is updated live. 10K gold contains 41.7% pure gold. Calculate your 10K gold value instantly.",
  },
  twitter: {
    card: "summary_large_image",
    title: "10K Gold Price Per Gram Today | Live Calculator | Offramp",
    description:
      "The current 10K gold price per gram is updated live. 10K gold contains 41.7% pure gold.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

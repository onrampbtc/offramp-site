import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Currency Debasement: A 5,000 Year History | Offramp",
  description:
    "From Roman denarii to modern fiat, governments have debased currencies throughout history. Learn why hard money always wins and how gold and Bitcoin protect wealth.",
  keywords: [
    "currency debasement",
    "currency debasement history",
    "Roman denarius debasement",
    "fiat currency debasement",
    "hard money",
    "gold standard",
    "bitcoin hard money",
  ],
  openGraph: {
    title: "Currency Debasement: A 5,000 Year History | Offramp",
    description:
      "From Roman denarii to modern fiat, governments have debased currencies throughout history.",
    type: "article",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/guide/currency-debasement",
  },
  twitter: {
    card: "summary_large_image",
    title: "Currency Debasement: A 5,000 Year History | Offramp",
    description:
      "Why hard money always wins. A 5,000 year history.",
  },
  alternates: {
    canonical: "https://offrampgold.com/guide/currency-debasement",
  },
};

export default function CurrencyDebasementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

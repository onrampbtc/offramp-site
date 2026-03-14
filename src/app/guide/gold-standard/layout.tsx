import type { Metadata } from "next";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "The Gold Standard: History and Lessons | Offramp",
  description:
    "A complete history of the gold standard from its origins to its collapse, what it taught us about sound money, and what comes next with Bitcoin.",
  keywords: [
    "gold standard",
    "gold standard history",
    "classical gold standard",
    "bretton woods",
    "nixon shock",
    "sound money",
    "bitcoin gold standard",
  ],
  openGraph: {
    title: "The Gold Standard: History and Lessons | Offramp",
    description:
      "The history of the gold standard and what comes next for sound money.",
    type: "article",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/guide/gold-standard",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Gold Standard: History and Lessons | Offramp",
    description:
      "What the gold standard teaches us about sound money.",
  },
  alternates: {
    canonical: "https://offrampgold.com/guide/gold-standard",
  },
};

export default function GoldStandardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Guides", url: "https://offrampgold.com/guide" },
          { name: "The Gold Standard", url: "https://offrampgold.com/guide/gold-standard" },
        ]}
      />
      <ArticleJsonLd
        headline="The Gold Standard: History and Lessons"
        description="A complete history of the gold standard from its origins to its collapse, what it taught us about sound money, and what comes next with Bitcoin."
        url="https://offrampgold.com/guide/gold-standard"
        datePublished="2026-03-01"
        author="Offramp"
      />
      {children}
    </>
  );
}

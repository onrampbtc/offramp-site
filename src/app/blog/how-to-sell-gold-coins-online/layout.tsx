import type { Metadata } from "next";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "How to Sell Gold Coins Online: Complete Guide for 2026 | Offramp",
  description:
    "Learn how to sell gold coins online for the best price. Compare bullion vs numismatic value, find the best buyers, and avoid common mistakes that cost sellers money.",
  alternates: { canonical: "https://offrampgold.com/blog/how-to-sell-gold-coins-online" },
  keywords: [
    "sell gold coins online",
    "best place to sell gold coins",
    "how to sell gold coins",
    "sell gold eagles online",
    "sell gold krugerrands",
  ],
  openGraph: {
    title: "How to Sell Gold Coins Online: Complete Guide for 2026",
    description: "Find the best buyers, understand coin values, and get the highest price for your gold coins.",
    url: "https://offrampgold.com/blog/how-to-sell-gold-coins-online",
    type: "article",
    publishedTime: "2026-03-15T00:00:00Z",
    authors: ["Yasmine"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Blog", url: "https://offrampgold.com/blog" },
          { name: "How to Sell Gold Coins Online", url: "https://offrampgold.com/blog/how-to-sell-gold-coins-online" },
        ]}
      />
      <ArticleJsonLd
        headline="How to Sell Gold Coins Online: Complete Guide for 2026"
        description="Find the best buyers for your gold coins and get the highest price."
        url="https://offrampgold.com/blog/how-to-sell-gold-coins-online"
        datePublished="2026-03-15"
        author="Yasmine"
      />
      <FAQJsonLd
        questions={[
          { question: "Where is the best place to sell gold coins online?", answer: "Online gold buyers that pay based on melt value plus any numismatic premium typically offer the best prices (85-97% of spot). Services like Offramp provide free insured shipping and XRF testing. For rare or numismatic coins, specialized coin dealers or auction houses may pay a premium over melt value." },
          { question: "How much are my gold coins worth?", answer: "Gold coin value depends on three factors: gold content (weight × purity), condition (graded coins command premiums), and rarity. Common bullion coins like American Eagles and Krugerrands trade near spot price. Rare dates, low mintages, or high-grade coins may be worth 2-10× their melt value." },
          { question: "Should I sell gold coins for melt value or numismatic value?", answer: "Modern bullion coins (Eagles, Maples, Krugerrands) are typically worth melt value plus a small premium (3-8%). Pre-1933 US gold coins, key dates, and high-grade certified coins may have significant numismatic premiums. Get a numismatic appraisal before selling potentially rare coins at melt value." },
          { question: "How do I ship gold coins safely?", answer: "Use a service that provides insured shipping materials. Offramp sends a free FedEx shipping kit with padding, tamper-evident packaging, and full insurance coverage. Never ship gold via USPS without insurance, and always use tracking. Photograph your coins before packing as documentation." },
        ]}
      />
      {children}
    </>
  );
}

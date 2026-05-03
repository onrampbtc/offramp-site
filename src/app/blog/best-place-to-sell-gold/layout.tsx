import type { Metadata } from "next";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Best Place to Sell Gold in 2026: 7 Options Compared | Offramp",
  description:
    "Where is the best place to sell gold? We compare 7 options including online buyers, pawn shops, jewelers, and coin dealers — with payout percentages, speed, and red flags to avoid.",
  alternates: { canonical: "https://offrampgold.com/blog/best-place-to-sell-gold" },
  keywords: [
    "best place to sell gold",
    "where to sell gold",
    "sell gold online",
    "sell gold near me",
    "best gold buyer",
  ],
  openGraph: {
    title: "Best Place to Sell Gold in 2026: 7 Options Compared",
    description: "Compare 7 places to sell gold with real payout data: online buyers, pawn shops, jewelers, and more.",
    url: "https://offrampgold.com/blog/best-place-to-sell-gold",
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["Offramp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Blog", url: "https://offrampgold.com/blog" },
          { name: "Best Place to Sell Gold", url: "https://offrampgold.com/blog/best-place-to-sell-gold" },
        ]}
      />
      <ArticleJsonLd
        headline="Best Place to Sell Gold in 2026: 7 Options Compared"
        description="Compare 7 places to sell gold with real payout data, speed, convenience, and red flags."
        url="https://offrampgold.com/blog/best-place-to-sell-gold"
        datePublished="2026-04-07"
        author="Offramp"
      />
      <FAQJsonLd
        questions={[
          {
            question: "What is the best place to sell gold for the most money?",
            answer:
              "Online mail-in gold buyers consistently pay the highest percentage of spot price (85-95%) because they have lower overhead than physical stores and use XRF testing for accurate valuations. Services like Offramp also offer free insured shipping and transparent pricing tied to live spot rates.",
          },
          {
            question: "Should I sell my gold to a pawn shop?",
            answer:
              "Pawn shops typically pay only 40-60% of spot price for gold. While they offer immediate cash, you can usually get 40-60% more by selling to an online buyer or specialty gold dealer. Only choose a pawn shop if you need cash within hours.",
          },
          {
            question: "Is it safe to sell gold online?",
            answer:
              "Yes, when you choose a reputable buyer. Look for: A+ BBB rating, free insured shipping (FedEx or UPS with $5,000+ insurance), transparent pricing tied to live spot, and the option to decline the offer and have your gold returned free of charge.",
          },
          {
            question: "How much should I expect to get for my gold?",
            answer:
              "Expect 85-95% of melt value from a top online buyer, 70-85% from a reputable local jeweler or coin dealer, and 40-60% from a pawn shop. Numismatic coins (rare or collectible) may sell for significantly more than melt value to specialty dealers.",
          },
          {
            question: "What documents do I need to sell gold?",
            answer:
              "For most transactions under $10,000, you'll need a valid government-issued ID. Larger sales may require additional documentation for IRS reporting (Form 1099-B). Online buyers typically verify your identity electronically when you create an account.",
          },
        ]}
      />
      {children}
    </>
  );
}

import type { Metadata } from "next";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Should I Sell My Gold for Bitcoin? A 2026 Decision Framework | Offramp",
  description:
    "Gold and Bitcoin are both stores of value — but they behave very differently. Data-driven framework for deciding whether converting gold to BTC makes sense for you.",
  alternates: { canonical: "https://offrampgold.com/blog/should-i-sell-gold-for-bitcoin" },
  keywords: [
    "should I sell gold for bitcoin",
    "gold to bitcoin",
    "sell gold for BTC",
    "gold vs bitcoin",
    "convert gold to bitcoin",
  ],
  openGraph: {
    title: "Should I Sell My Gold for Bitcoin? A 2026 Decision Framework",
    description:
      "Data-driven framework for deciding whether converting gold to BTC makes sense for your situation.",
    url: "https://offrampgold.com/blog/should-i-sell-gold-for-bitcoin",
    type: "article",
    publishedTime: "2026-03-14T00:00:00Z",
    authors: ["Yasmine"],
  },
};

export default function ShouldISellGoldForBitcoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Blog", url: "https://offrampgold.com/blog" },
          { name: "Should I Sell Gold for Bitcoin?", url: "https://offrampgold.com/blog/should-i-sell-gold-for-bitcoin" },
        ]}
      />
      <ArticleJsonLd
        headline="Should I Sell My Gold for Bitcoin? A 2026 Decision Framework"
        description="Data-driven framework for deciding whether converting gold to BTC makes sense for your situation."
        url="https://offrampgold.com/blog/should-i-sell-gold-for-bitcoin"
        datePublished="2026-03-14"
        author="Yasmine"
      />
      <FAQJsonLd
        questions={[
          {
            question: "Should I sell my gold for Bitcoin?",
            answer:
              "It depends on your financial goals, time horizon, and risk tolerance. If you believe in Bitcoin's long-term appreciation and already have a diversified portfolio, converting some gold to BTC can make sense. If you need stability or liquidity within 1-2 years, holding gold may be smarter.",
          },
          {
            question: "Is Bitcoin a better store of value than gold?",
            answer:
              "Bitcoin has outperformed gold significantly over the past decade in total returns, but with much higher volatility. Gold provides stability and thousands of years of track record. Many investors hold both as complementary stores of value.",
          },
          {
            question: "How do I convert physical gold to Bitcoin?",
            answer:
              "The simplest method is to sell your gold to a buyer like Offramp that offers Bitcoin payouts. You mail in your gold, it's assayed and valued, and you receive Bitcoin directly to your wallet — no need to sell gold for cash and then buy BTC separately.",
          },
          {
            question: "What are the tax implications of selling gold for Bitcoin?",
            answer:
              "Selling gold is a taxable event — you may owe capital gains tax on the difference between your cost basis and the sale price. Receiving Bitcoin instead of cash does not change the tax treatment. Consult a tax professional for your specific situation.",
          },
        ]}
      />
      {children}
    </>
  );
}

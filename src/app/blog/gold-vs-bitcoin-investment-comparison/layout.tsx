import type { Metadata } from "next";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Gold vs Bitcoin as an Investment: A 2026 Comparison | Offramp",
  description:
    "Compare gold and Bitcoin as investments in 2026. Historical returns, risk profiles, correlation data, and portfolio allocation strategies for both assets.",
  alternates: { canonical: "https://offrampgold.com/blog/gold-vs-bitcoin-investment-comparison" },
  keywords: [
    "gold vs bitcoin investment",
    "gold vs bitcoin comparison",
    "should I invest in gold or bitcoin",
    "bitcoin vs gold returns",
    "gold bitcoin portfolio",
  ],
  openGraph: {
    title: "Gold vs Bitcoin as an Investment: A 2026 Comparison",
    description: "Compare gold and Bitcoin as investments. Historical returns, risk profiles, and portfolio strategies.",
    url: "https://offrampgold.com/blog/gold-vs-bitcoin-investment-comparison",
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
          { name: "Gold vs Bitcoin Investment Comparison", url: "https://offrampgold.com/blog/gold-vs-bitcoin-investment-comparison" },
        ]}
      />
      <ArticleJsonLd
        headline="Gold vs Bitcoin as an Investment: A 2026 Comparison"
        description="Compare gold and Bitcoin as investments. Historical returns, risk profiles, and portfolio strategies."
        url="https://offrampgold.com/blog/gold-vs-bitcoin-investment-comparison"
        datePublished="2026-03-15"
        author="Yasmine"
      />
      <FAQJsonLd
        questions={[
          {
            question: "Is gold or Bitcoin a better investment in 2026?",
            answer: "Neither is universally 'better' — they serve different roles. Gold provides stability and inflation protection with low volatility (5-15% annually). Bitcoin offers higher potential returns but with much higher volatility (50-80% annually). Many advisors recommend holding both: 5-15% gold for stability and 1-5% Bitcoin for asymmetric upside.",
          },
          {
            question: "How has Bitcoin performed compared to gold over the last 10 years?",
            answer: "From 2016 to 2026, Bitcoin returned approximately 12,000% compared to gold's ~90%. However, Bitcoin experienced multiple 50-80% drawdowns during that period. Gold never dropped more than 20%. Risk-adjusted returns depend heavily on the specific time period and entry/exit points.",
          },
          {
            question: "Can I hold both gold and Bitcoin in my portfolio?",
            answer: "Yes, and many financial advisors recommend it. Gold and Bitcoin have a low correlation to each other and to traditional assets, making the combination a powerful diversification tool. A common allocation is 60% stocks, 20% bonds, 10% gold, 5% Bitcoin, 5% cash.",
          },
          {
            question: "What is the correlation between gold and Bitcoin?",
            answer: "The correlation between gold and Bitcoin has historically been low and variable, ranging from -0.2 to +0.3 depending on the time period. This low correlation is what makes holding both assets valuable for portfolio diversification.",
          },
          {
            question: "Should I sell my gold to buy Bitcoin?",
            answer: "It depends on your time horizon, risk tolerance, and existing portfolio. If you have a 5+ year horizon and can tolerate significant drawdowns, converting a portion of gold to Bitcoin may offer asymmetric upside. If you need stability or have a shorter timeline, keeping gold makes more sense. Services like Offramp make the conversion easy if you decide to rebalance.",
          },
        ]}
      />
      {children}
    </>
  );
}

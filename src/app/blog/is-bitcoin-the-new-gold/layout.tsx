import type { Metadata } from "next";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Is Bitcoin the New Gold? What the Data Says in 2026 | Offramp",
  description:
    "Analyze the 'digital gold' narrative with data. Compare Bitcoin and gold on scarcity, store of value performance, institutional adoption, and correlation. A balanced, evidence-based take.",
  alternates: { canonical: "https://offrampgold.com/blog/is-bitcoin-the-new-gold" },
  keywords: [
    "is bitcoin the new gold",
    "bitcoin digital gold",
    "bitcoin vs gold store of value",
    "bitcoin gold comparison",
    "digital gold narrative",
  ],
  openGraph: {
    title: "Is Bitcoin the New Gold? What the Data Says in 2026",
    description: "Analyze the 'digital gold' narrative with data from scarcity to institutional adoption.",
    url: "https://offrampgold.com/blog/is-bitcoin-the-new-gold",
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
          { name: "Is Bitcoin the New Gold?", url: "https://offrampgold.com/blog/is-bitcoin-the-new-gold" },
        ]}
      />
      <ArticleJsonLd
        headline="Is Bitcoin the New Gold? What the Data Says in 2026"
        description="Analyze the digital gold narrative with real data on scarcity, store of value performance, and institutional adoption."
        url="https://offrampgold.com/blog/is-bitcoin-the-new-gold"
        datePublished="2026-03-15"
        author="Yasmine"
      />
      <FAQJsonLd
        questions={[
          { question: "Is Bitcoin really 'digital gold'?", answer: "Bitcoin shares gold's core monetary properties — scarcity, durability, divisibility, and independence from central authority — while adding digital advantages like perfect portability and programmability. Whether it fully replaces gold's role depends on your definition: as a speculative store of value with fixed supply, the comparison is strong. As a stability anchor with 5,000 years of track record, gold still stands alone." },
          { question: "Will Bitcoin replace gold?", answer: "Unlikely in the near term. Gold's $13+ trillion market cap, institutional entrenchment, and cultural significance across civilizations make it irreplaceable. More likely, Bitcoin will grow alongside gold as a complementary store of value — digital gold and physical gold serving different use cases in the same portfolio." },
          { question: "How does Bitcoin's scarcity compare to gold?", answer: "Bitcoin's scarcity is mathematically absolute: exactly 21 million coins, enforced by code. Gold's scarcity is geological: about 209,000 tonnes exist, with new mining adding ~1.5% annually. Bitcoin's supply is more predictable and verifiable, but gold has demonstrated its scarcity value over 5,000 years vs Bitcoin's 17." },
          { question: "What do institutions think about Bitcoin vs gold?", answer: "Major institutions increasingly treat Bitcoin as a complement to gold. BlackRock launched a Bitcoin ETF (IBIT) alongside its gold ETF (IAU). MicroStrategy holds $40B+ in Bitcoin as a treasury asset. Central banks still prefer gold reserves but several have begun researching Bitcoin. The institutional consensus is moving toward 'both, not either/or.'" },
          { question: "Should I hold Bitcoin instead of gold?", answer: "Most financial advisors recommend holding both rather than choosing one. Gold provides stability and inflation protection, while Bitcoin offers asymmetric upside. A common approach is 10% gold + 5% Bitcoin alongside traditional assets. If you want to rebalance, services like Offramp let you convert gold directly to Bitcoin." },
        ]}
      />
      {children}
    </>
  );
}

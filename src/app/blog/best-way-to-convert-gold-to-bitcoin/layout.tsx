import type { Metadata } from "next";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "The Best Way to Convert Gold to Bitcoin in 2026 | Offramp",
  description:
    "Compare every method to convert physical gold to Bitcoin — peer-to-peer, exchanges, gold-backed tokens, and direct mail-in services. Find the cheapest, fastest, safest option.",
  alternates: { canonical: "https://offrampgold.com/blog/best-way-to-convert-gold-to-bitcoin" },
  keywords: [
    "best way to convert gold to bitcoin",
    "gold to bitcoin conversion",
    "turn gold into bitcoin",
    "sell gold get bitcoin",
    "physical gold to BTC",
  ],
  openGraph: {
    title: "The Best Way to Convert Gold to Bitcoin in 2026",
    description:
      "Compare every method to convert physical gold to Bitcoin. Find the cheapest, fastest, safest option.",
    url: "https://offrampgold.com/blog/best-way-to-convert-gold-to-bitcoin",
    type: "article",
    publishedTime: "2026-03-14T00:00:00Z",
    authors: ["Yasmine"],
  },
};

export default function BestWayToConvertLayout({
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
          { name: "Best Way to Convert Gold to Bitcoin", url: "https://offrampgold.com/blog/best-way-to-convert-gold-to-bitcoin" },
        ]}
      />
      <ArticleJsonLd
        headline="The Best Way to Convert Gold to Bitcoin in 2026"
        description="Compare every method to convert physical gold to Bitcoin. Find the cheapest, fastest, safest option."
        url="https://offrampgold.com/blog/best-way-to-convert-gold-to-bitcoin"
        datePublished="2026-03-14"
        author="Yasmine"
      />
      <FAQJsonLd
        questions={[
          {
            question: "What is the best way to convert gold to Bitcoin?",
            answer:
              "The best way for most people is a direct mail-in gold-to-Bitcoin service like Offramp. You ship your gold with free insured FedEx, it's tested with an XRF spectrometer on video, and Bitcoin is sent directly to your wallet. This eliminates the middlemen, multiple fees, and counterparty risk of other methods.",
          },
          {
            question: "Can I trade physical gold for Bitcoin on an exchange?",
            answer:
              "Not directly. Crypto exchanges deal in digital assets, not physical gold. You would need to sell your gold for cash first (at a pawn shop, jeweler, or gold buyer), then deposit that cash into a crypto exchange and buy Bitcoin. This two-step process involves more fees and more time.",
          },
          {
            question: "Are gold-backed crypto tokens a good way to convert?",
            answer:
              "Gold-backed tokens like PAXG or XAUT represent digital ownership of gold stored in vaults. You could sell physical gold, buy a gold-backed token, then trade it for Bitcoin. But this adds unnecessary steps and fees. If your goal is to end up with Bitcoin, it's simpler and cheaper to sell gold directly for BTC.",
          },
          {
            question: "How much does it cost to convert gold to Bitcoin?",
            answer:
              "Costs vary by method. Pawn shops take 40-75% of your gold's value. Online gold buyers like Offramp pay 80%+ of spot value. If selling for cash then buying BTC, you also pay exchange fees (0.5-1.5%) and potential bank transfer fees. A direct gold-to-Bitcoin service combines everything into one transparent rate.",
          },
        ]}
      />
      {children}
    </>
  );
}

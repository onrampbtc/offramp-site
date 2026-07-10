// Shared FAQ source for /gold-price — consumed by page.tsx (visible accordion)
// and layout.tsx (FAQPage JSON-LD) so the two never drift.

export const GOLD_PRICE_FAQ: { question: string; answer: string }[] = [
  {
    question: "What is the price of gold today?",
    answer:
      "The live gold spot price is shown at the top of this page in both US dollars and Bitcoin, updated every 60 seconds from live market data. The spot price is quoted per troy ounce (31.1035 grams) of pure 24-karat gold.",
  },
  {
    question: "How much is 14k gold worth per gram today?",
    answer:
      "14k gold is 58.3% pure, so its value per gram is the live 24k gram price multiplied by 0.583. The exact figure updates live in the per-karat table on this page. Note that the melt value is the metal's worth — what a buyer pays depends on their payout rate.",
  },
  {
    question: "What is the difference between the spot price and what I get paid?",
    answer:
      "The spot price is the global market price for pure gold. When you sell jewelry or scrap, you are paid on the melt value (spot price adjusted for the item's actual karat purity and weight), minus the buyer's margin. Offramp pays up to 80% of melt value, versus roughly 35% at a typical pawn shop.",
  },
  {
    question: "How is gold price per gram calculated from the ounce price?",
    answer:
      "Divide the spot price per troy ounce by 31.1035 to get the price per gram of pure 24k gold. For a specific karat, multiply by that karat's purity (10k = 0.417, 14k = 0.583, 18k = 0.75, 22k = 0.917, 24k = 0.999).",
  },
  {
    question: "What is a pennyweight (DWT) of gold worth?",
    answer:
      "A pennyweight (DWT) is 1/20th of a troy ounce, a unit jewelers and dental buyers commonly use. Divide the spot ounce price by 20 to get the price per pennyweight of pure gold; multiply by the karat purity for a specific item.",
  },
  {
    question: "How much is gold worth in Bitcoin?",
    answer:
      "This page shows the live gold-to-Bitcoin ratio: how many BTC one ounce of gold costs, and how much gold one BTC buys. Offramp lets you sell gold and receive payment in Bitcoin instead of cash if you prefer.",
  },
];

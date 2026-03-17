import Link from "next/link";

export default function HowToSellGoldCoinsOnlinePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-gold-500 font-mono text-sm tracking-widest uppercase mb-4">
            Blog
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-cream leading-tight mb-6">
            How to Sell Gold Coins Online: Complete Guide for 2026
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto mb-4">
            Whether you have American Eagles, Krugerrands, or inherited coins
            you can&apos;t identify &mdash; here&apos;s how to sell them
            online for the best possible price.
          </p>
          <p className="text-cream-35 font-mono text-xs tracking-wider">
            March 15, 2026 &middot; By Yasmine &middot; 8 min read
          </p>
        </div>
      </section>

      {/* AEO */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="border border-gold-500/30 rounded-2xl bg-gold-500/[0.04] p-8">
            <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-3">
              Key Takeaway
            </p>
            <p className="text-cream font-body text-lg leading-relaxed">
              Most gold coins are worth their melt value (weight &times;
              purity &times; spot price) plus a small premium. Online gold
              buyers pay 85&ndash;97% of this value &mdash; significantly more
              than pawn shops (40&ndash;60%). Before selling, check whether
              your coins have numismatic (collector) value, which could be
              worth 2&ndash;10&times; melt.
            </p>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Types of Gold Coins */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Bullion vs Numismatic: Know What You Have
            </h2>
            <p className="text-cream-45 font-body leading-relaxed mb-6">
              The first step is understanding whether your coins are bullion
              (valued primarily for their gold content) or numismatic (valued
              for rarity, condition, and collectibility).
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-bg-card border border-cream-10 rounded-2xl p-6">
                <h3 className="font-display text-xl font-semibold text-cream mb-4">
                  Bullion Coins
                </h3>
                <p className="text-sm text-cream-45 mb-4">
                  Modern coins produced for investment. Valued at melt + small
                  premium (3&ndash;8%).
                </p>
                <ul className="space-y-2 text-sm text-cream-45">
                  {[
                    "American Gold Eagle (1 oz, 22K)",
                    "Canadian Gold Maple Leaf (1 oz, 24K)",
                    "South African Krugerrand (1 oz, 22K)",
                    "Austrian Gold Philharmonic (1 oz, 24K)",
                    "American Gold Buffalo (1 oz, 24K)",
                    "Chinese Gold Panda (1 oz, 24K)",
                  ].map((coin) => (
                    <li key={coin} className="flex gap-2">
                      <span className="text-gold-500">&#8226;</span>
                      {coin}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-bg-card border border-cream-10 rounded-2xl p-6">
                <h3 className="font-display text-xl font-semibold text-cream mb-4">
                  Numismatic Coins
                </h3>
                <p className="text-sm text-cream-45 mb-4">
                  Rare or historical coins. May be worth 2&ndash;10&times;
                  melt value to the right buyer.
                </p>
                <ul className="space-y-2 text-sm text-cream-45">
                  {[
                    "Pre-1933 US gold ($2.5, $5, $10, $20)",
                    "Saint-Gaudens Double Eagle",
                    "Liberty Head coins",
                    "Key dates with low mintage",
                    "PCGS/NGC certified MS-65+ coins",
                    "Proof coins and special editions",
                  ].map((coin) => (
                    <li key={coin} className="flex gap-2">
                      <span className="text-gold-500">&#8226;</span>
                      {coin}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Where to Sell */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              5 Places to Sell Gold Coins Online
            </h2>
            <div className="bg-bg-card border border-cream-10 rounded-xl overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-cream-10">
                    <th className="text-left p-4 text-cream font-medium">
                      Option
                    </th>
                    <th className="p-4 text-cream font-medium">Payout</th>
                    <th className="p-4 text-cream font-medium">Speed</th>
                    <th className="p-4 text-cream font-medium">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-cream-45">
                  {[
                    [
                      "Online gold buyer (Offramp)",
                      "85-95%",
                      "5-7 days",
                      "Bullion coins, convenience",
                    ],
                    [
                      "Online coin dealer (APMEX, JM Bullion)",
                      "80-90%",
                      "1-2 weeks",
                      "Bullion with buyback programs",
                    ],
                    [
                      "eBay / peer-to-peer",
                      "90-100%",
                      "1-2 weeks",
                      "Numismatic coins",
                    ],
                    [
                      "Heritage Auctions",
                      "85-95%",
                      "Months",
                      "Rare, high-value coins",
                    ],
                    [
                      "Local coin shop",
                      "75-85%",
                      "Same day",
                      "Quick cash, local expert",
                    ],
                  ].map((row) => (
                    <tr
                      key={row[0]}
                      className="border-b border-cream-10 last:border-0"
                    >
                      <td className="p-4 text-cream font-medium">{row[0]}</td>
                      <td className="p-4 text-center">{row[1]}</td>
                      <td className="p-4 text-center">{row[2]}</td>
                      <td className="p-4 text-center text-xs">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* How to Determine Value */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              How to Determine Your Coins&apos; Value
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Identify the coin",
                  desc: "Note the country, denomination, year, and any mint marks. Search online for the specific coin type and weight.",
                },
                {
                  step: "2",
                  title: "Check gold content",
                  desc: "Most bullion coins list their gold content (e.g., 1 oz fine gold). Multiply weight × purity × current spot price for melt value.",
                },
                {
                  step: "3",
                  title: "Assess condition",
                  desc: "Look for wear, scratches, and damage. Coins in protective cases (especially PCGS/NGC slabs) may have numismatic premiums.",
                },
                {
                  step: "4",
                  title: "Check numismatic value",
                  desc: "Search completed eBay sales or PCGS price guide for your specific coin, year, and grade. This shows actual market value.",
                },
                {
                  step: "5",
                  title: "Get multiple quotes",
                  desc: "Contact 2-3 buyers. For bullion, compare against melt value. For numismatic coins, get at least one specialized appraisal.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 items-start bg-bg-card border border-cream-10 rounded-xl p-5"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                    <span className="text-sm font-mono text-gold-500">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-cream font-medium">{item.title}</h3>
                    <p className="text-sm text-cream-45 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Shipping Tips */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              How to Ship Gold Coins Safely
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Use insured shipping",
                  desc: "Always ship with full insurance coverage. Services like Offramp provide free pre-insured FedEx kits.",
                },
                {
                  title: "Photograph everything",
                  desc: "Take clear photos of each coin (both sides) before packing. This serves as documentation if there's a dispute.",
                },
                {
                  title: "Protect from damage",
                  desc: "Wrap individual coins in soft material. Use coin flips or holders. Prevent coins from touching or rubbing against each other.",
                },
                {
                  title: "Use tracking",
                  desc: "Always use a shipping service with tracking. Never send gold via standard mail without tracking and insurance.",
                },
                {
                  title: "Don't declare contents",
                  desc: "Don't write 'gold coins' on the outside of the package. Use a generic description like 'collectibles' or 'merchandise'.",
                },
                {
                  title: "Keep a manifest",
                  desc: "List every coin you're sending with weight, type, and estimated value. Keep a copy for your records.",
                },
              ].map((tip) => (
                <div
                  key={tip.title}
                  className="bg-bg-card border border-cream-10 rounded-xl p-5"
                >
                  <h3 className="text-cream font-medium mb-2">{tip.title}</h3>
                  <p className="text-sm text-cream-45">{tip.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {[
                {
                  q: "Where is the best place to sell gold coins online?",
                  a: "For bullion coins, online gold buyers like Offramp offer the best combination of payout (85-95% of spot) and convenience (free shipping, insured). For rare or numismatic coins, specialized dealers or auction houses may pay more due to collector premiums.",
                },
                {
                  q: "How much are my gold coins worth?",
                  a: "Bullion coins are worth their gold content × spot price + a small premium (3-8%). Numismatic coins may be worth significantly more based on rarity and condition. Use PCGS price guide or check completed eBay sales for your specific coin.",
                },
                {
                  q: "Should I sell coins for melt or numismatic value?",
                  a: "Modern bullion coins (Eagles, Maples, Krugerrands) sell near melt value. Pre-1933 US gold, key dates, and certified high-grade coins often have significant numismatic premiums. When in doubt, get a numismatic appraisal before selling at melt.",
                },
                {
                  q: "Can I sell gold coins for Bitcoin?",
                  a: "Yes. Offramp accepts gold coins and pays in Bitcoin or cash — your choice. You ship with a free insured kit, receive an XRF-verified valuation, and get paid in BTC to your wallet within 48 hours.",
                },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-bg-card border border-cream-10 rounded-xl"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-cream font-medium hover:text-gold-500 transition-colors">
                    {faq.q}
                    <span className="text-cream-35 group-open:rotate-45 transition-transform text-xl ml-4">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-cream-45 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Related + CTA */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Related Posts
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Best Way to Convert Gold to Bitcoin",
                  href: "/blog/best-way-to-convert-gold-to-bitcoin",
                  tag: "How-To",
                },
                {
                  title: "Gold vs Bitcoin Investment Comparison",
                  href: "/blog/gold-vs-bitcoin-investment-comparison",
                  tag: "Analysis",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group bg-bg-card border border-cream-10 rounded-xl p-5 hover:border-gold-500/30 transition-colors"
                >
                  <span className="text-gold-500 font-mono text-xs">
                    {post.tag}
                  </span>
                  <h3 className="mt-2 text-cream font-medium group-hover:text-gold-500 transition-colors">
                    {post.title} &rarr;
                  </h3>
                </Link>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="bg-bg-card border border-gold-500/20 rounded-2xl p-8 sm:p-12">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-cream mb-3">
                Ready to Sell Your Gold Coins?
              </h2>
              <p className="text-cream-45 max-w-lg mx-auto mb-6">
                Get a free insured shipping kit delivered to your door.
                Professional XRF testing, transparent pricing, and payment in
                cash or Bitcoin.
              </p>
              <Link
                href="/get-kit"
                className="inline-flex items-center gap-2 bg-gold-500 text-bg font-semibold px-6 py-3 rounded-lg hover:bg-gold-400 transition-colors"
              >
                Get Your Free Kit &rarr;
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

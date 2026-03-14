import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Blog post data                                                     */
/* ------------------------------------------------------------------ */
const posts = [
  {
    slug: "should-i-sell-gold-for-bitcoin",
    title: "Should I Sell My Gold for Bitcoin? A 2026 Decision Framework",
    excerpt:
      "Gold and Bitcoin are both stores of value — but they behave very differently. Here's a data-driven framework for deciding whether converting gold to BTC makes sense for your situation.",
    date: "March 14, 2026",
    author: "Yasmine",
    readTime: "8 min read",
    tags: ["Bitcoin", "Gold", "Investment"],
  },
  {
    slug: "best-way-to-convert-gold-to-bitcoin",
    title: "The Best Way to Convert Gold to Bitcoin in 2026",
    excerpt:
      "There are several ways to turn physical gold into Bitcoin — but most involve unnecessary middlemen, fees, and risk. We break down every method and explain why mail-in conversion wins.",
    date: "March 14, 2026",
    author: "Yasmine",
    readTime: "10 min read",
    tags: ["Bitcoin", "How To", "Gold"],
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function BlogIndexPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-gold-500 font-mono text-sm tracking-widest uppercase mb-4">
            Blog
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-cream leading-tight mb-6">
            Gold, Bitcoin &amp; the Future of Money
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto">
            Expert insights on selling gold, converting precious metals to
            Bitcoin, and getting the best value for your assets.
          </p>
        </div>
      </section>

      {/* ── Posts Grid ── */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border border-cream-08 rounded-2xl bg-bg-card p-8 hover:border-gold-500/30 transition-colors group"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-gold-500 font-mono text-xs tracking-widest uppercase border border-gold-500/20 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-cream mb-3 group-hover:text-gold-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-cream-45 font-body leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-cream-35 font-mono text-xs tracking-wider">
                <span>{post.date}</span>
                <span>&middot;</span>
                <span>By {post.author}</span>
                <span>&middot;</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center border-t border-cream-08 pt-16">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-4">
            Ready to Sell Your Gold?
          </h2>
          <p className="text-cream-45 font-body mb-8 max-w-lg mx-auto">
            Get a free insured shipping kit and sell your gold for cash or
            Bitcoin. Offramp pays 80%+ of spot value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-kit"
              className="inline-block bg-gold-gradient text-bg font-body font-semibold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-gold-400/20 transition-all"
            >
              Get Free Kit
            </Link>
            <Link
              href="/gold-calculator"
              className="inline-block border-2 border-gold-500 text-gold-400 font-body font-semibold px-8 py-4 rounded-xl hover:bg-gold-500/10 transition-all"
            >
              Calculate Value
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

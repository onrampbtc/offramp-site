import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Zap,
  Package,
  Clock,
  Sparkles,
  Bitcoin,
  Phone,
  Coins,
  CircleDollarSign,
  ChevronRight,
  CheckCircle2,
  FlaskConical,
  Video,
  Lock,
  TrendingUp,
  Award,
  Scale,
} from "lucide-react";

export default function SellSilverForBitcoinPage() {
  return (
    <main className="min-h-screen bg-bg text-cream font-body">
      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold-500/[0.06] rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold-500/[0.04] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-gold-500/[0.03] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/[0.06] mb-8">
            <Coins className="w-4 h-4 text-gold-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400">
              Silver → Bitcoin
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-light tracking-tight mb-6">
            Sell Silver for{" "}
            <span className="text-gold-shimmer font-normal">Bitcoin</span>
          </h1>

          <p className="text-lg md:text-xl text-cream-60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Convert your silver coins, bars, rounds, and sterling into Bitcoin.
            Free insured shipping, XRF assay under video, BTC payment through Onramp custody.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-kit"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-bg font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              Get Your Free Kit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/gold-to-bitcoin"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold-500/30 text-gold-400 rounded-lg hover:bg-gold-500/[0.06] transition-all duration-300"
            >
              <TrendingUp className="w-4 h-4" />
              Value Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          AEO ANSWER BOX
      ═══════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="border-gold-gradient rounded-2xl p-8 md:p-10">
          <div className="flex items-start gap-4">
            <Sparkles className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
                Quick Answer
              </p>
              <p className="text-cream-60 leading-relaxed">
                <strong className="text-cream">Yes, you can sell silver for Bitcoin.</strong>{" "}
                Offramp accepts all forms of silver — coins (Eagles, Maple Leafs, Morgans), bars,
                rounds, sterling jewelry, and flatware. Ship it free with our insured kit, we assay
                via XRF spectrometer under video, and pay you in Bitcoin through Onramp custody.
                Get competitive rates with full transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SILVER WE ACCEPT
      ═══════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
            What We Accept
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light">
            All Silver. Paid in Bitcoin.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Award,
              title: "Silver Eagles",
              detail: "American Silver Eagles, 1 oz .999 fine silver. All years accepted.",
            },
            {
              icon: Coins,
              title: "Silver Coins",
              detail: "Maple Leafs, Philharmonics, Britannias, Libertads, and all other government-minted silver coins.",
            },
            {
              icon: Scale,
              title: "Bars & Rounds",
              detail: "Any weight .999 silver bars and rounds — 1 oz, 5 oz, 10 oz, 100 oz, and kilo bars.",
            },
            {
              icon: CircleDollarSign,
              title: "Junk Silver",
              detail: "Pre-1965 US coins (dimes, quarters, halves), 90% silver constitutional coins.",
            },
            {
              icon: Package,
              title: "Sterling Silver",
              detail: "Sterling jewelry, flatware, tea sets, candlesticks — anything marked .925 or sterling.",
            },
            {
              icon: Bitcoin,
              title: "Any Silver for BTC",
              detail: "Scrap, industrial, mixed lots — we test everything via XRF and pay based on actual silver content.",
            },
          ].map(({ icon: Icon, title, detail }) => (
            <div
              key={title}
              className="group bg-bg-card border border-cream-08 rounded-xl p-6 hover:border-gold-500/20 transition-all duration-300"
            >
              <Icon className="w-8 h-8 text-gold-400 mb-4" />
              <h3 className="font-display text-lg mb-2">
                {title}
              </h3>
              <p className="text-cream-45 text-sm leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY SILVER TO BITCOIN
      ═══════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
            The Upgrade
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light">
            Why Convert Silver to Bitcoin?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Zap,
              title: "Eliminate Storage Costs",
              description:
                "Silver is bulky — 1,000 oz takes up serious space. Bitcoin stores unlimited value in a digital wallet with zero storage cost.",
            },
            {
              icon: TrendingUp,
              title: "Superior Returns",
              description:
                "Silver has been flat for decades. Bitcoin has outperformed every asset class. Convert dead weight to digital growth.",
            },
            {
              icon: Lock,
              title: "True Scarcity",
              description:
                "Silver supply grows ~1% annually from mining. Bitcoin is capped at 21 million forever — absolutely fixed supply.",
            },
            {
              icon: CheckCircle2,
              title: "Easier to Sell",
              description:
                "Try selling 100 oz of silver at spot price locally — good luck. Bitcoin is liquid 24/7 on global exchanges.",
            },
          ].map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-bg-card border border-cream-08 rounded-xl p-6 hover:border-gold-500/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold-500/[0.08] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h3 className="font-display text-lg mb-2">{title}</h3>
                  <p className="text-cream-45 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRICING
      ═══════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
            Transparent Pricing
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light">
            Better Silver Prices, Paid in Bitcoin
          </h2>
        </div>

        <div className="border-gold-gradient rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-cream-08">
                <th className="text-left p-4 text-cream-45 font-mono text-xs uppercase tracking-wider">Seller</th>
                <th className="text-center p-4 text-cream-45 font-mono text-xs uppercase tracking-wider">% of Melt</th>
                <th className="text-center p-4 text-cream-45 font-mono text-xs uppercase tracking-wider">Bitcoin Option</th>
                <th className="text-center p-4 text-cream-45 font-mono text-xs uppercase tracking-wider">Insured Ship</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-cream-08">
                <td className="p-4 text-cream-60">Pawn Shop</td>
                <td className="p-4 text-center font-mono text-cream-45">30–50%</td>
                <td className="p-4 text-center text-cream-35">No</td>
                <td className="p-4 text-center text-cream-35">N/A</td>
              </tr>
              <tr className="border-b border-cream-08">
                <td className="p-4 text-cream-60">Coin Dealer</td>
                <td className="p-4 text-center font-mono text-cream-45">70–85%</td>
                <td className="p-4 text-center text-cream-35">No</td>
                <td className="p-4 text-center text-cream-35">N/A</td>
              </tr>
              <tr className="border-b border-cream-08">
                <td className="p-4 text-cream-60">Online Buyer</td>
                <td className="p-4 text-center font-mono text-cream-45">65–80%</td>
                <td className="p-4 text-center text-cream-35">No</td>
                <td className="p-4 text-center text-cream-35">Sometimes</td>
              </tr>
              <tr className="bg-gold-500/[0.06]">
                <td className="p-4 font-semibold text-gold-400">Offramp</td>
                <td className="p-4 text-center font-mono font-semibold text-gold-400">80%+</td>
                <td className="p-4 text-center text-gold-400"><CheckCircle2 className="w-5 h-5 mx-auto" /></td>
                <td className="p-4 text-center text-gold-400"><CheckCircle2 className="w-5 h-5 mx-auto" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-center text-cream-35 text-xs mt-4">
          Offramp is the only precious metals buyer offering Bitcoin payment through regulated custody.
        </p>
      </section>

      {/* ═══════════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
            3 Simple Steps
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light">
            How to Sell Silver for Bitcoin
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              icon: Package,
              title: "Get Your Free Kit",
              description:
                "Request a free insured shipping kit with prepaid USPS Priority Mail label and tamper-proof packaging. Silver is heavy — we cover all shipping costs.",
            },
            {
              step: "02",
              icon: FlaskConical,
              title: "XRF Assay Under Video",
              description:
                "Your silver is tested with an XRF spectrometer to determine exact purity and weight. The entire process is recorded on video for full transparency.",
            },
            {
              step: "03",
              icon: Bitcoin,
              title: "Get Paid in Bitcoin",
              description:
                "Accept your offer and receive BTC through Onramp custody within 48 hours. Or choose USD wire — the choice is always yours.",
            },
          ].map(({ step, icon: Icon, title, description }) => (
            <div key={step} className="text-center">
              <div className="w-16 h-16 rounded-full border border-gold-500/20 flex items-center justify-center mx-auto mb-6">
                <span className="font-mono text-gold-400 text-lg">{step}</span>
              </div>
              <Icon className="w-8 h-8 text-gold-400 mx-auto mb-4" />
              <h3 className="font-display text-xl mb-3">{title}</h3>
              <p className="text-cream-45 text-sm leading-relaxed max-w-xs mx-auto">{description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors text-sm"
          >
            See detailed process <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TRUST SIGNALS
      ═══════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Shield, stat: "$100K", label: "Insured Shipping", detail: "Every package fully covered" },
            { icon: Video, stat: "100%", label: "Video Assay", detail: "XRF testing on camera" },
            { icon: Clock, stat: "48hrs", label: "BTC Payment", detail: "Bitcoin within 2 days" },
            { icon: Lock, stat: "Onramp", label: "Regulated Custody", detail: "Institutional-grade Bitcoin custody" },
          ].map(({ icon: Icon, stat, label, detail }) => (
            <div key={label} className="text-center bg-bg-card border border-cream-08 rounded-xl p-6">
              <Icon className="w-6 h-6 text-gold-400 mx-auto mb-3" />
              <p className="font-mono text-2xl text-gold-400 mb-1">{stat}</p>
              <p className="font-display text-sm mb-1">{label}</p>
              <p className="text-cream-35 text-xs">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          EXPERT CTA
      ═══════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="border-gold-gradient rounded-2xl p-8 md:p-10 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-light mb-4">
            Have a Large Silver Collection?
          </h2>
          <p className="text-cream-60 mb-8 max-w-xl mx-auto">
            Selling 100+ oz of silver? We offer dedicated support for large collections, estate
            lots, and dealer buybacks. Get personalized pricing and expedited Bitcoin payment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gold-500/30 text-gold-400 rounded-lg hover:bg-gold-500/[0.06] transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
            <Link
              href="/get-kit"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-bg font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              Get Your Free Kit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INTERNAL LINKS
      ═══════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl font-light">Explore More</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Sell Gold for Bitcoin", description: "Convert gold jewelry, coins, and bullion into BTC.", href: "/sell-gold-for-bitcoin" },
            { title: "Sell Gold Coins for Bitcoin", description: "Eagles, Krugerrands, Maple Leafs, and more to BTC.", href: "/sell-gold-coins-for-bitcoin" },
            { title: "Gold to Bitcoin Calculator", description: "See how much BTC your precious metals are worth.", href: "/gold-to-bitcoin" },
            { title: "How It Works", description: "Step-by-step walkthrough from kit to Bitcoin payment.", href: "/how-it-works" },
            { title: "Live Gold Price", description: "Track the real-time gold and silver spot prices.", href: "/gold-price" },
            { title: "Sell Gold for Cash", description: "Prefer USD? Get wire payment within 48 hours.", href: "/sell" },
          ].map(({ title, description, href }) => (
            <Link
              key={title}
              href={href}
              className="group bg-bg-card border border-cream-08 rounded-xl p-6 hover:border-gold-500/20 transition-all duration-300"
            >
              <h3 className="font-display text-lg mb-2 group-hover:text-gold-400 transition-colors">{title}</h3>
              <p className="text-cream-45 text-sm leading-relaxed">{description}</p>
              <div className="mt-4 flex items-center gap-1 text-gold-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-light mb-6">
            Ready to Convert Silver to{" "}
            <span className="text-gold-shimmer">Bitcoin</span>?
          </h2>
          <p className="text-cream-60 text-lg mb-10 max-w-xl mx-auto">
            Stop paying for storage. Start stacking sats.
            Free kit. No commitment. 48-hour BTC payment.
          </p>
          <Link
            href="/get-kit"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-bg text-lg font-semibold rounded-lg hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-300"
          >
            Get Your Free Shipping Kit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}

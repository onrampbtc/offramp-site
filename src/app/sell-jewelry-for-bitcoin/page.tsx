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
  Gem,
  CircleDollarSign,
  ChevronRight,
  CheckCircle2,
  FlaskConical,
  Video,
  Lock,
  TrendingUp,
  Heart,
  Watch,
  Link2,
} from "lucide-react";

export default function SellJewelryForBitcoinPage() {
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
            <Gem className="w-4 h-4 text-gold-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400">
              Jewelry → Bitcoin
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-light tracking-tight mb-6">
            Sell Jewelry for{" "}
            <span className="text-gold-shimmer font-normal">Bitcoin</span>
          </h1>

          <p className="text-lg md:text-xl text-cream-60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Turn your gold jewelry into Bitcoin — any karat, any condition.
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
              Gold→BTC Calculator
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
                <strong className="text-cream">Yes, you can sell gold jewelry for Bitcoin.</strong>{" "}
                Offramp accepts all gold jewelry — rings, chains, bracelets, watches, broken pieces,
                and estate collections — in any karat and any condition. Ship with our free insured
                kit, get an XRF assay under video, and receive Bitcoin through Onramp custody.
                We pay 80%+ of melt value — far more than pawn shops or local jewelers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          JEWELRY WE ACCEPT
      ═══════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
            What We Accept
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light">
            All Gold Jewelry. Paid in Bitcoin.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Gem,
              title: "Rings & Bands",
              items: "Wedding bands, engagement rings, class rings, signet rings — any karat",
            },
            {
              icon: Link2,
              title: "Chains & Necklaces",
              items: "Gold chains, pendants, lockets, chokers — including broken chains",
            },
            {
              icon: Heart,
              title: "Bracelets & Bangles",
              items: "Tennis bracelets, cuffs, bangles, charm bracelets, anklets",
            },
            {
              icon: Watch,
              title: "Watches",
              items: "Gold watches, watch bands, watch cases — working or broken",
            },
            {
              icon: CircleDollarSign,
              title: "Broken & Scrap",
              items: "Single earrings, broken clasps, bent pieces — we pay by gold weight",
            },
            {
              icon: Bitcoin,
              title: "Estate Jewelry",
              items: "Inherited collections, mixed lots, vintage pieces — all converted to BTC",
            },
          ].map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="group bg-bg-card border border-cream-08 rounded-xl p-6 hover:border-gold-500/20 transition-all duration-300"
            >
              <Icon className="w-8 h-8 text-gold-400 mb-4" />
              <h3 className="font-display text-lg mb-2">{title}</h3>
              <p className="text-cream-45 text-sm leading-relaxed">{items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY SELL JEWELRY FOR BITCOIN
      ═══════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
            Why Bitcoin
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light">
            Why Convert Jewelry to Bitcoin?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: TrendingUp,
              title: "Unlock Dormant Value",
              description:
                "Jewelry sitting in a drawer earns nothing. Convert it to Bitcoin — an appreciating asset with a 15-year track record of outperforming every other asset class.",
            },
            {
              icon: Zap,
              title: "Condition Doesn't Matter",
              description:
                "Pawn shops lowball you on damaged pieces. Offramp pays by gold weight — broken chains, single earrings, and bent rings are worth the same as pristine jewelry.",
            },
            {
              icon: Lock,
              title: "No Middleman Markups",
              description:
                "Jewelers take 30-50% margins reselling your pieces. We skip the middleman and pay you directly for the gold content, converting to Bitcoin at spot rates.",
            },
            {
              icon: Shield,
              title: "Fully Insured Process",
              description:
                "Ship with confidence using our free kit with up to $100,000 insurance coverage. XRF assay under video ensures full transparency. Decline? We return everything free.",
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
          PRICING — OFFRAMP VS COMPETITORS
      ═══════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
            Transparent Pricing
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light">
            More for Your Jewelry, Paid in Bitcoin
          </h2>
        </div>

        <div className="border-gold-gradient rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-cream-08">
                <th className="text-left p-4 text-cream-45 font-mono text-xs uppercase tracking-wider">
                  Buyer
                </th>
                <th className="text-center p-4 text-cream-45 font-mono text-xs uppercase tracking-wider">
                  % of Melt Value
                </th>
                <th className="text-center p-4 text-cream-45 font-mono text-xs uppercase tracking-wider">
                  Bitcoin Option
                </th>
                <th className="text-center p-4 text-cream-45 font-mono text-xs uppercase tracking-wider">
                  Accepts Broken
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-cream-08">
                <td className="p-4 text-cream-60">Pawn Shop</td>
                <td className="p-4 text-center font-mono text-cream-45">20–55%</td>
                <td className="p-4 text-center text-cream-35">No</td>
                <td className="p-4 text-center text-cream-35">Sometimes</td>
              </tr>
              <tr className="border-b border-cream-08">
                <td className="p-4 text-cream-60">Local Jeweler</td>
                <td className="p-4 text-center font-mono text-cream-45">50–70%</td>
                <td className="p-4 text-center text-cream-35">No</td>
                <td className="p-4 text-center text-cream-35">Rarely</td>
              </tr>
              <tr className="border-b border-cream-08">
                <td className="p-4 text-cream-60">Cash for Gold (Mail-in)</td>
                <td className="p-4 text-center font-mono text-cream-45">60–75%</td>
                <td className="p-4 text-center text-cream-35">No</td>
                <td className="p-4 text-center text-cream-45">Yes</td>
              </tr>
              <tr className="bg-gold-500/[0.06]">
                <td className="p-4 font-semibold text-gold-400">Offramp</td>
                <td className="p-4 text-center font-mono font-semibold text-gold-400">80%+</td>
                <td className="p-4 text-center text-gold-400">
                  <CheckCircle2 className="w-5 h-5 mx-auto" />
                </td>
                <td className="p-4 text-center text-gold-400">
                  <CheckCircle2 className="w-5 h-5 mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-center text-cream-35 text-xs mt-4">
          Offramp pays by pure gold weight — condition and appearance don&apos;t affect your payout.
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
            How to Sell Jewelry for Bitcoin
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              icon: Package,
              title: "Get Your Free Kit",
              description:
                "Request a free insured shipping kit with a prepaid USPS Priority Mail label and tamper-proof packaging. Arrives in 2–3 days.",
            },
            {
              step: "02",
              icon: FlaskConical,
              title: "We Assay Under Video",
              description:
                "Your jewelry is tested with an XRF spectrometer to determine exact gold content and karat. The entire process is recorded on video for transparency.",
            },
            {
              step: "03",
              icon: Bitcoin,
              title: "Get Paid in Bitcoin",
              description:
                "Accept your offer and receive BTC through Onramp custody within 48 hours. Decline and we return everything at no cost.",
            },
          ].map(({ step, icon: Icon, title, description }) => (
            <div key={step} className="text-center">
              <div className="w-16 h-16 rounded-full border border-gold-500/20 flex items-center justify-center mx-auto mb-6">
                <span className="font-mono text-gold-400 text-lg">{step}</span>
              </div>
              <Icon className="w-8 h-8 text-gold-400 mx-auto mb-4" />
              <h3 className="font-display text-xl mb-3">{title}</h3>
              <p className="text-cream-45 text-sm leading-relaxed max-w-xs mx-auto">
                {description}
              </p>
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
            {
              icon: Shield,
              stat: "$100K",
              label: "Insured Shipping",
              detail: "Every package fully covered",
            },
            {
              icon: Video,
              stat: "100%",
              label: "Video Assay",
              detail: "XRF testing on camera",
            },
            {
              icon: Clock,
              stat: "48hrs",
              label: "BTC Payment",
              detail: "Bitcoin within 2 days",
            },
            {
              icon: Lock,
              stat: "Onramp",
              label: "Regulated Custody",
              detail: "Institutional-grade Bitcoin custody",
            },
          ].map(({ icon: Icon, stat, label, detail }) => (
            <div
              key={label}
              className="text-center bg-bg-card border border-cream-08 rounded-xl p-6"
            >
              <Icon className="w-6 h-6 text-gold-400 mx-auto mb-3" />
              <p className="font-mono text-2xl text-gold-400 mb-1">{stat}</p>
              <p className="font-display text-sm mb-1">{label}</p>
              <p className="text-cream-35 text-xs">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TALK TO AN EXPERT
      ═══════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="border-gold-gradient rounded-2xl p-8 md:p-10 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-light mb-4">
            Have a Large Jewelry Collection?
          </h2>
          <p className="text-cream-60 mb-8 max-w-xl mx-auto">
            Selling an estate collection or large lot of jewelry? Contact us for bulk pricing,
            priority processing, and enhanced insurance coverage. We handle collections of any size.
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
            {
              title: "Gold to Bitcoin Calculator",
              description: "See how much BTC your jewelry is worth at current spot prices.",
              href: "/gold-to-bitcoin",
            },
            {
              title: "Sell Gold for Bitcoin",
              description: "All types of gold accepted — coins, bullion, dental, and more.",
              href: "/sell-gold-for-bitcoin",
            },
            {
              title: "Sell Gold Coins for Bitcoin",
              description: "Convert Eagles, Krugerrands, Maple Leafs, and more to BTC.",
              href: "/sell-gold-coins-for-bitcoin",
            },
            {
              title: "Sell Silver for Bitcoin",
              description: "Silver coins, bars, rounds, and sterling converted to BTC.",
              href: "/sell-silver-for-bitcoin",
            },
            {
              title: "How It Works",
              description: "Detailed walkthrough of our process from kit to Bitcoin.",
              href: "/how-it-works",
            },
            {
              title: "Sell Gold for Cash",
              description: "Prefer USD? Get wire payment within 48 hours instead.",
              href: "/sell",
            },
          ].map(({ title, description, href }) => (
            <Link
              key={title}
              href={href}
              className="group bg-bg-card border border-cream-08 rounded-xl p-6 hover:border-gold-500/20 transition-all duration-300"
            >
              <h3 className="font-display text-lg mb-2 group-hover:text-gold-400 transition-colors">
                {title}
              </h3>
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
            Ready to Convert Jewelry to{" "}
            <span className="text-gold-shimmer">Bitcoin</span>?
          </h2>
          <p className="text-cream-60 text-lg mb-10 max-w-xl mx-auto">
            Your jewelry is worth more than you think. Any karat, any condition.
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

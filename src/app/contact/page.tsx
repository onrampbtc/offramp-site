import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <p className="text-xs font-body uppercase tracking-[0.3em] text-gold-500 mb-6">
            Get In Touch
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.1]">
            Contact Us
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-cream-60 font-body leading-relaxed">
            Have questions about selling your gold? We&rsquo;re here to help.
            Reach out and our team will get back to you quickly.
          </p>
        </div>
      </section>

      {/* ── Contact Methods ── */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            <ContactCard
              icon={
                <svg className="h-8 w-8 text-gold-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              }
              title="Email"
              description="Send us a message anytime. We typically respond within a few hours during business days."
              action={
                <a
                  href="mailto:hello@offrampgold.com"
                  className="text-gold-500 hover:text-gold-400 transition-colors font-body font-medium"
                >
                  hello@offrampgold.com
                </a>
              }
            />
            <ContactCard
              icon={
                <svg className="h-8 w-8 text-gold-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Business Hours"
              description="Our team is available to assist you during these hours."
              action={
                <span className="text-cream font-body font-medium">
                  Mon&ndash;Fri, 9 AM&ndash;5 PM CT
                </span>
              }
            />
            <ContactCard
              icon={
                <svg className="h-8 w-8 text-gold-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              }
              title="FAQ"
              description="Find instant answers to common questions about selling gold with Offramp."
              action={
                <Link
                  href="/faq"
                  className="text-gold-500 hover:text-gold-400 transition-colors font-body font-medium"
                >
                  Visit our FAQ &rarr;
                </Link>
              }
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
            Ready to Sell?
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            Get Your Free Kit
          </h2>
          <p className="text-cream-60 font-body text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Request a free insured shipping kit and sell your gold for top dollar.
            No fees, no obligation &mdash; just the best payout.
          </p>
          <Link
            href="/get-kit"
            className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-bg transition-transform hover:scale-105"
          >
            Request Your Free Kit
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── Internal Links ── */}
      <section className="py-20 px-6 border-t border-cream-08">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "How It Works", href: "/how-it-works" },
              { label: "Gold Calculator", href: "/calculators" },
              { label: "Reviews", href: "/reviews" },
              { label: "Compare Gold Buyers", href: "/compare" },
              { label: "About Offramp", href: "/about" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-cream-15 px-5 py-2.5 font-body text-sm text-cream-60 transition-all hover:border-gold-500/30 hover:text-gold-500"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  title,
  description,
  action,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-cream-08 bg-bg-card p-8 text-center">
      <div className="flex justify-center mb-5">{icon}</div>
      <h3 className="font-display text-xl font-semibold text-cream mb-3">
        {title}
      </h3>
      <p className="text-cream-60 font-body text-sm leading-relaxed mb-5">
        {description}
      </p>
      {action}
    </div>
  );
}

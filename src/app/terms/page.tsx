import Link from "next/link";

export default function TermsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center px-6 text-center">
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
            Legal
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.1]">
            Terms of Service
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-cream-60 font-body leading-relaxed">
            The terms and conditions governing the use of Offramp&rsquo;s
            gold-selling platform and services.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-20 sm:py-28 px-6 border-t border-cream-08">
        <div className="max-w-3xl mx-auto prose-custom">
          <p className="text-cream-60 font-body leading-relaxed text-base mb-4">
            <strong className="text-cream">Effective Date:</strong> January 1,
            2025
          </p>
          <p className="text-cream-60 font-body leading-relaxed text-base mb-10">
            Welcome to Offramp. By accessing or using our website and services,
            you agree to be bound by these Terms of Service. If you do not agree,
            please do not use our services.
          </p>

          <TermsSection title="1. Services">
            <p>
              Offramp provides a platform for individuals to sell their gold
              items (jewelry, coins, bars, dental gold, and scrap gold) in
              exchange for payment via bank wire or Bitcoin. Our services include
              providing free insured shipping kits, XRF spectrometer testing, and
              payment processing.
            </p>
          </TermsSection>

          <TermsSection title="2. Eligibility">
            <p>
              You must be at least 18 years old and have the legal right to sell
              the gold items you submit. By using our services, you represent that
              all items you send are legally owned by you and are not stolen,
              counterfeit, or subject to any liens or claims.
            </p>
          </TermsSection>

          <TermsSection title="3. The Selling Process">
            <ul>
              <li>
                <strong className="text-cream">Shipping Kit:</strong> We provide
                a free insured shipping kit. You are responsible for packaging
                your items securely using the provided materials.
              </li>
              <li>
                <strong className="text-cream">Testing:</strong> Upon receipt, we
                test your gold using an XRF spectrometer under video. Test results
                determine the purity and weight of your items.
              </li>
              <li>
                <strong className="text-cream">Offer:</strong> We send you an
                offer based on the current market price of gold and the tested
                purity and weight of your items.
              </li>
              <li>
                <strong className="text-cream">Acceptance:</strong> You may
                accept or decline the offer. If you decline, we return your items
                at no cost.
              </li>
              <li>
                <strong className="text-cream">Payment:</strong> Upon acceptance,
                payment is processed within 24&ndash;48 hours via your chosen
                method (bank wire or Bitcoin).
              </li>
            </ul>
          </TermsSection>

          <TermsSection title="4. Pricing">
            <p>
              Offers are based on the spot price of gold at the time of testing.
              Gold prices fluctuate continuously, and the offer you receive
              reflects the market price at the time your items are evaluated. Once
              you accept an offer, the price is locked in regardless of subsequent
              market changes.
            </p>
          </TermsSection>

          <TermsSection title="5. Shipping & Insurance">
            <p>
              All shipments sent using our provided shipping kit are fully insured
              during transit. Offramp is not responsible for items shipped without
              using our provided materials or labels. We recommend not sending
              items with sentimental value that cannot be replaced.
            </p>
          </TermsSection>

          <TermsSection title="6. Returns">
            <p>
              If you decline our offer, we will return your items via insured
              shipping at no cost to you. Items are returned in the same condition
              they were received. Return shipping typically takes 3&ndash;5
              business days.
            </p>
          </TermsSection>

          <TermsSection title="7. User Conduct">
            <p>You agree not to:</p>
            <ul>
              <li>Submit stolen, counterfeit, or illegally obtained items</li>
              <li>Misrepresent the nature or ownership of items</li>
              <li>
                Use our services for any unlawful purpose or in violation of any
                applicable laws
              </li>
              <li>
                Interfere with or disrupt our website, servers, or networks
              </li>
              <li>
                Attempt to gain unauthorized access to our systems or accounts
              </li>
            </ul>
          </TermsSection>

          <TermsSection title="8. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, Offramp shall not be liable
              for any indirect, incidental, special, consequential, or punitive
              damages arising from your use of our services. Our total liability
              shall not exceed the amount paid to you for the relevant
              transaction.
            </p>
          </TermsSection>

          <TermsSection title="9. Intellectual Property">
            <p>
              All content on the Offramp website, including text, graphics, logos,
              images, and software, is the property of Offramp and is protected
              by intellectual property laws. You may not reproduce, distribute, or
              create derivative works without our written consent.
            </p>
          </TermsSection>

          <TermsSection title="10. Indemnification">
            <p>
              You agree to indemnify and hold harmless Offramp, its officers,
              directors, employees, and agents from any claims, damages, losses,
              or expenses arising from your use of our services or violation of
              these Terms.
            </p>
          </TermsSection>

          <TermsSection title="11. Modifications">
            <p>
              We reserve the right to modify these Terms of Service at any time.
              Changes will be posted on this page with an updated effective date.
              Continued use of our services after changes constitutes acceptance
              of the revised Terms.
            </p>
          </TermsSection>

          <TermsSection title="12. Governing Law">
            <p>
              These Terms are governed by and construed in accordance with the
              laws of the United States. Any disputes arising from these Terms
              shall be resolved through binding arbitration.
            </p>
          </TermsSection>

          <TermsSection title="13. Contact">
            <p>
              For questions about these Terms of Service, please contact us at{" "}
              <a
                href="mailto:legal@offrampgold.com"
                className="text-gold-500 hover:text-gold-400 transition-colors"
              >
                legal@offrampgold.com
              </a>{" "}
              or visit our{" "}
              <Link
                href="/contact"
                className="text-gold-500 hover:text-gold-400 transition-colors"
              >
                Contact page
              </Link>
              .
            </p>
          </TermsSection>
        </div>
      </section>
    </>
  );
}

function TermsSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-cream mb-4">
        {title}
      </h2>
      <div className="text-cream-60 font-body leading-relaxed text-base space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-cream-60">
        {children}
      </div>
    </div>
  );
}

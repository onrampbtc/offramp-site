import Link from "next/link";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-cream-60 font-body leading-relaxed">
            How Offramp collects, uses, and protects your personal information.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-20 sm:py-28 px-6 border-t border-cream-08">
        <div className="max-w-3xl mx-auto prose-custom">
          <p className="text-cream-60 font-body leading-relaxed text-base mb-4">
            <strong className="text-cream">Effective Date:</strong> January 1, 2025
          </p>
          <p className="text-cream-60 font-body leading-relaxed text-base mb-10">
            Offramp (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            is committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when you
            visit our website or use our services.
          </p>

          <PolicySection title="1. Information We Collect">
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong className="text-cream">Personal Information:</strong>{" "}
                Name, email address, phone number, mailing address, and payment
                information (bank account details or Bitcoin wallet address) that
                you provide when using our services.
              </li>
              <li>
                <strong className="text-cream">Shipment Information:</strong>{" "}
                Details about the gold items you send us, including descriptions,
                weights, and test results.
              </li>
              <li>
                <strong className="text-cream">Usage Data:</strong> Information
                about how you interact with our website, including IP address,
                browser type, pages visited, and time spent on pages.
              </li>
              <li>
                <strong className="text-cream">Cookies:</strong> We use cookies
                and similar technologies to enhance your experience and gather
                analytics data.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="2. How We Use Your Information">
            <p>We use your information to:</p>
            <ul>
              <li>Process your gold transactions and send payments</li>
              <li>Provide shipping kits and coordinate logistics</li>
              <li>Communicate with you about your account and transactions</li>
              <li>Improve our website, services, and customer experience</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Prevent fraud and protect the security of our platform</li>
            </ul>
          </PolicySection>

          <PolicySection title="3. Information Sharing">
            <p>
              We do not sell, trade, or rent your personal information. We may
              share your data with:
            </p>
            <ul>
              <li>
                <strong className="text-cream">Service Providers:</strong>{" "}
                Trusted third parties who assist with payment processing,
                shipping, and analytics.
              </li>
              <li>
                <strong className="text-cream">Legal Requirements:</strong> When
                required by law, regulation, or legal process.
              </li>
              <li>
                <strong className="text-cream">Business Transfers:</strong> In
                connection with a merger, acquisition, or sale of assets.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="4. Data Security">
            <p>
              We implement industry-standard security measures to protect your
              personal information, including encryption, secure servers, and
              access controls. However, no method of transmission over the
              internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </PolicySection>

          <PolicySection title="5. Data Retention">
            <p>
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this policy, comply with legal
              obligations, resolve disputes, and enforce our agreements.
              Transaction records are retained as required by applicable law.
            </p>
          </PolicySection>

          <PolicySection title="6. Your Rights">
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul>
              <li>Access, correct, or delete your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of the data we hold about you</li>
              <li>Restrict or object to certain data processing activities</li>
            </ul>
            <p>
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:privacy@offrampgold.com"
                className="text-gold-500 hover:text-gold-400 transition-colors"
              >
                privacy@offrampgold.com
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection title="7. Third-Party Links">
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of those sites and encourage
              you to review their privacy policies.
            </p>
          </PolicySection>

          <PolicySection title="8. Children&rsquo;s Privacy">
            <p>
              Our services are not directed to individuals under 18 years of age.
              We do not knowingly collect personal information from children.
            </p>
          </PolicySection>

          <PolicySection title="9. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will be
              posted on this page with an updated effective date. Your continued
              use of our services after changes are posted constitutes acceptance
              of the updated policy.
            </p>
          </PolicySection>

          <PolicySection title="10. Contact Us">
            <p>
              If you have questions or concerns about this Privacy Policy, please
              contact us:
            </p>
            <ul>
              <li>
                <strong className="text-cream">Email:</strong>{" "}
                <a
                  href="mailto:privacy@offrampgold.com"
                  className="text-gold-500 hover:text-gold-400 transition-colors"
                >
                  privacy@offrampgold.com
                </a>
              </li>
              <li>
                <strong className="text-cream">Website:</strong>{" "}
                <Link
                  href="/contact"
                  className="text-gold-500 hover:text-gold-400 transition-colors"
                >
                  offrampgold.com/contact
                </Link>
              </li>
            </ul>
          </PolicySection>
        </div>
      </section>
    </>
  );
}

function PolicySection({
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

# Offramp Decision Log

Material operating decisions are recorded here in reverse chronological order. Do not store credentials, payment details, recovery material, private identifiers, or API keys in this file.

## 2026-07-09 — Workspace DNS cutover started

- **Owner:** Michael Tanguma
- **Context:** Namecheap DNS was updated after Workspace mailbox and aliases were created.
- **Decision:** Route root-domain mail to Google Workspace and use Google as the root-domain SPF sender while keeping DMARC in monitor mode during setup.
- **Evidence:** Public DNS shows MX `smtp.google.com` priority `1`, root SPF `v=spf1 include:_spf.google.com ~all`, and DMARC `v=DMARC1; p=none; pct=100; adkim=r; aspf=r`. Google setup page shows Gmail is now ready. Google DKIM is not yet present.
- **Operational note:** Generate the Google DKIM TXT record, then run external send/receive/reply tests for the named mailbox and aliases before marking business email done.
- **Review trigger:** Any delivery failure, any additional root-domain sender, Resend/HubSpot mail setup, or DMARC policy tightening.

## 2026-07-09 — Workspace mailbox and aliases created

- **Owner:** Michael Tanguma
- **Context:** The Google Workspace signup moved from the contact/payment handoff into the Admin Console, and the user profile is now visible.
- **Decision:** Use `michael@offrampgold.com` as the named owner mailbox and add public aliases `hello@offrampgold.com`, `support@offrampgold.com`, and `clients@offrampgold.com` to the same mailbox.
- **Evidence:** Admin Console user profile showed `michael@offrampgold.com` as active, created Jul 9, 2026, with those three aliases listed under alternate email addresses.
- **Operational note:** Superseded by the Workspace DNS cutover entry above. Google DKIM and send/receive tests remain open.
- **Review trigger:** Before publishing any customer-facing email address, before changing MX records, after first successful inbound/outbound tests, and during the first monthly account audit.

## 2026-07-09 — Google Workspace plan and human-email architecture

- **Owner:** Michael Tanguma
- **Context:** Offramp currently uses Namecheap email forwarding and needs a secure, fully functional business mailbox before additional vendor and customer systems are configured.
- **Options considered:** Continue forwarding; buy Workspace Business Starter with an annual commitment; buy Workspace Business Starter on flexible monthly billing.
- **Decision:** Use Google Workspace Business Starter on flexible monthly billing with one named paid user, initially `michael@offrampgold.com`. Route `hello@offrampgold.com` to the named mailbox as an alias. Use a separate Resend sending subdomain for application email after human email is working.
- **Reasoning:** Flexible monthly billing preserves reversibility for a small premium. A named mailbox creates clear ownership; the public alias avoids paying for an unnecessary second user. A Resend subdomain separates application-mail reputation from person-to-person mail.
- **What this displaces:** Namecheap forwarding as the production mail service. It remains in place only until the tested Workspace cutover.
- **Approval:** Michael explicitly approved the monthly plan and authorized setup assistance. He retains direct control of payment, credentials, MFA, recovery material, and secrets.
- **Reversible:** Yes. The plan can be canceled under the provider's then-current terms, and DNS can be moved to another mail provider. Preserve a tested rollback path during cutover.
- **Review trigger:** First monthly account audit, any deliverability issue, addition of another employee, or material sending-volume growth.

## 2026-07-09 — COO privacy and browser-control contract

- **Owner:** Michael Tanguma
- **Context:** Michael authorized Codex to act as Offramp's COO and requested explicit honesty and transparency about privacy, memory, and browser control.
- **Decision:** Durable memory lives in inspectable repository documents. Interactive setup uses the visible Codex in-app browser by default. Michael personally enters passwords, payment data, MFA/verification codes, recovery material, and secrets. Codex pauses before purchases, DNS cutovers, privilege changes, irreversible submissions, or unexpected permission/terms changes.
- **Reasoning:** This keeps business memory auditable and keeps sensitive authentication and financial data under Michael's direct control while still allowing Codex to perform surrounding operational work.
- **What this displaces:** Hidden assumptions, secret collection in chat, opaque background browser automation, and unverifiable claims that an external task is complete.
- **Reversible:** Yes. Michael may interrupt, take over, narrow, or revoke browser control at any time.
- **Review trigger:** Any security incident, material tool change, addition of staff, or Michael's request.

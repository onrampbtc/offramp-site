# Offramp Decision Log

Material operating decisions are recorded here in reverse chronological order. Do not store credentials, payment details, recovery material, private identifiers, or API keys in this file.

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

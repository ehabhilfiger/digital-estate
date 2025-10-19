import Link from 'next/link';

const termsSections = [
  {
    title: 'Engagement scope',
    items: [
      'All discovery, design, and deployment work is delivered under a signed Statement of Work or Master Services Agreement.',
      'Hardware procurement is invoiced at cost with lead times disclosed before purchase.',
      'Support SLAs and concierge access windows are detailed in your project schedule.',
    ],
  },
  {
    title: 'Payment terms',
    items: [
      'Deposits are due upon signature. Remaining installments follow the milestones outlined in the engagement letter.',
      'Late invoices accrue 1.5% monthly service charges after 15 days past due.',
      'Travel expenses and third-party licenses are billed separately with itemized receipts.',
    ],
  },
  {
    title: 'Confidentiality & security',
    items: [
      'All client materials are treated as confidential, safeguarded inside segmented vaults with least-privilege access.',
      'We sign HIPAA BAAs, ABA confidentiality agreements, or custom NDAs as required.',
      'Incident response obligations and notification windows are defined before production cutover.',
    ],
  },
  {
    title: 'Liability',
    items: [
      'Digital Estate Architect maintains professional liability insurance. Direct damages are capped at the value of fees paid in the preceding 12 months.',
      'We are not liable for third-party outages, force majeure events, or unsupported hardware modifications made outside our control.',
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white/80">
      <div className="mx-auto max-w-4xl px-4 py-24">
        <Link href="/" className="text-xs uppercase tracking-[0.24em] text-white/50 transition hover:text-white">
          Digital Estate Architect
        </Link>
        <h1 className="mt-4 text-4xl font-semibold text-white">Terms of Service</h1>
        <p className="mt-3 text-sm text-white/60">
          Last updated {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
        <p className="mt-6 text-base text-white/70">
          These terms govern consulting, deployment, and concierge services rendered by Digital Estate Architect.
        </p>
        <div className="mt-10 space-y-8">
          {termsSections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              <ul className="mt-3 space-y-3 text-sm leading-relaxed text-white/70">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
          <h2 className="text-lg font-semibold text-white">Questions</h2>
          <p className="mt-3">Reach our legal desk at defcon5ready@gmail.com for contract language or compliance approvals.</p>
        </div>
      </div>
    </main>
  );
}

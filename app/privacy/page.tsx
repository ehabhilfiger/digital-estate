import Link from 'next/link';

const policySections = [
  {
    title: 'Data collection',
    paragraphs: [
      'We collect contact details, company information, and project context when you request a consultation. Logs from infrastructure monitoring engagements are stored inside secure, access-controlled vaults.',
    ],
  },
  {
    title: 'Data use',
    paragraphs: [
      'Information is used to scope engagements, deliver contracted services, and maintain compliance records. We do not sell or rent personal data and only share details with vetted sub-processors under written agreements.',
    ],
  },
  {
    title: 'Retention & deletion',
    paragraphs: [
      'Client files are retained for the duration of an engagement plus 12 months unless your contract specifies otherwise. You can request deletion by emailing concierge@backupestate.com.',
    ],
  },
  {
    title: 'Your rights',
    paragraphs: [
      'You may request access, correction, or export of stored information. GDPR and CCPA requests are answered within 30 days. HIPAA Business Associate Agreements are available for covered entities.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white/80">
      <div className="mx-auto max-w-4xl px-4 py-24">
        <Link href="/" className="text-xs uppercase tracking-[0.24em] text-white/50 transition hover:text-white">
          Digital Estate Architect
        </Link>
        <h1 className="mt-4 text-4xl font-semibold text-white">Privacy Policy</h1>
        <p className="mt-3 text-sm text-white/60">
          Last updated {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
        <p className="mt-6 text-base text-white/70">
          This policy outlines how we handle personal and operational data across consultations, infrastructure deployments, and concierge services.
        </p>
        <div className="mt-10 space-y-8">
          {policySections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              {section.paragraphs.map((copy) => (
                <p key={copy} className="mt-3 text-sm leading-relaxed text-white/70">
                  {copy}
                </p>
              ))}
            </section>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
          <h2 className="text-lg font-semibold text-white">Contact</h2>
          <p className="mt-3">concierge@backupestate.com • +1 (773) 920-0030 • Chicago, IL</p>
        </div>
      </div>
    </main>
  );
}

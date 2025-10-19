import Link from 'next/link';

const compliancePillars = [
  {
    title: 'HIPAA & medical privacy',
    copy: 'We operate under signed BAAs, encrypt PHI at rest and in transit, and document administrative, physical, and technical safeguards.',
  },
  {
    title: 'ABA confidentiality',
    copy: 'Law firm deployments include privileged matter isolation, tamper-evident audit logs, and role-based access per partner directives.',
  },
  {
    title: 'GDPR readiness',
    copy: 'Data mapping, minimization, and DPA templates support EU resident engagements with defined breach notification procedures.',
  },
];

const auditPractices = [
  'Quarterly access reviews with least-privilege enforcement.',
  'Immutable backup snapshots with cross-region replication.',
  'Vendor risk assessments for any sub-processor touching client environments.',
  'Continuous monitoring with documented incident response drills.',
];

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white/80">
      <div className="mx-auto max-w-4xl px-4 py-24">
        <Link href="/" className="text-xs uppercase tracking-[0.24em] text-white/50 transition hover:text-white">
          Digital Estate Architect
        </Link>
        <h1 className="mt-4 text-4xl font-semibold text-white">Compliance & GDPR Center</h1>
        <p className="mt-4 text-base text-white/70">
          We align deployments with regulated industry requirements and maintain documentation for audits across healthcare, legal, and financial engagements.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {compliancePillars.map(({ title, copy }) => (
            <div key={title} className="rounded-2xl border border-white/12 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{copy}</p>
            </div>
          ))}
        </div>
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-white">Evidence package highlights</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/70">
            {auditPractices.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
          <h2 className="text-lg font-semibold text-white">Request documentation</h2>
          <p className="mt-3">Email defcon5ready@gmail.com to request SOC 2 bridge letters, HIPAA BAAs, GDPR DPAs, or incident response summaries.</p>
        </section>
      </div>
    </main>
  );
}

import Link from 'next/link';

const coverageBands = [
  {
    label: 'Foundation',
    response: '< 4 business hours for priority tickets',
    recovery: 'Backups verified daily, restore drills quarterly',
    notes: 'Concierge runway optional at $450+/mo after the included 90 days.',
  },
  {
    label: 'Estate',
    response: '< 30 minutes for P1, < 2 hours for P2',
    recovery: 'Failover rehearsal semi-annually with immutable backup validation every month',
    notes: 'Includes 12 months of runway; renewals begin at $3.5k+/mo to maintain 24/7 coverage.',
  },
  {
    label: 'Architect',
    response: '< 15 minutes for P1, < 60 minutes for P2',
    recovery: 'Quarterly red-team simulations and monthly GPU estate health reviews',
    notes: 'Concierge renewals start at $2.5k+/mo aligned to a 60% services margin for dedicated architects and automation upkeep.',
  },
];

const escalationSteps = [
  'Support desk triages and acknowledges incidents via Signal, email, or hotline.',
  'Principal architect joins live bridge for P1 issues and coordinates vendor escalations.',
  'Remediation steps are documented in the runbook with clear rollback checkpoints.',
  'After-action report delivered within 48 hours with next steps and mitigation owners.',
];

const changeControl = [
  'All production changes tracked in the client portal with approval workflows.',
  'Maintenance windows scheduled jointly with client stakeholders.',
  'Rollback procedures rehearsed before major upgrades or hardware swaps.',
];

export default function ServiceLevelAgreementPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white/80">
      <div className="mx-auto max-w-5xl px-4 py-24">
        <Link href="/" className="text-xs uppercase tracking-[0.24em] text-white/50 transition hover:text-white">
          Digital Estate Architect
        </Link>
        <h1 className="mt-4 text-4xl font-semibold text-white">Service Level & Support Commitments</h1>
        <p className="mt-4 text-base text-white/70 max-w-3xl">
          Our SLAs reflect the investment tiers you see across Foundation, Estate, and Architect deployments. Hardware ships at cost; the margins on labor and concierge coverage fund the response team that keeps your digital estate resilient.
        </p>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {coverageBands.map((band) => (
            <div key={band.label} className="rounded-2xl border border-white/12 bg-white/5 p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">{band.label} tier</div>
              <div className="mt-3 text-lg font-semibold text-white">Response</div>
              <p className="mt-2 text-sm text-white/65">{band.response}</p>
              <div className="mt-4 text-lg font-semibold text-white">Recovery cadence</div>
              <p className="mt-2 text-sm text-white/65">{band.recovery}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/45">{band.notes}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-white/12 bg-white/[0.05] p-6">
          <h2 className="text-2xl font-semibold text-white">Escalation path</h2>
          <ol className="mt-4 space-y-3 text-sm text-white/65">
            {escalationSteps.map((item, index) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">{String(index + 1).padStart(2, '0')}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 rounded-2xl border border-white/12 bg-white/[0.04] p-6">
          <h2 className="text-2xl font-semibold text-white">Change control</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/65">
            {changeControl.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-2xl border border-white/12 bg-white/5 p-6 text-sm text-white/65">
          <h2 className="text-lg font-semibold text-white">Contacting support</h2>
          <p className="mt-3">Priority hotline: +1 (773) 920-0030</p>
          <p className="mt-1">Signal / Matrix bridge: Provided at onboarding</p>
          <p className="mt-1">Email: defcon5ready@gmail.com</p>
          <p className="mt-4 text-xs uppercase tracking-[0.24em] text-white/45">
            All incidents tracked in the shared client portal with timestamps and resolution notes.
          </p>
        </section>
      </div>
    </main>
  );
}

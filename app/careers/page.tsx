import Link from 'next/link';

const openRoles = [
  {
    title: 'Sales Architect (Fractional / Commission)',
    summary: 'Source and qualify Chicagoland law firms, clinics, and elite operators needing sovereign infrastructure or AI estates.',
    bullets: [
      'Build and manage a targeted outbound list using the playbook we provide.',
      'Own discovery calls, scope capture, and hand-off to the principal architect.',
      'Track pipeline health in our shared CRM and forecast quarterly revenue.',
    ],
  },
  {
    title: 'Implementation Engineer Bench (On-Call)',
    summary: 'Join the standby roster for rack builds, cabling, and DarkGPT automation cutovers.',
    bullets: [
      'Execute on-site installs, migrations, and validation checklists under the principal architect.',
      'Maintain certifications (Network+, Security+, or vendor-specific) and background checks.',
      'Document work in our runbooks and assist with rehearsal drills.',
    ],
  },
  {
    title: 'Compliance & Documentation Specialist (Part-Time)',
    summary: 'Prepare SOC 2, HIPAA, and ABA-ready evidence packs and help manage quarterly audit cadences.',
    bullets: [
      'Author policy updates, risk registers, and remediation plans from field notes.',
      'Coordinate with client counsel and insurers to align evidence expectations.',
      'Support tabletop exercises and summarize lessons learned for leadership teams.',
    ],
  },
];

const requirements = [
  'Must be authorized to work in the United States and available in Chicagoland or willing to travel there frequently.',
  'Able to pass background screenings required by healthcare, legal, and financial clients.',
  'Comfortable signing strict confidentiality and non-disclosure agreements.',
  'Bring your own tools and insurance coverage where applicable (we can help coordinate riders).',
];

const applicationSteps = [
  'Email defcon5ready@gmail.com with the role you are interested in and a short description of relevant experience.',
  'Attach proof of recent projects or certifications. Links are fine, no need for formal resumes if your work speaks for itself.',
  'Outline availability windows (weekday, evening, weekend) and preferred compensation structure.',
  'If it is a fit, we will schedule a technical and operational interview with the principal architect.',
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white/80">
      <div className="mx-auto max-w-5xl px-4 py-24">
        <Link href="/" className="text-xs uppercase tracking-[0.24em] text-white/50 transition hover:text-white">
          Digital Estate Architect
        </Link>
        <h1 className="mt-4 text-4xl font-semibold text-white">Now Hiring: Sales & Build Partners</h1>
        <p className="mt-4 text-base text-white/70 max-w-3xl">
          We are expanding the bench to support sovereign infrastructure builds, concierge operations, and DarkGPT deployments. If you thrive in regulated environments and move fast without breaking trust, we would like to hear from you.
        </p>

        <section className="mt-12 space-y-8">
          {openRoles.map((role) => (
            <div key={role.title} className="rounded-2xl border border-white/12 bg-white/[0.06] p-6">
              <h2 className="text-2xl font-semibold text-white">{role.title}</h2>
              <p className="mt-3 text-sm text-white/70">{role.summary}</p>
              <ul className="mt-4 space-y-3 text-sm text-white/65">
                {role.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-white/12 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Baseline requirements</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/65">
            {requirements.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-2xl border border-white/12 bg-white/[0.04] p-6">
          <h2 className="text-2xl font-semibold text-white">How to apply</h2>
          <ol className="mt-4 space-y-3 text-sm text-white/65">
            {applicationSteps.map((item, index) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">{String(index + 1).padStart(2, '0')}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-white/60">
            You can also message <Link href="mailto:defcon5ready@gmail.com" className="text-emerald-300 underline-offset-4 hover:underline">defcon5ready@gmail.com</Link> for confidential questions before submitting a full application.
          </p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/12 bg-white/5 p-6 text-sm text-white/65">
            <h2 className="text-lg font-semibold text-white">What you get</h2>
            <ul className="mt-3 space-y-2">
              <li>Direct access to principal architect for scope, playbooks, and escalation.</li>
              <li>Transparent revenue share on every engagement you touch.</li>
              <li>Opportunities to co-author client briefs and published case studies.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/12 bg-white/5 p-6 text-sm text-white/65">
            <h2 className="text-lg font-semibold text-white">What we expect</h2>
            <ul className="mt-3 space-y-2">
              <li>Professionalism on-site and in client communications at all times.</li>
              <li>Accurate timekeeping, documentation, and post-engagement retros.</li>
              <li>Zero tolerance for cutting corners on compliance or security controls.</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

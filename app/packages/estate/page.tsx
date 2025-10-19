"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Brain,
  GaugeCircle,
  Home,
  Lock,
  Network,
  Server,
  Shield,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { formatPrice, getBuildMetadata } from '@/config/pricing';

const outcomeHighlights = [
  { label: 'Resilience score', value: '99.7%', icon: Shield },
  { label: 'Multi-site sync', value: '≤ 3 min', icon: Network },
  { label: 'Automation scenes', value: '40+', icon: Home },
  { label: 'Support runway', value: '90 days', icon: Sparkles },
];

const deliverableColumns = [
  {
    icon: Server,
    title: 'Core estate build',
    items: [
      'Dual-node TrueNAS + Proxmox stack with GPU-ready virtualization',
      '10–32TB usable storage with hot spare, snapshots, and replication',
      'Layer-3 managed switching with 10Gb uplinks and PoE segmentation',
      'Network UPS, environmental telemetry, and service catalog documentation',
    ],
  },
  {
    icon: Shield,
    title: 'Zero-trust perimeter',
    items: [
      'pfSense/OPNsense firewall pair with policy-as-code governance',
      'Identity provider integration for SSO + MFA across VPN and portals',
      'East-west microsegmentation with attorney, operations, guest, and IoT zones',
      'Continuous vulnerability scanning, IDS, and automated patch orchestration',
    ],
  },
  {
    icon: Brain,
    title: 'Concierge automations',
    items: [
      'Home Assistant blueprints for climate, presence, security, and energy',
      'Local LLM stack for in-estate knowledge retrieval and task orchestration',
      'DarkGPT co-pilot integration with prompt library and role-specific safeguards',
      'Executive dashboards for uptime, backup health, and concierge ticketing',
    ],
  },
];

const comparisonRows = [
  { feature: 'Coverage', build: 'Infrastructure + security + automations', piecemeal: 'Single vendor fragments' },
  { feature: 'Change management', build: 'Versioned runbooks & concierge team', piecemeal: 'Ad hoc / undocumented' },
  { feature: 'Data posture', build: 'Immutable backups + off-site replication', piecemeal: 'Hope and the public cloud' },
  { feature: 'Network hygiene', build: 'Segmented VLANs, NAC, continuous scans', piecemeal: 'Flat LAN, unknown firmware' },
  { feature: 'Automation trust', build: 'Verified, local-first workflows', piecemeal: 'Cloud voice assistants' },
];

const processSteps = [
  { phase: 'Week 1', title: 'Estate audit & blueprint', copy: 'On-site walk-through, dependency mapping, risk assessment, and bill of materials approval.' },
  { phase: 'Week 2', title: 'Core rack build', copy: 'Rack, cable, and harden servers, storage, and switching with baseline monitoring in place.' },
  { phase: 'Week 3', title: 'Security + segmentation', copy: 'Deploy firewalls, identity integrations, NAC policies, and zero-trust remote access.' },
  { phase: 'Week 4', title: 'Automation & AI layer', copy: 'Install Home Assistant, DarkGPT, and workflow engines with custom playbooks.' },
  { phase: 'Week 5', title: 'Validation & concierge', copy: 'Disaster rehearsal, documentation handoff, and start of 90-day elite concierge program.' },
];

const idealFits = [
  {
    title: 'Multi-site principals',
    description: 'Founders balancing city penthouse, lake home, and office annex needing synchronized infrastructure.',
    accentClass: 'border border-sky-400/30 bg-sky-400/10 text-sky-100',
  },
  {
    title: 'Hybrid law or medical teams',
    description: 'Partners with distributed staff requiring compliant remote access, telepresence, and archival certainty.',
    accentClass: 'border border-emerald-400/30 bg-emerald-400/10 text-emerald-100',
  },
  {
    title: 'Automation-first estates',
    description: 'Residences that expect lights, climate, gates, and theaters to stay online even during ISP or grid blips.',
    accentClass: 'border border-amber-400/30 bg-amber-400/10 text-amber-100',
  },
];

const resilienceBadges = [
  { label: 'Active-active failover', value: 'Dual-site replication', badgeClass: 'border border-sky-400/30 bg-sky-400/10 text-sky-100' },
  { label: 'Restoration drill', value: '< 8 min', badgeClass: 'border border-emerald-400/30 bg-emerald-400/10 text-emerald-100' },
  { label: 'Automation coverage', value: '18 zones', badgeClass: 'border border-amber-400/30 bg-amber-400/10 text-amber-100' },
  { label: 'Monitoring cadence', value: '24/7 SOC hooks', badgeClass: 'border border-purple-400/30 bg-purple-400/10 text-purple-100' },
];

const techBadges = [
  { label: 'TrueNAS SCALE', badgeClass: 'border border-sky-400/35 bg-sky-400/10 text-sky-100' },
  { label: 'Proxmox VE clusters', badgeClass: 'border border-emerald-400/35 bg-emerald-400/10 text-emerald-100' },
  { label: 'pfSense HA pairs', badgeClass: 'border border-cyan-400/35 bg-cyan-400/10 text-cyan-100' },
  { label: 'Home Assistant Yellow', badgeClass: 'border border-amber-400/35 bg-amber-400/10 text-amber-100' },
  { label: 'Matter + Zigbee mesh', badgeClass: 'border border-purple-400/35 bg-purple-400/10 text-purple-100' },
  { label: 'Uptime Kuma & Grafana', badgeClass: 'border border-pink-400/35 bg-pink-400/10 text-pink-100' },
  { label: 'DarkGPT Concierge', badgeClass: 'border border-slate-400/35 bg-slate-400/10 text-slate-100' },
  { label: 'Ansible playbooks', badgeClass: 'border border-emerald-400/35 bg-emerald-400/10 text-emerald-100' },
];

const conciergeHighlights = [
  {
    title: 'Quarterly posture reviews',
    copy: 'Concierge team inspects firmware, backups, automations, and compliance posture with written findings.',
  },
  {
    title: 'Executive escalation channel',
    copy: 'Direct signal path to lead engineer for mission-critical incidents with 2-hour acknowledgement guarantee.',
  },
  {
    title: 'New property onboarding',
    copy: 'Blueprint and deploy additional locations or remodels using the same estate architecture playbook.',
  },
];

export default function EliteBuildCommandCenter() {
  const shouldReduceMotion = useReducedMotion();
  const buildMeta = getBuildMetadata('COMMAND_CENTER');
    const { label: buildLabel, summary: buildSummary, price: basePrice } = buildMeta;
    const priceRange = formatPrice('COMMAND_CENTER');
    const startingLabel = `$${basePrice.toLocaleString()}`;
    const buildShortName = buildLabel.split(': ').pop() ?? buildLabel;
  const heroMotionProps = shouldReduceMotion
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white egyptian-texture">
      <header className="sticky top-0 z-40 border-b border-sky-500/30 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/#accomp" className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to elite builds
          </Link>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-400/20 px-3 py-1 text-xs font-semibold text-slate-900">
              Most requested
            </span>
            <Link
              href="/start-project"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-300 via-blue-400 to-amber-300 px-4 py-2 text-sm font-semibold text-slate-900 shadow shadow-sky-500/25 transition hover:opacity-95"
            >
              Book {buildShortName}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
        <div className="flex items-center justify-between rounded-2xl border border-sky-500/25 bg-slate-950/90 px-4 py-3 shadow-lg shadow-sky-500/25 backdrop-blur">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">{buildLabel}</div>
            <div className="text-sm font-medium text-white">Starts at {startingLabel} • 6-week orchestration</div>
          </div>
          <Link
            href="/start-project"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-300 via-blue-400 to-amber-300 px-3 py-2 text-xs font-semibold text-slate-900 shadow shadow-sky-500/25 transition hover:opacity-95"
          >
            Book a consult
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <Image src="/images/25k.webp" alt={`${buildShortName} background`} fill className="object-cover" priority />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-16 pb-32 md:pb-16">
          <section className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-100">
              {buildLabel}
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              The multi-site digital estate with concierge resilience
            </h1>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-white/75 max-w-3xl mx-auto">
              {buildSummary}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-white/60">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1"><GaugeCircle className="h-4 w-4 text-sky-200" /> 6-week deployment</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1"><Lock className="h-4 w-4 text-sky-200" /> CMMC-inspired controls</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1"><Sparkles className="h-4 w-4 text-sky-200" /> Concierge expansion ready</span>
            </div>
          </section>

          <motion.div
            className="mb-16 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center"
            {...heroMotionProps}
          >
            <div className="rounded-2xl border border-white/12 bg-white/5 p-6 md:p-8">
              <h2 className="text-left text-lg font-semibold text-sky-100">What the {buildShortName} delivers</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {outcomeHighlights.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="rounded-xl border border-white/12 bg-slate-950/60 p-4 text-left">
                    <Icon className="h-5 w-5 text-sky-100" />
                    <div className="mt-3 text-2xl font-semibold text-white">{value}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/55">{label}</div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-white/65">
                Typical {buildLabel} engagements invest {priceRange} depending on redundant hardware, multi-site runs, and AI concierge scope. Hardware is billed at cost with transparent asset logs.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-sky-500/35 shadow-2xl blue-glow">
              <Image
                src="/images/25k.webp"
                alt={`${buildShortName} deployment`}
                width={1024}
                height={768}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </motion.div>

          <section className="mb-16 rounded-2xl border border-sky-500/35 bg-gradient-to-br from-sky-500/12 via-slate-950 to-slate-950 p-8 text-center">
            <div className="text-4xl font-semibold text-sky-100">{priceRange}</div>
            <p className="mt-3 text-sm text-white/70">Six-week orchestration covering discovery, multi-site install, automation build-out, and 90-day concierge runway.</p>
            <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/55">Hardware at cost • Multi-site optional • Concierge expands on demand</p>
          </section>

          <section className="mb-16" id="deliverables">
            <div className="mb-10 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Deliverables
              </div>
              <h2 className="mt-4 text-3xl font-semibold">Infrastructure, security, and automations executed by one team</h2>
              <p className="mt-3 mx-auto max-w-3xl text-sm text-white/70 sm:text-base">
                {buildShortName} is the playbook we use for family offices and boutique firms that cannot tolerate downtime. Every subsystem is documented, rehearsed, and supported by our concierge desk.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {deliverableColumns.map(({ icon: Icon, title, items }) => (
                <div key={title} className="rounded-2xl border border-white/12 bg-white/5 p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-sky-500/30 bg-sky-500/15 p-2">
                      <Icon className="h-5 w-5 text-sky-100" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                  </div>
                  <ul className="mt-5 space-y-3 text-sm text-white/70">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 text-sky-200" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Who thrives on this build</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {idealFits.map(({ title, description, accentClass }) => (
                <div key={title} className={`rounded-2xl p-6 text-left ${accentClass}`}>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm text-white/80">{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold mb-6">{buildShortName} vs. cobbling solutions together</h2>
            <div className="grid gap-4 md:hidden">
              {comparisonRows.map(({ feature, build, piecemeal }) => (
                <div key={feature} className="rounded-2xl border border-white/8 bg-slate-950/60 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Dimension</div>
                  <h3 className="mt-1 text-base font-semibold text-white">{feature}</h3>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div className="rounded-xl border border-sky-500/25 bg-sky-500/12 p-3">
                      <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200/80">{buildShortName}</dt>
                      <dd className="mt-1 text-sky-100">{build}</dd>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                      <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">DIY stack</dt>
                      <dd className="mt-1 text-white/60">{piecemeal}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[720px] text-left text-sm sm:text-base">
                <thead className="text-white/60">
                  <tr className="border-b border-white/10">
                    <th className="pb-3 pr-4 font-semibold">Dimension</th>
                    <th className="pb-3 pr-4 font-semibold text-sky-200">{buildShortName}</th>
                    <th className="pb-3 font-semibold text-white/50">DIY stack</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(({ feature, build, piecemeal }) => (
                    <tr key={feature} className="border-b border-white/10 last:border-0">
                      <td className="py-3 pr-4 text-white/70">{feature}</td>
                      <td className="py-3 pr-4 text-sky-200">{build}</td>
                      <td className="py-3 text-white/50">{piecemeal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
              <Workflow className="h-4 w-4 text-sky-200" /> Deployment cadence
            </div>
            <div className="mt-6 space-y-5">
              {processSteps.map(({ phase, title, copy }) => (
                <div key={phase} className="rounded-xl border border-white/12 bg-slate-950/45 p-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-white/55">{phase}</span>
                    <div className="h-px flex-1 bg-white/12" />
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-xs text-white/65">{copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Resilience metrics we guarantee</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {resilienceBadges.map(({ label, value, badgeClass }) => (
                <div key={label} className={`rounded-xl px-4 py-5 text-center ${badgeClass}`}>
                  <div className="text-sm font-medium uppercase tracking-[0.22em] text-white/70">{label}</div>
                  <div className="mt-3 text-2xl font-semibold text-white">{value}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Concierge runway beyond install</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {conciergeHighlights.map(({ title, copy }) => (
                <div key={title} className="rounded-xl border border-white/12 bg-slate-950/45 p-6">
                  <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/55">Concierge</div>
                  <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm text-white/70">{copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-16">
            <h2 className="text-2xl font-semibold">Stack powering {buildShortName}</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {techBadges.map(({ label, badgeClass }) => (
                <span key={label} className={`inline-flex items-center rounded-full px-3 py-1 text-xs ${badgeClass}`}>
                  {label}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-sky-500/35 bg-gradient-to-r from-sky-500/12 via-slate-950 to-slate-950 p-8 text-center">
            <h2 className="text-3xl font-semibold">Ready to synchronize your entire estate?</h2>
            <p className="mt-3 text-sm text-white/70 max-w-2xl mx-auto">
              Schedule a discovery session. We will map your properties, size the infrastructure, and present the concierge plan we execute over six focused weeks.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/start-project"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-300 via-blue-400 to-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/25 transition hover:opacity-95"
              >
                Book a {buildShortName} consult
              </Link>
              <Link
                href="/#accomp"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-sky-300/60 hover:text-white"
              >
                Review other builds
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

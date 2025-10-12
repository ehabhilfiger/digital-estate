"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Brain,
  Cpu,
  GaugeCircle,
  Lock,
  Network,
  Radar,
  Server,
  Shield,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react';

const outcomeHighlights = [
  { label: 'Cluster uptime commitment', value: '99.99%', icon: Shield },
  { label: 'Fine-tuning throughput', value: '+480%', icon: Cpu },
  { label: 'Failover rehearsal time', value: '< 6 min', icon: GaugeCircle },
  { label: 'SLA coverage', value: '12 months', icon: Sparkles },
];

const deliverableColumns = [
  {
    icon: Server,
    title: 'Sovereign compute fabric',
    items: [
      'Proxmox VE or Kubernetes cluster with GPU pass-through playbooks',
      'HGX / RTX Ada rack design, liquid + air cooling, and thermal telemetry',
      'Disaggregated storage tiers with Ceph replication and snapshot automation',
      'Immutable infrastructure pipeline with GitOps promotion flow',
    ],
  },
  {
    icon: Shield,
    title: 'Zero compromise security',
    items: [
      'pfSense or OPNsense HA pair with microsegmented VLAN fabric',
      'Hardware-backed encryption, HSM integration, and privileged access brokering',
      'Inline IDS/IPS, SOAR hooks, and compliance-ready logging pipelines',
      'Incident response runbooks with quarterly tabletop exercises',
    ],
  },
  {
    icon: Brain,
    title: 'AI operations concierge',
    items: [
      'DarkGPT control plane with multi-tenant guardrails for legal and medical workflows',
      'vLLM, Triton, and Ollama inference endpoints with autoscaling orchestrators',
      'Data governance fabric for red-teaming, auditing, and anonymization',
      'Executive intelligence dashboard for utilization, risk, and automation health',
    ],
  },
];

const capabilityComparisons = [
  { dimension: 'Compute orchestration', architect: 'Dedicated GPU/CPU clusters with live migration + predictive scaling', enterprise: 'Single cloud tenant, auto-scaling best effort' },
  { dimension: 'Compliance posture', architect: 'Policy-as-code, CIS baselines, auditable change logs', enterprise: 'Manual spreadsheets, quarterly reviews' },
  { dimension: 'Automation depth', architect: 'Self-healing pipelines, DarkGPT concierge, multi-domain tasks', enterprise: 'Ticket-based scripts, limited assistants' },
  { dimension: 'Data sovereignty', architect: 'On-prem, encrypted, redundant, vendor-agnostic', enterprise: 'Cloud region dependence, shared tenancy' },
  { dimension: 'Support runway', architect: '12-month SLA, on-site, direct architect channel', enterprise: 'Call center escalation tree' },
];

const processSteps = [
  { phase: 'Weeks 1-2', title: 'Architecture charter & compliance mapping', copy: 'Stakeholder workshops, regulation overlay, risk scoring, and approval of executive blueprint.' },
  { phase: 'Weeks 3-4', title: 'Cluster fabrication & network spine', copy: 'Rack, cable, and commission compute, storage, and segmented network with baseline monitoring.' },
  { phase: 'Weeks 5-6', title: 'Security hardening & IAM federation', copy: 'Implement zero-trust access, integrate identity providers, simulate breach scenarios, and remediate gaps.' },
  { phase: 'Weeks 7-8', title: 'AI workloads & automation layer', copy: 'Deploy DarkGPT, pipeline templates, and automation runbooks aligned to practice-specific workflows.' },
  { phase: 'Weeks 9-10', title: 'Disaster rehearsal & launch', copy: 'Perform failover drills, finalize documentation, train teams, and begin 12-month concierge program.' },
];

const idealFits = [
  {
    title: 'Sovereign AI offices',
    description: 'Firms running confidential models on-site with dedicated GPU racks and compliance obligations.',
    accentClass: 'border border-sky-400/35 bg-sky-400/10 text-sky-100',
  },
  {
    title: 'Healthcare & biotech labs',
    description: 'Operations requiring HIPAA, HITRUST, and FDA-readiness with data residency guarantees.',
    accentClass: 'border border-emerald-400/35 bg-emerald-400/10 text-emerald-100',
  },
  {
    title: 'Multi-jurisdiction practices',
    description: 'Organizations spanning states or countries needing synchronized, policy-driven infrastructure.',
    accentClass: 'border border-amber-400/35 bg-amber-400/10 text-amber-100',
  },
];

const slaHighlights = [
  { label: 'Critical incident acknowledgement', value: '< 15 min', badgeClass: 'border border-sky-400/35 bg-sky-400/10 text-sky-100' },
  { label: 'On-site response (Chicagoland)', value: '4 hours', badgeClass: 'border border-emerald-400/35 bg-emerald-400/10 text-emerald-100' },
  { label: 'Disaster recovery drill', value: 'Quarterly', badgeClass: 'border border-purple-400/35 bg-purple-400/10 text-purple-100' },
  { label: 'Executive briefings', value: 'Monthly', badgeClass: 'border border-amber-400/35 bg-amber-400/10 text-amber-100' },
];

const techBadges = [
  { label: 'HGX H100 / RTX 6000 Ada', badgeClass: 'border border-sky-400/35 bg-sky-400/10 text-sky-100' },
  { label: 'Proxmox VE HA clusters', badgeClass: 'border border-emerald-400/35 bg-emerald-400/10 text-emerald-100' },
  { label: 'Ceph + ZFS tiering', badgeClass: 'border border-cyan-400/35 bg-cyan-400/10 text-cyan-100' },
  { label: 'OPNsense / pfSense HA', badgeClass: 'border border-purple-400/35 bg-purple-400/10 text-purple-100' },
  { label: 'Ansible + Argo CD', badgeClass: 'border border-pink-400/35 bg-pink-400/10 text-pink-100' },
  { label: 'DarkGPT Concierge', badgeClass: 'border border-slate-400/35 bg-slate-400/10 text-slate-100' },
  { label: 'Prometheus + Grafana', badgeClass: 'border border-emerald-400/35 bg-emerald-400/10 text-emerald-100' },
  { label: 'Vault & Boundary', badgeClass: 'border border-amber-400/35 bg-amber-400/10 text-amber-100' },
];

const conciergeHighlights = [
  {
    title: 'Dedicated principal architect',
    copy: 'Direct access to the lead engineer who designed your stack for roadmap, capacity, and incident strategy.',
  },
  {
    title: 'Regulatory audit playbook',
    copy: 'We prep evidence packages, run mock audits, and update controls to stay ahead of auditors and insurers.',
  },
  {
    title: 'Innovation sprints',
    copy: 'Quarterly workshops where we pilot new automations, model upgrades, and integrations with your leadership.',
  },
];

export default function ArchitectPackage() {
  const shouldReduceMotion = useReducedMotion();
  const heroMotionProps = shouldReduceMotion
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white egyptian-texture">
      <header className="sticky top-0 z-40 border-b border-sky-500/40 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to packages
          </Link>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-400/20 px-3 py-1 text-xs font-semibold text-slate-900">
              Enterprise grade
            </span>
            <Link
              href="/start-project"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-300 via-blue-400 to-amber-300 px-4 py-2 text-sm font-semibold text-slate-900 shadow shadow-sky-500/25 transition hover:opacity-95"
            >
              Engage the architect team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <Image src="/images/architect.png" alt="Architect package background" fill className="object-cover" priority />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
          <section className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-100">
              Architect package
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Sovereign AI and infrastructure engineered without compromise
            </h1>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-white/75 max-w-3xl mx-auto">
              Architect is the turnkey engagement when uptime, compliance, and private AI performance must exceed the public cloud. We combine GPU clusters, zero-trust security, and concierge operations into one accountable team.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-white/60">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1"><Radar className="h-4 w-4 text-sky-200" /> Global multi-site ready</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1"><Lock className="h-4 w-4 text-sky-200" /> FedRAMP & HIPAA alignment</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1"><Sparkles className="h-4 w-4 text-sky-200" /> DarkGPT concierge included</span>
            </div>
          </section>

          <motion.div
            className="mb-16 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center"
            {...heroMotionProps}
          >
            <div className="rounded-2xl border border-white/12 bg-white/5 p-6 md:p-8">
              <h2 className="text-left text-lg font-semibold text-sky-100">Architect impact metrics</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {outcomeHighlights.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="rounded-xl border border-white/12 bg-slate-950/55 p-5 text-left">
                    <Icon className="h-5 w-5 text-sky-100" />
                    <div className="mt-3 text-2xl font-semibold text-white">{value}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/55">{label}</div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-white/65">
                Architect engagements begin at $20k and scale with GPU count, site quantity, and automation breadth. Hardware is invoiced at cost with asset tags, warranties, and refresh forecasting.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-sky-500/35 shadow-2xl blue-glow">
              <Image
                src="/images/architect.png"
                alt="Architect package deployment"
                width={1080}
                height={720}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </motion.div>

          <section className="mb-16 rounded-2xl border border-sky-500/35 bg-gradient-to-br from-sky-500/12 via-slate-950 to-slate-950 p-8 text-center">
            <div className="text-4xl font-semibold text-sky-100">$20,000+</div>
            <p className="mt-3 text-sm text-white/70">10-week orchestration covering architecture charter, cluster build, AI workloads, and the first year of concierge care.</p>
            <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/55">Hardware at cost • GPU procurement handled • 12-month SLA included</p>
          </section>

          <section className="mb-16" id="deliverables">
            <div className="mb-10 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Deliverables
              </div>
              <h2 className="mt-4 text-3xl font-semibold">Compute, security, and AI runbooks delivered by one accountable squad</h2>
              <p className="mt-3 mx-auto max-w-3xl text-sm text-white/70 sm:text-base">
                From rack elevation diagrams to post-incident retros, Architect covers every layer with documented playbooks and concierge follow-through.
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
            <h2 className="text-2xl font-semibold">Who Architect was built for</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {idealFits.map(({ title, description, accentClass }) => (
                <div key={title} className={`rounded-2xl p-6 text-left ${accentClass}`}>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm text-white/80">{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-8 overflow-x-auto">
            <h2 className="text-2xl font-semibold mb-6">Architect vs. traditional enterprise bundles</h2>
            <table className="w-full min-w-[760px] text-left text-sm sm:text-base">
              <thead className="text-white/60">
                <tr className="border-b border-white/10">
                  <th className="pb-3 pr-4 font-semibold">Dimension</th>
                  <th className="pb-3 pr-4 font-semibold text-sky-200">Architect package</th>
                  <th className="pb-3 font-semibold text-white/50">Managed enterprise suite</th>
                </tr>
              </thead>
              <tbody>
                {capabilityComparisons.map(({ dimension, architect, enterprise }) => (
                  <tr key={dimension} className="border-b border-white/10 last:border-0">
                    <td className="py-3 pr-4 text-white/70">{dimension}</td>
                    <td className="py-3 pr-4 text-sky-200">{architect}</td>
                    <td className="py-3 text-white/50">{enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
              <Workflow className="h-4 w-4 text-sky-200" /> Deployment roadmap
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
            <h2 className="text-2xl font-semibold">SLA pledges and concierge guardrails</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {slaHighlights.map(({ label, value, badgeClass }) => (
                <div key={label} className={`rounded-xl px-4 py-5 text-center ${badgeClass}`}>
                  <div className="text-sm font-medium uppercase tracking-[0.22em] text-white/70">{label}</div>
                  <div className="mt-3 text-2xl font-semibold text-white">{value}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Concierge program highlights</h2>
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
            <h2 className="text-2xl font-semibold">Stack powering architect deployments</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {techBadges.map(({ label, badgeClass }) => (
                <span key={label} className={`inline-flex items-center rounded-full px-3 py-1 text-xs ${badgeClass}`}>
                  {label}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-sky-500/35 bg-gradient-to-r from-sky-500/12 via-slate-950 to-slate-950 p-8 text-center">
            <h2 className="text-3xl font-semibold">Ready to command your own sovereign AI infrastructure?</h2>
            <p className="mt-3 text-sm text-white/70 max-w-2xl mx-auto">
              Book a strategy session. We map your regulatory landscape, compute demand, and automation ambitions, then deliver the custom playbook we will execute alongside your leadership.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/start-project"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-300 via-blue-400 to-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/25 transition hover:opacity-95"
              >
                Schedule architect consult
              </Link>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-sky-300/60 hover:text-white"
              >
                Compare tier packages
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

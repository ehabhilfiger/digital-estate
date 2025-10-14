"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Briefcase, Building, Check, FileText, Gavel, Scale, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const outcomeMetrics = [
  { label: 'Privilege breaches', value: '0', accent: 'text-emerald-300' },
  { label: 'Avg. SaaS cost reduction', value: '−68%', accent: 'text-blue-300' },
  { label: 'Delivery window', value: '28 days', accent: 'text-amber-300' },
];

const capabilityGroups = [
  {
    icon: Shield,
    title: 'Sovereign infrastructure',
    points: [
      'TrueNAS or Synology vault with encrypted RAID + immutable snapshots',
      'Dedicated pfSense perimeter and segmented VLANs for attorneys, staff, guest, IoT',
      'WireGuard mesh for remote counsel with device attestation and logging',
      'Air-gapped litigation archive with automated verification drills',
    ],
  },
  {
    icon: FileText,
    title: 'Practice operations',
    points: [
      'Self-hosted case workspace (Nextcloud Legal / Mattermost) with role controls',
      'Conflict engine + intake portal mapped to ABA Model Rules 1.6, 1.7, 1.9',
      'Document automation, redaction, and secure client delivery in one stack',
      'Integrated calendaring, docket alerts, and litigation hold workflows',
    ],
  },
  {
    icon: Users,
    title: 'Stewardship & compliance',
    points: [
      'Attorney + staff enablement: on-site training, SOP playbooks, video runbooks',
      'Managed updates, evidence chain audits, and quarterly penetration tests',
      'Regulatory documentation pack (ABA, state bar, SOC2-mapped controls)',
      'Concierge hotline: direct access to the architect with <4h response SLA',
    ],
  },
];

const techBadges = [
  'TrueNAS SCALE',
  'Synology DSM 7',
  'pfSense HA',
  'WireGuard',
  'Nextcloud Legal',
  'OnlyOffice Docs',
  'Keycloak RBAC',
  'PostgreSQL Audit Trail',
  'Ceph Snapshots',
  'Wazuh SIEM',
];

const clientProof = [
  { label: 'Regional Litigation Group', metric: 'Passed state bar data audit with zero findings', result: 'Privilege logs auto-generated for 18 active matters.' },
  { label: 'Immigration Boutique', metric: '40-seat hybrid office online in 21 days', result: 'Encrypted intake portal in three languages with DarkGPT concierge.' },
  { label: 'Family Office Counsel', metric: 'Retired $22k/yr in SaaS spend', result: 'Private document rooms replacing three subscription platforms.' },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery + risk mapping',
    detail: 'One working session with your managing partner, compliance lead, and IT contact to chart privilege risks, retention needs, and existing tooling.',
  },
  {
    step: '02',
    title: 'Architecture approval',
    detail: 'Bill of materials, rack diagrams, ABA mapping, and migration plan signed off before hardware ships. Every control traced to a rule.',
  },
  {
    step: '03',
    title: 'On-site build week',
    detail: 'I rack, cable, and harden the environment, migrate matter data, and rehearse failover scenarios with your partners.',
  },
  {
    step: '04',
    title: 'Validation + concierge',
    detail: 'Day-four red-team exercise, documentation handoff, and 90-day stewardship with optional managed retainer.',
  },
];

const clearanceLevels = [
  {
    value: 'privileged',
    label: 'Privileged Chambers',
    headline: 'Seal privilege leaks before they start.',
    summary: 'Partitioned chambers for litigation, family, and corporate teams with signed confidentiality attestations.',
    scif: 'Dedicated SCIF-inspired pods with acoustic isolation, Faraday shielding, and 24/7 telemetry logging for privileged review.',
    sap: 'SAP-lite segmentation keyed to senior partners and designated counsel with rotating hardware tokens.',
  },
  {
    value: 'fortified',
    label: 'Fortified War Room',
    headline: 'Run cross-border matters without touching the public cloud.',
    summary: 'Matter command center for M&A diligence, regulatory inquiries, and international arbitration teams.',
    scif: 'Mobile SCIF kit for off-site proceedings plus in-office vault with air-gapped evidence ingest.',
    sap: 'Special Access Program workflows with dual-control approvals and tamper-evident audit trails.',
  },
  {
    value: 'sovereign',
    label: 'Sovereign Counsel Ops',
    headline: 'Operate at defense-grade confidentiality for celebrity and government briefs.',
    summary: 'Highest assurance implementation with live concierge oversight and redundant counsel pods.',
    scif: 'Full SCIF build-out: ballistic barriering, dedicated HVAC, RF isolation, and continuous spectrum monitoring.',
    sap: 'Tiered SAP matrix with biometric checkpoints, ephemeral credentials, and classified matter vaulting.',
  },
];

export default function LawFirmSolution() {
  const [selectedClearance, setSelectedClearance] = useState(clearanceLevels[1]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white egyptian-texture">
      <motion.header
        className="sticky top-0 z-50 backdrop-blur border-b border-blue-500/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-white/75 hover:text-white transition">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Link href="/start-project" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-300 via-blue-400 to-amber-300 px-4 py-2 text-sm font-semibold text-slate-900 shadow shadow-emerald-500/15 transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950">
            Schedule consult
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.header>

      <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
        <div className="flex items-center justify-between rounded-2xl border border-blue-500/30 bg-slate-950/90 px-4 py-3 shadow-lg shadow-blue-500/25 backdrop-blur">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200/80">Law firm engagement</div>
            <div className="text-sm font-medium text-white">Starts at $18k • 28-day rollout</div>
          </div>
          <Link
            href="/start-project"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-300 via-blue-400 to-amber-300 px-3 py-2 text-xs font-semibold text-slate-900 shadow shadow-blue-500/25 transition hover:opacity-95"
          >
            Schedule consult
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

  <main className="max-w-6xl mx-auto px-4 pt-16 pb-32 md:pb-16">
        <nav className="mb-6 text-xs uppercase tracking-[0.28em] text-white/50" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-white transition">Home</Link>
            </li>
            <li className="text-white/30">/</li>
            <li>
              <Link href="/#law" className="hover:text-white transition">Solutions</Link>
            </li>
            <li className="text-white/30">/</li>
            <li className="text-white/70">Law Firm</li>
          </ol>
        </nav>

        <section id="overview" className="mb-14">
          <div className="mx-auto max-w-4xl rounded-2xl border border-blue-500/35 bg-slate-950/70 px-6 py-6 shadow-lg shadow-blue-500/15">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-md">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300/80">Clearance profile</span>
                <p className="mt-2 text-sm text-white/65">
                  Choose the security clearance this engagement demands. We calibrate network segmentation, concierge protocols, and evidence handling to match.
                </p>
              </div>
              <div className="w-full max-w-xs">
                <label htmlFor="clearance" className="block text-xs font-semibold uppercase tracking-[0.24em] text-blue-200/80">
                  Clearance level
                </label>
                <select
                  id="clearance"
                  value={selectedClearance.value}
                  onChange={(event) => {
                    const next = clearanceLevels.find((option) => option.value === event.target.value) ?? clearanceLevels[0];
                    setSelectedClearance(next);
                  }}
                  className="mt-2 w-full rounded-xl border border-blue-500/40 bg-slate-950/90 px-4 py-3 text-sm font-medium text-blue-100 shadow-inner focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
                >
                  {clearanceLevels.map((option) => (
                    <option key={option.value} value={option.value} className="bg-slate-900 text-blue-100">
                      {option.label}
                    </option>
                  ))}
                </select>
                <p className="mt-3 text-xs text-white/70">{selectedClearance.summary}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-blue-500/25 bg-slate-950/75 p-4">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">SCIF posture</span>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{selectedClearance.scif}</p>
              </div>
              <div className="rounded-xl border border-blue-500/25 bg-slate-950/75 p-4">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">SAP handling</span>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{selectedClearance.sap}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              Law Firm Solution
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              {selectedClearance.headline}
            </h1>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-white/75 max-w-3xl mx-auto">
              Sovereign infrastructure engineered for boutiques through multi-partner practices that need ABA-aligned controls, on-prem case automation, and concierge stewardship from the architect who built it.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-white/65">
              <span className="rounded-full border border-blue-500/30 bg-slate-950/70 px-3 py-1">Model Rule 1.6, 1.7, 1.9 mapped</span>
              <span className="rounded-full border border-blue-500/30 bg-slate-950/70 px-3 py-1">SOC2-style evidence bundle</span>
              <span className="rounded-full border border-blue-500/30 bg-slate-950/70 px-3 py-1">Concierge post-deployment drills</span>
            </div>
          </div>
        </section>

        <nav className="hidden md:flex justify-center gap-3 mb-12" aria-label="Section navigation">
          {[
            { href: '#pricing', label: 'Pricing' },
            { href: '#capabilities', label: 'Capabilities' },
            { href: '#evidence', label: 'Evidence' },
            { href: '#process', label: 'Process' },
            { href: '#tech', label: 'Stack' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-full border border-blue-500/30 bg-slate-950/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:border-emerald-300/60 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <section className="mb-12">
          <div className="flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-blue-500/25 bg-slate-950/70 px-6 py-5 text-xs uppercase tracking-[0.24em] text-white/60">
            <span className="rounded-full border border-blue-500/30 bg-slate-950/80 px-3 py-2 text-white/70">Trusted by 7-partner litigation teams</span>
            <span className="rounded-full border border-blue-500/30 bg-slate-950/80 px-3 py-2 text-white/70">Immigration practices with multilingual intake</span>
            <span className="rounded-full border border-blue-500/30 bg-slate-950/80 px-3 py-2 text-white/70">Family office counsel managing celebrity briefs</span>
          </div>
        </section>

        <motion.div
          className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="rounded-2xl border border-blue-500/25 bg-slate-950/70 p-6 md:p-8">
            <h2 className="text-left text-lg font-semibold text-blue-300">Outcomes clients monitor</h2>
            <div className="mt-4 grid sm:grid-cols-3 gap-4">
              {outcomeMetrics.map(({ label, value, accent }) => (
                <div key={label} className="rounded-xl border border-blue-500/20 bg-slate-950/80 p-4">
                  <div className={`text-3xl font-semibold ${accent}`}>{value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/60">{label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-sm text-white/70">
              Latest deployments: 14TB litigation archive for boutique corporate firm · 40-seat hybrid office for immigration practice · 6-partner family law rebuild with DarkGPT assistant.
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl blue-glow">
            <Image
              src="/images/lawfirm.png"
              alt="Rack-mounted legal infrastructure with compliance telemetry"
              width={960}
              height={720}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>

        <section id="pricing" className="mb-16">
          <div className="rounded-2xl border border-blue-500/40 bg-gradient-to-br from-blue-500/10 via-slate-950 to-slate-950 px-6 py-10 md:px-10 md:py-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/50 bg-blue-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-200">
                  Investment
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-blue-200">Law Firm Sovereign Cloud</h2>
                <p className="mt-3 max-w-xl text-sm sm:text-base text-white/70">
                  Fixed-fee architecture, installation, and migration. Concierge stewardship for 90 days, with managed retainers available when you want a single throat to choke.
                </p>
                <ul className="mt-6 grid gap-2 text-sm text-white/65">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-300" /> ABA, SOC2, and state confidentiality mapped in writing</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-300" /> On-site build week + data migration + red-team rehearsal</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-300" /> DarkGPT concierge option for elite tiers ($50k+ estates)</li>
                </ul>
              </div>
              <div className="grid gap-4 w-full max-w-xs">
                <div className="rounded-2xl border border-blue-500/40 bg-slate-950/70 px-6 py-5 text-center">
                  <div className="text-sm font-semibold text-blue-200">Project fee</div>
                  <div className="mt-2 text-4xl font-semibold text-blue-300">Starting $18k</div>
                  <p className="mt-3 text-xs text-white/60">Includes hardware specification, procurement guidance, build, migration, documentation, and playbooks.</p>
                </div>
                <div className="rounded-2xl border border-blue-500/30 bg-slate-950/70 px-6 py-5 text-center">
                  <div className="text-sm font-semibold text-blue-200">Managed concierge</div>
                  <div className="mt-2 text-2xl font-semibold text-blue-300">$1.2k+/mo</div>
                  <p className="mt-3 text-xs text-white/60">24/7 monitoring, compliance evidence bundles, quarterly tabletop drills.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              From rack to retention
            </div>
            <h2 className="mt-4 text-3xl font-semibold">What we deliver end-to-end</h2>
            <p className="mt-3 text-white/65 text-sm sm:text-base max-w-2xl mx-auto">
              Every deployment is operated, documented, and stress-tested by the same architect who designs it. No handoffs, no mystery MSPs.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {capabilityGroups.map(({ icon: Icon, title, points }) => (
              <div key={title} className="rounded-2xl border border-white/12 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-2">
                    <Icon className="h-5 w-5 text-blue-200" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
                <ul className="mt-5 space-y-3 text-sm text-white/70">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-blue-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="evidence" className="mb-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              <div>
                <h2 className="text-3xl font-semibold">Evidence and testimonials</h2>
                <p className="mt-3 text-sm text-white/65">Numbers your partners can show the board.</p>
                <div className="mt-6 grid sm:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-blue-500/25 bg-blue-500/10 p-4 text-center">
                    <div className="text-3xl font-semibold text-blue-200">75%</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/55">Avg. SaaS spend avoided</div>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-center">
                    <div className="text-3xl font-semibold text-emerald-200">0</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/55">Privilege breaches reported</div>
                  </div>
                  <div className="rounded-xl border border-amber-400/25 bg-amber-400/10 p-4 text-center">
                    <div className="text-3xl font-semibold text-amber-200">2 hrs</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/55">Average team onboarding</div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
                <div className="flex items-center gap-3 text-blue-200">
                  <Building className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-[0.24em]">Case study</span>
                </div>
                <blockquote className="mt-4 text-lg text-white/85 italic">
                  “We passed our state bar audit with zero findings. Privilege logs are automated, client portals are ours, and we saved $18k/yr after retiring three SaaS contracts.”
                </blockquote>
                <p className="mt-4 text-sm text-white/55">Managing Partner · 7-attorney corporate litigation practice (Chicago)</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/55">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1"><Scale className="h-3.5 w-3.5 text-blue-200" /> ABA Model Rules mapped</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1"><Gavel className="h-3.5 w-3.5 text-blue-200" /> Litigation hold workflows</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1"><Briefcase className="h-3.5 w-3.5 text-blue-200" /> M&A diligence data rooms</span>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {clientProof.map(({ label, metric, result }) => (
                <div key={label} className="rounded-xl border border-blue-500/25 bg-slate-950/60 p-5">
                  <div className="text-xs uppercase tracking-[0.24em] text-blue-200/80">{label}</div>
                  <p className="mt-3 text-sm font-semibold text-white/80">{metric}</p>
                  <p className="mt-2 text-xs text-white/60">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="mb-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] items-start">
            <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6">
              <h2 className="text-2xl font-semibold text-blue-100">Managed concierge option</h2>
              <p className="mt-3 text-sm text-blue-100/80">
                Most firms stay on our managed program beyond the initial 90 days. We run quarterly tabletop exercises, deliver compliance evidence, and keep every automation aligned with your evolving caseload.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-blue-100/80">
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-emerald-200" /> Partner-only hotline with 2h critical response</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-emerald-200" /> Automated privilege log exports + retention attestations</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-emerald-200" /> Annual penetration test facilitation and remediation</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold">How the engagement runs</h2>
              <div className="mt-5 space-y-3">
                {processSteps.map(({ step, title, detail }) => (
                  <details key={step} className="group rounded-xl border border-white/10 bg-slate-950/50 p-4 transition hover:border-emerald-300/40">
                    <summary className="flex cursor-pointer items-center justify-between text-left text-sm font-semibold text-white/80">
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-xs text-white/50">{step}</span>
                        {title}
                      </span>
                      <span className="text-xs text-white/40 group-open:hidden">View</span>
                      <span className="text-xs text-emerald-300 group-open:inline hidden">Hide</span>
                    </summary>
                    <p className="mt-3 text-xs text-white/65 leading-relaxed">{detail}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="tech" className="mb-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Enterprise stack we deploy</h2>
            <p className="mt-2 text-sm text-white/60">Every tool self-hosted, monitored, and controlled by you.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {techBadges.map((badge) => (
                <span key={badge} className="inline-flex items-center rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-blue-500/25 bg-gradient-to-r from-blue-500/10 via-slate-950 to-slate-950 p-8 text-center">
          <h2 className="text-3xl font-semibold">Ready to own your evidence?</h2>
          <p className="mt-3 text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
            Book a confidential discovery call. We’ll map your privilege risks, scope the build, and give you the exact playbook we’ll execute.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/start-project" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-300 via-blue-400 to-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-blue-500/20 transition hover:opacity-95">
              Schedule consult
            </Link>
            <Link href="/packages/estate" className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-emerald-300/60 hover:text-white">
              Compare tiers
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

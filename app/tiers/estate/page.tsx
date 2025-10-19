"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  HardDrive,
  Layers,
  LineChart,
  Shield,
  ShieldAlert,
  Signal,
  Siren,
} from 'lucide-react';

const outcomeMetrics = [
  { label: 'Ransomware resilience score', value: '99.7%', badgeClass: 'border border-teal-400/30 bg-teal-400/10 text-teal-200' },
  { label: 'Failover recovery window', value: '< 5 min', badgeClass: 'border border-cyan-400/30 bg-cyan-400/10 text-cyan-200' },
  { label: 'Active monitoring coverage', value: '24/7/365', badgeClass: 'border border-emerald-400/30 bg-emerald-400/10 text-emerald-200' },
];

const capabilityColumns = [
  {
    icon: HardDrive,
    title: 'Enterprise storage fabric',
    items: [
      'TrueNAS Enterprise or Synology HA pair with redundant controllers',
      'High-performance SSD caching, 10/25GbE core, redundant switching',
      'Global deduplication, compression, and tiering tuned per workload',
      'Multi-site replication with automatic failover sequencing',
    ],
  },
  {
    icon: Shield,
    title: 'Zero compromise security',
    items: [
      'Immutable backups with air-gapped layers and offline vaulting',
      'Privileged access management, password rotation, hardware keys',
      'SIEM, syslog, and security tooling integrated into your stack',
      'Quarterly ransomware tabletop exercises with leadership',
    ],
  },
  {
    icon: Signal,
    title: 'Operational continuity',
    items: [
      'Executive-ready reporting and compliance documentation (SOC 2, HIPAA, FINRA)',
      'Runbooks for legal, finance, and technical teams with play-by-play actions',
      '24/7 concierge response with escalation matrix and on-call rotations',
      'Joint change management, patching cadences, and horizon planning',
    ],
  },
];

const techBadges = [
  'TrueNAS Enterprise',
  'Synology HA',
  'Veeam Immutable',
  'WireGuard Mesh',
  'Azure AD / Okta',
  'CrowdStrike Falcon',
  'Splunk / Sumo Logic',
  'ZFS Snapshots',
  'Ransomware Rollback',
  'NIST 800-53 Controls',
].map((label) => ({
  label,
  badgeClass: 'border border-teal-400/25 bg-teal-400/10 text-teal-100',
}));

const processSteps = [
  {
    phase: '01',
    title: 'Executive alignment',
    copy: 'Tabletop review of business continuity requirements, regulatory posture, and stakeholder expectations.',
  },
  {
    phase: '02',
    title: 'Architecture lab',
    copy: 'Simulate workloads, validate recovery objectives, and sign off on capacity + performance envelopes.',
  },
  {
    phase: '03',
    title: 'Implementation sprint',
    copy: 'Parallel build-out of primary and secondary sites, data migration, and staged failovers with your team.',
  },
  {
    phase: '04',
    title: 'Continuity validation',
    copy: 'Immutable backup drills, ransomware detection tuning, and compliance documentation walkthroughs.',
  },
  {
    phase: '05',
    title: 'Concierge runway',
    copy: '24/7 monitoring, executive briefings, and quarterly resilience audits included for the first 12 months.',
  },
];

const conciergeHighlights = [
  'Priority Signal line with <30 minute acknowledgements for P1 events',
  'Monthly executive brief covering security KPIs, incidents, and roadmap',
  'Proactive patching, firmware updates, and configuration drift checks',
  'Quarterly disaster recovery rehearsal with board-ready evidence pack',
];

const executiveSummary = [
  {
    label: 'Outcome',
    copy: 'Dual-site infrastructure with ransomware recovery rehearsed and documented.',
  },
  {
    label: 'Investment',
    copy: 'Starting $250k–$1m in services; hardware passes through at cost.',
  },
  {
    label: 'Timeline',
    copy: 'Reference lab, build, and validation typically delivered in eight weeks with a year of concierge support.',
  },
];

const investmentBreakdown = [
  {
    label: 'Dual-site hardware & software',
    value: 'Pass-through (0% markup)',
    detail: 'Core, storage, firewalls, and backup media invoice direct from vendors for your approval.',
  },
  {
    label: 'Engagement investment',
    value: '$250k–$1m',
    detail: 'Covers executive scoping, deployment, automation orchestration, training, and 90-day concierge.',
  },
  {
    label: 'Concierge coverage',
    value: '12 months included',
    detail: 'Optional renewal from $3.5k+/mo (60% margin) funds 24/7 response and quarterly audits.',
  },
];

export default function EstateTier() {
  const shouldReduceMotion = useReducedMotion();
  const pricingMotionProps = shouldReduceMotion
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white egyptian-texture">
      <header className="sticky top-0 z-50 border-b border-teal-500/25 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/start-project"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-300 via-blue-400 to-emerald-300 px-4 py-2 text-sm font-semibold text-slate-900 shadow shadow-teal-500/20 transition hover:opacity-95"
          >
            Book estate discovery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <section className="mb-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-100">
              Estate tier
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Zero-downtime infrastructure for multi-site firms
            </h1>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-white/75 max-w-3xl">
              Estate packages two hardened sites, immutable backups, and concierge monitoring so uptime, compliance, and ransomware immunity stop being theoretical.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 text-left">
              {executiveSummary.map(({ label, copy }) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">{label}</div>
                  <p className="mt-2 leading-relaxed">{copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm text-white/60">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1">
                <ShieldAlert className="h-4 w-4 text-teal-200" /> Ransomware rollback under five minutes
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1">
                <Layers className="h-4 w-4 text-teal-200" /> Multi-location replication with failover
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1">
                <LineChart className="h-4 w-4 text-teal-200" /> Executive-grade reporting baked in
              </span>
            </div>
          </div>
          <motion.div
            className="relative"
            {...pricingMotionProps}
          >
            <div className="absolute -inset-5 rounded-3xl bg-teal-500/15 blur-3xl" />
                        <div className="relative rounded-3xl border border-teal-500/40 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-8 shadow-2xl">
              <div className="text-xs uppercase tracking-[0.3em] text-white/50">Investment</div>
              <div className="mt-4 text-5xl sm:text-6xl font-semibold text-teal-200">$250k–$1m</div>
              <p className="mt-4 text-sm text-white/65">Scope flexes with team size, automation depth, and resilience targets. Hardware billed transparently at cost.</p>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-teal-200" /> Architecture lab and tabletop drills before hardware ships
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-teal-200" /> Multi-site deployment with staged failovers and immutable backup tests
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-teal-200" /> 12 months of 24/7 concierge coverage included
                </li>
              </ul>
              <Link
                href="/start-project"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal-300 via-blue-400 to-emerald-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-teal-500/30 transition hover:opacity-95"
              >
                Scope your estate build
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </section>

        <section className="mb-16 rounded-2xl border border-white/12 bg-white/5 p-8">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-teal-400/40 text-teal-200">$</span>
            Investment breakdown
          </div>
          <p className="mt-4 text-sm text-white/65 max-w-3xl">
            Estate engagements separate hard costs from expert effort. Hardware ships at cost while our deployment and concierge crews carry the contribution needed to guarantee resilience and 24/7 coverage.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {investmentBreakdown.map(({ label, value, detail }) => (
              <div key={label} className="rounded-2xl border border-white/12 bg-slate-950/50 p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">{label}</div>
                <div className="mt-3 text-xl font-semibold text-white">{value}</div>
                <p className="mt-3 text-sm text-white/65">{detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.24em] text-white/45">
            If a refurbished asset lowers total cost, we document it, obtain approval, and pass the savings straight through.
          </p>
        </section>

        <section className="mb-16 rounded-3xl border border-teal-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-8 shadow-xl">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-teal-500/35">
              <Image
                src="/images/Tier 2 example.webp"
                alt="Estate tier network racks"
                width={640}
                height={640}
                sizes="(max-width: 1024px) 100vw, 32vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="overflow-hidden rounded-2xl border border-teal-500/35">
                <Image
                  src="/images/250k-tier.png"
                  alt="Estate command dashboards"
                  width={640}
                  height={320}
                  sizes="(max-width: 1024px) 100vw, 32vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-teal-500/35">
                <Image
                  src="/images/Tier 3 Example.webp"
                  alt="Estate failover control center"
                  width={640}
                  height={320}
                  sizes="(max-width: 1024px) 100vw, 32vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 rounded-2xl border border-white/12 bg-white/5 p-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div>
              <h2 className="text-3xl font-semibold">Estate performance in the field</h2>
              <p className="mt-3 text-sm text-white/65">What leadership teams receive after we deploy.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {outcomeMetrics.map(({ label, value, badgeClass }) => (
                  <div key={label} className={`rounded-2xl p-4 text-center ${badgeClass}`}>
                    <div className="text-3xl font-semibold">{value}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/60">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/12 bg-slate-950/50 p-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Board testimonial
              </div>
              <blockquote className="mt-4 text-lg text-white/85 italic">
                “Our estate deployment took ransomware recovery from theoretical to rehearsed. We have a failover we trust, documentation our board understands, and a partner watching the dials 24/7.”
              </blockquote>
              <p className="mt-4 text-sm text-white/55">Operating Partner · Private equity-backed healthcare network</p>
            </div>
          </div>
        </section>

        <section id="capabilities" className="mb-16">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Estate deliverables
            </div>
            <h2 className="mt-4 text-3xl font-semibold">Every control validated, documented, and monitored</h2>
            <p className="mt-3 mx-auto max-w-3xl text-sm text-white/65 sm:text-base">
              From redundant hardware to regulatory evidence, Estate is a full-spectrum transformation led end-to-end.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {capabilityColumns.map(({ icon: Icon, title, items }) => (
              <div key={title} className="rounded-2xl border border-white/12 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-teal-500/25 bg-teal-500/15 p-2">
                    <Icon className="h-5 w-5 text-teal-200" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
                <ul className="mt-5 space-y-3 text-sm text-white/70">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-teal-200" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
            <Siren className="h-4 w-4 text-teal-200" /> Estate engagement cadence
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map(({ phase, title, copy }) => (
              <div key={phase} className="rounded-xl border border-white/12 bg-slate-950/40 p-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-white/55">{phase}</span>
                  <div className="h-px flex-1 bg-white/12" />
                </div>
                <h3 className="mt-3 text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-xs text-white/60">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="concierge" className="mb-16 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="rounded-2xl border border-teal-500/30 bg-teal-500/10 p-6">
            <h2 className="text-2xl font-semibold text-teal-100">Concierge operations already included</h2>
            <p className="mt-3 text-sm text-teal-100/80">
              Estate engagements ship with a full year of stewarded operations while your team adopts the new muscle memory.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-teal-100/80">
              {conciergeHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-white" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/12 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">DarkGPT estate integration</h2>
            <p className="mt-3 text-sm text-white/65">
              Estate is the perfect launchpad for DarkGPT. Keep sensitive knowledge in-house while empowering analysts, paralegals, and operations teams with a tireless partner.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-teal-200" /> Runs on your GPU stack or an architected inference server
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-teal-200" /> Fine-tuned with your filings, SOPs, transcripts, and playbooks
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-teal-200" /> On-site engineer for a week to wire workflows and guardrails
              </li>
            </ul>
            <Link
              href="/darkgpt/request"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:border-emerald-300/60 hover:text-white"
            >
              Request DarkGPT brief
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section id="tech" className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Stack we stand behind</h2>
          <p className="mt-2 text-sm text-white/60">Every component is production-proven with global enterprises and regulated firms.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {techBadges.map(({ label, badgeClass }) => (
              <span key={label} className={`inline-flex items-center rounded-full px-3 py-1 text-xs ${badgeClass}`}>
                {label}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-teal-500/35 bg-gradient-to-r from-teal-500/10 via-slate-950 to-slate-950 p-8 text-center">
          <h2 className="text-3xl font-semibold">Let’s architect your estate deployment</h2>
          <p className="mt-3 mx-auto max-w-3xl text-sm text-white/70 sm:text-base">
            We’ll unpack your current landscape, quantify risk exposure, and deliver an estate blueprint with exact timelines, hardware, and outcomes.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/start-project"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-teal-300 via-blue-400 to-emerald-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-teal-500/25 transition hover:opacity-95"
            >
              Schedule estate briefing
            </Link>
            <Link
              href="/packages/estate"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-teal-300/60 hover:text-white"
            >
              View estate packages
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

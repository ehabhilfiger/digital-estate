"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  HardDrive,
  Plug,
  Server,
  Shield,
  Sparkles,
  SwitchCamera,
  Wifi,
} from 'lucide-react';

const outcomeMetrics = [
  { label: 'Cloud spend removed', value: '−62%', accentClass: 'text-emerald-300' },
  { label: 'Backups verified', value: 'Daily', accentClass: 'text-blue-300' },
  { label: 'Install window', value: '4 days', accentClass: 'text-amber-300' },
];

const capabilityColumns = [
  {
    icon: Server,
    title: 'Sovereign storage stack',
    items: [
      'Synology or TrueNAS platform with encrypted RAID and hot spare',
      '4–8 bay chassis tuned for quiet office installs',
      'Automated local + off-site snapshots with integrity checks',
      'WireGuard VPN with device-specific access keys',
    ],
  },
  {
    icon: Shield,
    title: 'Security baseline',
    items: [
      'Hardened firewall policies and intrusion alerts',
      'Role-based access, MFA rollout, and password rotations',
      'Audit dashboards for file access and backup status',
      'Zero-trust remote workflows with least privilege applied',
    ],
  },
  {
    icon: HardDrive,
    title: 'Enablement & stewardship',
    items: [
      'User runbooks, screencasts, and laminated quick cards',
      'Data migration off Dropbox, Drive, or legacy NAS',
      '90-day concierge support with same-day response',
      'Optional retainer for patching, monitoring, and growth planning',
    ],
  },
];

const techBadges = [
  {
    label: 'Synology DSM 7',
    badgeClass: 'border border-emerald-400/25 bg-emerald-400/10 text-emerald-200',
  },
  {
    label: 'TrueNAS Scale',
    badgeClass: 'border border-blue-400/25 bg-blue-400/10 text-blue-200',
  },
  {
    label: 'WireGuard VPN',
    badgeClass: 'border border-purple-400/25 bg-purple-400/10 text-purple-200',
  },
  {
    label: 'ZFS Snapshots',
    badgeClass: 'border border-emerald-400/25 bg-emerald-400/10 text-emerald-200',
  },
  {
    label: 'Hyper Backup',
    badgeClass: 'border border-blue-400/25 bg-blue-400/10 text-blue-200',
  },
  {
    label: '2FA Everywhere',
    badgeClass: 'border border-purple-400/25 bg-purple-400/10 text-purple-200',
  },
  {
    label: 'Nextcloud Docs',
    badgeClass: 'border border-emerald-400/25 bg-emerald-400/10 text-emerald-200',
  },
  {
    label: 'Tailored Runbooks',
    badgeClass: 'border border-blue-400/25 bg-blue-400/10 text-blue-200',
  },
];

const processSteps = [
  {
    label: '01',
    title: 'Discovery & bill of materials',
    copy: 'Laptop inventory, storage growth charts, remote workflow mapping. Every component spec’d before invoices go out.',
  },
  {
    label: '02',
    title: 'Build week',
    copy: 'On-site rack, cable, and harden. Migrate from cloud, test restores, and deliver training to every stakeholder.',
  },
  {
    label: '03',
    title: 'Validation',
    copy: 'Privilege audits, backup fire drills, and failover instructions documented and rehearsed together.',
  },
  {
    label: '04',
    title: 'Concierge runway',
    copy: '90 days of white-glove support with optional retainer if you want me in your corner long term.',
  },
];

const conciergeHighlights = [
  'Direct Signal/phone access with <4h response for priority issues',
  'Monthly health report covering storage, updates, and security',
  'Remote patches, monitoring, and hardware lifecycle planning',
];

export default function FoundationTier() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white egyptian-texture">
      <header className="sticky top-0 z-50 border-b border-blue-500/20 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/start-project"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-300 via-blue-400 to-amber-300 px-4 py-2 text-sm font-semibold text-slate-900 shadow shadow-blue-500/15 transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Request foundation build
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <section className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
            Foundation tier
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Sovereign storage for founders and boutique teams
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-white/75 max-w-3xl mx-auto">
            Replace Dropbox and scattered drives with a private NAS, encrypted backups, and remote access that you actually own. Designed, deployed, and supported by the architect who builds it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-white/60">
            <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1">NAS + VPN + backups in one engagement</span>
            <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1">Migrate off Google Drive and OneDrive</span>
            <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1">90-day concierge runway included</span>
          </div>
        </section>

        <nav className="hidden md:flex justify-center gap-3 mb-12" aria-label="Foundation quick navigation">
          {[
            { href: '#pricing', label: 'Pricing' },
            { href: '#capabilities', label: 'What you get' },
            { href: '#process', label: 'Process' },
            { href: '#concierge', label: 'Concierge' },
            { href: '#tech', label: 'Stack' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60 transition hover:border-emerald-300/60 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <motion.div
          className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h2 className="text-left text-lg font-semibold text-blue-200">Outcomes owners care about</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {outcomeMetrics.map(({ label, value, accentClass }) => (
                <div key={label} className="rounded-xl border border-white/12 bg-slate-950/40 p-4">
                  <div className={`text-2xl sm:text-3xl font-semibold ${accentClass}`}>{value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/55">{label}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/60">
              Recent builds include a litigation boutique, a photography studio, and a remote-first product team consolidating 14TB of assets.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl blue-glow">
            <Image
              src="/images/Tier 1 Example.png"
              alt="Foundation tier NAS deployment"
              width={960}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </motion.div>

        <section id="pricing" className="mb-16">
          <div className="rounded-2xl border border-blue-500/35 bg-gradient-to-br from-blue-500/12 via-slate-950 to-slate-950 px-6 py-10 md:px-10 md:py-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-200">
                  Investment
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-blue-100">Foundation infrastructure build</h2>
                <p className="mt-3 max-w-xl text-sm sm:text-base text-white/70">
                  Fixed-fee engagement for hardware specification, on-site installation, migration, training, and 90-day runway.
                </p>
                <ul className="mt-6 grid gap-2 text-sm text-white/65">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-300" /> Hardware sourced at cost with transparent invoices</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-300" /> Migration plan for every workstation and cloud drive</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-300" /> Includes runbooks and executive-facing documentation</li>
                </ul>
              </div>
              <div className="grid w-full max-w-xs gap-4">
                <div className="rounded-2xl border border-blue-500/35 bg-slate-950/70 px-6 py-5 text-center">
                  <div className="text-sm font-semibold text-blue-200">Project fee</div>
                  <div className="mt-2 text-4xl font-semibold text-blue-300">Starting $18k</div>
                  <p className="mt-3 text-xs text-white/60">Scope flexes with storage volume, user count, and automation depth.</p>
                </div>
                <div className="rounded-2xl border border-blue-500/30 bg-slate-950/70 px-6 py-5 text-center">
                  <div className="text-sm font-semibold text-blue-200">Managed runway</div>
                  <div className="mt-2 text-2xl font-semibold text-blue-300">$450+/mo</div>
                  <p className="mt-3 text-xs text-white/60">Optional concierge stewardship after the 90-day included period.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              What ships with the foundation build
            </div>
            <h2 className="mt-4 text-3xl font-semibold">Everything you need to own your data</h2>
            <p className="mt-3 text-sm sm:text-base text-white/65 max-w-2xl mx-auto">
              No MSP hand-offs or templated configurations. I architect, install, and validate every control personally.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {capabilityColumns.map(({ icon: Icon, title, items }) => (
              <div key={title} className="rounded-2xl border border-white/12 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-2">
                    <Icon className="h-5 w-5 text-blue-200" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
                <ul className="mt-5 space-y-3 text-sm text-white/70">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-blue-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div>
              <h2 className="text-3xl font-semibold">Proof and testimonials</h2>
              <p className="mt-3 text-sm text-white/65">Metrics your partners and finance team will appreciate.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { label: 'Avg. SaaS cost avoided', value: '62%', classes: 'border border-blue-500/25 bg-blue-500/10 text-blue-200' },
                  { label: 'Backup recovery time', value: '15 min', classes: 'border border-emerald-400/25 bg-emerald-400/10 text-emerald-200' },
                  { label: 'Support satisfaction', value: '9.8/10', classes: 'border border-amber-400/25 bg-amber-400/10 text-amber-200' },
                ].map(({ label, value, classes }) => (
                  <div key={label} className={`rounded-xl p-4 text-center ${classes}`}>
                    <div className="text-3xl font-semibold">{value}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/60">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
              <div className="flex items-center gap-3 text-blue-200">
                <SwitchCamera className="h-5 w-5" />
                <span className="text-sm uppercase tracking-[0.24em]">Client note</span>
              </div>
              <blockquote className="mt-4 text-lg text-white/85 italic">
                “We replaced six SaaS tools with one rack I can touch. Restores are instant, remote access is simple, and every file stays on our terms.”
              </blockquote>
              <p className="mt-4 text-sm text-white/55">Managing Partner · Boutique legal practice (Chicago)</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/55">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1"><Wifi className="h-3.5 w-3.5 text-blue-200" /> Secure remote work ready</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1"><Plug className="h-3.5 w-3.5 text-blue-200" /> Install complete in under a week</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1"><Sparkles className="h-3.5 w-3.5 text-blue-200" /> Runbooks your team will actually use</span>
          </div>
        </section>

        <section id="process" className="mb-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">How the engagement runs</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {processSteps.map(({ label, title, copy }) => (
                <div key={label} className="rounded-xl border border-white/12 bg-slate-950/40 p-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-white/55">{label}</span>
                    <div className="h-px flex-1 bg-white/12" />
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-xs text-white/60">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="concierge" className="mb-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] items-start">
            <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6">
              <h2 className="text-2xl font-semibold text-blue-100">Optional managed concierge</h2>
              <p className="mt-3 text-sm text-blue-100/80">
                Stay on retainer when you want the architect who built your stack to keep it humming, patched, and future-proof.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-blue-100/80">
                {conciergeHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-emerald-200" /> {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold">DarkGPT add-on (limited)</h2>
              <p className="mt-3 text-sm text-white/65">
                Eligible foundation builds can bolt on DarkGPT — the fully private, uncensored LLM tuned to your voice and playbooks.
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/65">
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-blue-300" /> On-prem inference with zero telemetry</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-blue-300" /> One-week on-site fine-tuning and workflow scripting</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-blue-300" /> Pricing scoped during discovery (limited slots)</li>
              </ul>
              <Link
                href="/darkgpt/request"
                className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:border-emerald-300/60 hover:text-white"
              >
                Request DarkGPT brief
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section id="tech" className="mb-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Foundation stack</h2>
            <p className="mt-2 text-sm text-white/60">Every tool self-hosted, documented, and under your control.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {techBadges.map(({ label, badgeClass }) => (
                <span key={label} className={`inline-flex items-center rounded-full px-3 py-1 text-xs ${badgeClass}`}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-blue-500/25 bg-gradient-to-r from-blue-500/10 via-slate-950 to-slate-950 p-8 text-center">
          <h2 className="text-3xl font-semibold">Ready to reclaim your files?</h2>
          <p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl mx-auto">
            Book a discovery call. We’ll map your current sprawl, size the hardware, and hand you the exact playbook we’ll execute.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/start-project"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-300 via-blue-400 to-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-blue-500/20 transition hover:opacity-95"
            >
              Schedule consultation
            </Link>
            <Link
              href="/packages/foundation"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-emerald-300/60 hover:text-white"
            >
              Compare packages
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

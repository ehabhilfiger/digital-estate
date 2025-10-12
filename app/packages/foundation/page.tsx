"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  BookOpen,
  Clock3,
  Wallet,
  Shield,
  Sparkles,
  Server,
  Target,
  Users,
} from 'lucide-react';

const deliverableColumns = [
  {
    icon: Server,
    title: 'Infrastructure deployed',
    items: [
      'Synology or TrueNAS appliance sized for 8–16TB usable storage',
      'Hybrid SSD/HDD pools with RAID protection and SMART monitoring',
      'WireGuard remote access with device-specific keys',
      'Network optimization, VLAN hygiene, and UPS integration',
    ],
  },
  {
    icon: Shield,
    title: 'Security & continuity',
    items: [
      'Zero-trust user onboarding, MFA rollout, and password rotation',
      'Encrypted local + cloud backup policy with restore drills',
      'Firewall hardening and automated patch cadence for appliances',
      'Incident response cheat sheet with escalation contacts',
    ],
  },
  {
    icon: BookOpen,
    title: 'Enablement toolkit',
    items: [
      'Custom runbook with screenshots, QR-coded quick references',
      'Video walkthrough for key workflows and offboarding checklists',
      'On-site training session for up to five team members',
      '30-day concierge runway for tweaks and questions',
    ],
  },
];

const processSteps = [
  { phase: 'Week 1', title: 'Discovery & bill of materials', copy: 'Inventory devices, map data sources, finalize hardware list, and schedule install.' },
  { phase: 'Week 2', title: 'Build & configure', copy: 'Rack, cable, and harden the NAS. Configure VPN, backups, and monitoring.' },
  { phase: 'Week 3', title: 'Migrate & validate', copy: 'Move critical files, run restore tests, and rehearse remote access workflows.' },
  { phase: 'Week 4', title: 'Training & concierge', copy: 'Deliver runbooks, conduct training, and provide 30-day direct support.' },
];

const idealFits = [
  {
    title: 'Boutique founders',
    description: 'Owners who want local copies of contracts, creative assets, and financials without ongoing SaaS cost bleed.',
    accentClass: 'border border-sky-400/30 bg-sky-400/10 text-sky-200',
  },
  {
    title: 'Remote-first teams',
    description: 'Teams needing a secure, shared drive with versioned backups and VPN access for hybrid staff.',
    accentClass: 'border border-emerald-400/30 bg-emerald-400/10 text-emerald-200',
  },
  {
    title: 'Privacy-max households',
    description: 'Families and creators who want photos, videos, and documents stored at home with simple remote reach.',
    accentClass: 'border border-amber-400/30 bg-amber-400/10 text-amber-200',
  },
];

const comparisonRows = [
  { feature: 'Ongoing cost', foundation: '$0 (after install)', cloud: '$25–$60/mo per user' },
  { feature: 'Data ownership', foundation: '100% local + encrypted', cloud: 'Vendor-controlled servers' },
  { feature: 'Restore speed', foundation: 'Minutes over LAN', cloud: 'Dependent on ISP + throttling' },
  { feature: 'Security posture', foundation: 'Hardened NAS + MFA', cloud: 'Shared responsibility' },
  { feature: 'Customization', foundation: 'Tailored to workflows', cloud: 'Limited to vendor roadmap' },
];

const techBadges = [
  { label: 'Synology DSM 7', badgeClass: 'border border-sky-400/25 bg-sky-400/10 text-sky-200' },
  { label: 'TrueNAS Core', badgeClass: 'border border-emerald-400/25 bg-emerald-400/10 text-emerald-200' },
  { label: 'WireGuard VPN', badgeClass: 'border border-purple-400/25 bg-purple-400/10 text-purple-200' },
  { label: 'Nextcloud Suite', badgeClass: 'border border-sky-400/25 bg-sky-400/10 text-sky-200' },
  { label: 'Syncthing', badgeClass: 'border border-emerald-400/25 bg-emerald-400/10 text-emerald-200' },
  { label: 'Snapshot Replication', badgeClass: 'border border-purple-400/25 bg-purple-400/10 text-purple-200' },
  { label: 'Restic Backups', badgeClass: 'border border-sky-400/25 bg-sky-400/10 text-sky-200' },
  { label: 'Uptime Kuma', badgeClass: 'border border-emerald-400/25 bg-emerald-400/10 text-emerald-200' },
];

const outcomeHighlights = [
  { label: 'Cloud spend avoided', value: '≈$1.8k/yr', icon: Wallet },
  { label: 'Storage delivered', value: '8–16TB', icon: Server },
  { label: 'Install timeline', value: '4 weeks', icon: Clock3 },
];

export default function FoundationPackage() {
  const shouldReduceMotion = useReducedMotion();
  const heroMotionProps = shouldReduceMotion
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white egyptian-texture">
      <header className="sticky top-0 z-50 border-b border-sky-500/25 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to packages
          </Link>
          <Link
            href="/start-project"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-300 via-blue-400 to-amber-300 px-4 py-2 text-sm font-semibold text-slate-900 shadow shadow-sky-500/20 transition hover:opacity-95"
          >
            Start your foundation build
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/35 bg-sky-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
            Foundation package
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            The turnkey starting point for sovereign storage
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-white/75 max-w-3xl mx-auto">
            Own your files, backups, and remote access without hiring an IT department. Foundation installs a private NAS, VPN, and backup strategy tailored to your household or small firm.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-white/60">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1"><Target className="h-4 w-4 text-sky-200" /> Replace Dropbox in 30 days</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1"><Users className="h-4 w-4 text-sky-200" /> Designed for teams of 1–10</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1"><Sparkles className="h-4 w-4 text-sky-200" /> Concierge training included</span>
          </div>
        </section>

        <motion.div
          className="mb-16 grid gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] items-center"
          {...heroMotionProps}
        >
          <div className="rounded-2xl border border-white/12 bg-white/5 p-6 md:p-8">
            <h2 className="text-left text-lg font-semibold text-sky-200">What foundation unlocks</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {outcomeHighlights.map(({ label, value, icon: Icon }) => (
                <div key={label} className="rounded-xl border border-white/12 bg-slate-950/50 p-4">
                  <Icon className="h-5 w-5 text-sky-200" />
                  <div className="mt-3 text-2xl font-semibold text-white">{value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/55">{label}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/60">
              Pricing reflects typical installs ranging $3.5k–$6k depending on storage, client devices, and automation depth. Hardware is billed at cost with full invoices.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-sky-500/30 shadow-2xl blue-glow">
            <Image
              src="/images/foundation.png"
              alt="Foundation package deployment"
              width={960}
              height={720}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </motion.div>

        <section className="mb-16 rounded-2xl border border-sky-500/35 bg-gradient-to-br from-sky-500/12 via-slate-950 to-slate-950 p-8 text-center">
          <div className="text-4xl font-semibold text-sky-200">$3,500 – $6,000</div>
          <p className="mt-3 text-sm text-white/65">One-time project fee covering discovery, install, migration, training, and 30-day concierge support.</p>
          <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/55">Hardware at cost • Transparent invoices • No subscriptions</p>
        </section>

        <section id="deliverables" className="mb-16">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              What’s included
            </div>
            <h2 className="mt-4 text-3xl font-semibold">Infrastructure, security, and onboarding handled for you</h2>
            <p className="mt-3 mx-auto max-w-3xl text-sm text-white/65 sm:text-base">
              Foundation is a white-glove engagement, not a DIY kit. We spec hardware, install on-site, migrate your data, and leave you with a polished system.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {deliverableColumns.map(({ icon: Icon, title, items }) => (
              <div key={title} className="rounded-2xl border border-white/12 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-sky-500/25 bg-sky-500/15 p-2">
                    <Icon className="h-5 w-5 text-sky-200" />
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
          <h2 className="text-2xl font-semibold">Who foundation is perfect for</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {idealFits.map(({ title, description, accentClass }) => (
              <div key={title} className={`rounded-2xl p-6 text-left ${accentClass}`}>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm text-white/70">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-8 overflow-x-auto">
          <h2 className="text-2xl font-semibold mb-6">Foundation vs. keeping everything in the cloud</h2>
          <table className="w-full min-w-[640px] text-left text-sm sm:text-base">
            <thead className="text-white/60">
              <tr className="border-b border-white/12">
                <th className="pb-3 pr-4 font-semibold">Feature</th>
                <th className="pb-3 pr-4 font-semibold text-sky-200">Foundation package</th>
                <th className="pb-3 font-semibold text-white/50">Dropbox / Google Drive</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(({ feature, foundation, cloud }) => (
                <tr key={feature} className="border-b border-white/10 last:border-0">
                  <td className="py-3 pr-4 text-white/70">{feature}</td>
                  <td className="py-3 pr-4 text-sky-200">{foundation}</td>
                  <td className="py-3 text-white/50">{cloud}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
            <Clock3 className="h-4 w-4 text-sky-200" /> Implementation cadence
          </div>
          <div className="mt-6 space-y-5">
            {processSteps.map(({ phase, title, copy }) => (
              <div key={phase} className="rounded-xl border border-white/12 bg-slate-950/40 p-5">
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

        <section className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Tech stack we trust for foundation deployments</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {techBadges.map(({ label, badgeClass }) => (
              <span key={label} className={`inline-flex items-center rounded-full px-3 py-1 text-xs ${badgeClass}`}>
                {label}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-sky-500/35 bg-gradient-to-r from-sky-500/10 via-slate-950 to-slate-950 p-8 text-center">
          <h2 className="text-3xl font-semibold">Ready to reclaim your files?</h2>
          <p className="mt-3 text-sm text-white/70 max-w-2xl mx-auto">
            Book a discovery call. We’ll assess your current storage, size the right hardware, and hand you the exact plan we’ll execute together.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/start-project"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-300 via-blue-400 to-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/20 transition hover:opacity-95"
            >
              Schedule consultation
            </Link>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-sky-300/60 hover:text-white"
            >
              Compare all packages
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

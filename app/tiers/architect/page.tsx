"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Cpu,
  GaugeCircle,
  Lock,
  Radar,
  Server,
  Shield,
  Sparkles,
  Workflow,
} from 'lucide-react';

const outcomeMetrics = [
  { label: 'Fine-tune throughput gain', value: '+480%', accentClass: 'text-sky-300' },
  { label: 'Inference latency reduction', value: '−42%', accentClass: 'text-emerald-300' },
  { label: 'Availability commitment', value: '99.995%', accentClass: 'text-amber-300' },
];

const capabilityColumns = [
  {
    icon: Cpu,
    title: 'Compute fabric',
    items: [
      'Proxmox VE or Kubernetes cluster with GPU pass-through and MIG partitioning',
      'HGX / RTX Ada racks tuned for training and low-latency inference',
      'Air and liquid cooling strategies with live thermal telemetry',
      'Automated failover and rolling upgrades with zero interrupt deploys',
    ],
  },
  {
    icon: Workflow,
    title: 'AI operations',
    items: [
      'Model registry, dataset lineage, and secure artifact pipelines',
      'vLLM, Ollama, and Triton inference endpoints with autoscaling',
      'GPU-aware CI/CD for experiments, canary releases, and rollbacks',
      'Observability stack spanning GPU utilization, tokens/sec, and drift',
    ],
  },
  {
    icon: Shield,
    title: 'Security & compliance',
    items: [
      'Layered zero-trust segmentation with hardware MFA enforcement',
      'Immutable backups, air-gapped vaults, and encrypted data in-flight/at-rest',
      'SOC 2, HIPAA, and ITAR-ready documentation packs for regulators',
      '24/7 threat monitoring, playbooks, and board-ready evidence',
    ],
  },
];

const techBadges = [
  { label: 'Proxmox VE HA', badgeClass: 'border border-sky-400/30 bg-sky-400/10 text-sky-200' },
  { label: 'NVIDIA HGX / Ada', badgeClass: 'border border-emerald-400/30 bg-emerald-400/10 text-emerald-200' },
  { label: 'Kubernetes + KubeVirt', badgeClass: 'border border-cyan-400/30 bg-cyan-400/10 text-cyan-200' },
  { label: 'vLLM / Triton', badgeClass: 'border border-purple-400/30 bg-purple-400/10 text-purple-200' },
  { label: 'Ceph + ZFS Hybrid', badgeClass: 'border border-sky-400/30 bg-sky-400/10 text-sky-200' },
  { label: 'OPA / Vault', badgeClass: 'border border-emerald-400/30 bg-emerald-400/10 text-emerald-200' },
  { label: 'Grafana + Loki', badgeClass: 'border border-cyan-400/30 bg-cyan-400/10 text-cyan-200' },
  { label: 'SIEM + SOAR', badgeClass: 'border border-purple-400/30 bg-purple-400/10 text-purple-200' },
];

const processSteps = [
  {
    phase: '01',
    title: 'Vision & risk alignment',
    copy: 'Executive working session to quantify success metrics, regulatory constraints, and adversary assumptions.',
  },
  {
    phase: '02',
    title: 'Reference architecture lab',
    copy: 'Model workloads simulated, data gravity mapped, and hardware tuned in a digital twin before anything ships.',
  },
  {
    phase: '03',
    title: 'Build sprint',
    copy: 'On-site rack, cable, tune, and migrate. GPU orchestration, storage, and security controls live-handed with your leads.',
  },
  {
    phase: '04',
    title: 'AI operations enablement',
    copy: 'CI/CD, experiment tracking, and response playbooks installed with paired sessions for your data science and infra teams.',
  },
  {
    phase: '05',
    title: 'Concierge runway',
    copy: '12-month white-glove stewardship with weekly standups, roadmap reviews, and 30-minute P1 response.',
  },
];

const conciergeHighlights = [
  'Dedicated architecture channel with encrypted Signal/Matrix bridge',
  'Weekly GPU utilization, cost avoidance, and risk posture reports',
  'Proactive firmware, driver, and container updates validated in staging',
  'Quarterly red-team drills with postmortem and board-ready evidence pack',
];

const useCaseTiles = [
  {
    icon: Radar,
    title: 'Advanced research labs',
    description: 'National labs and think tanks requiring sovereign compute, classified workflows, and reproducibility.',
  },
  {
    icon: Server,
    title: 'Global quant teams',
    description: 'Latency-sensitive AI infrastructure that keeps proprietary models and alpha entirely in-house.',
  },
  {
    icon: Lock,
    title: 'Biodefense & healthcare',
    description: 'HIPAA + ITAR aligned stacks for genomic, biomedical, and clinical AI workloads with strict privacy mandates.',
  },
];

const proofStats = [
  { value: '480%', label: 'Fine-tune throughput vs. prior cloud stack', badgeClass: 'border border-sky-400/30 bg-sky-400/10 text-sky-200' },
  { value: '42%', label: 'Latency reduction across live inference', badgeClass: 'border border-emerald-400/30 bg-emerald-400/10 text-emerald-200' },
  { value: '7.2ms', label: 'Median token time on flagship deployment', badgeClass: 'border border-amber-400/30 bg-amber-400/10 text-amber-200' },
];

const galleryImages = [
  { src: '/images/Tier 3 Example.webp', alt: 'Architect tier GPU rack' },
  { src: '/images/250k-tier.png', alt: 'High density compute layout' },
  { src: '/images/architect.png', alt: 'Operations bridge and analytics wall' },
];

export default function ArchitectTier() {
  const shouldReduceMotion = useReducedMotion();
  const heroMotionProps = shouldReduceMotion
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white egyptian-texture">
      <header className="sticky top-0 z-50 border-b border-sky-500/30 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/start-project"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-300 via-blue-400 to-emerald-300 px-4 py-2 text-sm font-semibold text-slate-900 shadow shadow-sky-500/25 transition hover:opacity-95"
          >
            Book architecture intensive
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
            Architect tier
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Sovereign AI command centers for mission-critical teams
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-white/75 max-w-4xl mx-auto">
            Multi-site GPU fabrics, deterministic data pipelines, and concierge AI operations engineered for labs, quant teams, and government partners who refuse to ship proprietary intelligence to the cloud.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-white/60">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1"><Server className="h-4 w-4 text-sky-200" /> On-prem HGX clusters</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1"><Sparkles className="h-4 w-4 text-sky-200" /> LLM, diffusion, and multimodal ready</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1"><GaugeCircle className="h-4 w-4 text-sky-200" /> Runbooks + observability included</span>
          </div>
        </section>

        <nav className="hidden md:flex justify-center gap-3 mb-12" aria-label="Architect tier quick navigation">
          {[
            { href: '#pricing', label: 'Pricing' },
            { href: '#capabilities', label: 'Capabilities' },
            { href: '#proof', label: 'Proof' },
            { href: '#process', label: 'Process' },
            { href: '#darkgpt', label: 'DarkGPT' },
            { href: '#tech', label: 'Stack' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60 transition hover:border-sky-300/60 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <motion.div
          className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] items-center mb-16"
          {...heroMotionProps}
        >
          <div className="rounded-2xl border border-white/12 bg-white/5 p-6 md:p-8">
            <h2 className="text-left text-lg font-semibold text-sky-200">Outcome profile</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {outcomeMetrics.map(({ label, value, accentClass }) => (
                <div key={label} className="rounded-xl border border-white/12 bg-slate-950/50 p-4">
                  <div className={`text-2xl sm:text-3xl font-semibold ${accentClass}`}>{value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/55">{label}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/60">
              Benchmarked across recent architect deployments supporting national labs, global quant firms, and healthcare AI platforms.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-sky-500/30 shadow-2xl blue-glow">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              width={960}
              height={720}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </motion.div>

        <section className="mb-16 rounded-3xl border border-sky-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-8 shadow-xl">
          <div className="grid gap-4 md:grid-cols-3">
            {galleryImages.map((image) => (
              <div key={image.src} className="overflow-hidden rounded-2xl border border-sky-500/25">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={640}
                  height={420}
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="mb-16">
          <div className="rounded-2xl border border-sky-500/35 bg-gradient-to-br from-sky-500/12 via-slate-950 to-slate-950 px-6 py-10 md:px-10 md:py-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/35 bg-sky-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-200">
                  Engagement
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-sky-100">Architect deployment</h2>
                <p className="mt-3 max-w-xl text-sm sm:text-base text-white/70">
                  Tailored blueprint, multi-site hardware procurement, on-site implementation, and 12-month concierge coverage. Hardware billed at cost with full vendor transparency.
                </p>
                <ul className="mt-6 grid gap-2 text-sm text-white/65">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-sky-300" /> GPU, storage, and network stack spec’d and sourced for you</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-sky-300" /> Includes model migration, dataset verification, and workload validation</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-sky-300" /> Dedicated architect on-site through go-live and hypercare</li>
                </ul>
              </div>
              <div className="grid w-full max-w-xs gap-4">
                <div className="rounded-2xl border border-sky-500/35 bg-slate-950/70 px-6 py-5 text-center">
                  <div className="text-sm font-semibold text-sky-200">Architecture fee</div>
                  <div className="mt-2 text-4xl font-semibold text-sky-300">Starting $150k</div>
                  <p className="mt-3 text-xs text-white/60">Final scope driven by GPU density, multi-site replication, and compliance deliverables.</p>
                </div>
                <div className="rounded-2xl border border-sky-500/30 bg-slate-950/70 px-6 py-5 text-center">
                  <div className="text-sm font-semibold text-sky-200">Managed runway</div>
                  <div className="mt-2 text-2xl font-semibold text-sky-300">$2.5k+/mo</div>
                  <p className="mt-3 text-xs text-white/60">Optional stewardship after included 12-month concierge period.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="mb-16">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Capability blueprint
            </div>
            <h2 className="mt-4 text-3xl font-semibold">Everything required for sovereign AI infrastructure</h2>
            <p className="mt-3 mx-auto max-w-3xl text-sm text-white/65 sm:text-base">
              Compute, data, and governance delivered as one cohesive system with documentation your board, regulators, and operators will trust.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {capabilityColumns.map(({ icon: Icon, title, items }) => (
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

        <section id="proof" className="mb-16 rounded-2xl border border-white/12 bg-white/5 p-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div>
              <h2 className="text-3xl font-semibold">Performance receipts</h2>
              <p className="mt-3 text-sm text-white/65">The operating metrics we deliver and audit every month.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {proofStats.map(({ value, label, badgeClass }) => (
                  <div key={label} className={`rounded-2xl p-4 text-center ${badgeClass}`}>
                    <div className="text-3xl font-semibold">{value}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/60">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/12 bg-slate-950/50 p-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Testimonial
              </div>
              <blockquote className="mt-4 text-lg text-white/85 italic">
                “We moved off the cloud into an architect deployment and shipped four fine-tunes per week with full audit trails. Compliance signed off on the first pass.”
              </blockquote>
              <p className="mt-4 text-sm text-white/55">Director of Research · Fortune 100 defense contractor</p>
            </div>
          </div>
        </section>

        <section id="process" className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
            <Workflow className="h-4 w-4 text-sky-200" /> Engagement cadence
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

        <section id="darkgpt" className="mb-16 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="rounded-2xl border border-sky-500/30 bg-sky-500/10 p-6">
            <h2 className="text-2xl font-semibold text-sky-100">Concierge oversight already included</h2>
            <p className="mt-3 text-sm text-sky-100/80">
              Architect deployments ship with a year of managed operations while your internal team absorbs the stack.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-sky-100/80">
              {conciergeHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-white" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/12 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">DarkGPT architect program</h2>
            <p className="mt-3 text-sm text-white/65">
              Embed DarkGPT directly into your sovereign fabric. Fully uncensored, on-prem, and fine-tuned to your doctrine with safeguarded escalation paths.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-sky-200" /> Private inference across GPU tiers with zero telemetry</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-sky-200" /> Multi-agent automation wired into your secure data lake</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-sky-200" /> On-site architect for one week of workflow scripting and red-teaming</li>
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
          <h2 className="text-2xl font-semibold">Stack we operate and support</h2>
          <p className="mt-2 text-sm text-white/60">Every component validated in production environments with continuous monitoring and rollback plans.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {techBadges.map(({ label, badgeClass }) => (
              <span key={label} className={`inline-flex items-center rounded-full px-3 py-1 text-xs ${badgeClass}`}>
                {label}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Who we build for
            </div>
            <h2 className="mt-4 text-3xl font-semibold">Use cases already scaling on architect deployments</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {useCaseTiles.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-sky-500/40">
                <Icon className="h-10 w-10 text-sky-200 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-white/70">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-sky-500/35 bg-gradient-to-r from-sky-500/10 via-slate-950 to-slate-950 p-8 text-center">
          <h2 className="text-3xl font-semibold">Let’s design your sovereign AI estate</h2>
          <p className="mt-3 mx-auto max-w-3xl text-sm text-white/70 sm:text-base">
            We’ll audit your current workloads, size the ideal hardware footprint, and hand you the execution plan we’ll deliver end-to-end.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/start-project"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-300 via-blue-400 to-emerald-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/25 transition hover:opacity-95"
            >
              Schedule architecture briefing
            </Link>
            <Link
              href="/packages/architect"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-sky-300/60 hover:text-white"
            >
              View architect packages
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

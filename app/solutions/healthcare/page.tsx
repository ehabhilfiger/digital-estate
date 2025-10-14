"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Check,
  FileText,
  HeartPulse,
  Lock,
  Shield,
  Stethoscope,
  Thermometer,
  Users,
} from 'lucide-react';
  // Clock,

const outcomeStats = [
  { label: 'Ransomware recoveries', value: '0 downtime hours', accent: 'text-emerald-300' },
  { label: 'HIPAA violations', value: '0', accent: 'text-blue-300' },
  { label: 'Average deployment', value: '32 days', accent: 'text-amber-300' },
];

const riskSignals = [
  {
    icon: AlertTriangle,
    title: 'Healthcare is target #1',
    copy: '2024 ransomware losses averaged $10.93M per incident. Vendor outages cascade into clinical downtime and OCR investigations.',
  },
  {
    icon: Thermometer,
    title: 'Clinical continuity',
    copy: 'You need HA clustering and failover drills so EMR, imaging, and nurse charts stay live even when power or WAN fails.',
  },
  {
    icon: Shield,
    title: 'Regulators demand evidence',
    copy: 'OCR, HHS, and state auditors expect mapped safeguards, retention logs, and incident playbooks you can actually hand them.',
  },
];

const capabilityColumns = [
  {
    icon: HeartPulse,
    title: 'Clinical infrastructure',
    bullets: [
      'Redundant TrueNAS SCALE clusters with encrypted replication & immutable snapshots',
      'pfSense HA perimeter with microsegmented VLANs for clinical, guest, OT, and research zones',
      'WireGuard mesh and device attestation so physicians can chart from anywhere securely',
      'Air-gapped disaster vault with weekly recovery rehearsals and compliance evidence',
    ],
  },
  {
    icon: FileText,
    title: 'EHR + integrations',
    bullets: [
      'OpenEMR / GNU Health stack tuned for HL7, FHIR, PACS, and lab interfaces',
      'Secure patient portal with appointment flows, refill routing, and payments',
      'Clinical decision support and e-prescribing flows with DEA EPCS controls',
      'Imaging, telemetry, and nurse station dashboards optimized for low latency',
    ],
  },
  {
    icon: Lock,
    title: 'Governance & compliance',
    bullets: [
      'Evidence kit mapping every control to HIPAA Security, Privacy, and Breach rules',
      'Full audit logging with retention policies, SIEM forwarding, and incident response runbooks',
      'Role-based access, least-privilege blueprints, and privileged session monitoring',
      'BAA-ready documentation, risk analyses, and OCR audit prep binders',
    ],
  },
];

const conciergeHighlights = [
  'Clinical hotlines with <2h critical SLA and direct architect access',
  'Quarterly tabletop drills, ransomware rehearsals, and failover validations',
  'Continuous compliance evidence packs for OCR, HHS, and cyber insurers',
];

const processRoadmap = [
  {
    step: '01',
    title: 'Risk & continuity workshop',
    detail: 'Map every clinical system, downtime tolerance, and regulatory commitment with your CMO, COO, and IT lead.',
  },
  {
    step: '02',
    title: 'Architecture sign-off',
    detail: 'Bill of materials, network diagrams, EHR integration plan, and HIPAA safeguard mapping delivered for executive approval.',
  },
  {
    step: '03',
    title: 'Build week on-site',
    detail: 'Rack, cable, harden, migrate data, and rehearse failover. Nurses and clinicians get live training on day four.',
  },
  {
    step: '04',
    title: 'Validation & concierge',
    detail: 'Tabletop ransomware drill, documentation handoff, then 90-day white-glove stewardship with managed options.',
  },
];

const techStack = [
  'TrueNAS SCALE HA',
  'Synology Enterprise',
  'pfSense HA Clusters',
  'WireGuard Mesh',
  'OpenEMR / GNU Health',
  'Keycloak IAM',
  'PostgreSQL Audit Trail',
  'Wazuh SIEM',
  'MinIO Object Storage',
  'Ceph Snapshots',
  'Matrix Secure Messaging',
  'Grafana Clinical Ops',
];

export default function HealthcareSolution() {
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
            Book clinical discovery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <section id="overview" className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
            Healthcare Solution
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            HIPAA-grade infrastructure for hospitals, clinics, and critical care
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-white/75 max-w-3xl mx-auto">
            You get sovereign EHR, imaging, and collaboration systems hardened against ransomware, tuned for clinician workflows, and documented for regulators.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-white/60">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">HIPAA + HITECH safeguards mapped</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">99.99% clinical uptime drills</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Ransomware tabletop rehearsals</span>
          </div>
        </section>

        <nav className="hidden md:flex justify-center gap-3 mb-12" aria-label="Section navigation">
          {[
            { href: '#pricing', label: 'Pricing' },
            { href: '#risk', label: 'Why now' },
            { href: '#capabilities', label: 'Capabilities' },
            { href: '#evidence', label: 'Evidence' },
            { href: '#process', label: 'Process' },
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
            <h2 className="text-left text-lg font-semibold text-blue-200">Clinical outcome metrics</h2>
            <div className="mt-4 grid sm:grid-cols-3 gap-4">
              {outcomeStats.map(({ label, value, accent }) => (
                <div key={label} className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                  <div className={`text-2xl sm:text-3xl font-semibold ${accent}`}>{value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/50">{label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-sm text-white/60">
              Recent deployments include a 24-operatory dental chain, a 60-bed rehabilitation hospital, and an urgent care network with DarkGPT triage assistant.
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl blue-glow">
            <Image
              src="/images/hospital.png"
              alt="High-availability healthcare infrastructure rack"
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
                <h2 className="mt-4 text-3xl font-semibold text-blue-200">Sovereign Clinical Cloud</h2>
                <p className="mt-3 max-w-xl text-sm sm:text-base text-white/70">
                  Fixed-fee hardware blueprint, build, and migration. Includes executive-ready compliance artifacts and on-site training for clinicians and admins.
                </p>
                <ul className="mt-6 grid gap-2 text-sm text-white/65">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-300" /> Architecture, procurement guidance, and installation included</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-300" /> OCR/HHS evidence pack and BAA-ready documentation</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-300" /> 90-day concierge stewardship with physician hotline</li>
                </ul>
              </div>
              <div className="grid gap-4 w-full max-w-xs">
                <div className="rounded-2xl border border-blue-500/40 bg-slate-950/70 px-6 py-5 text-center">
                  <div className="text-sm font-semibold text-blue-200">Project fee</div>
                  <div className="mt-2 text-4xl font-semibold text-blue-300">Starting $35k</div>
                  <p className="mt-3 text-xs text-white/60">Scope flexes by facility size, imaging load, and integration depth.</p>
                </div>
                <div className="rounded-2xl border border-blue-500/30 bg-slate-950/70 px-6 py-5 text-center">
                  <div className="text-sm font-semibold text-blue-200">Managed concierge</div>
                  <div className="mt-2 text-2xl font-semibold text-blue-300">$2.5k+/mo</div>
                  <p className="mt-3 text-xs text-white/60">24/7 monitoring, compliance packs, and quarterly ransomware rehearsals.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="risk" className="mb-16">
          <div className="grid gap-6 md:grid-cols-3">
            {riskSignals.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="rounded-2xl border border-white/12 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-2">
                    <Icon className="h-5 w-5 text-blue-200" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
                <p className="mt-4 text-sm text-white/65">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="capabilities" className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Built, audited, and operated by one architect
            </div>
            <h2 className="mt-4 text-3xl font-semibold">What you get end-to-end</h2>
            <p className="mt-3 text-white/65 text-sm sm:text-base max-w-2xl mx-auto">
              No MSP handoffs. I design, deploy, document, and personally shepherd every healthcare environment.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {capabilityColumns.map(({ icon: Icon, title, bullets }) => (
              <div key={title} className="rounded-2xl border border-white/12 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-2">
                    <Icon className="h-5 w-5 text-blue-200" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
                <ul className="mt-5 space-y-3 text-sm text-white/70">
                  {bullets.map((item) => (
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

        <section id="evidence" className="mb-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div>
                <h2 className="text-3xl font-semibold">Evidence and clinical wins</h2>
                <p className="mt-3 text-sm text-white/65">Numbers you can take to the C-suite and compliance board.</p>
                <div className="mt-6 grid sm:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-blue-500/25 bg-blue-500/10 p-4 text-center">
                    <div className="text-3xl font-semibold text-blue-200">99.99%</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/55">Clinical uptime achieved</div>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-center">
                    <div className="text-3xl font-semibold text-emerald-200">0</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/55">HIPAA violations post-deployment</div>
                  </div>
                  <div className="rounded-xl border border-amber-400/25 bg-amber-400/10 p-4 text-center">
                    <div className="text-3xl font-semibold text-amber-200">2 hrs</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/55">Median nurse onboarding</div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
                <div className="flex items-center gap-3 text-blue-200">
                  <Stethoscope className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-[0.24em]">Case study</span>
                </div>
                <blockquote className="mt-4 text-lg text-white/85 italic">
                  “We passed our surprise OCR visit with zero corrective actions. When an ISP cut fiber to the campus, the mirrored rack carried us and clinicians never lost charting.”
                </blockquote>
                <p className="mt-4 text-sm text-white/55">Chief Medical Officer · 3-site orthopedic group (Austin, TX)</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/55">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1"><Shield className="h-3.5 w-3.5 text-blue-200" /> HIPAA Security Rule mapped</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1"><Users className="h-3.5 w-3.5 text-blue-200" /> Clinician-first workflows</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1"><Activity className="h-3.5 w-3.5 text-blue-200" /> Real-time telemetry dashboards</span>
            </div>
          </div>
        </section>

        <section id="process" className="mb-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] items-start">
            <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6">
              <h2 className="text-2xl font-semibold text-blue-100">Concierge managed option</h2>
              <p className="mt-3 text-sm text-blue-100/80">
                Most health systems stay on the managed concierge program. I remain your named architect, supplying continuous monitoring, compliance evidence, and executive briefings.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-blue-100/80">
                {conciergeHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-emerald-200" /> {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold">How the engagement runs</h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {processRoadmap.map(({ step, title, detail }) => (
                  <div key={step} className="rounded-xl border border-white/10 bg-slate-950/40 p-5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-white/50">{step}</span>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>
                    <h3 className="mt-3 text-base font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-xs text-white/60">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="tech" className="mb-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Clinical-grade stack we deploy</h2>
            <p className="mt-2 text-sm text-white/60">Every component runs locally under your control. No SaaS choke points.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {techStack.map((entry) => (
                <span key={entry} className="inline-flex items-center rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
                  {entry}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-blue-500/25 bg-gradient-to-r from-blue-500/10 via-slate-950 to-slate-950 p-8 text-center">
          <h2 className="text-3xl font-semibold">Ready to make downtime impossible?</h2>
          <p className="mt-3 text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
            Book a confidential discovery call. We map your risk, scope the deployment, and give you the exact playbook you’ll approve before hardware ships.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/start-project" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-300 via-blue-400 to-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-blue-500/20 transition hover:opacity-95">
              Schedule consultation
            </Link>
            <Link href="/packages/architect" className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-emerald-300/60 hover:text-white">
              Review healthcare tiers
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

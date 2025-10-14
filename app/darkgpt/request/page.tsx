"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Check,
  CircuitBoard,
  Cpu,
  Lock,
  Sparkles,
  Shield,
  Timer,
} from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  company: string;
  budget: string;
  timeline: string;
  useCase: string;
  betaAccess: boolean;
}

const valueProps = [
  {
    icon: Shield,
    title: 'You own the model',
    copy: 'Air-gapped inference, no third-party telemetry, SOC2-style audit trails so you can prove it.',
  },
  {
    icon: Brain,
    title: 'Uncensored cognition',
    copy: 'DarkGPT runs uncapped, tuned to your doctrine, incident commands, or research requirements.',
  },
  {
    icon: Cpu,
    title: 'Fully engineered hardware',
    copy: 'We architect racks, GPUs, and orchestration so latency stays sub-50ms while you scale tokens.',
  },
];

const proofMetrics = [
  { label: 'Latency under load', value: '42ms', accent: 'text-emerald-300' },
  { label: 'Inference tokens / day', value: '38M+', accent: 'text-blue-300' },
  { label: 'Client retention', value: '100%', accent: 'text-amber-300' },
];

const budgetOptions = [
  "$75k - $125k",
  "$125k - $250k",
  "$250k - $400k",
  "$400k+",
  "Custom / let's scope it",
];

const timelineOptions = [
  'ASAP (priority escalation)',
  '2-4 weeks',
  '4-8 weeks',
  '90 days',
  'Flexible / phased',
];

const conciergeHighlights = [
  'Dedicated architect hotline with <2h critical SLA',
  'Quarterly safety, jailbreak, and prompt-injection hardening drills',
  'Live retraining sessions with your proprietary corpora',
];

export default function DarkGPTRequestPage() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    useCase: '',
    betaAccess: false,
  });

  const updateForm = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to contact flow once API endpoint is ready
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white egyptian-texture">
      <header className="border-b border-blue-500/20 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-white transition">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Link href="/packages/architect" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/65 transition hover:border-emerald-300/60 hover:text-white">
            Architects tier
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <section className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
            DarkGPT engagement desk
          </div>
          <div className="mt-6 flex flex-col items-center gap-5">
            <Image src="/images/darkgpt.png" alt="DarkGPT Logo" width={220} height={72} className="h-16 w-auto" priority />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Your uncensored AI, engineered under your roof
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/75 max-w-3xl">
              DarkGPT is the private LLM concierge build for founders, litigators, and intelligence teams who can’t have a vendor filtering their conversations.
            </p>
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {valueProps.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="rounded-2xl border border-white/12 bg-white/5 p-6">
              <div className="inline-flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                <Icon className="h-4 w-4" />
                Pillar
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm text-white/65">{copy}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 mb-12">
          <h2 className="text-xl font-semibold text-blue-200 text-center">Proof from current installations</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {proofMetrics.map(({ label, value, accent }) => (
              <div key={label} className="rounded-xl border border-white/10 bg-slate-950/40 p-5 text-center">
                <div className={`text-3xl font-semibold ${accent}`}>{value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/55">{label}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/60 text-center">
            Deployments include litigation think tanks, red-team labs, and private equity research pods using DarkGPT for uncensored scenario planning.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/10 via-slate-950 to-slate-950 p-8 mb-12">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-blue-200" />
            <h2 className="text-2xl font-semibold">Request your DarkGPT architecture brief</h2>
          </div>
          <p className="mt-3 text-sm text-white/65">
            Fill the form to schedule a private scoping call. You’ll receive the agenda and security questionnaire immediately after submission.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/55 mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => updateForm('name', e.target.value)}
                  className="w-full rounded-xl border border-white/12 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/55 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateForm('email', e.target.value)}
                  className="w-full rounded-xl border border-white/12 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/55 mb-2">Company / Organization</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => updateForm('company', e.target.value)}
                className="w-full rounded-xl border border-white/12 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="Optional"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/55 mb-2">Budget window *</label>
                <select
                  required
                  value={formData.budget}
                  onChange={(e) => updateForm('budget', e.target.value)}
                  className="w-full rounded-xl border border-white/12 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="">Select budget range</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option} className="bg-slate-900 text-white">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/55 mb-2">Desired go-live *</label>
                <select
                  required
                  value={formData.timeline}
                  onChange={(e) => updateForm('timeline', e.target.value)}
                  className="w-full rounded-xl border border-white/12 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="">Select timeline</option>
                  {timelineOptions.map((option) => (
                    <option key={option} value={option} className="bg-slate-900 text-white">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/55 mb-2">Use case / what DarkGPT must deliver *</label>
              <textarea
                rows={4}
                required
                value={formData.useCase}
                onChange={(e) => updateForm('useCase', e.target.value)}
                className="w-full rounded-xl border border-white/12 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="Describe the scenarios, corpora, or guardrails you need."
              />
            </div>

            <label className="inline-flex items-center gap-2 text-sm text-white/65">
              <input
                type="checkbox"
                checked={formData.betaAccess}
                onChange={(e) => updateForm('betaAccess', e.target.checked)}
                className="h-4 w-4 rounded border-white/20 bg-slate-950/70 text-blue-400 focus:ring-blue-400"
              />
              Request DarkGPT beta passcode (limited slots)
            </label>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-300 via-blue-400 to-amber-300 px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-blue-500/20 transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Submit request
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <CircuitBoard className="h-8 w-8 text-blue-200 mb-3" />
            <h3 className="font-semibold text-white mb-2">Private LLM deployments</h3>
            <p className="text-sm text-white/65">Architecture, racks, GPUs, orchestration, and fine-tuning in your facility.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <Lock className="h-8 w-8 text-blue-200 mb-3" />
            <h3 className="font-semibold text-white mb-2">Safety & jailbreak audits</h3>
            <p className="text-sm text-white/65">Prompt-injection, red-team, and legal review hardening for high-risk teams.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <Timer className="h-8 w-8 text-blue-200 mb-3" />
            <h3 className="font-semibold text-white mb-2">Concierge architect support</h3>
            <p className="text-sm text-white/65">On-call strategy, retraining, and incident response guidance.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-blue-500/25 bg-blue-500/10 p-8 mb-10 text-center">
          <h3 className="text-xl font-semibold text-blue-200">Engagement investment</h3>
          <p className="mt-3 text-sm text-white/70">DarkGPT builds start at $90k and scale with GPU footprint, corpora size, and concierge commitments.</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-12">
          <h3 className="text-lg font-semibold text-white">Managed concierge (optional)</h3>
          <p className="mt-2 text-sm text-white/65">Stay on retainer when you want a named architect continuously optimizing your models.</p>
          <ul className="mt-4 space-y-3 text-sm text-white/65">
            {conciergeHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-blue-300" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <h3 className="font-semibold text-white mb-4">Ehab Allababidi — Private AI Systems Architect</h3>
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/60 mb-4">
            <a href="tel:+17739200030" className="hover:text-blue-400 transition">(773) 920-0030</a>
            <span>•</span>
            <a href="mailto:defcon5ready@gmail.com" className="hover:text-blue-400 transition">defcon5ready@gmail.com</a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/55">
            <a href="https://github.com/ehaballa" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">GitHub</a>
            <span>|</span>
            <a href="https://www.linkedin.com/in/ehab-allababidi" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">LinkedIn</a>
          </div>
        </div>
      </main>
    </div>
  );
}


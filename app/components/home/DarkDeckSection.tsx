"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type MotionProps } from "framer-motion";
import { Check } from "lucide-react";

interface DarkDeckSectionProps {
  fadeInUp: MotionProps;
}

const processSteps = [
  {
    step: "1",
    title: "Discovery & threat modeling",
    detail: "Capture operational scenarios, adversarial assumptions, and ⬛ Redacted containment protocols.",
  },
  {
    step: "2",
    title: "Hardware staging & model deployment",
    detail: "Install inference stack with GPU acceleration, encrypted telemetry, and ⬛ Redacted safety layers.",
  },
  {
    step: "3",
    title: "On-site calibration sprint",
    detail: "One-week integration testing ⬛ Redacted and estate-specific behavioral tuning.",
  },
  {
    step: "4",
    title: "Stealth handoff & contingency drills",
    detail: "Deliver classified runbooks, rehearse breach scenarios, and establish ⬛ Redacted emergency protocols.",
  },
] as const;

const deliverables = [
  "Seven-day on-premise deployment — Nothing leaves until your team has operational mastery",
  "Sovereign control plane — Runs air-gapped inside your perimeter with zero cloud dependencies",
  "Zero telemetry leakage — All conversations, logs, and model weights stay sealed within your infrastructure",
  "Adaptive intelligence layer — Response patterns calibrated to ⬛ Redacted protocols",
  "Multi-site orchestration — Secure access across estates, offices, and failover nodes with ⬛ Redacted encryption",
];

export function DarkDeckSection({ fadeInUp }: DarkDeckSectionProps) {
  return (
    <section id="darkdeck" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/12 via-black to-black egyptian-pattern" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div className="mb-12 text-center" {...fadeInUp}>
          <div className="blue-glow inline-flex items-center gap-2 rounded-full border border-blue-500/60 bg-blue-500/25 px-4 py-2 text-sm text-blue-400 mb-6">
            <span role="img" aria-label="Lock">🔒</span>
            <span className="font-mono tracking-wider">CLASSIFIED // ELITE ACCESS ONLY</span>
          </div>
          <div className="mb-6 flex items-center justify-center gap-4">
            <Image
              src="/images/DarkDecklogo.png"
              alt="Dark Deck Logo"
              width={68}
              height={68}
              className="h-16 w-auto opacity-90"
            />
            <h2 className="text-4xl font-bold md:text-5xl">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-mono">Dark Deck</span>
              <span className="text-white/40 text-2xl ml-2">// █████████</span>
            </h2>
          </div>
          <p className="mx-auto max-w-3xl text-xl text-white/75 leading-relaxed">
            A sovereign AI intelligence layer engineered for estates where third-party visibility is unacceptable. 
            <span className="text-blue-400 font-semibold"> Completely air-gapped</span>, legally invisible, and answerable only to those who hold the keys.
          </p>
          <p className="mt-3 text-sm text-white/50 font-mono">
            ⚠️ Proprietary architecture details protected under NDA // Deployment requires executive clearance
          </p>
        </motion.div>

        <motion.div
          className="blue-glow-lg rounded-2xl border-2 border-blue-500/60 bg-gradient-to-br from-blue-500/12 via-black to-black p-8 md:p-12"
          {...fadeInUp}
        >
          <div className="mb-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-blue-400">What’s Included</h3>
              <ul className="space-y-3 text-white/80">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-blue-500/20 bg-slate-950/70 p-6">
              <h3 className="mb-4 text-xl font-semibold text-blue-400">Deployment Cadence</h3>
              <div className="space-y-4 text-sm text-white/70">
                {processSteps.map(({ step, title, detail }) => (
                  <div key={step} className="flex gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/20 font-bold text-blue-400">
                      {step}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{title}</p>
                      <p>{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-blue-500/25 bg-blue-500/12 p-6 text-center">
            <div className="mb-2 text-lg font-bold text-blue-300 font-mono">PRICING: DISCLOSED AFTER VETTING</div>
            <p className="mb-4 text-sm italic text-white/70">
              "Full capabilities and architecture details disclosed only to qualified estates. Budget determines scope."
            </p>
            <Link href="/start-project">
              <button className="rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:from-blue-300 hover:to-blue-700 hover:shadow-blue-500/50">
                Schedule consultation →
              </button>
            </Link>
            <p className="mt-4 border-t border-blue-500/15 pt-4 text-xs text-white/50 font-mono">
              ⚠️ Deployment confined to sovereign estates // Zero third-party data transmission // ⬛ Redacted fail-safe protocols included
            </p>
          </div>

          <div className="mt-8 border-t border-blue-500/20 pt-6 text-center">
            <p className="text-lg font-semibold italic text-blue-300 font-mono">
              "Your intelligence. Your rules. Zero upstream visibility."
            </p>
            <p className="mt-2 text-sm text-white/50">
              Available exclusively with elite infrastructure engagements ($50k+) // Limited deployments per quarter
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default DarkDeckSection;

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type MotionProps } from "framer-motion";
import { Check } from "lucide-react";

interface DarkGptSectionProps {
  fadeInUp: MotionProps;
}

const processSteps = [
  {
    step: "1",
    title: "Initial consultation & requirements",
    detail: "We capture use cases, compliance priorities, and baseline datasets.",
  },
  {
    step: "2",
    title: "Hardware setup & base model deployment",
    detail: "Install optimized LLM infrastructure with GPU acceleration and observability.",
  },
  {
    step: "3",
    title: "One-week onsite fine-tuning",
    detail: "Daily iterations with your team until prompts, guardrails, and integrations are perfect.",
  },
  {
    step: "4",
    title: "Training & handoff",
    detail: "Runbooks, drills, and acceptance testing before I leave the estate.",
  },
] as const;

const deliverables = [
  "One week on-site programming — I stay at your location until it's perfect",
  "Private deployment — Locally-configurable safety policies, governed by your own rules",
  "Complete privacy — Runs locally, conversations never leave your network",
  "Custom personality — Fine-tuned to your preferences and communication style",
  "Estate integration — Access from anywhere in your infrastructure",
];

export function DarkGptSection({ fadeInUp }: DarkGptSectionProps) {
  return (
    <section id="darkgpt" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-black to-black egyptian-pattern"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/30 border border-blue-500/60 text-blue-500 text-sm mb-6 blue-glow">
            <span role="img" aria-label="Lock">🔒</span>
            <span>ELITE EXCLUSIVE</span>
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image
              src="/images/darkgpt.png"
              alt="DarkGPT Logo"
              width={64}
              height={64}
              className="h-16 w-auto"
            />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-500">DarkGPT</span> — Installed Locally
            </h2>
          </div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Test DarkGPT today: a private LLM wired into your estate, tuned to your policies, and impossible to subpoena from the cloud.
          </p>
        </motion.div>

        <motion.div
          className="rounded-2xl border-2 border-blue-500/70 bg-gradient-to-br from-blue-500/15 via-black to-black p-8 md:p-12 blue-glow-lg"
          {...fadeInUp}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-500 mb-4">What You Get</h3>
              <ul className="space-y-3 text-white/80">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950/70 rounded-xl p-6 border border-blue-500/20">
              <h3 className="text-xl font-semibold text-blue-500 mb-4">The Process</h3>
              <div className="space-y-4 text-sm text-white/70">
                {processSteps.map(({ step, title, detail }) => (
                  <div key={step} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-500 font-bold">
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

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 text-center">
            <div className="text-lg font-bold text-blue-500 mb-2">Pricing: Available Upon Request</div>
            <p className="text-white/70 text-sm italic mb-4">
              "DarkGPT pricing is negotiable based on your budget. If you have the money, I have the time. Let's talk."
            </p>
            <Link href="/start-project">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-500 text-white rounded-xl hover:from-blue-500 hover:to-blue-500 transition font-semibold text-lg shadow-lg">
                Test DarkGPT Today
              </button>
            </Link>
            <p className="text-white/60 text-xs mt-4 border-t border-blue-500/10 pt-4">
              Use is subject to lawful, ethical, and compliance-aligned policies. On-prem or private cloud only.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-blue-500/20 text-center">
            <p className="text-blue-500 text-lg font-semibold italic">
              "Your AI. Your rules. Total control."
            </p>
            <p className="text-white/60 text-sm mt-2">
              Available exclusively with Elite Tier builds ($50k+)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default DarkGptSection;

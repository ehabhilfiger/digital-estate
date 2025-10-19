"use client";

import Link from "next/link";
import { motion, type MotionProps } from "framer-motion";
import { Handshake, ShieldCheck, Clock3 } from "lucide-react";

interface ConsultingSectionProps {
  fadeInUp: MotionProps;
  staggerContainer: MotionProps;
}

export function ConsultingSection({ fadeInUp, staggerContainer }: ConsultingSectionProps) {
  return (
    <section id="consulting" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div className="text-center" {...fadeInUp}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-sm mb-4">
            <span role="img" aria-label="check">✅</span>
            <span>Premium Advisory</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold">Consulting & Rapid Response</h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            I reserve two consulting slots per month for founders and principals who need immediate, senior-level guidance on sovereign AI, blockchain ops, or incident containment.
          </p>
        </motion.div>
        <motion.div className="mt-12 grid gap-6 md:grid-cols-3" {...staggerContainer}>
          {[{
            icon: Handshake,
            title: "On-Site Retainer",
            body: "Flat $5k engagement fee covers travel, intake, and a full day on-site aligning your stack with my playbooks.",
          }, {
            icon: Clock3,
            title: "$2k / Hour",
            body: "Billable blocks for architecture deep dives, smart contract triage, or AI infrastructure hardening.",
          }, {
            icon: ShieldCheck,
            title: "What You Get",
            body: "Signed remediation report, prioritized backlog, procurement list, and optional white-glove implementation quote.",
          }].map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left"
              {...fadeInUp}
            >
              <Icon className="h-8 w-8 text-emerald-300" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm text-white/70">{body}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="mt-10 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-8 text-center"
          {...fadeInUp}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-200">How to book</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">Two steps to lock in your slot</h3>
          <ol className="mt-4 space-y-2 text-sm text-white/75">
            <li>1. Submit the intake form with “Consulting Retainer” selected as the project goal.</li>
            <li>2. I reply same day with payment link (Stripe or wire) and the first available window.</li>
          </ol>
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 text-sm text-white/70">
            <span>Emergency request?</span>
            <a href="tel:+17739200030" className="font-semibold text-white hover:text-emerald-200 transition">Call +1 (773) 920-0030</a>
          </div>
          <Link href="/start-project" className="mt-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-300 via-blue-400 to-amber-300 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-emerald-500/25">
            Secure your retainer
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ConsultingSection;

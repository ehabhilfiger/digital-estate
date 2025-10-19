"use client";

import Image from "next/image";
import { motion, type MotionProps } from "framer-motion";

interface PlainEnglishSectionProps {
  fadeInUp: MotionProps;
  staggerContainer: MotionProps;
  shouldReduceMotion: boolean | null;
}

const plainEnglishPoints = [
  {
    title: "Cloud custody is a risk.",
    body: "Everything—files, CCTV, AI—lives on hardware you can walk up to and audit in seconds.",
  },
  {
    title: "You hire one accountable builder.",
    body: "I architect, cable, script, and document every layer so nothing is handed off to a mystery vendor.",
  },
  {
    title: "Privacy is the baseline.",
    body: "No telemetry, no SaaS callouts, immutable logging, and automatic key rotation across the estate.",
  },
  {
    title: "Support stays concierge.",
    body: "Blueprints, training, and periodic health checks come from the person who built the system—me.",
  },
] as const;

export function PlainEnglishSection({ fadeInUp, staggerContainer, shouldReduceMotion }: PlainEnglishSectionProps) {
  return (
    <section id="tldr" className="py-20 bg-white/5 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/plain-english.png"
          alt="Plain English Explanation"
          fill
          className="object-cover opacity-70"
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950/80"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center"
          {...fadeInUp}
        >
          In Plain English
        </motion.h2>
        <motion.div
          className="mt-12 grid gap-6 text-base text-white/80 sm:grid-cols-2"
          {...staggerContainer}
        >
          {plainEnglishPoints.map(({ title, body }) => (
            <motion.div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              {...fadeInUp}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
            >
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm sm:text-base text-white/75">{body}</p>
            </motion.div>
          ))}
          <motion.div
            className="sm:col-span-2 rounded-3xl border border-emerald-400/40 bg-emerald-400/10 p-6 text-center text-lg font-medium text-emerald-200"
            {...fadeInUp}
          >
            Hire me when you want sovereign infrastructure with a single throat to choke.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default PlainEnglishSection;

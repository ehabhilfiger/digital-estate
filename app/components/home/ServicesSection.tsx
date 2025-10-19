"use client";

import { motion, type MotionProps } from "framer-motion";
import { Server, Lock, Brain } from "lucide-react";

interface ServicesSectionProps {
  fadeInUp: MotionProps;
  staggerContainer: MotionProps;
  scaleIn: MotionProps;
}

const services = [
  {
    icon: Server,
    title: "Private Servers",
    description: "High-availability NAS and VM stacks (TrueNAS, Proxmox) with encrypted snapshots and offline recovery drills.",
    highlight: "Recent build: triple-node TrueNAS vault protecting a 14TB litigation archive.",
    accent: {
      cardHover: "hover:border-emerald-400/50 hover:bg-emerald-400/5",
      iconWrapper: "bg-emerald-400/10",
      iconColor: "text-emerald-300",
      highlight: "text-emerald-200/80",
    },
  },
  {
    icon: Lock,
    title: "Zero-Trust Networks",
    description: "Segmented networks, WireGuard mesh, and policy automation. Every endpoint authenticated, every tunnel encrypted.",
    highlight: "Recent build: biometric VPN perimeter covering six villas with automatic threat sweeps.",
    accent: {
      cardHover: "hover:border-blue-400/50 hover:bg-blue-400/5",
      iconWrapper: "bg-blue-400/10",
      iconColor: "text-blue-300",
      highlight: "text-blue-200/80",
    },
  },
  {
    icon: Brain,
    title: "On-Prem AI",
    description: "Local LLM clusters (Ollama, vLLM) with curated datasets, safety policies, and observability tuned to your compliance rules.",
    highlight: "Recent build: confidential RAG counsel trained on twelve years of legal briefs.",
    accent: {
      cardHover: "hover:border-amber-400/50 hover:bg-amber-400/5",
      iconWrapper: "bg-amber-400/10",
      iconColor: "text-amber-300",
      highlight: "text-amber-200/80",
    },
  },
] as const;

export function ServicesSection({ fadeInUp, staggerContainer, scaleIn }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center"
          {...fadeInUp}
        >
          What I Deliver
        </motion.h2>
        <motion.p
          className="mt-4 text-center text-white/70 max-w-2xl mx-auto text-sm sm:text-base"
          {...fadeInUp}
        >
          Three pillars of sovereign infrastructure—built for privacy, security, and total control.
        </motion.p>
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          {...staggerContainer}
        >
          {services.map(({ icon: Icon, title, description, highlight, accent }) => (
            <motion.div
              key={title}
              className={`rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 transition-all duration-300 ${accent.cardHover}`}
              {...scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className={`mb-4 grid h-12 w-12 place-items-center rounded-xl ${accent.iconWrapper}`}>
                <Icon className={`h-6 w-6 ${accent.iconColor}`} aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium">{title}</h3>
              <p className="mt-3 text-white/70 text-sm sm:text-base">{description}</p>
              <p className={`mt-4 text-xs font-semibold uppercase tracking-wide ${accent.highlight}`}>
                {highlight}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;

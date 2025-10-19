"use client";

import Link from "next/link";
import { motion, type MotionProps } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface AccomplishmentsSectionProps {
  fadeInUp: MotionProps;
  sectionId?: string;
}

const accomplishments = [
  {
    name: "DarkGPT v2",
    url: "https://darkgptv2.vercel.app/",
    blurb: "Full-stack private LLM assistant with guardrails, deployed on dedicated GPU infrastructure.",
    stat: "Live — Compliance-ready prompts, estate authentication",
  },
  {
    name: "DarkGPT Presale",
    url: "https://darkgptpresale.vercel.app/presale",
    blurb: "Token-gated presale funnel with real-time mint allocation and on-chain status calls.",
    stat: "Active — Presale dashboard + Stripe/KYC hand-off",
  },
  {
    name: "Crypto 100M Mint",
    url: "https://crypto-two-gamma.vercel.app/",
    blurb: "ERC-20 mint platform with 100M tokens issued, treasury multisig automation, and analytics.",
    stat: "100M tokens on-chain — Multi-network support",
  },
  {
    name: "Anubis Estate Console",
    url: "https://anubis-alpha-indol.vercel.app/",
    blurb: "Incident-response control plane for sovereign estates with zero-trust automation triggers.",
    stat: "Ops console — Live pager + telemetry hooks",
  },
];

export function AccomplishmentsSection({ fadeInUp, sectionId = "proof" }: AccomplishmentsSectionProps) {
  return (
    <section id={sectionId} className="py-20 bg-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div className="text-center" {...fadeInUp}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm mb-4">
            <span role="img" aria-label="trophy">🏆</span>
            <span>Proof of Deployment</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold">Accomplishments on Record</h2>
          <p className="mt-4 text-white/70 max-w-3xl mx-auto text-sm sm:text-base">
            Every link below hits a live environment that I architected and maintain. These builds are the quick proof behind the $5k on-site retainer and $2k/hr advisory rate.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {accomplishments.map(({ name, url, blurb, stat }) => (
            <motion.article
              key={name}
              className="rounded-2xl border border-white/10 bg-slate-950/80 p-6 hover:border-blue-500/40 transition"
              {...fadeInUp}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{name}</h3>
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300"
                >
                  Visit <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-4 text-sm text-white/75">{blurb}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-blue-300">{stat}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccomplishmentsSection;

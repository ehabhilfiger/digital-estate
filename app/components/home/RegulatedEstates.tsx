"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type MotionProps } from "framer-motion";
import { Shield, Heart } from "lucide-react";

interface RegulatedEstatesProps {
  fadeInUp: MotionProps;
}

const lawFirmHighlights = [
  "Model Rule 1.6 defence-in-depth",
  "Conflict + ethical wall automation",
  "Encrypted DMS with matter-level MFA",
  "Air-gapped legal archive + ransomware drills",
  "Practice management integrations (Clio, Litify)",
  "Partner dashboards with breach telemetry",
];

const healthcareHighlights = [
  "HIPAA + OCR audit readiness baked in",
  "Zero-trust VLAN design with clinician-aware policies",
  "Redundant EHR, PACS, and imaging storage",
  "Air-gapped ransomware response with 15-minute RPO",
  "Telemetry dashboards for compliance officers",
  "99.99% uptime SLA across critical services",
];

export function RegulatedEstates({ fadeInUp }: RegulatedEstatesProps) {
  return (
    <section id="regulated" className="py-20 bg-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div className="mx-auto max-w-3xl text-center" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-semibold">Regulated Estates</h2>
          <p className="mt-4 text-white/70 text-sm sm:text-base">
            Two flagship deployments engineered for teams who answer to bar auditors and HIPAA investigators.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div id="law" className="h-full">
            <Link href="/solutions/law-firm" className="block h-full">
              <motion.div
                className="flex h-full flex-col rounded-2xl border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent p-8 md:p-12 transition-all duration-300 hover:border-blue-500/50 hover:from-blue-500/15 hover:to-blue-500/5"
                whileHover={{ scale: 1.02 }}
                {...fadeInUp}
              >
                <div className="relative h-48 overflow-hidden rounded-xl border border-blue-500/20 bg-blue-500/5">
                  <Image
                    src="/images/lawfirm.png"
                    alt="Law Firm Infrastructure"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 896px"
                    quality={80}
                  />
                  <div className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-black text-xs font-bold rounded-full">
                    ABA READY
                  </div>
                </div>
                <div className="mt-8 flex flex-1 flex-col space-y-6">
                  <div className="flex items-center gap-3">
                    <Shield className="h-8 w-8 text-blue-500" aria-hidden="true" />
                    <h3 className="text-2xl md:text-3xl font-semibold">Law Firm Compliance Estate</h3>
                  </div>
                  <p className="text-white/80 text-base sm:text-lg">
                    Purpose-built stacks for boutiques and multi-partner firms that need airtight privilege, conflict automation, and verifiable Model Rule 1.6 controls.
                  </p>
                  <div className="bg-slate-950/70 rounded-xl p-5 border border-blue-500/25">
                    <p className="text-2xl font-bold text-blue-500">From $55k install · $2k+/mo concierge</p>
                    <p className="mt-2 text-white/70 text-sm">
                      Includes privileged document vaults, encrypted client portals, immutable audit logs, and white-glove compliance reporting.
                    </p>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-3 text-sm text-white/75">
                    {lawFirmHighlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-4 text-sm text-white/75">
                    <p className="font-semibold text-blue-400">Why firms call me:</p>
                    <p className="mt-2">Own your evidence, pass bar audits without scramble, and keep every subpoena response under your control.</p>
                  </div>
                  <p className="text-blue-400 text-sm italic border-t border-blue-500/20 pt-4">
                    “Zero findings in our bar audit. Every partner finally trusts the tech.” — Managing Partner, Corporate Litigation
                  </p>
                </div>
              </motion.div>
            </Link>
          </div>

          <div id="healthcare" className="h-full">
            <Link href="/solutions/healthcare" className="block h-full">
              <motion.div
                className="flex h-full flex-col rounded-2xl border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-8 md:p-12 transition-all duration-300 hover:border-blue-500/50 hover:from-blue-500/15 hover:to-blue-500/10"
                whileHover={{ scale: 1.02 }}
                {...fadeInUp}
              >
                <div className="relative h-48 overflow-hidden rounded-xl border border-blue-500/20 bg-blue-500/5">
                  <Image
                    src="/images/hospital.png"
                    alt="Healthcare Infrastructure"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 896px"
                    quality={80}
                  />
                  <div className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white text-xs font-bold rounded-full">
                    HIPAA READY
                  </div>
                </div>
                <div className="mt-8 flex flex-1 flex-col space-y-6">
                  <div className="flex items-center gap-3">
                    <Heart className="h-8 w-8 text-blue-400" aria-hidden="true" />
                    <h3 className="text-2xl md:text-3xl font-semibold">Healthcare Sovereign Cloud</h3>
                  </div>
                  <p className="text-white/80 text-base sm:text-lg">
                    Built for clinics and hospitals that demand HIPAA-grade uptime, zero-trust segmentation, and charting privacy without vendor lock-in.
                  </p>
                  <div className="bg-slate-950/70 rounded-xl p-5 border border-blue-500/25">
                    <p className="text-2xl font-bold text-blue-400">From $85k install · $3.5k+/mo concierge</p>
                    <p className="mt-2 text-white/70 text-sm">
                      Turnkey EHR integrations, audited access controls, disaster recovery runbooks, and guaranteed on-call response.
                    </p>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-3 text-sm text-white/75">
                    {healthcareHighlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-4 text-sm text-white/75">
                    <p className="font-semibold text-blue-300">Why exec teams bring me in:</p>
                    <p className="mt-2">Own every patient record, prove compliance on demand, and recover cleanly from any incident within minutes.</p>
                  </div>
                  <p className="text-blue-300 text-sm italic border-t border-blue-500/20 pt-4">
                    “Meets every regulatory demand and our clinicians barely notice the upgrades—except for the speed.” — Medical Director, Multi-Specialty Clinic
                  </p>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegulatedEstates;

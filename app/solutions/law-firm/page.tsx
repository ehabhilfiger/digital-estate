"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check, Scale, Shield, Server, Database, Lock, FileText, Users, Clock, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LawFirmSolution() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <motion.header
        className="sticky top-0 z-50 backdrop-blur border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Link href="/start-project">
            <button className="px-4 py-2 bg-amber-500 text-black rounded-xl hover:bg-amber-400 transition font-medium text-sm">
              Schedule Consultation
            </button>
          </Link>
        </div>
      </motion.header>

      {/* Hero with Background Image */}
      <div className="relative mb-16 -mt-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/lawfirm.png"
            alt="Law Firm Infrastructure"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-32 text-center">
          <div className="inline-flex px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm mb-6 backdrop-blur-sm">
            LAW FIRM SOLUTION
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-amber-500">Complete Digital Infrastructure</span> for Law Firms
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Attorney-client privilege starts with data sovereignty. Deploy a private, secure case management system that keeps everything local, encrypted, and compliant.
          </p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8">

        {/* Pricing */}
        <div className="mb-16 rounded-2xl border-2 border-amber-500 bg-gradient-to-br from-amber-500/10 to-transparent p-12 text-center">
          <div className="inline-flex px-4 py-2 rounded-full bg-amber-500 text-black text-xs font-bold mb-4">
            10/10 ABA COMPLIANT
          </div>
          <div className="text-sm text-amber-500 font-semibold mb-2">ENTERPRISE PRICING</div>
          <div className="text-6xl font-bold text-amber-500 mb-4">$18,000+</div>
          <div className="text-xl text-white/80">Enterprise Law Firm Compliance Infrastructure</div>
          <div className="mt-4 text-white/60">Complete ABA-compliant setup + Training + 12-month enterprise support + Compliance specialist</div>
          <div className="mt-6 text-amber-500 font-semibold">$1,200+/month managed services</div>
        </div>

        {/* Why Law Firms Need This */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Your Firm Needs Private Infrastructure</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <Scale className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Client Confidentiality</h3>
              <p className="text-white/70 text-sm">
                Attorney-client privilege demands absolute data control. No third-party cloud providers accessing case files.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <Shield className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Compliance Ready</h3>
              <p className="text-white/70 text-sm">
                Meet ABA ethical obligations, HIPAA requirements, and data residency rules with local-first architecture.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <Database className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Cut Costs</h3>
              <p className="text-white/70 text-sm">
                Stop paying monthly SaaS fees. Own your infrastructure and reduce operating costs by 60-80% over 3 years.
              </p>
            </div>
          </div>
        </div>

        {/* What You Get */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Complete Solution — From Setup to Mastery</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Infrastructure */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Server className="h-8 w-8 text-amber-500" />
                Private Infrastructure
              </h3>
              <ul className="space-y-4">
                {[
                  'Synology NAS or TrueNAS server (4-8TB encrypted storage)',
                  'Encrypted client file repository with role-based access',
                  'Automated daily backups (local + encrypted off-site)',
                  'Secure VPN for remote case access',
                  'Network segmentation & firewall configuration',
                  'Professional on-site installation & cable management',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Case Management */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FileText className="h-8 w-8 text-amber-400" />
                Local Case Management System
              </h3>
              <ul className="space-y-4">
                {[
                  'Self-hosted case management platform (Nextcloud Legal or similar)',
                  'Document management with version control',
                  'Client portal for secure file exchange',
                  'Calendar, deadlines, and task tracking',
                  'Full-text search across all case files',
                  'Mobile app access for attorneys on the go',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Training & Support */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users className="h-8 w-8 text-emerald-400" />
                Training & Documentation
              </h3>
              <ul className="space-y-4">
                {[
                  'Staff training sessions (attorneys + admin)',
                  'Custom documentation for your firm\'s workflows',
                  'Data migration from existing systems',
                  'Best practices for client intake & case organization',
                  'Security protocols training',
                  'Video tutorials for common tasks',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ongoing Management */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Clock className="h-8 w-8 text-blue-400" />
                90-Day Support + Optional Management
              </h3>
              <ul className="space-y-4">
                {[
                  '90 days of white-glove support included',
                  'Remote monitoring and troubleshooting',
                  'Priority response for critical issues',
                  'Optional: Monthly retainer for ongoing case management support',
                  'Optional: We handle all caseload organization & system maintenance',
                  'Optional: Quarterly system reviews and optimization',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Ongoing Management Option */}
        <div className="mb-16 rounded-2xl border-2 border-amber-500/50 bg-gradient-to-br from-amber-500/10 to-transparent p-8">
          <div className="flex items-start gap-4">
            <Phone className="h-10 w-10 text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold mb-3 text-amber-300">Want Us to Manage Everything?</h3>
              <p className="text-white/80 mb-4">
                <strong>Call us</strong> to discuss our <strong>ongoing management services</strong>. We can handle all your caseload organization, document management, backups, monitoring, and system maintenance — letting you focus on practicing law.
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  'Monthly retainer starts at $500/month',
                  'We organize and manage all case files locally',
                  'Train your team on best practices as your firm grows',
                  'Proactive system maintenance and upgrades',
                  'Priority support with 4-hour response time',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/start-project">
                <button className="px-6 py-3 bg-amber-500 text-white rounded-xl hover:bg-amber-400 transition font-semibold">
                  Schedule a Call
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Real Results */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">What Firms Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">75%</div>
              <div className="text-white/70">Cost Reduction vs SaaS</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">100%</div>
              <div className="text-white/70">Client Data Privacy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">2 Hours</div>
              <div className="text-white/70">Average Training Time</div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 space-y-4">
            <div>
              <p className="text-lg italic text-amber-500 mb-2">
                "Finally, complete control over our client files. The system is intuitive and the team training was excellent."
              </p>
              <p className="text-white/60">— Managing Partner, 5-Attorney Firm, Chicago</p>
            </div>
            <div>
              <p className="text-lg italic text-amber-400 mb-2">
                "We cut our document management costs by $18,000/year and sleep better knowing everything is encrypted and local."
              </p>
              <p className="text-white/60">— Solo Practitioner, Estate Planning</p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Perfect For</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: 'Solo Practitioners', desc: 'Affordable sovereignty' },
              { title: 'Boutique Firms', desc: '2-10 attorneys' },
              { title: 'Family Law', desc: 'Sensitive documents' },
              { title: 'Estate Planning', desc: 'Long-term archives' },
            ].map((use, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                <div className="text-lg font-bold mb-2">{use.title}</div>
                <div className="text-sm text-white/60">{use.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Synology DSM / TrueNAS',
              'Nextcloud Legal',
              'Wireguard VPN',
              'Encrypted RAID Storage',
              'Automated Backups',
              '2FA Authentication',
              'Role-Based Access Control',
              'Full Disk Encryption',
            ].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-400/20 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Own Your Firm's Data?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your firm's needs. We'll design a custom solution, install everything on-site, train your team, and provide ongoing support.
          </p>
          <Link href="/start-project">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-black rounded-2xl hover:bg-amber-400 transition font-bold text-lg shadow-lg shadow-amber-500/20">
              Schedule Your Consultation
            </button>
          </Link>
          <div className="mt-6 text-white/60 text-sm">
            Starting at $4,800 | 90-day support included | Optional ongoing management available
          </div>
        </div>
      </main>
    </div>
  );
}

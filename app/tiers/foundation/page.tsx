import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check, Shield, Server, Lock, Zap, ArrowRight } from 'lucide-react';

export default function FoundationTier() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Link href="/start-project">
            <button className="px-4 py-2 bg-amber-500 text-black rounded-xl hover:bg-amber-400 transition font-medium text-sm">
              Request This Package
            </button>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm mb-6">
            FOUNDATION TIER
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional NAS <span className="text-amber-500">Deployment</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Enterprise-grade data sovereignty for professionals and boutique firms. Own your data, cut costs, maintain complete control.
          </p>
        </div>

        {/* Image Showcase */}
        <div className="mb-16 rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-2xl">
          <Image
            src="/images/Tier 1 Example.png"
            alt="Foundation Tier - Professional Synology NAS Deployment"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>

        {/* Pricing */}
        <div className="mb-16 rounded-2xl border-2 border-amber-500 bg-gradient-to-br from-amber-500/10 to-transparent p-12 text-center">
          <div className="text-6xl font-bold text-amber-500 mb-4">$25,000</div>
          <div className="text-xl text-white/80">Complete Installation Package</div>
          <div className="mt-4 text-white/60">Includes hardware, installation, configuration & 90-day support</div>
        </div>

        {/* What's Included */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Server className="h-8 w-8 text-amber-500" />
              Infrastructure Delivered
            </h2>
            <ul className="space-y-4">
              {[
                'Synology DS920+ or TrueNAS equivalent (enterprise-grade NAS)',
                '16TB RAID 10 storage (redundant, high-performance)',
                'Automated encrypted backups (local + off-site)',
                'Wireguard VPN with dedicated client configs',
                'Professional rack mounting or desktop placement',
                '10GbE networking integration (if infrastructure supports)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Shield className="h-8 w-8 text-slate-400" />
              Services & Support
            </h2>
            <ul className="space-y-4">
              {[
                'On-site installation and configuration',
                'Complete data migration from cloud services',
                'User training and documentation',
                'Security hardening and firewall rules',
                '90-day white-glove support',
                'Remote monitoring and maintenance setup',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Real Results */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Real-World Results</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">60%</div>
              <div className="text-white/70">Cost Reduction vs. Cloud</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-400 mb-2">100%</div>
              <div className="text-white/70">Data Sovereignty</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-white/70">Local Access</div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6">
            <p className="text-lg italic text-amber-500 mb-2">
              "We finally own our data. Installation was seamless, support exceptional."
            </p>
            <p className="text-white/60">— Managing Partner, Boutique Law Firm</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Synology DSM 7', color: 'emerald' },
              { name: 'RAID 10', color: 'blue' },
              { name: 'Wireguard VPN', color: 'purple' },
              { name: 'Encrypted Backups', color: 'pink' },
              { name: 'Active Directory Integration', color: 'emerald' },
              { name: 'Hyper Backup', color: 'blue' },
              { name: 'Snapshot Replication', color: 'purple' },
              { name: '2FA Authentication', color: 'pink' },
            ].map((tech) => (
              <span key={tech.name} className={`px-4 py-2 rounded-lg bg-${tech.color}-400/10 text-${tech.color}-400 border border-${tech.color}-400/20 text-sm`}>
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Data?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            This package is perfect for solo practitioners, boutique law firms, and professionals who value data sovereignty without enterprise complexity.
          </p>
          <Link href="/start-project">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-black rounded-2xl hover:bg-amber-400 transition font-bold text-lg shadow-lg shadow-amber-500/20">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

import Link from 'next/link';
import { ArrowLeft, Check, Shield, Server, HardDrive, Lock, ArrowRight, Zap } from 'lucide-react';

export default function FoundationPackage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/#work" className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
            <ArrowLeft className="h-4 w-4" />
            Back to Packages
          </Link>
          <Link href="/start-project">
            <button className="px-4 py-2 bg-amber-500 text-black rounded-xl hover:bg-amber-400 transition font-medium text-sm">
              Get Started
            </button>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm mb-6">
            TIER 1: FOUNDATION
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Foundation <span className="text-amber-500">Package</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Perfect for individuals and small teams getting started with private infrastructure. Build your foundation with essential tools for data sovereignty.
          </p>
        </div>

        {/* Pricing */}
        <div className="mb-16 rounded-2xl border-2 border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-transparent p-12 text-center">
          <div className="text-5xl font-bold text-amber-500 mb-4">$3,500 – $6,000</div>
          <div className="text-xl text-white/80">One-Time Setup Fee</div>
          <div className="mt-4 text-white/60">Perfect entry point into private infrastructure</div>
        </div>

        {/* What's Included */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Server className="h-8 w-8 text-amber-500" />
              Core Infrastructure
            </h2>
            <ul className="space-y-4">
              {[
                'Single-node NAS or server (Synology, TrueNAS, or custom build)',
                '2-8TB storage capacity with RAID configuration',
                'Local network integration and optimization',
                'File sharing and media server setup',
                'Automated backup scheduling',
                'Remote access configuration',
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
              <Lock className="h-8 w-8 text-slate-400" />
              Security & Access
            </h2>
            <ul className="space-y-4">
              {[
                'Basic VPN setup (Wireguard or OpenVPN)',
                'Encrypted local backups with retention policy',
                'User account management and permissions',
                'Firewall configuration and hardening',
                'SSL/TLS certificate setup',
                'Secure password and 2FA implementation',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <HardDrive className="h-8 w-8 text-purple-400" />
              Documentation & Training
            </h2>
            <ul className="space-y-4">
              {[
                'Complete system documentation',
                'Network diagram and configuration notes',
                'Backup and recovery procedures',
                'User guides for common tasks',
                'Troubleshooting reference',
                'Best practices documentation',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Shield className="h-8 w-8 text-amber-400" />
              Support & Warranty
            </h2>
            <ul className="space-y-4">
              {[
                '30-day post-installation support',
                'Email and phone support during business hours',
                'Configuration adjustments and tweaks',
                'Issue resolution and troubleshooting',
                'Software update guidance',
                'Optional extended support available',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ideal For */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Ideal For:</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Solo Practitioners',
                description: 'Lawyers, consultants, and freelancers who need secure file storage and backups without cloud dependencies.',
              },
              {
                title: 'Small Home Offices',
                description: 'Remote workers and small teams requiring shared storage and secure remote access.',
              },
              {
                title: 'Privacy-Conscious Individuals',
                description: 'Anyone wanting to take control of their data and eliminate reliance on big tech cloud services.',
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <h3 className="font-semibold mb-2 text-amber-500">{item.title}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Foundation vs. Cloud Services</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-4 pr-4">Feature</th>
                  <th className="pb-4 pr-4">Foundation Package</th>
                  <th className="pb-4">Dropbox/Google Drive</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-4 text-white/70">Monthly Cost</td>
                  <td className="py-3 pr-4 text-amber-500">$0 (one-time)</td>
                  <td className="py-3 text-white/50">$20-50/month forever</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-4 text-white/70">Data Ownership</td>
                  <td className="py-3 pr-4 text-amber-500">100% yours</td>
                  <td className="py-3 text-white/50">Vendor controlled</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-4 text-white/70">Privacy</td>
                  <td className="py-3 pr-4 text-amber-500">Complete</td>
                  <td className="py-3 text-white/50">Subject to scanning</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-4 text-white/70">Speed</td>
                  <td className="py-3 pr-4 text-amber-500">Local network (fast)</td>
                  <td className="py-3 text-white/50">Internet dependent</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-white/70">ROI</td>
                  <td className="py-3 pr-4 text-amber-500">6-18 months</td>
                  <td className="py-3 text-white/50">Never (perpetual cost)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Implementation Timeline</h2>
          <div className="space-y-4">
            {[
              { phase: 'Week 1', title: 'Discovery & Hardware', description: 'Needs assessment, hardware procurement, and delivery' },
              { phase: 'Week 2', title: 'Installation & Configuration', description: 'On-site setup, software installation, and initial configuration' },
              { phase: 'Week 3', title: 'Migration & Testing', description: 'Data migration, security testing, and user acceptance' },
              { phase: 'Week 4', title: 'Training & Handoff', description: 'User training, documentation delivery, and go-live' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-amber-500 font-semibold">{item.phase}</div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Technology Options</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Synology DSM', color: 'emerald' },
              { name: 'TrueNAS Core', color: 'blue' },
              { name: 'Wireguard VPN', color: 'purple' },
              { name: 'Tailscale', color: 'pink' },
              { name: 'Nextcloud', color: 'emerald' },
              { name: 'Restic Backup', color: 'blue' },
              { name: 'Docker', color: 'purple' },
              { name: 'Portainer', color: 'pink' },
            ].map((tech) => (
              <span key={tech.name} className={`px-4 py-2 rounded-lg bg-${tech.color}-400/10 text-${tech.color}-400 border border-${tech.color}-400/20 text-sm`}>
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Foundation?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Take the first step toward data sovereignty. Get professional infrastructure without the complexity or ongoing cloud costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start-project">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-black rounded-2xl hover:bg-amber-400 transition font-bold text-lg shadow-lg shadow-amber-500/20">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
            <Link href="/#work">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/20 text-white rounded-2xl hover:bg-white/15 transition font-bold text-lg">
                Compare All Packages
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

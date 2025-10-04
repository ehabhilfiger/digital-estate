import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check, Shield, Server, Lock, Zap, ArrowRight, Home, Network } from 'lucide-react';

export default function EstateTier() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-emerald-400/30 bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 rounded-full bg-emerald-400 text-black text-xs font-bold">
              MOST POPULAR
            </span>
            <Link href="/start-project">
              <button className="px-4 py-2 bg-emerald-400 text-black rounded-xl hover:bg-emerald-300 transition font-medium text-sm">
                Request This Package
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex px-4 py-2 rounded-full bg-emerald-400 text-black text-sm font-bold mb-6">
            ESTATE TIER • MOST POPULAR
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Complete Digital <span className="text-emerald-400">Estate</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Multi-server zero-trust architecture for executives and high-net-worth individuals. Full digital sovereignty with luxury smart home integration.
          </p>
        </div>

        {/* Image Showcase */}
        <div className="mb-16 rounded-2xl overflow-hidden border-2 border-emerald-400 shadow-2xl shadow-emerald-400/20">
          <Image
            src="/images/Tier 2 example.webp"
            alt="Estate Tier - Complete Digital Estate with Zero-Trust Network"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>

        {/* Pricing */}
        <div className="mb-16 rounded-2xl border-2 border-emerald-400 bg-gradient-to-br from-emerald-400/20 to-transparent p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 blur-3xl"></div>
          <div className="relative">
            <div className="text-6xl font-bold text-emerald-400 mb-4">$50,000</div>
            <div className="text-xl text-white/80">Comprehensive Estate Package</div>
            <div className="mt-4 text-white/60">Multi-server deployment, smart home integration & 6-month concierge support</div>
          </div>
        </div>

        {/* What's Included */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl border-2 border-emerald-400/50 bg-gradient-to-br from-emerald-400/10 to-transparent p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Server className="h-8 w-8 text-emerald-400" />
              Network Infrastructure
            </h2>
            <ul className="space-y-4">
              {[
                'pfSense or OPNsense firewall with HA failover',
                'Segmented VLANs (smart home, office, guest, IoT)',
                'Managed 10GbE switch with VLAN configuration',
                'Wireguard VPN with unlimited client configs',
                'Pi-hole DNS filtering across all networks',
                'UniFi or equivalent enterprise WiFi mesh (6+ APs)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Lock className="h-8 w-8 text-blue-400" />
              Server & Storage
            </h2>
            <ul className="space-y-4">
              {[
                'Proxmox VE cluster (3-node or single high-spec)',
                'TrueNAS Scale or Synology RS4021xs+ (32TB+ RAID)',
                'VM hosting for applications and services',
                'Docker container orchestration',
                'Automated backup to multiple destinations',
                'Snapshot-based recovery and rollback',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Home className="h-8 w-8 text-purple-400" />
              Smart Home Integration
            </h2>
            <ul className="space-y-4">
              {[
                'Home Assistant server with full automation',
                'Zigbee/Z-Wave controller integration',
                'Local voice control (no cloud dependencies)',
                'Security camera NVR with local storage',
                'Smart lighting and climate control',
                'Presence detection and automation rules',
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
              <Shield className="h-8 w-8 text-pink-400" />
              Security & Monitoring
            </h2>
            <ul className="space-y-4">
              {[
                'Intrusion detection system (IDS/IPS)',
                'Real-time traffic monitoring and analytics',
                'Automated threat blocking and alerts',
                'Certificate management (SSL/TLS)',
                'Full network logging and audit trails',
                '6-month concierge support with priority response',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Real Results */}
        <div className="rounded-2xl border-2 border-emerald-400/30 bg-gradient-to-br from-emerald-400/5 to-transparent p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Estate-Level Outcomes</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">3+</div>
              <div className="text-white/70">Isolated Networks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-white/70">Connected Devices</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-white/70">Local Processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">Zero</div>
              <div className="text-white/70">Cloud Dependencies</div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6">
            <p className="text-lg italic text-emerald-400 mb-2">
              "Peace of mind knowing my family's entire digital life is secure and private. The smart home integration is seamless."
            </p>
            <p className="text-white/60">— Executive Client, Chicago</p>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'pfSense Firewall', color: 'emerald' },
              { name: 'Proxmox VE', color: 'blue' },
              { name: 'VLAN Segmentation', color: 'purple' },
              { name: 'Home Assistant', color: 'pink' },
              { name: 'TrueNAS Scale', color: 'emerald' },
              { name: 'Wireguard VPN', color: 'blue' },
              { name: 'UniFi Network', color: 'purple' },
              { name: 'Docker/Kubernetes', color: 'pink' },
              { name: 'Grafana Monitoring', color: 'emerald' },
              { name: 'Suricata IDS', color: 'blue' },
              { name: 'Pi-hole DNS', color: 'purple' },
              { name: 'Automated Backups', color: 'pink' },
            ].map((tech) => (
              <span key={tech.name} className={`px-4 py-2 rounded-lg bg-${tech.color}-400/10 text-${tech.color}-400 border border-${tech.color}-400/20 text-sm font-medium`}>
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your Home into a Digital Estate</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            This is our most popular package for good reason. Complete digital sovereignty with luxury smart home integration—zero compromises on security or convenience.
          </p>
          <Link href="/start-project">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-emerald-400 text-black rounded-2xl hover:bg-emerald-300 transition font-bold text-lg shadow-lg shadow-emerald-400/30">
              Start Your Digital Estate <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

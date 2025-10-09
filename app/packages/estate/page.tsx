import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check, Shield, Server, Home, Network, ArrowRight, Zap, Brain } from 'lucide-react';

export default function EstatePackage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white relative egyptian-texture">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/25k.webp"
          alt="Estate Package Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      {/* Content */}
      <div className="relative z-10">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-blue-500/30 bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/#work" className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
            <ArrowLeft className="h-4 w-4" />
            Back to Packages
          </Link>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 rounded-full bg-blue-500 text-black text-xs font-bold">
              MOST POPULAR
            </span>
            <Link href="/start-project">
              <button className="px-4 py-2 bg-blue-500 text-black rounded-xl hover:bg-blue-500 transition font-medium text-sm">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm mb-6">
            ESTATE PACKAGE
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Estate <span className="text-blue-500">Package</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Comprehensive digital estate for professionals and families. Multi-server deployment with advanced security, smart home integration, and on-prem AI capabilities.
          </p>
        </div>

        {/* Image Showcase - Centerpiece */}
        <div className="mb-16 rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-2xl blue-glow">
          <Image
            src="/images/25k.webp"
            alt="Estate Package - Comprehensive digital estate"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Pricing */}
        <div className="mb-16 rounded-2xl border-2 border-blue-500 bg-gradient-to-br from-blue-500/20 to-transparent p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-slate-400/10 blur-3xl"></div>
          <div className="relative">
            <div className="text-6xl font-bold text-blue-500 mb-4">$8,000 – $15,000</div>
            <div className="text-xl text-white/80">Complete Digital Estate</div>
            <div className="mt-4 text-white/60">Our most popular package - comprehensive infrastructure with ongoing support</div>
          </div>
        </div>

        {/* What's Included */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl border-2 border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-transparent p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Server className="h-8 w-8 text-blue-500" />
              Multi-Server Infrastructure
            </h2>
            <ul className="space-y-4">
              {[
                'Multi-server deployment (2-3 physical or virtual servers)',
                'Primary NAS with 10-20TB storage capacity',
                'Dedicated application server for services',
                'High-performance networking (1-10GbE)',
                'Redundant backup systems',
                'Virtualization with Proxmox or ESXi',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Network className="h-8 w-8 text-slate-400" />
              Network Segmentation
            </h2>
            <ul className="space-y-4">
              {[
                'VLAN segmentation for network isolation',
                'Dedicated guest network with limited access',
                'IoT VLAN for smart home devices',
                'Work/office VLAN for professional use',
                'Enterprise firewall (pfSense or OPNsense)',
                'Advanced VPN with multiple protocols',
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
              <Home className="h-8 w-8 text-blue-500" />
              Smart Home Integration
            </h2>
            <ul className="space-y-4">
              {[
                'Home Assistant server with full automation',
                'Zigbee/Z-Wave controller integration',
                'Local voice control (no cloud required)',
                'Smart lighting and climate automation',
                'Presence detection and geofencing',
                'Custom automation rules and scenes',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Brain className="h-8 w-8 text-blue-500" />
              On-Prem AI Services
            </h2>
            <ul className="space-y-4">
              {[
                'Local LLM deployment (Ollama or llama.cpp)',
                'Private ChatGPT-style interface',
                'Voice assistant integration',
                'Document processing and search',
                'Image recognition and tagging',
                'All processing stays on your network',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Shield className="h-8 w-8 text-blue-500" />
              Monitoring & Alerts
            </h2>
            <ul className="space-y-4">
              {[
                'Real-time system monitoring dashboard',
                'Automated health checks and alerts',
                'Performance metrics and logging',
                'Storage capacity monitoring',
                'Security event alerting',
                'Mobile app for remote monitoring',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Zap className="h-8 w-8 text-slate-400" />
              Extended Support
            </h2>
            <ul className="space-y-4">
              {[
                '90-day comprehensive support included',
                'Priority response for critical issues',
                'Remote assistance and troubleshooting',
                'Configuration changes and optimization',
                'Software updates and security patches',
                'Quarterly system health reviews',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Use Cases */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Perfect For:</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Home,
                title: 'Tech-Forward Families',
                description: 'Families wanting complete control over their digital life with smart home integration and privacy.',
              },
              {
                icon: Server,
                title: 'Remote Professionals',
                description: 'Executives and consultants needing secure, professional-grade infrastructure from home.',
              },
              {
                icon: Brain,
                title: 'AI Enthusiasts',
                description: 'Privacy-conscious users wanting to run AI models locally without cloud dependencies.',
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <item.icon className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="font-semibold mb-2 text-blue-500">{item.title}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="rounded-2xl border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-transparent p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Estate Package Value</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">3+</div>
              <div className="text-white/70">Network Zones</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-400 mb-2">50+</div>
              <div className="text-white/70">Devices Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">100%</div>
              <div className="text-white/70">Local Control</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">90</div>
              <div className="text-white/70">Days Support</div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6">
            <p className="text-lg italic text-blue-500 text-center">
              "The Estate package transforms your home into a sophisticated digital estate with enterprise-grade capabilities."
            </p>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">6-Week Implementation</h2>
          <div className="space-y-4">
            {[
              { phase: 'Weeks 1-2', title: 'Planning & Procurement', description: 'Detailed assessment, hardware specification, procurement and delivery' },
              { phase: 'Week 3', title: 'Core Infrastructure', description: 'Server setup, network configuration, VLAN segmentation' },
              { phase: 'Week 4', title: 'Smart Home & AI', description: 'Home Assistant deployment, AI model setup, automation rules' },
              { phase: 'Week 5', title: 'Security & Testing', description: 'Security hardening, penetration testing, performance optimization' },
              { phase: 'Week 6', title: 'Training & Go-Live', description: 'User training, documentation, final handoff and 90-day support begins' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-blue-500 font-semibold">{item.phase}</div>
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
          <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Proxmox VE', color: 'emerald' },
              { name: 'pfSense', color: 'blue' },
              { name: 'Home Assistant', color: 'purple' },
              { name: 'Ollama AI', color: 'pink' },
              { name: 'TrueNAS', color: 'emerald' },
              { name: 'Wireguard', color: 'blue' },
              { name: 'Grafana', color: 'purple' },
              { name: 'Docker', color: 'pink' },
              { name: 'VLAN 802.1Q', color: 'emerald' },
              { name: 'Zigbee/Z-Wave', color: 'blue' },
            ].map((tech) => (
              <span key={tech.name} className={`px-4 py-2 rounded-lg bg-${tech.color}-400/10 text-${tech.color}-400 border border-${tech.color}-400/20 text-sm font-medium`}>
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Build Your Digital Estate</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Join the clients who've transformed their homes into sophisticated digital estates. Complete sovereignty with zero compromises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start-project">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-black rounded-2xl hover:bg-blue-500 transition font-bold text-lg shadow-lg shadow-blue-500/30">
                Start Your Estate <ArrowRight className="ml-2 h-5 w-5" />
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
    </div>
  );
}

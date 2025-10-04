import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check, Shield, Server, Cpu, Network, ArrowRight, Zap, Settings } from 'lucide-react';

export default function ArchitectPackage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/architect.png"
          alt="Architect Package Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      {/* Content */}
      <div className="relative z-10">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-purple-400/30 bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/#work" className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
            <ArrowLeft className="h-4 w-4" />
            Back to Packages
          </Link>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 rounded-full bg-purple-400 text-black text-xs font-bold">
              ENTERPRISE GRADE
            </span>
            <Link href="/start-project">
              <button className="px-4 py-2 bg-purple-400 text-black rounded-xl hover:bg-purple-300 transition font-medium text-sm">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex px-4 py-2 rounded-full bg-purple-400/20 border border-purple-400/40 text-purple-400 text-sm font-bold mb-6">
            TIER 3: ARCHITECT • ENTERPRISE
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Architect <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-400">Package</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Enterprise-grade infrastructure with high-availability clustering, custom automation, and dedicated concierge support. Built for organizations demanding perfection.
          </p>
        </div>

        {/* Pricing */}
        <div className="mb-16 rounded-2xl border-2 border-purple-400 bg-gradient-to-br from-purple-400/20 via-amber-400/10 to-transparent p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-amber-400/10 to-slate-400/10 blur-3xl"></div>
          <div className="relative">
            <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-400 mb-4">
              $20,000+
            </div>
            <div className="text-xl text-white/80">Enterprise Architecture Package</div>
            <div className="mt-4 text-white/60">White-glove service with 12-month SLA and dedicated concierge</div>
          </div>
        </div>

        {/* What's Included */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl border-2 border-purple-400/50 bg-gradient-to-br from-purple-400/10 to-transparent p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Server className="h-8 w-8 text-purple-400" />
              Enterprise-Grade Stack
            </h2>
            <ul className="space-y-4">
              {[
                'Multi-node Proxmox cluster (3-5 servers minimum)',
                'High-availability failover configuration',
                'Enterprise storage with SSD caching',
                'Redundant networking (bonding/LACP)',
                'Enterprise backup solution (Veeam or equivalent)',
                'Disaster recovery with off-site replication',
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
              <Cpu className="h-8 w-8 text-slate-400" />
              High-Availability Clustering
            </h2>
            <ul className="space-y-4">
              {[
                'Automated failover for zero downtime',
                'Load balancing across cluster nodes',
                'Shared storage with Ceph or GlusterFS',
                'Live migration of virtual machines',
                'Quorum-based consensus mechanism',
                'Automatic resource rebalancing',
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
              <Settings className="h-8 w-8 text-amber-500" />
              Custom Automation
            </h2>
            <ul className="space-y-4">
              {[
                'Ansible playbooks for infrastructure as code',
                'Custom scripts for your specific workflows',
                'Automated provisioning and deployment',
                'CI/CD pipeline integration',
                'Scheduled maintenance automation',
                'Self-healing infrastructure components',
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
              <Network className="h-8 w-8 text-amber-400" />
              Multi-Site Synchronization
            </h2>
            <ul className="space-y-4">
              {[
                'Geographic replication for disaster recovery',
                'WireGuard mesh VPN between locations',
                'Real-time data synchronization',
                'Automated failover to backup site',
                'Site-to-site encrypted tunnels',
                'Latency-optimized routing',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Shield className="h-8 w-8 text-purple-400" />
              Dedicated Concierge
            </h2>
            <ul className="space-y-4">
              {[
                'Dedicated infrastructure architect assigned',
                'Direct phone and email access',
                'Monthly strategic planning sessions',
                'Proactive monitoring and optimization',
                'On-demand consultation and guidance',
                'Technology roadmap planning',
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
              <Zap className="h-8 w-8 text-slate-400" />
              12-Month SLA
            </h2>
            <ul className="space-y-4">
              {[
                '99.9% uptime guarantee',
                '2-hour response time for critical issues',
                '4-hour on-site response (Chicago metro)',
                'Quarterly infrastructure health audits',
                'Annual capacity planning review',
                'Priority access to emergency support',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enterprise Features */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Enterprise Features Included</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Compliance Ready', description: 'HIPAA, SOC 2, and industry compliance frameworks supported with audit trails' },
              { title: 'Advanced Monitoring', description: 'Enterprise monitoring with Grafana, Prometheus, and custom dashboards' },
              { title: 'Security Hardening', description: 'CIS benchmark compliance, intrusion detection, and security event correlation' },
              { title: 'Capacity Planning', description: 'Proactive resource planning with growth projections and optimization' },
              { title: 'Documentation', description: 'Comprehensive runbooks, network diagrams, and recovery procedures' },
              { title: 'Knowledge Transfer', description: 'Team training and ongoing education for your IT staff' },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="font-semibold mb-2 text-purple-400">{item.title}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="rounded-2xl border-2 border-purple-400/30 bg-gradient-to-br from-purple-400/5 to-transparent p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Enterprise Performance Metrics</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-white/70">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-400 mb-2">2hr</div>
              <div className="text-white/70">Critical Response</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">24/7</div>
              <div className="text-white/70">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">12mo</div>
              <div className="text-white/70">SLA Coverage</div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6">
            <p className="text-lg italic text-purple-400 text-center">
              "Enterprise-grade infrastructure with Fortune 500 reliability for organizations that demand perfection."
            </p>
          </div>
        </div>

        {/* Ideal For */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Built For:</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Law Firms & Professional Services',
                description: 'Compliance-ready infrastructure with client data sovereignty and litigation hold capabilities.',
              },
              {
                title: 'Healthcare & Research',
                description: 'HIPAA-compliant infrastructure for patient data and research requiring air-gapped security.',
              },
              {
                title: 'Financial Services',
                description: 'SOC 2 compliant infrastructure with audit trails and data retention for regulatory requirements.',
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <h3 className="font-semibold mb-2 text-purple-400">{item.title}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">8-12 Week Enterprise Deployment</h2>
          <div className="space-y-4">
            {[
              { phase: 'Weeks 1-2', title: 'Discovery & Architecture', description: 'Comprehensive assessment, architecture design, compliance requirements' },
              { phase: 'Weeks 3-4', title: 'Procurement & Prep', description: 'Enterprise hardware procurement, site surveys, physical preparation' },
              { phase: 'Weeks 5-7', title: 'Core Deployment', description: 'Cluster installation, network build-out, storage configuration' },
              { phase: 'Weeks 8-9', title: 'Integration & Testing', description: 'Application migration, failover testing, performance tuning' },
              { phase: 'Weeks 10-11', title: 'Security & Compliance', description: 'Security hardening, compliance validation, penetration testing' },
              { phase: 'Week 12', title: 'Go-Live & Knowledge Transfer', description: 'Production cutover, team training, documentation delivery' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-28 text-purple-400 font-semibold">{item.phase}</div>
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
          <h2 className="text-2xl font-bold mb-6">Enterprise Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Proxmox HA', color: 'purple' },
              { name: 'Ceph Storage', color: 'pink' },
              { name: 'OPNsense HA', color: 'blue' },
              { name: 'Ansible', color: 'emerald' },
              { name: 'Veeam Backup', color: 'purple' },
              { name: 'Grafana', color: 'pink' },
              { name: 'Prometheus', color: 'blue' },
              { name: 'WireGuard Mesh', color: 'emerald' },
              { name: 'Kubernetes', color: 'purple' },
              { name: 'GitLab CI/CD', color: 'pink' },
              { name: 'Suricata IDS', color: 'blue' },
              { name: 'LACP Bonding', color: 'emerald' },
            ].map((tech) => (
              <span key={tech.name} className={`px-4 py-2 rounded-lg bg-${tech.color}-400/10 text-${tech.color}-400 border border-${tech.color}-400/20 text-sm font-medium`}>
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Enterprise Architecture?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Join organizations that refuse to compromise on reliability, security, or performance. Let's architect your enterprise infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start-project">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-400 to-amber-400 text-black rounded-2xl hover:from-purple-300 hover:to-amber-300 transition font-bold text-lg shadow-lg shadow-purple-400/30">
                Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
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

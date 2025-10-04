import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check, Shield, Server, Lock, Zap, ArrowRight, Brain, Cpu, HardDrive } from 'lucide-react';

export default function ArchitectTier() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-purple-400/30 bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 rounded-full bg-purple-400 text-black text-xs font-bold">
              ENTERPRISE GRADE
            </span>
            <Link href="/start-project">
              <button className="px-4 py-2 bg-purple-400 text-black rounded-xl hover:bg-purple-300 transition font-medium text-sm">
                Request This Package
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex px-4 py-2 rounded-full bg-purple-400/20 border border-purple-400/40 text-purple-400 text-sm font-bold mb-6">
            ARCHITECT TIER • ENTERPRISE
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            AI Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-400">Infrastructure</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            High-availability GPU clusters with on-premises AI deployment. Built for research labs, AI companies, and organizations demanding confidential compute at scale.
          </p>
        </div>

        {/* Image Showcase */}
        <div className="mb-16 rounded-2xl overflow-hidden border-2 border-purple-400 shadow-2xl shadow-purple-400/20">
          <img
            src="/images/250k-tier.png"
            alt="Architect Tier - Enterprise AI Research Infrastructure"
            className="w-full h-auto"
          />
        </div>

        {/* Pricing */}
        <div className="mb-16 rounded-2xl border-2 border-purple-400 bg-gradient-to-br from-purple-400/20 via-amber-400/10 to-transparent p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-amber-400/10 to-slate-400/10 blur-3xl"></div>
          <div className="relative">
            <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-400 mb-4">
              $250,000+
            </div>
            <div className="text-xl text-white/80">Enterprise Architecture Package</div>
            <div className="mt-4 text-white/60">Turnkey AI infrastructure with HA clustering, GPU passthrough & 12-month SLA</div>
          </div>
        </div>

        {/* DarkGPT Feature */}
        <div className="mb-16 rounded-2xl border-2 border-purple-500/50 bg-gradient-to-br from-purple-500/10 via-slate-900 to-black p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-4 right-4 px-4 py-2 bg-purple-500 text-white text-xs font-bold rounded-full">
            ELITE EXCLUSIVE
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="/images/darkgpt.png" 
                alt="DarkGPT Logo" 
                className="h-12 w-auto"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-400">
                DarkGPT — Unrestricted Local AI
              </h2>
            </div>
            <p className="text-white/80 text-lg mb-6">
              We install a completely private, uncensored local LLM that <strong className="text-white">never says no</strong>. Fully customized to your needs, running entirely on your hardware with zero external connections.
            </p>
            <div className="bg-slate-950/70 rounded-xl p-6 mb-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">One Week On-Site Programming</h3>
              <p className="text-white/70 mb-4">
                I'll spend an entire week at your location fine-tuning DarkGPT until every parameter is dialed in perfectly. We don't stop until you're 100% satisfied with how it responds, thinks, and caters to your specific needs.
              </p>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-4">
                <div className="text-lg font-bold text-amber-500 mb-2">Pricing: Available Upon Request</div>
                <p className="text-white/70 text-sm italic">
                  "DarkGPT pricing is negotiable based on your budget. If you have the money, I have the time. Let's talk."
                </p>
              </div>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Custom-trained on your preferences and workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>No censorship, no limitations, no external oversight</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Completely private — your conversations never leave your network</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Integrates with your entire digital estate</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>One full week of on-site fine-tuning and customization</span>
                </li>
              </ul>
            </div>
            <p className="text-purple-400 font-semibold italic">
              "Your AI. Your rules. Zero compromises."
            </p>
          </div>
        </div>

        {/* What's Included */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl border-2 border-purple-400/50 bg-gradient-to-br from-purple-400/10 to-transparent p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Brain className="h-8 w-8 text-purple-400" />
              AI & Compute Infrastructure
            </h2>
            <ul className="space-y-4">
              {[
                'High-availability Proxmox cluster (5+ nodes)',
                'GPU passthrough (NVIDIA A6000, H100, or custom)',
                'On-prem LLM deployment (Ollama, llama.cpp, vLLM)',
                'Open WebUI or custom inference interface',
                'Model training pipeline automation',
                'Distributed compute orchestration (Kubernetes)',
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
              <HardDrive className="h-8 w-8 text-slate-400" />
              Storage & Data Management
            </h2>
            <ul className="space-y-4">
              {[
                'TrueNAS Scale enterprise array (100TB+ RAIDZ2)',
                'NVMe-based SSD caching for model datasets',
                'Multi-site replication and disaster recovery',
                'S3-compatible object storage (MinIO)',
                'Automated snapshot management',
                'Tiered storage with hot/warm/cold zones',
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
              <Server className="h-8 w-8 text-amber-500" />
              Network & Security
            </h2>
            <ul className="space-y-4">
              {[
                'OPNsense firewall with HA failover pair',
                '25GbE or 100GbE backend network fabric',
                'Zero-trust network segmentation',
                'Wireguard mesh VPN between sites',
                'DDoS protection and rate limiting',
                'Full network traffic analytics and logging',
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
              <Shield className="h-8 w-8 text-amber-400" />
              Enterprise Support & SLA
            </h2>
            <ul className="space-y-4">
              {[
                'Dedicated solutions architect assigned',
                '12-month comprehensive SLA coverage',
                '4-hour response time for critical issues',
                'Quarterly infrastructure review and optimization',
                'Custom automation development',
                'Knowledge transfer and team training',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Real Results */}
        <div className="rounded-2xl border-2 border-purple-400/30 bg-gradient-to-br from-purple-400/5 to-transparent p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Enterprise Performance Metrics</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.99%</div>
              <div className="text-white/70">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-400 mb-2">10x</div>
              <div className="text-white/70">Faster Than Cloud</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">100%</div>
              <div className="text-white/70">Data Confidentiality</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">Multi-Site</div>
              <div className="text-white/70">Replication</div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6">
            <p className="text-lg italic text-purple-400 mb-2">
              "Our research stays confidential. Performance exceeds cloud solutions at a fraction of the long-term cost. Best infrastructure decision we've made."
            </p>
            <p className="text-white/60">— Research Director, AI Research Lab</p>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Enterprise Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Proxmox HA Cluster', color: 'purple' },
              { name: 'NVIDIA GPU (A6000/H100)', color: 'pink' },
              { name: 'Ollama LLM', color: 'blue' },
              { name: 'Open WebUI', color: 'emerald' },
              { name: 'TrueNAS Enterprise', color: 'purple' },
              { name: 'Kubernetes', color: 'pink' },
              { name: 'MinIO S3', color: 'blue' },
              { name: 'OPNsense HA', color: 'emerald' },
              { name: 'Ceph Storage', color: 'purple' },
              { name: 'Grafana + Prometheus', color: 'pink' },
              { name: 'Multi-Site Sync', color: 'blue' },
              { name: 'Automated Failover', color: 'emerald' },
              { name: 'Custom Automation', color: 'purple' },
              { name: 'CI/CD Pipeline', color: 'pink' },
            ].map((tech) => (
              <span key={tech.name} className={`px-4 py-2 rounded-lg bg-${tech.color}-400/10 text-${tech.color}-400 border border-${tech.color}-400/20 text-sm font-medium`}>
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: 'AI Research Labs',
              icon: Brain,
              description: 'Local model training and inference without cloud vendor lock-in or data leakage.',
            },
            {
              title: 'Financial Services',
              icon: Shield,
              description: 'Compliance-ready infrastructure with audit trails and complete data sovereignty.',
            },
            {
              title: 'Healthcare & Biotech',
              icon: Lock,
              description: 'HIPAA-compliant private infrastructure for sensitive patient data and research.',
            },
          ].map((useCase) => (
            <div key={useCase.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-purple-400/50 transition">
              <useCase.icon className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
              <p className="text-white/70">{useCase.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Enterprise-Grade AI Infrastructure?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            This tier is designed for organizations that refuse to compromise on performance, security, or data sovereignty. Let's architect your private AI infrastructure.
          </p>
          <Link href="/start-project">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-400 to-amber-400 text-black rounded-2xl hover:from-purple-300 hover:to-amber-300 transition font-bold text-lg shadow-lg shadow-purple-400/30">
              Schedule Architecture Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

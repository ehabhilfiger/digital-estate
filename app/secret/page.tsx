import SecretGate from '../SecretGate';
import Link from 'next/link';
import { Shield, Lock, Star, Zap, FileText, Download } from 'lucide-react';

export default function SecretPage() {
  return (
    <SecretGate>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Header */}
        <header className="border-b border-white/10 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-amber-500/10 grid place-items-center">
                  <Shield className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold">Private Vault</h1>
                  <p className="text-xs text-white/60">Authorized Access Only</p>
                </div>
              </div>
              <Link
                href="/"
                className="text-sm text-amber-500 hover:text-amber-400 transition"
              >
                ← Exit Vault
              </Link>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-12">
          {/* Welcome Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm mb-6">
              <Lock className="h-4 w-4" />
              <span>Access Granted</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to the Private Vault
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Exclusive content, premium resources, and confidential documentation available only to authorized personnel.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8 hover:border-amber-500/50 transition">
              <Star className="h-12 w-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Premium Resources</h3>
              <p className="text-white/70">
                Access to exclusive whitepapers, case studies, and technical documentation not available publicly.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-400/30 bg-slate-400/5 p-8 hover:border-slate-400/50 transition">
              <Zap className="h-12 w-12 text-slate-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Priority Support</h3>
              <p className="text-white/70">
                Direct access to advanced troubleshooting guides, deployment scripts, and automation tools.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-400/30 bg-purple-400/5 p-8 hover:border-purple-400/50 transition">
              <Shield className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Confidential Files</h3>
              <p className="text-white/70">
                Secure document repository for sensitive project files, contracts, and proprietary information.
              </p>
            </div>
          </div>

          {/* Secret Content Area */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold">Confidential Documentation</h3>
              <div className="text-sm text-white/60">
                <FileText className="h-4 w-4 inline mr-1" />
                9 files
              </div>
            </div>
            
            <div className="space-y-4">
              {/* TOP SECRET - Ehab's Master Plan */}
              <a 
                href="/vault/Ehab Secret plan.pdf" 
                download 
                className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-amber-500/20 border-2 border-purple-500/50 hover:border-purple-400 transition group cursor-pointer"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-500 text-white">TOP SECRET</span>
                  </div>
                  <h4 className="font-bold text-lg group-hover:text-purple-400 transition">Ehab's Master Plan</h4>
                  <p className="text-sm text-white/70 mt-1">Confidential strategic roadmap - Authorized eyes only</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-xs text-white/60">PDF • 5.6 MB</div>
                  <Download className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition animate-pulse" />
                </div>
              </a>

              <a 
                href="/vault/Enterprise Infrastructure Blueprint.pdf" 
                download 
                className="flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-white/10 hover:border-amber-500/50 transition group cursor-pointer"
              >
                <div className="flex-1">
                  <h4 className="font-medium group-hover:text-amber-500 transition">Enterprise Infrastructure Blueprint</h4>
                  <p className="text-sm text-white/60 mt-1">Complete deployment guide for enterprise clients - includes network diagrams</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-xs text-white/40">PDF • 47 KB</div>
                  <Download className="h-4 w-4 text-white/40 group-hover:text-amber-500 transition" />
                </div>
              </a>

              <a 
                href="/vault/Advanced Security Protocols.pdf" 
                download 
                className="flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-white/10 hover:border-amber-500/50 transition group cursor-pointer"
              >
                <div className="flex-1">
                  <h4 className="font-medium group-hover:text-amber-500 transition">Advanced Security Protocols</h4>
                  <p className="text-sm text-white/60 mt-1">Zero-trust architecture implementation guide with firewall rules</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-xs text-white/40">PDF • 34 KB</div>
                  <Download className="h-4 w-4 text-white/40 group-hover:text-amber-500 transition" />
                </div>
              </a>

              <a 
                href="/vault/Client Contract Templates.pdf" 
                download 
                className="flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-white/10 hover:border-amber-500/50 transition group cursor-pointer"
              >
                <div className="flex-1">
                  <h4 className="font-medium group-hover:text-amber-500 transition">Client Contract Templates</h4>
                  <p className="text-sm text-white/60 mt-1">Legal agreements, MSA, and service level documents</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-xs text-white/40">PDF • 39 KB</div>
                  <Download className="h-4 w-4 text-white/40 group-hover:text-amber-500 transition" />
                </div>
              </a>

              <a 
                href="/vault/On-Prem AI Deployment Scripts.pdf" 
                download 
                className="flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-white/10 hover:border-amber-500/50 transition group cursor-pointer"
              >
                <div className="flex-1">
                  <h4 className="font-medium group-hover:text-amber-500 transition">On-Prem AI Deployment Scripts</h4>
                  <p className="text-sm text-white/60 mt-1">Automated setup for Ollama, llama.cpp, Open WebUI, and LM Studio</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-xs text-white/40">PDF • 42 KB</div>
                  <Download className="h-4 w-4 text-white/40 group-hover:text-amber-500 transition" />
                </div>
              </a>

              <a 
                href="/vault/GPU Passthrough Guide.pdf" 
                download 
                className="flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-white/10 hover:border-amber-500/50 transition group cursor-pointer"
              >
                <div className="flex-1">
                  <h4 className="font-medium group-hover:text-amber-500 transition">Proxmox GPU Passthrough Guide</h4>
                  <p className="text-sm text-white/60 mt-1">Step-by-step configuration for NVIDIA GPU passthrough to VMs</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-xs text-white/40">PDF • 47 KB</div>
                  <Download className="h-4 w-4 text-white/40 group-hover:text-amber-500 transition" />
                </div>
              </a>

              <a 
                href="/vault/TrueNAS Setup Guide.pdf" 
                download 
                className="flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-white/10 hover:border-amber-500/50 transition group cursor-pointer"
              >
                <div className="flex-1">
                  <h4 className="font-medium group-hover:text-amber-500 transition">TrueNAS Scale Configuration</h4>
                  <p className="text-sm text-white/60 mt-1">Complete setup guide with ZFS pool optimization and app deployment</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-xs text-white/40">PDF • 47 KB</div>
                  <Download className="h-4 w-4 text-white/40 group-hover:text-amber-500 transition" />
                </div>
              </a>

              <a 
                href="/vault/WireGuard VPN Configuration.pdf" 
                download 
                className="flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-white/10 hover:border-amber-500/50 transition group cursor-pointer"
              >
                <div className="flex-1">
                  <h4 className="font-medium group-hover:text-amber-500 transition">Wireguard VPN Automation</h4>
                  <p className="text-sm text-white/60 mt-1">Bash scripts for automated client provisioning and QR code generation</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-xs text-white/40">PDF • 45 KB</div>
                  <Download className="h-4 w-4 text-white/40 group-hover:text-amber-500 transition" />
                </div>
              </a>

              <a 
                href="/vault/Confidential Documentation Vault.pdf" 
                download 
                className="flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-white/10 hover:border-amber-500/50 transition group cursor-pointer"
              >
                <div className="flex-1">
                  <h4 className="font-medium group-hover:text-amber-500 transition">Confidential Documentation Vault</h4>
                  <p className="text-sm text-white/60 mt-1">Master documentation repository index and overview</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-xs text-white/40">PDF • 112 KB</div>
                  <Download className="h-4 w-4 text-white/40 group-hover:text-amber-500 transition" />
                </div>
              </a>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <p className="text-sm text-amber-400">
                <strong>⚠ Confidentiality Notice:</strong> All content in this vault is confidential and proprietary. Unauthorized distribution, reproduction, or disclosure is strictly prohibited and may result in legal action.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-bold text-amber-500">9</div>
              <div className="text-sm text-white/60 mt-1">Documents</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-bold text-slate-400">6.1 MB</div>
              <div className="text-sm text-white/60 mt-1">Total Size</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-bold text-purple-400">AES-256</div>
              <div className="text-sm text-white/60 mt-1">Encrypted</div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center text-white/60 text-sm">
            <p>This private vault is secured with enterprise-grade encryption.</p>
            <p className="mt-2">For support or access issues, contact: <a href="mailto:defcon5ready@gmail.com" className="text-amber-500 hover:underline">defcon5ready@gmail.com</a></p>
          </div>
        </main>
      </div>
    </SecretGate>
  );
}

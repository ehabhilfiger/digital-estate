import SecretGate from '../SecretGate';
import Link from 'next/link';
import { Shield, Lock, Star, Crown, FileText, Download, Sparkles, Key } from 'lucide-react';

export default function SecretPage() {
  return (
    <SecretGate>
      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-zinc-950 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,119,6,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(217,119,6,0.08),transparent_50%)]" />
        </div>

        {/* Header */}
        <header className="relative border-b border-amber-500/20 backdrop-blur-xl bg-black/40 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl blur-xl opacity-50 animate-pulse" />
                  <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-500 via-yellow-600 to-amber-700 grid place-items-center shadow-2xl shadow-amber-500/50">
                    <Crown className="h-7 w-7 text-black" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
                    Private Vault
                  </h1>
                  <p className="text-xs text-amber-500/80 tracking-wider uppercase">Authorized Access Only</p>
                </div>
              </div>
              <Link
                href="/"
                className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/10 to-yellow-600/10 border border-amber-500/30 hover:border-amber-400/50 transition-all hover:shadow-lg hover:shadow-amber-500/20"
              >
                <span className="text-sm font-medium text-amber-400 group-hover:text-amber-300">Exit Vault</span>
                <Lock className="h-4 w-4 text-amber-400 group-hover:text-amber-300" />
              </Link>
            </div>
          </div>
        </header>

        <main className="relative max-w-7xl mx-auto px-6 py-16">
          {/* Welcome Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-600/20 to-amber-500/20 border border-amber-500/30 text-amber-400 text-sm mb-8 shadow-lg shadow-amber-500/10">
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span className="font-medium">Access Granted</span>
              <Key className="h-4 w-4" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent leading-tight">
              The Sanctum
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Exclusive repository of premium intelligence, confidential blueprints, and proprietary documentation reserved for authorized eyes only.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <div className="group relative rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-yellow-600/5 to-amber-500/5 p-8 hover:border-amber-400/50 transition-all hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-transparent to-yellow-600/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Star className="relative h-14 w-14 text-amber-500 mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="relative text-2xl font-bold mb-3 text-amber-100">Premium Intel</h3>
              <p className="relative text-zinc-400 leading-relaxed">
                Exclusive access to classified whitepapers, case studies, and advanced technical documentation unavailable to the public.
              </p>
            </div>

            <div className="group relative rounded-3xl border border-zinc-700/50 bg-gradient-to-br from-zinc-800/30 via-zinc-900/30 to-zinc-800/30 p-8 hover:border-zinc-600/70 transition-all hover:shadow-2xl hover:shadow-zinc-500/10 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/0 via-transparent to-zinc-600/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Shield className="relative h-14 w-14 text-zinc-400 mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="relative text-2xl font-bold mb-3 text-zinc-100">Elite Support</h3>
              <p className="relative text-zinc-400 leading-relaxed">
                Direct access to advanced troubleshooting protocols, deployment automation, and proprietary infrastructure tools.
              </p>
            </div>

            <div className="group relative rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-500/5 via-fuchsia-600/5 to-purple-500/5 p-8 hover:border-purple-400/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-fuchsia-600/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Lock className="relative h-14 w-14 text-purple-400 mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="relative text-2xl font-bold mb-3 text-purple-100">Classified Vault</h3>
              <p className="relative text-zinc-400 leading-relaxed">
                Secure repository for highly sensitive project files, legal contracts, and confidential proprietary information.
              </p>
            </div>
          </div>

          {/* Secret Content Area */}
          <div className="relative rounded-3xl border border-amber-500/30 bg-gradient-to-br from-black via-zinc-950 to-black p-10 md:p-14 shadow-2xl shadow-amber-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-purple-500/5 rounded-3xl" />
            
            <div className="relative flex items-center justify-between mb-10">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent mb-2">
                  Classified Archives
                </h3>
                <p className="text-zinc-500">Confidential documentation repository</p>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                <FileText className="h-4 w-4 text-amber-500" />
                <span className="text-sm font-medium text-amber-400">9 Documents</span>
              </div>
            </div>
            
            <div className="relative space-y-4">
              {/* TOP SECRET - Ehab's Master Plan */}
              <a 
                href="/vault/Ehab Secret plan.pdf" 
                download 
                className="group relative flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-purple-600/20 via-fuchsia-600/20 to-purple-600/20 border-2 border-purple-500/60 hover:border-purple-400/80 transition-all hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-1 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-fuchsia-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-400/30 transition-all" />
                
                <div className="relative flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Crown className="h-5 w-5 text-purple-400 animate-pulse" />
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/50">
                      TOP SECRET
                    </span>
                  </div>
                  <h4 className="font-bold text-2xl text-purple-100 group-hover:text-purple-50 transition mb-2">
                    Ehab's Master Plan
                  </h4>
                  <p className="text-sm text-purple-200/80 leading-relaxed">
                    Confidential strategic roadmap — Authorized eyes only
                  </p>
                </div>
                <div className="relative flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-xs font-medium text-purple-300">PDF Document</div>
                    <div className="text-lg font-bold text-purple-100">5.6 MB</div>
                  </div>
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 grid place-items-center shadow-lg shadow-purple-500/50 group-hover:scale-110 transition-transform">
                    <Download className="h-7 w-7 text-white animate-pulse" />
                  </div>
                </div>
              </a>

              {/* Regular Documents - Grid Layout */}
              <div className="grid md:grid-cols-2 gap-4">
                <a 
                  href="/vault/Enterprise Infrastructure Blueprint.pdf" 
                  download 
                  className="group relative flex flex-col p-5 rounded-2xl bg-gradient-to-br from-zinc-900/80 via-zinc-950/80 to-zinc-900/80 border border-amber-500/20 hover:border-amber-500/50 transition-all hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-amber-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-lg text-amber-100 group-hover:text-amber-50 transition flex-1">
                      Enterprise Infrastructure Blueprint
                    </h4>
                    <Download className="h-5 w-5 text-amber-500/60 group-hover:text-amber-400 group-hover:scale-110 transition-all" />
                  </div>
                  <p className="relative text-sm text-zinc-400 leading-relaxed mb-3">
                    Complete deployment guide with network diagrams
                  </p>
                  <div className="relative text-xs font-medium text-amber-500/80">PDF • 47 KB</div>
                </a>

                <a 
                  href="/vault/Advanced Security Protocols.pdf" 
                  download 
                  className="group relative flex flex-col p-5 rounded-2xl bg-gradient-to-br from-zinc-900/80 via-zinc-950/80 to-zinc-900/80 border border-amber-500/20 hover:border-amber-500/50 transition-all hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-amber-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-lg text-amber-100 group-hover:text-amber-50 transition flex-1">
                      Advanced Security Protocols
                    </h4>
                    <Download className="h-5 w-5 text-amber-500/60 group-hover:text-amber-400 group-hover:scale-110 transition-all" />
                  </div>
                  <p className="relative text-sm text-zinc-400 leading-relaxed mb-3">
                    Zero-trust architecture with firewall rules
                  </p>
                  <div className="relative text-xs font-medium text-amber-500/80">PDF • 34 KB</div>
                </a>

                <a 
                  href="/vault/Client Contract Templates.pdf" 
                  download 
                  className="group relative flex flex-col p-5 rounded-2xl bg-gradient-to-br from-zinc-900/80 via-zinc-950/80 to-zinc-900/80 border border-amber-500/20 hover:border-amber-500/50 transition-all hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-amber-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-lg text-amber-100 group-hover:text-amber-50 transition flex-1">
                      Client Contract Templates
                    </h4>
                    <Download className="h-5 w-5 text-amber-500/60 group-hover:text-amber-400 group-hover:scale-110 transition-all" />
                  </div>
                  <p className="relative text-sm text-zinc-400 leading-relaxed mb-3">
                    Legal agreements and service level docs
                  </p>
                  <div className="relative text-xs font-medium text-amber-500/80">PDF • 39 KB</div>
                </a>

                <a 
                  href="/vault/On-Prem AI Deployment Scripts.pdf" 
                  download 
                  className="group relative flex flex-col p-5 rounded-2xl bg-gradient-to-br from-zinc-900/80 via-zinc-950/80 to-zinc-900/80 border border-amber-500/20 hover:border-amber-500/50 transition-all hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-amber-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-lg text-amber-100 group-hover:text-amber-50 transition flex-1">
                      On-Prem AI Deployment Scripts
                    </h4>
                    <Download className="h-5 w-5 text-amber-500/60 group-hover:text-amber-400 group-hover:scale-110 transition-all" />
                  </div>
                  <p className="relative text-sm text-zinc-400 leading-relaxed mb-3">
                    Ollama, llama.cpp, Open WebUI automation
                  </p>
                  <div className="relative text-xs font-medium text-amber-500/80">PDF • 42 KB</div>
                </a>

                <a 
                  href="/vault/GPU Passthrough Guide.pdf" 
                  download 
                  className="group relative flex flex-col p-5 rounded-2xl bg-gradient-to-br from-zinc-900/80 via-zinc-950/80 to-zinc-900/80 border border-amber-500/20 hover:border-amber-500/50 transition-all hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-amber-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-lg text-amber-100 group-hover:text-amber-50 transition flex-1">
                      Proxmox GPU Passthrough
                    </h4>
                    <Download className="h-5 w-5 text-amber-500/60 group-hover:text-amber-400 group-hover:scale-110 transition-all" />
                  </div>
                  <p className="relative text-sm text-zinc-400 leading-relaxed mb-3">
                    NVIDIA GPU configuration for VMs
                  </p>
                  <div className="relative text-xs font-medium text-amber-500/80">PDF • 47 KB</div>
                </a>

                <a 
                  href="/vault/TrueNAS Setup Guide.pdf" 
                  download 
                  className="group relative flex flex-col p-5 rounded-2xl bg-gradient-to-br from-zinc-900/80 via-zinc-950/80 to-zinc-900/80 border border-amber-500/20 hover:border-amber-500/50 transition-all hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-amber-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-lg text-amber-100 group-hover:text-amber-50 transition flex-1">
                      TrueNAS Scale Configuration
                    </h4>
                    <Download className="h-5 w-5 text-amber-500/60 group-hover:text-amber-400 group-hover:scale-110 transition-all" />
                  </div>
                  <p className="relative text-sm text-zinc-400 leading-relaxed mb-3">
                    ZFS pool optimization and app deployment
                  </p>
                  <div className="relative text-xs font-medium text-amber-500/80">PDF • 47 KB</div>
                </a>

                <a 
                  href="/vault/WireGuard VPN Configuration.pdf" 
                  download 
                  className="group relative flex flex-col p-5 rounded-2xl bg-gradient-to-br from-zinc-900/80 via-zinc-950/80 to-zinc-900/80 border border-amber-500/20 hover:border-amber-500/50 transition-all hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-amber-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-lg text-amber-100 group-hover:text-amber-50 transition flex-1">
                      WireGuard VPN Automation
                    </h4>
                    <Download className="h-5 w-5 text-amber-500/60 group-hover:text-amber-400 group-hover:scale-110 transition-all" />
                  </div>
                  <p className="relative text-sm text-zinc-400 leading-relaxed mb-3">
                    Client provisioning and QR code generation
                  </p>
                  <div className="relative text-xs font-medium text-amber-500/80">PDF • 45 KB</div>
                </a>

                <a 
                  href="/vault/Confidential Documentation Vault.pdf" 
                  download 
                  className="group relative flex flex-col p-5 rounded-2xl bg-gradient-to-br from-zinc-900/80 via-zinc-950/80 to-zinc-900/80 border border-amber-500/20 hover:border-amber-500/50 transition-all hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-amber-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-lg text-amber-100 group-hover:text-amber-50 transition flex-1">
                      Documentation Vault Index
                    </h4>
                    <Download className="h-5 w-5 text-amber-500/60 group-hover:text-amber-400 group-hover:scale-110 transition-all" />
                  </div>
                  <p className="relative text-sm text-zinc-400 leading-relaxed mb-3">
                    Master repository overview and catalog
                  </p>
                  <div className="relative text-xs font-medium text-amber-500/80">PDF • 112 KB</div>
                </a>
              </div>
            </div>

            <div className="relative mt-10 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-yellow-600/10 to-amber-500/10 border border-amber-500/30 shadow-xl shadow-amber-500/5">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-amber-300 mb-1">
                    ⚠️ Confidentiality Notice
                  </p>
                  <p className="text-sm text-amber-100/80 leading-relaxed">
                    All materials contained within this vault are confidential and proprietary. Unauthorized distribution, reproduction, or disclosure is strictly prohibited and may result in legal action under applicable law.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative group rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-black to-amber-500/5 p-8 text-center hover:border-amber-400/50 transition-all hover:shadow-xl hover:shadow-amber-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/10 to-amber-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <FileText className="relative h-8 w-8 text-amber-500 mx-auto mb-3" />
              <div className="relative text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-2">9</div>
              <div className="relative text-sm text-zinc-400 tracking-wide">Documents</div>
            </div>

            <div className="relative group rounded-2xl border border-zinc-700/50 bg-gradient-to-br from-zinc-800/20 via-black to-zinc-800/20 p-8 text-center hover:border-zinc-600/70 transition-all hover:shadow-xl hover:shadow-zinc-500/5">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/0 via-zinc-700/10 to-zinc-700/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Download className="relative h-8 w-8 text-zinc-400 mx-auto mb-3" />
              <div className="relative text-4xl font-bold text-zinc-300 mb-2">6.1 MB</div>
              <div className="relative text-sm text-zinc-400 tracking-wide">Total Size</div>
            </div>

            <div className="relative group rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/5 via-black to-purple-500/5 p-8 text-center hover:border-purple-400/50 transition-all hover:shadow-xl hover:shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/10 to-purple-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Lock className="relative h-8 w-8 text-purple-400 mx-auto mb-3" />
              <div className="relative text-4xl font-bold text-purple-300 mb-2">AES-256</div>
              <div className="relative text-sm text-zinc-400 tracking-wide">Encrypted</div>
            </div>

            <div className="relative group rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-black to-yellow-600/5 p-8 text-center hover:border-amber-400/50 transition-all hover:shadow-xl hover:shadow-amber-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-yellow-500/10 to-amber-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Crown className="relative h-8 w-8 text-amber-400 mx-auto mb-3" />
              <div className="relative text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-2">Elite</div>
              <div className="relative text-sm text-zinc-400 tracking-wide">Access Level</div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800">
              <Shield className="h-4 w-4 text-zinc-500" />
              <span className="text-sm text-zinc-500">Enterprise-Grade Security</span>
            </div>
            <p className="text-zinc-600 text-sm">
              This vault is secured with military-grade encryption and multi-factor authentication.
            </p>
            <p className="text-zinc-600 text-sm">
              For support or access issues, contact:{' '}
              <a href="mailto:defcon5ready@gmail.com" className="text-amber-500 hover:text-amber-400 transition underline decoration-amber-500/30">
                defcon5ready@gmail.com
              </a>
            </p>
          </div>
        </main>
      </div>
    </SecretGate>
  );
}

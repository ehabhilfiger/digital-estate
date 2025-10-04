'use client';

import { useState } from 'react';
import SecretGate from '../SecretGate';
import MasterPlanGuard from './MasterPlanGuard';
import Link from 'next/link';
import { Shield, Lock, Star, Crown, FileText, Download, Sparkles, Key } from 'lucide-react';

export default function SecretPage() {
  const [isMasterPlanUnlocked, setIsMasterPlanUnlocked] = useState(false);

  return (
    <SecretGate>
      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-zinc-950 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,165,116,0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(194,181,128,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_60%,rgba(184,115,51,0.06),transparent_60%)]" />
        </div>

        {/* Enhanced Header with Egyptian Gold Theme */}
        <header className="relative border-b border-amber-500/30 backdrop-blur-xl bg-gradient-to-r from-black/60 via-zinc-950/60 to-black/60 sticky top-0 z-50 shadow-2xl shadow-black/50">
          <div className="max-w-7xl mx-auto px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-500 rounded-2xl blur-2xl opacity-60 animate-pulse" />
                  <div className="relative h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-500 via-yellow-600 to-amber-700 grid place-items-center shadow-2xl shadow-amber-500/60 ring-2 ring-amber-400/30">
                    <Crown className="h-8 w-8 text-black drop-shadow-lg" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent drop-shadow-lg">
                    The Sanctum
                  </h1>
                  <p className="text-xs text-amber-500/90 tracking-widest uppercase font-semibold">Authorized Access Only</p>
                </div>
              </div>
              <Link
                href="/"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500/15 to-yellow-600/15 border-2 border-amber-500/40 hover:border-amber-400/60 transition-all hover:shadow-xl hover:shadow-amber-500/30 hover:from-amber-500/25 hover:to-yellow-600/25"
              >
                <span className="text-sm font-semibold text-amber-400 group-hover:text-amber-300">Exit Vault</span>
                <Lock className="h-4 w-4 text-amber-400 group-hover:text-amber-300" />
              </Link>
            </div>
          </div>
        </header>

        <main className="relative max-w-7xl mx-auto px-6 py-20">
          {/* Enhanced Welcome Section */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/25 via-yellow-600/25 to-amber-500/25 border-2 border-amber-500/40 text-amber-400 text-sm mb-10 shadow-2xl shadow-amber-500/20 backdrop-blur-sm">
              <Sparkles className="h-5 w-5 animate-pulse" />
              <span className="font-bold tracking-wide">ACCESS GRANTED</span>
              <Key className="h-5 w-5" />
            </div>
            <h2 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent leading-tight drop-shadow-2xl">
              The Sanctum
            </h2>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-4xl mx-auto leading-relaxed font-light">
              Exclusive repository of premium intelligence, confidential blueprints, and proprietary documentation reserved for authorized eyes only.
            </p>
          </div>

          {/* Enhanced Feature Grid with Egyptian Theme */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="group relative rounded-3xl border-2 border-amber-500/40 bg-gradient-to-br from-amber-500/10 via-yellow-600/5 to-amber-500/10 p-10 hover:border-amber-400/60 transition-all hover:shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-2 duration-300 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-transparent to-yellow-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Star className="relative h-16 w-16 text-amber-500 mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform drop-shadow-lg" />
              <h3 className="relative text-2xl font-bold mb-4 text-amber-100">Premium Intel</h3>
              <p className="relative text-zinc-300 leading-relaxed">
                Exclusive access to classified whitepapers, case studies, and advanced technical documentation unavailable to the public.
              </p>
            </div>

            <div className="group relative rounded-3xl border-2 border-zinc-700/60 bg-gradient-to-br from-zinc-800/40 via-zinc-900/40 to-zinc-800/40 p-10 hover:border-zinc-600/80 transition-all hover:shadow-2xl hover:shadow-zinc-500/20 hover:-translate-y-2 duration-300 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/0 via-transparent to-zinc-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Shield className="relative h-16 w-16 text-zinc-300 mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform drop-shadow-lg" />
              <h3 className="relative text-2xl font-bold mb-4 text-zinc-100">Elite Support</h3>
              <p className="relative text-zinc-300 leading-relaxed">
                Direct access to advanced troubleshooting protocols, deployment automation, and proprietary infrastructure tools.
              </p>
            </div>

            <div className="group relative rounded-3xl border-2 border-purple-500/40 bg-gradient-to-br from-purple-500/10 via-fuchsia-600/5 to-purple-500/10 p-10 hover:border-purple-400/60 transition-all hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2 duration-300 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-fuchsia-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Lock className="relative h-16 w-16 text-purple-400 mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform drop-shadow-lg" />
              <h3 className="relative text-2xl font-bold mb-4 text-purple-100">Classified Vault</h3>
              <p className="relative text-zinc-300 leading-relaxed">
                Secure repository for highly sensitive project files, legal contracts, and confidential proprietary information.
              </p>
            </div>
          </div>

          {/* Secret Content Area - Enhanced Aesthetics */}
          <div className="relative rounded-3xl border-2 border-amber-500/40 bg-gradient-to-br from-black via-zinc-950 to-black p-12 md:p-16 shadow-2xl shadow-amber-500/20 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/8 via-transparent to-purple-500/8 rounded-3xl" />
            
            <div className="relative flex items-center justify-between mb-12">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent mb-3 drop-shadow-lg">
                  Classified Archives
                </h3>
                <p className="text-zinc-400 text-lg">Confidential documentation repository</p>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-amber-500/15 border-2 border-amber-500/30 shadow-lg shadow-amber-500/10">
                <FileText className="h-5 w-5 text-amber-500" />
                <span className="text-sm font-bold text-amber-400">9 Documents</span>
              </div>
            </div>
            
            <div className="relative space-y-5">
              {/* TOP SECRET - Ehab's Master Plan with Authentication */}
              <MasterPlanGuard 
                onUnlock={() => setIsMasterPlanUnlocked(true)} 
                isUnlocked={isMasterPlanUnlocked}
              />

              {/* Regular Documents - Enhanced Grid Layout */}
              <div className="grid md:grid-cols-2 gap-5">
                <a 
                  href="/vault/Enterprise Infrastructure Blueprint.pdf" 
                  download 
                  className="group relative flex flex-col p-6 rounded-2xl bg-gradient-to-br from-zinc-900/90 via-zinc-950/90 to-zinc-900/90 border-2 border-amber-500/30 hover:border-amber-500/60 transition-all hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1 cursor-pointer backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/8 to-amber-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start justify-between mb-4">
                    <h4 className="font-bold text-lg text-amber-100 group-hover:text-amber-50 transition flex-1 leading-tight">
                      Enterprise Infrastructure Blueprint
                    </h4>
                    <Download className="h-6 w-6 text-amber-500/70 group-hover:text-amber-400 group-hover:scale-110 transition-all flex-shrink-0 ml-2" />
                  </div>
                  <p className="relative text-sm text-zinc-300 leading-relaxed mb-4">
                    Complete deployment guide with network diagrams
                  </p>
                  <div className="relative text-xs font-semibold text-amber-500/90">PDF • 47 KB</div>
                </a>

                <a 
                  href="/vault/Advanced Security Protocols.pdf" 
                  download 
                  className="group relative flex flex-col p-6 rounded-2xl bg-gradient-to-br from-zinc-900/90 via-zinc-950/90 to-zinc-900/90 border-2 border-amber-500/30 hover:border-amber-500/60 transition-all hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1 cursor-pointer backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/8 to-amber-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start justify-between mb-4">
                    <h4 className="font-bold text-lg text-amber-100 group-hover:text-amber-50 transition flex-1 leading-tight">
                      Advanced Security Protocols
                    </h4>
                    <Download className="h-6 w-6 text-amber-500/70 group-hover:text-amber-400 group-hover:scale-110 transition-all flex-shrink-0 ml-2" />
                  </div>
                  <p className="relative text-sm text-zinc-300 leading-relaxed mb-4">
                    Zero-trust architecture with firewall rules
                  </p>
                  <div className="relative text-xs font-semibold text-amber-500/90">PDF • 34 KB</div>
                </a>

                <a 
                  href="/vault/Client Contract Templates.pdf" 
                  download 
                  className="group relative flex flex-col p-6 rounded-2xl bg-gradient-to-br from-zinc-900/90 via-zinc-950/90 to-zinc-900/90 border-2 border-amber-500/30 hover:border-amber-500/60 transition-all hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1 cursor-pointer backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/8 to-amber-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start justify-between mb-4">
                    <h4 className="font-bold text-lg text-amber-100 group-hover:text-amber-50 transition flex-1 leading-tight">
                      Client Contract Templates
                    </h4>
                    <Download className="h-6 w-6 text-amber-500/70 group-hover:text-amber-400 group-hover:scale-110 transition-all flex-shrink-0 ml-2" />
                  </div>
                  <p className="relative text-sm text-zinc-300 leading-relaxed mb-4">
                    Legal agreements and service level docs
                  </p>
                  <div className="relative text-xs font-semibold text-amber-500/90">PDF • 39 KB</div>
                </a>

                <a 
                  href="/vault/On-Prem AI Deployment Scripts.pdf" 
                  download 
                  className="group relative flex flex-col p-6 rounded-2xl bg-gradient-to-br from-zinc-900/90 via-zinc-950/90 to-zinc-900/90 border-2 border-amber-500/30 hover:border-amber-500/60 transition-all hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1 cursor-pointer backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/8 to-amber-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start justify-between mb-4">
                    <h4 className="font-bold text-lg text-amber-100 group-hover:text-amber-50 transition flex-1 leading-tight">
                      On-Prem AI Deployment Scripts
                    </h4>
                    <Download className="h-6 w-6 text-amber-500/70 group-hover:text-amber-400 group-hover:scale-110 transition-all flex-shrink-0 ml-2" />
                  </div>
                  <p className="relative text-sm text-zinc-300 leading-relaxed mb-4">
                    Ollama, llama.cpp, Open WebUI automation
                  </p>
                  <div className="relative text-xs font-semibold text-amber-500/90">PDF • 42 KB</div>
                </a>

                <a 
                  href="/vault/GPU Passthrough Guide.pdf" 
                  download 
                  className="group relative flex flex-col p-6 rounded-2xl bg-gradient-to-br from-zinc-900/90 via-zinc-950/90 to-zinc-900/90 border-2 border-amber-500/30 hover:border-amber-500/60 transition-all hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1 cursor-pointer backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/8 to-amber-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start justify-between mb-4">
                    <h4 className="font-bold text-lg text-amber-100 group-hover:text-amber-50 transition flex-1 leading-tight">
                      Proxmox GPU Passthrough
                    </h4>
                    <Download className="h-6 w-6 text-amber-500/70 group-hover:text-amber-400 group-hover:scale-110 transition-all flex-shrink-0 ml-2" />
                  </div>
                  <p className="relative text-sm text-zinc-300 leading-relaxed mb-4">
                    NVIDIA GPU configuration for VMs
                  </p>
                  <div className="relative text-xs font-semibold text-amber-500/90">PDF • 47 KB</div>
                </a>

                <a 
                  href="/vault/TrueNAS Setup Guide.pdf" 
                  download 
                  className="group relative flex flex-col p-6 rounded-2xl bg-gradient-to-br from-zinc-900/90 via-zinc-950/90 to-zinc-900/90 border-2 border-amber-500/30 hover:border-amber-500/60 transition-all hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1 cursor-pointer backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/8 to-amber-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start justify-between mb-4">
                    <h4 className="font-bold text-lg text-amber-100 group-hover:text-amber-50 transition flex-1 leading-tight">
                      TrueNAS Scale Configuration
                    </h4>
                    <Download className="h-6 w-6 text-amber-500/70 group-hover:text-amber-400 group-hover:scale-110 transition-all flex-shrink-0 ml-2" />
                  </div>
                  <p className="relative text-sm text-zinc-300 leading-relaxed mb-4">
                    ZFS pool optimization and app deployment
                  </p>
                  <div className="relative text-xs font-semibold text-amber-500/90">PDF • 47 KB</div>
                </a>

                <a 
                  href="/vault/WireGuard VPN Configuration.pdf" 
                  download 
                  className="group relative flex flex-col p-6 rounded-2xl bg-gradient-to-br from-zinc-900/90 via-zinc-950/90 to-zinc-900/90 border-2 border-amber-500/30 hover:border-amber-500/60 transition-all hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1 cursor-pointer backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/8 to-amber-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start justify-between mb-4">
                    <h4 className="font-bold text-lg text-amber-100 group-hover:text-amber-50 transition flex-1 leading-tight">
                      WireGuard VPN Automation
                    </h4>
                    <Download className="h-6 w-6 text-amber-500/70 group-hover:text-amber-400 group-hover:scale-110 transition-all flex-shrink-0 ml-2" />
                  </div>
                  <p className="relative text-sm text-zinc-300 leading-relaxed mb-4">
                    Client provisioning and QR code generation
                  </p>
                  <div className="relative text-xs font-semibold text-amber-500/90">PDF • 45 KB</div>
                </a>

                <a 
                  href="/vault/Confidential Documentation Vault.pdf" 
                  download 
                  className="group relative flex flex-col p-6 rounded-2xl bg-gradient-to-br from-zinc-900/90 via-zinc-950/90 to-zinc-900/90 border-2 border-amber-500/30 hover:border-amber-500/60 transition-all hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1 cursor-pointer backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/8 to-amber-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start justify-between mb-4">
                    <h4 className="font-bold text-lg text-amber-100 group-hover:text-amber-50 transition flex-1 leading-tight">
                      Documentation Vault Index
                    </h4>
                    <Download className="h-6 w-6 text-amber-500/70 group-hover:text-amber-400 group-hover:scale-110 transition-all flex-shrink-0 ml-2" />
                  </div>
                  <p className="relative text-sm text-zinc-300 leading-relaxed mb-4">
                    Master repository overview and catalog
                  </p>
                  <div className="relative text-xs font-semibold text-amber-500/90">PDF • 112 KB</div>
                </a>
              </div>
            </div>

            <div className="relative mt-12 p-8 rounded-2xl bg-gradient-to-r from-amber-500/15 via-yellow-600/15 to-amber-500/15 border-2 border-amber-500/40 shadow-2xl shadow-amber-500/10 backdrop-blur-sm">
              <div className="flex items-start gap-5">
                <Shield className="h-7 w-7 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-base font-bold text-amber-300 mb-2">
                    ⚠️ Confidentiality Notice
                  </p>
                  <p className="text-sm text-amber-100/90 leading-relaxed">
                    All materials contained within this vault are confidential and proprietary. Unauthorized distribution, reproduction, or disclosure is strictly prohibited and may result in legal action under applicable law.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative group rounded-2xl border-2 border-amber-500/40 bg-gradient-to-br from-amber-500/10 via-black to-amber-500/10 p-10 text-center hover:border-amber-400/60 transition-all hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2 duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/15 to-amber-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <FileText className="relative h-10 w-10 text-amber-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="relative text-5xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-3">9</div>
              <div className="relative text-sm text-zinc-300 tracking-wider font-medium">Documents</div>
            </div>

            <div className="relative group rounded-2xl border-2 border-zinc-700/60 bg-gradient-to-br from-zinc-800/30 via-black to-zinc-800/30 p-10 text-center hover:border-zinc-600/80 transition-all hover:shadow-2xl hover:shadow-zinc-500/10 hover:-translate-y-2 duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/0 via-zinc-700/15 to-zinc-700/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Download className="relative h-10 w-10 text-zinc-300 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="relative text-5xl font-bold text-zinc-200 mb-3">6.1 MB</div>
              <div className="relative text-sm text-zinc-300 tracking-wider font-medium">Total Size</div>
            </div>

            <div className="relative group rounded-2xl border-2 border-purple-500/40 bg-gradient-to-br from-purple-500/10 via-black to-purple-500/10 p-10 text-center hover:border-purple-400/60 transition-all hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/15 to-purple-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Lock className="relative h-10 w-10 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="relative text-5xl font-bold text-purple-300 mb-3">AES-256</div>
              <div className="relative text-sm text-zinc-300 tracking-wider font-medium">Encrypted</div>
            </div>

            <div className="relative group rounded-2xl border-2 border-amber-500/40 bg-gradient-to-br from-amber-500/10 via-black to-yellow-600/10 p-10 text-center hover:border-amber-400/60 transition-all hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2 duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-yellow-500/15 to-amber-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Crown className="relative h-10 w-10 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="relative text-5xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-3">Elite</div>
              <div className="relative text-sm text-zinc-300 tracking-wider font-medium">Access Level</div>
            </div>
          </div>

          {/* Enhanced Footer */}
          <div className="mt-24 text-center space-y-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900/60 border-2 border-zinc-800/80 backdrop-blur-sm shadow-lg">
              <Shield className="h-5 w-5 text-zinc-400" />
              <span className="text-sm font-medium text-zinc-300">Enterprise-Grade Security</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-2xl mx-auto leading-relaxed">
              This vault is secured with military-grade encryption and multi-factor authentication.
            </p>
            <p className="text-zinc-500 text-sm">
              For support or access issues, contact:{' '}
              <a href="mailto:defcon5ready@gmail.com" className="text-amber-500 hover:text-amber-400 transition underline decoration-amber-500/40 font-medium">
                defcon5ready@gmail.com
              </a>
            </p>
          </div>
        </main>
      </div>
    </SecretGate>
  );
}

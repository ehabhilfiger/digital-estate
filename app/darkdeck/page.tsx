"use client";

import Link from 'next/link';
import { Shield, Cpu, Brain } from 'lucide-react';

export default function DarkDeckPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white egyptian-texture">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <Link href="/" className="text-xl font-semibold hover:text-blue-500 transition">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Professional Profile */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ehab Allababidi — <span className="text-blue-500">Private AI Systems Architect</span>
          </h1>
          <p className="text-xl text-white/70 mb-6">
            Building confidential, on-premise AI infrastructures for founders and labs
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/60">
            <a href="mailto:defcon5ready@gmail.com" className="hover:text-blue-500 transition">
              defcon5ready@gmail.com
            </a>
            <span>•</span>
            <a href="tel:+17739200030" className="hover:text-blue-500 transition">
              +1-773-920-0030
            </a>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Services Offered</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-blue-500/50 transition">
              <Brain className="h-8 w-8 text-blue-500 mb-3" />
              <h3 className="font-semibold mb-2">Dark Deck Deployments</h3>
              <p className="text-white/70 text-sm">On-prem or hybrid conversational AI tuned to your policy doctrine.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-blue-500/50 transition">
              <Shield className="h-8 w-8 text-blue-500 mb-3" />
              <h3 className="font-semibold mb-2">AI Infrastructure Audits</h3>
              <p className="text-white/70 text-sm">Comprehensive security and performance assessment.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-blue-500/50 transition">
              <Cpu className="h-8 w-8 text-blue-500 mb-3" />
              <h3 className="font-semibold mb-2">On-Call Architect Support</h3>
              <p className="text-white/70 text-sm">Direct access to expert-level architecture decisions.</p>
            </div>
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Technical Expertise Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['AI Infrastructure', 'GPU Clusters', 'Private LLM Deployment', 'On-Premise Systems', 'Agent Orchestration', 'Confidential Computing'].map((skill) => (
              <div key={skill} className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Counsel Advisory Console */}
        <div className="rounded-2xl border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-slate-900 p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-500">Strategic Counsel Advisory Console</h2>
          <p className="text-white/70 mb-6">
            Submit strategic inquiries for architecture consultation. Responses are generated through government-standard protocols.
          </p>
          <Link href="/darkdeck/request">
            <button className="w-full px-6 py-3 bg-blue-500 text-black font-semibold rounded-xl hover:bg-blue-500 transition">
              Request Consultation
            </button>
          </Link>
        </div>

        {/* Contact Information */}
        <div className="text-center text-white/60">
          <div className="flex items-center justify-center gap-6 mb-4">
            <a href="https://github.com/ehaballa" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
              GitHub
            </a>
            <span>|</span>
            <a href="https://www.linkedin.com/in/ehab-allababidi" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
              LinkedIn
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

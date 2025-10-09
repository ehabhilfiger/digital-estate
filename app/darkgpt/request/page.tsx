"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Brain, Shield, Cpu, Check } from 'lucide-react';

export default function DarkGPTRequestPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    useCase: '',
    betaAccess: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

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
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src="/images/darkgpt.png" alt="DarkGPT Logo" className="h-16 w-auto" />
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-amber-600">DarkGPT</span>
            </h1>
          </div>
          <p className="text-2xl font-semibold text-blue-500 mb-4">
            Your AI. Your rules. Zero compromises.
          </p>
          <p className="text-lg text-white/70">
            No judgment. No restrictions. No surveillance.
          </p>
        </div>

        {/* Value Proposition */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-4 text-center">
            <Check className="h-6 w-6 text-blue-500 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">100% Private Conversations</h3>
            <p className="text-sm text-white/70">Runs locally on your infrastructure</p>
          </div>
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-4 text-center">
            <Check className="h-6 w-6 text-blue-500 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Zero Content Restrictions</h3>
            <p className="text-sm text-white/70">No guardrails or censorship</p>
          </div>
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-4 text-center">
            <Check className="h-6 w-6 text-blue-500 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Custom AI Architecture</h3>
            <p className="text-sm text-white/70">Tailored to your specific needs</p>
          </div>
        </div>

        {/* Consultation Request Form */}
        <div className="rounded-2xl border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-slate-900 p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Request DarkGPT Consultation</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-white/10 focus:border-blue-500 focus:outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-white/10 focus:border-blue-500 focus:outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Company/Organization (Optional)</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-white/10 focus:border-blue-500 focus:outline-none transition"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-white/10 focus:border-blue-500 focus:outline-none transition"
                >
                  <option value="">Select budget range</option>
                  <option value="$50k - $100k">$50k - $100k</option>
                  <option value="$100k - $250k">$100k - $250k</option>
                  <option value="$250k - $500k">$250k - $500k</option>
                  <option value="$500k+">$500k+</option>
                  <option value="Custom / Let's discuss">Custom / Let's discuss</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Desired Timeline</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-white/10 focus:border-blue-500 focus:outline-none transition"
                >
                  <option value="">Select timeline</option>
                  <option value="ASAP (Priority)">ASAP (Priority)</option>
                  <option value="1-2 weeks">1-2 weeks</option>
                  <option value="2-4 weeks">2-4 weeks</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Use Case / Requirements</label>
              <textarea
                rows={4}
                value={formData.useCase}
                onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-white/10 focus:border-blue-500 focus:outline-none transition"
                placeholder="Describe your use case and requirements..."
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="betaAccess"
                checked={formData.betaAccess}
                onChange={(e) => setFormData({ ...formData, betaAccess: e.target.checked })}
                className="w-4 h-4 rounded border-white/10 text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor="betaAccess" className="text-sm">Request Beta Access Passcode</label>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-500 text-white rounded-xl hover:from-blue-500 hover:to-blue-500 transition font-semibold text-lg shadow-lg"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* Services Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <Brain className="h-8 w-8 text-blue-500 mb-3" />
            <h3 className="font-semibold mb-2">Private LLM Deployments</h3>
            <p className="text-white/70 text-sm">Complete on-premise LLM infrastructure</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <Shield className="h-8 w-8 text-blue-500 mb-3" />
            <h3 className="font-semibold mb-2">AI Infrastructure Audits</h3>
            <p className="text-white/70 text-sm">Comprehensive security assessment</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <Cpu className="h-8 w-8 text-blue-500 mb-3" />
            <h3 className="font-semibold mb-2">On-Call Architect Support</h3>
            <p className="text-white/70 text-sm">Expert-level architecture decisions</p>
          </div>
        </div>

        {/* Pricing */}
        <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-6 mb-8 text-center">
          <h3 className="text-xl font-bold text-blue-500 mb-2">Premium Service</h3>
          <p className="text-white/70">Starting at $50k+ with custom pricing based on your requirements</p>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <h3 className="font-semibold mb-4">Ehab Allababidi — Private AI Systems Architect</h3>
          <div className="flex items-center justify-center gap-4 text-white/60 mb-4">
            <a href="tel:+17739200030" className="hover:text-blue-500 transition">(773) 920-0030</a>
            <span>•</span>
            <a href="mailto:defcon5ready@gmail.com" className="hover:text-blue-500 transition">defcon5ready@gmail.com</a>
          </div>
          <div className="flex items-center justify-center gap-6">
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

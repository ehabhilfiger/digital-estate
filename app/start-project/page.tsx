'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function StartProject() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    tier: '',
    budget: '',
    timeline: '',
    description: '',
    currentInfrastructure: '',
    primaryGoals: [] as string[],
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const budgetRanges = [
    { value: '25k', label: '$25,000 - Foundation Tier', tier: 'foundation' },
    { value: '50k', label: '$50,000 - Estate Tier', tier: 'estate' },
    { value: '100k', label: '$100,000+ - Architect Tier', tier: 'architect' },
    { value: 'custom', label: 'Custom/Enterprise (Contact for Quote)', tier: 'custom' },
  ];

  const goals = [
    'Data Sovereignty & Privacy',
    'Cloud Cost Reduction',
    'Zero-Trust Network Security',
    'Smart Home Integration',
    'On-Premises AI Deployment',
    'HIPAA/Legal Compliance',
    'Multi-Site Replication',
    'High-Availability Infrastructure',
  ];

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      primaryGoals: prev.primaryGoals.includes(goal)
        ? prev.primaryGoals.filter((g) => g !== goal)
        : [...prev.primaryGoals, goal],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `
PROJECT INTAKE FORM SUBMISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Phone: ${formData.phone}
Company: ${formData.company}
Selected Tier: ${formData.tier}
Budget Range: ${formData.budget}
Timeline: ${formData.timeline}
Primary Goals: ${formData.primaryGoals.join(', ')}

Current Infrastructure:
${formData.currentInfrastructure}

Project Description:
${formData.description}
          `,
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        const data = await response.json();
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit. Please try emailing directly.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please email defcon5ready@gmail.com directly.');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center">
          <div className="rounded-2xl border-2 border-amber-500 bg-amber-500/10 p-12">
            <CheckCircle2 className="h-20 w-20 text-amber-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Project Request Received!</h1>
            <p className="text-xl text-white/80 mb-6">
              Thank you for your interest in working with us, {formData.name}.
            </p>
            <div className="text-left bg-slate-950/50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold mb-3">What Happens Next:</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>We'll review your requirements within 24-48 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Schedule a discovery call to discuss your infrastructure goals</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Provide a detailed proposal tailored to your needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Begin your journey to complete data sovereignty</span>
                </li>
              </ul>
            </div>
            <Link href="/">
              <button className="px-6 py-3 bg-amber-500 text-black rounded-xl hover:bg-amber-400 transition font-medium">
                Return to Homepage
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm mb-6">
            PROJECT INTAKE
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Start Your <span className="text-amber-500">Digital Estate</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Tell us about your project. We'll review your requirements and schedule a discovery call to discuss your infrastructure goals.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/20 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/20 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition text-white"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number *</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/20 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition text-white"
                  placeholder="(773) 920-0030"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">Company/Organization</label>
                <input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/20 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition text-white"
                  placeholder="Optional"
                />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-6">Project Scope</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">Budget Range *</label>
              <div className="grid md:grid-cols-2 gap-4">
                {budgetRanges.map((range) => (
                  <button
                    key={range.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, budget: range.value, tier: range.tier })}
                    className={`p-4 rounded-xl border-2 transition text-left ${
                      formData.budget === range.value
                        ? 'border-amber-500 bg-amber-500/10'
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="font-medium">{range.label}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="timeline" className="block text-sm font-medium mb-2">Preferred Timeline *</label>
              <select
                id="timeline"
                required
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/20 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition text-white"
              >
                <option value="">Select timeline...</option>
                <option value="asap">ASAP (Within 2-4 weeks)</option>
                <option value="1-2months">1-2 Months</option>
                <option value="3-6months">3-6 Months</option>
                <option value="flexible">Flexible / Planning Phase</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">Primary Goals (Select all that apply)</label>
              <div className="grid md:grid-cols-2 gap-3">
                {goals.map((goal) => (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => handleGoalToggle(goal)}
                    className={`p-3 rounded-lg border transition text-left text-sm ${
                      formData.primaryGoals.includes(goal)
                        ? 'border-amber-500 bg-amber-500/10 text-white'
                        : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {formData.primaryGoals.includes(goal) && (
                        <Check className="h-4 w-4 text-amber-500" />
                      )}
                      {goal}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-6">Project Details</h2>
            
            <div className="mb-6">
              <label htmlFor="currentInfrastructure" className="block text-sm font-medium mb-2">
                Current Infrastructure (Optional)
              </label>
              <textarea
                id="currentInfrastructure"
                rows={3}
                value={formData.currentInfrastructure}
                onChange={(e) => setFormData({ ...formData, currentInfrastructure: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/20 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition text-white resize-none"
                placeholder="Describe your current setup (cloud providers, existing hardware, services used, etc.)"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2">
                Project Description *
              </label>
              <textarea
                id="description"
                required
                rows={5}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/20 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition text-white resize-none"
                placeholder="Tell us about your project goals, specific requirements, pain points, and what success looks like for you..."
              />
            </div>
          </div>

          {/* Error Display */}
          {status === 'error' && (
            <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4 flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
              <p className="text-red-400 text-sm">{errorMessage}</p>
            </div>
          )}

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-black rounded-2xl hover:bg-amber-400 transition font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-amber-500/20"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Project Request
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
            <p className="mt-4 text-sm text-white/60">
              By submitting, you agree to be contacted regarding your project. We respect your privacy and never share your information.
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}

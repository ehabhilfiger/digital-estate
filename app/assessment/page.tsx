"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Shield, AlertTriangle, CheckCircle, Download, Calendar } from 'lucide-react';
import Link from 'next/link';

type Answer = {
  questionId: string;
  value: string | string[];
  score: number;
  metadata?: Record<string, any>;
};

const assessmentQuestions = [
  {
    id: 'budget',
    title: "What's your annual infrastructure investment threshold?",
    subtitle: "This helps us recommend the right engagement tier",
    type: 'single' as const,
    options: [
      { value: 'under50k', label: 'Under $50k', score: 0, tier: 'not-qualified' },
      { value: '50k-250k', label: '$50k–$250k', score: 10, tier: 'foundation' },
      { value: '250k-1m', label: '$250k–$1M', score: 20, tier: 'estate' },
      { value: '1m-plus', label: '$1M+', score: 30, tier: 'architect' },
      { value: 'flexible', label: 'Budget flexible for the right solution', score: 35, tier: 'architect' }
    ]
  },
  {
    id: 'pain',
    title: "What keeps you awake at night?",
    subtitle: "Select your primary concern",
    type: 'single' as const,
    options: [
      { value: 'sovereignty', label: "We're at the mercy of AWS/Azure. One wrong click and we're locked out.", score: 15, painLevel: 'high' },
      { value: 'compliance', label: "Regulators are circling. Our HIPAA/ABA posture is Swiss cheese.", score: 20, painLevel: 'urgent' },
      { value: 'breach', label: "We've had close calls. Next breach could end the business.", score: 25, painLevel: 'critical' },
      { value: 'performance', label: "Cloud latency is killing our AI workloads. We need GPUs on-prem.", score: 18, painLevel: 'high' },
      { value: 'legacy', label: "Building a legacy estate. Want it done right from day one.", score: 12, painLevel: 'strategic' }
    ]
  },
  {
    id: 'infrastructure',
    title: "How would you describe your current infrastructure?",
    subtitle: "Be honest — we've seen it all",
    type: 'single' as const,
    options: [
      { value: 'cloud-only', label: '100% cloud (AWS, Azure, Google)', score: 8, sophistication: 'low' },
      { value: 'hybrid-mess', label: "Hybrid, but it's held together with duct tape and prayers", score: 15, sophistication: 'medium' },
      { value: 'onprem-old', label: "On-prem servers from 2015 that our 'IT guy' keeps alive", score: 18, sophistication: 'medium' },
      { value: 'partial-sovereign', label: 'Some on-prem (NAS, VMs) but no zero-trust architecture', score: 22, sophistication: 'high' },
      { value: 'greenfield', label: 'Starting from scratch. Clean slate.', score: 10, sophistication: 'low' }
    ]
  },
  {
    id: 'authority',
    title: "Who needs to sign off on this investment?",
    subtitle: "Understanding your decision process helps us support you better",
    type: 'single' as const,
    options: [
      { value: 'im-ceo', label: 'I write the checks', score: 20, authority: 'decision-maker' },
      { value: 'need-cfo', label: "Need CFO approval (I'll build the case)", score: 12, authority: 'influencer' },
      { value: 'committee', label: 'Board or committee decision', score: 8, authority: 'navigator' },
      { value: 'technical-lead', label: "I'm technical lead, business side handles budget", score: 15, authority: 'champion' }
    ]
  },
  {
    id: 'timeline',
    title: "When do you need this operational?",
    subtitle: "Urgency helps us prioritize your engagement",
    type: 'single' as const,
    options: [
      { value: 'emergency', label: 'Yesterday. We have an incident/audit coming.', score: 25, urgency: 'critical' },
      { value: 'q4-2025', label: 'This quarter (before year-end)', score: 20, urgency: 'high' },
      { value: 'q1-2026', label: 'Next 6 months', score: 12, urgency: 'medium' },
      { value: '2026', label: 'Sometime in 2026', score: 5, urgency: 'low' },
      { value: 'exploring', label: 'Just researching for now', score: 2, urgency: 'cold' }
    ]
  },
  {
    id: 'vertical',
    title: "Which best describes your operation?",
    subtitle: "Helps us tailor compliance and security recommendations",
    type: 'single' as const,
    options: [
      { value: 'law-firm', label: 'Law firm (client data is sacred)', score: 10, vertical: 'legal', compliance: ['ABA', 'client privilege'] },
      { value: 'healthcare', label: 'Healthcare/clinic (HIPAA critical)', score: 10, vertical: 'medical', compliance: ['HIPAA', 'PHI'] },
      { value: 'executive-estate', label: 'Private estate (family office, executive)', score: 10, vertical: 'luxury', compliance: ['Privacy', 'physical security'] },
      { value: 'research', label: 'Research/AI lab (IP protection)', score: 10, vertical: 'tech', compliance: ['IP sovereignty', 'air-gap'] },
      { value: 'finance', label: 'Financial services/wealth management', score: 10, vertical: 'finance', compliance: ['SEC', 'SOC 2'] },
      { value: 'other', label: 'Other high-stakes operation', score: 10, vertical: 'general', compliance: [] }
    ]
  },
  {
    id: 'spend',
    title: "What's your current monthly infrastructure spend?",
    subtitle: "Include cloud bills, IT staff, software licenses",
    type: 'single' as const,
    options: [
      { value: 'under5k', label: 'Under $5k/month', score: 8, annualized: 60000 },
      { value: '5k-15k', label: '$5k–$15k/month', score: 12, annualized: 120000 },
      { value: '15k-40k', label: '$15k–$40k/month', score: 18, annualized: 300000 },
      { value: '40k-plus', label: '$40k+/month', score: 25, annualized: 500000 },
      { value: 'not-sure', label: "Not sure (it's complicated)", score: 10, annualized: null }
    ]
  },
  {
    id: 'threats',
    title: "Have you experienced any of these in the past 12 months?",
    subtitle: "Select all that apply — complete honesty helps us help you",
    type: 'multiple' as const,
    options: [
      { value: 'breach-attempt', label: 'Security breach or attempt', score: 15, severity: 'critical' },
      { value: 'downtime', label: 'Significant downtime (>4 hours)', score: 10, severity: 'high' },
      { value: 'compliance-warning', label: 'Audit finding or compliance warning', score: 12, severity: 'high' },
      { value: 'vendor-hostage', label: 'Held hostage by vendor pricing/terms', score: 8, severity: 'medium' },
      { value: 'data-loss', label: 'Data loss or corruption incident', score: 15, severity: 'critical' },
      { value: 'none', label: 'None (knock on wood)', score: 0, severity: 'low' }
    ]
  }
];

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const question = assessmentQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;

  const handleSelect = (value: string, score: number, metadata?: any) => {
    if (question.type === 'multiple') {
      if (value === 'none') {
        setSelectedValues(['none']);
      } else {
        const filtered = selectedValues.filter(v => v !== 'none');
        if (selectedValues.includes(value)) {
          setSelectedValues(filtered.filter(v => v !== value));
        } else {
          setSelectedValues([...filtered, value]);
        }
      }
    } else {
      setSelectedValues([value]);
    }
  };

  const handleNext = () => {
    if (selectedValues.length === 0) return;

    const totalScore = question.type === 'multiple' 
      ? selectedValues.reduce((sum, val) => {
          const opt = question.options.find(o => o.value === val);
          return sum + (opt?.score || 0);
        }, 0)
      : question.options.find(o => o.value === selectedValues[0])?.score || 0;

    const metadata = question.type === 'multiple'
      ? selectedValues.map(val => question.options.find(o => o.value === val)).filter(Boolean)
      : question.options.find(o => o.value === selectedValues[0]);

    const answer: Answer = {
      questionId: question.id,
      value: question.type === 'multiple' ? selectedValues : selectedValues[0],
      score: totalScore,
      metadata
    };

    setAnswers([...answers, answer]);
    setSelectedValues([]);

    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const lastAnswer = answers[answers.length - 1];
      setSelectedValues(Array.isArray(lastAnswer.value) ? lastAnswer.value : [lastAnswer.value]);
      setAnswers(answers.slice(0, -1));
    }
  };

  const calculateResults = () => {
    const totalScore = answers.reduce((sum, a) => sum + a.score, 0);
    
    // Determine tier
    let tier: 'foundation' | 'estate' | 'architect' = 'foundation';
    let tierLabel = 'Foundation Build';
    let investmentRange = '$50k–$250k';
    
    if (totalScore >= 150) {
      tier = 'architect';
      tierLabel = 'Architect Estate';
      investmentRange = '$1M+';
    } else if (totalScore >= 100) {
      tier = 'estate';
      tierLabel = 'Estate Command Center';
      investmentRange = '$250k–$1M';
    }

    // Calculate risk level
    const threatAnswer = answers.find(a => a.questionId === 'threats');
    const threatScore = threatAnswer?.score || 0;
    const riskLevel = threatScore > 30 ? 'CRITICAL' : threatScore > 15 ? 'HIGH' : 'MODERATE';

    // Get urgency
    const timelineAnswer = answers.find(a => a.questionId === 'timeline');
    const urgency = (timelineAnswer?.metadata as any)?.urgency || 'medium';

    // Get current spend
    const spendAnswer = answers.find(a => a.questionId === 'spend');
    const currentSpend = (spendAnswer?.metadata as any)?.annualized || 120000;

    // Calculate ROI
    const projectedSavings = currentSpend ? Math.floor(currentSpend * 0.35 * 5) : 0;
    const paybackPeriod = tier === 'foundation' ? '18-24 months' : tier === 'estate' ? '24-36 months' : '36-48 months';

    // Get pain points
    const painAnswer = answers.find(a => a.questionId === 'pain');
    const painPoints = [
      (painAnswer?.metadata as any)?.label || 'Infrastructure concerns',
      'Security posture requires hardening',
      'Compliance gaps present risk exposure',
      'Vendor dependencies limit operational sovereignty'
    ];

    // Get vertical
    const verticalAnswer = answers.find(a => a.questionId === 'vertical');
    const vertical = (verticalAnswer?.metadata as any)?.vertical || 'general';

    return {
      totalScore,
      tier,
      tierLabel,
      investmentRange,
      riskLevel,
      urgency,
      currentSpend,
      projectedSavings,
      paybackPeriod,
      painPoints,
      vertical,
      threatScore
    };
  };

  if (showResults) {
    const results = calculateResults();
    const riskColor = results.riskLevel === 'CRITICAL' ? 'red' : results.riskLevel === 'HIGH' ? 'amber' : 'blue';

    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border font-bold
              ${riskColor === 'red' ? 'bg-red-500/20 border-red-500/50 text-red-300' : 
                riskColor === 'amber' ? 'bg-amber-500/20 border-amber-500/50 text-amber-300' : 
                'bg-blue-500/20 border-blue-500/50 text-blue-300'}`}>
              {results.riskLevel === 'CRITICAL' && <AlertTriangle className="h-5 w-5" />}
              {results.riskLevel === 'HIGH' && <AlertTriangle className="h-5 w-5" />}
              {results.riskLevel === 'MODERATE' && <Shield className="h-5 w-5" />}
              <span>THREAT LEVEL: {results.riskLevel}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Sovereign Estate Profile
            </h1>

            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Based on your responses, you're a strong fit for our{' '}
              <span className="text-emerald-400 font-semibold">{results.tierLabel}</span> engagement
            </p>
          </motion.div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="text-3xl font-bold text-emerald-400">{results.investmentRange}</div>
              <div className="text-sm text-white/60 mt-2">Recommended Investment</div>
            </motion.div>

            {results.currentSpend && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="text-3xl font-bold text-blue-400">
                  ${(results.projectedSavings / 1000).toFixed(0)}k
                </div>
                <div className="text-sm text-white/60 mt-2">5-Year Projected Savings</div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="text-3xl font-bold text-amber-400">{results.paybackPeriod}</div>
              <div className="text-sm text-white/60 mt-2">ROI Payback Period</div>
            </motion.div>
          </div>

          {/* Vulnerabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl border border-red-500/30 bg-red-500/10 p-8 mb-12"
          >
            <h3 className="text-2xl font-bold mb-4 text-red-300 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6" />
              Critical Vulnerabilities Detected
            </h3>
            <ul className="space-y-3">
              {results.painPoints.map((pain, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <span className="text-red-400 text-lg">▸</span>
                  <span>{pain}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 mb-12"
          >
            <h3 className="text-2xl font-bold mb-4 text-emerald-300 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              Recommended Architecture
            </h3>
            <div className="space-y-4">
              {results.tier === 'foundation' && (
                <>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-bold">1</div>
                    <div>
                      <div className="font-semibold text-white">Private NAS Estate with RAID 10</div>
                      <div className="text-sm text-white/70">Synology or TrueNAS with immutable snapshots and encrypted backups</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-bold">2</div>
                    <div>
                      <div className="font-semibold text-white">WireGuard VPN for secure remote access</div>
                      <div className="text-sm text-white/70">Zero-trust authentication with hardware key support</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-bold">3</div>
                    <div>
                      <div className="font-semibold text-white">Automated compliance monitoring</div>
                      <div className="text-sm text-white/70">Daily audit logs and quarterly penetration testing</div>
                    </div>
                  </div>
                </>
              )}
              {results.tier === 'estate' && (
                <>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-bold">1</div>
                    <div>
                      <div className="font-semibold text-white">Multi-server estate with pfSense perimeter</div>
                      <div className="text-sm text-white/70">Segmented VLANs, IDS/IPS, and honeypot monitoring</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-bold">2</div>
                    <div>
                      <div className="font-semibold text-white">Proxmox virtualization cluster</div>
                      <div className="text-sm text-white/70">High-availability with automated failover and live migration</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-bold">3</div>
                    <div>
                      <div className="font-semibold text-white">Home Assistant orchestration</div>
                      <div className="text-sm text-white/70">Unified control of security, AV, sensors, and environmental systems</div>
                    </div>
                  </div>
                </>
              )}
              {results.tier === 'architect' && (
                <>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-bold">1</div>
                    <div>
                      <div className="font-semibold text-white">GPU cluster with on-prem AI orchestration</div>
                      <div className="text-sm text-white/70">Private LLM deployment with sovereign data processing</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-bold">2</div>
                    <div>
                      <div className="font-semibold text-white">Multi-site replication with air-gapped backup</div>
                      <div className="text-sm text-white/70">Disaster recovery across geographic locations with offline cold storage</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-bold">3</div>
                    <div>
                      <div className="font-semibold text-white">Dark Deck intelligence layer</div>
                      <div className="text-sm text-white/70">Sovereign AI assistant with zero telemetry leakage</div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Email Capture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-black p-8 text-center mb-12"
          >
            <Download className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Get Your Custom Roadmap</h3>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Enter your email to receive a detailed PDF with your personalized architecture plan, 
              compliance checklist, and ROI breakdown.
            </p>

            <form 
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  const response = await fetch('/api/assessment/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      email,
                      answers,
                      results
                    })
                  });
                  
                  if (response.ok) {
                    alert('✅ Success! Check your email for your custom roadmap PDF.');
                  } else {
                    alert('⚠️ Something went wrong. Please try again or email defcon5ready@gmail.com');
                  }
                } catch (error) {
                  console.error('Submission error:', error);
                  alert('⚠️ Connection error. Please email defcon5ready@gmail.com directly.');
                }
              }}
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-emerald-400 focus:outline-none"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-blue-400 text-black font-semibold hover:scale-105 transition whitespace-nowrap"
              >
                Download PDF
              </button>
            </form>

            <p className="text-xs text-white/50 mt-4">
              No spam. Your roadmap will be emailed within 60 seconds.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <a 
              href="https://calendly.com/defcon5ready/30min" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-300 via-blue-400 to-amber-300 text-slate-900 text-lg font-bold hover:scale-105 transition shadow-xl inline-flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {results.urgency === 'critical' 
                  ? '🚨 Schedule Emergency Consultation' 
                  : 'Book 30-Min Strategy Call'}
                <ArrowRight className="h-5 w-5" />
              </button>
            </a>

            {results.urgency === 'critical' && (
              <p className="mt-4 text-red-300 font-semibold flex items-center justify-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Critical threat level detected. Priority scheduling available.
              </p>
            )}

            <Link href="/" className="block mt-6 text-white/60 hover:text-white transition text-sm">
              ← Back to homepage
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to homepage
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sovereign Infrastructure Audit
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            8 questions to assess your estate readiness and recommend the optimal engagement tier
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-white/60 mb-2">
            <span>Question {currentQuestion + 1} of {assessmentQuestions.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-400 to-blue-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{question.title}</h2>
            {question.subtitle && (
              <p className="text-white/60 mb-6">{question.subtitle}</p>
            )}

            <div className="space-y-3">
              {question.options.map((option) => {
                const isSelected = selectedValues.includes(option.value);
                return (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option.value, option.score, option)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      isSelected
                        ? 'border-emerald-400 bg-emerald-400/20 text-white'
                        : 'border-white/20 bg-white/5 text-white/80 hover:border-white/40 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        isSelected ? 'border-emerald-400 bg-emerald-400' : 'border-white/40'
                      }`}>
                        {isSelected && (
                          <CheckCircle className="h-4 w-4 text-slate-900" />
                        )}
                      </div>
                      <span className="flex-1">{option.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handleBack}
            disabled={currentQuestion === 0}
            className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={selectedValues.length === 0}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-blue-400 text-slate-900 font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 transition inline-flex items-center gap-2"
          >
            {currentQuestion === assessmentQuestions.length - 1 ? 'See Results' : 'Next'}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

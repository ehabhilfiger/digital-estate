"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Lock, Unlock, Eye, EyeOff, Trophy, Target, Clock, CheckCircle2, Circle, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PuzzleAnswer {
  answer: string;
  isCorrect: boolean | null;
}

export default function ChallengePage() {
  const [unlockedHints, setUnlockedHints] = useState<number[]>([]);
  const [password, setPassword] = useState('');
  const [showSecret, setShowSecret] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [answers, setAnswers] = useState<Record<number, PuzzleAnswer>>({});
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Load saved progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('challenge-progress');
    if (saved) {
      const data = JSON.parse(saved);
      setUnlockedHints(data.unlockedHints || []);
      setAnswers(data.answers || {});
      setTimeSpent(data.timeSpent || 0);
      setShowSecret(data.showSecret || false);
      setCandidateName(data.candidateName || '');
      setCandidateEmail(data.candidateEmail || '');
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    const data = {
      unlockedHints,
      answers,
      timeSpent,
      showSecret,
      candidateName,
      candidateEmail,
    };
    localStorage.setItem('challenge-progress', JSON.stringify(data));
  }, [unlockedHints, answers, timeSpent, showSecret, candidateName, candidateEmail]);

  const toggleHint = (puzzleNum: number) => {
    if (unlockedHints.includes(puzzleNum)) {
      setUnlockedHints(unlockedHints.filter(n => n !== puzzleNum));
    } else {
      setUnlockedHints([...unlockedHints, puzzleNum]);
    }
  };

  const checkPassword = () => {
    if (password.toLowerCase() === 'architect40') {
      setShowSecret(true);
    }
  };

  const handleAnswerChange = (puzzleNum: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [puzzleNum]: { answer: value, isCorrect: null }
    }));
  };

  // Timer effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(answers).filter(key => answers[parseInt(key)]?.answer.trim()).length;
  const progressPercentage = (answeredCount / 20) * 100;
  const bonusEligible = answeredCount >= 20;
  const passThreshold = answeredCount >= 12;

  const handleSubmitApplication = async () => {
    if (!candidateName || !candidateEmail || answeredCount < 12) {
      alert('Please provide your name, email, and answer at least 12 puzzles before submitting.');
      return;
    }

    setIsSubmitting(true);
    
    // Prepare submission data
    const submissionData = {
      name: candidateName,
      email: candidateEmail,
      answers: answers,
      timeSpent: formatTime(timeSpent),
      hintsUsed: unlockedHints.length,
      answeredCount: answeredCount,
      timestamp: new Date().toISOString(),
    };

    // In a real app, this would POST to an API
    console.log('Submission:', submissionData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Download as JSON for user records
    const blob = new Blob([JSON.stringify(submissionData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `architect-challenge-${candidateName.replace(/\s+/g, '-')}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const resetProgress = () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      localStorage.removeItem('challenge-progress');
      setUnlockedHints([]);
      setAnswers({});
      setTimeSpent(0);
      setShowSecret(false);
      setCandidateName('');
      setCandidateEmail('');
      setSubmitSuccess(false);
    }
  };

  const puzzles = [
    { num: 1, title: "The Opening Gambit", hint: "IHSA doesn't publish all rosters online. Try contacting Taft High School's athletic department directly, or search for archived team photos from 2016-2020." },
    { num: 2, title: "The Academic Path", hint: "Use the Wayback Machine (archive.org) to view archived versions of UIC's Biochemistry department website from 2018-2019. Building names changed when departments relocated." },
    { num: 3, title: "The Business Legacy", hint: "Illinois Secretary of State business search (ilsos.gov/corporatellc) + Google Maps historical Street View. Business addresses are public record." },
    { num: 4, title: "The Family Constellation", hint: "The name 'Allababidi' is of Syrian/Lebanese origin. Research Arabic surname meanings and genealogical databases. Has religious/scholarly connotations." },
    { num: 5, title: "The Digital Footprint", hint: "Look at the LinkedIn profile carefully. The company name has specific capitalization that matters. Every. Letter. Counts." },
    { num: 6, title: "The Hospital Incident", hint: "Cook County court records are searchable online (cookcountyclerkofcourt.org). The hospital was Advocate Lutheran General, February 2023. Case format: ##CH######" },
    { num: 7, title: "The Infrastructure Philosophy", hint: "Open /robots.txt on this domain. Look for the Death Note formula. (2 * 8) - 14 = 2. The answer is NOT a standard port." },
    { num: 8, title: "The Chess Stratagem", hint: "IHSA allows 8 boards maximum. Check the official IHSA chess rules PDF for 2024-2025 time controls. Rules changed recently." },
    { num: 9, title: "The Network Architecture", hint: "Run: curl -I https://digital-estate-orcin.vercel.app/ and dig digital-estate-orcin.vercel.app and openssl s_client" },
    { num: 10, title: "The Final Stratagem", hint: "Line numbers of all 15 PUZZLE headers. Take last digit of each. Convert to letters (A=1, B=2, etc., 0=skip). Spells a phrase." },
    { num: 11, title: "Cryptographic Signature", hint: "Search GitHub for digital-estate or ehab allababidi repos. Look for commit that added humans.txt. Git log shows hash and timestamp." },
    { num: 12, title: "Steganographic Message", hint: "Download /images/Headshot.jpeg from the site. Run: exiftool Headshot.jpeg | grep GPS to check for embedded coordinates." },
    { num: 13, title: "Blockchain Trace", hint: "Search defcon5ready@gmail.com on OpenSea, Etherscan address tags, ENS resolver, Bitcoin explorers. If nothing found, document your search methodology." },
    { num: 14, title: "Temporal Paradox", hint: "Go to web.archive.org/web/*/digital-estate-orcin.vercel.app to see when first snapshot was taken. Note the main headline text from that version." },
    { num: 15, title: "Meta-Puzzle (LEGENDARY)", hint: "Think about: Chess (40 moves ahead), Light's strategic planning depth, Infrastructure planning horizons, System redundancy. Requires THINKING, not Googling." },
    { num: 16, title: "Residential Trace", hint: "Search Nuwber, Spokeo for '8500 block West Winona'. Cross-reference with Redfin/Zillow for property value. Public records from 2017-2018 incidents are the key." },
    { num: 17, title: "Legal Timeline", hint: "Shaw Local newspaper 2018. DUI charge near North and Melrose at 11:51 PM. Two other charges filed: speeding and improper lane usage. City name matters." },
    { num: 18, title: "Academic Artifact", hint: "Prezi presentation on personal identity. Search 'Ehab Allababidi Prezi'. Look for Andrew Solomon TED talk references about horizontal/vertical identity." },
    { num: 19, title: "Family Physician", hint: "Use HIPAA Space or NPI Registry. Search 'Allababidi' + Chicago, IL. Find MD with 10-digit NPI number. Medical specialty included." },
    { num: 20, title: "Property Forensics", hint: "Redfin or Cook County Assessor for 8516 W Winona. Need: beds/baths, year built, sqft, and property tax. All publicly available data." }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Egyptian-style animated background - matching homepage */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-800/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-white/60 hover:text-white/90 transition">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <div className="flex items-center gap-3">
            <a href="/humans.txt" target="_blank" className="text-sm text-white/60 hover:text-white/90 transition">
              Full Challenge
            </a>
          </div>
        </div>
      </header>

      {/* Progress Tracker - Simplified & Clean */}
      <motion.div
        className="fixed top-24 right-6 z-40 bg-black/90 backdrop-blur-md border border-white/10 p-5 shadow-2xl max-w-xs"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm text-white/80">Progress</h3>
            <span className="text-xs font-mono text-white/60">{answeredCount}/20</span>
          </div>

          {/* Progress Bar */}
          <div className="h-1 bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-white/60"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Status */}
          <div className="space-y-2 text-xs">
            <div className={`flex items-center justify-between ${passThreshold ? 'text-white/70' : 'text-white/40'}`}>
              <span>Pass threshold</span>
              <span>{passThreshold ? '✓' : '12/20'}</span>
            </div>
            <div className={`flex items-center justify-between ${bonusEligible ? 'text-white/70' : 'text-white/40'}`}>
              <span>$10k bonus</span>
              <span>{bonusEligible ? '✓' : '20/20'}</span>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-white/40">
            <div className="flex items-center justify-between">
              <span>Time</span>
              <span className="font-mono">{formatTime(timeSpent)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Hints viewed</span>
              <span>{unlockedHints.length}</span>
            </div>
          </div>
        </div>
      </motion.div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-16 relative lg:pr-80">
        {/* Hero - Homepage Style */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
            <span className="text-white/90">Prove you're an</span>
            <br />
            <span className="text-white">elite investigator</span>
          </h1>
          
          <div className="space-y-3 text-lg sm:text-xl text-white/50 mb-10 max-w-2xl leading-relaxed">
            <p className="text-white/70">
              No SaaS leash. No AI shortcuts. Pure investigation discipline.
            </p>
            <p>
              Answer <span className="text-white/90">12 out of 20</span> OSINT puzzles correctly.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 mb-10">
            <span className="text-white/40 text-sm">Currently offering</span>
            <div className="px-4 py-2 bg-blue-600/10 border border-blue-500/30 rounded-lg">
              <span className="text-blue-400 font-bold">$120k base</span>
            </div>
            <span className="text-white/40">—</span>
            <span className="text-white/60 text-sm">
              <span className="text-blue-400 font-semibold">$10k bonus</span> for 20/20
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/40 mb-10">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isPaused ? 'bg-yellow-400' : 'bg-green-400 animate-pulse'}`} />
              <span>{isPaused ? 'Timer Paused' : 'Timer Running'}</span>
            </div>
            <span>|</span>
            <span>Only 2 positions remaining this quarter</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a 
              href="/humans.txt" 
              target="_blank"
              className="px-6 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition font-medium"
            >
              View Full Challenge
            </a>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition"
            >
              {isPaused ? 'Resume Timer' : 'Pause Timer'}
            </button>
            <button
              onClick={resetProgress}
              className="px-6 py-3 text-white/60 hover:text-white/80 transition"
            >
              Reset Progress
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div className="text-white/40">
              <div className="text-white/90 font-medium mb-1">Difficulty</div>
              <div>Impossible for AI</div>
            </div>
            <div className="text-white/40">
              <div className="text-white/90 font-medium mb-1">Success Rate</div>
              <div>&lt;0.01%</div>
            </div>
            <div className="text-white/40">
              <div className="text-white/90 font-medium mb-1">Avg Time</div>
              <div>8-12 hours</div>
            </div>
            <div className="text-white/40">
              <div className="text-white/90 font-medium mb-1">Your Time</div>
              <div className="font-mono">{formatTime(timeSpent)}</div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Puzzle System with Answer Inputs */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white/90">
              20 investigation puzzles
            </h2>
            <p className="text-lg text-white/50 leading-relaxed">
              Click any puzzle to reveal strategic hints. Your progress auto-saves.
            </p>
          </div>

          <div className="space-y-3">
            {puzzles.map((puzzle) => (
              <motion.div
                key={puzzle.num}
                className={`border bg-white/[0.02] backdrop-blur-sm transition-all ${
                  answers[puzzle.num]?.answer 
                    ? 'border-white/20' 
                    : 'border-white/5 hover:border-white/10'
                }`}
                whileHover={{ x: 2 }}
              >
                {/* Puzzle Header */}
                <div 
                  className="flex items-center justify-between cursor-pointer p-5"
                  onClick={() => toggleHint(puzzle.num)}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex items-center gap-3">
                      {answers[puzzle.num]?.answer ? (
                        <CheckCircle2 className="h-4 w-4 text-white/60 flex-shrink-0" />
                      ) : (
                        <Circle className="h-4 w-4 text-white/20 flex-shrink-0" />
                      )}
                      <span className="text-white/40 text-sm font-mono">
                        {String(puzzle.num).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="font-medium text-white/80">
                      {puzzle.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {unlockedHints.includes(puzzle.num) && (
                      <span className="text-xs text-white/30">Hint visible</span>
                    )}
                    {unlockedHints.includes(puzzle.num) ? (
                      <EyeOff className="h-4 w-4 text-white/30" />
                    ) : (
                      <Eye className="h-4 w-4 text-white/20" />
                    )}
                  </div>
                </div>

                {/* Hint Section */}
                <AnimatePresence>
                  {unlockedHints.includes(puzzle.num) && (
                    <motion.div
                      className="px-5 pb-3"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-4 bg-white/[0.02] border border-white/5 text-sm text-white/50 leading-relaxed">
                        {puzzle.hint}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Answer Input */}
                <div className="px-5 pb-5">
                  <textarea
                    value={answers[puzzle.num]?.answer || ''}
                    onChange={(e) => handleAnswerChange(puzzle.num, e.target.value)}
                    placeholder="Your investigation results..."
                    className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 focus:outline-none focus:border-white/20 transition text-white/80 placeholder:text-white/20 resize-none text-sm"
                    rows={2}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Secret Password Section */}
        <motion.div
          className="mb-16 border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-2 text-white/90">
            Master hint system
          </h2>
          <p className="text-white/50 mb-6 leading-relaxed">
            Password hidden in humans.txt. Format: role + number.
          </p>
          <div className="flex gap-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && checkPassword()}
              placeholder="architect40"
              className="flex-1 px-4 py-3 bg-white/[0.02] border border-white/10 focus:outline-none focus:border-white/20 transition text-white placeholder:text-white/20"
            />
            <button
              onClick={checkPassword}
              className="px-6 py-3 bg-white text-black hover:bg-white/90 transition font-medium"
            >
              Unlock
            </button>
          </div>

          <AnimatePresence>
            {showSecret && (
              <motion.div
                className="mt-6 p-6 bg-white/[0.02] border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h3 className="text-lg font-bold text-white/90 mb-4">Master hints unlocked</h3>
                <div className="space-y-3 text-sm text-white/60 leading-relaxed">
                  <p><span className="text-white/80">Puzzle 1:</span> Likely 2018 or 2019. Contact Taft's chess coach.</p>
                  <p><span className="text-white/80">Puzzle 2:</span> UIC BMG was in MSB Room 2014 during 2018-2019.</p>
                  <p><span className="text-white/80">Puzzle 3:</span> Diamond Car Rental address in IL SOS filings.</p>
                  <p><span className="text-white/80">Puzzle 7:</span> Port is 2 (Episode 2 × 8 - Episode 14 = 2)</p>
                  <p><span className="text-white/80">Strategy:</span> Show methodology with screenshots.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Candidate Information & Submission Form */}
        <motion.div
          className="mb-16 border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-white/90">
            Submit application
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            Minimum 12/20 for interview. 20/20 earns $10k signing bonus.
          </p>

          {!submitSuccess ? (
            <>
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 focus:outline-none focus:border-white/20 transition text-white placeholder:text-white/20"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={candidateEmail}
                    onChange={(e) => setCandidateEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 focus:outline-none focus:border-white/20 transition text-white placeholder:text-white/20"
                  />
                </div>

                <div className="p-4 bg-white/[0.02] border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-white/60">Status:</span>
                    <span className={`text-sm font-medium ${passThreshold ? 'text-white/90' : 'text-white/40'}`}>
                      {passThreshold ? 'Eligible' : `Need ${12 - answeredCount} more`}
                    </span>
                  </div>
                  <div className="text-xs text-white/40">
                    {answeredCount}/20 answered • {unlockedHints.length} hints • {formatTime(timeSpent)}
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubmitApplication}
                disabled={!passThreshold || !candidateName || !candidateEmail || isSubmitting}
                className={`w-full py-4 font-medium transition-all ${
                  passThreshold && candidateName && candidateEmail && !isSubmitting
                    ? 'bg-white text-black hover:bg-white/90'
                    : 'bg-white/5 text-white/20 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? 'Processing...' : 'Submit & Download Results'}
              </button>

              <p className="text-xs text-white/40 text-center mt-4">
                Also email JSON to <span className="text-white/60 font-mono">defcon5ready@gmail.com</span>
              </p>
            </>
          ) : (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle2 className="h-16 w-16 text-white/60 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white/90 mb-2">Application submitted</h3>
              <p className="text-white/50 mb-8">
                JSON downloaded. Email it to continue.
              </p>
              <div className="p-6 bg-white/[0.02] border border-white/10 text-left max-w-md mx-auto mb-6">
                <h4 className="font-medium text-white/80 mb-3 text-sm">Next steps:</h4>
                <ol className="space-y-2 text-sm text-white/50">
                  <li>1. Find JSON in Downloads folder</li>
                  <li>2. Email to <span className="text-white/70 font-mono">defcon5ready@gmail.com</span></li>
                  <li>3. Subject: "ARCHITECT: {candidateName}"</li>
                  <li>4. Wait 2-3 business days</li>
                </ol>
              </div>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 transition text-white/80"
              >
                Submit Another
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Instructions */}
        <motion.div
          className="border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-white/90">How it works</h2>
          <div className="space-y-6 text-sm">
            <div className="flex items-start gap-4">
              <div className="text-white/40 font-mono text-xs mt-1">01</div>
              <div>
                <h3 className="text-white/80 mb-1">Read full challenge</h3>
                <p className="text-white/50 leading-relaxed">
                  <a href="/humans.txt" target="_blank" className="text-white/70 hover:text-white transition underline decoration-white/20">humans.txt</a> contains all 20 puzzles
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-white/40 font-mono text-xs mt-1">02</div>
              <div>
                <h3 className="text-white/80 mb-1">Investigate with discipline</h3>
                <p className="text-white/50 leading-relaxed">
                  OSINT, terminal commands, public records. Document methodology.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-white/40 font-mono text-xs mt-1">03</div>
              <div>
                <h3 className="text-white/80 mb-1">Submit answers</h3>
                <p className="text-white/50 leading-relaxed">
                  12/20 minimum for interview. 20/20 earns $10k bonus.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-white/40 font-mono text-xs mt-1">04</div>
              <div>
                <h3 className="text-white/80 mb-1">Email results</h3>
                <p className="text-white/50 leading-relaxed">
                  Send JSON to <span className="text-white/70 font-mono">defcon5ready@gmail.com</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-white/40 italic">
              "I don't want people who can Google. I want investigators."
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <a href="/humans.txt" target="_blank">
            <motion.button
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black hover:bg-white/90 transition font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Full Challenge
            </motion.button>
          </a>
          <p className="mt-6 text-sm text-white/40">
            Based in Chicago — accepting candidates worldwide
          </p>
        </div>
      </main>
    </div>
  );
}

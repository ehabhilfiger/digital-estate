"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Lock, Unlock, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ChallengePage() {
  const [unlockedHints, setUnlockedHints] = useState<number[]>([]);
  const [password, setPassword] = useState('');
  const [showSecret, setShowSecret] = useState(false);

  const toggleHint = (puzzleNum: number) => {
    if (unlockedHints.includes(puzzleNum)) {
      setUnlockedHints(unlockedHints.filter(n => n !== puzzleNum));
    } else {
      setUnlockedHints([...unlockedHints, puzzleNum]);
    }
  };

  const checkPassword = () => {
    // Password is "architect40" (combining architect role + 40 moves ahead theme)
    if (password.toLowerCase() === 'architect40') {
      setShowSecret(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <a href="/humans.txt" target="_blank" className="px-4 py-2 bg-amber-500 text-black rounded-xl hover:bg-amber-400 transition font-medium text-sm">
            View Full Challenge
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Hero */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm mb-6">
            THE ULTIMATE ARCHITECT'S CHALLENGE
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-amber-500">$120k+ + $10k Bonus</span>
            <br />
            Senior Infrastructure Architect
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-6">
            Answer 13 out of 20 questions correctly. No AI can solve this. Only master investigators succeed.
          </p>
          <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-purple-500/10 border border-amber-500/30">
            <div className="text-center text-lg font-bold text-amber-500">
              20/20 PERFECT SCORE = $10,000 SIGNING BONUS
            </div>
            <div className="text-center text-sm text-white/60 mt-2">
              Prove you're the best investigator alive
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/60 font-mono">
            <div className="inline-flex items-center gap-2">
              <Lock className="h-4 w-4 text-amber-500" />
              Difficulty: 12/10 (Impossible for AI)
            </div>
            <span className="hidden sm:inline text-white/30">|</span>
            <div>Coolness: 10/10</div>
            <span className="hidden sm:inline text-white/30">|</span>
            <div>Success Rate: &lt;0.01%</div>
          </div>
        </motion.div>

        {/* Interactive Hint System */}
        <motion.div
          className="mb-12 rounded-2xl border-2 border-purple-500/30 bg-purple-500/5 p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Eye className="h-6 w-6 text-purple-400" />
            Interactive Hint System
          </h2>
          <p className="text-white/70 mb-6">
            Click on any puzzle below to reveal strategic hints. But remember: true investigators don't need hints.
          </p>

          <div className="space-y-4">
            {[
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
            ].map((puzzle) => (
              <motion.div
                key={puzzle.num}
                className="rounded-xl border border-white/10 bg-white/5 p-4 cursor-pointer hover:border-purple-400/50 transition-all"
                onClick={() => toggleHint(puzzle.num)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {unlockedHints.includes(puzzle.num) ? (
                      <Unlock className="h-5 w-5 text-purple-400" />
                    ) : (
                      <Lock className="h-5 w-5 text-white/40" />
                    )}
                    <span className="font-semibold">Puzzle {puzzle.num}: {puzzle.title}</span>
                  </div>
                  {unlockedHints.includes(puzzle.num) ? (
                    <EyeOff className="h-4 w-4 text-white/40" />
                  ) : (
                    <Eye className="h-4 w-4 text-white/40" />
                  )}
                </div>
                {unlockedHints.includes(puzzle.num) && (
                  <motion.div
                    className="mt-4 pt-4 border-t border-white/10 text-sm text-purple-300"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    💡 {puzzle.hint}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Secret Password Section */}
        <motion.div
          className="mb-12 rounded-2xl border-2 border-amber-500/30 bg-amber-500/5 p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Lock className="h-6 w-6 text-amber-500" />
            Unlock Master Hint
          </h2>
          <p className="text-white/70 mb-6">
            If you've read the full humans.txt and understand the philosophy, you know the password.
            (Hint: It's a role + a number)
          </p>
          <div className="flex gap-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && checkPassword()}
              placeholder="Enter password..."
              className="flex-1 px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:border-amber-500 transition"
            />
            <button
              onClick={checkPassword}
              className="px-6 py-3 bg-amber-500 text-black rounded-xl hover:bg-amber-400 transition font-medium"
            >
              Unlock
            </button>
          </div>

          {showSecret && (
            <motion.div
              className="mt-6 p-6 bg-slate-900/50 rounded-xl border border-amber-500/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-lg font-bold text-amber-500 mb-4">🔓 MASTER HINT UNLOCKED</h3>
              <div className="space-y-3 text-sm text-white/80">
                <p><strong>Puzzle 1:</strong> The year was likely 2018 or 2019. Check with Taft's chess coach.</p>
                <p><strong>Puzzle 2:</strong> UIC BMG was in the Medical Sciences Building (MSB) Room 2014 during 2018-2019.</p>
                <p><strong>Puzzle 3:</strong> Diamond Car Rental's last known address can be found in IL SOS business filings.</p>
                <p><strong>Puzzle 7:</strong> The port is 2 (Episode 2 × 8 rules - Episode 14 = 2)</p>
                <p><strong>Strategy:</strong> Don't just solve puzzles—show HOW you investigated. Screenshots matter.</p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Instructions */}
        <motion.div
          className="rounded-2xl border border-white/10 bg-white/5 p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6">How to Apply</h2>
          <div className="space-y-4 text-white/80">
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-amber-500 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Download the Challenge</h3>
                <p className="text-sm text-white/60">
                  Open <a href="/humans.txt" className="text-amber-500 hover:underline">/humans.txt</a> and read all 10 puzzles carefully.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-amber-500 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Investigate & Solve</h3>
                <p className="text-sm text-white/60">
                  Use every tool at your disposal: OSINT, terminal commands, public records, archives.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-amber-500 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Submit Your Answers</h3>
                <p className="text-sm text-white/60">
                  Email <span className="text-amber-500 font-mono">defcon5ready@gmail.com</span> with subject "ARCHITECT APPLICATION: [YOUR NAME]"
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-amber-500 font-bold">4</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Get 7/10 Correct</h3>
                <p className="text-sm text-white/60">
                  Minimum threshold for interview. 10/10 = $80k base + $500 bonus.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-white/60 italic text-center">
              "I don't want people who can Google. I want people who can investigate."
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a href="/humans.txt" target="_blank">
            <motion.button
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-black rounded-2xl hover:bg-amber-400 transition font-bold text-lg shadow-lg shadow-amber-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Challenge
            </motion.button>
          </a>
          <p className="mt-4 text-sm text-white/60">
            Expected completion time: 8-12 hours | Success rate: &lt;1%
          </p>
        </div>
      </main>
    </div>
  );
}

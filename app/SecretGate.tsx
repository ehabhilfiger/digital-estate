'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Lock, Shield, Eye, EyeOff } from 'lucide-react';

const CORRECT_PASSWORD = 'Amex420!';

export default function SecretGate({ children }: { children: React.ReactNode }) {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === CORRECT_PASSWORD) {
      setIsUnlocked(true);
      setError('');
    } else {
      setAttempts(prev => prev + 1);
      setError('Incorrect password. Access denied.');
      setPassword('');
      
      // Lockout after 5 failed attempts
      if (attempts >= 4) {
        setError('Too many failed attempts. Please contact the administrator.');
      }
    }
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  if (attempts >= 5) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="rounded-2xl border-2 border-red-500/50 bg-red-500/10 p-8 text-center">
            <Shield className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-red-500 mb-4">Access Locked</h2>
            <p className="text-white/80">
              Too many failed authentication attempts. Please contact the administrator for access.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex h-20 w-20 rounded-full bg-amber-500/10 items-center justify-center mb-4">
            <Lock className="h-10 w-10 text-amber-500" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Private Access</h1>
          <p className="text-white/60">This section is password protected</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <label htmlFor="password" className="block text-sm font-medium mb-3 text-white">
              Enter Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                className="w-full px-4 py-3 pr-12 rounded-xl bg-slate-950 border border-white/20 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition text-white placeholder-white/40"
                placeholder="Enter password..."
                autoComplete="off"
                disabled={attempts >= 5}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            {error && (
              <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={!password || attempts >= 5}
              className="w-full mt-6 px-6 py-3 bg-amber-500 text-black font-medium rounded-xl hover:bg-amber-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Unlock Access
            </button>

            <p className="mt-4 text-center text-xs text-white/40">
              {5 - attempts} {5 - attempts === 1 ? 'attempt' : 'attempts'} remaining
            </p>
          </div>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-amber-500 hover:text-amber-400 transition"
          >
            ← Return to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

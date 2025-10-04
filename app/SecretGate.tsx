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
      <div className="min-h-screen bg-black flex items-center justify-center p-4 overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-zinc-950 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.15),transparent_50%)]" />
        </div>

        <div className="relative max-w-md w-full">
          <div className="relative rounded-3xl border-2 border-red-500/50 bg-gradient-to-br from-red-500/10 via-black/50 to-red-500/10 p-10 text-center backdrop-blur-xl shadow-2xl shadow-red-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-600/5 rounded-3xl" />
            
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-red-500 rounded-full blur-2xl opacity-30" />
              <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 mx-auto grid place-items-center shadow-2xl shadow-red-500/50">
                <Shield className="h-10 w-10 text-white" />
              </div>
            </div>
            
            <h2 className="relative text-3xl font-bold text-red-400 mb-4">Access Locked</h2>
            <p className="relative text-zinc-300 leading-relaxed">
              Too many failed authentication attempts. The vault has been locked for security purposes. Please contact the administrator for access restoration.
            </p>
            
            <div className="relative mt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 hover:border-red-500/50 transition-all"
              >
                <span>Return to homepage</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-zinc-950 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,119,6,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(217,119,6,0.1),transparent_50%)]" />
      </div>

      <div className="relative max-w-md w-full">
        <div className="text-center mb-10">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full blur-2xl opacity-50 animate-pulse" />
            <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-amber-500 via-yellow-600 to-amber-700 mx-auto grid place-items-center shadow-2xl shadow-amber-500/50">
              <Lock className="h-12 w-12 text-black" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
            The Sanctum
          </h1>
          <p className="text-zinc-400 text-lg">Password required for access</p>
        </div>

        <form onSubmit={handleSubmit} className="relative space-y-6">
          <div className="relative rounded-3xl border border-amber-500/30 bg-gradient-to-br from-zinc-900/50 via-black/50 to-zinc-900/50 p-8 md:p-10 backdrop-blur-xl shadow-2xl shadow-amber-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-purple-500/5 rounded-3xl" />
            
            <label htmlFor="password" className="relative block text-sm font-medium mb-4 text-amber-100">
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
                className="w-full px-5 py-4 pr-14 rounded-xl bg-black border-2 border-amber-500/30 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition text-white placeholder-zinc-600 text-lg"
                placeholder="Enter your password..."
                autoComplete="off"
                disabled={attempts >= 5}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-amber-400 transition"
              >
                {showPassword ? (
                  <EyeOff className="h-6 w-6" />
                ) : (
                  <Eye className="h-6 w-6" />
                )}
              </button>
            </div>

            {error && (
              <div className="relative mt-5 p-4 rounded-xl bg-red-500/10 border border-red-500/30 shadow-lg shadow-red-500/5">
                <p className="text-red-400 text-sm font-medium">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={!password || attempts >= 5}
              className="relative w-full mt-7 px-6 py-4 bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-500 text-black font-bold text-lg rounded-xl hover:from-amber-400 hover:via-yellow-500 hover:to-amber-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40 hover:-translate-y-0.5"
            >
              Unlock Vault
            </button>

            <div className="relative mt-5 flex items-center justify-center gap-2">
              <Shield className="h-4 w-4 text-zinc-600" />
              <p className="text-center text-sm text-zinc-600">
                {5 - attempts} {5 - attempts === 1 ? 'attempt' : 'attempts'} remaining
              </p>
            </div>
          </div>
        </form>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-amber-500 hover:text-amber-400 transition"
          >
            <span>← Return to homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

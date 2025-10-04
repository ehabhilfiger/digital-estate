'use client';

import { useState } from 'react';
import { Lock, Eye, EyeOff, Crown, Shield, Download } from 'lucide-react';

const MASTER_PLAN_PASSWORD = 'Amex420!';

interface MasterPlanGuardProps {
  onUnlock: () => void;
  isUnlocked: boolean;
}

export default function MasterPlanGuard({ onUnlock, isUnlocked }: MasterPlanGuardProps) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === MASTER_PLAN_PASSWORD) {
      onUnlock();
      setError('');
    } else {
      setAttempts(prev => prev + 1);
      setError('Incorrect password. Access denied.');
      setPassword('');
      
      if (attempts >= 2) {
        setError('Maximum attempts exceeded. This incident will be logged.');
      }
    }
  };

  if (isUnlocked) {
    return (
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
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg shadow-emerald-500/50">
              ✓ UNLOCKED
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
    );
  }

  if (attempts >= 3) {
    return (
      <div className="group relative flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-red-600/20 via-red-700/20 to-red-600/20 border-2 border-red-500/60 transition-all overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-red-600/10 to-red-500/5" />
        
        <div className="relative flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="h-5 w-5 text-red-400" />
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/50">
              ACCESS LOCKED
            </span>
          </div>
          <h4 className="font-bold text-2xl text-red-100 mb-2">
            Ehab's Master Plan
          </h4>
          <p className="text-sm text-red-200/80 leading-relaxed">
            Maximum authentication attempts exceeded. Access has been permanently locked.
          </p>
        </div>
        <div className="relative h-14 w-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 grid place-items-center shadow-lg shadow-red-500/50">
          <Lock className="h-7 w-7 text-white" />
        </div>
      </div>
    );
  }

  return (
    <div className="group relative rounded-2xl bg-gradient-to-r from-purple-600/20 via-fuchsia-600/20 to-purple-600/20 border-2 border-purple-500/60 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-fuchsia-500/10 to-purple-500/0" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
      
      <div className="relative p-6">
        <div className="flex items-center gap-2 mb-4">
          <Crown className="h-5 w-5 text-purple-400 animate-pulse" />
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/50">
            TOP SECRET
          </span>
          <Lock className="h-4 w-4 text-purple-400" />
        </div>
        
        <h4 className="font-bold text-2xl text-purple-100 mb-2">
          Ehab's Master Plan
        </h4>
        <p className="text-sm text-purple-200/80 leading-relaxed mb-6">
          This document requires additional authentication to access.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="master-plan-password" className="block text-sm font-medium mb-2 text-purple-100">
              Enter Master Plan Password
            </label>
            <div className="relative">
              <input
                id="master-plan-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                className="w-full px-4 py-3 pr-12 rounded-xl bg-black/50 border-2 border-purple-500/30 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition text-white placeholder-purple-300/30 text-base"
                placeholder="Enter password..."
                autoComplete="off"
                disabled={attempts >= 3}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-300 transition"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30">
              <p className="text-red-400 text-sm font-medium">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={!password || attempts >= 3}
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 via-fuchsia-600 to-purple-500 text-white font-bold rounded-xl hover:from-purple-400 hover:via-fuchsia-500 hover:to-purple-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/40"
          >
            Authenticate & Unlock
          </button>

          <div className="flex items-center justify-center gap-2">
            <Shield className="h-4 w-4 text-purple-500/60" />
            <p className="text-center text-xs text-purple-300/60">
              {3 - attempts} {3 - attempts === 1 ? 'attempt' : 'attempts'} remaining
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

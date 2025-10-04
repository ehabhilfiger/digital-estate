'use client';

import { useState } from 'react';
import { Shield, Server, Lock, Home, Brain, ArrowRight, Phone, Mail, FileText, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition resize-none"
          placeholder="Tell me about your project..."
        />
      </div>
      
      {status === 'success' && (
        <div className="flex items-center gap-2 p-3 bg-emerald-400/10 border border-emerald-400/20 rounded-xl text-emerald-400">
          <CheckCircle2 className="h-5 w-5" />
          <span className="text-sm">Message sent successfully!</span>
        </div>
      )}
      
      {status === 'error' && (
        <div className="flex items-center gap-2 p-3 bg-red-400/10 border border-red-400/20 rounded-xl text-red-400">
          <AlertCircle className="h-5 w-5" />
          <span className="text-sm">{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full inline-flex items-center justify-center px-4 py-2 font-medium rounded-2xl transition bg-emerald-400 text-black hover:bg-emerald-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
        {status !== 'loading' && <ArrowRight className="ml-2 h-4 w-4" />}
      </button>
      
      <p className="text-sm text-white/60 text-center">
        Or email me directly at{' '}
        <a href="mailto:defcon5ready@gmail.com" className="text-emerald-400 hover:underline">
          defcon5ready@gmail.com
        </a>
      </p>
    </form>
  );
}

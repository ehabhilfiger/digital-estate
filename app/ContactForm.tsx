'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validateForm = () => {
    const errors: { name?: string; email?: string; message?: string } = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus('error');
      setErrorMessage('Please fix the errors above');
      return;
    }
    
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
        setFieldErrors({});
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80">
          Name <span className="text-red-400">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: undefined });
          }}
          className={`w-full px-4 py-3 rounded-xl bg-white/5 border transition min-h-[44px] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 ${
            fieldErrors.name 
              ? 'border-red-400/50 focus:border-red-400 focus:ring-red-400/20' 
              : 'border-white/10 focus:border-blue-500 focus:ring-blue-500/20'
          }`}
          placeholder="John Smith"
          aria-invalid={!!fieldErrors.name}
          aria-describedby={fieldErrors.name ? 'name-error' : undefined}
          autoComplete="name"
        />
        {fieldErrors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {fieldErrors.name}
          </p>
        )}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/80">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: undefined });
          }}
          className={`w-full px-4 py-3 rounded-xl bg-white/5 border transition min-h-[44px] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 ${
            fieldErrors.email 
              ? 'border-red-400/50 focus:border-red-400 focus:ring-red-400/20' 
              : 'border-white/10 focus:border-blue-500 focus:ring-blue-500/20'
          }`}
          placeholder="john@example.com"
          aria-invalid={!!fieldErrors.email}
          aria-describedby={fieldErrors.email ? 'email-error' : undefined}
          autoComplete="email"
        />
        {fieldErrors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {fieldErrors.email}
          </p>
        )}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: undefined });
          }}
          className={`w-full px-4 py-3 rounded-xl bg-white/5 border transition resize-none text-white placeholder:text-white/40 focus:outline-none focus:ring-2 ${
            fieldErrors.message 
              ? 'border-red-400/50 focus:border-red-400 focus:ring-red-400/20' 
              : 'border-white/10 focus:border-blue-500 focus:ring-blue-500/20'
          }`}
          placeholder="Tell me about your project..."
          aria-invalid={!!fieldErrors.message}
          aria-describedby={fieldErrors.message ? 'message-error' : undefined}
        />
        {fieldErrors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {fieldErrors.message}
          </p>
        )}
      </div>
      
      {status === 'success' && (
        <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400" role="alert">
          <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
          <span className="text-sm">Message sent successfully! I'll respond within 24 hours.</span>
        </div>
      )}
      
      {status === 'error' && errorMessage && (
        <div className="flex items-center gap-2 p-4 bg-red-400/10 border border-red-400/30 rounded-xl text-red-400" role="alert">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <span className="text-sm">{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full min-h-[48px] inline-flex items-center justify-center px-6 py-3 font-medium rounded-xl transition bg-white text-black hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black active:scale-98"
        aria-busy={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </button>
      
      <p className="text-sm text-white/60 text-center">
        Or email me directly at{' '}
        <a 
          href="mailto:defcon5ready@gmail.com" 
          className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/30 hover:decoration-blue-300 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded"
        >
          defcon5ready@gmail.com
        </a>
      </p>
    </form>
  );
}

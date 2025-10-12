"use client";

import Image from "next/image";
import Link from "next/link";
import { Shield, Server, Lock, Home, Brain, ArrowRight, Phone, Mail, Calendar, Heart, Check } from 'lucide-react';
import ContactForm from './ContactForm';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { formatPrice } from '@/config/pricing';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsLoaded(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = shouldReduceMotion ? {} : {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" }
  };

  const staggerContainer = shouldReduceMotion ? {} : {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.05 } },
    viewport: { once: true, margin: "-50px" }
  };

  const scaleIn = shouldReduceMotion ? {} : {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-50px" }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: 'Ehab Allababidi',
        jobTitle: 'Digital Estate Architect',
        description: 'Programmer-installer specializing in private servers, zero-trust networks, and on-premises AI solutions',
        email: 'defcon5ready@gmail.com',
        telephone: '+1-773-920-0030',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Chicago',
          addressRegion: 'IL',
          addressCountry: 'US',
        },
        sameAs: [
          'https://digital-estate-orcin.vercel.app',
        ],
      },
      {
        '@type': 'Service',
        serviceType: 'IT Consulting & Infrastructure',
        provider: {
          '@type': 'Person',
          name: 'Ehab Allababidi',
        },
        areaServed: {
          '@type': 'Place',
          name: 'Chicago, Illinois and Remote',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Digital Estate Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Private Servers',
                description: 'On-premise NAS, VMs, and secure home servers with full control and zero cloud lock-in',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Zero-Trust Networks',
                description: 'Wireguard VPNs, VLAN segmentation, and firewall hardening for enterprise-grade security',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'On-Premises AI',
                description: 'Local LLMs, private ChatGPT alternatives, and confidential AI inference solutions',
              },
            },
          ],
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://digital-estate-orcin.vercel.app/#business',
        name: 'Ehab Allababidi - Digital Estate Architect',
        description: 'Professional IT consulting specializing in private digital infrastructure for high-net-worth individuals and boutique firms',
        email: 'defcon5ready@gmail.com',
        telephone: '+1-773-920-0030',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Chicago',
          addressRegion: 'IL',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 41.8781,
          longitude: -87.6298,
        },
        url: 'https://digital-estate-orcin.vercel.app',
        priceRange: '$$$',
        areaServed: ['Chicago', 'Illinois', 'United States', 'Remote'],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-500 focus:text-black focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Skip to content
      </a>

      <motion.div 
        className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white blue-texture"
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        {/* Header */}
        <motion.header
          className={`sticky top-0 z-50 backdrop-blur border-b transition-all duration-300 ${isScrolled ? 'border-blue-500/30 bg-slate-900/90' : 'border-blue-500/20'}`}
          initial={shouldReduceMotion ? false : { y: -100, opacity: 0 }}
          animate={shouldReduceMotion ? false : { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.45, delay: 0.1, ease: "easeOut" }
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image 
                src="/logo.png" 
                alt="Digital Estate Architect Logo" 
                width={36} 
                height={36} 
                className="rounded-xl"
                priority
                quality={85}
                sizes="36px"
              />
              <span className="font-semibold tracking-tight">Digital Estate Architect</span>
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80" aria-label="Main navigation">
              <a href="#services" className="hover:text-white focus:text-white focus:outline-none focus:underline">Services</a>
              <a href="#law" className="hover:text-white focus:text-white focus:outline-none focus:underline">Law Firms</a>
              <a href="#healthcare" className="hover:text-white focus:text-white focus:outline-none focus:underline">Healthcare</a>
              <a href="#work" className="hover:text-white focus:text-white focus:outline-none focus:underline">Packages</a>
              <a href="#accomp" className="hover:text-white focus:text-white focus:outline-none focus:underline">Elite Builds</a>
              <a href="#about" className="hover:text-white focus:text-white focus:outline-none focus:underline">About</a>
              <a href="#contact" className="hover:text-white focus:text-white focus:outline-none focus:underline">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </motion.header>

        {/* Mobile Navigation Menu */}
        <motion.div
          className={`fixed inset-0 z-40 md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <motion.div
            className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900/95 backdrop-blur-md border-l border-blue-500/30"
            initial={{ x: '100%' }}
            animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="p-6 pt-20">
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <span className="text-white text-xl">×</span>
              </button>
              
              {/* Navigation Links */}
              <nav className="space-y-6" aria-label="Mobile navigation">
                <a 
                  href="#services" 
                  className="block text-lg font-medium text-white hover:text-blue-400 transition-colors py-3 border-b border-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a 
                  href="#law" 
                  className="block text-lg font-medium text-white hover:text-blue-400 transition-colors py-3 border-b border-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Law Firms
                </a>
                <a 
                  href="#healthcare" 
                  className="block text-lg font-medium text-white hover:text-blue-400 transition-colors py-3 border-b border-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Healthcare
                </a>
                <a 
                  href="#work" 
                  className="block text-lg font-medium text-white hover:text-blue-400 transition-colors py-3 border-b border-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Packages
                </a>
                <a 
                  href="#accomp" 
                  className="block text-lg font-medium text-white hover:text-blue-400 transition-colors py-3 border-b border-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Elite Builds
                </a>
                <a 
                  href="#about" 
                  className="block text-lg font-medium text-white hover:text-blue-400 transition-colors py-3 border-b border-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#contact" 
                  className="block text-lg font-medium text-white hover:text-blue-400 transition-colors py-3 border-b border-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </nav>
              
              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="text-sm text-white/70 space-y-2">
                  <p>Chicago, IL</p>
                  <p>defcon5ready@gmail.com</p>
                  <p>(773) 920-0030</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.main 
          id="main-content"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <nav
            className="hidden lg:flex fixed right-6 top-1/3 z-40 flex-col gap-2"
            aria-label="Quick section navigation"
          >
            {[
              { href: "#services", label: "Services" },
              { href: "#law", label: "Law" },
              { href: "#healthcare", label: "Healthcare" },
              { href: "#work", label: "Packages" },
              { href: "#accomp", label: "Builds" },
              { href: "#about", label: "About" },
              { href: "#contact", label: "Contact" },
            ].map(({ href, label }) => (
              <motion.a
                key={href}
                href={href}
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-xs font-medium text-white/60 backdrop-blur transition hover:border-emerald-300/60 hover:text-white"
                whileHover={shouldReduceMotion ? undefined : { x: -4 }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 group-hover:bg-white transition" aria-hidden="true" />
                {label}
              </motion.a>
            ))}
          </nav>

          {/* Hero Section */}
          <section className="relative overflow-hidden">
            <motion.div
              className="absolute inset-0 -z-10"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            >
              <motion.div
                className="absolute -top-24 -left-32 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-500/35 via-blue-500/25 to-transparent blur-3xl"
                animate={shouldReduceMotion ? {} : { y: [0, 24, 0], x: [0, 12, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-12 -right-36 h-80 w-80 rounded-full bg-gradient-to-tr from-amber-500/35 via-purple-500/25 to-transparent blur-3xl"
                animate={shouldReduceMotion ? {} : { y: [0, -20, 0], x: [0, -16, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(20,40,60,0.25)_0%,_transparent_60%)]" />
            </motion.div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
                animate={isLoaded ? { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.45, ease: "easeOut" }
                } : { opacity: 0, y: 14 }}
              >
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  Ehab Allababidi builds{' '}
                  <span className="bg-gradient-to-r from-emerald-300 via-blue-400 to-amber-300 bg-clip-text text-transparent">
                    sovereign automation estates
                  </span>
                </motion.h1>
                <motion.p
                  className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl"
                  initial={shouldReduceMotion ? undefined : { opacity: 0 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.12, ease: "easeOut" }}
                >
                  No SaaS leash. I design, rack, and harden on-prem AI systems that answer only to you and your threat model.
                </motion.p>
                <motion.div
                  className="mt-6 grid gap-4 text-sm text-white/75 sm:text-base"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.16, ease: "easeOut" }}
                >
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-white">Zero dependency, zero guesswork.</p>
                      <p className="text-white/70">You get one builder accountable for the rack plan, firmware, automations, and long-term stewardship.</p>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[{
                      Icon: Shield,
                      label: 'Air-gapped security — segmentation, monitoring, red-team hardening'
                    }, {
                      Icon: Server,
                      label: 'GPU clusters + NAS stacks tuned for your workloads'
                    }, {
                      Icon: Brain,
                      label: 'Private LLM orchestration with policy controls'
                    }, {
                      Icon: Home,
                      label: 'Estate-wide automation: sensors, AV, BMS, safes'
                    }].map(({ Icon, label }) => (
                      <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        <Icon className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                        <span className="text-left leading-tight">{label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  className="mt-8 flex flex-wrap gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                >
                  <a href="#contact">
                    <motion.button
                      className="inline-flex min-h-[44px] min-w-[140px] items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-300 via-blue-400 to-amber-300 px-6 py-4 text-base font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.05, rotate: -0.5 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                    >
                      Book a consult <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </motion.button>
                  </a>
                  <a href="#work">
                    <motion.button
                      className="inline-flex min-h-[44px] min-w-[140px] items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-slate-950"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                    >
                      Explore tiers
                    </motion.button>
                  </a>
                </motion.div>
                <motion.div
                  className="mt-6 flex flex-wrap gap-2 text-xs sm:text-sm text-white/70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                >
                  {['On-prem NAS/VMs', 'Zero-trust networks', 'Luxury smart estates', 'Local AI orchestration'].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </motion.div>
                <motion.div
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 backdrop-blur"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 }}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Based in Chicago — deploying discreetly worldwide
                </motion.div>
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={isLoaded ? { 
                  opacity: 1, 
                  scale: 1,
                  transition: { duration: 0.8, ease: "easeOut" }
                } : { opacity: 0, scale: 0.96 }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute -inset-6 rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(79,255,209,0.18)_0%,_rgba(12,24,40,0)_55%)]"
                    animate={shouldReduceMotion ? {} : { opacity: [0.75, 0.5, 0.75] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-emerald-400/15 via-blue-500/10 to-transparent blur-3xl"
                    animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1], opacity: [0.25, 0.4, 0.25] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <Image
                    src="/me.jpg"
                    alt="Ehab Allababidi - Private AI Systems Architect"
                    width={420}
                    height={420}
                    priority
                    quality={80}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    sizes="(max-width: 768px) 300px, 420px"
                    className="relative z-10 w-full max-w-sm rounded-[26px] border border-white/10 bg-slate-950/60 object-cover shadow-[0_40px_80px_-40px_rgba(6,182,212,0.45)]"
                  />
                  <motion.div
                    className="absolute -bottom-10 left-1/2 w-[260px] -translate-x-1/2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center text-sm text-white/80 backdrop-blur"
                    initial={{ opacity: 0, y: 12 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                  >
                    10+ years building sovereign digital estates • 50+ deployments • 100% concierge delivery
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Trust Section */}
          <motion.section
            className="py-12 border-y border-white/10 bg-white/5 backdrop-blur-sm"
            {...fadeInUp}
          >
            <motion.div
              className="max-w-6xl mx-auto px-4 sm:px-6"
              {...staggerContainer}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                <motion.div {...fadeInUp}>
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-blue-400">10+</div>
                  <div className="mt-2 text-sm sm:text-base text-white/70">Years of Experience</div>
                </motion.div>
                <motion.div {...fadeInUp}>
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-300">50+</div>
                  <div className="mt-2 text-sm sm:text-base text-white/70">Systems Deployed</div>
                </motion.div>
                <motion.div {...fadeInUp}>
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-amber-300">100%</div>
                  <div className="mt-2 text-sm sm:text-base text-white/70">Client Satisfaction</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.section>

          {/* Services Section */}
          <section id="services" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center"
                {...fadeInUp}
              >
                What I Deliver
              </motion.h2>
              <motion.p
                className="mt-4 text-center text-white/70 max-w-2xl mx-auto text-sm sm:text-base"
                {...fadeInUp}
              >
                Three pillars of sovereign infrastructure—built for privacy, security, and total control.
              </motion.p>
              <motion.div
                className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
                {...staggerContainer}
              >
                <motion.div
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-400/5"
                  {...scaleIn}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-emerald-400/10">
                    <Server className="h-6 w-6 text-emerald-300" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium">Private Servers</h3>
                  <p className="mt-3 text-white/70 text-sm sm:text-base">
                    High-availability NAS and VM stacks (TrueNAS, Proxmox) with encrypted snapshots and offline recovery drills.
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-emerald-200/80">
                    Recent build: triple-node TrueNAS vault protecting a 14TB litigation archive.
                  </p>
                </motion.div>
                <motion.div
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-400/5"
                  {...scaleIn}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-blue-400/10">
                    <Lock className="h-6 w-6 text-blue-300" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium">Zero-Trust Networks</h3>
                  <p className="mt-3 text-white/70 text-sm sm:text-base">
                    Segmented networks, WireGuard mesh, and policy automation. Every endpoint authenticated, every tunnel encrypted.
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-blue-200/80">
                    Recent build: biometric VPN perimeter covering six villas with automatic threat sweeps.
                  </p>
                </motion.div>
                <motion.div
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 transition-all duration-300 hover:border-amber-400/50 hover:bg-amber-400/5"
                  {...scaleIn}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-amber-400/10">
                    <Brain className="h-6 w-6 text-amber-300" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium">On-Prem AI</h3>
                  <p className="mt-3 text-white/70 text-sm sm:text-base">
                    Local LLM clusters (Ollama, vLLM) with curated datasets, safety policies, and observability tuned to your compliance rules.
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-amber-200/80">
                    Recent build: confidential RAG counsel trained on twelve years of legal briefs.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Plain English TLDR */}
          <section id="tldr" className="py-20 bg-white/5 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/plain-english.png"
                alt="Plain English Explanation"
                fill
                className="object-cover opacity-70"
                sizes="100vw"
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950/80"></div>
            </div>
            
            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center"
                {...fadeInUp}
              >
                In Plain English
              </motion.h2>
              <motion.div
                className="mt-12 grid gap-6 text-base text-white/80 sm:grid-cols-2"
                {...staggerContainer}
              >
                {[
                  {
                    title: "Cloud custody is a risk.",
                    body: "Everything—files, CCTV, AI—lives on hardware you can walk up to and audit in seconds.",
                  },
                  {
                    title: "You hire one accountable builder.",
                    body: "I architect, cable, script, and document every layer so nothing is handed off to a mystery vendor.",
                  },
                  {
                    title: "Privacy is the baseline.",
                    body: "No telemetry, no SaaS callouts, immutable logging, and automatic key rotation across the estate.",
                  },
                  {
                    title: "Support stays concierge.",
                    body: "Blueprints, training, and periodic health checks come from the person who built the system—me.",
                  },
                ].map(({ title, body }) => (
                  <motion.div
                    key={title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                    {...fadeInUp}
                    whileHover={shouldReduceMotion ? {} : { y: -6 }}
                  >
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-3 text-sm sm:text-base text-white/75">{body}</p>
                  </motion.div>
                ))}
                <motion.div
                  className="sm:col-span-2 rounded-3xl border border-emerald-400/40 bg-emerald-400/10 p-6 text-center text-lg font-medium text-emerald-200"
                  {...fadeInUp}
                >
                  Hire me when you want sovereign infrastructure with a single throat to choke.
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* DarkGPT Section - PREMIUM FEATURE */}
          <section id="darkgpt" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-black to-black egyptian-pattern"></div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
              <motion.div className="text-center mb-12" {...fadeInUp}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/30 border border-blue-500/60 text-blue-500 text-sm mb-6 blue-glow">
                  <span>🔒</span>
                  <span>ELITE EXCLUSIVE</span>
                </div>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Image
                    src="/images/darkgpt.png"
                    alt="DarkGPT Logo"
                    width={64}
                    height={64}
                    className="h-16 w-auto"
                  />
                  <h2 className="text-4xl md:text-5xl font-bold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-500">DarkGPT</span> — Private AI
                  </h2>
                </div>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  A completely private local LLM with locally-configurable policies. Custom-programmed on your premises, tailored to your requirements, with complete data sovereignty.
                </p>
              </motion.div>

              <motion.div
                className="rounded-2xl border-2 border-blue-500/70 bg-gradient-to-br from-blue-500/15 via-black to-black p-8 md:p-12 blue-glow-lg"
                {...fadeInUp}
              >
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-500 mb-4">What You Get</h3>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span><strong>One week on-site programming</strong> — I stay at your location until it's perfect</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Private deployment</strong> — Locally-configurable safety policies, governed by your own rules</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Complete privacy</strong> — Runs locally, conversations never leave your network</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Custom personality</strong> — Fine-tuned to your preferences and communication style</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Estate integration</strong> — Access from anywhere in your infrastructure</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-950/70 rounded-xl p-6 border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-blue-500 mb-4">The Process</h3>
                    <div className="space-y-4 text-sm text-white/70">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-500 font-bold">1</div>
                        <div>
                          <p className="font-semibold text-white">Initial consultation & requirements</p>
                          <p>We discuss your needs, use cases, and expectations</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-500 font-bold">2</div>
                        <div>
                          <p className="font-semibold text-white">Hardware setup & base model deployment</p>
                          <p>Install optimized LLM infrastructure with GPU acceleration</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-500 font-bold">3</div>
                        <div>
                          <p className="font-semibold text-white">One week intensive fine-tuning</p>
                          <p>On-site programming, testing, and iteration until perfect</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-500 font-bold">4</div>
                        <div>
                          <p className="font-semibold text-white">Training & handoff</p>
                          <p>You're fully trained and 100% satisfied before I leave</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 text-center">
                  <div className="text-lg font-bold text-blue-500 mb-2">Pricing: Available Upon Request</div>
                  <p className="text-white/70 text-sm italic mb-4">
                    "DarkGPT pricing is negotiable based on your budget. If you have the money, I have the time. Let's talk."
                  </p>
                  <Link href="/start-project">
                    <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-500 text-white rounded-xl hover:from-blue-500 hover:to-blue-500 transition font-semibold text-lg shadow-lg">
                      Request DarkGPT Consultation
                    </button>
                  </Link>
                  <p className="text-white/60 text-xs mt-4 border-t border-blue-500/10 pt-4">
                    Use is subject to lawful, ethical, and compliance-aligned policies. On-prem or private cloud only.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-blue-500/20 text-center">
                  <p className="text-blue-500 text-lg font-semibold italic">
                    "Your AI. Your rules. Total control."
                  </p>
                  <p className="text-white/60 text-sm mt-2">
                    Available exclusively with Elite Tier builds ($50k+)
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Law Firms Section - PREMIUM TIER */}
          <section id="law" className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <Link href="/solutions/law-firm" className="block">
                <motion.div
                  className="rounded-2xl border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent p-8 md:p-12 hover:border-blue-500/50 hover:from-blue-500/15 hover:to-blue-500/5 transition-all duration-300 cursor-pointer relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  {...fadeInUp}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <Image
                      src="/images/lawfirm.png"
                      alt="Law Firm Infrastructure"
                      fill
                      className="object-cover opacity-50"
                      sizes="(max-width: 768px) 100vw, 896px"
                      quality={75}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-950/80 to-slate-950/90"></div>
                  </div>
                  
                  {/* Content - positioned above background */}
                  <div className="relative z-10 space-y-6">
                    <div className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-black text-xs font-bold rounded-full">
                      ABA READY
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="h-8 w-8 text-blue-500" aria-hidden="true" />
                      <h2 className="text-2xl md:text-3xl font-semibold">Law Firm Compliance Estate</h2>
                    </div>
                    <p className="text-white/80 text-base sm:text-lg">
                      Purpose-built stacks for boutiques and multi-partner firms that need airtight privilege, conflict automation, and verifiable Model Rule 1.6 controls.
                    </p>
                    <div className="bg-slate-950/70 rounded-xl p-5 border border-blue-500/25">
                      <p className="text-2xl font-bold text-blue-500">From $18k install · $1.2k+/mo concierge</p>
                      <p className="mt-2 text-white/70 text-sm">
                        Includes privileged document vaults, encrypted client portals, immutable audit logs, and white-glove compliance reporting.
                      </p>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm text-white/75">
                      {["Model Rule 1.6 defence-in-depth", "Conflict + ethical wall automation", "Encrypted DMS with matter-level MFA", "Air-gapped legal archive + ransomware drills", "Practice management integrations (Clio, Litify)", "Partner dashboards with breach telemetry"].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-4 text-sm text-white/75">
                      <p className="font-semibold text-blue-400">Why firms call me:</p>
                      <p className="mt-2">Own your evidence, pass bar audits without scramble, and keep every subpoena response under your control.</p>
                    </div>
                    <p className="text-blue-400 text-sm italic border-t border-blue-500/20 pt-4">
                      “Zero findings in our bar audit. Every partner finally trusts the tech.” — Managing Partner, Corporate Litigation
                    </p>
                  </div>
                </motion.div>
              </Link>
            </div>
          </section>

          {/* Healthcare/Medical Facilities Section - PREMIUM TIER */}
          <section id="healthcare" className="py-20 bg-white/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <Link href="/solutions/healthcare" className="block">
                <motion.div
                  className="rounded-2xl border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-8 md:p-12 hover:border-blue-500/50 hover:from-blue-500/15 hover:to-blue-500/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  {...fadeInUp}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <Image
                      src="/images/hospital.png"
                      alt="Healthcare Infrastructure"
                      fill
                      className="object-cover opacity-50"
                      sizes="(max-width: 768px) 100vw, 896px"
                      quality={75}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-950/80 to-slate-950/90"></div>
                  </div>
                  
                  {/* Content - positioned above background */}
                  <div className="relative z-10 space-y-6">
                    <div className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white text-xs font-bold rounded-full">
                      HIPAA READY
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="h-8 w-8 text-blue-400" aria-hidden="true" />
                      <h2 className="text-2xl md:text-3xl font-semibold">Healthcare Sovereign Cloud</h2>
                    </div>
                    <p className="text-white/80 text-base sm:text-lg">
                      Built for clinics and hospitals that demand HIPAA-grade uptime, zero-trust segmentation, and charting privacy without vendor lock-in.
                    </p>
                    <div className="bg-slate-950/70 rounded-xl p-5 border border-blue-500/25">
                      <p className="text-2xl font-bold text-blue-400">From $35k install · $2.5k+/mo concierge</p>
                      <p className="mt-2 text-white/70 text-sm">
                        Turnkey EHR integrations, audited access controls, disaster recovery runbooks, and guaranteed on-call response.
                      </p>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm text-white/75">
                      {["HIPAA + OCR audit readiness baked in", "Zero-trust VLAN design with clinician-aware policies", "Redundant EHR, PACS, and imaging storage", "Air-gapped ransomware response with 15-minute RPO", "Telemetry dashboards for compliance officers", "99.99% uptime SLA across critical services"].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-4 text-sm text-white/75">
                      <p className="font-semibold text-blue-300">Why exec teams bring me in:</p>
                      <p className="mt-2">Own every patient record, prove compliance on demand, and recover cleanly from any incident within minutes.</p>
                    </div>
                    <p className="text-blue-300 text-sm italic border-t border-blue-500/20 pt-4">
                      “Meets every regulatory demand and our clinicians barely notice the upgrades—except for the speed.” — Medical Director, Multi-Specialty Clinic
                    </p>
                  </div>
                </motion.div>
              </Link>
            </div>
          </section>

          {/* Packages/Tiers Section */}
          <section id="work" className="py-20 bg-white/5">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-semibold text-center">Service Tiers</h2>
              <p className="mt-4 text-center text-white/70 max-w-2xl mx-auto">
                From foundation setups to enterprise-grade estates. Choose the tier that fits your needs.
              </p>
              <div className="mt-12 grid md:grid-cols-3 gap-8">
                {/* Tier 1 - Foundation */}
                <Link href="/packages/foundation" className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/images/foundation.png"
                      alt="Foundation Tier - Professional NAS deployment"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-semibold mb-1">Foundation Tier</h3>
                      <p className="text-2xl font-bold text-blue-500">{formatPrice('FOUNDATION')}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-white/70 text-sm mb-4">Perfect for getting started</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span>
                        <span className="text-white/80">Single-node NAS or server</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span>
                        <span className="text-white/80">Basic VPN setup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span>
                        <span className="text-white/80">Encrypted local backups</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span>
                        <span className="text-white/80">Documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span>
                        <span className="text-white/80">30-day support</span>
                      </li>
                    </ul>
                    <div className="mt-6 text-blue-500 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>

                {/* Tier 2 - Estate - MOST POPULAR */}
                <Link href="/packages/estate" className="group rounded-2xl border-2 border-blue-500/50 bg-gradient-to-b from-blue-500/5 to-transparent overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 relative cursor-pointer">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-black text-xs font-bold rounded-full z-10">
                    MOST POPULAR
                  </div>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/images/25k.webp"
                      alt="Estate Tier - Comprehensive digital estate"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-semibold mb-1">Estate Tier</h3>
                      <p className="text-2xl font-bold text-blue-500">{formatPrice('ESTATE')}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-white/70 text-sm mb-4">Comprehensive digital estate</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span>
                        <span className="text-white/80">Multi-server deployment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span>
                        <span className="text-white/80">VLAN segmentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span>
                        <span className="text-white/80">Smart home integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span>
                        <span className="text-white/80">On-prem AI services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span>
                        <span className="text-white/80">Monitoring &amp; alerts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span>
                        <span className="text-white/80">90-day support</span>
                      </li>
                    </ul>
                    <div className="mt-6 text-blue-500 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>

                {/* Tier 3 - Architect */}
                <Link href="/packages/architect" className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/images/architect.png"
                      alt="Architect Tier - Enterprise-grade infrastructure"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-semibold mb-1">Architect Tier</h3>
                      <p className="text-2xl font-bold text-blue-500">{formatPrice('ARCHITECT')}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-white/70 text-sm mb-4">Enterprise-grade infrastructure</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span>
                        <span className="text-white/80">Enterprise-grade stack</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span>
                        <span className="text-white/80">High-availability clustering</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span>
                        <span className="text-white/80">Custom automation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span>
                        <span className="text-white/80">Multi-site synchronization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span>
                        <span className="text-white/80">Dedicated concierge</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span>
                        <span className="text-white/80">12-month SLA</span>
                      </li>
                    </ul>
                    <div className="mt-6 text-blue-500 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>

              </div>
            </div>
          </section>

          {/* Elite Tier Builds Showcase */}
          <section id="accomp" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm mb-4">
                  <span>🏆</span>
                  <span>Elite Portfolio</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-center">Elite Tier Builds</h2>
              <p className="mt-4 text-center text-white/70 max-w-2xl mx-auto">
                World-class digital estates representing the pinnacle of private infrastructure engineering—custom-tailored, meticulously secured, and built for longevity.
              </p>
              <div className="mt-12 grid md:grid-cols-3 gap-8">
                {/* Tier 1 Showcase - CLICKABLE */}
                <Link href="/tiers/foundation" className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/images/Tier 1 Example.png"
                      alt="Foundation Tier - Professional NAS deployment with enterprise backup solution"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="inline-flex px-3 py-1 rounded-full bg-blue-500 text-black text-xs font-semibold">
                        FOUNDATION TIER
                      </div>
                      <div className="text-blue-500 text-sm font-bold">$50k</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition">Professional NAS Deployment</h3>
                    <p className="text-white/70 text-sm mb-4">
                      Enterprise-grade Synology DS920+ with 16TB RAID 10, automated encrypted backups, and Wireguard VPN access. Replaced cloud subscriptions, achieving 60% cost reduction while maintaining full data sovereignty.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs px-2 py-1 rounded-md bg-blue-500/10 text-blue-500 border border-blue-500/20">Synology NAS</span>
                      <span className="text-xs px-2 py-1 rounded-md bg-slate-400/10 text-slate-400 border border-slate-400/20">RAID 10</span>
                      <span className="text-xs px-2 py-1 rounded-md bg-blue-500/10 text-blue-500 border border-blue-500/20">VPN Access</span>
                    </div>
                    <p className="text-blue-500 text-sm italic border-t border-white/10 pt-4">
                      "We finally own our data. Installation was seamless, support exceptional." — Boutique Law Firm
                    </p>
                    <div className="mt-4 text-blue-500 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Full Details <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>

                {/* Tier 2 Showcase - CLICKABLE - MOST POPULAR */}
                <Link href="/tiers/estate" className="group rounded-2xl border-2 border-blue-500/50 bg-gradient-to-b from-blue-500/5 to-transparent overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 relative cursor-pointer">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-black text-xs font-bold rounded-full z-10">
                    MOST POPULAR
                  </div>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/images/secret-room.png"
                      alt="Estate Tier - Complete digital estate with secret server room"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="inline-flex px-3 py-1 rounded-full bg-blue-500 text-black text-xs font-semibold">
                        ESTATE TIER
                      </div>
                      <div className="text-blue-500 text-sm font-bold">$100k</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition">Complete Digital Estate</h3>
                    <p className="text-white/70 text-sm mb-4">
                      Multi-server deployment with pfSense firewall, segmented VLANs (smart home, office, guest), Proxmox virtualization cluster, and integrated Home Assistant. Zero-trust architecture with end-to-end encryption across all zones.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs px-2 py-1 rounded-md bg-blue-500/10 text-blue-500 border border-blue-500/20">pfSense</span>
                      <span className="text-xs px-2 py-1 rounded-md bg-slate-400/10 text-slate-400 border border-slate-400/20">VLAN Segmentation</span>
                      <span className="text-xs px-2 py-1 rounded-md bg-blue-500/10 text-blue-500 border border-blue-500/20">Proxmox</span>
                      <span className="text-xs px-2 py-1 rounded-md bg-blue-500/10 text-blue-500 border border-blue-500/20">Home Assistant</span>
                    </div>
                    <p className="text-blue-500 text-sm italic border-t border-white/10 pt-4">
                      "Peace of mind knowing my family's entire digital life is secure and private." — Executive Client
                    </p>
                    <div className="mt-4 text-blue-500 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Full Details <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>

                {/* Tier 3 Showcase - CLICKABLE */}
                <Link href="/tiers/architect" className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/images/250k-tier.png"
                      alt="Architect Tier - Enterprise-grade infrastructure with on-premises AI and GPU clustering"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="inline-flex px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-semibold">
                        ARCHITECT TIER
                      </div>
                      <div className="text-blue-500 text-sm font-bold">$250k+</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition">AI Research Infrastructure</h3>
                    <p className="text-white/70 text-sm mb-4">
                      High-availability Proxmox cluster with GPU passthrough (NVIDIA A6000), on-prem LLM deployment (Ollama + Open WebUI), TrueNAS Scale storage array, and multi-site replication. Custom automation for model training and inference workloads.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs px-2 py-1 rounded-md bg-blue-500/10 text-blue-500 border border-blue-500/20">GPU Cluster</span>
                      <span className="text-xs px-2 py-1 rounded-md bg-slate-400/10 text-slate-400 border border-slate-400/20">On-Prem AI</span>
                      <span className="text-xs px-2 py-1 rounded-md bg-blue-500/10 text-blue-500 border border-blue-500/20">HA Cluster</span>
                      <span className="text-xs px-2 py-1 rounded-md bg-blue-500/10 text-blue-500 border border-blue-500/20">Multi-Site</span>
                    </div>
                    <p className="text-blue-500 text-sm italic border-t border-white/10 pt-4">
                      "Our research stays confidential. Performance exceeds cloud solutions." — AI Research Lab
                    </p>
                    <div className="mt-4 text-blue-500 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Full Details <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <p className="text-white/70 mb-6">Ready to map your build? Let's lock in the first strategy call.</p>
                <Link href="/start-project">
                  <button className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-2xl transition bg-blue-500 text-black hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </button>
                </Link>
              </div>
            </div>
          </section>

          {/* Engagement Flow */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-semibold text-center">How an Engagement Runs</h2>
              <p className="mt-4 text-center text-white/70 text-base sm:text-lg">
                Four tightly managed phases. Clear owners, no hidden handoffs.
              </p>
              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                {[{
                  step: '01',
                  title: 'Scope & threat mapping',
                  detail: 'We inventory assets, risk tolerance, and compliance targets in a single strategy call.'
                }, {
                  step: '02',
                  title: 'Architecture sign-off',
                  detail: 'You approve the rack plan, bill of materials, and automation runbooks before hardware ships.'
                }, {
                  step: '03',
                  title: 'On-site build week',
                  detail: 'I wire, configure, and test every system alongside daily walkthroughs with your team.'
                }, {
                  step: '04',
                  title: 'Stewardship & drills',
                  detail: 'Quarterly health checks, incident rehearsals, and rapid support direct to my phone.'
                }].map(({ step, title, detail }) => (
                  <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <span className="text-sm font-mono text-blue-400">{step}</span>
                    <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm text-white/70">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 bg-white/5">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-semibold text-center">About Ehab Allababidi</h2>
              <div className="mt-10 space-y-5 text-base sm:text-lg text-white/80">
                <p>
                  <strong className="text-white">Ehab Allababidi</strong> is a Chicago engineer who has spent the last decade hardening private stacks for families, founders, law firms, and medical groups who refuse cloud custody.
                </p>
                <ul className="grid gap-3 text-sm sm:text-base text-white/70">
                  {["Enterprise systems background: VMware, Proxmox, pfSense, Arista", "Hands-on builder—no resellers, no subcontractors, every rack wired personally", "Concierge stewardship with quarterly health checks and on-call response"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-white/70 border-l-2 border-blue-500 pl-5 italic">
                  "If you don't own the hardware, you don't own the data. I build estates where you command every packet."
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold">Get In Touch</h2>
                <p className="mt-4 text-white/70 text-base sm:text-lg">
                  Three fast ways to reach me. Pick the channel that fits and I’ll respond the same day.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Email Card */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-500/50 transition">
                  <div className="flex items-center gap-2 mb-3">
                    <Mail className="h-5 w-5 text-blue-500" aria-hidden="true" />
                    <h3 className="font-semibold">Email Inquiry</h3>
                  </div>
                  <p className="text-sm text-white/60 mb-4">Proposals, partnerships, detailed briefs.</p>
                  <a
                    href="mailto:defcon5ready@gmail.com"
                    className="text-blue-500 hover:text-blue-500 transition font-medium block mb-2"
                  >
                    defcon5ready@gmail.com
                  </a>
                  <a
                    href="mailto:defcon5ready@gmail.com"
                    className="text-sm text-white/70 hover:text-white transition inline-flex items-center gap-1"
                  >
                    Contact via email →
                  </a>
                </div>

                {/* Phone Card */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-500/50 transition">
                  <div className="flex items-center gap-2 mb-3">
                    <Phone className="h-5 w-5 text-blue-500" aria-hidden="true" />
                    <h3 className="font-semibold">Direct Line</h3>
                  </div>
                  <p className="text-sm text-white/60 mb-4">Call when you need an engineer immediately.</p>
                  <a
                    href="tel:+17739200030"
                    className="text-blue-500 hover:text-blue-500 transition font-medium block mb-2"
                  >
                    (773) 920-0030
                  </a>
                  <a
                    href="tel:+17739200030"
                    className="text-sm text-white/70 hover:text-white transition inline-flex items-center gap-1"
                  >
                    Call directly →
                  </a>
                </div>

                {/* Calendly Card - RECOMMENDED */}
                <div className="rounded-2xl border-2 border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-transparent p-6 hover:border-blue-500 transition relative">
                  <div className="absolute top-2 right-2 px-2 py-1 bg-blue-500 text-black text-xs font-bold rounded">
                    RECOMMENDED
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="h-5 w-5 text-blue-500" aria-hidden="true" />
                    <h3 className="font-semibold">Book 1-Hour Consultation</h3>
                  </div>
                  <p className="text-sm text-white/60 mb-4">One-hour strategy session, roadmap, and next steps.</p>
                  <p className="text-blue-500 font-medium mb-2">Expert blueprint review</p>
                  <a
                    href="https://calendly.com/defcon5ready/new-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 hover:text-white transition inline-flex items-center gap-1"
                  >
                    Schedule consultation →
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="max-w-2xl mx-auto">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <h3 className="text-xl font-semibold mb-2">Or Send a Message</h3>
                  <p className="text-white/60 text-sm mb-6">I reply within one business day.</p>
                  <ContactForm />
                  <p className="mt-4 text-xs text-white/55 text-center">
                    Submitting confirms you accept the privacy policy. Expect a follow-up within 24 hours (business days).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Self-Audit Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4">
              <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-8">
                <h2 className="text-2xl font-semibold mb-4">Quick Self-Audit</h2>
                <p className="text-white/80 mb-6">
                  Not sure if you need a digital estate? Ask yourself:
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Do you trust Big Tech with your most sensitive files?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Are your home cameras streaming to someone else's cloud?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Could you survive if your SaaS vendor shut you out tomorrow?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Do you know where your backups actually live?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Is your smart home exposing your entire network to the internet?</span>
                  </li>
                </ul>
                <p className="mt-6 text-blue-500 font-medium">
                  If you answered "no" or "I'm not sure" to any of these, let's fix it.
                </p>
              </div>
            </div>
          </section>
          <div className="px-4 pb-20 text-center">
            <a
              href="#main-content"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-white/70 transition hover:border-emerald-300/60 hover:text-white"
            >
              Back to top
            </a>
          </div>
        </motion.main>

        {/* Floating CTA */}
        <motion.div
          className="fixed inset-x-0 bottom-6 z-40 flex justify-center px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={isScrolled ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" }}
        >
          <div className="flex w-full max-w-xl items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/90 px-5 py-3 shadow-lg shadow-emerald-500/10 backdrop-blur">
            <div className="text-sm text-white/80">
              <p className="font-semibold text-white">Ready for concierge deployment?</p>
              <p className="text-white/60">Schedule a private build consultation.</p>
            </div>
            <Link href="#contact">
              <motion.button
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-300 via-blue-400 to-amber-300 px-4 py-2 text-sm font-semibold text-slate-900"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              >
                Book now
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white/60 text-sm">
                © {new Date().getFullYear()} Ehab Allababidi. All rights reserved.
              </div>
              <div className="flex items-center gap-4 text-white/60 text-sm font-mono">
                <a href="/humans.txt" className="hover:text-blue-500 focus:text-blue-500 focus:outline-none transition-colors">
                  {'//'} HUMANS
                </a>
                <span className="text-white/30">|</span>
                <a href="/robots.txt" className="hover:text-blue-500 focus:text-blue-500 focus:outline-none transition-colors">
                  {'//'} MACHINES
                </a>
                <span className="text-white/30">|</span>
                <a href="/map" className="hover:text-blue-500 focus:text-blue-500 focus:outline-none transition-colors">
                  {'//'} MAP
                </a>
                <span className="text-white/30">|</span>
                <a href="https://darkgpt-official.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500/60 hover:text-blue-500 focus:text-blue-500 focus:outline-none inline-flex items-center gap-1 transition-colors">
                  <Lock className="h-3 w-3" aria-hidden="true" />
                  {'//'} DARKGPT access point
                </a>
              </div>
            </div>
            <div className="mt-4 text-center text-white/50 text-xs">
              <div className="mb-2">
                <a href="/challenge" className="text-blue-500 hover:text-blue-500 font-mono transition-colors">
                  {'//'} HIRING: $120k+ Senior Infrastructure Architect - 20 impossible puzzles await
                </a>
              </div>
              <div className="flex items-center justify-center gap-4 mb-2">
                <a href="https://github.com/ehaballa" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
                  GitHub
                </a>
                <span className="text-white/30">|</span>
                <a href="https://www.linkedin.com/in/ehab-allababidi" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
                  LinkedIn
                </a>
              </div>
              <div className="mb-2">
                <a href="/onepager.html" className="hover:text-white/70 transition-colors">
                  Download one-pager
                </a>
              </div>
              Analytics enabled for performance optimization. No personal data collected.{' '}
              <a href="https://vercel.com/docs/analytics" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/70 transition-colors">
                Vercel Analytics
              </a>
            </div>
          </div>
        </footer>
      </motion.div>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Shield, Server, Lock, Home, Brain, ArrowRight, Phone, Mail, FileText, Calendar, Heart } from 'lucide-react';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true, margin: "-100px" }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }
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
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-black focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
      >
        Skip to content
      </a>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Header */}
        <motion.header
          className={`sticky top-0 z-50 backdrop-blur border-b transition-all duration-300 ${isScrolled ? 'border-white/20 bg-slate-950/80' : 'border-white/10'}`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
              />
              <span className="font-semibold tracking-tight">Digital Estate Architect</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80" aria-label="Main navigation">
              <a href="#services" className="hover:text-white focus:text-white focus:outline-none focus:underline">Services</a>
              <a href="#law" className="hover:text-white focus:text-white focus:outline-none focus:underline">Law Firms</a>
              <a href="#healthcare" className="hover:text-white focus:text-white focus:outline-none focus:underline">Healthcare</a>
              <a href="#work" className="hover:text-white focus:text-white focus:outline-none focus:underline">Packages</a>
              <a href="#accomp" className="hover:text-white focus:text-white focus:outline-none focus:underline">Elite Builds</a>
              <a href="#about" className="hover:text-white focus:text-white focus:outline-none focus:underline">About</a>
              <a href="#contact" className="hover:text-white focus:text-white focus:outline-none focus:underline">Contact</a>
            </nav>
          </div>
        </motion.header>

        <main id="main-content">
          {/* Hero Section */}
          <section className="relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Private Servers, Smart Estates, &amp; On-Prem AI —
                  <span className="block text-amber-500">built and secured by a programmer-installer.</span>
                </motion.h1>
                <motion.p
                  className="mt-6 text-white/80 text-base sm:text-lg md:text-xl max-w-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  I design, install, and maintain <span className="text-white">private digital estates</span>: on-prem servers, zero-trust networks, luxury smart home systems, and confidential AI — tailored for high-end homes and boutique firms.
                </motion.p>
                <motion.div
                  className="mt-8 flex flex-wrap gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <a href="#contact">
                    <motion.button
                      className="inline-flex items-center justify-center px-5 py-3 font-medium rounded-2xl transition bg-amber-500 text-black hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-950 text-sm sm:text-base"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book a consult <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </motion.button>
                  </a>
                  <a href="#work">
                    <motion.button
                      className="inline-flex items-center justify-center px-5 py-3 font-medium rounded-2xl transition bg-white/10 border border-white/10 text-white hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-950 text-sm sm:text-base"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View packages
                    </motion.button>
                  </a>
                </motion.div>
                <motion.div
                  className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <span className="inline-flex items-center gap-2">
                    <Server className="h-4 w-4 text-amber-500" aria-hidden="true" /> On-prem NAS/VMs
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Lock className="h-4 w-4 text-amber-500" aria-hidden="true" /> Zero-trust security
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Home className="h-4 w-4 text-amber-500" aria-hidden="true" /> Smart estates
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Brain className="h-4 w-4 text-amber-500" aria-hidden="true" /> Local AI
                  </span>
                </motion.div>
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  ></motion.div>
                  <Image
                    src="/me.jpg"
                    alt="Ehab Allababidi - Digital Estate Architect, Chicago's Premier Infrastructure Specialist"
                    width={400}
                    height={400}
                    priority
                    className="relative rounded-2xl border-2 border-amber-500/30 shadow-2xl object-cover w-full max-w-sm"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Trust Section */}
          <motion.section
            className="py-12 border-y border-white/10 bg-white/5"
            {...fadeInUp}
          >
            <motion.div
              className="max-w-6xl mx-auto px-4 sm:px-6"
              {...staggerContainer}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                <motion.div {...fadeInUp}>
                  <div className="text-3xl sm:text-4xl font-bold text-amber-500">10+</div>
                  <div className="mt-2 text-sm sm:text-base text-white/70">Years of Experience</div>
                </motion.div>
                <motion.div {...fadeInUp}>
                  <div className="text-3xl sm:text-4xl font-bold text-amber-500">50+</div>
                  <div className="mt-2 text-sm sm:text-base text-white/70">Systems Deployed</div>
                </motion.div>
                <motion.div {...fadeInUp}>
                  <div className="text-3xl sm:text-4xl font-bold text-amber-500">100%</div>
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
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all duration-300"
                  {...scaleIn}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className="h-12 w-12 rounded-xl bg-amber-500/10 grid place-items-center mb-4">
                    <Server className="h-6 w-6 text-amber-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium">Private Servers</h3>
                  <p className="mt-3 text-white/70 text-sm sm:text-base">
                    On-prem NAS (Synology, TrueNAS), VMs (Proxmox, ESXi), and secure home servers. Full control, zero cloud lock-in, local backups.
                  </p>
                </motion.div>
                <motion.div
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all duration-300"
                  {...scaleIn}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className="h-12 w-12 rounded-xl bg-amber-500/10 grid place-items-center mb-4">
                    <Lock className="h-6 w-6 text-amber-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium">Zero-Trust Networks</h3>
                  <p className="mt-3 text-white/70 text-sm sm:text-base">
                    Wireguard VPNs, VLAN segmentation, pfSense/OPNsense firewalls, and multi-factor auth. Bulletproof perimeter, encrypted everything.
                  </p>
                </motion.div>
                <motion.div
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all duration-300"
                  {...scaleIn}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className="h-12 w-12 rounded-xl bg-amber-500/10 grid place-items-center mb-4">
                    <Brain className="h-6 w-6 text-amber-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium">On-Prem AI</h3>
                  <p className="mt-3 text-white/70 text-sm sm:text-base">
                    Local LLMs (Ollama, llama.cpp), private ChatGPT alternatives, confidential AI inference. Your data never leaves your network.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Plain English TLDR */}
          <section id="tldr" className="py-20 bg-white/5 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/images/plain-english.png"
                alt="Plain English Explanation"
                className="w-full h-full object-cover opacity-70"
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
                className="mt-12 space-y-6 text-base sm:text-lg text-white/80"
                {...staggerContainer}
              >
                <motion.p {...fadeInUp}>
                  <strong className="text-white">You don't trust the cloud.</strong> You want your files, cameras, smart home, and AI on servers <em>you</em> own—in your office, your home, or a locked rack you control.
                </motion.p>
                <motion.p {...fadeInUp}>
                  <strong className="text-white">You're tired of consultants who just resell SaaS.</strong> You need someone who codes, racks hardware, configures firewalls, and actually understands the tech stack from bare metal to application layer.
                </motion.p>
                <motion.p {...fadeInUp}>
                  <strong className="text-white">You want privacy by default.</strong> Zero telemetry, no vendor lock-in, encrypted tunnels, and systems designed for sovereignty—not surveillance.
                </motion.p>
                <motion.p className="text-amber-500 font-medium" {...fadeInUp}>
                  That's what I build. Private digital estates for people who demand control.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Law Firms Section - PREMIUM TIER */}
          <section id="law" className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <Link href="/solutions/law-firm" className="block">
                <motion.div
                  className="rounded-2xl border-2 border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-yellow-500/5 p-8 md:p-12 hover:border-amber-500/50 hover:from-amber-500/15 hover:to-yellow-500/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  {...fadeInUp}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <img
                      src="/images/lawfirm.png"
                      alt="Law Firm Infrastructure"
                      className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-950/80 to-slate-950/90"></div>
                  </div>
                  
                  {/* Content - positioned above background */}
                  <div className="relative z-10">
                  <div className="absolute top-4 right-4 px-4 py-2 bg-amber-500 text-black text-xs font-bold rounded-full">
                    10/10 ABA COMPLIANT
                  </div>
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-8 w-8 text-amber-500" aria-hidden="true" />
                  <h2 className="text-2xl md:text-3xl font-semibold">Law Firm Enterprise Compliance Infrastructure</h2>
                </div>
                <p className="text-white/80 text-lg mb-6">
                  Premium-grade infrastructure for solo practitioners, boutique firms, and multi-partner practices. Full ABA Model Rule 1.6 compliance, attorney-client privilege protection, conflict-checking systems, and ethical wall enforcement with complete data sovereignty.
                </p>
                <div className="bg-slate-950/70 rounded-xl p-6 mb-6 border border-amber-500/20">
                  <p className="text-3xl font-bold text-amber-500">Starting at $18,000 install • $1,200+/mo managed services</p>
                  <p className="mt-2 text-white/70">
                    Includes: ABA-compliant infrastructure, secure document management system, encrypted client portals, conflict-checking database, disaster recovery, automated compliance reporting, staff training & 12-month white-glove support.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm mb-6">
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-amber-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                    </div>
                    <span className="text-white/80">ABA Model Rule 1.6 compliance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-amber-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                    </div>
                    <span className="text-white/80">Attorney-client privilege protection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-amber-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                    </div>
                    <span className="text-white/80">Secure document management (DMS)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-amber-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                    </div>
                    <span className="text-white/80">Encrypted client portals</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-amber-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                    </div>
                    <span className="text-white/80">Conflict-checking systems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-amber-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                    </div>
                    <span className="text-white/80">Ethical wall enforcement</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-amber-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                    </div>
                    <span className="text-white/80">Redundant backup systems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-amber-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                    </div>
                    <span className="text-white/80">Zero-trust network architecture</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-amber-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                    </div>
                    <span className="text-white/80">Complete audit trail logging</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-amber-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                    </div>
                    <span className="text-white/80">Business continuity planning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-amber-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                    </div>
                    <span className="text-white/80">Practice management integration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-amber-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                    </div>
                    <span className="text-white/80">Dedicated compliance specialist liaison</span>
                  </div>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-4">
                  <p className="text-amber-400 font-semibold mb-2">Why Law Firms Choose Us:</p>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>• Client data never leaves your premises — maintain attorney-client privilege sovereignty</li>
                    <li>• Avoid cloud vendor subpoenas and third-party data breaches</li>
                    <li>• Meet state bar ethical obligations with automated compliance documentation</li>
                    <li>• Scale from solo practice to multi-office firm infrastructure</li>
                    <li>• Integrate with existing practice management software (Clio, PracticePanther, etc.)</li>
                    <li>• Protected against ransomware with air-gapped backup systems</li>
                  </ul>
                </div>
                <p className="text-amber-400 text-sm italic border-t border-amber-500/20 pt-4">
                  "We finally own our data. Installation was seamless, support exceptional, and we passed our state bar audit with zero findings." — Managing Partner, Corporate Law Firm
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
                  className="rounded-2xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-pink-500/5 p-8 md:p-12 hover:border-purple-500/50 hover:from-purple-500/15 hover:to-pink-500/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  {...fadeInUp}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <img
                      src="/images/hospital.png"
                      alt="Healthcare Infrastructure"
                      className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-950/80 to-slate-950/90"></div>
                  </div>
                  
                  {/* Content - positioned above background */}
                  <div className="relative z-10">
                  <div className="absolute top-4 right-4 px-4 py-2 bg-purple-500 text-white text-xs font-bold rounded-full">
                    10/10 COMPLIANCE
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                    <Heart className="h-8 w-8 text-purple-500" aria-hidden="true" />
                    <h2 className="text-2xl md:text-3xl font-semibold">Healthcare & Medical Facilities — HIPAA-Grade Infrastructure</h2>
                  </div>
                  <p className="text-white/80 text-lg mb-6">
                    Enterprise-grade infrastructure for hospitals, clinics, and medical practices. Full HIPAA compliance, zero-trust architecture, 99.99% uptime SLA, disaster recovery, and end-to-end encryption for patient data sovereignty.
                  </p>
                  <div className="bg-slate-950/70 rounded-xl p-6 mb-6 border border-purple-500/20">
                    <p className="text-3xl font-bold text-purple-500">Starting at $35,000 install • $2,500+/mo managed services</p>
                    <p className="mt-2 text-white/70">
                      Includes: HIPAA-compliant infrastructure, redundant servers, encrypted patient records system, disaster recovery, 24/7 monitoring, audit logging, staff training & 12-month concierge support with guaranteed response times.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm mb-6">
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-purple-500/10 grid place-items-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                      </div>
                      <span className="text-white/80">HIPAA-compliant from day one</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-purple-500/10 grid place-items-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                      </div>
                      <span className="text-white/80">Electronic health records (EHR) integration</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-purple-500/10 grid place-items-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                      </div>
                      <span className="text-white/80">Redundant backup systems</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-purple-500/10 grid place-items-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                      </div>
                      <span className="text-white/80">Zero-trust network segmentation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-purple-500/10 grid place-items-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                      </div>
                      <span className="text-white/80">Complete audit trail logging</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-purple-500/10 grid place-items-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                      </div>
                      <span className="text-white/80">Business continuity planning</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-purple-500/10 grid place-items-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                      </div>
                      <span className="text-white/80">High availability clustering</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-purple-500/10 grid place-items-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                      </div>
                      <span className="text-white/80">Dedicated compliance officer liaison</span>
                    </div>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 mb-4">
                    <p className="text-purple-400 font-semibold mb-2">Why Healthcare Facilities Choose Us:</p>
                    <ul className="space-y-2 text-sm text-white/70">
                      <li>• Patient data never leaves your premises — complete sovereignty over sensitive medical records</li>
                      <li>• Avoid cloud ransomware attacks with air-gapped backup systems</li>
                      <li>• Meet OCR audit requirements with automated compliance documentation</li>
                      <li>• Scale from single clinic to multi-location hospital networks</li>
                      <li>• 99.99% uptime guarantee with failover protection for critical systems</li>
                    </ul>
                  </div>
                  <p className="text-purple-400 text-sm italic border-t border-purple-500/20 pt-4">
                    "Mission-critical infrastructure that meets every regulatory requirement. Our patient data has never been more secure." — Medical Director, Multi-Specialty Clinic
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
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                {/* Tier 1 - CLICKABLE */}
                <Link href="/packages/foundation" className="group rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all duration-300 cursor-pointer relative overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="/images/foundation.png"
                      alt="Foundation Tier"
                      fill
                      className="object-cover opacity-10 group-hover:opacity-15 transition-opacity"
                    />
                  </div>
                  {/* Content */}
                  <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-amber-500 group-hover:text-amber-400 transition">Tier 1: Foundation</h3>
                  <p className="mt-2 text-3xl font-bold">$3,500–$6,000</p>
                  <p className="mt-2 text-white/70 text-sm">Perfect for getting started</p>
                  <ul className="mt-6 space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">✓</span>
                      <span className="text-white/80">Single-node NAS or server</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">✓</span>
                      <span className="text-white/80">Basic VPN setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">✓</span>
                      <span className="text-white/80">Encrypted local backups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">✓</span>
                      <span className="text-white/80">Documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">✓</span>
                      <span className="text-white/80">30-day support</span>
                    </li>
                  </ul>
                  <div className="mt-6 text-amber-500 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </div>
                  </div>
                </Link>

                {/* Tier 2 - Featured - CLICKABLE */}
                <Link href="/packages/estate" className="group rounded-2xl border-2 border-amber-500 bg-amber-500/5 p-8 relative hover:border-amber-400 hover:bg-amber-500/10 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 cursor-pointer overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="/images/25k.webp"
                      alt="Estate Tier"
                      fill
                      className="object-cover opacity-10 group-hover:opacity-15 transition-opacity"
                    />
                  </div>
                  {/* Content Wrapper */}
                  <div className="relative z-10">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-black text-xs font-semibold rounded-full group-hover:bg-amber-400 transition">
                    MOST POPULAR
                  </div>
                  <h3 className="text-xl font-semibold text-amber-500 group-hover:text-amber-400 transition">Tier 2: Estate</h3>
                  <p className="mt-2 text-3xl font-bold">$8,000–$15,000</p>
                  <p className="mt-2 text-white/70 text-sm">Comprehensive digital estate</p>
                  <ul className="mt-6 space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">✓</span>
                      <span className="text-white/80">Multi-server deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">✓</span>
                      <span className="text-white/80">VLAN segmentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">✓</span>
                      <span className="text-white/80">Smart home integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">✓</span>
                      <span className="text-white/80">On-prem AI services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">✓</span>
                      <span className="text-white/80">Monitoring &amp; alerts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">✓</span>
                      <span className="text-white/80">90-day support</span>
                    </li>
                  </ul>
                  <div className="mt-6 text-amber-500 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </div>
                  </div>
                </Link>

                {/* Tier 3 - CLICKABLE */}
                <Link href="/packages/architect" className="group rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-purple-400/50 hover:bg-purple-400/5 transition-all duration-300 cursor-pointer relative overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="/images/architect.png"
                      alt="Architect Tier"
                      fill
                      className="object-cover opacity-10 group-hover:opacity-15 transition-opacity"
                    />
                  </div>
                  {/* Content */}
                  <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-amber-500 group-hover:text-purple-400 transition">Tier 3: Architect</h3>
                  <p className="mt-2 text-3xl font-bold">$20,000+</p>
                  <p className="mt-2 text-white/70 text-sm">Enterprise-grade infrastructure</p>
                  <ul className="mt-6 space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5 group-hover:text-purple-400 transition">✓</span>
                      <span className="text-white/80">Enterprise-grade stack</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5 group-hover:text-purple-400 transition">✓</span>
                      <span className="text-white/80">High-availability clustering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5 group-hover:text-purple-400 transition">✓</span>
                      <span className="text-white/80">Custom automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5 group-hover:text-purple-400 transition">✓</span>
                      <span className="text-white/80">Multi-site synchronization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5 group-hover:text-purple-400 transition">✓</span>
                      <span className="text-white/80">Dedicated concierge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5 group-hover:text-purple-400 transition">✓</span>
                      <span className="text-white/80">12-month SLA</span>
                    </li>
                  </ul>
                  <div className="mt-6 text-amber-500 group-hover:text-purple-400 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm mb-4">
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
                <Link href="/tiers/foundation" className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20 cursor-pointer">
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
                      <div className="inline-flex px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-semibold">
                        FOUNDATION TIER
                      </div>
                      <div className="text-amber-500 text-sm font-bold">$50k</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-500 transition">Professional NAS Deployment</h3>
                    <p className="text-white/70 text-sm mb-4">
                      Enterprise-grade Synology DS920+ with 16TB RAID 10, automated encrypted backups, and Wireguard VPN access. Replaced cloud subscriptions, achieving 60% cost reduction while maintaining full data sovereignty.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs px-2 py-1 rounded-md bg-amber-500/10 text-amber-500 border border-amber-500/20">Synology NAS</span>
                      <span className="text-xs px-2 py-1 rounded-md bg-slate-400/10 text-slate-400 border border-slate-400/20">RAID 10</span>
                      <span className="text-xs px-2 py-1 rounded-md bg-purple-400/10 text-purple-400 border border-purple-400/20">VPN Access</span>
                    </div>
                    <p className="text-amber-500 text-sm italic border-t border-white/10 pt-4">
                      "We finally own our data. Installation was seamless, support exceptional." — Boutique Law Firm
                    </p>
                    <div className="mt-4 text-amber-500 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Full Details <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>

                {/* Tier 2 Showcase - CLICKABLE - MOST POPULAR */}
                <Link href="/tiers/estate" className="group rounded-2xl border-2 border-amber-500/50 bg-gradient-to-b from-amber-500/5 to-transparent overflow-hidden hover:border-amber-500 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30 relative cursor-pointer">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-black text-xs font-bold rounded-full z-10">
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
                      <div className="inline-flex px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-semibold">
                        ESTATE TIER
                      </div>
                      <div className="text-amber-500 text-sm font-bold">$100k</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-500 transition">Complete Digital Estate</h3>
                    <p className="text-white/70 text-sm mb-4">
                      Multi-server deployment with pfSense firewall, segmented VLANs (smart home, office, guest), Proxmox virtualization cluster, and integrated Home Assistant. Zero-trust architecture with end-to-end encryption across all zones.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs px-2 py-1 rounded-md bg-amber-500/10 text-amber-500 border border-amber-500/20">pfSense</span>
                      <span className="text-xs px-2 py-1 rounded-md bg-slate-400/10 text-slate-400 border border-slate-400/20">VLAN Segmentation</span>
                      <span className="text-xs px-2 py-1 rounded-md bg-purple-400/10 text-purple-400 border border-purple-400/20">Proxmox</span>
                      <span className="text-xs px-2 py-1 rounded-md bg-amber-400/10 text-amber-400 border border-amber-400/20">Home Assistant</span>
                    </div>
                    <p className="text-amber-500 text-sm italic border-t border-white/10 pt-4">
                      "Peace of mind knowing my family's entire digital life is secure and private." — Executive Client
                    </p>
                    <div className="mt-4 text-amber-500 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Full Details <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>

                {/* Tier 3 Showcase - CLICKABLE */}
                <Link href="/tiers/architect" className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-400/20 cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/images/Tier 3 Example.webp"
                      alt="Architect Tier - Enterprise-grade infrastructure with on-premises AI and GPU clustering"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="inline-flex px-3 py-1 rounded-full bg-purple-400 text-black text-xs font-semibold">
                        ARCHITECT TIER
                      </div>
                      <div className="text-purple-400 text-sm font-bold">$250k+</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition">AI Research Infrastructure</h3>
                    <p className="text-white/70 text-sm mb-4">
                      High-availability Proxmox cluster with GPU passthrough (NVIDIA A6000), on-prem LLM deployment (Ollama + Open WebUI), TrueNAS Scale storage array, and multi-site replication. Custom automation for model training and inference workloads.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs px-2 py-1 rounded-md bg-amber-500/10 text-amber-500 border border-amber-500/20">GPU Cluster</span>
                      <span className="text-xs px-2 py-1 rounded-md bg-slate-400/10 text-slate-400 border border-slate-400/20">On-Prem AI</span>
                      <span className="text-xs px-2 py-1 rounded-md bg-purple-400/10 text-purple-400 border border-purple-400/20">HA Cluster</span>
                      <span className="text-xs px-2 py-1 rounded-md bg-amber-400/10 text-amber-400 border border-amber-400/20">Multi-Site</span>
                    </div>
                    <p className="text-purple-400 text-sm italic border-t border-white/10 pt-4">
                      "Our research stays confidential. Performance exceeds cloud solutions." — AI Research Lab
                    </p>
                    <div className="mt-4 text-purple-400 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Full Details <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <p className="text-white/70 mb-6">
                  Ready to join the ranks of clients who demand excellence in digital infrastructure?
                </p>
                <Link href="/start-project">
                  <button className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-2xl transition bg-amber-500 text-black hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-950">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </button>
                </Link>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 bg-white/5">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-semibold text-center">About Ehab Allababidi</h2>
              <div className="mt-12 space-y-6 text-lg text-white/80">
                <p>
                  <strong className="text-white">Ehab Allababidi</strong> is a Chicago-based digital infrastructure architect specializing in private, sovereign technology deployments for high-net-worth individuals, boutique law firms, medical practices, and privacy-conscious professionals.
                </p>
                <p>
                  With over a decade of hands-on experience in enterprise systems engineering, Ehab delivers turnkey solutions that prioritize data sovereignty, regulatory compliance, and zero vendor lock-in. His technical approach combines deep systems programming expertise with meticulous on-site installation and ongoing concierge support.
                </p>
                <p>
                  Rather than pushing cloud subscriptions and managed dependencies, Ehab architects infrastructure you truly own—bare metal servers, on-premises networks, HIPAA-compliant systems, and confidential AI deployments. Every engagement includes comprehensive documentation, staff training, and white-glove support designed for clients who demand excellence.
                </p>
                <p>
                  His client portfolio spans boutique law firms requiring ABA-compliant security, medical facilities navigating HIPAA regulations, executives protecting sensitive business intelligence, and discerning homeowners building luxury smart estates. Each deployment is custom-engineered to exacting standards with <strong className="text-amber-500">privacy, resilience, and longevity</strong> as foundational principles.
                </p>
                <p className="text-white/70 border-l-2 border-amber-500 pl-6 italic">
                  "If you don't own the hardware, you don't own the data. I build systems where you control everything—from the silicon to the encryption keys."
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-semibold text-center">Contact</h2>
              <p className="mt-4 text-center text-white/70">
                Ready to build your digital estate? Let's talk.
              </p>
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h3 className="font-semibold mb-4">Get In Touch</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-amber-500" aria-hidden="true" />
                        <a href="mailto:defcon5ready@gmail.com" className="hover:underline focus:underline focus:outline-none">
                          defcon5ready@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-amber-500" aria-hidden="true" />
                        <a href="tel:+17739200030" className="hover:underline focus:underline focus:outline-none">
                          (773) 920-0030
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-amber-500" aria-hidden="true" />
                        <a href="/onepager.html" target="_blank" className="hover:underline focus:underline focus:outline-none">
                          One-pager PDF
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h3 className="font-semibold mb-4">Schedule</h3>
                    <a
                      href="https://calendly.com/defcon5ready/intro"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-amber-500 hover:underline focus:underline focus:outline-none"
                    >
                      <Calendar className="h-5 w-5" aria-hidden="true" />
                      Book a 20-min intro call
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="font-semibold mb-4">Send a Message</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>

          {/* Self-Audit Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4">
              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8">
                <h2 className="text-2xl font-semibold mb-4">Quick Self-Audit</h2>
                <p className="text-white/80 mb-6">
                  Not sure if you need a digital estate? Ask yourself:
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Do you trust Big Tech with your most sensitive files?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Are your home cameras streaming to someone else's cloud?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Could you survive if your SaaS vendor shut you out tomorrow?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Do you know where your backups actually live?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Is your smart home exposing your entire network to the internet?</span>
                  </li>
                </ul>
                <p className="mt-6 text-amber-500 font-medium">
                  If you answered "no" or "I'm not sure" to any of these, let's fix it.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white/60 text-sm">
                © {new Date().getFullYear()} Ehab Allababidi. All rights reserved.
              </div>
              <div className="flex items-center gap-4 text-white/60 text-sm font-mono">
                <a href="/humans.txt" className="hover:text-amber-500 focus:text-amber-500 focus:outline-none transition-colors" title="The architects behind this digital creation">
                  {'//'} HUMANS
                </a>
                <span className="text-white/30">|</span>
                <a href="/robots.txt" className="hover:text-amber-500 focus:text-amber-500 focus:outline-none transition-colors" title="Instructions for the crawlers">
                  {'//'} MACHINES
                </a>
                <span className="text-white/30">|</span>
                <a href="/map" className="hover:text-amber-500 focus:text-amber-500 focus:outline-none transition-colors" title="The complete blueprint - Interactive site architecture">
                  {'//'} MAP
                </a>
                <span className="text-white/30">|</span>
                <a href="/secret" className="text-amber-500/60 hover:text-amber-500 focus:text-amber-500 focus:outline-none inline-flex items-center gap-1 transition-colors" title="For those who seek the truth">
                  <Lock className="h-3 w-3" aria-hidden="true" />
                  {'//'} VAULT
                </a>
              </div>
            </div>
            <div className="mt-4 text-center text-white/50 text-xs">
              <div className="mb-2">
                <a href="/challenge" className="text-amber-500 hover:text-amber-400 font-mono transition-colors">
                  {'//'} HIRING: $120k+ Senior Infrastructure Architect - 15 impossible puzzles await
                </a>
              </div>
              Analytics enabled for performance optimization. No personal data collected.{' '}
              <a href="https://vercel.com/docs/analytics" target="_blank" rel="noreferrer" className="underline hover:text-white/70">
                Learn more about Vercel Analytics
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

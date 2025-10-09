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
  const shouldReduceMotion = useReducedMotion();

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

      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white blue-texture">
        {/* Header */}
        <motion.header
          className={`sticky top-0 z-50 backdrop-blur border-b transition-all duration-300 ${isScrolled ? 'border-blue-500/30 bg-slate-900/90' : 'border-blue-500/20'}`}
          initial={shouldReduceMotion ? false : { y: -50 }}
          animate={shouldReduceMotion ? false : { y: 0 }}
          transition={shouldReduceMotion ? {} : { duration: 0.3, ease: "easeOut" }}
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
                  Ehab Allababidi —{' '}
                  <span className="text-amber-500">Private AI Systems Architect</span>
                </motion.h1>
                <motion.p
                  className="mt-6 text-white/80 text-base sm:text-lg md:text-xl max-w-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Building confidential, on-premise AI infrastructures for founders and labs. From GPU clusters to autonomous agents — deployed, secured, and operational in days.
                </motion.p>
                <motion.div
                  className="mt-8 flex flex-wrap gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <a href="#contact">
                    <motion.button
                      className="inline-flex items-center justify-center px-5 py-3 font-medium rounded-2xl transition bg-blue-500 text-black hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950 text-sm sm:text-base"
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
                  className="mt-6 text-xs sm:text-sm text-white/70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  On-prem NAS/VMs • Zero-trust security • Smart estates • Local AI
                </motion.div>
                <motion.div
                  className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Based in Chicago, IL — Serving Chicagoland & Beyond</span>
                </motion.div>
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full blue-glow"
                    animate={shouldReduceMotion ? false : { scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
                    transition={shouldReduceMotion ? {} : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  ></motion.div>
                  <Image
                    src="/me.jpg"
                    alt="Ehab Allababidi - Digital Estate Architect, Chicago's Premier Infrastructure Specialist"
                    width={400}
                    height={400}
                    priority
                    quality={75}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    sizes="(max-width: 768px) 300px, 400px"
                    className="relative rounded-2xl border-2 border-blue-500/50 shadow-2xl object-cover w-full max-w-sm blue-glow"
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
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
                  {...scaleIn}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className="h-12 w-12 rounded-xl bg-blue-500/10 grid place-items-center mb-4">
                    <Server className="h-6 w-6 text-blue-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium">Private Servers</h3>
                  <p className="mt-3 text-white/70 text-sm sm:text-base">
                    On-prem NAS (Synology, TrueNAS), VMs (Proxmox, ESXi), and secure home servers. Full control, zero cloud lock-in, local backups.
                  </p>
                </motion.div>
                <motion.div
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
                  {...scaleIn}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className="h-12 w-12 rounded-xl bg-blue-500/10 grid place-items-center mb-4">
                    <Lock className="h-6 w-6 text-blue-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium">Zero-Trust Networks</h3>
                  <p className="mt-3 text-white/70 text-sm sm:text-base">
                    Wireguard VPNs, VLAN segmentation, pfSense/OPNsense firewalls, and multi-factor auth. Bulletproof perimeter, encrypted everything.
                  </p>
                </motion.div>
                <motion.div
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
                  {...scaleIn}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className="h-12 w-12 rounded-xl bg-blue-500/10 grid place-items-center mb-4">
                    <Brain className="h-6 w-6 text-blue-500" aria-hidden="true" />
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
                <motion.p className="text-blue-500 font-medium" {...fadeInUp}>
                  That's what I build. Private digital estates for people who demand control.
                </motion.p>
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
                  className="rounded-2xl border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-yellow-500/5 p-8 md:p-12 hover:border-blue-500/50 hover:from-blue-500/15 hover:to-yellow-500/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
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
                  <div className="relative z-10">
                  <div className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-black text-xs font-bold rounded-full">
                    10/10 ABA COMPLIANT
                  </div>
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-8 w-8 text-blue-500" aria-hidden="true" />
                  <h2 className="text-2xl md:text-3xl font-semibold">Law Firm Enterprise Compliance Infrastructure</h2>
                </div>
                <p className="text-white/80 text-lg mb-6">
                  Premium-grade infrastructure for solo practitioners, boutique firms, and multi-partner practices. Full ABA Model Rule 1.6 compliance, attorney-client privilege protection, conflict-checking systems, and ethical wall enforcement with complete data sovereignty.
                </p>
                <div className="bg-slate-950/70 rounded-xl p-6 mb-6 border border-blue-500/20">
                  <p className="text-3xl font-bold text-blue-500">Starting at $18,000 install • $1,200+/mo managed services</p>
                  <p className="mt-2 text-white/70">
                    Includes: ABA-compliant infrastructure, secure document management system, encrypted client portals, conflict-checking database, disaster recovery, automated compliance reporting, staff training & 12-month white-glove support.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm mb-6">
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-white/80">ABA Model Rule 1.6 compliance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-white/80">Attorney-client privilege protection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-white/80">Secure document management (DMS)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-white/80">Encrypted client portals</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-white/80">Conflict-checking systems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-white/80">Ethical wall enforcement</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-white/80">Redundant backup systems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-white/80">Zero-trust network architecture</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-white/80">Complete audit trail logging</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-white/80">Business continuity planning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-white/80">Practice management integration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-white/80">Dedicated compliance specialist liaison</span>
                  </div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-4">
                  <p className="text-blue-500 font-semibold mb-2">Why Law Firms Choose Us:</p>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>• Client data never leaves your premises — maintain attorney-client privilege sovereignty</li>
                    <li>• Avoid cloud vendor subpoenas and third-party data breaches</li>
                    <li>• Meet state bar ethical obligations with automated compliance documentation</li>
                    <li>• Scale from solo practice to multi-office firm infrastructure</li>
                    <li>• Integrate with existing practice management software (Clio, PracticePanther, etc.)</li>
                    <li>• Protected against ransomware with air-gapped backup systems</li>
                  </ul>
                </div>
                <p className="text-blue-500 text-sm italic border-t border-blue-500/20 pt-4">
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
                  <div className="relative z-10">
                  <div className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white text-xs font-bold rounded-full">
                    10/10 COMPLIANCE
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                    <Heart className="h-8 w-8 text-blue-500" aria-hidden="true" />
                    <h2 className="text-2xl md:text-3xl font-semibold">Healthcare & Medical Facilities — HIPAA-Grade Infrastructure</h2>
                  </div>
                  <p className="text-white/80 text-lg mb-6">
                    Enterprise-grade infrastructure for hospitals, clinics, and medical practices. Full HIPAA compliance, zero-trust architecture, 99.99% uptime SLA, disaster recovery, and end-to-end encryption for patient data sovereignty.
                  </p>
                  <div className="bg-slate-950/70 rounded-xl p-6 mb-6 border border-blue-500/20">
                    <p className="text-3xl font-bold text-blue-500">Starting at $35,000 install • $2,500+/mo managed services</p>
                    <p className="mt-2 text-white/70">
                      Includes: HIPAA-compliant infrastructure, redundant servers, encrypted patient records system, disaster recovery, 24/7 monitoring, audit logging, staff training & 12-month concierge support with guaranteed response times.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm mb-6">
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/10 grid place-items-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      </div>
                      <span className="text-white/80">HIPAA-compliant from day one</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/10 grid place-items-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      </div>
                      <span className="text-white/80">Electronic health records (EHR) integration</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/10 grid place-items-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      </div>
                      <span className="text-white/80">Redundant backup systems</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/10 grid place-items-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      </div>
                      <span className="text-white/80">Zero-trust network segmentation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/10 grid place-items-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      </div>
                      <span className="text-white/80">Complete audit trail logging</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/10 grid place-items-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      </div>
                      <span className="text-white/80">Business continuity planning</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/10 grid place-items-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      </div>
                      <span className="text-white/80">High availability clustering</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/10 grid place-items-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      </div>
                      <span className="text-white/80">Dedicated compliance officer liaison</span>
                    </div>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-4">
                    <p className="text-blue-500 font-semibold mb-2">Why Healthcare Facilities Choose Us:</p>
                    <ul className="space-y-2 text-sm text-white/70">
                      <li>• Patient data never leaves your premises — complete sovereignty over sensitive medical records</li>
                      <li>• Avoid cloud ransomware attacks with air-gapped backup systems</li>
                      <li>• Meet OCR audit requirements with automated compliance documentation</li>
                      <li>• Scale from single clinic to multi-location hospital networks</li>
                      <li>• 99.99% uptime guarantee with failover protection for critical systems</li>
                    </ul>
                  </div>
                  <p className="text-blue-500 text-sm italic border-t border-blue-500/20 pt-4">
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
                <Link href="/packages/architect" className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/20 cursor-pointer">
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
                      <span className="text-xs px-2 py-1 rounded-md bg-amber-400/10 text-blue-500 border border-blue-500/20">VPN Access</span>
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
                      <span className="text-xs px-2 py-1 rounded-md bg-amber-400/10 text-blue-500 border border-blue-500/20">Proxmox</span>
                      <span className="text-xs px-2 py-1 rounded-md bg-amber-400/10 text-blue-500 border border-blue-500/20">Home Assistant</span>
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
                <Link href="/tiers/architect" className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/20 cursor-pointer">
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
                      <div className="inline-flex px-3 py-1 rounded-full bg-amber-400 text-black text-xs font-semibold">
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
                      <span className="text-xs px-2 py-1 rounded-md bg-amber-400/10 text-blue-500 border border-blue-500/20">HA Cluster</span>
                      <span className="text-xs px-2 py-1 rounded-md bg-amber-400/10 text-blue-500 border border-blue-500/20">Multi-Site</span>
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
                <p className="text-white/70 mb-6">
                  Ready to join the ranks of clients who demand excellence in digital infrastructure?
                </p>
                <Link href="/start-project">
                  <button className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-2xl transition bg-blue-500 text-black hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950">
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
                  <strong className="text-white">Ehab Allababidi</strong> is a Chicago-based digital infrastructure architect specializing in private, sovereign technology deployments for high-net-worth individuals, boutique law firms, medical practices, privacy-conscious professionals throughout Chicagoland and beyond.
                </p>
                <p>
                  With over a decade of hands-on experience in enterprise systems engineering, Ehab delivers turnkey solutions that prioritize data sovereignty, regulatory compliance, zero vendor lock-in. His technical approach combines deep systems programming expertise with meticulous on-site installation and ongoing concierge support.
                </p>
                <p className="text-white/70 border-l-2 border-blue-500 pl-6 italic">
                  "If you don't own the hardware, you don't own the data. I build systems where you control everything—from the silicon to the encryption keys."
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold">Get In Touch</h2>
                <p className="mt-4 text-white/70 text-lg">
                  Let's Build Something Exceptional
                </p>
                <p className="mt-2 text-white/60">
                  Ready to deploy private AI infrastructure? Schedule a consultation or reach out directly.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Email Card */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-500/50 transition">
                  <div className="flex items-center gap-2 mb-3">
                    <Mail className="h-5 w-5 text-blue-500" aria-hidden="true" />
                    <h3 className="font-semibold">Email Inquiry</h3>
                  </div>
                  <p className="text-sm text-white/60 mb-4">
                    For proposals, partnerships, and technical documentation.
                  </p>
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
                  <p className="text-sm text-white/60 mb-4">
                    Speak directly with an engineer or strategist.
                  </p>
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
                  <p className="text-sm text-white/60 mb-4">
                    Tailored system design, risk analysis, and deployment roadmap.
                  </p>
                  <p className="text-blue-500 font-medium mb-2">Expert strategy session</p>
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
                  <p className="text-white/60 text-sm mb-6">Response within 24 hours</p>
                  <ContactForm />
                  <p className="mt-4 text-xs text-white/50 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                  <p className="mt-2 text-xs text-white/60 text-center">
                    Response time: Within 24 hours on business days
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
        </main>

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
      </div>
    </>
  );
}

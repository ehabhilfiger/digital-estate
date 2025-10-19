"use client";

import Image from "next/image";
import Link from "next/link";
import { Shield, Server, Home, Brain, ArrowRight, Phone, Mail, Calendar, Lock, Menu, X } from 'lucide-react';
import ContactForm from './ContactForm';
import { AnimatePresence, motion, useReducedMotion, type MotionProps } from 'framer-motion';
import { useEffect, useState, type MouseEvent } from 'react';
import SectionNav from "@/app/components/home/SectionNav";
import RegulatedEstates from "@/app/components/home/RegulatedEstates";
import DarkDeckSection from "@/app/components/home/DarkDeckSection";
import ServicesSection from "@/app/components/home/ServicesSection";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const fadeInUp: MotionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.5, ease: easing },
  };

  const staggerContainer: MotionProps = {
    initial: "hidden",
    whileInView: "show",
    viewport: { once: true, amount: 0.2 },
    variants: {
      hidden: { opacity: 0, y: 12 },
      show: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
      },
    },
  };

  const scaleIn: MotionProps = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.45, ease: easing },
  };

  const PRIMARY_NAV = [
    { href: "#accomp", label: "Elite Builds" },
    { href: "#regulated", label: "Regulated Estates" },
    { href: "#darkdeck", label: "Dark Deck" },
    { href: "#services", label: "What I Deliver" },
    { href: "#about", label: "Engagement" },
    { href: "#contact", label: "Contact" },
  ] as const;

  const eliteBuilds = [
    {
      id: 'build-01',
      image: {
        src: '/images/Tier 1 Example.png',
        alt: 'Private NAS estate with encrypted backup infrastructure',
      },
      badge: 'ELITE BUILD 01',
      investment: 'Starting from $50k–$250k',
      title: 'Private NAS Estate',
      description:
        'Synology DS920+ configured with 16TB RAID 10, immutable snapshots, and WireGuard access for a boutique law firm. Replaced cloud subscriptions and restored ownership of sensitive case files.',
      tags: ['Synology NAS', 'RAID 10', 'WireGuard VPN'],
      href: '/tiers/foundation',
      quote: '"We finally own our data. Installation was seamless." — Boutique Law Firm',
    },
    {
      id: 'build-02',
      href: '/tiers/estate',
      image: {
        src: '/images/secret-room.png',
        alt: 'Segmented estate command center with dedicated server room',
      },
      badge: 'ELITE BUILD 02',
      investment: 'Typical investment $250k–$1m',
      title: 'Segmented Estate Command Center',
      description:
        'Multi-server estate with pfSense perimeter, segmented VLANs, Proxmox virtualization, and Home Assistant orchestration. Built for an executive family demanding zero-trust security in every room.',
      tags: ['pfSense', 'VLAN Segmentation', 'Proxmox', 'Home Assistant'],
      quote: '"Our estate finally feels untouchable." — Executive Client',
    },
    {
      id: 'build-03',
      href: '/tiers/architect',
      image: {
        src: '/images/250k-tier.png',
        alt: 'AI research estate with GPU cluster and air-gapped storage',
      },
      badge: 'ELITE BUILD 03',
      investment: 'Typical investment $1m+',
      title: 'AI Research Estate',
      description:
        'High-availability Proxmox cluster with GPU passthrough, on-prem LLM deployment, and TrueNAS Scale storage. Multi-site replication keeps mission-critical AI datasets sovereign and lightning fast.',
      tags: ['GPU Cluster', 'On-Prem AI', 'HA Proxmox', 'Multi-Site Sync'],
      quote: '"Our research stays private and faster than the cloud." — AI Lab',
    },
  ] as const;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Digital Estate Architect',
    url: 'https://digital-estate-orcin.vercel.app',
    logo: 'https://digital-estate-orcin.vercel.app/logo.png',
    sameAs: [
      'https://www.linkedin.com/in/ehab-allababidi',
      'https://github.com/ehaballa',
    ],
    description:
      'Private digital estates engineered by Ehab Allababidi: sovereign infrastructure, on-prem AI, zero-trust networks, concierge stewardship.',
    areaServed: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chicago',
        addressRegion: 'IL',
        addressCountry: 'US',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Elite Digital Estate Engagements',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Elite Build Program',
          description: 'Bespoke digital estates with on-prem AI, zero-trust networks, and concierge stewardship.',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            price: 50000,
            minPrice: 50000,
            priceType: 'Starting price',
          },
        },
      ],
    },
    makesOffer: [
      {
        '@type': 'Service',
        name: 'Private Infrastructure Engineering',
        areaServed: ['United States', 'Remote engagements'],
        provider: {
          '@type': 'Person',
          name: 'Ehab Allababidi',
          jobTitle: 'Digital Estate Architect',
        },
      },
      {
        '@type': 'Service',
        name: 'Zero-Trust Network Design',
      },
      {
        '@type': 'Service',
        name: 'On-Prem AI Deployment',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-773-920-0030',
        contactType: 'customer service',
        email: 'defcon5ready@gmail.com',
        availableLanguage: ['English'],
      },
    ],
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://digital-estate-orcin.vercel.app/#founder',
        name: 'Ehab Allababidi',
        jobTitle: 'Digital Estate Architect',
        email: 'defcon5ready@gmail.com',
        sameAs: [
          'https://www.linkedin.com/in/ehab-allababidi',
          'https://github.com/ehaballa',
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'Digital Estate Architect',
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://digital-estate-orcin.vercel.app/#business',
        name: 'Ehab Allababidi - Digital Estate Architect',
        description:
          'Professional IT consulting specializing in private digital infrastructure for high-net-worth individuals and boutique firms',
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
  } as const;

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsLoaded(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 500);
      
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (typeof document === "undefined") return;
    const { body } = document;
    if (isMenuOpen) {
      const previous = body.style.overflow;
      body.style.overflow = 'hidden';
      return () => {
        body.style.overflow = previous;
      };
    }
    body.style.removeProperty('overflow');
  }, [isMenuOpen]);

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      event.preventDefault();
      const id = href.slice(1);
      const node = typeof document !== 'undefined' ? document.getElementById(id) : null;
      if (node) {
        node.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth', block: 'start' });
        if (typeof window !== 'undefined') {
          window.history.replaceState(null, '', `#${id}`);
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-300 focus:text-slate-900 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      >
        Skip to content
      </a>

      <motion.div
        className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: easing }}
      >
        <motion.header
          className={`sticky top-0 z-50 border-b backdrop-blur transition-all duration-300 ${isScrolled ? 'border-white/15 bg-slate-950/85 shadow-lg shadow-emerald-500/5' : 'border-white/10'}`}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: easing }}
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Digital Estate Architect"
                width={36}
                height={36}
                className="rounded-xl border border-white/10"
                priority
              />
              <span className="font-semibold tracking-tight text-sm sm:text-base text-white/80">
                Digital Estate Architect
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/70" aria-label="Primary">
              {PRIMARY_NAV.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(event) => handleAnchorClick(event, href)}
                  className="hover:text-white focus:text-white focus:outline-none focus:underline"
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3 md:hidden">
              <a
                href="#contact"
                onClick={(event) => handleAnchorClick(event, '#contact')}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:border-white/30 hover:text-white"
              >
                Consult
              </a>
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:border-white/30 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <span className="sr-only">Open navigation</span>
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.header>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-nav"
              className="fixed inset-0 z-[70] bg-slate-950/95 backdrop-blur-xl md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: easing }}
            >
              <div className="flex items-center justify-between px-6 pt-6">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">Navigate</span>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:border-white/30 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  <span className="sr-only">Close navigation</span>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav
                id="mobile-navigation"
                className="mt-8 flex flex-col gap-4 px-6 pb-6 overflow-y-auto max-h-[calc(100vh-200px)]"
                aria-label="Mobile navigation"
              >
                {PRIMARY_NAV.map(({ href, label }) => (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={(event) => handleAnchorClick(event, href)}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease: easing }}
                    className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-5 text-lg font-medium text-white/80 shadow-[0_18px_60px_-42px_rgba(56,189,248,0.8)] backdrop-blur min-h-[60px] active:scale-95 transition-transform"
                  >
                    {label}
                    <ArrowRight className="h-5 w-5 flex-shrink-0" />
                  </motion.a>
                ))}
              </nav>
              <div className="mt-4 px-6 pb-6">
                <div className="mb-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-center">
                  <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">Limited Availability</p>
                  <p className="text-sm text-amber-200 mt-1">Only 2 Q4 2025 slots remaining</p>
                </div>
                <div className="rounded-2xl border border-white/12 bg-white/5 px-5 py-5 text-sm text-white/75 backdrop-blur">
                  <p className="uppercase tracking-[0.18em] text-white/55 text-xs">Concierge hotline</p>
                  <a
                    href="tel:+17739200030"
                    className="mt-3 block text-xl font-semibold text-white min-h-[44px] flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    (773) 920-0030
                  </a>
                  <a
                    href="mailto:defcon5ready@gmail.com"
                    className="mt-3 block text-white/70 underline min-h-[44px] flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    defcon5ready@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <SectionNav />

        <motion.main id="main-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pb-20">
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
                transition={{ duration: 10, repeat: Infinity, ease: easing }}
              />
              <motion.div
                className="absolute bottom-12 -right-36 h-80 w-80 rounded-full bg-gradient-to-tr from-amber-500/35 via-purple-500/25 to-transparent blur-3xl"
                animate={shouldReduceMotion ? {} : { y: [0, -20, 0], x: [0, -16, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: easing }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(20,40,60,0.25)_0%,_transparent_60%)]" />
            </motion.div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20 grid md:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-start">
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
                animate={isLoaded ? { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.45, ease: easing }
                } : { opacity: 0, y: 14 }}
              >
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: easing }}
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
                  transition={{ duration: 0.3, delay: 0.12, ease: easing }}
                >
                  No SaaS leash. I design, rack, and harden on-prem AI systems that answer only to you.
                </motion.p>
                <motion.div
                  className="mt-4 flex flex-col gap-2"
                  initial={shouldReduceMotion ? undefined : { opacity: 0 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.14, ease: easing }}
                >
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-white/60">Currently running</span>
                    <a 
                      href="https://darkdeck.ai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-blue-400 hover:text-blue-300 transition"
                    >
                      DarkDeck
                      <ArrowRight className="h-3 w-3" />
                    </a>
                    <span className="text-white/60">— projected</span>
                    <span className="font-semibold text-emerald-400">$100M valuation</span>
                    <span className="text-white/60">by end of Q4 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-amber-300 font-semibold">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                      </span>
                      Only 2 estate slots remaining this quarter
                    </span>
                    <span className="text-white/40">|</span>
                    <a 
                      href="https://transparencypage.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-emerald-400 transition text-xs"
                    >
                      Transparency Page
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  className="mt-6 grid gap-4 text-sm text-white/75 sm:text-base"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.16, ease: easing }}
                >
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-white">One accountable architect.</p>
                      <p className="text-white/70">I run the rack plan, firmware, automations, and stewardship without passing you off.</p>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[{
                      Icon: Shield,
                      label: 'Air-gapped security, segmented zones, red-team drills'
                    }, {
                      Icon: Server,
                      label: 'GPU clusters & NAS tuned for your workloads'
                    }, {
                      Icon: Brain,
                      label: 'Private LLM orchestration with guardrails'
                    }, {
                      Icon: Home,
                      label: 'Estate automation for sensors, AV, BMS, safes'
                    }].map(({ Icon, label }) => (
                      <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        <Icon className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                        <span className="text-left text-sm leading-snug text-white/80 sm:text-base sm:leading-tight">{label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  className="mt-8 flex flex-wrap gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.25, ease: easing }}
                >
                  <Link href="/assessment">
                    <motion.button
                      className="inline-flex min-h-[44px] min-w-[140px] items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-300 via-blue-400 to-amber-300 px-6 py-4 text-base font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.05, rotate: -0.5 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                    >
                      Take 2-min assessment <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </motion.button>
                  </Link>
                  <a href="#contact">
                    <motion.button
                      className="inline-flex min-h-[44px] min-w-[140px] items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-slate-950"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                    >
                      Book a consult
                    </motion.button>
                  </a>
                </motion.div>
              </motion.div>
              <motion.div
                className="hidden md:flex flex-col items-center sticky top-24 h-fit"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={isLoaded ? { 
                  opacity: 1, 
                  scale: 1,
                  transition: { duration: 0.8, ease: easing }
                } : { opacity: 0, scale: 0.96 }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute -inset-6 rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(79,255,209,0.18)_0%,_rgba(12,24,40,0)_55%)]"
                    animate={shouldReduceMotion ? {} : { opacity: [0.75, 0.5, 0.75] }}
                    transition={{ duration: 6, repeat: Infinity, ease: easing }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-emerald-400/15 via-blue-500/10 to-transparent blur-3xl"
                    animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1], opacity: [0.25, 0.4, 0.25] }}
                    transition={{ duration: 8, repeat: Infinity, ease: easing }}
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
                    className="relative z-10 w-[420px] h-[420px] rounded-[26px] border border-white/10 bg-slate-950/60 object-cover shadow-[0_40px_80px_-40px_rgba(6,182,212,0.45)]"
                  />
                </div>
                <motion.div
                  className="mt-6 w-[420px] rounded-2xl border border-white/20 bg-slate-950/90 px-5 py-4 text-center text-sm font-medium text-white backdrop-blur-xl shadow-2xl"
                  initial={{ opacity: 0, y: 12 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: easing }}
                >
                  10+ sovereign estates • 50+ deployments • 100% concierge delivery
                </motion.div>
                <motion.div
                  className="mt-4 w-[420px] inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 backdrop-blur"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Based in Chicago — deploying discreetly worldwide
                </motion.div>
                <motion.div
                  className="mt-4 w-[420px] flex flex-wrap gap-2 justify-center text-xs sm:text-sm text-white/70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.55 }}
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

          {/* Elite Build Portfolio */}
          <section id="accomp" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm mb-4 font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                  </span>
                  <span>Only 2 Q4 2025 slots remaining</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-center">Elite Build Portfolio</h2>
              <p className="mt-4 text-center text-white/70 max-w-2xl mx-auto">
                World-class digital estates representing the pinnacle of private infrastructure engineering—custom-tailored, meticulously secured, and built for longevity.
              </p>
              <div className="mt-6 text-center">
                <Link href="/assessment">
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 hover:bg-emerald-400/20 transition font-semibold text-sm">
                    <Shield className="h-4 w-4" />
                    Not sure which tier? Take the assessment
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
              <div className="mt-12 grid md:grid-cols-3 gap-8">
                {eliteBuilds.map(({ id, href, image, badge, investment, title, description, tags, quote }) => (
                  <Link
                    key={id}
                    href={href}
                    className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={85}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <div className="inline-flex px-2 py-1 rounded-md bg-red-500/90 text-white text-[10px] font-bold backdrop-blur-sm">
                          HIGH DEMAND
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <div className="inline-flex px-3 py-1 rounded-full bg-blue-500 text-black text-xs font-semibold">
                          {badge}
                        </div>
                        <div className="text-blue-500 text-sm font-bold">{investment}</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition">{title}</h3>
                      <p className="text-white/70 text-sm mb-4">
                        {description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-md bg-blue-500/10 text-blue-500 border border-blue-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-blue-500 text-sm italic border-t border-white/10 pt-4">
                        {quote}
                      </p>
                      <div className="mt-4 text-blue-500 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                        Book this build <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-white/70 mb-6">Ready to map your build? Let’s lock in the first strategy call.</p>
                <Link href="/start-project">
                  <button className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-2xl transition bg-blue-500 text-black hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </button>
                </Link>
              </div>
            </div>
          </section>

          <RegulatedEstates fadeInUp={fadeInUp} />

          <DarkDeckSection fadeInUp={fadeInUp} />

          <ServicesSection
            fadeInUp={fadeInUp}
            staggerContainer={staggerContainer}
            scaleIn={scaleIn}
          />

          {/* Engagement Flow */}
          <section id="engagement" className="py-16">
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
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs mb-4 font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                  </span>
                  <span>2 Q4 2025 slots remaining • Next availability: Q1 2026</span>
                </div>
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
                    href="https://calendly.com/defcon5ready/new-meeting-1"
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
          transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: easing }}
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
                <a href="https://darkdeck.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-500/60 hover:text-blue-500 focus:text-blue-500 focus:outline-none inline-flex items-center gap-1 transition-colors">
                  <Lock className="h-3 w-3" aria-hidden="true" />
                  {'//'} DARK DECK access point
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

      {/* Sticky Mobile CTA */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: isScrolled ? 0 : 100, opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3, ease: easing }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-black via-black to-transparent pointer-events-none"
      >
        <a
          href="https://calendly.com/defcon5ready/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-semibold text-center shadow-xl active:scale-95 transition-all pointer-events-auto"
        >
          <span className="flex items-center justify-center gap-2">
            <Calendar className="h-5 w-5" />
            Book Consultation
            <span className="inline-flex items-center gap-1.5 ml-2 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-400"></span>
              </span>
              2 slots left
            </span>
          </span>
        </a>
      </motion.div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-50 p-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-2xl shadow-blue-600/30 transition-all active:scale-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Scroll to top"
          >
            <ArrowRight className="h-5 w-5 rotate-[-90deg]" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

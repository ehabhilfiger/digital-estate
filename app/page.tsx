import Image from "next/image";
import { Shield, Server, Lock, Home, Brain, ArrowRight, Phone, Mail, FileText, Calendar } from 'lucide-react';
import ContactForm from './ContactForm';

export default function HomePage() {
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
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-400 focus:text-black focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
      >
        Skip to content
      </a>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-emerald-400/10 grid place-items-center">
                <Shield className="h-5 w-5 text-emerald-400" aria-hidden="true" />
              </div>
              <span className="font-semibold tracking-tight">Digital Estate Architect</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80" aria-label="Main navigation">
              <a href="#services" className="hover:text-white focus:text-white focus:outline-none focus:underline">Services</a>
              <a href="#tldr" className="hover:text-white focus:text-white focus:outline-none focus:underline">Plain-English</a>
              <a href="#law" className="hover:text-white focus:text-white focus:outline-none focus:underline">For Law Firms</a>
              <a href="#work" className="hover:text-white focus:text-white focus:outline-none focus:underline">Packages</a>
              <a href="#accomp" className="hover:text-white focus:text-white focus:outline-none focus:underline">Accomplishments</a>
              <a href="#about" className="hover:text-white focus:text-white focus:outline-none focus:underline">About</a>
              <a href="#contact" className="hover:text-white focus:text-white focus:outline-none focus:underline">Contact</a>
            </nav>
          </div>
        </header>

        <main id="main-content">
          {/* Hero Section */}
          <section className="relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                  Private Servers, Smart Estates, &amp; On-Prem AI —
                  <span className="block text-emerald-400">built and secured by a programmer-installer.</span>
                </h1>
                <p className="mt-6 text-white/80 text-lg md:text-xl max-w-xl">
                  I design, install, and maintain <span className="text-white">private digital estates</span>: on-prem servers, zero-trust networks, luxury smart home systems, and confidential AI — tailored for high-end homes and boutique firms.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#contact">
                    <button className="inline-flex items-center justify-center px-4 py-2 font-medium rounded-2xl transition bg-emerald-400 text-black hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950">
                      Book a consult <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </button>
                  </a>
                  <a href="#work">
                    <button className="inline-flex items-center justify-center px-4 py-2 font-medium rounded-2xl transition bg-white/10 border border-white/10 text-white hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-950">
                      View packages
                    </button>
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
                  <span className="inline-flex items-center gap-2">
                    <Server className="h-4 w-4 text-emerald-400" aria-hidden="true" /> On-prem NAS/VMs
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Lock className="h-4 w-4 text-emerald-400" aria-hidden="true" /> Zero-trust security
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Home className="h-4 w-4 text-emerald-400" aria-hidden="true" /> Smart estates
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Brain className="h-4 w-4 text-emerald-400" aria-hidden="true" /> Local AI
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-400/20 blur-3xl rounded-full"></div>
                  <Image
                    src="/headshot-placeholder.svg"
                    alt="Ehab Allababidi - Digital Estate Architect"
                    width={400}
                    height={400}
                    priority
                    className="relative rounded-2xl border border-white/10"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Trust Section */}
          <section className="py-12 border-y border-white/10 bg-white/5">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-emerald-400">10+</div>
                  <div className="mt-2 text-white/70">Years of Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400">50+</div>
                  <div className="mt-2 text-white/70">Systems Deployed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400">100%</div>
                  <div className="mt-2 text-white/70">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-semibold text-center">What I Deliver</h2>
              <p className="mt-4 text-center text-white/70 max-w-2xl mx-auto">
                Three pillars of sovereign infrastructure—built for privacy, security, and total control.
              </p>
              <div className="mt-12 grid md:grid-cols-3 gap-8">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <div className="h-12 w-12 rounded-xl bg-emerald-400/10 grid place-items-center mb-4">
                    <Server className="h-6 w-6 text-emerald-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-medium">Private Servers</h3>
                  <p className="mt-3 text-white/70">
                    On-prem NAS (Synology, TrueNAS), VMs (Proxmox, ESXi), and secure home servers. Full control, zero cloud lock-in, local backups.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <div className="h-12 w-12 rounded-xl bg-emerald-400/10 grid place-items-center mb-4">
                    <Lock className="h-6 w-6 text-emerald-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-medium">Zero-Trust Networks</h3>
                  <p className="mt-3 text-white/70">
                    Wireguard VPNs, VLAN segmentation, pfSense/OPNsense firewalls, and multi-factor auth. Bulletproof perimeter, encrypted everything.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <div className="h-12 w-12 rounded-xl bg-emerald-400/10 grid place-items-center mb-4">
                    <Brain className="h-6 w-6 text-emerald-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-medium">On-Prem AI</h3>
                  <p className="mt-3 text-white/70">
                    Local LLMs (Ollama, llama.cpp), private ChatGPT alternatives, confidential AI inference. Your data never leaves your network.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Plain English TLDR */}
          <section id="tldr" className="py-20 bg-white/5">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-semibold text-center">In Plain English</h2>
              <div className="mt-12 space-y-6 text-lg text-white/80">
                <p>
                  <strong className="text-white">You don't trust the cloud.</strong> You want your files, cameras, smart home, and AI on servers <em>you</em> own—in your office, your home, or a locked rack you control.
                </p>
                <p>
                  <strong className="text-white">You're tired of consultants who just resell SaaS.</strong> You need someone who codes, racks hardware, configures firewalls, and actually understands the tech stack from bare metal to application layer.
                </p>
                <p>
                  <strong className="text-white">You want privacy by default.</strong> Zero telemetry, no vendor lock-in, encrypted tunnels, and systems designed for sovereignty—not surveillance.
                </p>
                <p className="text-emerald-400 font-medium">
                  That's what I build. Private digital estates for people who demand control.
                </p>
              </div>
            </div>
          </section>

          {/* Law Firms Section */}
          <section id="law" className="py-20">
            <div className="max-w-4xl mx-auto px-4">
              <div className="rounded-2xl border-2 border-emerald-400/30 bg-emerald-400/5 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-8 w-8 text-emerald-400" aria-hidden="true" />
                  <h2 className="text-2xl md:text-3xl font-semibold">Law Firm Starter Compliance Package</h2>
                </div>
                <p className="text-white/80 text-lg mb-6">
                  Perfect for solo practitioners and boutique firms. Get client-data-safe infrastructure with on-prem backups, secure file sharing, and ethical compliance—no cloud vendor lock-in.
                </p>
                <div className="bg-slate-950/50 rounded-xl p-6 mb-6">
                  <p className="text-2xl font-bold text-emerald-400">From $4,800 install • $350+/mo concierge</p>
                  <p className="mt-2 text-white/70">
                    Includes: Synology/TrueNAS setup, VPN access, encrypted backups, documentation &amp; 3 months white-glove support.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-emerald-400/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-white/80">ABA-compliant data security</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-emerald-400/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-white/80">Local document management</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-emerald-400/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-white/80">Secure client portals</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-emerald-400/10 grid place-items-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-white/80">Disaster recovery planning</span>
                  </div>
                </div>
              </div>
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
                {/* Tier 1 */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <h3 className="text-xl font-semibold text-emerald-400">Tier 1: Foundation</h3>
                  <p className="mt-2 text-3xl font-bold">$3,500–$6,000</p>
                  <p className="mt-2 text-white/70 text-sm">Perfect for getting started</p>
                  <ul className="mt-6 space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      <span className="text-white/80">Single-node NAS or server</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      <span className="text-white/80">Basic VPN setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      <span className="text-white/80">Encrypted local backups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      <span className="text-white/80">Documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      <span className="text-white/80">30-day support</span>
                    </li>
                  </ul>
                </div>

                {/* Tier 2 - Featured */}
                <div className="rounded-2xl border-2 border-emerald-400 bg-emerald-400/5 p-8 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-400 text-black text-xs font-semibold rounded-full">
                    MOST POPULAR
                  </div>
                  <h3 className="text-xl font-semibold text-emerald-400">Tier 2: Estate</h3>
                  <p className="mt-2 text-3xl font-bold">$8,000–$15,000</p>
                  <p className="mt-2 text-white/70 text-sm">Comprehensive digital estate</p>
                  <ul className="mt-6 space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      <span className="text-white/80">Multi-server deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      <span className="text-white/80">VLAN segmentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      <span className="text-white/80">Smart home integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      <span className="text-white/80">On-prem AI services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      <span className="text-white/80">Monitoring &amp; alerts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      <span className="text-white/80">90-day support</span>
                    </li>
                  </ul>
                </div>

                {/* Tier 3 */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <h3 className="text-xl font-semibold text-emerald-400">Tier 3: Architect</h3>
                  <p className="mt-2 text-3xl font-bold">$20,000+</p>
                  <p className="mt-2 text-white/70 text-sm">Enterprise-grade infrastructure</p>
                  <ul className="mt-6 space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      <span className="text-white/80">Enterprise-grade stack</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      <span className="text-white/80">High-availability clustering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      <span className="text-white/80">Custom automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      <span className="text-white/80">Multi-site synchronization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      <span className="text-white/80">Dedicated concierge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      <span className="text-white/80">12-month SLA</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Accomplishments & Case Studies */}
          <section id="accomp" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-semibold text-center">Accomplishments &amp; Case Studies</h2>
              <p className="mt-4 text-center text-white/70 max-w-2xl mx-auto">
                Real projects for real clients. Privacy-first infrastructure that works.
              </p>
              <div className="mt-12 grid md:grid-cols-3 gap-8">
                <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 flex items-center justify-center">
                    <Server className="h-16 w-16 text-emerald-400" aria-hidden="true" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">Boutique Law Firm NAS</h3>
                    <p className="mt-2 text-white/70 text-sm">
                      Deployed Synology DS920+ with 16TB RAID, VPN access, and automated encrypted backups. Replaced Dropbox, cut costs by 60%.
                    </p>
                    <p className="mt-4 text-emerald-400 text-sm italic">
                      "We finally own our data. Ehab made it seamless." — Managing Partner
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-blue-400/20 to-blue-600/20 flex items-center justify-center">
                    <Lock className="h-16 w-16 text-blue-400" aria-hidden="true" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">Executive Home Network</h3>
                    <p className="mt-2 text-white/70 text-sm">
                      Built zero-trust network with pfSense firewall, Wireguard VPN, and segmented IoT VLAN. Smart home, office, and guest networks fully isolated.
                    </p>
                    <p className="mt-4 text-blue-400 text-sm italic">
                      "Peace of mind knowing my family's data is secure." — Tech Executive
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-purple-400/20 to-purple-600/20 flex items-center justify-center">
                    <Brain className="h-16 w-16 text-purple-400" aria-hidden="true" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">Private AI Research Lab</h3>
                    <p className="mt-2 text-white/70 text-sm">
                      Configured Proxmox cluster with GPU passthrough for local LLM inference. Private ChatGPT alternative with Ollama and Open WebUI.
                    </p>
                    <p className="mt-4 text-purple-400 text-sm italic">
                      "Our research stays confidential. Worth every penny." — Research Director
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 bg-white/5">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-semibold text-center">About</h2>
              <div className="mt-12 space-y-6 text-lg text-white/80">
                <p>
                  I'm <strong className="text-white">Ehab Allababidi</strong>, a programmer-installer based in <strong className="text-white">Chicago, Illinois</strong>. I've spent over a decade building secure, private infrastructure for clients who refuse to compromise on data sovereignty.
                </p>
                <p>
                  I'm not your typical "cloud consultant" pushing monthly subscriptions. I build systems you own—bare metal servers, on-premises networks, and local AI—designed for privacy, resilience, and zero vendor lock-in.
                </p>
                <p>
                  My clients include boutique law firms, high-net-worth individuals, privacy-focused professionals, and anyone who understands that <strong className="text-emerald-400">if you don't own the hardware, you don't own the data.</strong>
                </p>
                <p>
                  Whether you need a secure home server, a zero-trust network, or a private AI deployment, I bring technical depth and hands-on execution. I code, I rack, I configure, and I document—everything you need to run your digital estate with confidence.
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
                        <Mail className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                        <a href="mailto:defcon5ready@gmail.com" className="hover:underline focus:underline focus:outline-none">
                          defcon5ready@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                        <a href="tel:+17739200030" className="hover:underline focus:underline focus:outline-none">
                          (773) 920-0030
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                        <a href="/onepager.html" target="_blank" className="hover:underline focus:underline focus:outline-none">
                          One-pager PDF
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h3 className="font-semibold mb-4">Schedule</h3>
                    <a
                      href="https://calendly.com/yourhandle/intro"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-emerald-400 hover:underline focus:underline focus:outline-none"
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

          {/* Gmail Signature Block */}
          <section className="py-20 bg-white/5">
            <div className="max-w-4xl mx-auto px-4">
              <div className="rounded-2xl border border-white/10 bg-white/5">
                <div className="p-6">
                  <h3 className="text-xl font-medium">Signature Email Block</h3>
                  <p className="text-white/80 text-sm mt-2">
                    Paste this into your Gmail signature (Settings → See all settings → General → Signature). Link your name to this site.
                  </p>
                  <pre className="mt-4 text-xs whitespace-pre-wrap bg-black/30 p-4 rounded-xl border border-white/10 overflow-x-auto">
{`<div style="font:14px/1.4 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial;color:#0b1220">
  <strong><a href="https://digital-estate-orcin.vercel.app" style="color:#10b981;text-decoration:none">Ehab Allababidi</a></strong> · Digital Estate Architect<br/>
  Chicago, IL • On-site & Remote<br/>
  <a href="mailto:defcon5ready@gmail.com" style="color:#10b981;text-decoration:none">defcon5ready@gmail.com</a> · (773) 920-0030<br/>
  <a href="https://digital-estate-orcin.vercel.app" style="color:#64748b;text-decoration:none">digital-estate-orcin.vercel.app</a>
</div>`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Self-Audit Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4">
              <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-8">
                <h2 className="text-2xl font-semibold mb-4">Quick Self-Audit</h2>
                <p className="text-white/80 mb-6">
                  Not sure if you need a digital estate? Ask yourself:
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>Do you trust Big Tech with your most sensitive files?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>Are your home cameras streaming to someone else's cloud?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>Could you survive if your SaaS vendor shut you out tomorrow?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>Do you know where your backups actually live?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>Is your smart home exposing your entire network to the internet?</span>
                  </li>
                </ul>
                <p className="mt-6 text-emerald-400 font-medium">
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
              <div className="flex items-center gap-4 text-white/60 text-sm">
                <a href="/humans.txt" className="hover:text-white focus:text-white focus:outline-none focus:underline">humans.txt</a>
                <span>•</span>
                <a href="/robots.txt" className="hover:text-white focus:text-white focus:outline-none focus:underline">robots.txt</a>
                <span>•</span>
                <a href="/sitemap.xml" className="hover:text-white focus:text-white focus:outline-none focus:underline">sitemap</a>
              </div>
            </div>
            <div className="mt-4 text-center text-white/50 text-xs">
              Analytics enabled for performance optimization. No personal data collected.{' '}
              <a href="https://vercel.com/docs/analytics" target="_blank" rel="noreferrer" className="underline hover:text-white/70">
                Learn more
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

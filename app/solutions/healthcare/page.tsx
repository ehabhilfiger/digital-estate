"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check, Heart, Shield, Server, Database, Lock, FileText, Users, Clock, Phone, Activity, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HealthcareSolution() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <motion.header
        className="sticky top-0 z-50 backdrop-blur border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Link href="/start-project">
            <button className="px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-400 transition font-medium text-sm">
              Schedule Consultation
            </button>
          </Link>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm mb-6">
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              HEALTHCARE SOLUTION
            </div>
          </div>
          <div className="inline-flex px-4 py-2 rounded-full bg-purple-500 text-white text-xs font-bold mb-6 ml-2">
            10/10 HIPAA COMPLIANT
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-purple-400">HIPAA-Grade Infrastructure</span> for Medical Facilities
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Patient data sovereignty starts with enterprise infrastructure. Deploy a HIPAA-compliant, zero-trust medical records system with 99.99% uptime, complete audit trails, and air-gapped backups.
          </p>
        </div>

        {/* Pricing */}
        <div className="mb-16 rounded-2xl border-2 border-purple-500 bg-gradient-to-br from-purple-500/10 to-pink-500/5 p-12 text-center">
          <div className="text-sm text-purple-400 font-semibold mb-2">ENTERPRISE PRICING</div>
          <div className="text-6xl font-bold text-purple-400 mb-4">$35,000+</div>
          <div className="text-xl text-white/80">Complete HIPAA Infrastructure Deployment</div>
          <div className="mt-4 text-white/60">Installation + Training + 12-month enterprise support + 24/7 monitoring</div>
          <div className="mt-6 text-purple-400 font-semibold">$2,500+/month managed services</div>
        </div>

        {/* Critical Alert */}
        <div className="mb-16 rounded-2xl border-2 border-red-500/50 bg-red-500/10 p-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-8 w-8 text-red-400 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-3">Healthcare Under Attack</h3>
              <p className="text-white/80 mb-4">
                Medical facilities are the #1 target for ransomware attacks. In 2024 alone, over 400 healthcare organizations were breached, exposing millions of patient records and costing an average of <strong className="text-white">$10.93 million per incident</strong>.
              </p>
              <p className="text-white/70">
                Cloud-based EHR systems create single points of failure. When your vendor goes down or gets breached, your entire practice stops. Our on-premises, air-gapped infrastructure ensures you stay operational even during cyberattacks.
              </p>
            </div>
          </div>
        </div>

        {/* Why Healthcare Needs This */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Medical Facilities Need Private Infrastructure</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <Heart className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Patient Privacy</h3>
              <p className="text-white/70 text-sm">
                HIPAA compliance demands absolute data control. No third-party cloud providers accessing sensitive patient records or medical histories.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <Shield className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Regulatory Compliance</h3>
              <p className="text-white/70 text-sm">
                Meet HIPAA, HITECH, and state-specific requirements with local-first architecture, complete audit trails, and automated compliance reporting.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <Activity className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Mission-Critical Uptime</h3>
              <p className="text-white/70 text-sm">
                99.99% uptime with redundant systems. High-availability clustering ensures patient care never stops, even during hardware failures.
              </p>
            </div>
          </div>
        </div>

        {/* What You Get */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Complete HIPAA Solution — From Deployment to Certification</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Infrastructure */}
            <div className="rounded-2xl border border-purple-500/30 bg-purple-500/5 p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Server className="h-8 w-8 text-purple-400" />
                Enterprise Infrastructure
              </h3>
              <ul className="space-y-4">
                {[
                  'Redundant TrueNAS or enterprise NAS cluster (10TB+ encrypted storage)',
                  'High-availability failover systems (99.99% uptime SLA)',
                  'HIPAA-compliant encryption (AES-256 at rest, TLS 1.3 in transit)',
                  'Zero-trust network architecture with VLAN segmentation',
                  'Automated encrypted backups (local + air-gapped off-site)',
                  'Hardware security modules (HSM) for encryption key management',
                  'Professional rack installation with enterprise UPS power',
                  'Dedicated firewall appliance (pfSense or similar)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* EHR Integration */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FileText className="h-8 w-8 text-amber-500" />
                Electronic Health Records System
              </h3>
              <ul className="space-y-4">
                {[
                  'Self-hosted EHR platform (OpenEMR, GNU Health, or custom)',
                  'HL7/FHIR integration with existing medical systems',
                  'Secure patient portal for appointments & records',
                  'E-prescribing with DEA compliance (EPCS)',
                  'Lab results integration and imaging storage (PACS)',
                  'Appointment scheduling and billing integration',
                  'Clinical decision support systems',
                  'Mobile access for physicians with 2FA',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compliance & Auditing */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Lock className="h-8 w-8 text-emerald-400" />
                HIPAA Compliance & Audit Trails
              </h3>
              <ul className="space-y-4">
                {[
                  'Complete audit logging (who accessed what, when)',
                  'Automated compliance documentation for OCR audits',
                  'Role-based access control (RBAC) for staff',
                  'Automatic session timeouts and screen locks',
                  'Breach notification automation',
                  'Business Associate Agreement (BAA) support',
                  'Annual risk assessment and gap analysis',
                  'HIPAA Security Rule technical safeguards',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Monitoring */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Clock className="h-8 w-8 text-blue-400" />
                24/7 Monitoring & Enterprise Support
              </h3>
              <ul className="space-y-4">
                {[
                  '12-month enterprise support included (renewable)',
                  '24/7 monitoring with instant alerts',
                  'Guaranteed 2-hour response time for critical issues',
                  'Remote system management and troubleshooting',
                  'Quarterly system health reviews and optimization',
                  'Disaster recovery testing (annual)',
                  'Staff training and ongoing education',
                  'Dedicated account manager and compliance specialist',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Managed Services */}
        <div className="mb-16 rounded-2xl border-2 border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-transparent p-8">
          <div className="flex items-start gap-4">
            <Phone className="h-10 w-10 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold mb-3 text-purple-300">Fully Managed Healthcare IT Services</h3>
              <p className="text-white/80 mb-4">
                Focus on patient care while we handle everything else. Our <strong>$2,500+/month managed services</strong> include 24/7 monitoring, proactive maintenance, compliance updates, staff training, and guaranteed uptime.
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  '24/7 monitoring with automated failover',
                  'Proactive security patches and system updates',
                  'Monthly compliance reports for regulatory audits',
                  'Unlimited staff training and support',
                  'Guaranteed 99.99% uptime with SLA',
                  '2-hour response time for critical issues',
                  'Annual HIPAA risk assessment included',
                  'Disaster recovery drills and business continuity planning',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/start-project">
                <button className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-400 transition font-semibold">
                  Schedule Enterprise Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Real Results */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Healthcare Facilities We've Protected</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.99%</div>
              <div className="text-white/70">Uptime Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">Zero</div>
              <div className="text-white/70">HIPAA Violations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">100%</div>
              <div className="text-white/70">OCR Audit Pass Rate</div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 space-y-4">
            <div>
              <p className="text-lg italic text-purple-400 mb-2">
                "Mission-critical infrastructure that meets every regulatory requirement. Our patient data has never been more secure, and we passed our OCR audit with zero findings."
              </p>
              <p className="text-white/60">— Medical Director, Multi-Specialty Clinic (8 Physicians)</p>
            </div>
            <div>
              <p className="text-lg italic text-amber-500 mb-2">
                "The redundant systems saved us during a power outage. While neighboring practices were down for hours, we maintained full operations with zero downtime."
              </p>
              <p className="text-white/60">— Practice Manager, Family Medicine Group</p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Perfect For</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: 'Multi-Specialty Clinics', desc: 'Complex workflows' },
              { title: 'Hospitals', desc: 'Enterprise scale' },
              { title: 'Dental Practices', desc: 'Imaging & records' },
              { title: 'Surgery Centers', desc: 'Critical uptime' },
            ].map((use, i) => (
              <div key={i} className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-6 text-center">
                <div className="text-lg font-bold mb-2">{use.title}</div>
                <div className="text-sm text-white/60">{use.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Enterprise Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'TrueNAS Enterprise',
              'OpenEMR / GNU Health',
              'Wireguard VPN',
              'HL7/FHIR Integration',
              'AES-256 Encryption',
              'pfSense Firewall',
              'High-Availability Clustering',
              'Air-Gapped Backups',
              'HSM Key Management',
              'PACS Imaging Storage',
              'LDAP/Active Directory',
              'Two-Factor Authentication',
            ].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-400/20 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Compliance Certifications */}
        <div className="rounded-2xl border-2 border-amber-500/30 bg-amber-500/5 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Compliance & Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Shield className="h-12 w-12 text-amber-500 mx-auto mb-3" />
              <h3 className="font-bold mb-2">HIPAA Compliant</h3>
              <p className="text-sm text-white/70">Full compliance with Security Rule, Privacy Rule, and Breach Notification Rule</p>
            </div>
            <div>
              <Lock className="h-12 w-12 text-purple-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">HITECH Act</h3>
              <p className="text-sm text-white/70">Meets all electronic health record security requirements</p>
            </div>
            <div>
              <FileText className="h-12 w-12 text-emerald-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">State Regulations</h3>
              <p className="text-sm text-white/70">Compliant with state-specific data residency and privacy laws</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Patient Data?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Schedule an enterprise consultation to discuss your facility's needs. We'll conduct a security assessment, design a HIPAA-compliant solution, deploy redundant infrastructure, train your staff, and provide 24/7 support.
          </p>
          <Link href="/start-project">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-purple-500 text-white rounded-2xl hover:bg-purple-400 transition font-bold text-lg shadow-lg shadow-purple-500/20">
              Schedule Enterprise Consultation
            </button>
          </Link>
          <div className="mt-6 text-white/60 text-sm">
            Starting at $35,000 | 12-month enterprise support | 99.99% uptime SLA | 24/7 monitoring
          </div>
        </div>
      </main>
    </div>
  );
}

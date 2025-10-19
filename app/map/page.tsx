"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, FileText, Briefcase, Shield, Users, Lock, Code, Terminal, Brain, ChevronRight, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SiteNode {
  id: string;
  title: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  children?: SiteNode[];
}

export default function MapPage() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [revealedNodes, setRevealedNodes] = useState<string[]>(['root']);
  const [showConnections, setShowConnections] = useState(false);

  useEffect(() => {
    // Gradually reveal nodes like Light's plans unfolding
    const timer = setTimeout(() => {
      setShowConnections(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const siteStructure: SiteNode[] = [
    {
      id: 'root',
      title: 'Digital Estate Architect',
      path: '/',
      icon: Home,
      description: 'The foundation. Where the plan begins.',
      priority: 'critical',
      children: [
        {
          id: 'services',
          title: 'Services',
          path: '/#services',
          icon: Briefcase,
          description: 'Three pillars of sovereign infrastructure',
          priority: 'high',
        },
        {
          id: 'challenge',
          title: 'The Challenge',
          path: '/challenge',
          icon: Brain,
          description: '$120k+ position. 20 impossible puzzles. $10k bonus.',
          priority: 'critical',
          children: [
            {
              id: 'humans',
              title: 'humans.txt',
              path: '/humans.txt',
              icon: Code,
              description: 'The full 20-puzzle challenge. Success rate: <0.01%',
              priority: 'critical',
            },
          ],
        },
        {
          id: 'solutions',
          title: 'Solutions',
          path: '/solutions',
          icon: Shield,
          description: 'Industry-specific infrastructure',
          priority: 'high',
          children: [
            {
              id: 'lawfirm',
              title: 'Law Firm Package',
              path: '/solutions/law-firm',
              icon: FileText,
              description: 'Starting at $4,800. Complete digital sovereignty.',
              priority: 'high',
            },
          ],
        },
        {
          id: 'elite-builds',
          title: 'Elite Builds',
          path: '/#accomp',
          icon: Users,
          description: 'Signature sovereign deployments starting at $50k',
          priority: 'high',
          children: [
            {
              id: 'elite-build-01',
              title: 'Elite Build 01: Private NAS Estate',
              path: '/packages/foundation',
              icon: Terminal,
              description: 'Starting from $50k. Sovereign storage and VPN.',
              priority: 'medium',
            },
            {
              id: 'elite-build-02',
              title: 'Elite Build 02: Estate Command Center',
              path: '/packages/estate',
              icon: Terminal,
              description: 'Typical investment $100k. Zero-trust estate networks.',
              priority: 'medium',
            },
            {
              id: 'elite-build-03',
              title: 'Elite Build 03: AI Research Estate',
              path: '/packages/architect',
              icon: Terminal,
              description: 'Typical investment $250k+. On-prem AI and HA clusters.',
              priority: 'medium',
            },
          ],
        },
        {
          id: 'vault',
          title: 'The Vault',
          path: '/secret',
          icon: Lock,
          description: 'For those who seek the truth.',
          priority: 'low',
        },
        {
          id: 'contact',
          title: 'Start Project',
          path: '/start-project',
          icon: Eye,
          description: 'Begin your digital estate.',
          priority: 'high',
        },
      ],
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'border-red-500/50 bg-red-500/10 text-red-400';
      case 'high': return 'border-blue-500/50 bg-blue-500/10 text-blue-500';
      case 'medium': return 'border-blue-500/50 bg-blue-500/10 text-blue-400';
      case 'low': return 'border-purple-500/50 bg-purple-500/10 text-purple-400';
      default: return 'border-white/20 bg-white/5 text-white';
    }
  };

  const revealNode = (nodeId: string) => {
    if (!revealedNodes.includes(nodeId)) {
      setRevealedNodes([...revealedNodes, nodeId]);
    }
    setSelectedNode(nodeId);
  };

  const renderNode = (node: SiteNode, depth: number = 0) => {
    const isRevealed = revealedNodes.includes(node.id);
    const isSelected = selectedNode === node.id;
    const Icon = node.icon;

    return (
      <motion.div
        key={node.id}
        className={`mb-4 ${depth > 0 ? 'ml-8' : ''}`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isRevealed ? 1 : 0.3, x: 0 }}
        transition={{ duration: 0.5, delay: depth * 0.1 }}
      >
        <motion.div
          className={`relative rounded-xl border-2 p-4 cursor-pointer transition-all duration-300 ${getPriorityColor(node.priority)} ${
            isSelected ? 'scale-105 shadow-lg' : 'hover:scale-102'
          }`}
          onClick={() => revealNode(node.id)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Connection line to parent */}
          {depth > 0 && showConnections && (
            <motion.div
              className="absolute -left-8 top-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />
          )}

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className={`h-12 w-12 rounded-xl ${getPriorityColor(node.priority)} grid place-items-center`}>
                <Icon className="h-6 w-6" />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-lg">{node.title}</h3>
                {node.priority === 'critical' && (
                  <span className="px-2 py-1 text-xs rounded bg-red-500/20 text-red-400 border border-red-500/30">
                    CRITICAL
                  </span>
                )}
                <Link href={node.path}>
                  <ChevronRight className="h-4 w-4 opacity-60 hover:opacity-100 transition-opacity" />
                </Link>
              </div>
              <p className="text-sm opacity-80">{node.description}</p>
              <div className="mt-2 flex items-center gap-2 text-xs opacity-60">
                <code className="px-2 py-1 rounded bg-black/30">{node.path}</code>
              </div>
            </div>
          </div>

          {/* Reveal button for children */}
          {node.children && node.children.length > 0 && (
            <AnimatePresence>
              {!revealedNodes.includes(node.children[0].id) && (
                <motion.button
                  className="mt-3 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-500 text-sm hover:bg-blue-500/20 transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    node.children?.forEach(child => revealNode(child.id));
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <span className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    Reveal {node.children.length} sub-pages
                  </span>
                </motion.button>
              )}
            </AnimatePresence>
          )}
        </motion.div>

        {/* Render children */}
        {node.children && (
          <AnimatePresence>
            {revealedNodes.includes(node.children[0]?.id) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                {node.children.map(child => renderNode(child, depth + 1))}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white egyptian-texture">
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
          <div className="flex items-center gap-4">
            <a href="/sitemap.xml" className="text-sm text-white/60 hover:text-white transition font-mono">
              sitemap.xml
            </a>
          </div>
        </div>
      </motion.header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Hero */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm mb-6 font-mono">
            {'//'} THE ARCHITECT'S MAP
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-blue-500">Site Architecture</span>
            <br />
            Strategic Overview
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-8">
            "Every page is a piece. Every link is a move. The architecture reveals the strategy."
          </p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/50"></div>
              <span className="text-white/60">Critical</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-500/50"></div>
              <span className="text-white/60">High Priority</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-500/50"></div>
              <span className="text-white/60">Medium</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-purple-500/50"></div>
              <span className="text-white/60">Low</span>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
            <div className="text-3xl font-bold text-blue-500 mb-2">13</div>
            <div className="text-sm text-white/60">Total Pages</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">20</div>
            <div className="text-sm text-white/60">Challenge Puzzles</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">40</div>
            <div className="text-sm text-white/60">Moves Ahead</div>
          </div>
        </motion.div>

        {/* Interactive Site Map */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="mb-6 p-6 rounded-xl border border-blue-500/30 bg-blue-500/5">
            <h2 className="text-xl font-bold mb-2 text-blue-500">Interactive Navigation</h2>
            <p className="text-sm text-white/70">
              Click any node to select it. Click "Reveal" buttons to expand sub-pages.
              Every page is interconnected—just like Light's plans.
            </p>
          </div>

          {siteStructure.map(node => renderNode(node))}
        </motion.div>

        {/* Death Note Easter Egg */}
        <motion.div
          className="rounded-2xl border-2 border-red-500/30 bg-gradient-to-br from-red-500/10 to-transparent p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-start gap-4">
            <Lock className="h-10 w-10 text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold mb-3 text-red-300">The Rules of This Architecture</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">01.</span>
                  <span>Every page serves a purpose. No redundancy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">02.</span>
                  <span>The challenge (/challenge) is the ultimate test. Only 0.01% will succeed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">03.</span>
                  <span>The vault (/secret) reveals itself only to those who prove worthy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">04.</span>
                  <span>This map itself is a puzzle. Have you found all the hidden connections?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">05.</span>
                  <span>Those who understand infrastructure, control the world.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Technical Details */}
        <motion.div
          className="mt-12 rounded-xl border border-white/10 bg-white/5 p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-xl font-bold mb-4">Technical Architecture</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-white/60 mb-1">Framework</div>
              <div className="font-mono">Next.js 15.5.4 (App Router)</div>
            </div>
            <div>
              <div className="text-white/60 mb-1">Rendering</div>
              <div className="font-mono">Static + Server Components</div>
            </div>
            <div>
              <div className="text-white/60 mb-1">Styling</div>
              <div className="font-mono">Tailwind CSS 4 + Framer Motion</div>
            </div>
            <div>
              <div className="text-white/60 mb-1">Deployment</div>
              <div className="font-mono">Vercel Edge Network</div>
            </div>
            <div>
              <div className="text-white/60 mb-1">SEO</div>
              <div className="font-mono">next-sitemap + JSON-LD</div>
            </div>
            <div>
              <div className="text-white/60 mb-1">Analytics</div>
              <div className="font-mono">Vercel Analytics (Privacy-First)</div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="text-white/60 mb-2">Standard Sitemap</div>
            <a
              href="/sitemap.xml"
              target="_blank"
              className="font-mono text-sm text-blue-500 hover:text-blue-500 transition-colors"
            >
              https://digital-estate-orcin.vercel.app/sitemap.xml
            </a>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

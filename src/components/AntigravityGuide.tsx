import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Bot, GitBranch, Terminal, ShieldCheck, Eye, Sparkles } from 'lucide-react';

export default function AntigravityGuide() {
  const [activeTab, setActiveTab] = useState<'manager' | 'subagents' | 'mcp' | 'verification'>('subagents');

  const features = [
    {
      id: 'subagents',
      title: 'Autonomous Subagents',
      icon: Bot,
      badge: 'Context Isolation',
      desc: 'Antigravity delegates work to specialized subagents (Frontend Specialist, Database Architect, Debugger) running in parallel. This prevents context rot and stops the AI from hallucinating or overwriting working code.',
      highlights: [
        'Isolated context windows for each domain',
        'Independent worktree branching',
        'Zero pollution of the main chat memory',
        'Parallel research and multi-file builds'
      ]
    },
    {
      id: 'manager',
      title: 'Mission Control vs Editor View',
      icon: Cpu,
      badge: 'Dual-View Architecture',
      desc: 'Antigravity separates high-level agent direction from low-level line-by-line coding. Use Mission Control (Manager View) to direct autonomous swarms, and switch to Editor View when you want surgical manual control.',
      highlights: [
        'Mission Control for roadmap orchestration',
        'Editor View with deep Gemini 3 inline completions',
        'Live terminal and background task inspector',
        'Visual diff review before accepting changes'
      ]
    },
    {
      id: 'mcp',
      title: 'Model Context Protocol (MCP)',
      icon: GitBranch,
      badge: 'Live External Tooling',
      desc: 'Connect the AI directly to your tools. With MCP servers like GitHub MCP and Database MCP, Antigravity reads issues, creates pull requests, queries databases, and commits changes without manual intervention.',
      highlights: [
        'GitHub MCP for pushing branches & PRs',
        'PostgreSQL MCP for inspecting live schemas',
        'Filesystem & Terminal command execution',
        'Extensible with custom company APIs'
      ]
    },
    {
      id: 'verification',
      title: 'Automated Browser & DOM Verification',
      icon: Eye,
      badge: 'Evidence Over Assertions',
      desc: 'Antigravity doesn’t just guess that the UI looks good—it opens headless browsers, inspects computed CSS, checks console errors, and verifies DOM elements against DESIGN.md tokens before marking tasks complete.',
      highlights: [
        'Headless Chromium page inspection',
        'Console error and network waterfall detection',
        'Exit code verification for npm/test runs',
        'No false "it works" claims without proof'
      ]
    }
  ];

  const activeFeature = features.find((f) => f.id === activeTab)!;

  return (
    <section id="antigravity" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Google Antigravity & Gemini 3 Deep Dive</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            How Google Antigravity Changes Vibe Coding Forever
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Most AI coding tools are just smart autocomplete or single-threaded chat wrappers. <strong>Google Antigravity</strong> is an <em>agent-first operating system</em> designed to coordinate autonomous AI specialists like a real engineering team.
          </p>
        </div>

        {/* Interactive Feature Tabs */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Tab Navigation */}
          <div className="lg:col-span-5 space-y-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              const isSelected = activeTab === feature.id;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id as any)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 ${
                    isSelected
                      ? 'border-blue-500/80 bg-blue-50/50 dark:bg-blue-950/20 text-zinc-900 dark:text-zinc-100 shadow-xs'
                      : 'border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-900/40 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display with Framer Motion */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 shadow-xs"
              >
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                      <activeFeature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                        {activeFeature.title}
                      </h4>
                      <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-medium">
                        {activeFeature.badge}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                  {activeFeature.desc}
                </p>

                <div className="space-y-2.5">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mb-2">
                    Key Capabilities & Advantages:
                  </h5>
                  {activeFeature.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs text-zinc-800 dark:text-zinc-200 p-2.5 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800"
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  <span>Powered by Google Gemini 3</span>
                  <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                    <Terminal className="w-3.5 h-3.5" />
                    Antigravity 2.0 Ready
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

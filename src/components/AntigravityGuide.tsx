import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PixelComputer, PixelTerminal, PixelJoystick, PixelShield } from './PixelIcons';
import { Check } from 'lucide-react';

export default function AntigravityGuide() {
  const [activeTab, setActiveTab] = useState<'manager' | 'subagents' | 'mcp' | 'verification'>('subagents');

  const features = [
    {
      id: 'subagents',
      title: 'AUTONOMOUS SUBAGENTS',
      badge: 'PARALLEL SWARM',
      desc: 'Antigravity delegates work to specialized subagents (Frontend Specialist, Database Architect, Debugger) running in parallel. This prevents context rot and stops the AI from hallucinating or overwriting working code.',
      highlights: [
        'Isolated context windows for each domain',
        'Independent git worktree branching',
        'Zero pollution of the main chat memory',
        'Parallel research and multi-file builds'
      ]
    },
    {
      id: 'manager',
      title: 'MISSION CONTROL VS EDITOR',
      badge: 'DUAL-VIEW ENGINE',
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
      title: 'MODEL CONTEXT PROTOCOL (MCP)',
      badge: 'LIVE TOOL PROTOCOL',
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
      title: 'HEADLESS BROWSER VERIFICATION',
      badge: 'EVIDENCE FIRST',
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
    <section id="antigravity" className="scroll-mt-20 py-16 md:py-24 border-b-2 border-zinc-900 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 font-pixel text-[10px] text-emerald-600 dark:text-emerald-400 mb-3 px-2 py-1 border border-emerald-500/60 bg-emerald-500/10">
            <PixelComputer className="w-3.5 h-3.5" />
            <span>STAGE 2: GOOGLE ANTIGRAVITY ENGINE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-pixel tracking-tight text-zinc-950 dark:text-zinc-50 mb-4 leading-relaxed">
            GOOGLE ANTIGRAVITY OS
          </h2>
          <p className="font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Most AI coding tools are just smart autocomplete or single-threaded chat wrappers. <strong>Google Antigravity</strong> is an <em>agent-first operating system</em> designed to coordinate autonomous AI specialists like a real engineering team.
          </p>
        </div>

        {/* Interactive Feature Tabs */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Tab Navigation */}
          <div className="lg:col-span-5 space-y-3">
            {features.map((feature) => {
              const isSelected = activeTab === feature.id;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id as any)}
                  className={`w-full text-left p-4 pixel-panel transition-all flex items-start gap-4 ${
                    isSelected
                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950'
                      : 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  <div
                    className={`w-8 h-8 flex items-center justify-center shrink-0 border ${
                      isSelected
                        ? 'border-emerald-400 bg-emerald-500 text-black'
                        : 'border-zinc-400 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800'
                    }`}
                  >
                    <PixelJoystick className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-arcade text-xs font-bold uppercase mb-1">
                      {feature.title}
                    </h3>
                    <p className={`font-mono text-[11px] line-clamp-2 leading-relaxed ${
                      isSelected ? 'text-zinc-300 dark:text-zinc-700' : 'text-zinc-500 dark:text-zinc-400'
                    }`}>
                      {feature.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="pixel-panel p-6 sm:p-8 bg-zinc-50 dark:bg-zinc-900"
              >
                <div className="flex items-center justify-between mb-4 pb-4 border-b-2 border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 border border-black bg-emerald-500 text-black shadow-[2px_2px_0px_#000]">
                      <PixelComputer className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-arcade text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 uppercase">
                        {activeFeature.title}
                      </h4>
                      <span className="font-pixel text-[9px] text-emerald-600 dark:text-emerald-400 font-medium">
                        [{activeFeature.badge}]
                      </span>
                    </div>
                  </div>
                </div>

                <p className="font-mono text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                  {activeFeature.desc}
                </p>

                <div className="space-y-2">
                  <div className="font-arcade text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                    CORE SYSTEM ABILITIES:
                  </div>
                  {activeFeature.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 font-mono text-xs text-zinc-800 dark:text-zinc-200 p-2.5 border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950"
                    >
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t-2 border-zinc-200 dark:border-zinc-800 flex items-center justify-between font-pixel text-[9px] text-zinc-500 dark:text-zinc-400">
                  <span>GEMINI 3 CORE</span>
                  <span className="text-emerald-500 flex items-center gap-1 font-bold">
                    <PixelShield className="w-3.5 h-3.5" />
                    16-BIT READY
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

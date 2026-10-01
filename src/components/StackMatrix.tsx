import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Server, Database, AlertTriangle, CheckCircle, Lightbulb, Smartphone, Cpu, Globe } from 'lucide-react';
import { TECH_STACKS } from '../data/content';

export default function StackMatrix() {
  const [selectedStackId, setSelectedStackId] = useState(TECH_STACKS[0].id);
  const currentStack = TECH_STACKS.find((s) => s.id === selectedStackId) || TECH_STACKS[0];

  return (
    <section id="stacks" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold mb-3">
            <Layers className="w-4 h-4" />
            <span>Frontend & Backend Matchmaker</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            The Battle-Tested Stack Matrix
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Stop stitching incompatible technologies together. Here are the 5 premier stack combinations used by senior engineers, with honest breakdowns of why each frontend and backend partner belongs together.
          </p>
        </div>

        {/* Tab Selector with Smooth Motion */}
        <div className="flex gap-2 pb-4 overflow-x-auto no-scrollbar mb-8">
          {TECH_STACKS.map((stack) => {
            const isSelected = stack.id === selectedStackId;
            return (
              <button
                key={stack.id}
                onClick={() => setSelectedStackId(stack.id)}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors flex items-center gap-2 ${
                  isSelected
                    ? 'text-white dark:text-zinc-950'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="active-stack-pill"
                    className="absolute inset-0 rounded-xl bg-zinc-900 dark:bg-zinc-100 z-0"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {stack.id.includes('mobile') ? (
                    <Smartphone className="w-3.5 h-3.5" />
                  ) : stack.id.includes('python') ? (
                    <Cpu className="w-3.5 h-3.5" />
                  ) : (
                    <Globe className="w-3.5 h-3.5" />
                  )}
                  {stack.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Stack Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStack.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm"
          >
            {/* Top Stack Banner */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-200 dark:border-zinc-800">
              <div>
                <div className="inline-block text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold mb-2">
                  {currentStack.badge}
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {currentStack.name}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  {currentStack.tagline}
                </p>
              </div>

              <div className="text-right sm:border-l sm:border-zinc-200 sm:dark:border-zinc-800 sm:pl-6">
                <div className="text-xs text-zinc-500 font-mono">Estimated Hosting Cost</div>
                <div className="text-xl font-bold font-mono text-zinc-900 dark:text-zinc-100">
                  {currentStack.recommendedServer.monthlyCost}
                </div>
                <div className="text-[11px] text-zinc-400">
                  {currentStack.recommendedServer.type}
                </div>
              </div>
            </div>

            {/* Architecture Trio (Frontend, Backend, Database) */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-950/60">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  <Globe className="w-4 h-4" />
                  <span>FRONTEND TIER</span>
                </div>
                <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-2">
                  {currentStack.frontend.name}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {currentStack.frontend.description}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-950/60">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                  <Server className="w-4 h-4" />
                  <span>BEST BACKEND PARTNER</span>
                </div>
                <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-2">
                  {currentStack.backend.bestPartner}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
                  {currentStack.backend.description}
                </p>
                {currentStack.backend.alternativePartners && (
                  <div className="text-[11px] text-zinc-500 font-mono">
                    <span className="font-semibold">Alternative Partners:</span>{' '}
                    {currentStack.backend.alternativePartners.join(' • ')}
                  </div>
                )}
              </div>

              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-950/60">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  <Database className="w-4 h-4" />
                  <span>DATABASE ENGINE</span>
                </div>
                <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-2">
                  {currentStack.database.name}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {currentStack.database.description}
                </p>
              </div>
            </div>

            {/* When to Use vs What to Watch Out For */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 rounded-xl border border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/40 dark:bg-emerald-950/10">
                <h5 className="font-semibold text-xs font-mono text-emerald-800 dark:text-emerald-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>When This Stack Shines</span>
                </h5>
                <ul className="space-y-2">
                  {currentStack.whenToUse.map((point, i) => (
                    <li key={i} className="text-xs text-zinc-700 dark:text-zinc-300 flex items-start gap-2 leading-relaxed">
                      <span className="text-emerald-500 font-bold shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl border border-amber-200 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-950/10">
                <h5 className="font-semibold text-xs font-mono text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <span>Beginner Traps to Watch Out For</span>
                </h5>
                <ul className="space-y-2">
                  {currentStack.watchOutFor.map((trap, i) => (
                    <li key={i} className="text-xs text-zinc-700 dark:text-zinc-300 flex items-start gap-2 leading-relaxed">
                      <span className="text-amber-500 font-bold shrink-0">•</span>
                      <span>{trap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Server Recommendation and Pro Tip */}
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  <strong className="text-zinc-900 dark:text-zinc-100 font-semibold block mb-0.5">
                    Architectural Pro-Tip:
                  </strong>
                  {currentStack.proTip}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

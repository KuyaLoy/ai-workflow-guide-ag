import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PixelSword, PixelPotion, PixelDatabase, PixelShield, PixelJoystick } from './PixelIcons';
import { AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';
import { TECH_STACKS } from '../data/content';

export default function StackMatrix() {
  const [selectedStackId, setSelectedStackId] = useState(TECH_STACKS[0].id);
  const currentStack = TECH_STACKS.find((s) => s.id === selectedStackId) || TECH_STACKS[0];

  return (
    <section id="stacks" className="scroll-mt-20 py-16 md:py-24 border-b-2 border-zinc-900 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/40 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 font-pixel text-[10px] text-emerald-600 dark:text-emerald-400 mb-3 px-2 py-1 border border-emerald-500/60 bg-emerald-500/10">
            <PixelSword className="w-3.5 h-3.5" />
            <span>STAGE 4: STACK MATCHMAKER ARSENAL</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-pixel tracking-tight text-zinc-950 dark:text-zinc-50 mb-4 leading-relaxed">
            THE 5 BATTLE-TESTED STACKS
          </h2>
          <p className="font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Stop stitching incompatible technologies together. Here are the 5 premier stack combinations used by senior engineers, with honest breakdowns of why each frontend and backend partner belongs together.
          </p>
        </div>

        {/* Tab Selector with Pixel Buttons */}
        <div className="flex gap-2 pb-4 overflow-x-auto no-scrollbar mb-8">
          {TECH_STACKS.map((stack) => {
            const isSelected = stack.id === selectedStackId;
            return (
              <button
                key={stack.id}
                onClick={() => setSelectedStackId(stack.id)}
                className={`pixel-btn px-4 py-2 font-arcade text-xs uppercase font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-emerald-500 text-black shadow-[3px_3px_0px_#000]'
                    : 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300'
                }`}
              >
                {stack.name}
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
            transition={{ duration: 0.2 }}
            className="pixel-panel p-6 sm:p-8 bg-white dark:bg-zinc-900"
          >
            {/* Top Stack Banner */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b-2 border-zinc-200 dark:border-zinc-800">
              <div>
                <span className="font-pixel text-[9px] px-2 py-0.5 border border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold mb-2 inline-block">
                  [{currentStack.badge}]
                </span>
                <h3 className="font-arcade text-xl sm:text-2xl font-bold uppercase text-zinc-900 dark:text-zinc-100">
                  {currentStack.name}
                </h3>
                <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  {currentStack.tagline}
                </p>
              </div>

              <div className="text-right sm:border-l-2 sm:border-zinc-200 sm:dark:border-zinc-800 sm:pl-6">
                <div className="font-pixel text-[9px] text-zinc-500 uppercase">Estimated Server Cost</div>
                <div className="font-pixel text-lg text-emerald-600 dark:text-emerald-400 mt-1">
                  {currentStack.recommendedServer.monthlyCost}
                </div>
                <div className="font-mono text-[10px] text-zinc-400">
                  {currentStack.recommendedServer.type}
                </div>
              </div>
            </div>

            {/* Architecture Trio (Frontend, Backend, Database) */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 border-2 border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
                <div className="flex items-center gap-2 font-pixel text-[9px] text-blue-600 dark:text-blue-400 mb-2">
                  <PixelSword className="w-4 h-4" />
                  <span>FRONTEND WEAPON</span>
                </div>
                <h4 className="font-arcade text-xs font-bold text-zinc-900 dark:text-zinc-100 mb-2 uppercase">
                  {currentStack.frontend.name}
                </h4>
                <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {currentStack.frontend.description}
                </p>
              </div>

              <div className="p-4 border-2 border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
                <div className="flex items-center gap-2 font-pixel text-[9px] text-emerald-600 dark:text-emerald-400 mb-2">
                  <PixelPotion className="w-4 h-4" />
                  <span>BEST BACKEND PARTNER</span>
                </div>
                <h4 className="font-arcade text-xs font-bold text-zinc-900 dark:text-zinc-100 mb-2 uppercase">
                  {currentStack.backend.bestPartner}
                </h4>
                <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
                  {currentStack.backend.description}
                </p>
                {currentStack.backend.alternativePartners && (
                  <div className="font-mono text-[11px] text-zinc-500">
                    <span className="font-bold">Alternative Partners:</span>{' '}
                    {currentStack.backend.alternativePartners.join(' • ')}
                  </div>
                )}
              </div>

              <div className="p-4 border-2 border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
                <div className="flex items-center gap-2 font-pixel text-[9px] text-purple-600 dark:text-purple-400 mb-2">
                  <PixelDatabase className="w-4 h-4" />
                  <span>DATABASE ENGINE</span>
                </div>
                <h4 className="font-arcade text-xs font-bold text-zinc-900 dark:text-zinc-100 mb-2 uppercase">
                  {currentStack.database.name}
                </h4>
                <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {currentStack.database.description}
                </p>
              </div>
            </div>

            {/* When to Use vs What to Watch Out For */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 border-2 border-emerald-300 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20">
                <h5 className="font-arcade text-xs font-bold uppercase text-emerald-800 dark:text-emerald-300 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>WHEN THIS STACK SHINES:</span>
                </h5>
                <ul className="space-y-2 font-mono text-xs text-zinc-700 dark:text-zinc-300">
                  {currentStack.whenToUse.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold shrink-0">&gt;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 border-2 border-amber-300 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/20">
                <h5 className="font-arcade text-xs font-bold uppercase text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <span>BEGINNER TRAPS TO AVOID:</span>
                </h5>
                <ul className="space-y-2 font-mono text-xs text-zinc-700 dark:text-zinc-300">
                  {currentStack.watchOutFor.map((trap, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold shrink-0">!</span>
                      <span>{trap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pro Tip */}
            <div className="p-4 border-2 border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div className="font-mono text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                <strong className="font-arcade text-xs uppercase text-zinc-900 dark:text-zinc-100 block mb-0.5">
                  ARCHITECTURAL PRO-TIP:
                </strong>
                {currentStack.proTip}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

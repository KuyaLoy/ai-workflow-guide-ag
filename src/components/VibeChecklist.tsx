import { useState } from 'react';
import { motion } from 'framer-motion';
import { PixelJoystick, PixelShield } from './PixelIcons';
import { Check, ShieldAlert, Award, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CHECKLIST_ITEMS } from '../data/content';

export default function VibeChecklist() {
  const [checkedIds, setCheckedIds] = useState<string[]>(['check-1', 'check-2']);

  const toggleCheck = (id: string) => {
    let nextChecked: string[];
    if (checkedIds.includes(id)) {
      nextChecked = checkedIds.filter((item) => item !== id);
    } else {
      nextChecked = [...checkedIds, id];
      // If all completed, trigger confetti!
      if (nextChecked.length === CHECKLIST_ITEMS.length) {
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
    }
    setCheckedIds(nextChecked);
  };

  const currentXp = checkedIds.length * 100;
  const maxXp = CHECKLIST_ITEMS.length * 100;
  const progressPercentage = Math.round((checkedIds.length / CHECKLIST_ITEMS.length) * 100);
  const currentLevel = Math.max(1, checkedIds.length * 12);

  const resetAll = () => {
    setCheckedIds([]);
  };

  return (
    <section id="checklist" className="scroll-mt-20 py-16 md:py-24 border-b-2 border-zinc-900 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 font-pixel text-[10px] text-emerald-600 dark:text-emerald-400 mb-3 px-2 py-1 border border-emerald-500/60 bg-emerald-500/10">
            <PixelJoystick className="w-3.5 h-3.5" />
            <span>STAGE 8: PRE-FLIGHT READINESS XP BAR</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-pixel tracking-tight text-zinc-950 dark:text-zinc-50 mb-4 leading-relaxed">
            PRE-FLIGHT READINESS
          </h2>
          <p className="font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Never push an AI-generated app to production without verifying these 8 non-negotiable architectural gates. Check them off to gain XP and level up your production readiness.
          </p>
        </div>

        {/* Gamified Retro XP Bar Container */}
        <div className="pixel-panel p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-[4px_4px_0px_#000] mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <div>
              <span className="font-pixel text-[10px] text-emerald-500 block mb-1">
                CODER LEVEL: {currentLevel} {progressPercentage === 100 ? '[MAX LEVEL]' : ''}
              </span>
              <span className="font-arcade text-base sm:text-lg font-bold uppercase text-zinc-900 dark:text-zinc-100">
                XP: {currentXp} / {maxXp} XP ({progressPercentage}%)
              </span>
            </div>
            {checkedIds.length > 0 && (
              <button
                onClick={resetAll}
                className="pixel-btn px-3 py-1 font-arcade text-xs uppercase bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center gap-1 transition-all"
              >
                <RotateCcw className="w-3 h-3" />
                <span>RESET XP</span>
              </button>
            )}
          </div>

          {/* Stepped Pixel Progress Bar */}
          <div className="w-full h-5 border-2 border-black dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-950 p-0.5 overflow-hidden">
            <motion.div
              className="h-full bg-emerald-500 shadow-[inset_0_2px_0_rgba(255,255,255,0.4)]"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {progressPercentage === 100 && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-arcade text-xs flex items-center gap-2"
            >
              <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>
                LEVEL UP! 100% PRODUCTION READY! YOUR CODEBASE IS BULLETPROOF FOR PRODUCTION.
              </span>
            </motion.div>
          )}
        </div>

        {/* Interactive Checklist Items */}
        <div className="space-y-3">
          {CHECKLIST_ITEMS.map((item) => {
            const isChecked = checkedIds.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`pixel-panel p-4 cursor-pointer select-none flex items-start gap-4 transition-all ${
                  isChecked
                    ? 'border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/20'
                    : 'bg-white dark:bg-zinc-900'
                }`}
              >
                {/* Pixel Checkbox */}
                <div
                  className={`w-6 h-6 border-2 border-black shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                    isChecked ? 'bg-emerald-500 text-black' : 'bg-white dark:bg-zinc-800'
                  }`}
                >
                  {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-pixel text-[9px] px-1.5 py-0.5 border border-zinc-400 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      [{item.category}]
                    </span>
                    {item.critical && (
                      <span className="font-pixel text-[9px] text-red-600 dark:text-red-400 flex items-center gap-0.5">
                        <ShieldAlert className="w-3 h-3" />
                        CRITICAL
                      </span>
                    )}
                  </div>
                  <h4
                    className={`font-arcade text-xs font-bold uppercase transition-colors ${
                      isChecked
                        ? 'line-through text-zinc-400 dark:text-zinc-500'
                        : 'text-zinc-900 dark:text-zinc-100'
                    }`}
                  >
                    {item.task}
                  </h4>
                  <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

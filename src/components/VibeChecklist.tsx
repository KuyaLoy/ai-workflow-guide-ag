import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldAlert, Award, RotateCcw } from 'lucide-react';
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
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
    setCheckedIds(nextChecked);
  };

  const progressPercentage = Math.round(
    (checkedIds.length / CHECKLIST_ITEMS.length) * 100
  );

  const resetAll = () => {
    setCheckedIds([]);
  };

  return (
    <section id="checklist" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold mb-3">
            <CheckCircle2 className="w-4 h-4" />
            <span>Pre-Flight Readiness Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            The Pre-Flight Vibe Checklist
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Never push an AI-generated app to production without verifying these 8 non-negotiable architectural gates. Check them off as you build.
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Launch Readiness:
              </span>
              <span className="text-sm font-mono font-bold text-zinc-900 dark:text-zinc-100">
                {progressPercentage}% Completed ({checkedIds.length}/{CHECKLIST_ITEMS.length})
              </span>
            </div>
            {checkedIds.length > 0 && (
              <button
                onClick={resetAll}
                className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          <div className="w-full h-3 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
            <motion.div
              className={`h-full rounded-full transition-all duration-300 ${
                progressPercentage === 100
                  ? 'bg-emerald-500'
                  : progressPercentage > 50
                  ? 'bg-blue-600'
                  : 'bg-amber-500'
              }`}
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
            />
          </div>

          {progressPercentage === 100 && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/60 flex items-center gap-2 text-xs font-medium"
            >
              <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>
                100% Production Ready! Your architecture is bulletproof, secure, and ready for scale.
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
                className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex items-start gap-4 ${
                  isChecked
                    ? 'border-emerald-500/60 bg-emerald-50/20 dark:bg-emerald-950/10'
                    : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border transition-colors ${
                    isChecked
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800'
                  }`}
                >
                  {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-semibold uppercase">
                      {item.category}
                    </span>
                    {item.critical && (
                      <span className="text-[10px] font-mono text-red-600 dark:text-red-400 flex items-center gap-0.5">
                        <ShieldAlert className="w-3 h-3" />
                        Critical
                      </span>
                    )}
                  </div>
                  <h4
                    className={`text-sm font-semibold transition-colors ${
                      isChecked
                        ? 'line-through text-zinc-400 dark:text-zinc-500'
                        : 'text-zinc-900 dark:text-zinc-100'
                    }`}
                  >
                    {item.task}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
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

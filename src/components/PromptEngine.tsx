import { useState } from 'react';
import { motion } from 'framer-motion';
import { PixelTerminal, PixelFloppy } from './PixelIcons';
import { Copy, Check, AlertCircle } from 'lucide-react';
import { MASTER_PROMPTS } from '../data/content';

export default function PromptEngine() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <section id="prompts" className="scroll-mt-20 py-16 md:py-24 border-b-2 border-zinc-900 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 font-pixel text-[10px] text-emerald-600 dark:text-emerald-400 mb-3 px-2 py-1 border border-emerald-500/60 bg-emerald-500/10">
            <PixelTerminal className="w-3.5 h-3.5" />
            <span>STAGE 3: MASTER PROMPT SCROLLS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-pixel tracking-tight text-zinc-950 dark:text-zinc-50 mb-4 leading-relaxed">
            LLM-TO-LLM BLUEPRINTS
          </h2>
          <p className="font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            The #1 secret of experienced vibe coders is the <strong>"LLM-to-LLM Handoff"</strong>: use conversational AI (ChatGPT, Claude 3.7, Gemini) to extract and structure your messy thoughts into a formal engineering blueprint <em>before</em> sending it to your coding agent.
          </p>
        </div>

        {/* Prompt Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {MASTER_PROMPTS.map((item, index) => {
            const isCopied = copiedId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="pixel-panel flex flex-col justify-between p-6 bg-white dark:bg-zinc-900"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="font-arcade text-[11px] px-2 py-0.5 border border-blue-500 bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold uppercase">
                      {item.role}
                    </span>
                    <span className="font-mono text-[11px] text-zinc-500">
                      {item.targetAI}
                    </span>
                  </div>

                  <h3 className="font-arcade text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-2 uppercase">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Code box */}
                  <div className="relative border-2 border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 p-4 font-mono text-xs text-zinc-800 dark:text-zinc-200 max-h-56 overflow-y-auto leading-relaxed whitespace-pre-wrap select-all shadow-inner">
                    {item.prompt}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-5 pt-4 border-t-2 border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-pixel text-[9px] text-zinc-500">
                    <PixelFloppy className="w-3.5 h-3.5" />
                    <span>ONE-CLICK COPY</span>
                  </div>

                  <button
                    onClick={() => handleCopy(item.id, item.prompt)}
                    className={`pixel-btn inline-flex items-center gap-1.5 px-4 py-2 font-arcade text-xs uppercase font-bold transition-all ${
                      isCopied
                        ? 'bg-emerald-500 text-black'
                        : 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY SCROLL</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3-Strike Rule Box */}
        <div className="pixel-panel mt-12 p-5 border-amber-400 bg-amber-50 dark:bg-amber-950/20 flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="font-mono text-xs text-amber-900 dark:text-amber-300 leading-relaxed">
            <strong className="font-arcade uppercase text-sm block mb-1">
              THE 3-STRIKE LAW FOR NOOBS:
            </strong>
            If your coding agent fails to fix a bug after two consecutive prompts, <strong>STOP</strong>. Do not keep typing "try again." Run <code className="bg-amber-200 dark:bg-amber-900/60 px-1 py-0.5 font-bold font-mono">git restore .</code> in your terminal to return to your last clean commit, then paste the error into <em>Prompt #4 (Systematic Debugger)</em> to force the AI to explain the root architectural cause before editing files.
          </div>
        </div>
      </div>
    </section>
  );
}

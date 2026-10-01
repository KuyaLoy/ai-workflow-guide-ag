import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Copy, Check, Sparkles, Bot, Code2, AlertCircle } from 'lucide-react';
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
    <section id="prompts" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>The LLM-to-LLM Prompt Engineering Playbook</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Master Blueprints: Copy & Paste Prompts That Actually Work
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
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
                className="flex flex-col justify-between p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-semibold">
                      {item.role}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                      {item.targetAI}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Code box */}
                  <div className="relative rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 font-mono text-xs text-zinc-800 dark:text-zinc-200 max-h-56 overflow-y-auto leading-relaxed whitespace-pre-wrap select-all shadow-inner">
                    {item.prompt}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-5 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                    <span>One-Click Copy</span>
                  </div>

                  <button
                    onClick={() => handleCopy(item.id, item.prompt)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                      isCopied
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Prompt</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pro-Tip Box */}
        <div className="mt-12 p-5 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/20 flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 dark:text-amber-300 leading-relaxed">
            <strong className="font-semibold block mb-0.5">The 3-Strike Rule for Beginners:</strong>
            If your coding agent fails to fix a bug after two consecutive prompts, <strong>STOP</strong>. Do not keep typing "try again." Run <code className="bg-amber-100 dark:bg-amber-900/60 px-1 py-0.5 rounded font-mono">git restore .</code> in your terminal to return to your last clean commit, then paste the error into <em>Prompt #4 (Systematic Debugger)</em> to force the AI to explain the root architectural cause before editing files.
          </div>
        </div>
      </div>
    </section>
  );
}

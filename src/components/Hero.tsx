import { ArrowRight, Terminal, Layers, Sparkles, Shield, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Anti-slop pill banner */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 text-xs text-zinc-700 dark:text-zinc-300 font-mono mb-8 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>From Karpathy's Vibe Coding to Scalable Production Engineering</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.15] mb-6">
          The Vibe Coder’s Playbook: <br />
          <span className="text-zinc-500 dark:text-zinc-400">
            Build Scalable Software With AI
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
          Vibe coding isn’t just typing prompts and hoping for the best. Learn how to direct autonomous AI subagents, pair the right frontend with the ideal backend, avoid serverless bill shock, and ship production-grade apps without writing spaghetti code.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#matchmaker"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
          >
            <span>Stack Matchmaker Quiz</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#prompts"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-semibold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <Terminal className="w-4 h-4" />
            <span>Copy Master Prompts</span>
          </a>
          <a
            href="#antigravity"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-semibold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <Cpu className="w-4 h-4 text-blue-500" />
            <span>Antigravity Guide</span>
          </a>
        </div>

        {/* 3 Core Value Pillars */}
        <div className="grid sm:grid-cols-3 gap-4 text-left">
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40">
            <div className="flex items-center gap-2.5 font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1.5">
              <Layers className="w-4 h-4 text-blue-500" />
              <span>Full Stacks with Best Partners</span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              No more guesswork. Discover why Next.js pairs best with Server Actions or Hono, why Laravel is a solo developer cheat code, and why PostgreSQL beats Mongo.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40">
            <div className="flex items-center gap-2.5 font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1.5">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span>Hosting & Security Without Shock</span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Ditch expensive serverless traps for a $5/mo VPS with Coolify. Learn wholesale domain pricing and free Cloudflare edge security.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40">
            <div className="flex items-center gap-2.5 font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>LLM-to-LLM Prompt Engineering</span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Use ChatGPT or Claude to write detailed technical specifications, then feed them to Antigravity subagents for bug-free code generation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

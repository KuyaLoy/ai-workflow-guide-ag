import { ArrowRight, Terminal } from 'lucide-react';
import { PixelComputer, PixelSword, PixelShield, PixelTerminal } from './PixelIcons';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b-2 border-zinc-900 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 pixel-grid transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Retro 8-bit Insert Coin Banner */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-black dark:border-zinc-700 bg-zinc-900 text-emerald-400 font-pixel text-[10px] mb-8 shadow-[3px_3px_0px_#000]">
          <span className="w-2 h-2 bg-emerald-400 animate-pulse"></span>
          <span>PRESS START: MASTER AI SOFTWARE ENGINEERING</span>
        </div>

        {/* Pixel Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-pixel font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.35] mb-6">
          THE VIBE CODER'S <br />
          <span className="text-emerald-500 dark:text-emerald-400">PLAYBOOK</span>
        </h1>

        {/* Arcade Subtitle */}
        <p className="max-w-3xl mx-auto font-mono text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-10">
          Vibe coding isn’t just typing prompts and hoping for the best. Master the <strong>16-bit architectural discipline</strong>: direct autonomous AI subagents, pair the optimal frontend with the ideal backend, avoid serverless bill shock, and ship production-grade apps without writing spaghetti code.
        </p>

        {/* Chunky Retro Arcade Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#matchmaker"
            className="pixel-btn inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-black font-arcade text-sm font-bold uppercase tracking-wider hover:bg-emerald-400 transition-all"
          >
            <span>START MATCHMAKER</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#prompts"
            className="pixel-btn inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-arcade text-sm uppercase tracking-wider hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
          >
            <PixelTerminal className="w-4 h-4 text-blue-500" />
            <span>COPY MASTER PROMPTS</span>
          </a>
          <a
            href="#antigravity"
            className="pixel-btn inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-arcade text-sm uppercase tracking-wider hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
          >
            <PixelComputer className="w-4 h-4 text-emerald-500" />
            <span>ANTIGRAVITY OS</span>
          </a>
        </div>

        {/* 3 Retro Pixel Pillars */}
        <div className="grid sm:grid-cols-3 gap-6 text-left">
          <div className="pixel-panel p-5 bg-white dark:bg-zinc-900">
            <div className="flex items-center gap-2 font-arcade font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-2">
              <PixelSword className="w-5 h-5 text-blue-500" />
              <span>STACK MATCHMAKER</span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-mono">
              Discover why Next.js pairs best with Server Actions or Hono, why Laravel is a solo developer cheat code, and why PostgreSQL beats Mongo.
            </p>
          </div>

          <div className="pixel-panel p-5 bg-white dark:bg-zinc-900">
            <div className="flex items-center gap-2 font-arcade font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-2">
              <PixelShield className="w-5 h-5 text-emerald-500" />
              <span>$5/MO VPS & SECURITY</span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-mono">
              Ditch $40/100GB serverless traps for a $5/mo VPS with Coolify. Learn wholesale domain pricing and free Cloudflare edge security.
            </p>
          </div>

          <div className="pixel-panel p-5 bg-white dark:bg-zinc-900">
            <div className="flex items-center gap-2 font-arcade font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-2">
              <PixelTerminal className="w-5 h-5 text-amber-500" />
              <span>LLM-TO-LLM HANDOFF</span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-mono">
              Use ChatGPT or Claude to write detailed technical specifications, then feed them to Antigravity subagents for bug-free code generation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

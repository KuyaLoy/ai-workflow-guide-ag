import { PixelComputer, PixelTerminal } from './PixelIcons';
import { Server, Zap, AlertTriangle, Check } from 'lucide-react';
import { HOSTING_GUIDE } from '../data/content';

export default function InfrastructureGuide() {
  return (
    <section id="hosting" className="scroll-mt-20 py-16 md:py-24 border-b-2 border-zinc-900 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 font-pixel text-[10px] text-emerald-600 dark:text-emerald-400 mb-3 px-2 py-1 border border-emerald-500/60 bg-emerald-500/10">
            <Server className="w-3.5 h-3.5" />
            <span>STAGE 5: INFRASTRUCTURE & VPS GUIDE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-pixel tracking-tight text-zinc-950 dark:text-zinc-50 mb-4 leading-relaxed">
            VPS VS SERVERLESS VS CPANEL
          </h2>
          <p className="font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Beginners often fall into two extremes: either paying \$0 on Vercel until an unexpected bot attack triggers a \$1,200 bandwidth bill, or struggling with slow, broken \$3/month shared cPanel hosts. Here is the honest truth about server infrastructure.
          </p>
        </div>

        {/* 4 Hosting Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {HOSTING_GUIDE.map((option, idx) => (
            <div
              key={idx}
              className={`pixel-panel p-6 sm:p-7 flex flex-col justify-between ${
                option.verdict === 'Recommended'
                  ? 'bg-blue-50/30 dark:bg-blue-950/20 border-blue-500'
                  : 'bg-zinc-50 dark:bg-zinc-900'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span
                    className={`font-pixel text-[9px] px-2 py-0.5 border ${
                      option.verdict === 'Recommended'
                        ? 'border-blue-500 bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold'
                        : option.verdict === 'Legacy Only'
                        ? 'border-red-500 bg-red-500/10 text-red-600 dark:text-red-400 font-bold'
                        : 'border-zinc-500 bg-zinc-500/10 text-zinc-700 dark:text-zinc-300 font-bold'
                    }`}
                  >
                    [{option.verdict}]
                  </span>
                  <span className="font-pixel text-xs text-emerald-600 dark:text-emerald-400">
                    {option.cost}
                  </span>
                </div>

                <h3 className="font-arcade text-lg sm:text-xl font-bold uppercase text-zinc-900 dark:text-zinc-100 mb-2">
                  {option.type}
                </h3>
                <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {option.summary}
                </p>

                <div className="font-mono text-xs text-zinc-700 dark:text-zinc-300 mb-4 pb-3 border-b border-zinc-200 dark:border-zinc-800">
                  <strong className="font-arcade uppercase">BEST FOR:</strong> <span className="text-zinc-500">{option.bestFor}</span>
                </div>

                {/* Pros and Cons */}
                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <span className="font-arcade text-xs uppercase text-emerald-600 dark:text-emerald-400 block mb-1">
                      KEY STRENGTHS:
                    </span>
                    <ul className="space-y-1">
                      {option.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-zinc-600 dark:text-zinc-400">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="font-arcade text-xs uppercase text-amber-600 dark:text-amber-400 block mb-1">
                      TRADE-OFFS & TRAPS:
                    </span>
                    <ul className="space-y-1">
                      {option.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-zinc-600 dark:text-zinc-400">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {option.secretWeapon && (
                <div className="mt-6 pt-4 border-t-2 border-zinc-200 dark:border-zinc-800 font-mono text-xs">
                  <strong className="font-arcade uppercase text-blue-600 dark:text-blue-400 block mb-0.5">
                    SECRET WEAPON:
                  </strong>
                  {option.secretWeapon}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Coolify Setup Box */}
        <div className="pixel-panel p-6 sm:p-8 bg-zinc-900 text-white border-2 border-black shadow-[4px_4px_0px_#000]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 font-pixel text-[10px] text-emerald-400 mb-2">
                <Zap className="w-4 h-4" />
                <span>THE $5/MO VERCEL ALTERNATIVE</span>
              </div>
              <h4 className="font-arcade text-lg sm:text-xl font-bold uppercase mb-2">
                Deploy Coolify on a $4.20/mo Hetzner VPS
              </h4>
              <p className="font-mono text-xs text-zinc-300 leading-relaxed">
                Spin up a clean Ubuntu 24.04 server on Hetzner (~$4.20/mo) or DigitalOcean ($6/mo). Run this single command in your terminal to install Coolify. In 5 minutes, you will have your own private Vercel clone with Git push deployments, free Let's Encrypt SSL, and one-click PostgreSQL databases.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <div className="p-3 border-2 border-emerald-500 bg-black font-mono text-xs text-emerald-400 overflow-x-auto shadow-[3px_3px_0px_#000]">
                <code>curl -fsSL https://cdn.coolify.io/coolify/install.sh | bash</code>
              </div>
              <span className="block font-pixel text-[9px] text-zinc-400 mt-2 text-right">
                [100% FREE & OPEN SOURCE]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

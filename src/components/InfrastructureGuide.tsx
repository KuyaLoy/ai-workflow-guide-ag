import { Server, Zap, AlertTriangle, ShieldCheck, DollarSign, Terminal, Check } from 'lucide-react';
import { HOSTING_GUIDE } from '../data/content';

export default function InfrastructureGuide() {
  return (
    <section id="hosting" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold mb-3">
            <Server className="w-4 h-4" />
            <span>Infrastructure & Deployment Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Where to Host: VPS vs Serverless vs cPanel
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Beginners often fall into two extremes: either paying \$0 on Vercel until an unexpected bot attack triggers a \$1,200 bandwidth bill, or struggling with slow, broken \$3/month shared cPanel hosts. Here is the honest truth about server infrastructure.
          </p>
        </div>

        {/* 4 Hosting Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {HOSTING_GUIDE.map((option, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl border transition-colors flex flex-col justify-between ${
                option.verdict === 'Recommended'
                  ? 'border-blue-500/80 bg-blue-50/20 dark:bg-blue-950/10 shadow-xs'
                  : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span
                    className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full ${
                      option.verdict === 'Recommended'
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                        : option.verdict === 'Legacy Only'
                        ? 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300'
                        : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                    }`}
                  >
                    {option.verdict}
                  </span>
                  <span className="text-sm font-bold font-mono text-zinc-900 dark:text-zinc-100">
                    {option.cost}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  {option.type}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {option.summary}
                </p>

                <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                  Best For: <span className="font-normal text-zinc-500">{option.bestFor}</span>
                </div>

                {/* Pros and Cons */}
                <div className="space-y-3 mt-4 text-xs">
                  <div>
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400 block mb-1">
                      Strengths:
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
                    <span className="font-semibold text-amber-700 dark:text-amber-400 block mb-1">
                      Trade-offs & Warnings:
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
                <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300">
                  <strong className="text-blue-600 dark:text-blue-400 font-semibold block mb-0.5">
                    Secret Weapon:
                  </strong>
                  {option.secretWeapon}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Coolify 1-Line Setup Callout */}
        <div className="p-6 sm:p-8 rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold mb-2">
                <Zap className="w-4 h-4" />
                <span>THE $5/MO VERCEL ALTERNATIVE</span>
              </div>
              <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                Deploying Coolify on a Hetzner or DigitalOcean VPS
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Spin up a clean Ubuntu 24.04 server on Hetzner (~$4.20/mo) or DigitalOcean ($6/mo). Run this single command in your terminal to install Coolify. In 5 minutes, you will have your own private Vercel clone with Git push deployments, free Let's Encrypt SSL, and one-click PostgreSQL databases.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <div className="p-3 rounded-xl bg-zinc-900 text-zinc-100 font-mono text-xs overflow-x-auto shadow-md">
                <code>curl -fsSL https://cdn.coolify.io/coolify/install.sh | bash</code>
              </div>
              <span className="block text-[11px] text-zinc-500 font-mono mt-2 text-right">
                100% Free & Open Source
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

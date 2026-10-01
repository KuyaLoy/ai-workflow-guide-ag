import { PixelShield } from './PixelIcons';
import { Globe, Lock, AlertTriangle, Check } from 'lucide-react';
import { DOMAIN_SECURITY_GUIDE } from '../data/content';

export default function DomainSecurity() {
  return (
    <section id="security" className="py-16 md:py-24 border-b-2 border-zinc-900 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/40 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 font-pixel text-[10px] text-emerald-600 dark:text-emerald-400 mb-3 px-2 py-1 border border-emerald-500/60 bg-emerald-500/10">
            <PixelShield className="w-3.5 h-3.5" />
            <span>STAGE 6: DOMAINS & CLOUDFLARE SHIELD</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-pixel tracking-tight text-zinc-950 dark:text-zinc-50 mb-4 leading-relaxed">
            WHERE TO BUY DOMAINS & FREE EDGE SECURITY
          </h2>
          <p className="font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Never pay \$25/year for domain renewals, and never pay for an SSL certificate in 2026. Here is how to buy domains at pure wholesale cost and protect your web app behind enterprise-grade edge firewalls for free.
          </p>
        </div>

        {/* Domain Registrars Comparison */}
        <div className="mb-16">
          <h3 className="font-arcade text-lg sm:text-xl font-bold uppercase text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
            <Globe className="w-5 h-5 text-blue-500" />
            <span>DOMAIN REGISTRAR COMPARISON</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {DOMAIN_SECURITY_GUIDE.registrars.map((reg, idx) => (
              <div
                key={idx}
                className={`pixel-panel p-6 flex flex-col justify-between ${
                  reg.verdict === 'Best Overall'
                    ? 'bg-white dark:bg-zinc-900 border-blue-500'
                    : reg.verdict === 'Not Recommended'
                    ? 'bg-red-50/20 dark:bg-red-950/20 border-red-500'
                    : 'bg-white dark:bg-zinc-900'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`font-pixel text-[9px] px-2 py-0.5 border ${
                        reg.verdict === 'Best Overall'
                          ? 'border-blue-500 bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold'
                          : reg.verdict === 'Not Recommended'
                          ? 'border-red-500 bg-red-500/10 text-red-600 dark:text-red-400 font-bold'
                          : 'border-zinc-500 bg-zinc-500/10 text-zinc-700 dark:text-zinc-300 font-bold'
                      }`}
                    >
                      [{reg.badge}]
                    </span>
                    <span className="font-arcade text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase">
                      {reg.verdict}
                    </span>
                  </div>

                  <h4 className="font-arcade text-lg font-bold uppercase text-zinc-900 dark:text-zinc-100 mb-1">
                    {reg.name}
                  </h4>
                  <div className="font-pixel text-xs text-emerald-600 dark:text-emerald-400 mb-4">
                    {reg.cost}
                  </div>

                  <div className="space-y-2 font-mono text-xs mb-4">
                    <span className="font-arcade uppercase text-[11px] block">PROS:</span>
                    {reg.pros.map((pro, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-zinc-600 dark:text-zinc-400">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t-2 border-zinc-200 dark:border-zinc-800 font-mono text-xs">
                  <span className="font-arcade uppercase text-[11px] text-amber-600 dark:text-amber-400 block mb-1">
                    CONS & TRAPS:
                  </span>
                  {reg.cons.map((con, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-zinc-600 dark:text-zinc-400">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5-Step Cloudflare Free Security Setup */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Lock className="w-5 h-5 text-emerald-500" />
            <h3 className="font-arcade text-lg sm:text-xl font-bold uppercase text-zinc-900 dark:text-zinc-100">
              The 5-Step Free Cloudflare Security Shield
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {DOMAIN_SECURITY_GUIDE.securitySteps.map((step) => (
              <div
                key={step.step}
                className="pixel-panel p-5 bg-white dark:bg-zinc-900 flex flex-col justify-between"
              >
                <div>
                  <div className="w-7 h-7 border border-black bg-blue-500 text-white font-pixel text-xs flex items-center justify-center font-bold mb-3 shadow-[2px_2px_0px_#000]">
                    {step.step}
                  </div>
                  <h4 className="font-arcade text-xs font-bold uppercase text-zinc-900 dark:text-zinc-100 mb-2">
                    {step.title}
                  </h4>
                  <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

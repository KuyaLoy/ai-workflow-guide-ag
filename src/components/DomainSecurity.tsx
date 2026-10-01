import { Shield, Lock, Globe, AlertTriangle, Check, ExternalLink } from 'lucide-react';
import { DOMAIN_SECURITY_GUIDE } from '../data/content';

export default function DomainSecurity() {
  return (
    <section id="security" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold mb-3">
            <Shield className="w-4 h-4" />
            <span>Domains & Edge Protection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Where to Buy Domains & Free Edge Security
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Never pay \$25/year for domain renewals, and never pay for an SSL certificate in 2026. Here is how to buy domains at pure wholesale cost and protect your web app behind enterprise-grade edge firewalls for free.
          </p>
        </div>

        {/* Domain Registrars Comparison */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
            <Globe className="w-5 h-5 text-blue-500" />
            <span>Domain Registrar Comparison</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {DOMAIN_SECURITY_GUIDE.registrars.map((reg, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-colors flex flex-col justify-between ${
                  reg.verdict === 'Best Overall'
                    ? 'border-blue-500/80 bg-white dark:bg-zinc-900 shadow-sm'
                    : reg.verdict === 'Not Recommended'
                    ? 'border-red-200 dark:border-red-950/60 bg-red-50/20 dark:bg-red-950/10'
                    : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded-md font-semibold ${
                        reg.verdict === 'Best Overall'
                          ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                          : reg.verdict === 'Not Recommended'
                          ? 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300'
                          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                      }`}
                    >
                      {reg.badge}
                    </span>
                    <span className="text-xs font-bold font-mono text-zinc-700 dark:text-zinc-300">
                      {reg.verdict}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                    {reg.name}
                  </h4>
                  <div className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
                    {reg.cost}
                  </div>

                  <div className="space-y-2 text-xs mb-4">
                    <span className="font-semibold text-zinc-700 dark:text-zinc-300 block">Pros:</span>
                    {reg.pros.map((pro, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-zinc-600 dark:text-zinc-400">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 text-xs">
                  <span className="font-semibold text-amber-700 dark:text-amber-400 block mb-1">
                    Cons / Traps:
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
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              The 5-Step Free Cloudflare Security Shield
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {DOMAIN_SECURITY_GUIDE.securitySteps.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col justify-between"
              >
                <div>
                  <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 flex items-center justify-center text-xs font-mono font-bold mb-3">
                    {step.step}
                  </div>
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
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

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Sparkles, Check, ArrowRight, RotateCcw, Copy, Layers, Server, Database, Globe } from 'lucide-react';

interface Recommendation {
  stackName: string;
  badge: string;
  frontend: string;
  backend: string;
  database: string;
  server: string;
  cost: string;
  reason: string;
  starterPrompt: string;
}

export default function StackQuiz() {
  const [appType, setAppType] = useState<string>('saas');
  const [bgSkill, setBgSkill] = useState<string>('js');
  const [budget, setBudget] = useState<string>('vps');
  const [copied, setCopied] = useState(false);

  // Compute recommendation based on selections
  const computeRecommendation = (): Recommendation => {
    if (appType === 'mobile') {
      return {
        stackName: 'React Native (Expo SDK 54) + Supabase',
        badge: 'Cross-Platform Mobile Powerhouse',
        frontend: 'React Native with Expo Router & NativeWind',
        backend: 'Supabase (Auth, Postgres, Realtime, Storage)',
        database: 'PostgreSQL (Supabase) + Local SQLite for offline caching',
        server: budget === 'free' ? 'Supabase Free Tier + Expo EAS Free' : 'Supabase Pro ($25) + Expo EAS',
        cost: budget === 'free' ? '$0 / month' : '$25 / month',
        reason: 'Expo allows you to write one React codebase that runs natively on iOS and Android. Cloud EAS builds mean you can build iPhone apps even without owning a Mac.',
        starterPrompt: 'I want to build a cross-platform mobile app using React Native, Expo SDK 54, Expo Router, and Supabase backend. Please write a modular project structure and database schema.'
      };
    }

    if (appType === 'ai') {
      return {
        stackName: 'Python FastAPI + React + PostgreSQL (pgvector)',
        badge: 'Native AI & Vector Search Stack',
        frontend: 'React 19 (Vite) with Tailwind v4 & Server-Sent Events (SSE) streaming',
        backend: 'FastAPI (Python 3.12+) with Async Endpoints',
        database: 'PostgreSQL 16+ with native `pgvector` extension for embeddings',
        server: budget === 'free' ? 'Render / Railway Free Tier' : 'Hetzner VPS ($4.20/mo) via Coolify',
        cost: budget === 'free' ? '$0 / month' : '$5 - $10 / month',
        reason: 'Python provides direct access to Google GenAI / Gemini SDK, PyTorch, and LangChain. Using pgvector inside PostgreSQL avoids expensive standalone vector databases like Pinecone.',
        starterPrompt: 'I am building an AI wrapper and RAG application. Stack: React frontend with streaming text responses, FastAPI backend, and PostgreSQL with pgvector for embeddings.'
      };
    }

    if (bgSkill === 'php' || appType === 'ecommerce') {
      return {
        stackName: 'Laravel 12 + Inertia.js (Vue 3 / React) + PostgreSQL',
        badge: 'Solo Founder E-Commerce Superpower',
        frontend: 'Inertia.js with React or Vue 3 (or Blade + Livewire)',
        backend: 'Laravel 12 (Built-in Auth, Queues, Stripe Cashier, Mailers)',
        database: 'PostgreSQL 16 or MySQL 8.4',
        server: 'Hetzner VPS ($4.20/mo) running Coolify or Laravel Forge',
        cost: '$5 - $10 / month',
        reason: 'Laravel gives you authentication, password resets, subscriptions, background queue workers, and automated schema migrations out of the box in 1 command. It saves 100+ hours of boilerplate.',
        starterPrompt: 'I am building a web application using Laravel 12 and Inertia.js with PostgreSQL. Set up the architectural spec, user authentication, and database migrations.'
      };
    }

    // Default: Next.js modern SaaS
    return {
      stackName: 'Next.js 15/16 + Server Actions + Drizzle ORM + PostgreSQL',
      badge: 'Modern Full-Stack SaaS Standard',
      frontend: 'Next.js 15/16 (App Router + React 19 Server Components)',
      backend: 'Next.js Server Actions & Route Handlers with Zod validation',
      database: 'PostgreSQL (via Supabase or Neon Serverless) with Drizzle ORM',
      server: budget === 'free' ? 'Vercel Free Tier + Neon Free' : 'Vercel (Frontend) + Hetzner VPS via Coolify (Workers/DB)',
      cost: budget === 'free' ? '$0 / month' : '$5 - $15 / month',
      reason: '100% unified TypeScript across client and server. Server Actions eliminate API boilerplate, while Drizzle ORM ensures instant, lightweight SQL execution.',
      starterPrompt: 'I want to build a scalable B2B SaaS web app using Next.js 15 App Router, Server Actions, Drizzle ORM, and PostgreSQL. Generate the initial spec and schema.'
    };
  };

  const rec = computeRecommendation();

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(rec.starterPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="matchmaker" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-center mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Interactive Matchmaker</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            What Should You Build With?
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Answer 3 quick questions. Our recommendation engine will calculate your optimal frontend, backend partner, database, and hosting setup tailored to your skill level.
          </p>
        </div>

        {/* Interactive Questions */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Question 1: App Type */}
          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40">
            <label className="block text-xs font-mono font-semibold uppercase text-zinc-500 dark:text-zinc-400 mb-3">
              1. What are you building?
            </label>
            <div className="space-y-2">
              {[
                { id: 'saas', label: 'B2B/B2C SaaS Web App' },
                { id: 'ecommerce', label: 'E-Commerce / Marketplace' },
                { id: 'ai', label: 'AI Wrapper / RAG Agent' },
                { id: 'mobile', label: 'Mobile App (iOS & Android)' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setAppType(opt.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    appType === opt.id
                      ? 'bg-blue-600 text-white font-semibold shadow-xs'
                      : 'bg-white dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60 hover:border-zinc-400'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: Skill Background */}
          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40">
            <label className="block text-xs font-mono font-semibold uppercase text-zinc-500 dark:text-zinc-400 mb-3">
              2. Your Coding Background?
            </label>
            <div className="space-y-2">
              {[
                { id: 'js', label: 'JavaScript / TypeScript' },
                { id: 'php', label: 'PHP / Laravel Familiar' },
                { id: 'python', label: 'Python / Data Science' },
                { id: 'noob', label: 'Complete Noob (Beginner)' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setBgSkill(opt.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    bgSkill === opt.id
                      ? 'bg-blue-600 text-white font-semibold shadow-xs'
                      : 'bg-white dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60 hover:border-zinc-400'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 3: Budget */}
          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40">
            <label className="block text-xs font-mono font-semibold uppercase text-zinc-500 dark:text-zinc-400 mb-3">
              3. Monthly Hosting Budget?
            </label>
            <div className="space-y-2">
              {[
                { id: 'free', label: '$0 / Month (Free Tiers)' },
                { id: 'vps', label: '$5 - $12 / Month (VPS Power)' },
                { id: 'scale', label: '$25+ / Month (Cloud Managed)' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setBudget(opt.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    budget === opt.id
                      ? 'bg-blue-600 text-white font-semibold shadow-xs'
                      : 'bg-white dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60 hover:border-zinc-400'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Recommendation Card with Framer Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${appType}-${bgSkill}-${budget}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 rounded-2xl border-2 border-blue-500/80 bg-blue-50/20 dark:bg-blue-950/20 shadow-md"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold mb-2 inline-block">
                  {rec.badge}
                </span>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                  Recommended: {rec.stackName}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-zinc-500 block">Estimated Cost:</span>
                <span className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                  {rec.cost}
                </span>
              </div>
            </div>

            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
              {rec.reason}
            </p>

            {/* Breakdown Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-blue-600 dark:text-blue-400 mb-1">
                  <Globe className="w-3.5 h-3.5" />
                  <span>FRONTEND</span>
                </div>
                <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  {rec.frontend}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
                  <Server className="w-3.5 h-3.5" />
                  <span>BACKEND PARTNER</span>
                </div>
                <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  {rec.backend}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-purple-600 dark:text-purple-400 mb-1">
                  <Database className="w-3.5 h-3.5" />
                  <span>DATABASE</span>
                </div>
                <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  {rec.database}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-amber-600 dark:text-amber-400 mb-1">
                  <Layers className="w-3.5 h-3.5" />
                  <span>HOSTING ENGINE</span>
                </div>
                <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  {rec.server}
                </div>
              </div>
            </div>

            {/* Prompt generator box */}
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                  <span>Copyable Starter Prompt for Antigravity:</span>
                </span>
                <button
                  onClick={handleCopyPrompt}
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium transition-all ${
                    copied
                      ? 'bg-emerald-600 text-white'
                      : 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Prompt</span>
                    </>
                  )}
                </button>
              </div>
              <div className="font-mono text-xs text-zinc-800 dark:text-zinc-200 bg-zinc-50 dark:bg-zinc-900 p-2.5 rounded-lg leading-relaxed select-all">
                {rec.starterPrompt}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

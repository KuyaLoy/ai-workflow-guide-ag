import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PixelJoystick, PixelSword, PixelPotion, PixelDatabase, PixelComputer } from './PixelIcons';
import { HelpCircle, Copy, Check } from 'lucide-react';

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

  const computeRecommendation = (): Recommendation => {
    if (appType === 'mobile') {
      return {
        stackName: 'React Native (Expo SDK 54) + Supabase',
        badge: 'CROSS-PLATFORM MOBILE',
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
        badge: 'AI WRAPPER & RAG ENGINE',
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
        badge: 'SOLO FOUNDER POWERHOUSE',
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
      badge: 'MODERN FULL-STACK SAAS',
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
    <section id="matchmaker" className="scroll-mt-20 py-16 md:py-24 border-b-2 border-zinc-900 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-center mx-auto">
          <div className="inline-flex items-center gap-2 font-pixel text-[10px] text-emerald-600 dark:text-emerald-400 mb-3 px-2 py-1 border border-emerald-500/60 bg-emerald-500/10">
            <PixelJoystick className="w-3.5 h-3.5" />
            <span>STAGE 7: INTERACTIVE STACK MATCHMAKER</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-pixel tracking-tight text-zinc-950 dark:text-zinc-50 mb-4 leading-relaxed">
            WHAT SHOULD YOU BUILD WITH?
          </h2>
          <p className="font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Select your preferences. Our 16-bit matchmaker engine calculates your optimal frontend weapon, backend partner, database, and hosting setup tailored to your skill level.
          </p>
        </div>

        {/* 3 Questions */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Question 1 */}
          <div className="pixel-panel p-5 bg-zinc-50 dark:bg-zinc-900">
            <label className="block font-arcade text-xs font-bold uppercase text-zinc-700 dark:text-zinc-300 mb-3">
              1. WHAT ARE YOU BUILDING?
            </label>
            <div className="space-y-2">
              {[
                { id: 'saas', label: 'B2B/B2C SaaS Web App' },
                { id: 'ecommerce', label: 'E-Commerce / Store' },
                { id: 'ai', label: 'AI Wrapper / RAG Agent' },
                { id: 'mobile', label: 'Mobile App (iOS/Android)' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setAppType(opt.id)}
                  className={`w-full text-left px-3 py-2 font-arcade text-xs uppercase transition-all ${
                    appType === opt.id
                      ? 'bg-emerald-500 text-black font-bold shadow-[2px_2px_0px_#000]'
                      : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div className="pixel-panel p-5 bg-zinc-50 dark:bg-zinc-900">
            <label className="block font-arcade text-xs font-bold uppercase text-zinc-700 dark:text-zinc-300 mb-3">
              2. YOUR CODING BACKGROUND?
            </label>
            <div className="space-y-2">
              {[
                { id: 'js', label: 'JavaScript / TypeScript' },
                { id: 'php', label: 'PHP / Laravel Familiar' },
                { id: 'python', label: 'Python / Data Science' },
                { id: 'noob', label: 'Complete Noob (Zero Code)' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setBgSkill(opt.id)}
                  className={`w-full text-left px-3 py-2 font-arcade text-xs uppercase transition-all ${
                    bgSkill === opt.id
                      ? 'bg-emerald-500 text-black font-bold shadow-[2px_2px_0px_#000]'
                      : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 3 */}
          <div className="pixel-panel p-5 bg-zinc-50 dark:bg-zinc-900">
            <label className="block font-arcade text-xs font-bold uppercase text-zinc-700 dark:text-zinc-300 mb-3">
              3. MONTHLY SERVER BUDGET?
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
                  className={`w-full text-left px-3 py-2 font-arcade text-xs uppercase transition-all ${
                    budget === opt.id
                      ? 'bg-emerald-500 text-black font-bold shadow-[2px_2px_0px_#000]'
                      : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700'
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
            transition={{ duration: 0.2 }}
            className="pixel-panel p-6 sm:p-8 bg-zinc-50 dark:bg-zinc-900 border-2 border-emerald-500 shadow-[6px_6px_0px_#000]"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b-2 border-zinc-200 dark:border-zinc-800">
              <div>
                <span className="font-pixel text-[9px] px-2 py-0.5 border border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold mb-2 inline-block">
                  [{rec.badge}]
                </span>
                <h3 className="font-arcade text-xl sm:text-2xl font-bold uppercase text-zinc-900 dark:text-zinc-50">
                  RECOMMENDED: {rec.stackName}
                </h3>
              </div>
              <div className="text-right">
                <span className="font-pixel text-[9px] text-zinc-500 block">ESTIMATED COST:</span>
                <span className="font-pixel text-lg text-emerald-600 dark:text-emerald-400">
                  {rec.cost}
                </span>
              </div>
            </div>

            <p className="font-mono text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
              {rec.reason}
            </p>

            {/* Equipment Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="p-3.5 border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                <div className="flex items-center gap-1.5 font-pixel text-[9px] text-blue-500 mb-1">
                  <PixelSword className="w-3.5 h-3.5" />
                  <span>FRONTEND</span>
                </div>
                <div className="font-arcade text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase">
                  {rec.frontend}
                </div>
              </div>

              <div className="p-3.5 border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                <div className="flex items-center gap-1.5 font-pixel text-[9px] text-emerald-500 mb-1">
                  <PixelPotion className="w-3.5 h-3.5" />
                  <span>BACKEND</span>
                </div>
                <div className="font-arcade text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase">
                  {rec.backend}
                </div>
              </div>

              <div className="p-3.5 border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                <div className="flex items-center gap-1.5 font-pixel text-[9px] text-purple-500 mb-1">
                  <PixelDatabase className="w-3.5 h-3.5" />
                  <span>DATABASE</span>
                </div>
                <div className="font-arcade text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase">
                  {rec.database}
                </div>
              </div>

              <div className="p-3.5 border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                <div className="flex items-center gap-1.5 font-pixel text-[9px] text-amber-500 mb-1">
                  <PixelComputer className="w-3.5 h-3.5" />
                  <span>HOSTING</span>
                </div>
                <div className="font-arcade text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase">
                  {rec.server}
                </div>
              </div>
            </div>

            {/* Prompt generator box */}
            <div className="p-4 border-2 border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950">
              <div className="flex items-center justify-between mb-2">
                <span className="font-pixel text-[9px] text-zinc-500 uppercase flex items-center gap-1.5">
                  <PixelComputer className="w-3.5 h-3.5 text-blue-500" />
                  <span>STARTER PROMPT FOR ANTIGRAVITY:</span>
                </span>
                <button
                  onClick={handleCopyPrompt}
                  className={`pixel-btn inline-flex items-center gap-1 px-3 py-1 font-arcade text-xs uppercase font-bold transition-all ${
                    copied
                      ? 'bg-emerald-500 text-black'
                      : 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3" />
                      <span>COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
              <div className="font-mono text-xs text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 p-2.5 leading-relaxed select-all">
                {rec.starterPrompt}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

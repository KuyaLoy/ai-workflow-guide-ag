import type { TechStack, HostingOption, PromptTemplate, ChecklistItem } from '../types';

export const TECH_STACKS: TechStack[] = [
  {
    id: 'nextjs-fullstack',
    name: 'Next.js 15/16 + Server Actions',
    tagline: 'The modern standard for TypeScript full-stack SaaS and dynamic web apps',
    badge: 'Most Popular for SaaS',
    frontend: {
      name: 'Next.js 15/16 (App Router + React 19)',
      description: 'Server Components eliminate client-side data fetching waterfalls. Zero boilerplate routing, automatic image/font optimization, and seamless TypeScript integration.'
    },
    backend: {
      bestPartner: 'Next.js Server Actions + Drizzle ORM (or Standalone Hono)',
      description: 'For standard CRUD, auth, and billing: Server Actions execute directly on the server with end-to-end type safety. For heavy background queues, WebSockets, or high-concurrency microservices, pair with a standalone Hono or FastAPI micro-service.',
      alternativePartners: ['Hono (Fastest Node/Edge API)', 'FastAPI (Python ML/AI partner)', 'Supabase Server Actions']
    },
    database: {
      name: 'PostgreSQL (via Neon or Supabase) with Drizzle ORM',
      description: 'PostgreSQL provides ACID compliance, JSONB flexibility, and rock-solid relational integrity. Drizzle ORM provides lightweight, blazing-fast SQL queries without the heavy overhead of older ORMs.'
    },
    recommendedServer: {
      type: 'Serverless + Modern VPS',
      provider: 'Vercel / Cloudflare Pages (Frontend) + Hetzner VPS via Coolify (Workers/DB)',
      monthlyCost: '$0 - $15 / month',
      reason: 'Deploy the Next.js frontend to Vercel/Cloudflare for global CDN delivery, but host your background workers and PostgreSQL database on a fixed-price VPS to avoid serverless compute bill shocks.'
    },
    whenToUse: [
      'B2B & B2C SaaS platforms with user dashboards',
      'SEO-critical web applications with dynamic content',
      'Teams wanting 100% unified TypeScript from UI to database',
      'MVPs that need to ship fast with built-in auth and server handlers'
    ],
    watchOutFor: [
      'Serverless function timeouts on long-running tasks (>15s)',
      'Accidentally leaking server code to the client (always use "use server" / "use client" boundaries carefully)',
      'High bandwidth and invocation pricing on managed cloud platforms if traffic spikes unexpectedly'
    ],
    proTip: 'Never run heavy video/file processing inside Next.js Route Handlers. Offload background jobs to an asynchronous queue or a lightweight VPS worker.'
  },
  {
    id: 'laravel-modern',
    name: 'Modern PHP / Laravel 12 Stack',
    tagline: 'The undisputed solo founder superpower: batteries-included monolithic speed',
    badge: 'Solo Developer Powerhouse',
    frontend: {
      name: 'Inertia.js + Vue 3 / React (or Blade + Livewire)',
      description: 'Inertia.js connects Laravel to React/Vue without writing a separate REST API or GraphQL layer. You get a single-page app (SPA) user experience with the developer velocity of classic server-side routing.'
    },
    backend: {
      bestPartner: 'Laravel 12 Framework (PHP 8.4)',
      description: 'Everything is built-in out of the box: authentication, authorization policies, database migrations, Eloquent ORM, scheduled cron jobs, queue workers (Redis), file storage (S3), and Stripe Cashier for subscriptions.',
      alternativePartners: ['Laravel REST API (for mobile clients)', 'Lumen / FrankenPHP standalone API']
    },
    database: {
      name: 'PostgreSQL 16+ or MySQL 8.4',
      description: 'Eloquent ORM seamlessly manages schema migrations, foreign key constraints, indexes, and soft deletes with zero third-party plumbing.'
    },
    recommendedServer: {
      type: 'Modern VPS (Hetzner, DigitalOcean) with Coolify or Laravel Forge',
      provider: 'Hetzner Cloud VPS (CAX21 / CPX21) or DigitalOcean Droplet',
      monthlyCost: '$5 - $12 / month',
      reason: 'A single $5-$10/month VPS running PHP-FPM / FrankenPHP and PostgreSQL can easily handle millions of monthly pageviews without scaling costs.'
    },
    whenToUse: [
      'Solo developers or small teams building full commercial SaaS products',
      'Complex business logic, invoicing, CRM, e-commerce, and subscription billing',
      'Applications needing robust background jobs, queues, and scheduled emails',
      'Projects where stability and developer velocity trump experimental hype'
    ],
    watchOutFor: [
      'Traditional shared cPanel hosting (avoid! It throttles PHP queues and worker daemons)',
      'Eloquent N+1 query traps (always use eager loading `with()` to prevent multiple queries)',
      'Over-relying on third-party packages when Laravel already includes native features'
    ],
    proTip: 'Use FrankenPHP with Laravel Octane on a $6 Hetzner VPS to achieve tens of thousands of requests per second with negligible memory footprint.'
  },
  {
    id: 'mern-modern',
    name: 'Modern MERN / PERN Stack',
    tagline: 'The classic JavaScript stack, evolved with TypeScript and Relational Data',
    badge: 'Beginner Friendly JavaScript',
    frontend: {
      name: 'React 19 (Vite) + Tailwind CSS v4',
      description: 'Lightweight, ultra-fast client-side single-page app bundled with Vite. Hot Module Replacement (HMR) in milliseconds and zero complex build configs.'
    },
    backend: {
      bestPartner: 'Hono or Express 5 on Node.js 22/24 LTS',
      description: 'Replace legacy bloated Express with Hono or Fastify for 5x faster request throughput, native TypeScript types, and seamless deployment across Node, Bun, and Edge runtimes.',
      alternativePartners: ['NestJS (Enterprise TypeScript structure)', 'Fastify (High-speed schema-driven)']
    },
    database: {
      name: 'PostgreSQL (PERN) or MongoDB Atlas (MERN)',
      description: 'Honest Truth for Beginners: MongoDB is great for loose document logs or catalogs, but PostgreSQL is vastly superior for user auth, transactions, and relational data. Prefer Postgres (PERN) for production apps.'
    },
    recommendedServer: {
      type: 'PaaS / Containerized VPS',
      provider: 'Render / Railway (Easy PaaS) or Hetzner VPS running Docker',
      monthlyCost: '$7 - $15 / month',
      reason: 'Run your Node API container and database with automatic SSL and zero DevOps headache.'
    },
    whenToUse: [
      'Developers already proficient in JavaScript/TypeScript looking for maximum flexibility',
      'REST APIs that serve both a web SPA and mobile clients simultaneously',
      'Real-time WebSocket applications (chatrooms, multiplayer, live feeds)'
    ],
    watchOutFor: [
      'Unstructured MongoDB schema rot (always use Mongoose schemas or Zod validation)',
      'Blocking the Node.js event loop with heavy computational loops or unhandled promises',
      'CORS configuration headaches between separate frontend and backend domains'
    ],
    proTip: 'If your frontend is on domain.com and your backend is on api.domain.com, use a reverse proxy or same-origin routing to avoid cross-site cookie headaches.'
  },
  {
    id: 'mobile-crossplatform',
    name: 'Mobile: React Native (Expo) vs Flutter',
    tagline: 'Build for both iOS and Android from a single codebase with native speed',
    badge: 'Mobile App Champions',
    frontend: {
      name: 'React Native with Expo SDK 52/54+ (or Flutter 3.x with Dart)',
      description: 'React Native (Expo) lets web React developers build native iOS & Android apps with zero Xcode/Android Studio headache. Flutter provides pixel-perfect Skia/Impeller rendering with Dart.'
    },
    backend: {
      bestPartner: 'Supabase (BaaS) or Laravel / FastAPI REST API',
      description: 'Mobile apps require stateless JWT authentication, push notifications (Expo Notifications or Firebase Cloud Messaging), and reliable offline caching (WatermelonDB or TanStack Query with SQLite).',
      alternativePartners: ['Firebase Authentication & Firestore', 'Node.js Hono API']
    },
    database: {
      name: 'Cloud PostgreSQL (Supabase) + Local SQLite',
      description: 'Store server data in PostgreSQL. For offline-first user experience, sync local changes using SQLite or MMKV on the device.'
    },
    recommendedServer: {
      type: 'Managed Backend + Cloud Build',
      provider: 'EAS (Expo Application Services) for iOS/Android builds + Supabase for Backend',
      monthlyCost: '$0 - $25 / month',
      reason: 'Expo EAS builds your production IPA and APK binaries in the cloud, meaning you do not even need an expensive Mac to build iOS apps.'
    },
    whenToUse: [
      'Consumer apps that need to be in both Apple App Store and Google Play Store',
      'Projects leveraging camera, geolocation, Bluetooth, or native device sensors',
      'SaaS products offering a companion mobile app to their web portal'
    ],
    watchOutFor: [
      'Apple App Store rejection rules (always implement Apple Sign-In if you have Google/Social login)',
      'Huge app bundle sizes caused by importing unnecessary native modules',
      'Ignoring offline network states (always show friendly offline toasts)'
    ],
    proTip: 'Choose React Native (Expo) if your team knows JavaScript/React. Choose Flutter if you need high-FPS canvas rendering or complex custom 2D animations.'
  },
  {
    id: 'python-ai-stack',
    name: 'Python AI / ML & Agent Stack',
    tagline: 'The native ecosystem for AI wrappers, RAG pipelines, and LLM automation',
    badge: 'AI & Data Engineering',
    frontend: {
      name: 'React (Vite) + Tailwind v4 (or Next.js for SSR)',
      description: 'Clean, responsive user interface that streams AI tokens via Server-Sent Events (SSE) or WebSockets with smooth typing animations.'
    },
    backend: {
      bestPartner: 'FastAPI (Python 3.12+)',
      description: 'Asynchronous, blazing-fast, and auto-generates OpenAPI (Swagger) documentation. Native access to OpenAI, Google GenAI (Gemini SDK), LangChain, LlamaIndex, and Hugging Face.',
      alternativePartners: ['Django + Django Ninja (if full ORM/Admin is needed)', 'Litestar']
    },
    database: {
      name: 'PostgreSQL 16+ with pgvector extension',
      description: 'Store standard user tables AND vector embeddings inside the same PostgreSQL database using pgvector. Eliminates the need for expensive standalone vector databases like Pinecone.'
    },
    recommendedServer: {
      type: 'VPS / Containerized Compute',
      provider: 'Hetzner VPS (CPU) or RunPod / Lambda Labs (if self-hosting open models)',
      monthlyCost: '$10 - $35 / month',
      reason: 'FastAPI apps running API calls to Gemini/Claude/OpenAI only need modest CPU resources. A $10 VPS handles thousands of concurrent LLM proxy requests.'
    },
    whenToUse: [
      'AI wrappers, document summarizers, and enterprise search (RAG)',
      'Autonomous agent systems and background scrapers',
      'Data science, machine learning models, and complex analytics'
    ],
    watchOutFor: [
      'Synchronous blocking operations inside `async def` endpoints (will freeze your server)',
      'Uncontrolled token streaming costs (always enforce user rate limits and token quotas)',
      'Storing API keys directly in code instead of environment variables'
    ],
    proTip: 'Use PostgreSQL with `pgvector` instead of paying for dedicated vector DBs. It handles millions of embeddings with standard SQL filters and joins.'
  }
];

export const HOSTING_GUIDE: HostingOption[] = [
  {
    type: 'Modern VPS + Coolify (Self-Hosted PaaS)',
    verdict: 'Recommended',
    cost: '$4 - $12 / month (Fixed)',
    bestFor: 'Any backend (Laravel, Node.js, Python, Go, Docker) + Full Databases',
    pros: [
      '100% predictable monthly bill (no surprise bandwidth or invocation bills)',
      'Unlimited projects, staging environments, and PostgreSQL/MySQL databases',
      'Coolify gives you the exact Vercel experience: Git push auto-deploy, free SSL, domain management',
      'Dedicated CPU and RAM that you completely own and control'
    ],
    cons: [
      'Requires 15 minutes of initial setup to install Coolify on a clean Ubuntu VPS',
      'You are responsible for scheduling automated database backups (Coolify has 1-click S3 backups)'
    ],
    secretWeapon: 'Coolify (Open-source self-hosted Vercel/Heroku alternative). Run it on a $5 Hetzner or DigitalOcean droplet and host 10 apps on one machine.',
    summary: 'The best balance between low cost, high performance, and total freedom. It is the modern vibe coder’s holy grail for production backends.'
  },
  {
    type: 'Cloud Serverless (Vercel, Netlify, Cloudflare Pages)',
    verdict: 'Great for Scale',
    cost: '$0 Free Tier -> $20+/seat -> Exponential at scale',
    bestFor: 'Static Frontends (React/Vite), Next.js websites, Jamstack',
    pros: [
      'Zero DevOps: just connect your GitHub repository and it deploys automatically',
      'Blazing-fast global Edge CDN caching and instant image optimization',
      'Generous free tiers for hobbies and early-stage prototypes'
    ],
    cons: [
      'Dangerous "bandwidth shock" and serverless execution bills once you go viral',
      'Strict serverless execution timeouts (10-15s), making background tasks hard',
      'Not suitable for hosting persistent databases or long-lived WebSocket connections'
    ],
    secretWeapon: 'Pair Vercel/Cloudflare Pages for your frontend with a cheap VPS for your backend API and DB.',
    summary: 'Unbeatable developer convenience for frontends. Just avoid running heavy database queries or long background jobs on serverless lambdas.'
  },
  {
    type: 'cPanel / Traditional Shared Hosting',
    verdict: 'Legacy Only',
    cost: '$2 - $8 / month',
    bestFor: 'Simple WordPress blogs, static HTML pages, legacy PHP 7/8 scripts',
    pros: [
      'Familiar file manager and email accounts included for beginners',
      'Very cheap first-year introductory promotions'
    ],
    cons: [
      'Terrible for modern Node.js, Python, Docker, Next.js, and background queue workers',
      'Shared noisy-neighbor server resources: if another site on your server gets attacked, your site slows down',
      'Outdated software versions and lack of modern CI/CD deployment pipelines'
    ],
    secretWeapon: 'None for modern apps. Use only if building a basic brochure site on WordPress.',
    summary: 'Do not attempt to run modern vibe-coded full-stack apps (React, Next.js, FastAPI, Node) on shared cPanel. You will spend hours fighting permission and version errors.'
  },
  {
    type: 'Hyperscale Cloud (AWS / Google Cloud / Azure)',
    verdict: 'Great for Scale',
    cost: '$30 -> Thousands / month',
    bestFor: 'Enterprise applications, venture-backed startups, HIPAA/SOC2 compliance',
    pros: [
      'Infinite scalability: can scale from 1 user to 100 million users',
      'Industry-standard compliance, security certifications, and global redundancy'
    ],
    cons: [
      'Brutal learning curve: IAM permissions, VPC subnets, NAT gateways, and security groups',
      'A minor configuration mistake can result in a catastrophic five-figure cloud bill overnight'
    ],
    secretWeapon: 'Google Cloud Run or AWS App Runner if you just want to run a single Docker container without setting up Kubernetes.',
    summary: 'Overkill for noobs and solo vibe coders. Start on a VPS or PaaS; only migrate to AWS/GCP when enterprise clients demand SOC2 or VPC peering.'
  }
];

export const MASTER_PROMPTS: PromptTemplate[] = [
  {
    id: 'ramble-prompt',
    title: '1. The "Ramble to Technical Blueprint" Prompt',
    role: 'System Architect & Requirements Engineer',
    targetAI: 'Use in ChatGPT, Claude 3.7, or Gemini Web Chat',
    description: 'Use this prompt when you have a messy app idea in your head. It forces the AI to extract a professional, battle-tested technical specification before you write any code.',
    prompt: `I have an idea for a scalable web application, but my thoughts are raw and unstructured. 

Act as a Principal Staff Software Architect. I am going to ramble below about what I want the app to do, who will use it, and what features I have in mind.

Do not write any code yet. Instead, process my ramble and produce a structured "Master Technical Blueprint" with the following sections:
1. Executive Summary & Core Value Proposition
2. Target Personas & Primary User Flows
3. Non-Negotiable Core MVP Features vs Nice-to-Have (Phase 2)
4. Recommended Modern Tech Stack (Frontend, Backend, Database, Auth, Hosting) with justification for scale
5. Complete Database Entity-Relationship (ERD) with tables, relationships, and foreign keys
6. API Endpoint Contract (REST or Server Actions) with input/output payloads
7. Potential Scalability Bottlenecks & Security Red Flags to mitigate early

Here is my raw app idea:
[INSERT YOUR UNFILTERED THOUGHTS / VOICE TRANSCRIPT HERE]`
  },
  {
    id: 'antigravity-proplan',
    title: '2. The "Antigravity /proplan Architecture" Prompt',
    role: 'Antigravity Orchestrator & Coordinator',
    targetAI: 'Use in Google Antigravity Chat / ag-kit-v2',
    description: 'Triggers the ag-kit-v2 planning pipeline. It spawns specialized subagents (Database Architect, Solution Architect, UX Architect) to build comprehensive documentation in your project.',
    prompt: `/proplan [APP_NAME] --lite

Here is our approved Technical Blueprint:
[PASTE BLUEPRINT OR SUMMARY HERE]

Requirements for the planning subagents:
- Database Architect: Define schema migrations, indexes, foreign keys, and soft delete strategy for PostgreSQL.
- Backend Specialist: Define typed API routes with validation schemas (Zod) and server-side authorization checks.
- Frontend Specialist: Define component folder structure, Tailwind v4 theme tokens, and responsive mobile-first views.
- Security Auditor: Define STRIDE threat model, environment variable checklist, and rate-limiting strategy.
- Project Planner: Break down the work into 4-6 linear milestones (M1: Foundations & Auth, M2: Core Engine, M3: Billing & Integrations, M4: Polish & Deployment).

Save all documents into docs/proplan/[APP_NAME]/ and do not write implementation code until the plan is approved.`
  },
  {
    id: 'milestone-build',
    title: '3. The "Milestone 1 Implementation" Prompt',
    role: 'Senior Implementation Engineer',
    targetAI: 'Use in Antigravity IDE / Cursor / Claude Code',
    description: 'The golden rule of vibe coding: never tell the AI "build my app." Hand it one milestone at a time with strict boundary verification.',
    prompt: `We are ready to build Milestone 1 from docs/proplan/[APP_NAME]/10-roadmap.md:
"Milestone 1: Database Foundation, Schema Migrations, and Core Authentication."

Strict Engineering Rules:
1. Follow Test-Driven Development (TDD): Write the test or validation script first, observe it fail, then write minimal code to pass.
2. Read neighbouring files before modifying. Do not introduce circular dependencies.
3. Validate all inputs at the boundary using Zod / Pydantic. Never trust client-side data.
4. Keep all secrets and API keys strictly in environment variables (.env.example must be kept updated).
5. When finished, run the project's build and verification commands. Show the exit code and terminal output proving it works.
6. Commit the working code to git with a clear conventional commit message before moving to the next task.`
  },
  {
    id: 'systematic-debugger',
    title: '4. The "Systematic Debugger" Prompt',
    role: 'Root Cause Investigator',
    targetAI: 'Use in Antigravity when you hit an unexpected bug or crash',
    description: 'Prevents the AI from guessing or applying random "band-aid" patches that break other parts of your codebase.',
    prompt: `I encountered an unexpected error. Do not guess or apply speculative band-aid fixes.

Error message / Stack trace:
[PASTE TERMINAL OR CONSOLE ERROR HERE]

Steps that produced this error:
[DESCRIBE WHAT YOU WERE CLICKING OR RUNNING]

Follow the 4-Phase Systematic Debugging Protocol:
Phase 1 (Reproduce): Pinpoint the exact file, line number, and trigger condition that caused this failure.
Phase 2 (Isolate & Root Cause): Explain the fundamental architectural reason why this failed (e.g. state mutation, null pointer, race condition, missing env, schema mismatch).
Phase 3 (Surgical Fix at Source): Fix the issue at the component or function that OWNS the behavior. Do not use "!important", broad try/catches that hide errors, or inline overrides.
Phase 4 (Verify & Regression Guard): Run the build and test suite to prove the error is resolved without introducing regressions.`
  }
];

export const DOMAIN_SECURITY_GUIDE = {
  registrars: [
    {
      name: 'Cloudflare Registrar',
      badge: 'Gold Standard',
      verdict: 'Best Overall',
      cost: 'Wholesale At-Cost ($9 - $10/year for .com)',
      pros: [
        'Zero markup: you pay the exact registry wholesale price',
        'Free WHOIS privacy protection forever',
        'Automatic 1-click integration with Cloudflare DNS, SSL, and CDN',
        'No deceptive renewal price jumps or hidden checkout checkboxes'
      ],
      cons: [
        'Requires your domain to use Cloudflare nameservers (which is what you want anyway!)'
      ]
    },
    {
      name: 'Namecheap',
      badge: 'Solid Alternative',
      verdict: 'Good for Promos',
      cost: '$6 - $12 first year -> $14 - $16 renewal',
      pros: [
        'Clean dashboard and dependable support',
        'Free lifetime WhoisGuard privacy',
        'Frequent steep first-year discount codes'
      ],
      cons: [
        'Renewal prices are slightly higher than Cloudflare wholesale',
        'Tries to upsell web hosting and email in the cart'
      ]
    },
    {
      name: 'GoDaddy',
      badge: 'Avoid for Tech Startups',
      verdict: 'Not Recommended',
      cost: '$1 first year -> $24 - $30+ renewal',
      pros: [
        'Aggressive brand awareness and television commercials'
      ],
      cons: [
        'Notorious for extreme renewal price gouging ($25-$35/yr for standard .com)',
        'Charges extra fees for standard SSL certificates and basic security',
        'Cluttered, confusing interface designed around aggressive upsells'
      ]
    }
  ],
  securitySteps: [
    {
      step: '1',
      title: 'Move Nameservers to Cloudflare (Free Plan)',
      description: 'Point your domain registrar nameservers to Cloudflare. This routes all traffic through Cloudflare’s global edge network before it touches your server.'
    },
    {
      step: '2',
      title: 'Enable "Full (Strict)" SSL/TLS Encryption',
      description: 'Under SSL/TLS settings, set mode to Full (Strict). Enable "Always Use HTTPS" and "Automatic HTTPS Rewrites" to enforce encrypted traffic for all visitors.'
    },
    {
      step: '3',
      title: 'Activate Free Bot Fight Mode',
      description: 'Under Security > Bots, turn on Bot Fight Mode. Cloudflare will automatically challenge and block malicious AI scrapers, vulnerability scanners, and automated bots.'
    },
    {
      step: '4',
      title: 'Create WAF Security Rules',
      description: 'Set up free Web Application Firewall (WAF) rules: challenge high-threat IP scores, restrict sensitive `/admin` routes to your own IP, or block brute-force login loops.'
    },
    {
      step: '5',
      title: 'Cache Static Assets at the Edge',
      description: 'Cloudflare automatically caches your CSS, JS, and image assets across 300+ global cities, reducing your origin server load by up to 80% for free.'
    }
  ]
};

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'check-1',
    category: 'Architecture',
    task: 'Written Master Blueprint before coding',
    detail: 'Do not prompt the AI to code until you have an ERD, user flows, and tech stack locked down in markdown.',
    critical: true
  },
  {
    id: 'check-2',
    category: 'Security',
    task: 'Zero Hardcoded Secrets or API Keys',
    detail: 'All credentials (DB passwords, Stripe keys, AI keys) live strictly in .env files, verified in .gitignore.',
    critical: true
  },
  {
    id: 'check-3',
    category: 'Architecture',
    task: 'Input Validation at the Server Boundary',
    detail: 'Every incoming API route or Server Action validates payloads with Zod / Pydantic. Never trust the frontend.',
    critical: true
  },
  {
    id: 'check-4',
    category: 'Security',
    task: 'Server-Side Authorization on Every Action',
    detail: 'Never rely on hiding a button in the UI. Always verify user ID and role permissions on the backend handler.',
    critical: true
  },
  {
    id: 'check-5',
    category: 'Database',
    task: 'Database Indexes on Foreign Keys and Query Columns',
    detail: 'Ensure `user_id`, `created_at`, `status`, and foreign keys have explicit indexes in your migrations.',
    critical: false
  },
  {
    id: 'check-6',
    category: 'Deployment',
    task: 'Cloudflare DNS with Full SSL & Bot Protection',
    detail: 'Domain is proxied through Cloudflare with Always Use HTTPS and Bot Fight Mode turned on.',
    critical: false
  },
  {
    id: 'check-7',
    category: 'Deployment',
    task: 'Automated Database Backups Scheduled',
    detail: 'Daily automated database snapshots stored in an off-site S3 or Cloudflare R2 bucket.',
    critical: true
  },
  {
    id: 'check-8',
    category: 'Architecture',
    task: 'Milestone-Based Git Commits',
    detail: 'Each feature is verified locally with terminal proof and committed to git with a clear commit message.',
    critical: false
  }
];

import { ArrowRight, Bot, Code2, Database, Github, Globe, LayoutTemplate, MessageSquare, Terminal, Zap } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#09090b] font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <Bot className="w-5 h-5" />
            <span>AI Workflow Guide</span>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
            <a href="https://github.com/KuyaLoy/ai-workflow-guide-ag" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
              <Github className="w-4 h-4" />
              Source
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-20 md:py-32">
        
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto mb-24 md:mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8">
            <Zap className="w-4 h-4 text-amber-500" />
            Zero to Scalable
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            The modern way to build scalable web apps.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            A professional, zero-to-hero workflow for managing AI coding agents. Avoid the messy "AI slop" and build production-ready applications like a Tech Lead.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="#setup" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Phase 0: Setup */}
        <section id="setup" className="mb-24 scroll-mt-24">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Phase 0: The Pro Setup</h2>
            <p className="text-muted-foreground text-lg">You cannot build good software without a good environment. We use Antigravity with these essential plugins:</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <LayoutTemplate className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-xl mb-2">ag-kit-v2</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Provides specialized AI subagents (Architect, Frontend Specialist) and structured commands like <code className="bg-gray-100 px-1 py-0.5 rounded text-primary">/proplan</code> for architecture generation.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-xl mb-2">superpowers</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Enforces strict Test-Driven Development (TDD). It ensures the AI doesn't write messy code by forcing it to brainstorm and write tests first.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
                <Github className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-xl mb-2">GitHub MCP</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Allows the AI to securely read your repositories, manage branches, and push code without you ever typing git commands.
              </p>
            </div>
          </div>
        </section>

        {/* Phase 1 & 2 */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <section className="flex flex-col">
            <div className="mb-6 flex items-center gap-3">
              <div className="p-2 bg-secondary rounded-lg">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">1. Prompt Engineering</h2>
            </div>
            <div className="flex-1 p-6 rounded-xl border border-gray-200 bg-gray-50/50">
              <p className="text-muted-foreground mb-4">Let another AI write your blueprint before you start coding.</p>
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-sm font-mono text-gray-700 leading-relaxed shadow-sm">
                "I want to build a [describe your app]. I am going to use an advanced AI coding agent. Please write a highly detailed, technical prompt that I can copy-paste to my coding agent. Include target audience, core features, and scalable tech stack."
              </div>
            </div>
          </section>

          <section className="flex flex-col">
            <div className="mb-6 flex items-center gap-3">
              <div className="p-2 bg-secondary rounded-lg">
                <Database className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">2. The Planning Phase</h2>
            </div>
            <div className="flex-1 p-6 rounded-xl border border-gray-200 bg-gray-50/50">
              <p className="text-muted-foreground mb-4">Scalable apps require architecture. Use the Antigravity Chat.</p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold mt-0.5">1</span>
                  <span className="text-sm text-gray-700">Paste your generated prompt and use <code className="bg-white border px-1 py-0.5 rounded">/brainstorm</code>.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold mt-0.5">2</span>
                  <span className="text-sm text-gray-700">Generate a roadmap using <code className="bg-white border px-1 py-0.5 rounded">/proplan</code>.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold mt-0.5">3</span>
                  <span className="text-sm text-gray-700">The AI spawns subagents to write schemas and milestones to <code>docs/proplan/</code>.</span>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Phase 3 & 4 */}
        <div className="grid md:grid-cols-2 gap-12">
          <section className="flex flex-col">
            <div className="mb-6 flex items-center gap-3">
              <div className="p-2 bg-secondary rounded-lg">
                <Terminal className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">3. The Building Phase</h2>
            </div>
            <div className="flex-1 p-6 rounded-xl border border-gray-200 bg-gray-50/50">
              <p className="text-muted-foreground mb-6">Move to the Antigravity IDE to build the code block by block.</p>
              <div className="space-y-4 border-l-2 border-amber-500 pl-4">
                <h4 className="font-semibold text-amber-600">The Golden Rule</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Never say "build my app." Tell the AI: <br/>
                  <strong className="text-black">"Let's build Milestone 1 from the plan."</strong>
                </p>
                <p className="text-sm text-gray-500">Test locally. If an error pops up, highlight it and use <code>/debug</code>.</p>
              </div>
            </div>
          </section>

          <section className="flex flex-col">
            <div className="mb-6 flex items-center gap-3">
              <div className="p-2 bg-secondary rounded-lg">
                <Globe className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">4. Free Hosting</h2>
            </div>
            <div className="flex-1 p-6 rounded-xl border border-gray-200 bg-gray-50/50">
              <p className="text-muted-foreground mb-6">Get it on the internet for free.</p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                  <h4 className="font-semibold mb-1 text-sm">Static Sites (React/Vite)</h4>
                  <p className="text-xs text-gray-500">Use <strong>GitHub Pages</strong>. Tell your AI via GitHub MCP to commit, build, and push to gh-pages branch.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                  <h4 className="font-semibold mb-1 text-sm">Full-Stack (Next.js/Postgres)</h4>
                  <p className="text-xs text-gray-500">Connect your repo to <strong>Vercel</strong> or <strong>Netlify</strong>. It auto-updates every push.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
          <p>Built with ❤️ using Antigravity AI.</p>
        </div>
      </footer>
    </div>
  )
}

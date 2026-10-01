import { BookOpen, AlertTriangle, CheckCircle2, Terminal, ShieldAlert } from 'lucide-react';

export default function Philosophy() {
  const failureModes = [
    {
      title: '1. The "Build My Whole App" Trap',
      problem: 'Telling the AI to build an entire e-commerce store in one prompt causes context window overflow, resulting in half-baked code, placeholder comments ("// TODO: implement later"), and phantom bugs.',
      solution: 'Use Specification-Driven Development. Break the project into 4-6 small linear milestones (Database -> Auth -> Core API -> UI -> Polish) and execute one at a time.'
    },
    {
      title: '2. The Circular Debugging Loop',
      problem: 'When an error appears, frantically saying "fix this" leads the AI to guess wildly, rewriting entire files and breaking 3 other working features in the process.',
      solution: 'Enforce Systematic Debugging: Pinpoint the exact line and file, demand the root architectural cause, fix at the owning source, and run a regression test before accepting the change.'
    },
    {
      title: '3. The Invisible Security Hole',
      problem: 'AI code often works visually in the browser but lacks server-side authorization checks, relies on client-side state for permissions, or commits database passwords to GitHub.',
      solution: 'Always validate at the boundary with Zod/Pydantic, check authorization strictly on the server for every action, and keep all keys in `.env`.'
    },
    {
      title: '4. Context Rot & Hallucinated Packages',
      problem: 'Long conversation threads degrade in quality. The AI starts hallucinating npm libraries that don’t exist or forgets helper functions written earlier.',
      solution: 'Use isolated subagents with fresh context windows for specific tasks, and commit working code to Git after every successful milestone.'
    }
  ];

  const goldenRules = [
    {
      number: '01',
      title: 'Spec First, Code Second',
      desc: 'Never open an IDE until your database schema, user journeys, and API contracts are written down in a markdown document.'
    },
    {
      number: '02',
      title: 'The LLM-to-LLM Handoff',
      desc: 'Use ChatGPT or Claude to interview you and structure your thoughts into a professional specification before handing it to a coding agent.'
    },
    {
      number: '03',
      title: 'One Milestone Per Prompt',
      desc: 'Never ask for the whole house at once. Ask for the foundation first, inspect it, verify it, and then build the walls.'
    },
    {
      number: '04',
      title: 'Evidence Before Assertions',
      desc: 'Do not trust the AI when it says "Done!". Demand terminal output, build logs, and test verification proving it runs without errors.'
    },
    {
      number: '05',
      title: 'Commit After Every Green Check',
      desc: 'Every time a task compiles and passes tests, commit to Git. If the AI messes up the next prompt, you can revert in 2 seconds.'
    }
  ];

  return (
    <section id="playbook" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold mb-3">
            <BookOpen className="w-4 h-4" />
            <span>The Vibe Coder’s Manifesto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            What is Vibe Coding? <br />
            <span className="text-zinc-500 font-normal">And why do most beginners fail without structure?</span>
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            In February 2025, former Tesla AI Director and OpenAI co-founder <strong>Andrej Karpathy</strong> coined the term: 
            <em className="block my-3 p-4 rounded-lg border-l-4 border-blue-500 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-serif italic text-sm">
              "There is a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists... I just talk to Composer, hit Tab, let it rip."
            </em>
            While liberating for rapid prototypes, true production software requires transitioning from <strong>"pure vibe coding"</strong> to <strong>"Disciplined Vibe Engineering."</strong>
          </p>
        </div>

        {/* 4 Failure Modes */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              The 4 Traps That Kill Beginner Vibe Coded Projects
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {failureModes.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xs"
              >
                <h4 className="font-semibold text-base text-zinc-900 dark:text-zinc-100 mb-2 flex items-center justify-between">
                  <span>{item.title}</span>
                  <ShieldAlert className="w-4 h-4 text-red-500" />
                </h4>
                <div className="space-y-3 text-xs leading-relaxed">
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/40 text-red-800 dark:text-red-300 border border-red-100 dark:border-red-900/50">
                    <strong className="block text-red-900 dark:text-red-200 font-medium mb-0.5">The Problem:</strong>
                    {item.problem}
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900/50">
                    <strong className="block text-emerald-900 dark:text-emerald-200 font-medium mb-0.5">The Fix:</strong>
                    {item.solution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Golden Rules */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              The 5 Golden Rules of Vibe Engineering
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {goldenRules.map((rule) => (
              <div
                key={rule.number}
                className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-black font-mono text-zinc-300 dark:text-zinc-700 mb-3">
                    {rule.number}
                  </div>
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-2">
                    {rule.title}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {rule.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Mandatory Rule</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { PixelTerminal, PixelShield, PixelJoystick } from './PixelIcons';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function Philosophy() {
  const failureModes = [
    {
      title: 'TRAP 1: The "Build My Whole App" Fallacy',
      problem: 'Telling the AI to build an entire e-commerce store in one prompt causes context window overflow, resulting in half-baked code, placeholder comments ("// TODO: implement later"), and phantom bugs.',
      solution: 'Use Specification-Driven Development. Break the project into 4-6 small linear milestones (Database -> Auth -> Core API -> UI -> Polish) and execute one at a time.'
    },
    {
      title: 'TRAP 2: The Circular Debugging Loop',
      problem: 'When an error appears, frantically saying "fix this" leads the AI to guess wildly, rewriting entire files and breaking 3 other working features in the process.',
      solution: 'Enforce Systematic Debugging: Pinpoint the exact line and file, demand the root architectural cause, fix at the owning source, and run a regression test before accepting the change.'
    },
    {
      title: 'TRAP 3: The Invisible Security Hole',
      problem: 'AI code often works visually in the browser but lacks server-side authorization checks, relies on client-side state for permissions, or commits database passwords to GitHub.',
      solution: 'Always validate at the boundary with Zod/Pydantic, check authorization strictly on the server for every action, and keep all keys in `.env`.'
    },
    {
      title: 'TRAP 4: Context Rot & Hallucinated Packages',
      problem: 'Long conversation threads degrade in quality. The AI starts hallucinating npm libraries that don’t exist or forgets helper functions written earlier.',
      solution: 'Use isolated subagents with fresh context windows for specific tasks, and commit working code to Git after every successful milestone.'
    }
  ];

  const goldenRules = [
    {
      number: '01',
      title: 'SPEC FIRST, CODE SECOND',
      desc: 'Never open an IDE until your database schema, user journeys, and API contracts are written down in a markdown document.'
    },
    {
      number: '02',
      title: 'LLM-TO-LLM HANDOFF',
      desc: 'Use ChatGPT or Claude to interview you and structure your thoughts into a professional specification before handing it to a coding agent.'
    },
    {
      number: '03',
      title: 'ONE MILESTONE PER PROMPT',
      desc: 'Never ask for the whole house at once. Ask for the foundation first, inspect it, verify it, and then build the walls.'
    },
    {
      number: '04',
      title: 'EVIDENCE BEFORE ASSERTIONS',
      desc: 'Do not trust the AI when it says "Done!". Demand terminal output, build logs, and test verification proving it runs without errors.'
    },
    {
      number: '05',
      title: 'COMMIT ON GREEN CHECKS',
      desc: 'Every time a task compiles and passes tests, commit to Git. If the AI messes up the next prompt, you can revert in 2 seconds.'
    }
  ];

  return (
    <section id="playbook" className="scroll-mt-20 py-16 md:py-24 border-b-2 border-zinc-900 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-pixel text-[10px] text-emerald-600 dark:text-emerald-400 mb-3 px-2 py-1 border border-emerald-500/60 bg-emerald-500/10">
            <PixelJoystick className="w-3.5 h-3.5" />
            <span>STAGE 1: THE VIBE CODER MANIFESTO</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-pixel tracking-tight text-zinc-950 dark:text-zinc-50 mb-4 leading-relaxed">
            WHAT IS VIBE CODING?
          </h2>
          <p className="font-mono text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            In February 2025, former Tesla AI Director and OpenAI co-founder <strong>Andrej Karpathy</strong> coined the term: 
            <em className="block my-3 p-4 border-2 border-black dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-mono text-xs shadow-[3px_3px_0px_#000]">
              "There is a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists... I just talk to Composer, hit Tab, let it rip."
            </em>
            While liberating for rapid prototypes, true production software requires transitioning from <strong>"pure vibe coding"</strong> to <strong>"Disciplined Vibe Engineering."</strong>
          </p>
        </div>

        {/* 4 Failure Traps */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <h3 className="font-arcade text-lg sm:text-xl font-bold uppercase text-zinc-900 dark:text-zinc-100">
              4 Traps That Destroy Beginner Vibe Coded Projects
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {failureModes.map((item, idx) => (
              <div
                key={idx}
                className="pixel-panel p-6 bg-white dark:bg-zinc-900"
              >
                <h4 className="font-arcade text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-3 uppercase tracking-wide">
                  {item.title}
                </h4>
                <div className="space-y-3 font-mono text-xs leading-relaxed">
                  <div className="p-3 border border-red-300 dark:border-red-900/60 bg-red-50 dark:bg-red-950/30 text-red-900 dark:text-red-300">
                    <strong className="block font-arcade uppercase text-[10px] text-red-700 dark:text-red-400 mb-1">THE TRAP:</strong>
                    {item.problem}
                  </div>
                  <div className="p-3 border border-emerald-300 dark:border-emerald-900/60 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-300">
                    <strong className="block font-arcade uppercase text-[10px] text-emerald-700 dark:text-emerald-400 mb-1">THE FIX:</strong>
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
            <h3 className="font-arcade text-lg sm:text-xl font-bold uppercase text-zinc-900 dark:text-zinc-100">
              The 5 Golden Rules of Vibe Engineering
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {goldenRules.map((rule) => (
              <div
                key={rule.number}
                className="pixel-panel p-5 bg-white dark:bg-zinc-900 flex flex-col justify-between"
              >
                <div>
                  <div className="font-pixel text-xl text-emerald-500 dark:text-emerald-400 mb-3">
                    #{rule.number}
                  </div>
                  <h4 className="font-arcade text-xs font-bold uppercase text-zinc-900 dark:text-zinc-100 mb-2">
                    {rule.title}
                  </h4>
                  <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {rule.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-1.5 font-pixel text-[9px] text-emerald-600 dark:text-emerald-400">
                  <PixelShield className="w-3.5 h-3.5" />
                  <span>CORE LAW</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

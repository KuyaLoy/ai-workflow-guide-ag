import { Terminal, Code2, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-100 dark:border-zinc-900">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-md bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center font-bold text-xs">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-sm tracking-tight text-zinc-900 dark:text-zinc-100">
                VIBE CODER OS
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              The ultimate noob-to-scale guide for AI-driven software engineering.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-zinc-600 dark:text-zinc-400">
            <a href="#playbook" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Playbook
            </a>
            <a href="#antigravity" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Antigravity
            </a>
            <a href="#prompts" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Master Prompts
            </a>
            <a href="#stacks" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Tech Stacks
            </a>
            <a href="#hosting" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Hosting
            </a>
            <a href="#security" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Security
            </a>
            <a href="#matchmaker" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Matchmaker
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <div>
            Open-source community resource built with Antigravity AI, ag-kit-v2, and Superpowers.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/KuyaLoy/ai-workflow-guide-ag"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-medium"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

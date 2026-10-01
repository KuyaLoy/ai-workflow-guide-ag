import { PixelComputer, PixelJoystick } from './PixelIcons';
import { Code2, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t-2 border-zinc-900 dark:border-zinc-800 bg-zinc-950 text-zinc-100 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="w-7 h-7 border border-emerald-400 bg-black text-emerald-400 flex items-center justify-center">
                <PixelComputer className="w-4 h-4" />
              </div>
              <span className="font-pixel text-xs tracking-tight text-white">
                VIBE CODER OS <span className="text-emerald-400">[16-BIT]</span>
              </span>
            </div>
            <p className="font-mono text-xs text-zinc-400">
              The ultimate 16-bit cyber-arcade tutorial for AI-driven software engineering.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 font-arcade text-xs text-zinc-400 uppercase">
            <a href="#playbook" className="hover:text-emerald-400 transition-colors">
              PLAYBOOK
            </a>
            <a href="#antigravity" className="hover:text-emerald-400 transition-colors">
              ANTIGRAVITY
            </a>
            <a href="#prompts" className="hover:text-emerald-400 transition-colors">
              PROMPTS
            </a>
            <a href="#stacks" className="hover:text-emerald-400 transition-colors">
              STACKS
            </a>
            <a href="#hosting" className="hover:text-emerald-400 transition-colors">
              HOSTING
            </a>
            <a href="#security" className="hover:text-emerald-400 transition-colors">
              SECURITY
            </a>
            <a href="#matchmaker" className="hover:text-emerald-400 transition-colors">
              MATCHMAKER
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <div>
            Open-source community resource built with Antigravity AI, ag-kit-v2, and Superpowers.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/KuyaLoy/ai-workflow-guide-ag"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 text-zinc-300 transition-colors font-arcade uppercase text-xs"
            >
              <PixelJoystick className="w-3.5 h-3.5 text-emerald-400" />
              <span>GITHUB REPOSITORY</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

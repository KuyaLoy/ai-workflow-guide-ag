import { useState } from 'react';
import { PixelComputer, PixelJoystick } from './PixelIcons';
import { ExternalLink, Menu, X, Tv } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  crtActive: boolean;
  onToggleCrt: () => void;
}

export default function Navbar({ crtActive, onToggleCrt }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'PLAYBOOK', href: '#playbook' },
    { name: 'ANTIGRAVITY', href: '#antigravity' },
    { name: 'PROMPTS', href: '#prompts' },
    { name: 'STACKS', href: '#stacks' },
    { name: 'HOSTING', href: '#hosting' },
    { name: 'SECURITY', href: '#security' },
    { name: 'MATCHMAKER', href: '#matchmaker' },
    { name: 'CHECKLIST', href: '#checklist' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-zinc-900 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 border-2 border-black bg-zinc-900 text-emerald-400 flex items-center justify-center pixel-panel transition-transform group-hover:scale-105">
            <PixelComputer className="w-6 h-6" />
          </div>
          <div>
            <div className="font-pixel text-[11px] sm:text-xs tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
              VIBE CODER <span className="text-[9px] px-1.5 py-0.5 border border-emerald-500 bg-emerald-500/10 text-emerald-500 font-pixel">16-BIT</span>
            </div>
            <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">SCALABLE ARCHITECTURE GUIDE</div>
          </div>
        </a>

        {/* Desktop Navigation in Arcade Font */}
        <nav className="hidden xl:flex items-center gap-5 font-arcade text-xs text-zinc-600 dark:text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Controls: CRT Toggle, Theme, GitHub */}
        <div className="hidden sm:flex items-center gap-3">
          {/* CRT scanline toggle */}
          <button
            onClick={onToggleCrt}
            className={`px-2.5 py-1 text-[10px] font-pixel rounded-none border border-black dark:border-zinc-700 transition-all ${
              crtActive
                ? 'bg-emerald-500 text-black font-bold shadow-[2px_2px_0px_#000]'
                : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400'
            }`}
            title="Toggle CRT Scanlines"
          >
            CRT {crtActive ? 'ON' : 'OFF'}
          </button>

          <ThemeToggle />

          <a
            href="https://github.com/KuyaLoy/ai-workflow-guide-ag"
            target="_blank"
            rel="noreferrer"
            className="pixel-btn flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 font-arcade text-xs uppercase"
          >
            <PixelJoystick className="w-3.5 h-3.5 text-emerald-400" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border-2 border-black dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t-2 border-black dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 font-arcade text-xs text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
            <button
              onClick={onToggleCrt}
              className="px-3 py-1.5 font-pixel text-[10px] border border-black dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900"
            >
              CRT SCANLINES: {crtActive ? 'ON' : 'OFF'}
            </button>
            <a
              href="https://github.com/KuyaLoy/ai-workflow-guide-ag"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 font-arcade text-xs bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

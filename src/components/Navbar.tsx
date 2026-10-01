import { useState, useEffect } from 'react';
import { PixelComputer, PixelJoystick } from './PixelIcons';
import { ExternalLink, ArrowUp } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  crtActive: boolean;
  onToggleCrt: () => void;
}

export default function Navbar({ crtActive, onToggleCrt }: NavbarProps) {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [showBackToTop, setShowBackToTop] = useState(false);

  const navLinks = [
    { id: 'playbook', num: '01', name: 'PLAYBOOK' },
    { id: 'antigravity', num: '02', name: 'ANTIGRAVITY' },
    { id: 'prompts', num: '03', name: 'PROMPTS' },
    { id: 'stacks', num: '04', name: 'STACKS' },
    { id: 'hosting', num: '05', name: 'HOSTING' },
    { id: 'security', num: '06', name: 'SECURITY' },
    { id: 'matchmaker', num: '07', name: 'MATCHMAKER' },
    { id: 'checklist', num: '08', name: 'CHECKLIST' },
  ];

  // ScrollSpy to highlight active section & toggle back-to-top
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      setShowBackToTop(window.scrollY > 400);

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-zinc-900 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md transition-colors">
      {/* Top Deck: Branding and System Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800/80">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 border-2 border-black bg-zinc-900 text-emerald-400 flex items-center justify-center pixel-panel transition-transform group-hover:scale-105">
            <PixelComputer className="w-5 h-5" />
          </div>
          <div>
            <div className="font-pixel text-[11px] sm:text-xs tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
              VIBE CODER <span className="text-[9px] px-1.5 py-0.5 border border-emerald-500 bg-emerald-500/10 text-emerald-500 font-pixel">16-BIT</span>
            </div>
          </div>
        </a>

        {/* Right Controls: CRT Toggle, Theme, GitHub */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onToggleCrt}
            className={`px-2 py-1 text-[9px] font-pixel border border-black dark:border-zinc-700 transition-all ${
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
            className="pixel-btn flex items-center gap-1.5 px-2.5 py-1 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 font-arcade text-xs uppercase"
          >
            <PixelJoystick className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">GitHub</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </div>

      {/* Bottom Deck: Always-Visible Arcade Quick-Jump Navigation (Scrollable on Mobile, Centered on Desktop) */}
      <div className="w-full bg-zinc-100/90 dark:bg-zinc-900/90 px-2 sm:px-4 py-1.5 overflow-x-auto no-scrollbar border-b border-zinc-200 dark:border-zinc-800">
        <nav className="flex items-center gap-1.5 sm:gap-2 max-w-7xl mx-auto min-w-max justify-start lg:justify-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`flex items-center gap-1 px-2.5 py-1 font-arcade text-xs transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-black font-bold border border-black shadow-[2px_2px_0px_#000]'
                    : 'text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800'
                }`}
              >
                <span className="font-pixel text-[8px] opacity-75">{link.num}</span>
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Floating Retro "Back to Top" Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 pixel-btn p-2.5 bg-emerald-500 text-black font-pixel text-[10px] flex items-center gap-1 shadow-[3px_3px_0px_#000] hover:bg-emerald-400 transition-all"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4 stroke-[3]" />
          <span className="hidden sm:inline">TOP</span>
        </button>
      )}
    </header>
  );
}

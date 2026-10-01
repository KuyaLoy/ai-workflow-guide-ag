import { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import type { ThemeMode } from '../types';

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('vibe-coder-theme') as ThemeMode;
    return saved || 'dark'; // Dark mode default as requested by user
  });

  useEffect(() => {
    const root = document.documentElement;
    localStorage.setItem('vibe-coder-theme', mode);

    if (mode === 'dark') {
      root.classList.add('dark');
    } else if (mode === 'light') {
      root.classList.remove('dark');
    } else {
      // System mode
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isSystemDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [mode]);

  useEffect(() => {
    // Listen for system theme changes if in system mode
    if (mode !== 'system') return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [mode]);

  return (
    <div className="inline-flex items-center p-1 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-xs font-medium">
      <button
        onClick={() => setMode('light')}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
          mode === 'light'
            ? 'bg-white text-zinc-900 shadow-xs dark:bg-zinc-800 dark:text-zinc-100'
            : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
        }`}
        title="Light Mode"
      >
        <Sun className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Light</span>
      </button>
      <button
        onClick={() => setMode('dark')}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
          mode === 'dark'
            ? 'bg-white text-zinc-900 shadow-xs dark:bg-zinc-800 dark:text-zinc-100'
            : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
        }`}
        title="Dark Mode (Default)"
      >
        <Moon className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Dark</span>
      </button>
      <button
        onClick={() => setMode('system')}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
          mode === 'system'
            ? 'bg-white text-zinc-900 shadow-xs dark:bg-zinc-800 dark:text-zinc-100'
            : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
        }`}
        title="System Preference"
      >
        <Monitor className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Auto</span>
      </button>
    </div>
  );
}

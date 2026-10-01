import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import AntigravityGuide from './components/AntigravityGuide';
import PromptEngine from './components/PromptEngine';
import StackMatrix from './components/StackMatrix';
import InfrastructureGuide from './components/InfrastructureGuide';
import DomainSecurity from './components/DomainSecurity';
import StackQuiz from './components/StackQuiz';
import VibeChecklist from './components/VibeChecklist';
import Footer from './components/Footer';

export default function App() {
  const [crtActive, setCrtActive] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 transition-colors selection:bg-emerald-500/30 selection:text-emerald-300">
      {crtActive && (
        <div className="fixed inset-0 crt-overlay z-50 pointer-events-none" />
      )}
      <Navbar crtActive={crtActive} onToggleCrt={() => setCrtActive(!crtActive)} />
      <main>
        <Hero />
        <Philosophy />
        <AntigravityGuide />
        <PromptEngine />
        <StackMatrix />
        <InfrastructureGuide />
        <DomainSecurity />
        <StackQuiz />
        <VibeChecklist />
      </main>
      <Footer />
    </div>
  );
}

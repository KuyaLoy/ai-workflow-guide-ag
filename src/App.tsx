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
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-blue-300">
      <Navbar />
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

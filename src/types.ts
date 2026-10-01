export type ThemeMode = 'dark' | 'light' | 'system';

export interface TechStack {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  frontend: {
    name: string;
    description: string;
  };
  backend: {
    bestPartner: string;
    description: string;
    alternativePartners?: string[];
  };
  database: {
    name: string;
    description: string;
  };
  recommendedServer: {
    type: string;
    provider: string;
    monthlyCost: string;
    reason: string;
  };
  whenToUse: string[];
  watchOutFor: string[];
  proTip: string;
}

export interface HostingOption {
  type: string;
  verdict: 'Recommended' | 'Great for Scale' | 'Legacy Only' | 'Budget Champion';
  cost: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  secretWeapon?: string;
  summary: string;
}

export interface PromptTemplate {
  id: string;
  title: string;
  role: string;
  targetAI: string;
  description: string;
  prompt: string;
}

export interface ChecklistItem {
  id: string;
  category: string;
  task: string;
  detail: string;
  critical: boolean;
}

export type Language = 'en' | 'hi' | 'mr';

export type TabType = 'home' | 'play' | 'map' | 'progress' | 'you';

export interface ConceptItem {
  id: string;
  title: Record<Language, string>;
  oneLiner: Record<Language, string>;
  icon: string;
  themeColor: string;
  badgeColor: string;
  timeEstimate: string;
  progress: number; // 0 - 100
  simpleExplanation: Record<Language, string>;
  everydayAnalogy: Record<Language, string>;
  whyItMatters: Record<Language, string>;
  audioNarration: Record<Language, string>;
  memoryCheck: {
    question: Record<Language, string>;
    options: Record<Language, string[]>;
    correctIndex: number;
    explanation: Record<Language, string>;
  };
  microVideo: {
    title: Record<Language, string>;
    duration: string;
    scenes: {
      heading: Record<Language, string>;
      caption: Record<Language, string>;
      visualState: string;
      valueDisplay?: string;
    }[];
  };
}

export interface BadgeItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  category: 'simulator' | 'habit' | 'knowledge' | 'resilience';
  unlocked: boolean;
  unlockedAt?: string;
}

export interface JargonEntry {
  id: string;
  term: string;
  originalClause: string;
  simplified: string;
  eli15: string;
  hindi: string;
  marathi: string;
  analogy: string;
}

export interface VolatilityRound {
  round: number;
  percentageChange: number;
  amount: number;
  headline: string;
  subtext: string;
  question?: string;
  options?: string[];
}

export interface MapNode {
  id: string;
  conceptId: string;
  title: string;
  subtitle: string;
  icon: string;
  level: number;
  status: 'completed' | 'current' | 'locked';
  xOffsetPercent: number; // for winding path layout (-20 to +20)
}

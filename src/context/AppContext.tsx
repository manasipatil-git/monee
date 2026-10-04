import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Language, TabType, BadgeItem } from '../types';
import { badgesData } from '../data/badges';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  streakDays: number;
  totalXp: number;
  addXp: (amount: number, reason?: string) => void;
  completedConcepts: string[];
  markConceptCompleted: (id: string) => void;
  recalledConcepts: string[];
  markConceptRecalled: (id: string) => void;
  badges: BadgeItem[];
  unlockBadge: (badgeId: string) => void;
  newBadgeUnlocked: BadgeItem | null;
  clearNewBadge: () => void;
  activeSimulatorId: string | null;
  setActiveSimulatorId: (id: string | null) => void;
  activeMicroVideoConceptId: string | null;
  setActiveMicroVideoConceptId: (id: string | null) => void;
  isAskMoneeOpen: boolean;
  setIsAskMoneeOpen: (open: boolean) => void;
  isOnboardingComplete: boolean;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
  isDemoTourActive: boolean;
  setIsDemoTourActive: (active: boolean) => void;
  demoStep: number;
  setDemoStep: (step: number) => void;
  lastXpGain: { amount: number; reason: string } | null;
  selectedJargonTerm: string | null;
  setSelectedJargonTerm: (term: string | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('monee_lang') as Language) || 'en';
  });

  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [streakDays, setStreakDays] = useState<number>(() => {
    const saved = localStorage.getItem('monee_streak');
    return saved ? parseInt(saved, 10) : 4;
  });

  const [totalXp, setTotalXp] = useState<number>(() => {
    const saved = localStorage.getItem('monee_xp');
    return saved ? parseInt(saved, 10) : 240;
  });

  const [completedConcepts, setCompletedConcepts] = useState<string[]>(() => {
    const saved = localStorage.getItem('monee_completed_concepts');
    return saved ? JSON.parse(saved) : ['volatility', 'compounding'];
  });

  const [recalledConcepts, setRecalledConcepts] = useState<string[]>(() => {
    const saved = localStorage.getItem('monee_recalled_concepts');
    return saved ? JSON.parse(saved) : ['volatility'];
  });

  const [badges, setBadges] = useState<BadgeItem[]>(() => {
    const saved = localStorage.getItem('monee_badges');
    return saved ? JSON.parse(saved) : badgesData;
  });

  const [newBadgeUnlocked, setNewBadgeUnlocked] = useState<BadgeItem | null>(null);
  const [lastXpGain, setLastXpGain] = useState<{ amount: number; reason: string } | null>(null);

  const [activeSimulatorId, setActiveSimulatorId] = useState<string | null>(null);
  const [activeMicroVideoConceptId, setActiveMicroVideoConceptId] = useState<string | null>(null);
  const [isAskMoneeOpen, setIsAskMoneeOpen] = useState<boolean>(false);
  const [selectedJargonTerm, setSelectedJargonTerm] = useState<string | null>(null);

  const [isOnboardingComplete, setIsOnboardingComplete] = useState<boolean>(() => {
    return localStorage.getItem('monee_onboarded') === 'true';
  });

  const [isDemoTourActive, setIsDemoTourActive] = useState<boolean>(false);
  const [demoStep, setDemoStep] = useState<number>(0);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('monee_lang', lang);
  };

  const addXp = (amount: number, reason: string = 'Learning habit') => {
    setTotalXp(prev => {
      const next = prev + amount;
      localStorage.setItem('monee_xp', next.toString());
      return next;
    });
    setLastXpGain({ amount, reason });
    setTimeout(() => {
      setLastXpGain(null);
    }, 3000);
  };

  const markConceptCompleted = (id: string) => {
    if (!completedConcepts.includes(id)) {
      const next = [...completedConcepts, id];
      setCompletedConcepts(next);
      localStorage.setItem('monee_completed_concepts', JSON.stringify(next));
      addXp(40, 'Completed Simulation');
    }
  };

  const markConceptRecalled = (id: string) => {
    if (!recalledConcepts.includes(id)) {
      const next = [...recalledConcepts, id];
      setRecalledConcepts(next);
      localStorage.setItem('monee_recalled_concepts', JSON.stringify(next));
      addXp(15, 'Memory Boost');
    }
  };

  const unlockBadge = (badgeId: string) => {
    setBadges(prev => {
      const match = prev.find(b => b.id === badgeId);
      if (match && !match.unlocked) {
        const updated = prev.map(b => b.id === badgeId ? { ...b, unlocked: true, unlockedAt: 'Just now' } : b);
        localStorage.setItem('monee_badges', JSON.stringify(updated));
        setNewBadgeUnlocked({ ...match, unlocked: true });

        // Trigger delightful soft confetti
        try {
          confetti({
            particleCount: 40,
            spread: 60,
            origin: { y: 0.6 },
            colors: ['#FF5C38', '#10B981', '#C4B5FD', '#FEF08A']
          });
        } catch (e) {
          // ignore
        }

        return updated;
      }
      return prev;
    });
  };

  const clearNewBadge = () => {
    setNewBadgeUnlocked(null);
  };

  const completeOnboarding = () => {
    setIsOnboardingComplete(true);
    localStorage.setItem('monee_onboarded', 'true');
  };

  const resetOnboarding = () => {
    setIsOnboardingComplete(false);
    localStorage.removeItem('monee_onboarded');
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        activeTab,
        setActiveTab,
        streakDays,
        totalXp,
        addXp,
        completedConcepts,
        markConceptCompleted,
        recalledConcepts,
        markConceptRecalled,
        badges,
        unlockBadge,
        newBadgeUnlocked,
        clearNewBadge,
        activeSimulatorId,
        setActiveSimulatorId,
        activeMicroVideoConceptId,
        setActiveMicroVideoConceptId,
        isAskMoneeOpen,
        setIsAskMoneeOpen,
        isOnboardingComplete,
        completeOnboarding,
        resetOnboarding,
        isDemoTourActive,
        setIsDemoTourActive,
        demoStep,
        setDemoStep,
        lastXpGain,
        selectedJargonTerm,
        setSelectedJargonTerm
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};

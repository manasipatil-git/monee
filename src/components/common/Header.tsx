import React from 'react';
import { Flame, Zap, Compass } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Language } from '../../types';

export const Header: React.FC = () => {
  const {
    language,
    setLanguage,
    streakDays,
    totalXp,
    lastXpGain,
    setIsDemoTourActive,
    isDemoTourActive
  } = useApp();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'mr', label: 'मराठी' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-cream-100/90 backdrop-blur-md border-b border-cream-200/80 px-4 py-2.5 transition-all">
      <div className="flex items-center justify-between gap-2">
        {/* Brand */}
        <div className="flex items-center gap-1.5">
          <div className="w-7 h-7 rounded-xl bg-coral-500 text-white flex items-center justify-center font-black text-sm tracking-tight shadow-coral-glow/30">
            m
          </div>
          <span className="font-extrabold text-lg tracking-tight text-charcoal-900">
            monee
          </span>
        </div>

        {/* Stats & Language */}
        <div className="flex items-center gap-2">
          {/* Streak Chip */}
          <div
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold"
            title={`${streakDays} Day Learning Streak`}
          >
            <Flame className="w-3.5 h-3.5 fill-current animate-bounce-soft" />
            <span>{streakDays}</span>
          </div>

          {/* XP Chip */}
          <div
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-butter-100 border border-butter-200 text-charcoal-800 text-xs font-bold relative"
            title={`${totalXp} Knowledge XP`}
          >
            <Zap className="w-3.5 h-3.5 fill-butter-400 text-butter-500" />
            <span>{totalXp}</span>

            {/* XP Gain Floating Pill */}
            {lastXpGain && (
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-mint-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md whitespace-nowrap animate-bounce-soft">
                +{lastXpGain.amount} XP
              </span>
            )}
          </div>

          {/* Trilingual Switcher */}
          <div className="flex items-center bg-cream-200 p-0.5 rounded-full border border-cream-300">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLanguage(l.code)}
                className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                  language === l.code
                    ? 'bg-charcoal-900 text-white shadow-xs'
                    : 'text-charcoal-600 hover:text-charcoal-900'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Judge Demo Quick Trigger */}
          <button
            onClick={() => setIsDemoTourActive(!isDemoTourActive)}
            className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-lavender-100 hover:bg-lavender-200 text-lavender-800 border border-lavender-300 text-xs font-semibold"
            title="Start Hackathon Judge Tour"
          >
            <Compass className="w-3.5 h-3.5 text-lavender-600" />
            <span>Tour</span>
          </button>
        </div>
      </div>
    </header>
  );
};

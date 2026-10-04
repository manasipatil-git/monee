import React, { useState } from 'react';
import { Flame, Award, Zap, Brain, CheckCircle, HelpCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { conceptsData } from '../../data/concepts';
import { translations } from '../../data/translations';

export const ProgressView: React.FC = () => {
  const {
    streakDays,
    totalXp,
    badges,
    completedConcepts,
    recalledConcepts,
    markConceptRecalled,
    addXp,
    language
  } = useApp();

  const [memoryAnswerIndex, setMemoryAnswerIndex] = useState<number | null>(null);
  const [hasAnsweredMemory, setHasAnsweredMemory] = useState(false);
  const [dailyChallengeDone, setDailyChallengeDone] = useState(false);
  const [dailyAnswerIndex, setDailyAnswerIndex] = useState<number | null>(null);

  const t = translations[language];

  // Weekly days
  const weekDays = [
    { day: 'M', active: true },
    { day: 'T', active: true },
    { day: 'W', active: true },
    { day: 'T', active: true }, // Today
    { day: 'F', active: false },
    { day: 'S', active: false },
    { day: 'S', active: false },
  ];

  // Active memory quiz using Volatility concept
  const volatilityConcept = conceptsData[0];
  const memoryQuiz = volatilityConcept.memoryCheck;

  const handleMemorySubmit = (idx: number) => {
    setMemoryAnswerIndex(idx);
    setHasAnsweredMemory(true);
    if (idx === memoryQuiz.correctIndex) {
      markConceptRecalled('volatility');
    }
  };

  const handleDailySubmit = (idx: number) => {
    setDailyAnswerIndex(idx);
    setDailyChallengeDone(true);
    addXp(20, 'Daily Challenge Completed');
  };

  return (
    <div className="space-y-4 pb-8 animate-fade-in">
      {/* Streak Hero Card */}
      <div className="bg-gradient-to-br from-orange-500 to-coral-600 text-white rounded-3xl p-5 shadow-coral-glow/30 relative overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-2xl bg-white/20 backdrop-blur-sm">
              <Flame className="w-6 h-6 fill-current text-white animate-bounce-soft" />
            </span>
            <div>
              <div className="text-2xl font-black tracking-tight">
                {streakDays} DAY STREAK
              </div>
              <div className="text-xs text-white/80 font-medium">
                Keep your money-learning streak alive
              </div>
            </div>
          </div>

          <div className="text-right">
            <span className="text-xs font-bold bg-white/20 px-2.5 py-1 rounded-full text-white">
              Habit Builder
            </span>
          </div>
        </div>

        {/* Weekly Calendar Dots */}
        <div className="flex items-center justify-between bg-black/15 backdrop-blur-sm rounded-2xl p-3">
          {weekDays.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1.5">
              <span className="text-[10px] font-bold text-white/70">{item.day}</span>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                  item.active
                    ? 'bg-white text-coral-600 shadow-sm'
                    : 'bg-white/10 text-white/40 border border-white/20'
                }`}
              >
                {item.active ? '✓' : ''}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Challenge Card */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-cream-300 shadow-soft">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-coral-600">
                Daily 1-Min Challenge
              </span>
              <h3 className="font-extrabold text-sm sm:text-base text-charcoal-900">
                "What does NAV truly tell an investor?"
              </h3>
            </div>
          </div>
          <span className="text-xs font-bold text-butter-600 bg-butter-50 border border-butter-200 px-2 py-0.5 rounded-full">
            +20 XP
          </span>
        </div>

        {!dailyChallengeDone ? (
          <div className="space-y-2 mt-3">
            {[
              "It shows whether a mutual fund is on cheap discount sale",
              "It represents the per-unit value of the underlying pool",
              "It guarantees next month's return percentage"
            ].map((opt, i) => (
              <button
                key={i}
                onClick={() => handleDailySubmit(i)}
                className="w-full text-left p-3 rounded-2xl border border-cream-300 hover:border-coral-400 bg-cream-50 text-xs font-medium text-charcoal-800 transition-all active:scale-98"
              >
                {opt}
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-3 p-3 bg-mint-50 border border-mint-200 rounded-2xl animate-fade-in text-xs text-charcoal-800">
            <div className="font-bold text-mint-800 flex items-center gap-1 mb-1">
              <CheckCircle className="w-4 h-4 text-mint-600" />
              <span>Great Job! Daily Streak Maintained!</span>
            </div>
            <p>
              NAV is merely the per-unit slice value of the basket, never a discount. You earned +20 XP!
            </p>
          </div>
        )}
      </div>

      {/* Memory Boost 🧠 Card */}
      <div className="bg-lavender-50/60 rounded-3xl p-4 sm:p-5 border border-lavender-200 shadow-soft">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧠</span>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-lavender-800">
                {t.memoryBoost || 'Memory Boost 🧠'}
              </span>
              <h3 className="font-extrabold text-sm sm:text-base text-charcoal-900">
                You learned volatility recently. Recall test:
              </h3>
            </div>
          </div>
          <span className="text-xs font-bold text-lavender-800 bg-lavender-100 px-2 py-0.5 rounded-full border border-lavender-200">
            Spaced Repetition
          </span>
        </div>

        <p className="text-xs text-charcoal-700 font-semibold mb-3">
          {memoryQuiz.question[language]}
        </p>

        <div className="space-y-2 mb-3">
          {memoryQuiz.options[language].map((optionText, idx) => {
            const isSelected = memoryAnswerIndex === idx;
            const isCorrect = idx === memoryQuiz.correctIndex;
            return (
              <button
                key={idx}
                disabled={hasAnsweredMemory}
                onClick={() => handleMemorySubmit(idx)}
                className={`w-full text-left p-3 rounded-2xl border text-xs font-semibold transition-all ${
                  hasAnsweredMemory
                    ? isCorrect
                      ? 'bg-mint-100 border-mint-400 text-mint-900'
                      : isSelected
                      ? 'bg-red-100 border-red-300 text-red-900'
                      : 'bg-white border-cream-200 text-charcoal-500 opacity-60'
                    : 'bg-white border-cream-300 hover:border-lavender-400 text-charcoal-800'
                }`}
              >
                {optionText}
              </button>
            );
          })}
        </div>

        {hasAnsweredMemory && (
          <div className="p-3 bg-white rounded-2xl border border-lavender-200 text-xs animate-fade-in">
            <div className="font-bold text-charcoal-900 mb-0.5">
              {memoryAnswerIndex === memoryQuiz.correctIndex
                ? (t.rememberedFeedback || 'Nice! You remembered it.')
                : (t.needsReviewFeedback || "Good try! We'll review this again soon.")}
            </div>
            <p className="text-charcoal-600">
              {memoryQuiz.explanation[language]}
            </p>
          </div>
        )}
      </div>

      {/* XP System & Breakdown Card */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-cream-300 shadow-soft">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-butter-100 text-butter-700 flex items-center justify-center font-bold">
              <Zap className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-charcoal-900">
                Knowledge XP Engine
              </h3>
              <p className="text-[11px] text-charcoal-500">
                Rewarding educational consistency, never financial risk
              </p>
            </div>
          </div>

          <div className="text-right">
            <span className="text-xl font-black text-charcoal-900">{totalXp}</span>
            <span className="text-[10px] text-charcoal-400 block font-bold">TOTAL XP</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
          {[
            { label: 'Interactive Lesson', xp: '+20 XP', icon: '🌱' },
            { label: 'Simulation Test', xp: '+40 XP', icon: '🎢' },
            { label: 'Emotional Reflection', xp: '+15 XP', icon: '💡' },
            { label: 'Voice Lesson', xp: '+10 XP', icon: '🔊' },
            { label: 'Memory Boost', xp: '+15 XP', icon: '🧠' },
            { label: 'Jargon Simplifier', xp: '+15 XP', icon: '✨' },
          ].map((r, i) => (
            <div key={i} className="p-2.5 bg-cream-50 rounded-xl border border-cream-200">
              <div className="flex items-center justify-between mb-1">
                <span>{r.icon}</span>
                <span className="font-extrabold text-charcoal-900">{r.xp}</span>
              </div>
              <div className="text-[11px] text-charcoal-600 leading-tight">{r.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Badges Showcase */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-cream-300 shadow-soft">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-coral-500" />
            <h3 className="font-extrabold text-base text-charcoal-900">
              Resilience Badges
            </h3>
          </div>
          <span className="text-xs font-bold text-charcoal-600">
            {badges.filter(b => b.unlocked).length}/{badges.length} Unlocked
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {badges.map((b) => (
            <div
              key={b.id}
              className={`p-3 rounded-2xl border text-left transition-all ${
                b.unlocked
                  ? 'bg-cream-50 border-coral-200 shadow-xs'
                  : 'bg-cream-100/50 border-cream-200 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-2xl">{b.icon}</span>
                {b.unlocked ? (
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-mint-100 text-mint-700">
                    Earned
                  </span>
                ) : (
                  <span className="text-[9px] font-bold text-charcoal-400">Locked</span>
                )}
              </div>
              <h4 className="font-extrabold text-xs text-charcoal-900 mb-0.5">
                {b.title}
              </h4>
              <p className="text-[10px] text-charcoal-500 leading-snug">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

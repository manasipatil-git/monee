import React from 'react';
import { Flame, Zap, Award, Globe, Volume2, ShieldCheck, RotateCcw, Heart, BookOpen } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Language } from '../../types';
import { speechService } from '../../utils/speech';

export const YouView: React.FC = () => {
  const {
    streakDays,
    totalXp,
    badges,
    completedConcepts,
    recalledConcepts,
    language,
    setLanguage,
    resetOnboarding
  } = useApp();

  const userLevel = Math.max(1, Math.floor(totalXp / 50) + 1);

  const handleTestVoice = () => {
    const sample = language === 'hi'
      ? "नमस्ते! monee में आपका स्वागत है। पैसों को जोखिम में डालने से पहले, उसे महसूस करें।"
      : language === 'mr'
      ? "नमस्कार! monee मध्ये तुमचे स्वागत आहे. पैसे धोक्यात घालण्यापूर्वी ते अनुभवून पहा."
      : "Welcome to monee! Experience money before you risk it.";
    speechService.speak(sample, language);
  };

  return (
    <div className="space-y-4 pb-8 animate-fade-in">
      {/* Profile Card */}
      <div className="bg-white rounded-3xl p-5 border border-cream-300 shadow-soft text-center relative overflow-hidden">
        <div className="w-20 h-20 rounded-3xl bg-coral-100 border-2 border-coral-200 flex items-center justify-center text-4xl mx-auto mb-3 shadow-inner">
          🦊
        </div>

        <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-cream-200 text-charcoal-700 text-xs font-bold mb-1">
          <span>Level {userLevel}</span> • <span>Money Explorer</span>
        </div>

        <h2 className="text-xl font-black text-charcoal-900 tracking-tight">
          Bharat Learner
        </h2>
        <p className="text-xs text-charcoal-500 mb-4">
          Building resilient financial understanding with zero real risk
        </p>

        {/* 3 Metric Pills */}
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-cream-200 text-center">
          <div className="p-2 bg-cream-50 rounded-2xl border border-cream-200">
            <div className="flex items-center justify-center gap-1 text-orange-600 font-bold text-xs mb-0.5">
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>Streak</span>
            </div>
            <div className="text-base font-black text-charcoal-900">{streakDays} Days</div>
          </div>

          <div className="p-2 bg-cream-50 rounded-2xl border border-cream-200">
            <div className="flex items-center justify-center gap-1 text-butter-700 font-bold text-xs mb-0.5">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Total XP</span>
            </div>
            <div className="text-base font-black text-charcoal-900">{totalXp}</div>
          </div>

          <div className="p-2 bg-cream-50 rounded-2xl border border-cream-200">
            <div className="flex items-center justify-center gap-1 text-coral-600 font-bold text-xs mb-0.5">
              <Award className="w-3.5 h-3.5" />
              <span>Badges</span>
            </div>
            <div className="text-base font-black text-charcoal-900">
              {badges.filter(b => b.unlocked).length}
            </div>
          </div>
        </div>
      </div>

      {/* Retention Counters */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-cream-300 shadow-soft">
        <h3 className="font-extrabold text-sm text-charcoal-900 mb-3">
          Learning Retention Stats
        </h3>

        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="p-3 bg-mint-50 rounded-2xl border border-mint-200">
            <span className="text-2xl font-black text-mint-800 block">
              {completedConcepts.length}
            </span>
            <span className="text-xs text-charcoal-600 font-semibold">Concepts Learned</span>
          </div>

          <div className="p-3 bg-lavender-50 rounded-2xl border border-lavender-200">
            <span className="text-2xl font-black text-lavender-800 block">
              {recalledConcepts.length}
            </span>
            <span className="text-xs text-charcoal-600 font-semibold">Concepts Remembered</span>
          </div>
        </div>
      </div>

      {/* Language Preference Card */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-cream-300 shadow-soft">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-coral-500" />
            <h3 className="font-extrabold text-sm text-charcoal-900">
              Learning Language
            </h3>
          </div>
          <span className="text-xs text-charcoal-400 font-medium">Switch anytime</span>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { code: 'en' as Language, title: 'English' },
            { code: 'hi' as Language, title: 'हिंदी' },
            { code: 'mr' as Language, title: 'मराठी' },
          ].map((l) => (
            <button
              key={l.code}
              onClick={() => setLanguage(l.code)}
              className={`py-2 px-3 rounded-2xl font-bold text-xs border transition-all ${
                language === l.code
                  ? 'bg-charcoal-900 text-white border-charcoal-900 shadow-xs'
                  : 'bg-cream-50 text-charcoal-700 border-cream-300 hover:border-coral-400'
              }`}
            >
              {l.title}
            </button>
          ))}
        </div>

        <button
          onClick={handleTestVoice}
          className="w-full py-2.5 px-4 rounded-xl bg-lavender-100 hover:bg-lavender-200 text-lavender-900 font-bold text-xs flex items-center justify-center gap-2 border border-lavender-200 transition-all active:scale-95"
        >
          <Volume2 className="w-4 h-4 text-lavender-700" />
          <span>Test Regional Voice Engine</span>
        </button>
      </div>

      {/* Hackathon Trust & Compliance Card */}
      <div className="bg-cream-100 rounded-3xl p-4 sm:p-5 border border-cream-300 text-xs space-y-2">
        <div className="flex items-center gap-2 text-charcoal-900 font-black">
          <ShieldCheck className="w-5 h-5 text-mint-600" />
          <span>SANGYAN Hackathon • SEBI & NSDL</span>
        </div>

        <p className="text-charcoal-600 leading-relaxed">
          Built for <strong>Track C: Investor Education for Bharat</strong> by IIT (BHU) in collaboration with SEBI and NSDL.
        </p>

        <p className="text-charcoal-500 text-[11px] leading-relaxed">
          monee is strictly a public-good educational platform. Zero stock tips, zero brokerage, zero real money. We teach financial understanding, not investing.
        </p>

        <div className="pt-2 border-t border-cream-200 flex justify-between items-center">
          <button
            onClick={resetOnboarding}
            className="text-[11px] font-bold text-coral-600 hover:text-coral-700 flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Re-run Welcome Onboarding</span>
          </button>
          <span className="text-[10px] text-charcoal-400 font-semibold">monee v1.0 MVP</span>
        </div>
      </div>
    </div>
  );
};

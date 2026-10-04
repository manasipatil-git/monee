import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Language } from '../../types';
import { translations } from '../../data/translations';
import { MoneeMascot } from '../common/MoneeMascot';

// Custom hand-drawn vector illustrations for Screen 2 (No emoji spam)
const SeedlingCoinIllustration: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="42" rx="14" ry="3" fill="#1F1B18" fillOpacity="0.08" />
    <circle cx="24" cy="24" r="16" fill="#F4E6D2" stroke="#1F1B18" strokeWidth="2.5" />
    <circle cx="24" cy="24" r="12" fill="#E5A124" stroke="#1F1B18" strokeWidth="2" strokeDasharray="3 2" />
    <text x="20" y="29" fontSize="15" fontWeight="900" fill="#1F1B18" fontFamily="sans-serif">₹</text>
    {/* Sprout emerging */}
    <path d="M 24 16 C 24 8, 32 6, 34 10 C 34 14, 28 16, 24 16 Z" fill="#287D54" stroke="#1F1B18" strokeWidth="1.5" />
    <path d="M 24 16 C 24 10, 18 8, 16 12 C 16 16, 22 17, 24 16 Z" fill="#287D54" stroke="#1F1B18" strokeWidth="1.5" />
  </svg>
);

const MarketHillIllustration: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="42" rx="16" ry="3" fill="#1F1B18" fillOpacity="0.08" />
    {/* Rolling Hill */}
    <path d="M 6 40 Q 20 18 36 28 Q 42 34 44 40 Z" fill="#EAF4F0" stroke="#1F1B18" strokeWidth="2.5" strokeLinejoin="round" />
    {/* Animated Rollercoaster Path */}
    <path d="M 8 38 Q 20 16 32 26 Q 38 32 42 22" stroke="#E85D38" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 3" fill="none" />
    {/* Victory Flag at Peak */}
    <line x1="20" y1="16" x2="20" y2="8" stroke="#1F1B18" strokeWidth="2" strokeLinecap="round" />
    <polygon points="20,8 28,11 20,14" fill="#E85D38" stroke="#1F1B18" strokeWidth="1.5" />
  </svg>
);

const BalanceScaleIllustration: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="42" rx="12" ry="3" fill="#1F1B18" fillOpacity="0.08" />
    {/* Central Pillar */}
    <line x1="24" y1="14" x2="24" y2="40" stroke="#1F1B18" strokeWidth="2.5" strokeLinecap="round" />
    <rect x="18" y="38" width="12" height="4" rx="2" fill="#6B6259" stroke="#1F1B18" strokeWidth="2" />
    {/* Cross Beam in equilibrium */}
    <line x1="10" y1="18" x2="38" y2="18" stroke="#1F1B18" strokeWidth="3" strokeLinecap="round" />
    <circle cx="24" cy="18" r="3" fill="#E5A124" stroke="#1F1B18" strokeWidth="2" />
    {/* Left Pan */}
    <line x1="10" y1="18" x2="7" y2="28" stroke="#1F1B18" strokeWidth="1.5" />
    <line x1="10" y1="18" x2="13" y2="28" stroke="#1F1B18" strokeWidth="1.5" />
    <path d="M 5 28 Q 10 32 15 28 Z" fill="#E85D38" stroke="#1F1B18" strokeWidth="1.5" />
    {/* Right Pan */}
    <line x1="38" y1="18" x2="35" y2="28" stroke="#1F1B18" strokeWidth="1.5" />
    <line x1="38" y1="18" x2="41" y2="28" stroke="#1F1B18" strokeWidth="1.5" />
    <path d="M 33 28 Q 38 32 43 28 Z" fill="#287D54" stroke="#1F1B18" strokeWidth="1.5" />
  </svg>
);

const SafeKeyIllustration: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="42" rx="13" ry="3" fill="#1F1B18" fillOpacity="0.08" />
    {/* Padlock Body */}
    <rect x="12" y="20" width="24" height="20" rx="5" fill="#FAF7F2" stroke="#1F1B18" strokeWidth="2.5" />
    {/* Shackle */}
    <path d="M 17 20 V 14 C 17 9.5, 31 9.5, 31 14 V 20" stroke="#1F1B18" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Keyhole */}
    <circle cx="24" cy="28" r="2.5" fill="#1F1B18" />
    <path d="M 23 28 L 22 34 H 26 L 25 28 Z" fill="#1F1B18" />
    {/* Golden Key */}
    <circle cx="36" cy="34" r="3.5" fill="#E5A124" stroke="#1F1B18" strokeWidth="1.5" />
    <line x1="33" y1="36" x2="28" y2="40" stroke="#1F1B18" strokeWidth="2" strokeLinecap="round" />
    <line x1="29" y1="39" x2="31" y2="41" stroke="#1F1B18" strokeWidth="2" />
  </svg>
);

export const OnboardingFlow: React.FC = () => {
  const {
    completeOnboarding,
    language,
    setLanguage,
    setActiveTab,
    setActiveSimulatorId,
    addXp,
    unlockBadge
  } = useApp();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedGoal, setSelectedGoal] = useState<'money' | 'markets' | 'decisions' | 'safety'>('markets');
  const [selectedActionChoice, setSelectedActionChoice] = useState<'hold' | 'panic' | null>('hold');

  const t = translations[language];

  const handleFinishOnboarding = () => {
    completeOnboarding();
    addXp(25, 'First Money Step');
    unlockBadge('first-step');
    setActiveTab('play');
    setActiveSimulatorId('volatility');
  };

  return (
    <div className="h-full flex flex-col justify-between p-5 sm:p-6 bg-[#FAF7F2] text-[#1F1B18] select-none">
      {/* Top Header & Progress Dots */}
      <div className="flex items-center justify-between pt-1 mb-2">
        <div className="flex items-center gap-2">
          {step > 1 ? (
            <button
              onClick={() => setStep((s) => (s - 1) as any)}
              className="p-1 -ml-1 text-[#6B6259] hover:text-[#1F1B18] transition-colors rounded-full hover:bg-[#F2ECE1]"
              aria-label="Go back"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            </button>
          ) : (
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-lg bg-[#E85D38] text-white font-black text-xs flex items-center justify-center shadow-xs">
                m
              </div>
              <span className="font-extrabold text-sm tracking-tight text-[#1F1B18]">monee</span>
            </div>
          )}
        </div>

        {/* 4 Step Indicator Pills */}
        <div className="flex items-center gap-1.5">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                step === s
                  ? 'w-6 bg-[#E85D38]'
                  : step > s
                  ? 'w-2 bg-[#1F1B18]'
                  : 'w-2 bg-[#E8DFD3]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= SCREEN 1: THE RELATABLE HOOK ================= */}
      {step === 1 && (
        <div className="flex-1 flex flex-col justify-between py-4 animate-fade-in">
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            {/* Friendly Mascot: Confused */}
            <div className="mb-6 relative">
              <div className="w-40 h-40 rounded-full bg-[#F3ECE2] border border-[#E8DFD3] flex items-center justify-center">
                <MoneeMascot mood="confused" size="hero" />
              </div>
            </div>

            {/* Conversational, human headline */}
            <h1 className="text-2xl sm:text-3xl font-black text-[#1F1B18] tracking-tight leading-tight mb-2 max-w-xs">
              {t.onboardingHookTitle}
            </h1>

            {/* Smaller reassuring subline */}
            <p className="text-sm sm:text-base font-medium text-[#6B6259] leading-relaxed max-w-xs">
              {t.onboardingHookSub}
            </p>
          </div>

          {/* Action button */}
          <button
            onClick={() => setStep(2)}
            className="w-full py-3.5 px-6 rounded-2xl bg-[#E85D38] hover:bg-[#D34B26] text-white font-bold text-base shadow-soft flex items-center justify-center gap-2 transition-transform active:scale-98 cursor-pointer"
          >
            <span>{t.onboardingHookBtn}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      )}

      {/* ================= SCREEN 2: WHAT DO YOU WANT TO UNDERSTAND? ================= */}
      {step === 2 && (
        <div className="flex-1 flex flex-col justify-between py-2 animate-fade-in">
          <div>
            <div className="text-center mb-4">
              <h2 className="text-xl sm:text-2xl font-black text-[#1F1B18] tracking-tight leading-tight mb-1">
                {t.onboardingGoalTitle}
              </h2>
              <p className="text-xs text-[#6B6259] font-medium">
                {t.onboardingGoalSub}
              </p>
            </div>

            {/* 4 Illustrated Tappable Object Cards */}
            <div className="space-y-2.5">
              {[
                {
                  id: 'money' as const,
                  title: t.onboardingGoal1Title,
                  desc: t.onboardingGoal1Sub,
                  illustration: <SeedlingCoinIllustration />
                },
                {
                  id: 'markets' as const,
                  title: t.onboardingGoal2Title,
                  desc: t.onboardingGoal2Sub,
                  illustration: <MarketHillIllustration />
                },
                {
                  id: 'decisions' as const,
                  title: t.onboardingGoal3Title,
                  desc: t.onboardingGoal3Sub,
                  illustration: <BalanceScaleIllustration />
                },
                {
                  id: 'safety' as const,
                  title: t.onboardingGoal4Title,
                  desc: t.onboardingGoal4Sub,
                  illustration: <SafeKeyIllustration />
                },
              ].map((goal) => {
                const isSelected = selectedGoal === goal.id;
                return (
                  <button
                    key={goal.id}
                    onClick={() => setSelectedGoal(goal.id)}
                    className={`w-full p-3 rounded-2xl border-2 text-left flex items-center gap-3 transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#E85D38] bg-[#FDF3EE] shadow-soft'
                        : 'border-[#E8DFD3] hover:border-[#D5C7B7] bg-white'
                    }`}
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#E8DFD3] flex items-center justify-center">
                      {goal.illustration}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="font-extrabold text-[#1F1B18] text-sm leading-snug">
                        {goal.title}
                      </div>
                      <div className="text-[11px] text-[#6B6259] truncate font-medium">
                        {goal.desc}
                      </div>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                        isSelected
                          ? 'bg-[#E85D38] border-[#E85D38] text-white'
                          : 'border-[#D5C7B7] bg-white'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => setStep(3)}
            className="w-full py-3.5 px-6 rounded-2xl bg-[#1F1B18] hover:bg-[#34302D] text-white font-bold text-base shadow-soft flex items-center justify-center gap-2 transition-transform active:scale-98 cursor-pointer mt-4"
          >
            <span>{t.onboardingNext}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      )}

      {/* ================= SCREEN 3: CHOOSE YOUR LANGUAGE ================= */}
      {step === 3 && (
        <div className="flex-1 flex flex-col justify-between py-2 animate-fade-in">
          <div>
            <div className="flex flex-col items-center text-center mb-4">
              <div className="mb-2">
                <MoneeMascot mood="welcoming" size="md" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#1F1B18] tracking-tight leading-tight mb-1">
                {t.onboardingLangTitle}
              </h2>
              <p className="text-xs text-[#6B6259] font-medium max-w-xs">
                {t.onboardingLangSub}
              </p>
            </div>

            {/* 3 Large, Respectful Language Cards */}
            <div className="space-y-3">
              {[
                {
                  code: 'mr' as Language,
                  primary: 'मराठी',
                  script: 'मराठीत सोपे शिक्षण',
                  note: 'सहज, साधी आणि व्यावहारिक उदाहरणे'
                },
                {
                  code: 'hi' as Language,
                  primary: 'हिन्दी',
                  script: 'हिंदी में सीखें',
                  note: 'रोज़मर्रा की आसान भाषा और मिसालें'
                },
                {
                  code: 'en' as Language,
                  primary: 'English',
                  script: 'Simple English',
                  note: 'Conversational, zero financial jargon'
                },
              ].map((langOpt) => {
                const isSelected = language === langOpt.code;
                return (
                  <button
                    key={langOpt.code}
                    onClick={() => setLanguage(langOpt.code)}
                    className={`w-full p-4 rounded-2xl border-2 text-left flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#E85D38] bg-[#FDF3EE] shadow-soft'
                        : 'border-[#E8DFD3] hover:border-[#D5C7B7] bg-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-black text-lg text-[#1F1B18]">
                          {langOpt.primary}
                        </span>
                        <span className="text-xs font-semibold text-[#6B6259]">
                          • {langOpt.script}
                        </span>
                      </div>
                      <div className="text-xs text-[#6B6259] mt-0.5 font-medium">
                        {langOpt.note}
                      </div>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all ${
                        isSelected
                          ? 'bg-[#E85D38] border-[#E85D38] text-white'
                          : 'border-[#D5C7B7] bg-white'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => setStep(4)}
            className="w-full py-3.5 px-6 rounded-2xl bg-[#E85D38] hover:bg-[#D34B26] text-white font-bold text-base shadow-soft flex items-center justify-center gap-2 transition-transform active:scale-98 cursor-pointer mt-4"
          >
            <span>{t.onboardingNext}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      )}

      {/* ================= SCREEN 4: IMMEDIATE ACTION (TRY IT) ================= */}
      {step === 4 && (
        <div className="flex-1 flex flex-col justify-between py-2 animate-fade-in">
          <div>
            {/* Mascot in worried / tense shock state */}
            <div className="flex flex-col items-center text-center mb-3">
              <MoneeMascot mood="worried" size="md" />
              <h2 className="text-xl sm:text-2xl font-black text-[#1F1B18] tracking-tight leading-tight mt-1 mb-1">
                {t.onboardingActionTitle}
              </h2>
              <p className="text-xs text-[#6B6259] font-medium">
                {t.onboardingActionSub}
              </p>
            </div>

            {/* Tactile Market Shock Receipt / Balance Card */}
            <div className="bg-white border-2 border-[#E8DFD3] rounded-2xl p-4 shadow-soft mb-3">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#6B6259] pb-2 border-b border-[#F2ECE1]">
                <span>{language === 'mr' ? 'सरावाचे पैसे' : language === 'hi' ? 'प्रैक्टिस बैलेंस' : 'Practice Balance'}</span>
                <span className="text-[#D63D2E] font-bold animate-pulse">📉 -20% Drop</span>
              </div>

              <div className="flex items-baseline justify-between mt-3 mb-1">
                <div>
                  <div className="text-[11px] text-[#6B6259]">{language === 'mr' ? 'मूळ रक्कम' : language === 'hi' ? 'शुरुआती राशि' : 'Starting amount'}</div>
                  <div className="text-sm font-bold text-[#6B6259] line-through">₹50,000</div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-[#D63D2E] font-semibold">{language === 'mr' ? 'सध्याचे मूल्य' : language === 'hi' ? 'वर्तमान मूल्य' : 'Current value'}</div>
                  <div className="text-2xl font-black text-[#D63D2E]">₹40,000</div>
                </div>
              </div>
            </div>

            {/* Quick interactive choice teaser */}
            <div className="grid grid-cols-2 gap-2 mb-2">
              <button
                onClick={() => setSelectedActionChoice('panic')}
                className={`p-2.5 rounded-xl border-2 text-center text-xs font-bold transition-all cursor-pointer ${
                  selectedActionChoice === 'panic'
                    ? 'border-[#D63D2E] bg-[#FDF0EE] text-[#D63D2E]'
                    : 'border-[#E8DFD3] bg-white text-[#6B6259] hover:border-[#D5C7B7]'
                }`}
              >
                {t.onboardingChoicePanic}
              </button>

              <button
                onClick={() => setSelectedActionChoice('hold')}
                className={`p-2.5 rounded-xl border-2 text-center text-xs font-bold transition-all cursor-pointer ${
                  selectedActionChoice === 'hold'
                    ? 'border-[#287D54] bg-[#EAF4F0] text-[#287D54]'
                    : 'border-[#E8DFD3] bg-white text-[#6B6259] hover:border-[#D5C7B7]'
                }`}
              >
                {t.onboardingChoiceHold}
              </button>
            </div>
          </div>

          {/* Action CTA: Directly enters the real crash simulator */}
          <div>
            <button
              onClick={handleFinishOnboarding}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#E85D38] hover:bg-[#D34B26] text-white font-bold text-base shadow-soft flex items-center justify-center gap-2 transition-transform active:scale-98 cursor-pointer"
            >
              <span>{t.onboardingActionBtn}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
            <p className="text-[10px] text-center text-[#9E9285] mt-2 font-medium">
              {language === 'mr'
                ? 'कोणताही धोका नाही • १० सेकंदात प्रत्यक्ष अनुभव घ्या'
                : language === 'hi'
                ? 'शून्य जोखिम • 10 सेकंड में खुद अनुभव करें'
                : 'Zero risk • Experience consequences in 10 seconds'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

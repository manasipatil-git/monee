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
  const [consequenceChoice, setConsequenceChoice] = useState<'sell' | 'hold' | null>(null);

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
        <div className="flex-1 flex flex-col justify-between py-2 sm:py-4 animate-fade-in">
          <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
            {/* Mascot sitting naturally on canvas (no avatar circle) */}
            <div className="mb-6 flex flex-col items-center justify-center">
              <MoneeMascot
                mood="confused"
                size="hero"
                showThoughtBubble={true}
                thoughtText={
                  language === 'mr'
                    ? 'हे नेमकं कसं चालतं?'
                    : language === 'hi'
                    ? 'यह सब कैसे काम करता है?'
                    : 'How does this actually work?'
                }
              />
            </div>

            {/* Conversational, human headline */}
            <h1 className="text-2xl sm:text-3xl font-black text-[#1F1B18] tracking-tight leading-tight mb-2 max-w-xs">
              {t.onboardingHookTitle}
            </h1>

            {/* Reassuring subline */}
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

      {/* ================= SCREEN 2: 2x2 ILLUSTRATED CHOICES ================= */}
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

            {/* 2x2 Illustrated Choice Grid (Not a settings form) */}
            <div className="grid grid-cols-2 gap-3">
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
                    className={`p-3.5 rounded-2xl border-2 text-left flex flex-col justify-between min-h-[145px] transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#E85D38] bg-[#FDF3EE] shadow-soft ring-1 ring-[#E85D38]'
                        : 'border-[#E8DFD3] hover:border-[#D5C7B7] bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E8DFD3] flex items-center justify-center">
                        {goal.illustration}
                      </div>
                      {isSelected && (
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E85D38]" />
                      )}
                    </div>

                    <div>
                      <div className="font-black text-[#1F1B18] text-sm leading-tight mb-1">
                        {goal.title}
                      </div>
                      <div className="text-[11px] text-[#6B6259] leading-snug line-clamp-2 font-medium">
                        {goal.desc}
                      </div>
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

      {/* ================= SCREEN 3: RESPECTFUL REGIONAL LANGUAGE ================= */}
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

            {/* 3 Prominent Language Cards */}
            <div className="space-y-3">
              {[
                {
                  code: 'mr' as Language,
                  nativeName: 'मराठी',
                  label: 'मराठीत सोपे शिक्षण',
                  desc: 'सहज, साधी आणि अस्सल स्थानिक उदाहरणे',
                  badge: 'स्थानिक भाषा'
                },
                {
                  code: 'hi' as Language,
                  nativeName: 'हिन्दी',
                  label: 'हिंदी में सीखें',
                  desc: 'रोज़मर्रा की आसान भाषा और देसी मिसालें',
                  badge: 'राष्ट्रभाषा'
                },
                {
                  code: 'en' as Language,
                  nativeName: 'English',
                  label: 'Simple English',
                  desc: 'Conversational, zero financial jargon',
                  badge: 'Everyday words'
                },
              ].map((langOpt) => {
                const isSelected = language === langOpt.code;
                return (
                  <button
                    key={langOpt.code}
                    onClick={() => setLanguage(langOpt.code)}
                    className={`w-full p-4 rounded-2xl border-2 text-left flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#E85D38] bg-[#FDF3EE] shadow-soft ring-1 ring-[#E85D38]'
                        : 'border-[#E8DFD3] hover:border-[#D5C7B7] bg-white'
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-black text-xl text-[#1F1B18]">
                          {langOpt.nativeName}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FAF7F2] border border-[#E8DFD3] text-[#6B6259]">
                          {langOpt.badge}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-[#1F1B18]/90">
                        {langOpt.label}
                      </div>
                      <div className="text-[11px] text-[#6B6259] mt-0.5 font-medium">
                        {langOpt.desc}
                      </div>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all ml-3 ${
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

      {/* ================= SCREEN 4: IMMEDIATE CONSEQUENCE MICRO-SIMULATION ================= */}
      {step === 4 && (
        <div className="flex-1 flex flex-col justify-between py-2 animate-fade-in">
          <div>
            {/* Mascot State Reacting to Decision */}
            <div className="flex flex-col items-center text-center mb-3">
              <MoneeMascot
                mood={
                  consequenceChoice === 'hold'
                    ? 'celebrating'
                    : consequenceChoice === 'sell'
                    ? 'worried'
                    : 'confused'
                }
                size="md"
                showThoughtBubble={consequenceChoice !== null}
                thoughtText={
                  consequenceChoice === 'sell'
                    ? (language === 'mr'
                        ? 'अरेरे! कायमचे नुकसान झाले!'
                        : language === 'hi'
                        ? 'ओह! पक्का नुकसान हो गया!'
                        : 'Loss locked in!')
                    : consequenceChoice === 'hold'
                    ? (language === 'mr'
                        ? 'छान! संयम राखला!'
                        : language === 'hi'
                        ? 'शाबाश! धैर्य बनाए रखा!'
                        : 'Smart patience!')
                    : undefined
                }
              />
              <h2 className="text-xl sm:text-2xl font-black text-[#1F1B18] tracking-tight leading-tight mt-1 mb-1">
                {t.onboardingUhOh}
              </h2>
              <p className="text-xs text-[#6B6259] font-medium max-w-xs">
                {t.onboardingDropSub}
              </p>
            </div>

            {/* Tactile Market Shock Receipt / Balance Card */}
            <div className="bg-white border-2 border-[#E8DFD3] rounded-2xl p-4 shadow-soft mb-3">
              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#6B6259] pb-2 border-b border-[#F2ECE1]">
                <span>
                  {language === 'mr'
                    ? 'सरावाचा पोर्टफोलिओ'
                    : language === 'hi'
                    ? 'प्रैक्टिस पोर्टफोलियो'
                    : 'Practice Portfolio'}
                </span>
                <span className="text-[#D63D2E] font-black px-2 py-0.5 rounded-md bg-[#FDF0EE] border border-[#FADCD7]">
                  📉 -20% Drop
                </span>
              </div>

              <div className="flex items-baseline justify-between mt-3">
                <div>
                  <div className="text-[11px] text-[#6B6259] font-medium">
                    {language === 'mr'
                      ? 'सुरुवातीची रक्कम'
                      : language === 'hi'
                      ? 'शुरुआती राशि'
                      : 'Starting balance'}
                  </div>
                  <div className="text-sm font-bold text-[#9E9285] line-through">₹50,000</div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-[#D63D2E] font-bold">
                    {consequenceChoice === 'sell'
                      ? (language === 'mr'
                          ? 'अंतिम रोख (नुकसान)'
                          : language === 'hi'
                          ? 'अंतिम नकद (नुकसान)'
                          : 'Cashed out (Loss)')
                      : (language === 'mr'
                          ? 'सध्याचे मूल्य'
                          : language === 'hi'
                          ? 'वर्तमान मूल्य'
                          : 'Current paper value')}
                  </div>
                  <div className="text-2xl font-black text-[#D63D2E]">₹40,000</div>
                </div>
              </div>
            </div>

            {/* Two visceral interactive choices */}
            <div className="grid grid-cols-2 gap-2.5 mb-3">
              <button
                onClick={() => setConsequenceChoice('sell')}
                className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                  consequenceChoice === 'sell'
                    ? 'border-[#D63D2E] bg-[#FDF0EE] shadow-soft ring-1 ring-[#D63D2E]'
                    : 'border-[#E8DFD3] bg-white hover:border-[#D5C7B7]'
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-[#FAF7F2] border border-[#E8DFD3] flex items-center justify-center mb-1.5 text-xs font-black text-[#D63D2E]">
                  ⚡
                </div>
                <div className="text-xs font-black text-[#D63D2E] leading-tight">
                  {t.onboardingChoiceSell}
                </div>
              </button>

              <button
                onClick={() => setConsequenceChoice('hold')}
                className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                  consequenceChoice === 'hold'
                    ? 'border-[#287D54] bg-[#EAF4F0] shadow-soft ring-1 ring-[#287D54]'
                    : 'border-[#E8DFD3] bg-white hover:border-[#D5C7B7]'
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-[#FAF7F2] border border-[#E8DFD3] flex items-center justify-center mb-1.5 text-xs font-black text-[#287D54]">
                  🛡️
                </div>
                <div className="text-xs font-black text-[#287D54] leading-tight">
                  {t.onboardingChoiceHold}
                </div>
              </button>
            </div>

            {/* Dynamic Immediate Consequence Feedback */}
            {consequenceChoice === 'sell' && (
              <div className="p-3.5 rounded-2xl border-2 border-[#D63D2E] bg-[#FDF0EE] animate-fade-in mb-2">
                <div className="text-xs font-black text-[#D63D2E] mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D63D2E]" />
                  <span>{t.onboardingConsequenceSellTag}</span>
                </div>
                <p className="text-xs text-[#1F1B18] font-medium leading-relaxed">
                  {t.onboardingConsequenceSellText}
                </p>
              </div>
            )}

            {consequenceChoice === 'hold' && (
              <div className="p-3.5 rounded-2xl border-2 border-[#287D54] bg-[#EAF4F0] animate-fade-in mb-2">
                <div className="text-xs font-black text-[#287D54] mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#287D54]" />
                  <span>{t.onboardingConsequenceHoldTag}</span>
                </div>
                <p className="text-xs text-[#1F1B18] font-medium leading-relaxed">
                  {t.onboardingConsequenceHoldText}
                </p>
              </div>
            )}

            {consequenceChoice === null && (
              <div className="p-3 rounded-2xl border border-dashed border-[#D5C7B7] bg-[#FAF7F2] text-center mb-2">
                <p className="text-xs font-medium text-[#6B6259]">
                  {language === 'mr'
                    ? '👆 वरील एका पर्यायावर टॅप करून परिणाम पहा'
                    : language === 'hi'
                    ? '👆 ऊपर किसी एक विकल्प पर टैप करके असर देखें'
                    : '👆 Tap an option above to experience the consequence'}
                </p>
              </div>
            )}
          </div>

          {/* Action CTA: Completes onboarding & directly opens Volatility Simulator */}
          <div>
            <button
              onClick={() => {
                if (!consequenceChoice) {
                  setConsequenceChoice('sell');
                } else {
                  handleFinishOnboarding();
                }
              }}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#E85D38] hover:bg-[#D34B26] text-white font-bold text-base shadow-soft flex items-center justify-center gap-2 transition-transform active:scale-98 cursor-pointer"
            >
              <span>{consequenceChoice ? t.onboardingConsequenceCTA : t.onboardingActionBtn}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
            <p className="text-[10px] text-center text-[#9E9285] mt-2 font-medium">
              {language === 'mr'
                ? 'कोणताही धोका नाही • १० सेकंदात प्रत्यक्ष अनुभव घ्या'
                : language === 'hi'
                ? 'शून्य जोखिम • 10 सेकंड में खुद अनुभव करें'
                : 'Zero risk • Experience consequences before risking real money'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

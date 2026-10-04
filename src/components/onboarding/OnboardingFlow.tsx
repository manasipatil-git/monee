import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check, TrendingUp, TrendingDown, Globe } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Language } from '../../types';

export const OnboardingFlow: React.FC = () => {
  const { completeOnboarding, language, setLanguage, addXp, unlockBadge } = useApp();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Screen 2 mini simulation state
  const [miniStep, setMiniStep] = useState<number>(0);
  const miniStages = [
    { label: "Starting fictional balance", value: 50000, change: "0%", color: "text-charcoal-800" },
    { label: "Market rises gently", value: 56000, change: "+12%", color: "text-mint-600" },
    { label: "Optimism spreads", value: 60480, change: "+8%", color: "text-mint-600" },
    { label: "Sudden pullback", value: 50198, change: "-17%", color: "text-orange-600" },
    { label: "Market crash", value: 32628, change: "-35%", color: "text-red-600" },
  ];

  const handleNextMini = () => {
    if (miniStep < miniStages.length - 1) {
      setMiniStep(miniStep + 1);
    } else {
      setStep(3);
    }
  };

  const handleFinish = () => {
    completeOnboarding();
    addXp(20, 'Completed Onboarding');
    unlockBadge('first-step');
  };

  return (
    <div className="min-h-full flex flex-col justify-between p-6 bg-cream-50 text-charcoal-900 select-none">
      {/* Top indicator dots */}
      <div className="flex items-center justify-between pt-2 mb-6">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-lg bg-coral-500 text-white font-black text-xs flex items-center justify-center">
            m
          </div>
          <span className="font-extrabold text-base tracking-tight">monee</span>
        </div>

        <div className="flex items-center gap-1.5">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1.5 rounded-full transition-all ${
                step === s ? 'w-6 bg-coral-500' : 'w-2 bg-cream-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Screen 1 */}
      {step === 1 && (
        <div className="flex-1 flex flex-col justify-center animate-fade-in py-4">
          <div className="relative mx-auto mb-8 w-44 h-44 rounded-3xl bg-lavender-100 border border-lavender-200 flex items-center justify-center shadow-soft">
            <span className="text-7xl transform hover:scale-110 transition-transform">🌱</span>
            <div className="absolute -bottom-3 -right-2 px-3 py-1 rounded-full bg-coral-500 text-white text-xs font-bold shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>Zero Risk</span>
            </div>
          </div>

          <h1 className="text-3xl font-extrabold text-charcoal-900 tracking-tight leading-tight mb-3 text-center">
            Money shouldn't need a dictionary.
          </h1>

          <p className="text-base text-charcoal-600 text-center leading-relaxed max-w-xs mx-auto mb-8">
            monee helps you understand money by letting you experience it. No jargon, no stock tips, just clarity.
          </p>

          <button
            onClick={() => setStep(2)}
            className="w-full py-3.5 px-6 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-base shadow-coral-glow flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <span>Let's go</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Screen 2 */}
      {step === 2 && (
        <div className="flex-1 flex flex-col justify-center animate-fade-in py-4">
          <div className="bg-white border border-cream-300 rounded-3xl p-5 mb-6 shadow-soft">
            <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-500 mb-1">
              Fictional Sandbox
            </div>

            <div className="flex items-baseline justify-between mb-4">
              <span className="text-2xl font-black text-charcoal-900">
                ₹{miniStages[miniStep].value.toLocaleString('en-IN')}
              </span>
              <span
                className={`text-sm font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                  miniStages[miniStep].change.startsWith('+')
                    ? 'bg-mint-100 text-mint-600'
                    : miniStages[miniStep].change.startsWith('-')
                    ? 'bg-red-100 text-red-600'
                    : 'bg-cream-200 text-charcoal-600'
                }`}
              >
                {miniStages[miniStep].change.startsWith('+') ? (
                  <TrendingUp className="w-3.5 h-3.5" />
                ) : miniStages[miniStep].change.startsWith('-') ? (
                  <TrendingDown className="w-3.5 h-3.5" />
                ) : null}
                {miniStages[miniStep].change}
              </span>
            </div>

            {/* Visual simulation bar */}
            <div className="w-full h-3 bg-cream-200 rounded-full overflow-hidden mb-2">
              <div
                className={`h-full transition-all duration-500 ${
                  miniStep === 4 ? 'bg-red-500' : 'bg-coral-500'
                }`}
                style={{
                  width: `${(miniStages[miniStep].value / 65000) * 100}%`,
                }}
              />
            </div>

            <p className="text-xs text-charcoal-600 italic">
              {miniStages[miniStep].label}
            </p>
          </div>

          <h2 className="text-2xl font-extrabold text-charcoal-900 tracking-tight leading-snug mb-3 text-center">
            What if you could experience a market crash before risking real money?
          </h2>

          <p className="text-sm text-charcoal-600 text-center mb-8">
            Step through the changes to see how emotions kick in before real stakes are touched.
          </p>

          <button
            onClick={handleNextMini}
            className="w-full py-3.5 px-6 rounded-2xl bg-charcoal-900 hover:bg-charcoal-800 text-white font-bold text-base shadow-soft flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <span>{miniStep < miniStages.length - 1 ? 'Next Market Move' : 'Try it'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Screen 3 */}
      {step === 3 && (
        <div className="flex-1 flex flex-col justify-center animate-fade-in py-4">
          <div className="w-12 h-12 rounded-2xl bg-lavender-100 text-lavender-700 flex items-center justify-center mx-auto mb-4 border border-lavender-200">
            <Globe className="w-6 h-6" />
          </div>

          <h2 className="text-2xl font-extrabold text-charcoal-900 tracking-tight text-center mb-2">
            How do you want to learn?
          </h2>

          <p className="text-xs text-charcoal-500 text-center mb-6">
            Everyday analogies in your language. You can change this anytime.
          </p>

          <div className="space-y-3 mb-8">
            {[
              { code: 'en' as Language, title: 'English', desc: 'Simple, conversational words', flag: '🇬🇧' },
              { code: 'hi' as Language, title: 'हिंदी (Hindi)', desc: 'रोज़मर्रा की आसान भाषा और मिसालें', flag: '🇮🇳' },
              { code: 'mr' as Language, title: 'मराठी (Marathi)', desc: 'सहज, साधी आणि व्यावहारिक उदाहरणे', flag: '🇮🇳' },
            ].map((langOpt) => (
              <button
                key={langOpt.code}
                onClick={() => setLanguage(langOpt.code)}
                className={`w-full p-4 rounded-2xl border-2 text-left flex items-center justify-between transition-all ${
                  language === langOpt.code
                    ? 'border-coral-500 bg-coral-50/50 shadow-soft'
                    : 'border-cream-300 hover:border-cream-400 bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{langOpt.flag}</span>
                  <div>
                    <div className="font-bold text-charcoal-900 text-base">{langOpt.title}</div>
                    <div className="text-xs text-charcoal-500">{langOpt.desc}</div>
                  </div>
                </div>

                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                    language === langOpt.code
                      ? 'bg-coral-500 border-coral-500 text-white'
                      : 'border-cream-400'
                  }`}
                >
                  {language === langOpt.code && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={handleFinish}
            className="w-full py-3.5 px-6 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-base shadow-coral-glow flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <span>Continue to monee</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

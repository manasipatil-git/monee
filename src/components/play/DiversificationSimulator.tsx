import React, { useState } from 'react';
import { ArrowLeft, Sparkles, RotateCcw, ShieldAlert, CheckCircle, Coins } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { VoicePlayer } from '../common/VoicePlayer';

export const DiversificationSimulator: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { language, addXp, unlockBadge, markConceptCompleted } = useApp();
  const [baskets, setBaskets] = useState<{ a: number; b: number; c: number }>({ a: 4, b: 3, c: 3 });
  const [isCrashed, setIsCrashed] = useState(false);
  const [hasTested, setHasTested] = useState(false);

  const totalCoins = baskets.a + baskets.b + baskets.c;
  const remainingCoins = isCrashed ? baskets.b + baskets.c : totalCoins;

  const handleAdjust = (basket: 'a' | 'b' | 'c', delta: number) => {
    if (isCrashed) return;
    const current = baskets[basket];
    const newCurrent = current + delta;

    if (newCurrent < 0) return;

    // Check total limit 10
    const newTotal = totalCoins + delta;
    if (newTotal > 10) return;

    setBaskets(prev => ({ ...prev, [basket]: newCurrent }));
  };

  const handleSimulateCrash = () => {
    setIsCrashed(true);
    setHasTested(true);
    addXp(40, 'Tested Diversification Basket Crash');
    unlockBadge('basket-builder');
    markConceptCompleted('diversification');
  };

  const handleReset = () => {
    setIsCrashed(false);
    setBaskets({ a: 4, b: 3, c: 3 });
  };

  return (
    <div className="bg-white rounded-3xl border border-cream-300 shadow-soft p-5 sm:p-6 animate-fade-in">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-xs font-bold text-charcoal-500 hover:text-charcoal-900"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <button
          onClick={handleReset}
          className="flex items-center gap-1 text-xs font-semibold text-charcoal-500 hover:text-charcoal-900 p-1"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <span className="text-3xl">🧺</span>
        <div>
          <h2 className="text-xl font-black text-charcoal-900 tracking-tight">
            {language === 'hi'
              ? "विविधीकरण (Diversification) का खेल"
              : language === 'mr'
              ? "विविधीकरण (Diversification) चा खेळ"
              : "The 3-Basket Challenge"}
          </h2>
          <p className="text-xs text-charcoal-500">
            Distribute 10 fictional coins across three different baskets.
          </p>
        </div>
      </div>

      {/* Available Coins Bar */}
      <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-3 flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Coins className="w-5 h-5 text-amber-600" />
          <span className="text-xs font-bold text-charcoal-800">
            Coins placed: <strong className="text-amber-800">{totalCoins}/10</strong>
          </span>
        </div>

        {totalCoins < 10 && (
          <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
            Add {10 - totalCoins} more!
          </span>
        )}
      </div>

      {/* 3 Baskets Arena */}
      <div className="grid grid-cols-3 gap-2.5 mb-5">
        {[
          { key: 'a' as const, name: 'Basket A', icon: '🧺', color: 'border-coral-200 bg-coral-50/40', shock: isCrashed },
          { key: 'b' as const, name: 'Basket B', icon: '🧺', color: 'border-mint-200 bg-mint-50/40', shock: false },
          { key: 'c' as const, name: 'Basket C', icon: '🧺', color: 'border-sky-200 bg-sky-50/40', shock: false },
        ].map((item) => (
          <div
            key={item.key}
            className={`p-3 rounded-2xl border-2 text-center transition-all ${item.color} ${
              item.shock ? 'border-red-400 bg-red-100/50 animate-wiggle' : ''
            }`}
          >
            <div className="text-2xl mb-1">{item.shock ? '💥' : item.icon}</div>
            <div className="text-xs font-bold text-charcoal-900 mb-1">{item.name}</div>

            <div className="text-xl font-black text-charcoal-900 my-1">
              {item.shock ? (
                <span className="text-red-600 line-through">0</span>
              ) : (
                baskets[item.key]
              )}
            </div>

            {item.shock ? (
              <div className="text-[10px] font-bold text-red-600">Failed!</div>
            ) : (
              <div className="flex items-center justify-center gap-1 mt-2">
                <button
                  onClick={() => handleAdjust(item.key, -1)}
                  disabled={baskets[item.key] <= 0 || isCrashed}
                  className="w-6 h-6 rounded-lg bg-white border border-cream-300 text-charcoal-700 text-xs font-bold disabled:opacity-40"
                >
                  -
                </button>
                <button
                  onClick={() => handleAdjust(item.key, 1)}
                  disabled={totalCoins >= 10 || isCrashed}
                  className="w-6 h-6 rounded-lg bg-white border border-cream-300 text-charcoal-700 text-xs font-bold disabled:opacity-40"
                >
                  +
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Simulator Action or Result */}
      {!isCrashed ? (
        <button
          onClick={handleSimulateCrash}
          disabled={totalCoins === 0}
          className="w-full py-3 px-4 rounded-2xl bg-charcoal-900 hover:bg-charcoal-800 disabled:opacity-40 text-white font-bold text-sm shadow-soft transition-all active:scale-95 flex items-center justify-center gap-2 mb-4"
        >
          <ShieldAlert className="w-4 h-4 text-coral-400" />
          <span>Simulate Unexpected Shock to Basket A</span>
        </button>
      ) : (
        <div className="bg-cream-50 rounded-2xl p-4 border border-cream-200 mb-4 animate-fade-in">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-mint-600" />
            <span className="font-extrabold text-sm text-charcoal-900">
              You Still Have {remainingCoins} Coins Safe!
            </span>
          </div>

          <p className="text-xs text-charcoal-700 leading-relaxed mb-3">
            Because you didn't put all 10 coins into Basket A, the unexpected failure did NOT wipe you out. Your Baskets B and C shielded your livelihood.
          </p>

          <VoicePlayer
            textToSpeak={
              language === 'hi'
                ? "सारे अंडे एक ही टोकरी में रखोगे तो टोकरी गिरने पर सब टूट सकते हैं। अलग-अलग टोकरियों में बांटने से एक जगह का नुकसान बाकी को नहीं डुबोता।"
                : language === 'mr'
                ? "सगळी अंडी एकाच टोपलीत ठेवली आणि ती पडली तर सगळे फुटेल. दोन-तीन टोपल्यांमध्ये वाटून ठेवले तर नुकसान मर्यादित राहते."
                : "Because you didn't put everything in one place, the impact was cushioned. That is the fundamental power of diversification."
            }
            size="sm"
            variant="secondary"
          />
        </div>
      )}

      {/* Footer */}
      <div className="text-[11px] text-charcoal-500 text-center italic">
        Fictional educational game • No real securities or investment advice
      </div>
    </div>
  );
};

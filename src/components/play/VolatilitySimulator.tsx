import React, { useState } from 'react';
import { TrendingUp, TrendingDown, ArrowRight, RotateCcw, ShieldCheck, Heart, Sparkles, AlertTriangle } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { VoicePlayer } from '../common/VoicePlayer';
import { translations } from '../../data/translations';

export const VolatilitySimulator: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const { language, addXp, markConceptCompleted, unlockBadge } = useApp();
  const [currentRound, setCurrentRound] = useState<number>(0);
  // 0: Intro, 1: Round 1, 2: Round 2, 3: Round 3, 4: Round 4, 5: Round 5 (Crash), 6: Emotion Poll, 7: Wisdom/Analogy
  const [round4Choice, setRound4Choice] = useState<string | null>(null);
  const [emotionChoice, setEmotionChoice] = useState<string | null>(null);

  const t = translations[language];

  const roundData = [
    { round: 1, change: '+10%', val: 55000, desc: "Nice. Things are looking good.", trend: 'up' },
    { round: 2, change: '+15%', val: 63250, desc: "You're feeling pretty confident.", trend: 'up' },
    { round: 3, change: '-8%', val: 58190, desc: "Okay... things changed.", trend: 'down' },
    { round: 4, change: '-20%', val: 46552, desc: "The number is falling.", trend: 'down' },
    { round: 5, change: '-35%', val: 41112, desc: "A steep market crash occurred.", trend: 'crash' },
  ];

  const handleNext = () => {
    if (currentRound === 0) {
      setCurrentRound(1);
    } else if (currentRound === 4 && !round4Choice) {
      // Must pick a choice in round 4
      return;
    } else if (currentRound < 5) {
      setCurrentRound(currentRound + 1);
    } else if (currentRound === 5) {
      setCurrentRound(6); // Go to emotion reflection
    } else if (currentRound === 6 && emotionChoice) {
      setCurrentRound(7); // Go to wisdom explanation
      markConceptCompleted('volatility');
      unlockBadge('crash-survivor');
      if (round4Choice === 'Pause & understand') {
        unlockBadge('think-before-act');
      }
      addXp(40, 'Completed Volatility Simulator');
    }
  };

  const handleRestart = () => {
    setCurrentRound(0);
    setRound4Choice(null);
    setEmotionChoice(null);
  };

  // Sparkline chart points computation
  const historyPoints = [
    { x: 20, y: 110, val: 50000 },
    { x: 80, y: 85, val: 55000 },
    { x: 140, y: 40, val: 63250 },
    { x: 200, y: 65, val: 58190 },
    { x: 260, y: 130, val: 46552 },
    { x: 320, y: 170, val: 41112 },
  ];

  const activePoints = historyPoints.slice(0, Math.min(currentRound + 1, historyPoints.length));
  const pathD = activePoints.reduce((acc, curr, idx) => {
    return idx === 0 ? `M ${curr.x} ${curr.y}` : `${acc} L ${curr.x} ${curr.y}`;
  }, '');

  return (
    <div className="bg-white rounded-3xl border border-cream-300 shadow-soft overflow-hidden animate-fade-in p-5 sm:p-6">
      {/* Top Breadcrumb & Tag */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎢</span>
          <div>
            <h2 className="text-lg sm:text-xl font-black text-charcoal-900 tracking-tight leading-tight">
              {language === 'hi'
                ? "बाज़ार की गिरावट का अनुभव"
                : language === 'mr'
                ? "बाजारातील घसरणीचा अनुभव"
                : "Experience a market crash"}
            </h2>
            <span className="text-[11px] font-semibold text-coral-600 uppercase tracking-wider">
              {currentRound === 0
                ? "Setup"
                : currentRound <= 5
                ? `Round ${currentRound} of 5`
                : currentRound === 6
                ? "Reflection"
                : "Wisdom"}
            </span>
          </div>
        </div>

        <button
          onClick={handleRestart}
          className="p-1.5 rounded-full text-charcoal-400 hover:text-charcoal-700 hover:bg-cream-200 transition-colors"
          title="Restart simulation"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Screen 0: Intro */}
      {currentRound === 0 && (
        <div className="py-4 text-center animate-fade-in">
          <div className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-coral-50 border border-coral-200 flex items-center justify-center text-4xl shadow-inner">
            ₹50k
          </div>

          <h3 className="text-2xl font-black text-charcoal-900 mb-2">
            You have ₹50,000 of fictional money.
          </h3>

          <p className="text-sm text-charcoal-600 max-w-xs mx-auto mb-6 leading-relaxed">
            Nothing here is real. You are here to safely feel what real investors feel when markets move up and down.
          </p>

          <div className="p-3 rounded-2xl bg-cream-100 border border-cream-200 text-xs text-charcoal-600 mb-6 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-mint-600 flex-shrink-0" />
            <span>SEBI & NSDL Track C Educational Sandbox</span>
          </div>

          <button
            onClick={handleNext}
            className="w-full py-3.5 px-6 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-base shadow-coral-glow flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <span>{t.startSimulation || 'Start simulation'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Rounds 1 to 5: Live Market Simulation */}
      {currentRound >= 1 && currentRound <= 5 && (
        <div className="animate-fade-in">
          {/* Live Balance Card */}
          <div
            className={`p-4 rounded-3xl border transition-all mb-4 ${
              currentRound === 5
                ? 'bg-red-50/70 border-red-200'
                : roundData[currentRound - 1].trend === 'up'
                ? 'bg-mint-50/60 border-mint-200'
                : 'bg-orange-50/60 border-orange-200'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider">
                Fictional Portfolio
              </span>
              <span
                className={`text-xs font-black px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                  roundData[currentRound - 1].trend === 'up'
                    ? 'bg-mint-100 text-mint-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {roundData[currentRound - 1].trend === 'up' ? (
                  <TrendingUp className="w-3.5 h-3.5" />
                ) : (
                  <TrendingDown className="w-3.5 h-3.5" />
                )}
                {roundData[currentRound - 1].change}
              </span>
            </div>

            <div className="text-3xl font-black text-charcoal-900 tracking-tight">
              ₹{roundData[currentRound - 1].val.toLocaleString('en-IN')}
            </div>

            {currentRound === 5 && (
              <div className="mt-2 text-xs font-bold text-red-600 flex items-center gap-1 animate-pulse">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>That's ₹22,138 below your highest point!</span>
              </div>
            )}
          </div>

          {/* Dynamic SVG Sparkline Chart */}
          <div className="bg-cream-50 rounded-2xl p-3 border border-cream-200 mb-4 relative overflow-hidden">
            <div className="text-[10px] font-bold text-charcoal-400 uppercase tracking-widest mb-1">
              Simulated Price Trajectory
            </div>

            <svg viewBox="0 0 340 190" className="w-full h-36">
              {/* Baseline reference */}
              <line x1="20" y1="110" x2="320" y2="110" stroke="#E2DDD5" strokeDasharray="3 3" strokeWidth="1" />
              <text x="24" y="105" fill="#A8A29E" fontSize="9" fontWeight="600">Start: ₹50,000</text>

              {/* Peak indicator */}
              {currentRound >= 2 && (
                <>
                  <circle cx="140" cy="40" r="4" fill="#10B981" />
                  <text x="148" y="38" fill="#10B981" fontSize="9" fontWeight="bold">Peak: ₹63,250</text>
                </>
              )}

              {/* Crash point */}
              {currentRound === 5 && (
                <>
                  <circle cx="320" cy="170" r="5" fill="#EF4444" className="animate-ping" />
                  <circle cx="320" cy="170" r="5" fill="#EF4444" />
                  <text x="250" y="165" fill="#EF4444" fontSize="10" fontWeight="extrabold">Crash: ₹41,112</text>
                </>
              )}

              {/* Animated Path */}
              <path
                d={pathD}
                fill="none"
                stroke={currentRound === 5 ? "#EF4444" : "#FF5C38"}
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Active current dot */}
              {activePoints.length > 0 && (
                <circle
                  cx={activePoints[activePoints.length - 1].x}
                  cy={activePoints[activePoints.length - 1].y}
                  r="5"
                  fill="#1C1917"
                />
              )}
            </svg>
          </div>

          {/* Headline Message */}
          <div className="mb-4">
            <h4 className="text-lg font-black text-charcoal-900 mb-1">
              {roundData[currentRound - 1].desc}
            </h4>

            {currentRound === 4 && (
              <div className="mt-3 p-3 bg-lavender-50 rounded-2xl border border-lavender-200">
                <p className="text-xs font-bold text-charcoal-900 mb-2">
                  What would you do right now?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Pause & understand",
                    "Sell everything",
                    "Put more in",
                    "I'm not sure"
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => setRound4Choice(option)}
                      className={`p-2.5 rounded-xl text-xs font-semibold border text-left transition-all ${
                        round4Choice === option
                          ? 'bg-charcoal-900 text-white border-charcoal-900 shadow-sm'
                          : 'bg-white text-charcoal-700 border-cream-300 hover:border-lavender-400'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-charcoal-400 mt-2 italic text-center">
                  This is a reflection exercise. No choice is universally right or wrong.
                </p>
              </div>
            )}
          </div>

          <button
            onClick={handleNext}
            disabled={currentRound === 4 && !round4Choice}
            className="w-full py-3.5 px-6 rounded-2xl bg-coral-500 hover:bg-coral-600 disabled:opacity-50 text-white font-bold text-base shadow-coral-glow flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <span>{currentRound === 5 ? 'Reflect on Experience' : t.continue || 'Continue'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Screen 6: Reflection Poll */}
      {currentRound === 6 && (
        <div className="py-2 animate-fade-in">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-3">
            <Heart className="w-6 h-6 fill-current" />
          </div>

          <h3 className="text-xl font-black text-charcoal-900 text-center mb-1">
            How did that feel?
          </h3>
          <p className="text-xs text-charcoal-500 text-center mb-4">
            Notice your heart rate and emotional reaction when the number plummeted.
          </p>

          <div className="space-y-2 mb-6">
            {[
              { id: 'calm', label: '😌 Calm', desc: 'I knew it was fictional and temporary' },
              { id: 'curious', label: '🤔 Curious', desc: 'Wondering why it dropped so fast' },
              { id: 'uncomfortable', label: '😬 Uncomfortable', desc: 'Disliked seeing my balance shrink' },
              { id: 'scary', label: '😨 Scary', desc: 'Felt an instinct to stop the bleeding' },
              { id: 'act', label: '🔥 Wanted to act immediately', desc: 'Wanted to sell or fix it right away' },
            ].map((emo) => (
              <button
                key={emo.id}
                onClick={() => setEmotionChoice(emo.id)}
                className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                  emotionChoice === emo.id
                    ? 'border-coral-500 bg-coral-50 shadow-soft'
                    : 'border-cream-300 hover:border-cream-400 bg-white'
                }`}
              >
                <div>
                  <div className="font-bold text-charcoal-900 text-sm">{emo.label}</div>
                  <div className="text-[11px] text-charcoal-500">{emo.desc}</div>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={!emotionChoice}
            className="w-full py-3.5 px-6 rounded-2xl bg-coral-500 hover:bg-coral-600 disabled:opacity-50 text-white font-bold text-base shadow-coral-glow flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <span>See What This Means</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Screen 7: Wisdom & Analogy */}
      {currentRound === 7 && (
        <div className="py-2 animate-fade-in">
          <div className="p-4 rounded-3xl bg-lavender-50 border border-lavender-200 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-lavender-700 block mb-1">
              The Fundamental Lesson
            </span>
            <p className="text-base font-extrabold text-charcoal-900 leading-snug mb-3">
              "Volatility simply means that the value of something moves up and down over time."
            </p>

            <div className="p-3 bg-white rounded-2xl border border-lavender-100 flex items-start gap-2.5">
              <span className="text-xl">🛣️</span>
              <div className="text-xs text-charcoal-700 leading-relaxed">
                <strong>The Road Analogy:</strong> Think of a road with twists, turns, and speed breakers. The destination may stay the same, but the ride isn't perfectly smooth. That's volatility.
              </div>
            </div>
          </div>

          {/* Regional voice audio button */}
          <div className="bg-cream-100 rounded-2xl p-3 border border-cream-200 mb-5 flex items-center justify-between">
            <div className="text-xs text-charcoal-700 font-medium">
              Hear this explanation:
            </div>
            <VoicePlayer
              textToSpeak={
                language === 'hi'
                  ? "उतार-चढ़ाव का सीधा मतलब है कि कीमत झूले की तरह ऊपर-नीचे होती है। जैसे सड़क के गड्ढे यात्रा रोकते नहीं, वैसे ही बाज़ार का उतार-चढ़ाव आपके सफर का ही हिस्सा है।"
                  : language === 'mr'
                  ? "चढ-उतार म्हणजे पाळण्यासारखा खेळ, कधी वर तर कधी खाली. रस्त्यावरील खड्डे म्हणजे प्रवास थांबला असे नाही, हा प्रवासाचाच एक भाग आहे."
                  : "Volatility simply means that value moves up and down like a roller coaster. Think of a journey on a bumpy road: the bumps are uncomfortable, but they don't mean you won't reach your destination."
              }
              variant="primary"
              size="md"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleRestart}
              className="flex-1 py-3 px-4 rounded-2xl bg-cream-200 hover:bg-cream-300 text-charcoal-800 font-bold text-xs sm:text-sm transition-all"
            >
              {t.tryAnother || 'Try another example'}
            </button>

            {onBack && (
              <button
                onClick={onBack}
                className="flex-1 py-3 px-4 rounded-2xl bg-charcoal-900 hover:bg-charcoal-800 text-white font-bold text-xs sm:text-sm transition-all shadow-soft"
              >
                Back to All Games
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

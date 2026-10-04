import React, { useState } from 'react';
import { TrendingUp, TrendingDown, ArrowRight, RotateCcw, ShieldCheck, Heart, AlertTriangle } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { VoicePlayer } from '../common/VoicePlayer';
import { translations } from '../../data/translations';
import { volatilityRounds, emotionOptions } from '../../data/simulations';
import { MoneeMascot } from '../common/MoneeMascot';

export const VolatilitySimulator: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const { language, addXp, markConceptCompleted, unlockBadge } = useApp();
  const [currentRound, setCurrentRound] = useState<number>(0);
  const [round4ChoiceIndex, setRound4ChoiceIndex] = useState<number | null>(null);
  const [selectedEmotionId, setSelectedEmotionId] = useState<string | null>(null);

  const t = translations[language];

  const handleNext = () => {
    if (currentRound === 0) {
      setCurrentRound(1);
    } else if (currentRound === 4 && round4ChoiceIndex === null) {
      return;
    } else if (currentRound < 5) {
      setCurrentRound(currentRound + 1);
    } else if (currentRound === 5) {
      setCurrentRound(6); // Emotion reflection
    } else if (currentRound === 6 && selectedEmotionId) {
      setCurrentRound(7); // Wisdom explanation
      markConceptCompleted('volatility');
      unlockBadge('crash-survivor');
      if (round4ChoiceIndex === 0) {
        unlockBadge('think-before-act');
      }
      addXp(40, 'Completed Volatility Simulator');
    }
  };

  const handleRestart = () => {
    setCurrentRound(0);
    setRound4ChoiceIndex(null);
    setSelectedEmotionId(null);
  };

  // Sparkline points computation
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

  const currentRoundData = currentRound >= 1 && currentRound <= 5 ? volatilityRounds[currentRound - 1] : null;

  return (
    <div className="bg-white rounded-3xl border border-cream-300 shadow-soft overflow-hidden animate-fade-in p-5 sm:p-6">
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎢</span>
          <div>
            <h2 className="text-lg sm:text-xl font-black text-charcoal-900 tracking-tight leading-tight">
              {language === 'hi'
                ? "बाज़ार की गिरावट का अनुभव"
                : language === 'mr'
                ? "मार्केटच्या घसरणीचा अनुभव"
                : "Experience a market crash"}
            </h2>
            <span className="text-[11px] font-semibold text-coral-600 uppercase tracking-wider">
              {currentRound === 0
                ? (language === 'mr' ? 'सुरुवात' : language === 'hi' ? 'शुरुआत' : 'Setup')
                : currentRound <= 5
                ? (language === 'mr' ? `टप्पा ${currentRound} / 5` : language === 'hi' ? `राउंड ${currentRound} / 5` : `Round ${currentRound} of 5`)
                : currentRound === 6
                ? (language === 'mr' ? 'आत्मपरीक्षण' : language === 'hi' ? 'अनुभूति' : 'Reflection')
                : (language === 'mr' ? 'खरा धडा' : language === 'hi' ? 'सीख' : 'Wisdom')}
            </span>
          </div>
        </div>

        <button
          onClick={handleRestart}
          className="p-1.5 rounded-full text-charcoal-400 hover:text-charcoal-700 hover:bg-cream-200 transition-colors"
          title={t.tryAnother || 'Try again'}
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
            {language === 'mr'
              ? "तुमच्याकडे सरावासाठी ₹५०,००० आहेत."
              : language === 'hi'
              ? "आपके पास अभ्यास के लिए ₹50,000 हैं।"
              : "You have ₹50,000 of practice money."}
          </h3>

          <p className="text-sm text-charcoal-600 max-w-xs mx-auto mb-6 leading-relaxed">
            {language === 'mr'
              ? "यात कोणताही खरा पैसा नाही. बाजारात चढ-उतार झाल्यावर गुंतवणूकदारांना नेमके काय वाटते, हे सुरक्षितपणे अनुभवण्यासाठी तुम्ही येथे आहात."
              : language === 'hi'
              ? "यहाँ कुछ भी असली नहीं है। बाज़ार ऊपर-नीचे होने पर निवेशकों के दिल में क्या हलचल होती है, यह महसूस करने के लिए आप यहाँ हैं।"
              : "Nothing here is real. You are here to safely feel what real investors feel when markets move up and down."}
          </p>

          <div className="p-3 rounded-2xl bg-cream-100 border border-cream-200 text-xs text-charcoal-600 mb-6 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-mint-600 flex-shrink-0" />
            <span>{t.fictionalDisclaimer}</span>
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
      {currentRound >= 1 && currentRound <= 5 && currentRoundData && (
        <div className="animate-fade-in">
          {/* Live Balance Card */}
          <div
            className={`p-4 rounded-3xl border transition-all mb-4 ${
              currentRound === 5
                ? 'bg-red-50/70 border-red-200'
                : currentRoundData.trend === 'up'
                ? 'bg-mint-50/60 border-mint-200'
                : 'bg-rose-50/60 border-rose-200'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider">
                {t.fictionalPortfolio}
              </span>
              <span
                className={`text-xs font-black px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                  currentRoundData.trend === 'up'
                    ? 'bg-mint-100 text-mint-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {currentRoundData.trend === 'up' ? (
                  <TrendingUp className="w-3.5 h-3.5" />
                ) : (
                  <TrendingDown className="w-3.5 h-3.5" />
                )}
                {currentRoundData.percentageChange > 0 ? `+${currentRoundData.percentageChange * 100}%` : `${currentRoundData.percentageChange * 100}%`}
              </span>
            </div>

            <div className="text-3xl font-black text-charcoal-900 tracking-tight">
              ₹{currentRoundData.amount.toLocaleString('en-IN')}
            </div>

            {currentRound === 5 && (
              <div className="mt-2 text-xs font-bold text-red-600 flex items-center gap-1 animate-pulse">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>{t.crashNotice}</span>
              </div>
            )}
          </div>

          {/* Dynamic SVG Sparkline Chart */}
          <div className="bg-cream-50 rounded-2xl p-3 border border-cream-200 mb-4 relative overflow-hidden">
            <div className="text-[10px] font-bold text-charcoal-400 uppercase tracking-widest mb-1">
              {t.chartTitle}
            </div>

            <svg viewBox="0 0 340 190" className="w-full h-36">
              <line x1="20" y1="110" x2="320" y2="110" stroke="#E2DDD5" strokeDasharray="3 3" strokeWidth="1" />
              <text x="24" y="105" fill="#A8A29E" fontSize="9" fontWeight="600">{t.chartStart}</text>

              {currentRound >= 2 && (
                <>
                  <circle cx="140" cy="40" r="4" fill="#10B981" />
                  <text x="148" y="38" fill="#10B981" fontSize="9" fontWeight="bold">{t.chartPeak}</text>
                </>
              )}

              {currentRound === 5 && (
                <>
                  <circle cx="320" cy="170" r="5" fill="#EF4444" className="animate-ping" />
                  <circle cx="320" cy="170" r="5" fill="#EF4444" />
                  <text x="240" y="165" fill="#EF4444" fontSize="10" fontWeight="extrabold">{t.chartCrash}</text>
                </>
              )}

              <path
                d={pathD}
                fill="none"
                stroke={currentRound === 5 ? "#EF4444" : "#246B4F"}
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

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

          {/* Headline Message in active language */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              {currentRound === 5 && <MoneeMascot mood="worried" size="sm" />}
              <h4 className="text-lg font-black text-charcoal-900">
                {currentRoundData.headline[language]}
              </h4>
            </div>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              {currentRoundData.subtext[language]}
            </p>

            {/* Round 4 Decision Dilemma */}
            {currentRound === 4 && currentRoundData.options && (
              <div className="mt-3 p-3 bg-lavender-50 rounded-2xl border border-lavender-200">
                <p className="text-xs font-bold text-charcoal-900 mb-2">
                  {currentRoundData.question ? currentRoundData.question[language] : t.whatWouldYouDo}
                </p>
                <div className="space-y-2">
                  {currentRoundData.options[language].map((optionText, idx) => (
                    <button
                      key={idx}
                      onClick={() => setRound4ChoiceIndex(idx)}
                      className={`w-full p-2.5 rounded-xl text-xs font-semibold border text-left transition-all ${
                        round4ChoiceIndex === idx
                          ? 'bg-charcoal-900 text-white border-charcoal-900 shadow-sm'
                          : 'bg-white text-charcoal-700 border-cream-300 hover:border-lavender-400'
                      }`}
                    >
                      {optionText}
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-charcoal-500 mt-2 italic text-center">
                  {t.reflectionNote}
                </p>
              </div>
            )}
          </div>

          <button
            onClick={handleNext}
            disabled={currentRound === 4 && round4ChoiceIndex === null}
            className="w-full py-3.5 px-6 rounded-2xl bg-coral-500 hover:bg-coral-600 disabled:opacity-50 text-white font-bold text-base shadow-coral-glow flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <span>{currentRound === 5 ? (t.reflectBtn || 'Reflect on Experience') : (t.continue || 'Continue')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Screen 6: Reflection Poll */}
      {currentRound === 6 && (
        <div className="py-2 animate-fade-in">
          <MoneeMascot mood="curious" size="md" className="mx-auto mb-2" />

          <h3 className="text-xl font-black text-charcoal-900 text-center mb-1">
            {t.howDidItFeel}
          </h3>
          <p className="text-xs text-charcoal-500 text-center mb-4">
            {t.howDidItFeelSub}
          </p>

          <div className="space-y-2 mb-6">
            {emotionOptions.map((emo) => (
              <button
                key={emo.id}
                onClick={() => setSelectedEmotionId(emo.id)}
                className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                  selectedEmotionId === emo.id
                    ? 'border-coral-500 bg-coral-50 shadow-soft'
                    : 'border-cream-300 hover:border-cream-400 bg-white'
                }`}
              >
                <div>
                  <div className="font-bold text-charcoal-900 text-sm">
                    {emo.emoji} {emo.label[language]}
                  </div>
                  <div className="text-[11px] text-charcoal-500">{emo.desc[language]}</div>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={!selectedEmotionId}
            className="w-full py-3.5 px-6 rounded-2xl bg-coral-500 hover:bg-coral-600 disabled:opacity-50 text-white font-bold text-base shadow-coral-glow flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <span>{language === 'mr' ? 'याचा खरा अर्थ काय?' : language === 'hi' ? 'इसका अर्थ समझें' : 'See What This Means'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Screen 7: Wisdom & Analogy */}
      {currentRound === 7 && (
        <div className="py-2 animate-fade-in">
          <MoneeMascot mood="celebrating" size="md" className="mx-auto mb-2" />

          <div className="p-4 rounded-3xl bg-lavender-50 border border-lavender-200 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-lavender-700 block mb-1">
              {t.fundamentalLesson}
            </span>
            <p className="text-base font-extrabold text-charcoal-900 leading-snug mb-3">
              {language === 'mr'
                ? "“Volatility म्हणजे फक्त इतकेच की एखाद्या गोष्टीची किंमत वेळोवेळी वर आणि खाली जाते.”"
                : language === 'hi'
                ? "“उतार-चढ़ाव का सीधा मतलब है कि किसी चीज़ की कीमत समय के साथ ऊपर और नीचे होती रहती है।”"
                : "“Volatility simply means that the value of something moves up and down over time.”"}
            </p>

            <div className="p-3 bg-white rounded-2xl border border-lavender-100 flex items-start gap-2.5">
              <span className="text-xl">🛣️</span>
              <div className="text-xs text-charcoal-700 leading-relaxed">
                <strong>{t.roadAnalogyTitle}:</strong>{" "}
                {language === 'mr'
                  ? "घाटातील वळणावळणाचा रस्ता आठवा. जायचे तेथेच असते, पण प्रवास सरळ नसतो, थोडे हेलकावे खावेच लागतात. हाच बाजाराचा चढ-उतार असतो."
                  : language === 'hi'
                  ? "जैसे पहाड़ी रास्ते पर मोड़ और गड्ढे आते हैं। मंज़िल वही रहती है, पर रास्ता बिल्कुल सपाट नहीं होता। यही उतार-चढ़ाव है।"
                  : "Think of a road with twists, turns, and speed breakers. The destination stays the same, but the ride isn't perfectly smooth. That's volatility."}
              </div>
            </div>
          </div>

          {/* Regional voice audio button */}
          <div className="bg-cream-100 rounded-2xl p-3 border border-cream-200 mb-5 flex items-center justify-between">
            <div className="text-xs text-charcoal-700 font-medium">
              {language === 'mr' ? 'हे ऐका:' : language === 'hi' ? 'यह व्याख्या सुनें:' : 'Hear this explanation:'}
            </div>
            <VoicePlayer
              textToSpeak={
                language === 'mr'
                  ? "चढ-उतार म्हणजे पाळण्यासारखा खेळ, कधी वर तर कधी खाली. रस्त्यावरील खड्डे म्हणजे प्रवास थांबला असे नाही, हा प्रवासाचाच एक भाग आहे."
                  : language === 'hi'
                  ? "उतार-चढ़ाव का सीधा मतलब है कि कीमत झूले की तरह ऊपर-नीचे होती है। जैसे सड़क के गड्ढे यात्रा रोकते नहीं, वैसे ही बाज़ार का उतार-चढ़ाव सफर का ही हिस्सा है।"
                  : "Volatility simply means that value moves up and down like a roller coaster. The bumps on the road don't mean you won't reach your destination."
              }
              hindiFallbackText="उतार-चढ़ाव का सीधा मतलब है कि कीमत झूले की तरह ऊपर-नीचे होती है। जैसे सड़क के गड्ढे यात्रा रोकते नहीं, वैसे ही बाज़ार का उतार-चढ़ाव सफर का ही हिस्सा है।"
              lang={language}
              label={language === 'mr' ? 'ऐका' : language === 'hi' ? 'सुनें' : 'Listen'}
              variant="primary"
              size="md"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleRestart}
              className="flex-1 py-3 px-4 rounded-2xl bg-cream-200 hover:bg-cream-300 text-charcoal-800 font-bold text-xs sm:text-sm transition-all"
            >
              {t.tryAnother || 'Try again'}
            </button>

            {onBack && (
              <button
                onClick={onBack}
                className="flex-1 py-3 px-4 rounded-2xl bg-charcoal-900 hover:bg-charcoal-800 text-white font-bold text-xs sm:text-sm transition-all shadow-soft"
              >
                {t.backToGames || 'Back to Simulators'}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

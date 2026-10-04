import React, { useState } from 'react';
import { TrendingDown, ArrowRight, RotateCcw, ShieldCheck, AlertTriangle, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { VoicePlayer } from '../common/VoicePlayer';
import { translations } from '../../data/translations';
import { volatilityRounds } from '../../data/simulations';
import { MoneeMascot } from '../common/MoneeMascot';
import { Language } from '../../types';

export const VolatilitySimulator: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const {
    language,
    setLanguage,
    addXp,
    markConceptCompleted,
    unlockBadge,
    setActiveSimulatorId,
    setActiveTab
  } = useApp();

  // Mode: 'demo' (the 45-55s hero recording flow) vs 'sandbox' (multi-round exploration)
  const [mode, setMode] = useState<'demo' | 'sandbox'>('demo');

  // Demo flow stages: 'setup' -> 'drop' -> 'consequence' -> 'explanation'
  const [demoStage, setDemoStage] = useState<'setup' | 'drop' | 'consequence' | 'explanation'>('setup');
  const [demoChoice, setDemoChoice] = useState<'sell' | 'hold' | null>(null);

  // Sandbox state
  const [sandboxRound, setSandboxRound] = useState<number>(0);
  const [round4ChoiceIndex, setRound4ChoiceIndex] = useState<number | null>(null);
  const [selectedEmotionId, setSelectedEmotionId] = useState<string | null>(null);

  const t = translations[language];

  // Reset simulator
  const handleRestart = () => {
    setDemoStage('setup');
    setDemoChoice(null);
    setSandboxRound(0);
    setRound4ChoiceIndex(null);
    setSelectedEmotionId(null);
  };

  // Sparkline path for hero drop (50k -> 55k -> 40k)
  const heroPath = "M 20 100 L 140 45 L 320 165";

  // Transition to Money Map
  const handleGoToMap = () => {
    markConceptCompleted('volatility');
    unlockBadge('crash-survivor');
    if (demoChoice === 'hold') {
      unlockBadge('think-before-act');
    }
    addXp(40, 'Completed Volatility Experience');
    setActiveSimulatorId(null);
    setActiveTab('map');
  };

  // =========================================================================
  // HERO DEMO FLOW (45–55 Seconds)
  // =========================================================================
  if (mode === 'demo') {
    return (
      <div className="bg-white rounded-3xl border border-[#EAE4DC] shadow-soft overflow-hidden animate-fade-in p-5 sm:p-6 text-[#1A1918]">
        {/* Top Breadcrumb & Quick Controls */}
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#F4EFEA]">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎢</span>
            <div>
              <h2 className="text-base sm:text-lg font-black text-[#1A1918] tracking-tight leading-tight">
                {language === 'mr'
                  ? "मार्केटच्या घसरणीचा अनुभव"
                  : language === 'hi'
                  ? "बाज़ार की गिरावट का अनुभव"
                  : "Experience a market crash"}
              </h2>
              <span className="text-[10px] font-bold text-[#246B4F] uppercase tracking-wider">
                {demoStage === 'setup' && (language === 'mr' ? 'पायरी १: तयारी' : language === 'hi' ? 'चरण 1: शुरुआत' : 'Step 1: Safe Setup')}
                {demoStage === 'drop' && (language === 'mr' ? 'पायरी २: घसरण व निर्णय' : language === 'hi' ? 'चरण 2: गिरावट और फ़ैसला' : 'Step 2: Market Drop & Decision')}
                {demoStage === 'consequence' && (language === 'mr' ? 'पायरी ३: प्रत्यक्ष परिणाम' : language === 'hi' ? 'चरण 3: सीधा असर' : 'Step 3: Direct Consequence')}
                {demoStage === 'explanation' && (language === 'mr' ? 'पायरी ४: खरा धडा' : language === 'hi' ? 'चरण 4: असली सीख' : 'Step 4: Understand Volatility')}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleRestart}
              className="p-1.5 rounded-full text-[#68645E] hover:text-[#1A1918] hover:bg-[#F4EFEA] transition-colors cursor-pointer"
              title="Restart simulation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMode('sandbox')}
              className="text-[10px] font-bold text-[#68645E] hover:text-[#1A1918] bg-[#F4EFEA] px-2 py-1 rounded-lg transition-colors cursor-pointer"
              title="Switch to 5-round sandbox"
            >
              5-Round
            </button>
          </div>
        </div>

        {/* ---------------- STAGE 1: SETUP (4–9 SECONDS) ---------------- */}
        {demoStage === 'setup' && (
          <div className="py-2 text-center animate-fade-in">
            {/* Visual ₹50,000 Fictional Currency Card */}
            <div className="w-24 h-24 mx-auto mb-3 rounded-3xl bg-[#EEF5F1] border-2 border-[#246B4F]/30 flex flex-col items-center justify-center shadow-inner">
              <span className="text-3xl font-black text-[#246B4F]">₹50k</span>
              <span className="text-[10px] font-bold text-[#246B4F]/80 uppercase tracking-widest mt-0.5">Practice</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#1A1918] mb-1.5 tracking-tight">
              {t.challengeTitle}
            </h3>

            <p className="text-xs sm:text-sm text-[#68645E] max-w-xs mx-auto mb-4 leading-relaxed font-medium">
              {language === 'mr'
                ? "तुमच्याकडे सरावासाठी ₹५०,००० आहेत. यात कोणताही खरा पैसा नाही. बाजारात चढ-उतार झाल्यावर गुंतवणूकदारांना नेमके काय वाटते, हे सुरक्षितपणे अनुभवण्यासाठी तुम्ही येथे आहात."
                : language === 'hi'
                ? "आपके पास अभ्यास के लिए ₹50,000 हैं। यहाँ कुछ भी असली नहीं है। बाज़ार ऊपर-नीचे होने पर क्या हलचल होती है, यह सुरक्षित रूप से महसूस करें।"
                : "You have ₹50,000 of practice money. Nothing here is real. You are here to safely feel what real investors feel when markets move."}
            </p>

            {/* Reassuring Zero Risk Shield Banner */}
            <div className="p-3 rounded-2xl bg-[#F4EFEA] border border-[#EAE4DC] text-xs font-semibold text-[#1A1918] mb-5 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#246B4F] flex-shrink-0" />
              <span>{t.fictionalDisclaimer}</span>
            </div>

            {/* Clear Primary Action Button */}
            <button
              onClick={() => setDemoStage('drop')}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#246B4F] hover:bg-[#1D553E] text-white font-bold text-base shadow-soft flex items-center justify-center gap-2 transition-transform active:scale-98 cursor-pointer"
            >
              <span>{t.startSimulation || 'Start simulation'}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        )}

        {/* ---------------- STAGE 2: LIVE DROP & DECISION (9–22 SECONDS) ---------------- */}
        {demoStage === 'drop' && (
          <div className="animate-fade-in">
            {/* Live Practice Balance Card */}
            <div className="p-4 rounded-3xl border-2 border-[#D64234]/30 bg-[#FDF4F3] transition-all mb-3 shadow-xs">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold text-[#68645E] uppercase tracking-wider">
                  {t.fictionalPortfolio}
                </span>
                <span className="text-xs font-black px-2.5 py-0.5 rounded-full flex items-center gap-1 bg-red-100 text-[#D64234] animate-pulse">
                  <TrendingDown className="w-3.5 h-3.5" />
                  -20% Drop
                </span>
              </div>

              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-3xl font-black text-[#D64234] tracking-tight">
                    ₹40,000
                  </div>
                  <div className="text-[11px] text-[#9C968F] line-through font-medium">
                    Started at ₹50,000
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-black uppercase text-[#D64234] bg-white px-2 py-0.5 rounded-md border border-[#FCE7E5]">
                    -₹10,000 on paper
                  </span>
                </div>
              </div>
            </div>

            {/* Dynamic Visual SVG Sparkline Chart */}
            <div className="bg-[#FAF8F5] rounded-2xl p-3 border border-[#EAE4DC] mb-3 relative overflow-hidden">
              <div className="flex items-center justify-between text-[10px] font-bold text-[#68645E] uppercase tracking-wider mb-1">
                <span>{t.chartTitle}</span>
                <span className="text-[#D64234] font-extrabold flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" /> Market Shock
                </span>
              </div>

              <svg viewBox="0 0 340 180" className="w-full h-32">
                <line x1="20" y1="100" x2="320" y2="100" stroke="#EAE4DC" strokeDasharray="3 3" strokeWidth="1" />
                <text x="24" y="94" fill="#9C968F" fontSize="9" fontWeight="600">{t.chartStart}</text>

                <circle cx="140" cy="45" r="4" fill="#246B4F" />
                <text x="148" y="42" fill="#246B4F" fontSize="9" fontWeight="bold">{t.chartPeak}</text>

                <circle cx="320" cy="165" r="6" fill="#D64234" className="animate-ping" opacity="0.6" />
                <circle cx="320" cy="165" r="5" fill="#D64234" />
                <text x="235" y="160" fill="#D64234" fontSize="10" fontWeight="900">{t.chartCrash || 'Drop: ₹40,000'}</text>

                <path
                  d={heroPath}
                  fill="none"
                  stroke="#D64234"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Mascot State Reacting to Shock */}
            <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-[#EAE4DC] mb-3">
              <MoneeMascot
                mood="worried"
                size="sm"
                showThoughtBubble={true}
                thoughtText={
                  language === 'mr'
                    ? 'अरेरे! बाजार खाली गेला!'
                    : language === 'hi'
                    ? 'ओह! बाज़ार 20% गिर गया!'
                    : 'Uh-oh! Market fell!'
                }
              />
              <div>
                <h4 className="font-black text-sm text-[#1A1918] leading-tight">
                  {t.onboardingUhOh}
                </h4>
                <p className="text-[11px] text-[#68645E] mt-0.5 font-medium leading-snug">
                  {t.onboardingDropSub}
                </p>
              </div>
            </div>

            {/* The Dilemma: Two Visceral Choices */}
            <div className="mb-2">
              <div className="text-xs font-black text-[#1A1918] mb-2">
                {t.whatWouldYouDo}
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => {
                    setDemoChoice('sell');
                    setDemoStage('consequence');
                  }}
                  className="p-3.5 rounded-2xl border-2 border-[#D64234] bg-[#FDF4F3] hover:bg-[#FBE9E7] text-left transition-all active:scale-98 cursor-pointer shadow-xs"
                >
                  <div className="w-8 h-8 rounded-xl bg-white border border-[#FCE7E5] flex items-center justify-center mb-1.5 text-base">
                    ⚡
                  </div>
                  <div className="text-xs font-black text-[#D64234] leading-tight mb-1">
                    {t.onboardingChoiceSell}
                  </div>
                  <div className="text-[10px] text-[#68645E] font-medium leading-snug">
                    {language === 'mr' ? 'नुकसान थांबवा व बाहेर पडा' : language === 'hi' ? 'तुरंत बेचकर नुकसान रोकें' : 'Stop loss and exit'}
                  </div>
                </button>

                <button
                  onClick={() => {
                    setDemoChoice('hold');
                    setDemoStage('consequence');
                  }}
                  className="p-3.5 rounded-2xl border-2 border-[#246B4F] bg-[#EEF5F1] hover:bg-[#E2EFE7] text-left transition-all active:scale-98 cursor-pointer shadow-xs"
                >
                  <div className="w-8 h-8 rounded-xl bg-white border border-[#BADCCB] flex items-center justify-center mb-1.5 text-base">
                    🛡️
                  </div>
                  <div className="text-xs font-black text-[#246B4F] leading-tight mb-1">
                    {t.onboardingChoiceHold}
                  </div>
                  <div className="text-[10px] text-[#68645E] font-medium leading-snug">
                    {language === 'mr' ? 'शांत राहा आणि वाट पहा' : language === 'hi' ? 'धैर्य रखें और इंतज़ार करें' : 'Keep calm and wait'}
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ---------------- STAGE 3: DIRECT CONSEQUENCE (22–32 SECONDS) ---------------- */}
        {demoStage === 'consequence' && (
          <div className="py-1 animate-fade-in">
            {/* Visual Portfolio Value Outcome */}
            <div
              className={`p-4 rounded-3xl border-2 mb-3 shadow-xs ${
                demoChoice === 'sell'
                  ? 'bg-[#FDF4F3] border-[#D64234]'
                  : 'bg-[#EEF5F1] border-[#246B4F]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold text-[#68645E] uppercase tracking-wider">
                  {demoChoice === 'sell'
                    ? (language === 'mr' ? 'अंतिम रोख (नुकसान पक्के)' : language === 'hi' ? 'अंतिम नकद (पक्का नुकसान)' : 'Final Cashed-out Balance')
                    : (language === 'mr' ? 'सध्याचे कागदावरचे मूल्य' : language === 'hi' ? 'वर्तमान कागज़ी मूल्य' : 'Current Paper Value')}
                </span>
                <span
                  className={`text-xs font-black px-2.5 py-0.5 rounded-full ${
                    demoChoice === 'sell'
                      ? 'bg-red-100 text-[#D64234]'
                      : 'bg-green-100 text-[#246B4F]'
                  }`}
                >
                  {demoChoice === 'sell' ? '🛑 Real Loss' : '🛡️ Paper Drop Only'}
                </span>
              </div>

              <div className="flex items-baseline justify-between">
                <div
                  className={`text-3xl font-black ${
                    demoChoice === 'sell' ? 'text-[#D64234]' : 'text-[#246B4F]'
                  }`}
                >
                  ₹40,000
                </div>
                <div className="text-right">
                  <span
                    className={`text-xs font-bold ${
                      demoChoice === 'sell' ? 'text-[#D64234]' : 'text-[#246B4F]'
                    }`}
                  >
                    {demoChoice === 'sell' ? '-₹10,000 Locked In' : '₹0 Real Loss'}
                  </span>
                </div>
              </div>
            </div>

            {/* Mascot Consequence Reaction */}
            <div className="flex flex-col items-center text-center mb-3">
              <MoneeMascot
                mood={demoChoice === 'sell' ? 'worried' : 'celebrating'}
                size="md"
                showThoughtBubble={true}
                thoughtText={
                  demoChoice === 'sell'
                    ? (language === 'mr'
                        ? 'अरेरे! कायमचे नुकसान झाले!'
                        : language === 'hi'
                        ? 'ओह! पक्का नुकसान हो गया!'
                        : 'Loss locked in!')
                    : (language === 'mr'
                        ? 'छान! संयम राखला!'
                        : language === 'hi'
                        ? 'शाबाश! धैर्य बनाए रखा!'
                        : 'Smart patience!')
                }
              />
            </div>

            {/* Consequence Feedback Card */}
            <div
              className={`p-4 rounded-2xl border-2 mb-4 animate-fade-in ${
                demoChoice === 'sell'
                  ? 'border-[#D64234] bg-[#FDF4F3]'
                  : 'border-[#246B4F] bg-[#EEF5F1]'
              }`}
            >
              <div
                className={`text-sm font-black mb-1.5 flex items-center gap-1.5 ${
                  demoChoice === 'sell' ? 'text-[#D64234]' : 'text-[#246B4F]'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    demoChoice === 'sell' ? 'bg-[#D64234]' : 'bg-[#246B4F]'
                  }`}
                />
                <span>
                  {demoChoice === 'sell'
                    ? t.onboardingConsequenceSellTag
                    : t.onboardingConsequenceHoldTag}
                </span>
              </div>
              <p className="text-xs text-[#1A1918] font-medium leading-relaxed">
                {demoChoice === 'sell'
                  ? t.onboardingConsequenceSellText
                  : t.onboardingConsequenceHoldText}
              </p>
            </div>

            {/* CTA Button to Explanation */}
            <button
              onClick={() => setDemoStage('explanation')}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#1A1918] hover:bg-[#2A2724] text-white font-bold text-base shadow-soft flex items-center justify-center gap-2 transition-transform active:scale-98 cursor-pointer"
            >
              <span>
                {language === 'mr'
                  ? 'असे का घडले? खरा धडा पहा →'
                  : language === 'hi'
                  ? 'ऐसा क्यों हुआ? असली सीख देखें →'
                  : 'See why this happened →'}
              </span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        )}

        {/* ---------------- STAGE 4: EXPLANATION & LANGUAGE (32–50 SECONDS) ---------------- */}
        {demoStage === 'explanation' && (
          <div className="py-1 animate-fade-in">
            {/* Mascot Celebrating Understanding */}
            <div className="flex flex-col items-center text-center mb-2">
              <MoneeMascot
                mood="celebrating"
                size="md"
                showThoughtBubble={true}
                thoughtText={
                  language === 'mr'
                    ? 'आता समजले!'
                    : language === 'hi'
                    ? 'अब बात समझ आई!'
                    : 'Now I get it!'
                }
              />
            </div>

            {/* In-place Language Differentiator Bar */}
            <div className="flex items-center justify-between p-2 mb-3 bg-[#FAF8F5] border border-[#EAE4DC] rounded-2xl">
              <span className="text-[11px] font-bold text-[#68645E]">
                {language === 'mr' ? 'भाषा निवडा:' : language === 'hi' ? 'भाषा चुनें:' : 'Language:'}
              </span>
              <div className="flex items-center gap-1">
                {(['en', 'mr', 'hi'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLanguage(l)}
                    className={`px-3 py-1 rounded-xl text-xs font-black transition-all cursor-pointer ${
                      language === l
                        ? 'bg-[#7C6DB8] text-white shadow-xs'
                        : 'text-[#68645E] hover:text-[#1A1918] bg-white border border-[#EAE4DC]'
                    }`}
                  >
                    {l === 'en' ? 'English' : l === 'mr' ? 'मराठी' : 'हिन्दी'}
                  </button>
                ))}
              </div>
            </div>

            {/* Wisdom & Road Analogy Card */}
            <div className="p-4 rounded-3xl bg-[#F4F2FA] border border-[#D8D2F0] mb-3">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#504487] block mb-1">
                {t.fundamentalLesson}
              </span>
              <p className="text-base font-black text-[#1A1918] leading-snug mb-3">
                {language === 'mr'
                  ? "“Volatility म्हणजे फक्त इतकेच की एखाद्या गोष्टीची किंमत वेळोवेळी वर आणि खाली जाते.”"
                  : language === 'hi'
                  ? "“उतार-चढ़ाव का सीधा मतलब है कि किसी चीज़ की कीमत समय के साथ ऊपर और नीचे होती रहती है।”"
                  : "“Volatility simply means that the value of something moves up and down over time.”"}
              </p>

              {/* The Bumpy Road Analogy */}
              <div className="p-3 bg-white rounded-2xl border border-[#D8D2F0] flex items-start gap-2.5 shadow-xs">
                <span className="text-xl">🛣️</span>
                <div className="text-xs text-[#1A1918] leading-relaxed">
                  <strong>{t.roadAnalogyTitle}:</strong>{" "}
                  {language === 'mr'
                    ? "घाटातील वळणावळणाचा रस्ता आठवा. जायचे तेथेच असते, पण प्रवास सरळ नसतो, थोडे हेलकावे खावेच लागतात. हाच बाजाराचा चढ-उतार असतो."
                    : language === 'hi'
                    ? "जैसे पहाड़ी रास्ते पर मोड़ और गड्ढे आते हैं। मंज़िल वही रहती है, पर रास्ता बिल्कुल सपाट नहीं होता। यही उतार-चढ़ाव है।"
                    : "Think of a road with twists, turns, and speed breakers. The destination stays the same, but the ride isn't perfectly smooth. That's volatility."}
                </div>
              </div>
            </div>

            {/* Voice Audio Synthesis Player */}
            <div className="bg-[#FAF8F5] rounded-2xl p-2.5 border border-[#EAE4DC] mb-4 flex items-center justify-between">
              <div className="text-xs text-[#1A1918] font-bold">
                {language === 'mr' ? 'हे ऐका:' : language === 'hi' ? 'यह व्याख्या सुनें:' : 'Hear this in voice:'}
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
                label={language === 'mr' ? 'ऐका 🔊' : language === 'hi' ? 'सुनें 🔊' : 'Listen 🔊'}
                variant="primary"
                size="md"
              />
            </div>

            {/* Final CTA: Advance to Money Map (50–55 Seconds) */}
            <button
              onClick={handleGoToMap}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#246B4F] hover:bg-[#1D553E] text-white font-bold text-base shadow-soft flex items-center justify-center gap-2 transition-transform active:scale-98 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>
                {language === 'mr'
                  ? 'पुढील प्रवास पहा (मनी मॅप) →'
                  : language === 'hi'
                  ? 'सीखने का सफर जारी रखें (मनी मैप) →'
                  : 'Continue to Money Map →'}
              </span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // SANDBOX MODE (Optional Multi-round Extended Exploration)
  // =========================================================================
  const handleSandboxNext = () => {
    if (sandboxRound === 0) {
      setSandboxRound(1);
    } else if (sandboxRound === 4 && round4ChoiceIndex === null) {
      return;
    } else if (sandboxRound < 5) {
      setSandboxRound(sandboxRound + 1);
    } else if (sandboxRound === 5) {
      setSandboxRound(6);
    } else if (sandboxRound === 6 && selectedEmotionId) {
      setSandboxRound(7);
      markConceptCompleted('volatility');
      unlockBadge('crash-survivor');
      addXp(40, 'Completed Volatility Simulator');
    }
  };

  const sandboxRoundData = sandboxRound >= 1 && sandboxRound <= 5 ? volatilityRounds[sandboxRound - 1] : null;

  return (
    <div className="bg-white rounded-3xl border border-[#EAE4DC] shadow-soft overflow-hidden animate-fade-in p-5 sm:p-6 text-[#1A1918]">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#F4EFEA]">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎢</span>
          <div>
            <h2 className="text-lg font-black text-[#1A1918]">5-Round Sandbox</h2>
            <span className="text-[11px] font-bold text-[#246B4F] uppercase">
              Round {sandboxRound} of 5
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setMode('demo')}
            className="text-[10px] font-bold text-[#7C6DB8] bg-[#F4F2FA] px-2 py-1 rounded-lg cursor-pointer"
          >
            Switch to Demo Flow
          </button>
          <button onClick={handleRestart} className="p-1.5 text-[#68645E] cursor-pointer">
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {sandboxRound === 0 && (
        <div className="py-4 text-center">
          <div className="w-20 h-20 mx-auto mb-3 rounded-2xl bg-[#EEF5F1] flex items-center justify-center text-3xl font-black text-[#246B4F]">
            ₹50k
          </div>
          <h3 className="text-xl font-black mb-2">{t.challengeTitle}</h3>
          <p className="text-xs text-[#68645E] mb-4">5 consecutive rounds of market fluctuations.</p>
          <button
            onClick={handleSandboxNext}
            className="w-full py-3 px-6 rounded-2xl bg-[#246B4F] text-white font-bold"
          >
            Start 5 Rounds
          </button>
        </div>
      )}

      {sandboxRound >= 1 && sandboxRound <= 5 && sandboxRoundData && (
        <div>
          <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DC] mb-3">
            <div className="text-2xl font-black">₹{sandboxRoundData.amount.toLocaleString('en-IN')}</div>
            <div className="text-xs text-[#68645E]">{sandboxRoundData.headline[language]}</div>
          </div>
          <button
            onClick={handleSandboxNext}
            className="w-full py-3 rounded-2xl bg-[#246B4F] text-white font-bold"
          >
            Next Round →
          </button>
        </div>
      )}

      {sandboxRound >= 6 && (
        <div className="py-4 text-center">
          <h3 className="text-xl font-black mb-2">Wisdom Unlocked!</h3>
          <button
            onClick={handleGoToMap}
            className="w-full py-3 rounded-2xl bg-[#246B4F] text-white font-bold"
          >
            Go to Money Map
          </button>
        </div>
      )}
    </div>
  );
};

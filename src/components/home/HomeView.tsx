import React from 'react';
import { Flame, PlayCircle, ArrowRight, Wand2, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { translations } from '../../data/translations';

export const HomeView: React.FC = () => {
  const {
    language,
    streakDays,
    setActiveSimulatorId,
    setActiveTab,
    setIsAskMoneeOpen,
  } = useApp();

  const t = translations[language];

  const handleStartTodayChallenge = () => {
    setActiveSimulatorId('volatility');
    setActiveTab('play');
  };

  return (
    <div className="space-y-4 pb-8 animate-fade-in">
      {/* Friendly, Calm Greeting */}
      <div className="pt-2 px-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight leading-tight">
          {t.greeting}
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-600 font-medium">
          {t.greetingSub}
        </p>
      </div>

      {/* Hero Card: Today's 3-Minute Experience */}
      <div className="bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white rounded-3xl p-5 shadow-soft relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-36 h-36 bg-coral-500/20 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-black uppercase tracking-wider text-coral-400 bg-coral-500/20 px-2.5 py-0.5 rounded-full border border-coral-500/30">
            {t.todaysChallenge}
          </span>
          <span className="text-xs text-cream-300 font-semibold">
            {language === 'mr' ? '३ मिनिटे' : language === 'hi' ? '3 मिनट' : '3 min'}
          </span>
        </div>

        <div className="flex items-start gap-3 my-3">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-3xl flex-shrink-0">
            🎢
          </div>
          <div>
            <h2 className="text-lg font-black text-white leading-snug">
              {t.challengeTitle}
            </h2>
            <p className="text-xs text-cream-300 mt-1 leading-relaxed">
              {t.challengeSub}
            </p>
          </div>
        </div>

        <button
          onClick={handleStartTodayChallenge}
          className="w-full py-3 px-4 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-xs sm:text-sm shadow-coral-glow flex items-center justify-center gap-2 transition-transform active:scale-95"
        >
          <PlayCircle className="w-4 h-4" />
          <span>{t.playNow}</span>
        </button>
      </div>

      {/* Calm Streak Habit Card */}
      <div className="bg-gradient-to-r from-orange-50 via-cream-100 to-orange-50 border border-orange-200 rounded-3xl p-3.5 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shadow-xs">
            <Flame className="w-5 h-5 fill-current animate-bounce-soft" />
          </div>
          <div>
            <div className="text-xs font-black text-charcoal-900">
              {streakDays} {t.streakDaysLabel}
            </div>
            <div className="text-[11px] text-charcoal-600">
              {t.streakEncouragement}
            </div>
          </div>
        </div>

        <button
          onClick={() => setActiveTab('progress')}
          className="text-xs font-bold text-coral-600 hover:text-coral-700 flex items-center gap-0.5"
        >
          <span>{t.viewProgress}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Two Helpful Companions */}
      <div className="grid grid-cols-2 gap-2.5">
        <button
          onClick={() => {
            const el = document.getElementById('jargon-buster-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="p-3.5 bg-white rounded-2xl border border-cream-300 hover:border-coral-400 text-left shadow-soft transition-all active:scale-95"
        >
          <div className="w-8 h-8 rounded-xl bg-coral-50 text-coral-600 flex items-center justify-center mb-2 font-bold">
            <Wand2 className="w-4 h-4" />
          </div>
          <div className="font-extrabold text-xs text-charcoal-900 leading-tight">
            {t.makeSimple}
          </div>
          <div className="text-[10px] text-charcoal-500 mt-0.5">
            {t.makeSimpleSub}
          </div>
        </button>

        <button
          onClick={() => setIsAskMoneeOpen(true)}
          className="p-3.5 bg-white rounded-2xl border border-cream-300 hover:border-lavender-400 text-left shadow-soft transition-all active:scale-95"
        >
          <div className="w-8 h-8 rounded-xl bg-lavender-100 text-lavender-700 flex items-center justify-center mb-2 font-bold">
            <MessageCircle className="w-4 h-4" />
          </div>
          <div className="font-extrabold text-xs text-charcoal-900 leading-tight">
            {t.askMonee}
          </div>
          <div className="text-[10px] text-charcoal-500 mt-0.5">
            {t.askMoneeSub}
          </div>
        </button>
      </div>

      {/* Invitation to explore full library */}
      <div className="bg-cream-100/70 border border-cream-300 rounded-3xl p-4 flex items-center justify-between">
        <div>
          <h4 className="text-xs font-extrabold text-charcoal-900">
            {language === 'mr' ? '८ आर्थिक सिम्युलेटर्स खेळा' : language === 'hi' ? '8 वित्तीय सिम्युलेटर्स खेलें' : 'Explore 8 Consequence Simulators'}
          </h4>
          <p className="text-[10px] text-charcoal-500">
            {language === 'mr' ? 'चक्रवाढ, विविधीकरण, फी आणि वारसदार नोंदणी' : language === 'hi' ? 'कंपाउंडिंग, विविधीकरण, फीस और नॉमिनेशन' : 'Compounding, Diversification, Fees & NAV'}
          </p>
        </div>

        <button
          onClick={() => setActiveTab('play')}
          className="py-1.5 px-3 rounded-xl bg-charcoal-900 text-white font-bold text-xs flex items-center gap-1 shadow-soft active:scale-95"
        >
          <span>{t.navPlay}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Trust pill */}
      <div className="text-center pt-2 text-[10px] text-charcoal-400 flex items-center justify-center gap-1.5">
        <ShieldCheck className="w-3.5 h-3.5 text-mint-600" />
        <span>SEBI & NSDL Track C • Zero real money risk</span>
      </div>
    </div>
  );
};

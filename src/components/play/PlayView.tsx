import React from 'react';
import { PlayCircle, Film, ShieldCheck, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { conceptsData } from '../../data/concepts';
import { VolatilitySimulator } from './VolatilitySimulator';
import { CompoundingSimulator } from './CompoundingSimulator';
import { DiversificationSimulator } from './DiversificationSimulator';
import { FeesSimulator } from './FeesSimulator';
import { NavSimulator } from './NavSimulator';
import { NominationSimulator } from './NominationSimulator';
import { InflationSimulator } from './InflationSimulator';
import { RiskSimulator } from './RiskSimulator';
import { translations } from '../../data/translations';

export const PlayView: React.FC = () => {
  const {
    activeSimulatorId,
    setActiveSimulatorId,
    setActiveMicroVideoConceptId,
    completedConcepts,
    language
  } = useApp();

  const t = translations[language];

  // If a simulator is active, render it
  if (activeSimulatorId === 'volatility') {
    return <VolatilitySimulator onBack={() => setActiveSimulatorId(null)} />;
  }
  if (activeSimulatorId === 'compounding') {
    return <CompoundingSimulator onBack={() => setActiveSimulatorId(null)} />;
  }
  if (activeSimulatorId === 'diversification') {
    return <DiversificationSimulator onBack={() => setActiveSimulatorId(null)} />;
  }
  if (activeSimulatorId === 'fees') {
    return <FeesSimulator onBack={() => setActiveSimulatorId(null)} />;
  }
  if (activeSimulatorId === 'nav') {
    return <NavSimulator onBack={() => setActiveSimulatorId(null)} />;
  }
  if (activeSimulatorId === 'nomination') {
    return <NominationSimulator onBack={() => setActiveSimulatorId(null)} />;
  }
  if (activeSimulatorId === 'inflation') {
    return <InflationSimulator onBack={() => setActiveSimulatorId(null)} />;
  }
  if (activeSimulatorId === 'risk') {
    return <RiskSimulator onBack={() => setActiveSimulatorId(null)} />;
  }

  return (
    <div className="space-y-4 pb-6 animate-fade-in">
      {/* Hero Showcase Card */}
      <div className="bg-gradient-to-br from-charcoal-900 to-charcoal-800 text-white rounded-3xl p-5 shadow-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-44 h-44 bg-coral-500/20 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between mb-2 relative z-10">
          <span className="text-[10px] font-black uppercase tracking-wider text-coral-400 bg-coral-500/20 px-2.5 py-0.5 rounded-full border border-coral-500/30">
            {t.todaysChallenge}
          </span>
          <span className="text-xs text-cream-300 font-semibold">
            {language === 'mr' ? '३ मिनिटे' : language === 'hi' ? '3 मिनट' : '3 min'}
          </span>
        </div>

        <div className="flex items-start gap-3 relative z-10 mb-3">
          <div className="text-4xl">🎢</div>
          <div>
            <h2 className="text-xl font-black text-white tracking-tight">
              {t.challengeTitle}
            </h2>
            <p className="text-xs text-cream-300 mt-0.5 leading-relaxed">
              {t.challengeSub}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 relative z-10">
          <button
            onClick={() => setActiveSimulatorId('volatility')}
            className="flex-1 py-3 px-4 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-xs sm:text-sm shadow-coral-glow flex items-center justify-center gap-2 transition-transform active:scale-95"
          >
            <PlayCircle className="w-4 h-4" />
            <span>{t.playNow}</span>
          </button>

          <button
            onClick={() => setActiveMicroVideoConceptId('volatility')}
            className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
            title={t.watchIn60}
          >
            <Film className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Section Title */}
      <div className="flex items-center justify-between px-1">
        <div>
          <h3 className="font-extrabold text-base text-charcoal-900">
            {language === 'mr' ? '८ आर्थिक सिम्युलेटर्स' : language === 'hi' ? '8 वित्तीय सिम्युलेटर्स' : 'Consequence Simulators'}
          </h3>
          <p className="text-xs text-charcoal-500">
            {language === 'mr' ? 'निर्णय घेऊन परिणाम अनुभवा • शून्य खरा धोका' : language === 'hi' ? 'निर्णय लें और असर देखें • शून्य वास्तविक जोखिम' : 'Experience choices • Zero real money risk'}
          </p>
        </div>

        <span className="text-xs font-bold text-charcoal-600 bg-cream-200 px-2.5 py-0.5 rounded-full">
          {completedConcepts.length} / {conceptsData.length}
        </span>
      </div>

      {/* Simulator Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {conceptsData.map((concept) => {
          const isDone = completedConcepts.includes(concept.id);
          return (
            <div
              key={concept.id}
              className="bg-white rounded-3xl p-4 border border-cream-300 shadow-soft hover:border-coral-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-2">
                  <div className="w-10 h-10 rounded-2xl bg-cream-100 flex items-center justify-center text-2xl border border-cream-200">
                    {concept.icon}
                  </div>

                  <div className="flex items-center gap-1.5">
                    {isDone ? (
                      <span className="px-2 py-0.5 rounded-full bg-mint-100 text-mint-700 text-[10px] font-bold flex items-center gap-1">
                        <Check className="w-3 h-3 stroke-[3]" />
                        <span>{language === 'mr' ? 'पूर्ण' : language === 'hi' ? 'पूर्ण' : 'Done'}</span>
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-charcoal-400 bg-cream-100 px-2 py-0.5 rounded-full">
                        {concept.timeEstimate}
                      </span>
                    )}
                  </div>
                </div>

                <h4 className="font-extrabold text-sm text-charcoal-900 mb-1">
                  {concept.title[language]}
                </h4>

                <p className="text-xs text-charcoal-600 line-clamp-2 mb-3 leading-relaxed">
                  {concept.oneLiner[language]}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-cream-100">
                <button
                  onClick={() => setActiveSimulatorId(concept.id)}
                  className="flex-1 py-2 px-3 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-transform active:scale-95"
                >
                  <PlayCircle className="w-3.5 h-3.5" />
                  <span>{language === 'mr' ? 'सराव करा' : language === 'hi' ? 'अभ्यास करें' : 'Play Simulator'}</span>
                </button>

                <button
                  onClick={() => setActiveMicroVideoConceptId(concept.id)}
                  className="p-2 rounded-xl bg-lavender-50 hover:bg-lavender-100 text-lavender-700 border border-lavender-200 transition-all"
                  title={t.watchIn60}
                >
                  <Film className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Public Good Disclaimer */}
      <div className="p-3 bg-cream-100 rounded-2xl border border-cream-200 text-center text-[11px] text-charcoal-500">
        <ShieldCheck className="w-4 h-4 text-mint-600 inline mr-1 -mt-0.5" />
        <span>{t.fictionalDisclaimer}</span>
      </div>
    </div>
  );
};

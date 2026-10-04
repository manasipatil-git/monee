import React from 'react';
import { Flame, Sparkles, PlayCircle, Film, ArrowRight, Wand2, MessageCircle, Volume2, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { conceptsData } from '../../data/concepts';
import { VoicePlayer } from '../common/VoicePlayer';
import { translations } from '../../data/translations';

export const HomeView: React.FC = () => {
  const {
    language,
    streakDays,
    setActiveSimulatorId,
    setActiveTab,
    setActiveMicroVideoConceptId,
    setIsAskMoneeOpen,
    completedConcepts
  } = useApp();

  const t = translations[language];

  const handleStartTodayChallenge = () => {
    setActiveSimulatorId('volatility');
    setActiveTab('play');
  };

  return (
    <div className="space-y-4 pb-8 animate-fade-in">
      {/* Friendly Greeting */}
      <div className="pt-2 px-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight leading-tight">
          {t.greeting || 'Hey 👋'}
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-600 font-medium">
          {t.greetingSub || 'Ready to make money make sense?'}
        </p>
      </div>

      {/* Hero Card: Today's Challenge */}
      <div className="bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white rounded-3xl p-5 shadow-soft relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-36 h-36 bg-coral-500/20 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-black uppercase tracking-wider text-coral-400 bg-coral-500/20 px-2.5 py-0.5 rounded-full border border-coral-500/30">
            {t.todaysChallenge || "TODAY'S CHALLENGE"}
          </span>
          <span className="text-xs text-cream-300 font-semibold">3 min</span>
        </div>

        <div className="flex items-start gap-3 my-3">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-3xl flex-shrink-0">
            🎢
          </div>
          <div>
            <h2 className="text-lg font-black text-white leading-snug">
              {t.challengeTitle || "Can you survive a market crash?"}
            </h2>
            <p className="text-xs text-cream-300 mt-1 leading-relaxed">
              {t.challengeSub || "Experience volatility in 3 minutes with zero real risk."}
            </p>
          </div>
        </div>

        <button
          onClick={handleStartTodayChallenge}
          className="w-full py-3 px-4 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-xs sm:text-sm shadow-coral-glow flex items-center justify-center gap-2 transition-transform active:scale-95"
        >
          <PlayCircle className="w-4 h-4" />
          <span>{t.playNow || 'Play now'}</span>
        </button>
      </div>

      {/* Streak Encouragement Banner */}
      <div className="bg-gradient-to-r from-orange-50 via-cream-100 to-orange-50 border border-orange-200 rounded-3xl p-3.5 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shadow-xs">
            <Flame className="w-5 h-5 fill-current animate-bounce-soft" />
          </div>
          <div>
            <div className="text-xs font-black text-charcoal-900">
              {streakDays} Day Learning Streak
            </div>
            <div className="text-[11px] text-charcoal-600">
              You're building resilient money sense.
            </div>
          </div>
        </div>

        <button
          onClick={() => setActiveTab('progress')}
          className="text-xs font-bold text-coral-600 hover:text-coral-700 flex items-center gap-0.5"
        >
          <span>View</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Quick Launchers: Jargon Buster & Ask monee */}
      <div className="grid grid-cols-2 gap-2.5">
        <button
          onClick={() => {
            // Jump to jargon buster on page
            const el = document.getElementById('jargon-buster-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="p-3 bg-white rounded-2xl border border-cream-300 hover:border-coral-400 text-left shadow-soft transition-all active:scale-95"
        >
          <div className="w-8 h-8 rounded-xl bg-coral-50 text-coral-600 flex items-center justify-center mb-2 font-bold">
            <Wand2 className="w-4 h-4" />
          </div>
          <div className="font-extrabold text-xs text-charcoal-900 leading-tight">
            {t.makeSimple || 'Make this simple'}
          </div>
          <div className="text-[10px] text-charcoal-500 mt-0.5">
            Translate financial jargon
          </div>
        </button>

        <button
          onClick={() => setIsAskMoneeOpen(true)}
          className="p-3 bg-white rounded-2xl border border-cream-300 hover:border-lavender-400 text-left shadow-soft transition-all active:scale-95"
        >
          <div className="w-8 h-8 rounded-xl bg-lavender-100 text-lavender-700 flex items-center justify-center mb-2 font-bold">
            <MessageCircle className="w-4 h-4" />
          </div>
          <div className="font-extrabold text-xs text-charcoal-900 leading-tight">
            {t.askMonee || 'Ask monee'}
          </div>
          <div className="text-[10px] text-charcoal-500 mt-0.5">
            Voice & text Q&A companion
          </div>
        </button>
      </div>

      {/* Continue Learning Section */}
      <div className="pt-2">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-[11px] font-black uppercase tracking-wider text-charcoal-500">
            {t.continueLearning || 'CONTINUE LEARNING'}
          </span>
          <button
            onClick={() => setActiveTab('map')}
            className="text-xs font-bold text-coral-600 hover:text-coral-700 flex items-center gap-0.5"
          >
            <span>See Money Map</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Concept Cards Stack */}
        <div className="space-y-3">
          {conceptsData.map((concept) => {
            const isDone = completedConcepts.includes(concept.id);
            return (
              <div
                key={concept.id}
                className="bg-white rounded-3xl p-4 border border-cream-300 shadow-soft hover:border-coral-200 transition-all flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-cream-50 border border-cream-200 flex items-center justify-center text-2xl flex-shrink-0">
                      {concept.icon}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-extrabold text-sm sm:text-base text-charcoal-900">
                          {concept.title[language]}
                        </h3>
                        {isDone && (
                          <span className="w-4 h-4 rounded-full bg-mint-500 text-white flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-charcoal-600 mt-0.5 leading-snug">
                        {concept.oneLiner[language]}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-charcoal-400 bg-cream-100 px-2 py-0.5 rounded-full flex-shrink-0">
                    {concept.timeEstimate}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-cream-200 h-1.5 rounded-full overflow-hidden my-2">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isDone ? 'bg-mint-500 w-full' : 'bg-coral-500'
                    }`}
                    style={{ width: isDone ? '100%' : `${concept.progress}%` }}
                  />
                </div>

                {/* Action Row */}
                <div className="flex items-center justify-between pt-2 border-t border-cream-100">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setActiveSimulatorId(concept.id);
                        setActiveTab('play');
                      }}
                      className="py-1.5 px-3 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-white font-bold text-xs flex items-center gap-1.5 transition-transform active:scale-95"
                    >
                      <PlayCircle className="w-3.5 h-3.5" />
                      <span>Experience</span>
                    </button>

                    <button
                      onClick={() => setActiveMicroVideoConceptId(concept.id)}
                      className="p-1.5 rounded-xl bg-cream-100 hover:bg-cream-200 text-charcoal-700 text-xs font-semibold flex items-center gap-1"
                      title="Watch in 60s"
                    >
                      <Film className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">60s</span>
                    </button>
                  </div>

                  <VoicePlayer
                    textToSpeak={concept.audioNarration[language]}
                    size="sm"
                    variant="ghost"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

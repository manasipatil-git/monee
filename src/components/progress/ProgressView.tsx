import React, { useState } from 'react';
import { Flame, Award, Zap, CheckCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { conceptsData } from '../../data/concepts';
import { translations } from '../../data/translations';

export const ProgressView: React.FC = () => {
  const {
    streakDays,
    totalXp,
    badges,
    markConceptRecalled,
    addXp,
    language
  } = useApp();

  const [memoryAnswerIndex, setMemoryAnswerIndex] = useState<number | null>(null);
  const [hasAnsweredMemory, setHasAnsweredMemory] = useState(false);
  const [dailyChallengeDone, setDailyChallengeDone] = useState(false);

  const t = translations[language];

  // Weekly days
  const weekDays = [
    { day: language === 'mr' ? 'सो' : language === 'hi' ? 'सो' : 'M', active: true },
    { day: language === 'mr' ? 'मं' : language === 'hi' ? 'मं' : 'T', active: true },
    { day: language === 'mr' ? 'बु' : language === 'hi' ? 'बु' : 'W', active: true },
    { day: language === 'mr' ? 'गु' : language === 'hi' ? 'गु' : 'T', active: true },
    { day: language === 'mr' ? 'शु' : language === 'hi' ? 'शु' : 'F', active: false },
    { day: language === 'mr' ? 'श' : language === 'hi' ? 'श' : 'S', active: false },
    { day: language === 'mr' ? 'र' : language === 'hi' ? 'र' : 'S', active: false },
  ];

  // Memory quiz using Volatility concept
  const volatilityConcept = conceptsData[0];
  const memoryQuiz = volatilityConcept.memoryCheck;

  const handleMemorySubmit = (idx: number) => {
    setMemoryAnswerIndex(idx);
    setHasAnsweredMemory(true);
    if (idx === memoryQuiz.correctIndex) {
      markConceptRecalled('volatility');
    }
  };

  const dailyQuestions = {
    question: {
      en: "What does NAV truly tell an investor?",
      hi: "NAV का असली मतलब क्या है?",
      mr: "NAV चा खरा अर्थ काय आहे?"
    },
    options: {
      en: [
        "It shows whether a fund is on cheap discount",
        "It is the per-slice value of the shared basket",
        "It guarantees next month's return"
      ],
      hi: [
        "यह बताता है कि फंड सस्ते डिस्काउंट पर है",
        "यह एक साझी टोकरी के प्रति टुकड़े की आज की कीमत है",
        "यह अगले महीने का पक्का मुनाफा बताता है"
      ],
      mr: [
        "फंड स्वस्त डिस्काउंटवर आहे हे सांगते",
        "सामायिक टोपलीतील एका तुकड्याचे आजचे मूल्य सांगते",
        "पुढच्या महिन्याचा हमखास नफा सांगते"
      ]
    },
    feedback: {
      en: "NAV is merely the per-unit slice value of the basket, never a discount. You earned +20 XP!",
      hi: "NAV केवल एक टुकड़े का माप है, कोई डिस्काउंट नहीं। आपको +20 XP मिले!",
      mr: "NAV म्हणजे फक्त तुकड्याचे माप, कोणताही डिस्काउंट नाही. तुम्हाला +20 XP मिळाले!"
    }
  };

  const handleDailySubmit = (idx: number) => {
    setDailyChallengeDone(true);
    addXp(20, 'Daily Challenge Completed');
  };

  return (
    <div className="space-y-4 pb-8 animate-fade-in">
      {/* Streak Hero Card */}
      <div className="bg-gradient-to-br from-orange-500 to-coral-600 text-white rounded-3xl p-5 shadow-coral-glow/30 relative overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-2xl bg-white/20 backdrop-blur-sm">
              <Flame className="w-6 h-6 fill-current text-white animate-bounce-soft" />
            </span>
            <div>
              <div className="text-2xl font-black tracking-tight">
                {streakDays} {t.streakDaysLabel}
              </div>
              <div className="text-xs text-white/80 font-medium">
                {t.streakEncouragement}
              </div>
            </div>
          </div>

          <div className="text-right">
            <span className="text-xs font-bold bg-white/20 px-2.5 py-1 rounded-full text-white">
              {language === 'mr' ? 'रोजची सवय' : language === 'hi' ? 'दैनिक आदत' : 'Habit'}
            </span>
          </div>
        </div>

        {/* Weekly Calendar Dots */}
        <div className="flex items-center justify-between bg-black/15 backdrop-blur-sm rounded-2xl p-3">
          {weekDays.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1.5">
              <span className="text-[10px] font-bold text-white/70">{item.day}</span>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                  item.active
                    ? 'bg-white text-coral-600 shadow-sm'
                    : 'bg-white/10 text-white/40 border border-white/20'
                }`}
              >
                {item.active ? '✓' : ''}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Challenge Card */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-cream-300 shadow-soft">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-coral-600">
                {language === 'mr' ? 'आजचे १-मिनिट आव्हान' : language === 'hi' ? 'आज की 1-मिनट चुनौती' : 'Daily 1-Min Challenge'}
              </span>
              <h3 className="font-extrabold text-sm sm:text-base text-charcoal-900">
                "{dailyQuestions.question[language]}"
              </h3>
            </div>
          </div>
          <span className="text-xs font-bold text-butter-600 bg-butter-50 border border-butter-200 px-2 py-0.5 rounded-full">
            +20 XP
          </span>
        </div>

        {!dailyChallengeDone ? (
          <div className="space-y-2 mt-3">
            {dailyQuestions.options[language].map((opt, i) => (
              <button
                key={i}
                onClick={() => handleDailySubmit(i)}
                className="w-full text-left p-3 rounded-2xl border border-cream-300 hover:border-coral-400 bg-cream-50 text-xs font-medium text-charcoal-800 transition-all active:scale-98"
              >
                {opt}
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-3 p-3 bg-mint-50 border border-mint-200 rounded-2xl animate-fade-in text-xs text-charcoal-800">
            <div className="font-bold text-mint-800 flex items-center gap-1 mb-1">
              <CheckCircle className="w-4 h-4 text-mint-600" />
              <span>{language === 'mr' ? 'छान! आजची सवय पूर्ण झाली!' : language === 'hi' ? 'शाबाश! आज की आदत पूरी हुई!' : 'Great Job! Daily Streak Kept!'}</span>
            </div>
            <p>{dailyQuestions.feedback[language]}</p>
          </div>
        )}
      </div>

      {/* Memory Check 🧠 Card */}
      <div className="bg-lavender-50/60 rounded-3xl p-4 sm:p-5 border border-lavender-200 shadow-soft">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧠</span>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-lavender-800">
                {t.memoryBoost}
              </span>
              <h3 className="font-extrabold text-sm sm:text-base text-charcoal-900">
                {language === 'mr' ? 'उजळणी चाचणी (Memory Check):' : language === 'hi' ? 'याददाश्त टेस्ट:' : 'Quick Recall Check:'}
              </h3>
            </div>
          </div>
          <span className="text-xs font-bold text-lavender-800 bg-lavender-100 px-2 py-0.5 rounded-full border border-lavender-200">
            {language === 'mr' ? 'उजळणी' : language === 'hi' ? 'पुनरावृत्ति' : 'Spaced Recall'}
          </span>
        </div>

        <p className="text-xs text-charcoal-700 font-semibold mb-3">
          {memoryQuiz.question[language]}
        </p>

        <div className="space-y-2 mb-3">
          {memoryQuiz.options[language].map((optionText, idx) => {
            const isSelected = memoryAnswerIndex === idx;
            const isCorrect = idx === memoryQuiz.correctIndex;
            return (
              <button
                key={idx}
                disabled={hasAnsweredMemory}
                onClick={() => handleMemorySubmit(idx)}
                className={`w-full text-left p-3 rounded-2xl border text-xs font-semibold transition-all ${
                  hasAnsweredMemory
                    ? isCorrect
                      ? 'bg-mint-100 border-mint-400 text-mint-900'
                      : isSelected
                      ? 'bg-red-100 border-red-300 text-red-900'
                      : 'bg-white border-cream-200 text-charcoal-500 opacity-60'
                    : 'bg-white border-cream-300 hover:border-lavender-400 text-charcoal-800'
                }`}
              >
                {optionText}
              </button>
            );
          })}
        </div>

        {hasAnsweredMemory && (
          <div className="p-3 bg-white rounded-2xl border border-lavender-200 text-xs animate-fade-in">
            <div className="font-bold text-charcoal-900 mb-0.5">
              {memoryAnswerIndex === memoryQuiz.correctIndex
                ? t.rememberedFeedback
                : t.needsReviewFeedback}
            </div>
            <p className="text-charcoal-600">
              {memoryQuiz.explanation[language]}
            </p>
          </div>
        )}
      </div>

      {/* Badges Showcase */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-cream-300 shadow-soft">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-coral-500" />
            <h3 className="font-extrabold text-base text-charcoal-900">
              {language === 'mr' ? 'मिळालेले बॅजेस' : language === 'hi' ? 'अर्जित बैज' : 'Resilience Badges'}
            </h3>
          </div>
          <span className="text-xs font-bold text-charcoal-600">
            {badges.filter(b => b.unlocked).length} / {badges.length}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {badges.map((b) => (
            <div
              key={b.id}
              className={`p-3 rounded-2xl border text-left transition-all ${
                b.unlocked
                  ? 'bg-cream-50 border-coral-200 shadow-xs'
                  : 'bg-cream-100/50 border-cream-200 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-2xl">{b.icon}</span>
                {b.unlocked ? (
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-mint-100 text-mint-700">
                    {language === 'mr' ? 'मिळाला' : language === 'hi' ? 'अर्जित' : 'Earned'}
                  </span>
                ) : (
                  <span className="text-[9px] font-bold text-charcoal-400">
                    {language === 'mr' ? 'बाकी' : language === 'hi' ? 'बंद' : 'Locked'}
                  </span>
                )}
              </div>
              <h4 className="font-extrabold text-xs text-charcoal-900 mb-0.5">
                {b.title[language]}
              </h4>
              <p className="text-[10px] text-charcoal-500 leading-snug">
                {b.description[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Sparkles, Wand2, Lightbulb, BookOpen } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { jargonDictionary } from '../../data/jargonDictionary';
import { VoicePlayer } from '../common/VoicePlayer';
import { translations } from '../../data/translations';

export const MakeItSimple: React.FC = () => {
  const { language, addXp, unlockBadge, setSelectedJargonTerm } = useApp();
  const [inputText, setInputText] = useState(
    "Expense ratio represents the annualized percentage of fund assets dedicated towards operational and management overheads."
  );
  const [activeTab, setActiveTab] = useState<'eli15' | 'hindi' | 'marathi' | 'analogy'>('eli15');
  const [isProcessing, setIsProcessing] = useState(false);
  const [simplifiedResult, setSimplifiedResult] = useState<{
    simplified: string;
    eli15: string;
    hindi: string;
    marathi: string;
    analogy: string;
  } | null>(() => {
    const entry = jargonDictionary[0];
    return {
      simplified: entry.simplified,
      eli15: entry.eli15,
      hindi: entry.hindi,
      marathi: entry.marathi,
      analogy: entry.analogy
    };
  });

  const t = translations[language];

  const handleSelectPreset = (termId: string) => {
    const found = jargonDictionary.find(j => j.id === termId);
    if (found) {
      setInputText(found.originalClause);
      setSimplifiedResult({
        simplified: found.simplified,
        eli15: found.eli15,
        hindi: found.hindi,
        marathi: found.marathi,
        analogy: found.analogy
      });
      setSelectedJargonTerm(found.term);
      addXp(15, 'Simplified Financial Jargon');
      unlockBadge('jargon-buster');
    }
  };

  const handleCustomSimplify = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const lower = inputText.toLowerCase();
      const matched = jargonDictionary.find(j => 
        lower.includes(j.term.toLowerCase()) || 
        j.term.toLowerCase().split(' ').some(w => lower.includes(w))
      );

      if (matched) {
        setSimplifiedResult({
          simplified: matched.simplified,
          eli15: matched.eli15,
          hindi: matched.hindi,
          marathi: matched.marathi,
          analogy: matched.analogy
        });
      } else {
        setSimplifiedResult({
          simplified: "Think of this simply: It's an agreement detailing who does what with your money and what costs or terms apply before you can withdraw.",
          eli15: "Imagine paying a ticket for a ride: this clause is just the safety rule and the maintenance fee printed on the back of the ticket.",
          hindi: "इसका सीधा मतलब है: यह एक नियम या शर्त है जो बताती है कि आपके पैसे पर क्या खर्च आएगा और इसे कब निकाला जा सकता है।",
          marathi: "याचा सोपा अर्थ असा: हा एक नियम किंवा अट आहे जी सांगते की पैशांवर काय खर्च येईल आणि ते कधी काढता येतील.",
          analogy: "Like a receipt at a grocery store explaining why ₹2 was charged for the cloth carry bag."
        });
      }
      setIsProcessing(false);
      addXp(15, 'Simplified Custom Jargon');
      unlockBadge('jargon-buster');
    }, 400);
  };

  const getActiveTextToSpeak = () => {
    if (!simplifiedResult) return '';
    if (activeTab === 'hindi') return simplifiedResult.hindi;
    if (activeTab === 'marathi') return simplifiedResult.marathi;
    if (activeTab === 'analogy') return simplifiedResult.analogy;
    return simplifiedResult.eli15;
  };

  return (
    <div className="bg-cream-50 rounded-3xl p-4 sm:p-5 border border-cream-300 shadow-soft">
      {/* Title */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-coral-100 text-coral-600 flex items-center justify-center font-bold">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-extrabold text-base text-charcoal-900 leading-tight">
              {t.makeSimple}
            </h3>
            <p className="text-[11px] text-charcoal-500">
              {t.makeSimpleSub}
            </p>
          </div>
        </div>

        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-mint-100 text-mint-700 border border-mint-200">
          {language === 'mr' ? 'सोपी भाषा' : language === 'hi' ? 'नो जार्गन' : 'No Jargon'}
        </span>
      </div>

      {/* Preset pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 no-scrollbar">
        {jargonDictionary.map(item => (
          <button
            key={item.id}
            onClick={() => handleSelectPreset(item.id)}
            className={`whitespace-nowrap px-2.5 py-1 rounded-full text-xs font-semibold border transition-all ${
              inputText === item.originalClause
                ? 'bg-charcoal-900 text-white border-charcoal-900 shadow-xs'
                : 'bg-white text-charcoal-700 border-cream-300 hover:border-coral-400'
            }`}
          >
            {item.term}
          </button>
        ))}
      </div>

      {/* Input box */}
      <div className="relative mb-3">
        <textarea
          rows={3}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={
            language === 'mr'
              ? "कोणताही कठीण आर्थिक शब्द किंवा नियम येथे पेस्ट करा..."
              : language === 'hi'
              ? "कोई भी कठिन वित्तीय वाक्य यहाँ पेस्ट करें..."
              : "Paste any confusing financial clause or definition here..."
          }
          className="w-full text-xs p-3 rounded-2xl bg-white border border-cream-300 focus:border-coral-500 focus:ring-1 focus:ring-coral-500 outline-none resize-none leading-relaxed text-charcoal-800"
        />
        <button
          onClick={handleCustomSimplify}
          disabled={isProcessing || !inputText.trim()}
          className="absolute bottom-2.5 right-2.5 px-3 py-1 rounded-xl bg-coral-500 hover:bg-coral-600 text-white text-xs font-bold flex items-center gap-1 shadow-coral-glow transition-transform active:scale-95 disabled:opacity-50"
        >
          <Wand2 className="w-3.5 h-3.5" />
          <span>
            {isProcessing
              ? (language === 'mr' ? 'सोपे करत आहे...' : language === 'hi' ? 'सरल कर रहे हैं...' : 'Simplifying...')
              : (language === 'mr' ? 'सोपे करा' : language === 'hi' ? 'सरल बनाएं' : 'Simplify')}
          </span>
        </button>
      </div>

      {/* Simplified Output Card */}
      {simplifiedResult && (
        <div className="bg-white rounded-2xl border border-coral-200 p-4 shadow-soft">
          {/* Quick takeaway */}
          <div className="flex items-start gap-2.5 mb-3 pb-3 border-b border-cream-200">
            <span className="text-xl">💡</span>
            <div className="flex-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-coral-600">
                {language === 'mr' ? 'थोडक्यात अर्थ' : language === 'hi' ? 'सीधा अर्थ' : 'Core Meaning'}
              </span>
              <p className="text-xs sm:text-sm font-semibold text-charcoal-900 leading-snug">
                "{language === 'mr' ? simplifiedResult.marathi : language === 'hi' ? simplifiedResult.hindi : simplifiedResult.simplified}"
              </p>
            </div>
          </div>

          {/* Perspective selector tabs */}
          <div className="flex items-center gap-1 bg-cream-100 p-1 rounded-xl mb-3">
            {[
              { id: 'marathi' as const, label: t.inMarathi, flag: '🇮🇳' },
              { id: 'hindi' as const, label: t.inHindi, flag: '🇮🇳' },
              { id: 'eli15' as const, label: t.eli15, icon: Lightbulb },
              { id: 'analogy' as const, label: t.giveExample, icon: BookOpen },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-1 px-1.5 rounded-lg text-[11px] font-bold transition-all text-center truncate ${
                  activeTab === tab.id
                    ? 'bg-white text-coral-600 shadow-xs'
                    : 'text-charcoal-600 hover:text-charcoal-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content box */}
          <div className="bg-cream-50/80 rounded-xl p-3 border border-cream-200 mb-3">
            <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed font-medium">
              {activeTab === 'marathi' && simplifiedResult.marathi}
              {activeTab === 'hindi' && simplifiedResult.hindi}
              {activeTab === 'eli15' && simplifiedResult.eli15}
              {activeTab === 'analogy' && simplifiedResult.analogy}
            </p>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between">
            <VoicePlayer
              textToSpeak={getActiveTextToSpeak()}
              hindiFallbackText={simplifiedResult.hindi}
              size="sm"
              variant="secondary"
              label={language === 'mr' ? 'ऐका' : language === 'hi' ? 'सुनें' : 'Listen'}
            />

            <span className="text-[10px] text-charcoal-400 italic">
              {language === 'mr' ? 'सामान्य लोकांसाठी सोपे शिक्षण' : 'Investor Education for Bharat'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

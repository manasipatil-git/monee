import React, { useState } from 'react';
import { ArrowLeft, Clock, Sparkles, TrendingUp, HelpCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { compoundingMilestones } from '../../data/simulations';
import { VoicePlayer } from '../common/VoicePlayer';
import { translations } from '../../data/translations';

export const CompoundingSimulator: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { language, addXp, markConceptCompleted } = useApp();
  const [selectedYearIndex, setSelectedYearIndex] = useState(1); // 5 years by default

  const t = translations[language];
  const activeMilestone = compoundingMilestones[selectedYearIndex];

  const handleSelectYear = (idx: number) => {
    setSelectedYearIndex(idx);
    addXp(10, 'Explored Compounding Horizon');
    markConceptCompleted('compounding');
  };

  return (
    <div className="bg-white rounded-3xl border border-cream-300 shadow-soft p-5 sm:p-6 animate-fade-in">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-xs font-bold text-charcoal-500 hover:text-charcoal-900"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          Illustrative Example Only
        </span>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <span className="text-3xl">🌱</span>
        <div>
          <h2 className="text-xl font-black text-charcoal-900 tracking-tight">
            {language === 'hi'
              ? "चक्रवृद्धि (Compounding) का जादू"
              : language === 'mr'
              ? "चक्रवाढ (Compounding) ची किमया"
              : "Compounding Simulator"}
          </h2>
          <p className="text-xs text-charcoal-500">
            Start with ₹10,000 fictional money. Watch how time does the heavy lifting.
          </p>
        </div>
      </div>

      {/* Main Growth Value Display */}
      <div className="bg-emerald-50/60 rounded-3xl p-5 border border-emerald-200 text-center mb-5 relative overflow-hidden">
        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
          After {activeMilestone.year} {activeMilestone.year === 1 ? 'Year' : 'Years'}
        </span>

        <div className="text-4xl font-black text-charcoal-900 tracking-tight mb-2">
          ₹{activeMilestone.total.toLocaleString('en-IN')}
        </div>

        <div className="flex items-center justify-center gap-3 text-xs">
          <span className="text-charcoal-600">
            Initial: <strong className="text-charcoal-900">₹10,000</strong>
          </span>
          <span className="text-emerald-700 font-bold bg-white px-2.5 py-0.5 rounded-full border border-emerald-200">
            +{activeMilestone.multiplier} Total Growth
          </span>
        </div>
      </div>

      {/* Timeline Controls */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs font-bold text-charcoal-700 mb-2">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-coral-500" />
            <span>Move Timeline Slider:</span>
          </span>
          <span className="text-coral-600">{activeMilestone.year} Years</span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {compoundingMilestones.map((m, idx) => (
            <button
              key={m.year}
              onClick={() => handleSelectYear(idx)}
              className={`py-2.5 px-1 rounded-2xl text-xs font-bold transition-all border ${
                selectedYearIndex === idx
                  ? 'bg-charcoal-900 text-white border-charcoal-900 shadow-md scale-102'
                  : 'bg-cream-50 text-charcoal-700 border-cream-300 hover:border-emerald-300'
              }`}
            >
              <div>{m.year} Yr</div>
              <div className="text-[10px] opacity-80 mt-0.5">{m.multiplier}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Visual Snowball Analogy Card */}
      <div className="bg-cream-50 rounded-2xl p-4 border border-cream-200 mb-5">
        <div className="flex items-start gap-3">
          <div className="text-2xl mt-0.5">⛄</div>
          <div>
            <h4 className="text-xs font-bold text-charcoal-900 mb-1">
              The Snowball Analogy
            </h4>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              {language === 'hi'
                ? "कंपाउंडिंग का मतलब है: जब आपकी कमाई खुद कमाई करने लगे! जैसे बर्फ का छोटा गोला पहाड़ी से लुढ़कते हुए और बर्फ बटोर कर बड़ा होता जाता है।"
                : language === 'mr'
                ? "कंपाउंडिंग म्हणजे नफ्यावर नफा मिळणे! जसा बर्फाचा लहान गोळा डोंगरावरून खाली येताना वेगाने मोठा होत जातो."
                : "Compounding means growth can itself become part of future growth. In year 1, your interest is ₹800. In year 20, the interest is over ₹36,000 without adding new money!"}
            </p>
          </div>
        </div>
      </div>

      {/* Voice & Learning Action */}
      <div className="flex items-center justify-between pt-2 border-t border-cream-200">
        <VoicePlayer
          textToSpeak={
            language === 'hi'
              ? "कंपाउंडिंग का मतलब है कि आपको सिर्फ अपनी लगाई हुई रकम पर ही नहीं, बल्कि उस पर मिले मुनाफे पर भी आगे चलकर मुनाफा मिलता है।"
              : language === 'mr'
              ? "कंपाउंडिंग म्हणजे फक्त मूळ रकमेवरच नव्हे, तर आधी मिळालेल्या नफ्यावरही पुढे नफा मिळणे."
              : "Compounding means growth itself becomes part of future growth. Time is the true engine of compounding."
          }
          variant="secondary"
          size="sm"
        />

        <button
          onClick={onBack}
          className="py-2 px-4 rounded-xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-xs shadow-coral-glow transition-all active:scale-95"
        >
          Finished Exploring
        </button>
      </div>
    </div>
  );
};

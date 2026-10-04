import React, { useState } from 'react';
import { ArrowLeft, Flame, TrendingDown, ShoppingBag } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { inflationTimeline } from '../../data/simulations';
import { VoicePlayer } from '../common/VoicePlayer';

export const InflationSimulator: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { language, addXp, markConceptCompleted } = useApp();
  const [selectedIdx, setSelectedIdx] = useState(2); // 2024 by default

  const item = inflationTimeline[selectedIdx];

  const handleSelectYear = (idx: number) => {
    setSelectedIdx(idx);
    addXp(10, 'Explored Inflation Samosa Index');
    markConceptCompleted('inflation');
  };

  return (
    <div className="bg-white rounded-3xl border border-cream-300 shadow-soft p-5 sm:p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-xs font-bold text-charcoal-500 hover:text-charcoal-900"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
          The Samosa Index
        </span>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <span className="text-3xl">🎈</span>
        <div>
          <h2 className="text-xl font-black text-charcoal-900 tracking-tight">
            The Rupee Shrinker (Inflation)
          </h2>
          <p className="text-xs text-charcoal-500">
            See how the purchasing power of the exact same ₹100 note melts over the years.
          </p>
        </div>
      </div>

      {/* Year Pill selector */}
      <div className="flex gap-1.5 mb-5">
        {inflationTimeline.map((inf, idx) => (
          <button
            key={inf.year}
            onClick={() => handleSelectYear(idx)}
            className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
              selectedIdx === idx
                ? 'bg-charcoal-900 text-white border-charcoal-900 shadow-sm'
                : 'bg-cream-50 text-charcoal-700 border-cream-300 hover:border-red-300'
            }`}
          >
            {inf.year.slice(0, 4)}
          </button>
        ))}
      </div>

      {/* What ₹100 note buys card */}
      <div className="bg-red-50/50 rounded-2xl p-4 border border-red-200 text-center mb-5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 block mb-1">
          A Single ₹100 Note in {item.year}
        </span>

        <div className="text-3xl font-black text-charcoal-900 mb-2">
          Buys {item.platesFor100} Samosas / Chai 🥟
        </div>

        <div className="w-full bg-cream-200 h-3 rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-red-500 transition-all duration-300"
            style={{ width: `${(item.platesFor100 / 12) * 100}%` }}
          />
        </div>

        <span className="text-xs text-charcoal-600">
          Individual Price: <strong>₹{item.samosaPrice}</strong> per plate
        </span>
      </div>

      {/* Market Basket stats */}
      <div className="grid grid-cols-2 gap-2.5 mb-5 text-xs">
        <div className="p-3 bg-cream-50 rounded-xl border border-cream-200">
          <span className="text-charcoal-500 block mb-0.5">Petrol (per Litre)</span>
          <strong className="text-base text-charcoal-900">₹{item.fuelPrice}</strong>
        </div>
        <div className="p-3 bg-cream-50 rounded-xl border border-cream-200">
          <span className="text-charcoal-500 block mb-0.5">Movie Ticket</span>
          <strong className="text-base text-charcoal-900">₹{item.movieTicket}</strong>
        </div>
      </div>

      {/* Melting Ice Cube Analogy */}
      <div className="bg-cream-100 rounded-2xl p-3.5 border border-cream-200 mb-4 flex items-start gap-3">
        <span className="text-2xl mt-0.5">🧊</span>
        <div className="text-xs text-charcoal-800 leading-relaxed">
          <strong>The Melting Ice Cube:</strong> Cash under your pillow doesn't stay safe—it slowly melts. If inflation is 6%, your bank account needs to grow faster than 6%, or you are quietly getting poorer every year.
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-cream-200">
        <VoicePlayer
          textToSpeak={
            language === 'hi'
              ? "महंगाई जेब में रखे बर्फ के टुकड़े जैसी है। आज का ₹100 कल कम सामान खरीदेगा। नकद पैसा अलमारी में रखे-रखे असल में कमजोर होता है।"
              : language === 'mr'
              ? "महागाई म्हणजे खिशातील बर्फाच्या खड्यासारखी आहे. आजचे ₹१०० उद्या कमी वस्तू खरेदी करतात. पैशांची वाढ महागाईपेक्षा जास्त झाली पाहिजे."
              : "Inflation quietly erodes your purchasing power. Cash under a mattress is like an ice cube slowly melting."
          }
          hindiFallbackText="महंगाई जेब में रखे बर्फ के टुकड़े जैसी है। आज का ₹100 कल कम सामान खरीदेगा। नकद पैसा अलमारी में रखे-रखे असल में कमजोर होता है।"
          lang={language}
          label={language === 'mr' ? 'ऐका' : language === 'hi' ? 'सुनें' : 'Listen'}
          variant="secondary"
          size="sm"
        />

        <button
          onClick={onBack}
          className="py-2 px-4 rounded-xl bg-charcoal-900 text-white font-bold text-xs"
        >
          Got It
        </button>
      </div>
    </div>
  );
};

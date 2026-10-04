import React, { useState } from 'react';
import { ArrowLeft, Scissors, TrendingDown, AlertCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { feesScenarios } from '../../data/simulations';
import { VoicePlayer } from '../common/VoicePlayer';

export const FeesSimulator: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { language, addXp, markConceptCompleted } = useApp();
  const [selectedYear, setSelectedYear] = useState(20);

  const activeScenario = feesScenarios.find(s => s.year === selectedYear) || feesScenarios[3];

  const handleSelectYear = (yr: number) => {
    setSelectedYear(yr);
    addXp(10, 'Explored Fees Compounding');
    markConceptCompleted('fees');
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

        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
          Small Leaks Add Up
        </span>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <span className="text-3xl">💸</span>
        <div>
          <h2 className="text-xl font-black text-charcoal-900 tracking-tight">
            The Hidden Impact of Fees
          </h2>
          <p className="text-xs text-charcoal-500">
            Compare ₹1,00,000 growing over time with 0% vs 1.8% annual fee.
          </p>
        </div>
      </div>

      {/* Year Selector */}
      <div className="flex gap-2 mb-5">
        {[1, 5, 10, 20].map((yr) => (
          <button
            key={yr}
            onClick={() => handleSelectYear(yr)}
            className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
              selectedYear === yr
                ? 'bg-charcoal-900 text-white border-charcoal-900 shadow-sm'
                : 'bg-cream-50 text-charcoal-700 border-cream-300 hover:border-sky-300'
            }`}
          >
            {yr} {yr === 1 ? 'Year' : 'Years'}
          </button>
        ))}
      </div>

      {/* Comparison Cards */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="p-3.5 rounded-2xl bg-mint-50/70 border border-mint-200 text-center">
          <span className="text-[10px] font-bold uppercase tracking-wider text-mint-700 block mb-1">
            Scenario A (No Fee)
          </span>
          <div className="text-xl font-black text-charcoal-900 mb-1">
            ₹{activeScenario.noFee.toLocaleString('en-IN')}
          </div>
          <span className="text-[10px] text-charcoal-500">100% of growth kept</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-red-50/70 border border-red-200 text-center">
          <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 block mb-1">
            Scenario B (1.8% Fee)
          </span>
          <div className="text-xl font-black text-charcoal-900 mb-1">
            ₹{activeScenario.highFee.toLocaleString('en-IN')}
          </div>
          <span className="text-[10px] text-red-600 font-bold">
            -₹{activeScenario.feeLost.toLocaleString('en-IN')} Lost to Fees!
          </span>
        </div>
      </div>

      {/* Visual Bar Comparison */}
      <div className="bg-cream-50 rounded-2xl p-4 border border-cream-200 mb-5">
        <div className="text-xs font-bold text-charcoal-800 mb-2 flex items-center gap-1.5">
          <Scissors className="w-4 h-4 text-coral-500" />
          <span>The Compounding Gap:</span>
        </div>

        <div className="space-y-2">
          <div>
            <div className="flex justify-between text-[11px] text-charcoal-600 mb-1">
              <span>Without Fees</span>
              <strong>₹{activeScenario.noFee.toLocaleString('en-IN')}</strong>
            </div>
            <div className="w-full h-3 bg-cream-200 rounded-full overflow-hidden">
              <div className="h-full bg-mint-500 rounded-full w-full" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[11px] text-charcoal-600 mb-1">
              <span>With 1.8% Fee</span>
              <strong>₹{activeScenario.highFee.toLocaleString('en-IN')}</strong>
            </div>
            <div className="w-full h-3 bg-cream-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-400 rounded-full"
                style={{ width: `${(activeScenario.highFee / activeScenario.noFee) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="mt-3 p-2 bg-white rounded-xl border border-cream-200 flex items-center gap-2 text-xs text-charcoal-700">
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
          <span>
            Over {selectedYear} years, you lost <strong>₹{activeScenario.feeLost.toLocaleString('en-IN')}</strong> just from a tiny 1.8% annual fee!
          </span>
        </div>
      </div>

      {/* Audio & takeaway */}
      <div className="flex items-center justify-between pt-2 border-t border-cream-200">
        <VoicePlayer
          textToSpeak={
            language === 'hi'
              ? "फीस का छोटा सा 1.5% हिस्सा सुनने में छोटा लगता है, लेकिन 20 साल में यह आपकी कुल कमाई का बहुत बड़ा हिस्सा काट लेता है। हमेशा खर्चों की जांच करें।"
              : language === 'mr'
              ? "दरवर्षी कापले जाणारे १.५% शुल्क लहान वाटते, पण २० वर्षांत नफ्यातील मोठा हिस्सा या शुल्कात जातो. नेहमी शुल्काची माहिती घ्या."
              : "A tiny 1.5% fee sounds harmless, but compounded over twenty years, it can consume a huge fraction of your final returns."
          }
          variant="secondary"
          size="sm"
        />

        <button
          onClick={onBack}
          className="py-2 px-4 rounded-xl bg-charcoal-900 text-white font-bold text-xs"
        >
          Finished
        </button>
      </div>
    </div>
  );
};

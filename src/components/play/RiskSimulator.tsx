import React, { useState } from 'react';
import { ArrowLeft, Shield, Compass, AlertOctagon, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { VoicePlayer } from '../common/VoicePlayer';

export const RiskSimulator: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { language, addXp, markConceptCompleted } = useApp();
  const [selectedPath, setSelectedPath] = useState<'smooth' | 'bumpy'>('smooth');
  const [journeyStep, setJourneyStep] = useState(0);

  const smoothStages = [
    { label: "Steady Start", val: "₹10,000", note: "Predictable pace" },
    { label: "Year 1", val: "₹10,600 (+6%)", note: "No bumps" },
    { label: "Year 2", val: "₹11,236 (+6%)", note: "Consistent progress" },
    { label: "Year 3", val: "₹11,910 (+6%)", note: "Arrived right on schedule" },
  ];

  const bumpyStages = [
    { label: "Fast Launch", val: "₹10,000", note: "High swings ahead" },
    { label: "Year 1 High", val: "₹12,500 (+25%)", note: "Feeling ecstatic" },
    { label: "Year 2 Dip", val: "₹9,800 (-21%)", note: "Heart skips a beat" },
    { label: "Year 3 Rebound", val: "₹13,200 (+34%)", note: "Arrived with gray hairs" },
  ];

  const activeStages = selectedPath === 'smooth' ? smoothStages : bumpyStages;

  const handleStep = () => {
    if (journeyStep < activeStages.length - 1) {
      setJourneyStep(journeyStep + 1);
    } else {
      setJourneyStep(0);
      addXp(20, 'Completed Risk Path Experiment');
      markConceptCompleted('risk');
    }
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

        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
          Predictability vs Uncertainty
        </span>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <span className="text-3xl">🛡️</span>
        <div>
          <h2 className="text-xl font-black text-charcoal-900 tracking-tight">
            The Two Roads of Risk
          </h2>
          <p className="text-xs text-charcoal-500">
            Risk is not just danger—it's how widely the journey varies.
          </p>
        </div>
      </div>

      {/* Path selection */}
      <div className="grid grid-cols-2 gap-2.5 mb-5">
        <button
          onClick={() => {
            setSelectedPath('smooth');
            setJourneyStep(0);
          }}
          className={`p-3 rounded-2xl border text-center transition-all ${
            selectedPath === 'smooth'
              ? 'bg-sky-50 border-sky-400 text-sky-900 shadow-sm'
              : 'bg-cream-50 border-cream-300 text-charcoal-600'
          }`}
        >
          <div className="text-2xl mb-1">🚆</div>
          <div className="text-xs font-bold">The Metro Road</div>
          <div className="text-[10px] text-charcoal-500">Predictable & Calm</div>
        </button>

        <button
          onClick={() => {
            setSelectedPath('bumpy');
            setJourneyStep(0);
          }}
          className={`p-3 rounded-2xl border text-center transition-all ${
            selectedPath === 'bumpy'
              ? 'bg-purple-50 border-purple-400 text-purple-900 shadow-sm'
              : 'bg-cream-50 border-cream-300 text-charcoal-600'
          }`}
        >
          <div className="text-2xl mb-1">🎢</div>
          <div className="text-xs font-bold">The Roller Coaster</div>
          <div className="text-[10px] text-charcoal-500">High Variance & Swings</div>
        </button>
      </div>

      {/* Current Road Step */}
      <div className="bg-cream-50 rounded-2xl p-4 border border-cream-200 mb-4 text-center">
        <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-500 block mb-1">
          {activeStages[journeyStep].label} (Step {journeyStep + 1} of {activeStages.length})
        </span>

        <div className="text-3xl font-black text-charcoal-900 mb-1">
          {activeStages[journeyStep].val}
        </div>

        <p className="text-xs text-charcoal-600 font-medium">
          {activeStages[journeyStep].note}
        </p>

        <button
          onClick={handleStep}
          className="mt-4 px-4 py-2 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-white font-bold text-xs shadow-soft transition-transform active:scale-95"
        >
          {journeyStep < activeStages.length - 1 ? 'Move Forward in Time →' : 'Restart Journey ↻'}
        </button>
      </div>

      {/* SEBI Investor Warning Banner */}
      <div className="p-3 bg-lavender-50 rounded-2xl border border-lavender-200 flex items-start gap-2.5 mb-4">
        <AlertOctagon className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
        <div className="text-xs text-charcoal-800 leading-relaxed">
          <strong>Investor Resilience Rule:</strong> If anyone ever promises you "High Returns with Zero Risk", walk away. Risk and return are tied at the hip!
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-cream-200">
        <VoicePlayer
          textToSpeak={
            language === 'hi'
              ? "जोखिम का मतलब केवल खतरा नहीं, बल्कि परिणाम का अनिश्चित होना है। अगर कोई कहे बिना जोखिम के भारी मुनाफा, तो वह झूठ बोल रहा है।"
              : language === 'mr'
              ? "जोखीम म्हणजे अनिश्चितता. कोणतीही जोखीम नसताना मोठा परतावा मिळणे शक्य नाही. नफा आणि जोखीम नेहमी हातात हात घालून चालतात."
              : "Risk is not just danger—it is uncertainty. Always choose the road that fits your personal timeline and stomach for swings."
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

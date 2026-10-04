import React, { useState } from 'react';
import { ArrowLeft, Users, ShieldAlert, CheckCircle2, Clock, AlertTriangle, Key } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { VoicePlayer } from '../common/VoicePlayer';

export const NominationSimulator: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { language, addXp, markConceptCompleted } = useApp();
  const [selectedScenario, setSelectedScenario] = useState<'with' | 'without'>('with');

  const handleToggle = (scenario: 'with' | 'without') => {
    setSelectedScenario(scenario);
    addXp(15, 'Explored Nomination Scenarios');
    markConceptCompleted('nomination');
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

        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-lavender-50 text-lavender-700 border border-lavender-200">
          Family Awareness Story
        </span>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <span className="text-3xl">👨‍👩‍👧</span>
        <div>
          <h2 className="text-xl font-black text-charcoal-900 tracking-tight">
            The Tale of Ramesh & Priya
          </h2>
          <p className="text-xs text-charcoal-500">
            Why a 2-minute phone nomination saves your family 2 years of pain.
          </p>
        </div>
      </div>

      {/* Unclaimed statutory fact pill */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-3 mb-4 flex items-center gap-2.5">
        <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
        <span className="text-xs text-red-800 leading-snug">
          <strong>Did you know?</strong> Over <strong>₹1,50,000 Crore</strong> sits unclaimed in Indian banks and mutual funds simply because no nominee was named.
        </span>
      </div>

      {/* Scenario Picker */}
      <div className="grid grid-cols-2 gap-2 mb-5">
        <button
          onClick={() => handleToggle('with')}
          className={`p-3 rounded-2xl border text-center transition-all ${
            selectedScenario === 'with'
              ? 'bg-mint-50 border-mint-400 text-mint-900 shadow-sm'
              : 'bg-cream-50 border-cream-300 text-charcoal-600'
          }`}
        >
          <div className="text-2xl mb-1">🔑</div>
          <div className="text-xs font-black">Scenario 1</div>
          <div className="text-[10px] font-semibold text-mint-700">With Registered Nominee</div>
        </button>

        <button
          onClick={() => handleToggle('without')}
          className={`p-3 rounded-2xl border text-center transition-all ${
            selectedScenario === 'without'
              ? 'bg-red-50 border-red-400 text-red-900 shadow-sm'
              : 'bg-cream-50 border-cream-300 text-charcoal-600'
          }`}
        >
          <div className="text-2xl mb-1">🔒</div>
          <div className="text-xs font-black">Scenario 2</div>
          <div className="text-[10px] font-semibold text-red-700">No Nominee Registered</div>
        </button>
      </div>

      {/* Illustrated Scenario Journey */}
      {selectedScenario === 'with' ? (
        <div className="bg-mint-50/50 rounded-2xl p-4 border border-mint-200 mb-4 animate-fade-in">
          <div className="flex items-center gap-2 text-mint-800 font-bold text-sm mb-3">
            <CheckCircle2 className="w-4 h-4 text-mint-600" />
            <span>Smooth Family Custodianship (48 Hours)</span>
          </div>

          <div className="space-y-3 text-xs text-charcoal-800">
            <div className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-mint-200 text-mint-800 font-bold flex items-center justify-center text-[11px] flex-shrink-0">1</span>
              <p>Ramesh opened his account and spent 2 minutes adding Priya as his registered nominee.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-mint-200 text-mint-800 font-bold flex items-center justify-center text-[11px] flex-shrink-0">2</span>
              <p>During an unforeseen emergency, Priya presented the certificate and basic verification.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-mint-200 text-mint-800 font-bold flex items-center justify-center text-[11px] flex-shrink-0">3</span>
              <p>Within days, the funds were smoothly handed over to maintain household expenses with zero court visits!</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-red-50/50 rounded-2xl p-4 border border-red-200 mb-4 animate-fade-in">
          <div className="flex items-center gap-2 text-red-800 font-bold text-sm mb-3">
            <Clock className="w-4 h-4 text-red-600" />
            <span>The 18-Month Bureaucratic Nightmare</span>
          </div>

          <div className="space-y-3 text-xs text-charcoal-800">
            <div className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-red-200 text-red-800 font-bold flex items-center justify-center text-[11px] flex-shrink-0">1</span>
              <p>Ramesh skipped adding a nominee, thinking: <em>"I will do it next month."</em></p>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-red-200 text-red-800 font-bold flex items-center justify-center text-[11px] flex-shrink-0">2</span>
              <p>When unexpected calamity occurred, the bank account was frozen to prevent fraudulent claims.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-red-200 text-red-800 font-bold flex items-center justify-center text-[11px] flex-shrink-0">3</span>
              <p>Priya had to hire lawyers, gather succession certificates, and spend 18 months visiting courts while bills piled up.</p>
            </div>
          </div>
        </div>
      )}

      {/* The Spare Key Analogy */}
      <div className="bg-cream-100 rounded-2xl p-3.5 border border-cream-200 mb-4 flex items-start gap-3">
        <Key className="w-5 h-5 text-coral-500 flex-shrink-0 mt-0.5" />
        <div className="text-xs text-charcoal-800 leading-relaxed">
          <strong>The Spare Key Rule:</strong> A nominee is not paperwork—it's leaving a spare house key with someone you trust so they never have to break down the door.
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-cream-200">
        <VoicePlayer
          textToSpeak={
            language === 'hi'
              ? "नामांकन फॉर्म सिर्फ औपचारिकता नहीं, अपनों की सुरक्षा है। 2 मिनट में नॉमिनी जोड़कर आप अपने परिवार को वर्षों की परेशानी से बचाते हैं।"
              : language === 'mr'
              ? "वारस नोंदणी म्हणजे कुटुंबाची काळजी. २ मिनिटांत नाव नोंदवून तुम्ही कुटुंबाला कोर्टाच्या फेऱ्यांपासून वाचवता."
              : "Nomination is not paperwork; it is an act of care. A simple registered nominee ensures your savings reach your loved ones with zero stress."
          }
          hindiFallbackText="नामांकन फॉर्म सिर्फ औपचारिकता नहीं, अपनों की सुरक्षा है। 2 मिनट में नॉमिनी जोड़कर आप अपने परिवार को वर्षों की परेशानी से बचाते हैं।"
          lang={language}
          label={language === 'mr' ? 'ऐका' : language === 'hi' ? 'सुनें' : 'Listen'}
          variant="secondary"
          size="sm"
        />

        <button
          onClick={onBack}
          className="py-2 px-4 rounded-xl bg-charcoal-900 text-white font-bold text-xs"
        >
          Understood
        </button>
      </div>
    </div>
  );
};

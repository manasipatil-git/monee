import React from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Compass } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const DemoTourModal: React.FC = () => {
  const {
    isDemoTourActive,
    setIsDemoTourActive,
    demoStep,
    setDemoStep,
    setActiveTab,
    setActiveSimulatorId,
    setLanguage
  } = useApp();

  if (!isDemoTourActive) return null;

  const tourSteps = [
    {
      title: "1. Welcome & Brand Philosophy",
      desc: "monee: 'Experience money before you risk it.' Built for SANGYAN Investor Resilience Hackathon (SEBI, NSDL & IIT-BHU Track C).",
      actionLabel: "Go to Crash Simulator",
      onAction: () => {
        setActiveSimulatorId('volatility');
        setActiveTab('play');
        setDemoStep(1);
      }
    },
    {
      title: "2. Consequence Simulator (5 Rounds)",
      desc: "Experience a market crash with ₹50,000 fictional money. No textbooks—feel the rise (+10%, +15%) then the -35% crash.",
      actionLabel: "Try Regional Voice",
      onAction: () => {
        setLanguage('hi');
        setDemoStep(2);
      }
    },
    {
      title: "3. Regional Voice & Everyday Analogies",
      desc: "Switched to Hindi! Explanations use cultural everyday analogies (speed-breaker road) with 🔊 Voice synthesis.",
      actionLabel: "Explore Money Map",
      onAction: () => {
        setActiveSimulatorId(null);
        setActiveTab('map');
        setDemoStep(3);
      }
    },
    {
      title: "4. Illustrated Money Map",
      desc: "A Duolingo-style journey for Bharat. Completed milestones unlock with XP. No dry syllabus—an unfolding adventure.",
      actionLabel: "Test Jargon Buster",
      onAction: () => {
        setActiveTab('home');
        setDemoStep(4);
        setTimeout(() => {
          const el = document.getElementById('jargon-buster-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    },
    {
      title: "5. 'Make this simple' Jargon Buster",
      desc: "Paste complex regulatory jargon (Expense Ratio, NAV, SEBI nomination mandate). Translates into ELI15, Hindi, Marathi & analogies.",
      actionLabel: "Check Habits & XP",
      onAction: () => {
        setActiveTab('progress');
        setDemoStep(5);
      }
    },
    {
      title: "6. Habit-Building & Spaced Repetition",
      desc: "🔥 4-Day streak, educational XP rewards (never investment risk!), memory boost spaced repetition, and resilience badges.",
      actionLabel: "Finish Demo Tour",
      onAction: () => {
        setIsDemoTourActive(false);
        setDemoStep(0);
      }
    }
  ];

  const current = tourSteps[demoStep] || tourSteps[0];

  return (
    <div className="fixed bottom-16 left-3 right-3 sm:left-auto sm:right-6 sm:w-96 z-50 animate-bounce-soft">
      <div className="bg-charcoal-900 text-white rounded-3xl p-4 shadow-2xl border-2 border-coral-500/80 backdrop-blur-md">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5 text-coral-400 font-extrabold text-xs">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Judge Demo Tour ({demoStep + 1}/{tourSteps.length})</span>
          </div>

          <button
            onClick={() => setIsDemoTourActive(false)}
            className="p-1 text-white/50 hover:text-white rounded-full"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <h4 className="font-extrabold text-sm text-white mb-1">
          {current.title}
        </h4>

        <p className="text-xs text-cream-200 leading-relaxed mb-3">
          {current.desc}
        </p>

        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => {
              if (demoStep > 0) setDemoStep(demoStep - 1);
            }}
            disabled={demoStep === 0}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 text-xs font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={current.onAction}
            className="flex-1 py-2 px-3 rounded-xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-coral-glow transition-transform active:scale-95"
          >
            <span>{current.actionLabel}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

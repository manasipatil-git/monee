import React, { useState } from 'react';
import { Smartphone, Monitor, Wifi, Battery, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const MobileFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isFramed, setIsFramed] = useState(true);
  const { isDemoTourActive, setIsDemoTourActive } = useApp();

  return (
    <div className="min-h-screen bg-[#11100f] text-charcoal-900 flex flex-col items-center justify-center p-0 md:p-6 transition-all selection:bg-coral-100 selection:text-coral-600">
      {/* Desktop Top Utilities Bar (Only on md+ screens) */}
      <div className="hidden md:flex items-center justify-between w-full max-w-sm mb-3 px-2 text-cream-300">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-coral-500 text-white font-black text-xs flex items-center justify-center">
            m
          </div>
          <span className="text-xs font-bold text-white">monee</span>
          <span className="text-[10px] text-cream-400 bg-white/10 px-2 py-0.5 rounded-full">
            Track C • IIT (BHU)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsDemoTourActive(!isDemoTourActive)}
            className="flex items-center gap-1 text-[11px] font-bold text-coral-400 bg-coral-500/10 hover:bg-coral-500/20 px-2.5 py-1 rounded-full border border-coral-500/30 transition-all"
          >
            <Sparkles className="w-3 h-3" />
            <span>Judge Demo</span>
          </button>

          <button
            onClick={() => setIsFramed(!isFramed)}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-cream-300 hover:text-white transition-all text-xs flex items-center gap-1"
            title={isFramed ? 'Switch to fluid canvas' : 'Switch to phone frame'}
          >
            {isFramed ? <Monitor className="w-3.5 h-3.5" /> : <Smartphone className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Container: Phone Frame on Desktop / Fluid on Mobile */}
      <div
        className={`w-full transition-all duration-300 relative flex flex-col ${
          isFramed
            ? 'max-w-[420px] h-[100dvh] md:h-[860px] md:max-h-[92vh] md:rounded-[44px] md:border-[10px] md:border-[#2a2725] md:shadow-2xl overflow-hidden'
            : 'max-w-2xl min-h-screen md:rounded-3xl md:my-6 md:border border-cream-300 overflow-hidden'
        } bg-cream-50 shadow-soft-lg`}
      >
        {/* Simulated Phone Top Notch & Status Bar (visible inside phone frame) */}
        <div className="w-full bg-cream-100/90 backdrop-blur-sm px-6 pt-3 pb-1 flex items-center justify-between text-[11px] font-bold text-charcoal-800 z-50 select-none">
          <span>9:41</span>
          
          {/* Dynamic Island Pill */}
          <div className="w-20 h-4 bg-charcoal-900 rounded-full flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-charcoal-700 ml-auto mr-2" />
          </div>

          <div className="flex items-center gap-1.5">
            <Wifi className="w-3 h-3 text-charcoal-700" />
            <Battery className="w-3.5 h-3.5 text-charcoal-700" />
          </div>
        </div>

        {/* Scrollable Core Content Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col justify-between relative no-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

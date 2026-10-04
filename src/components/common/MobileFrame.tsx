import React, { useState } from 'react';
import { Smartphone, Monitor, Wifi, Battery, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const MobileFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isFramed, setIsFramed] = useState(true);
  const { isDemoTourActive, setIsDemoTourActive } = useApp();

  const handleResetDemo = () => {
    localStorage.clear();
    window.location.href = window.location.pathname;
  };

  return (
    <div className="min-h-screen bg-[#121312] text-[#1A1918] flex flex-col items-center justify-center p-0 md:p-6 transition-all selection:bg-[#DCECE3] selection:text-[#16402E]">
      {/* Desktop Top Utilities Bar (Only on md+ screens) */}
      <div className="hidden md:flex items-center justify-between w-full max-w-sm mb-3 px-2 text-[#DED1C4]">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-[#246B4F] text-white font-black text-xs flex items-center justify-center shadow-xs">
            m
          </div>
          <span className="text-xs font-bold text-[#FAF8F5]">monee</span>
          <span className="text-[10px] text-[#DED1C4] bg-white/10 px-2 py-0.5 rounded-full font-medium">
            Track C • IIT (BHU)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleResetDemo}
            className="flex items-center gap-1 text-[11px] font-bold text-[#B48106] bg-[#FEF9E7] hover:bg-[#FDF1C2] px-2.5 py-1 rounded-full border border-[#FDF1C2] transition-all cursor-pointer"
            title="Reset entire app to 0:00 for a fresh screen recording take"
          >
            <span>↺ Reset Demo</span>
          </button>

          <button
            onClick={() => setIsDemoTourActive(!isDemoTourActive)}
            className="flex items-center gap-1 text-[11px] font-bold text-[#7C6DB8] bg-[#7C6DB8]/15 hover:bg-[#7C6DB8]/25 px-2.5 py-1 rounded-full border border-[#7C6DB8]/30 transition-all cursor-pointer"
          >
            <Sparkles className="w-3 h-3" />
            <span>Judge Demo</span>
          </button>

          <button
            onClick={() => setIsFramed(!isFramed)}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#DED1C4] hover:text-white transition-all text-xs flex items-center gap-1 cursor-pointer"
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
            ? 'max-w-[420px] h-[100dvh] md:h-[860px] md:max-h-[92vh] md:rounded-[44px] md:border-[10px] md:border-[#221E1B] md:shadow-2xl overflow-hidden'
            : 'max-w-2xl min-h-screen md:rounded-3xl md:my-6 md:border border-[#EAE4DC] overflow-hidden'
        } bg-[#FAF8F5] shadow-soft-lg`}
      >
        {/* Simulated Phone Top Notch & Status Bar (visible inside phone frame) */}
        <div className="w-full bg-[#FAF8F5]/95 backdrop-blur-sm px-6 pt-3 pb-1 flex items-center justify-between text-[11px] font-bold text-[#1A1918] z-50 select-none border-b border-[#EAE4DC]/40">
          <span>9:41</span>
          
          {/* Dynamic Island Pill with Demo Reset */}
          <button
            onClick={handleResetDemo}
            title="Click to reset demo to 0:00"
            className="w-20 h-4 bg-[#1A1918] hover:bg-[#2A2724] rounded-full flex items-center justify-center cursor-pointer transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#34302D] ml-auto mr-2" />
          </button>

          <div className="flex items-center gap-1.5 text-[#6B6259]">
            <Wifi className="w-3 h-3 stroke-[2.5]" />
            <Battery className="w-3.5 h-3.5 stroke-[2.5]" />
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

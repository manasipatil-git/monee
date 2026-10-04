import React from 'react';
import { Award, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const BadgeUnlockModal: React.FC = () => {
  const { newBadgeUnlocked, clearNewBadge } = useApp();

  if (!newBadgeUnlocked) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-cream-50 border-2 border-coral-200 rounded-3xl p-6 max-w-xs w-full text-center shadow-soft-lg transform transition-all animate-bounce-soft relative">
        <button
          onClick={clearNewBadge}
          className="absolute top-3 right-3 text-charcoal-400 hover:text-charcoal-700 p-1 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-coral-100 flex items-center justify-center text-3xl shadow-inner border border-coral-200">
          {newBadgeUnlocked.icon}
        </div>

        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-coral-50 border border-coral-200 text-coral-600 text-[11px] font-bold uppercase tracking-wider mb-2">
          <Award className="w-3 h-3" />
          <span>Badge Unlocked</span>
        </div>

        <h3 className="text-xl font-extrabold text-charcoal-900 mb-1">
          {newBadgeUnlocked.title}
        </h3>

        <p className="text-xs text-charcoal-600 mb-5 leading-relaxed">
          {newBadgeUnlocked.description}
        </p>

        <button
          onClick={clearNewBadge}
          className="w-full py-2.5 px-4 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-sm shadow-coral-glow transition-transform active:scale-95"
        >
          Keep Learning!
        </button>
      </div>
    </div>
  );
};

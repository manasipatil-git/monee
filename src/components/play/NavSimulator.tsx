import React, { useState } from 'react';
import { ArrowLeft, Plus, Minus, Lightbulb, PieChart } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { VoicePlayer } from '../common/VoicePlayer';

export const NavSimulator: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { language, addXp, markConceptCompleted } = useApp();
  const [apples, setApples] = useState(4); // ₹30 each
  const [bananas, setBananas] = useState(6); // ₹10 each
  const [oranges, setOranges] = useState(4); // ₹20 each
  const [units, setUnits] = useState(10); // slices/coupons

  const totalBasketValue = apples * 30 + bananas * 10 + oranges * 20;
  const navPerUnit = (totalBasketValue / units).toFixed(2);

  const handleFruitChange = (fruit: 'apple' | 'banana' | 'orange', delta: number) => {
    if (fruit === 'apple') setApples(Math.max(1, apples + delta));
    if (fruit === 'banana') setBananas(Math.max(1, bananas + delta));
    if (fruit === 'orange') setOranges(Math.max(1, oranges + delta));
    addXp(5, 'Tested NAV Basket Change');
    markConceptCompleted('nav');
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

        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          The Fruit Basket Analogy
        </span>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <span className="text-3xl">🧾</span>
        <div>
          <h2 className="text-xl font-black text-charcoal-900 tracking-tight">
            Demystifying NAV
          </h2>
          <p className="text-xs text-charcoal-500">
            NAV is just the price tag of one single slice of the shared basket.
          </p>
        </div>
      </div>

      {/* Fruit Basket Controls */}
      <div className="bg-cream-50 rounded-2xl p-4 border border-cream-200 mb-4">
        <div className="text-xs font-bold text-charcoal-800 mb-3">
          Inside the Shared Basket:
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            { name: 'Apples', icon: '🍎', price: '₹30', count: apples, key: 'apple' as const },
            { name: 'Bananas', icon: '🍌', price: '₹10', count: bananas, key: 'banana' as const },
            { name: 'Oranges', icon: '🍊', price: '₹20', count: oranges, key: 'orange' as const },
          ].map((f) => (
            <div key={f.key} className="p-2.5 bg-white rounded-xl border border-cream-200 text-center">
              <span className="text-2xl">{f.icon}</span>
              <div className="text-xs font-bold text-charcoal-900 mt-0.5">{f.count}</div>
              <div className="text-[10px] text-charcoal-500">{f.price}/ea</div>
              <div className="flex items-center justify-center gap-1 mt-1.5">
                <button
                  onClick={() => handleFruitChange(f.key, -1)}
                  className="w-5 h-5 rounded bg-cream-100 hover:bg-cream-200 text-charcoal-700 text-xs font-bold flex items-center justify-center"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <button
                  onClick={() => handleFruitChange(f.key, 1)}
                  className="w-5 h-5 rounded bg-cream-100 hover:bg-cream-200 text-charcoal-700 text-xs font-bold flex items-center justify-center"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Total Basket vs Units Divided */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-3 bg-lavender-50 rounded-2xl border border-lavender-200 text-center">
          <span className="text-[10px] font-bold text-lavender-700 uppercase tracking-wider block">
            Total Basket Value
          </span>
          <div className="text-2xl font-black text-charcoal-900 mt-1">
            ₹{totalBasketValue}
          </div>
        </div>

        <div className="p-3 bg-mint-50 rounded-2xl border border-mint-200 text-center">
          <span className="text-[10px] font-bold text-mint-700 uppercase tracking-wider block">
            Number of Slices
          </span>
          <div className="flex items-center justify-center gap-2 mt-1">
            <button
              onClick={() => setUnits(Math.max(5, units - 5))}
              className="w-5 h-5 rounded bg-white text-xs font-bold border"
            >
              -
            </button>
            <span className="text-xl font-black text-charcoal-900">{units}</span>
            <button
              onClick={() => setUnits(Math.min(50, units + 5))}
              className="w-5 h-5 rounded bg-white text-xs font-bold border"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* NAV Output Display */}
      <div className="bg-charcoal-900 text-white rounded-2xl p-4 text-center mb-4 shadow-soft">
        <span className="text-[10px] uppercase font-bold text-coral-400 tracking-wider">
          Calculated NAV (Price per Slice)
        </span>
        <div className="text-3xl font-black text-white mt-1">
          ₹{navPerUnit}
        </div>
        <p className="text-[11px] text-cream-300 mt-1">
          ₹{totalBasketValue} Basket ÷ {units} Units = ₹{navPerUnit} per unit
        </p>
      </div>

      {/* The Big Myth Buster */}
      <div className="p-3 bg-coral-50 rounded-2xl border border-coral-200 flex items-start gap-2.5 mb-4">
        <Lightbulb className="w-5 h-5 text-coral-600 flex-shrink-0 mt-0.5" />
        <div className="text-xs text-charcoal-800 leading-relaxed">
          <strong>The Common Trap:</strong> Many beginners think a ₹10 NAV is a "cheap bargain" compared to ₹100. That's false! It's just cutting the same pizza into 10 slices instead of 5. Your returns depend on the pizza ingredients, not slice size!
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-cream-200">
        <VoicePlayer
          textToSpeak={
            language === 'hi'
              ? "NAV का मतलब है टोकरी की कुल कीमत को कुल यूनिट्स से भाग देना। कम NAV का मतलब सस्ता और ज्यादा का मतलब महंगा नहीं होता।"
              : language === 'mr'
              ? "NAV म्हणजे टोपलीच्या एकूण मूल्याला भागांनी भागणे. कमी NAV म्हणजे स्वस्त असा गैरसमज करून घेऊ नका."
              : "NAV is simply the value per slice of a pooled basket. It is not a measure of whether a fund is cheap or expensive."
          }
          variant="secondary"
          size="sm"
        />

        <button
          onClick={onBack}
          className="py-2 px-4 rounded-xl bg-charcoal-900 text-white font-bold text-xs"
        >
          Done
        </button>
      </div>
    </div>
  );
};

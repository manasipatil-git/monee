import React, { useState } from 'react';
import { Lock, Check, Sparkles, X, PlayCircle, ArrowRight, Compass } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { conceptsData } from '../../data/concepts';
import { VoicePlayer } from '../common/VoicePlayer';
import { MapNode } from '../../types';

export const MoneyMap: React.FC = () => {
  const {
    completedConcepts,
    setActiveSimulatorId,
    setActiveTab,
    language,
    addXp
  } = useApp();

  const [selectedNode, setSelectedNode] = useState<{
    id: string;
    conceptId: string;
    title: string;
    subtitle: string;
    icon: string;
    status: 'completed' | 'current' | 'locked';
  } | null>(null);

  // Nodes for the winding map path
  const mapNodes: Array<{
    id: string;
    conceptId: string;
    title: string;
    icon: string;
    offset: 'left' | 'center' | 'right';
  }> = [
    { id: 'node-start', conceptId: 'volatility', title: 'Start Journey', icon: '🚩', offset: 'center' },
    { id: 'node-saving', conceptId: 'inflation', title: 'Saving & Inflation', icon: '🎈', offset: 'left' },
    { id: 'node-compounding', conceptId: 'compounding', title: 'Compounding', icon: '🌱', offset: 'right' },
    { id: 'node-diversification', conceptId: 'diversification', title: 'Diversification', icon: '🧺', offset: 'center' },
    { id: 'node-volatility', conceptId: 'volatility', title: 'Volatility', icon: '🎢', offset: 'left' },
    { id: 'node-fees', conceptId: 'fees', title: 'Fees & Costs', icon: '💸', offset: 'right' },
    { id: 'node-nav', conceptId: 'nav', title: 'NAV Slices', icon: '🧾', offset: 'center' },
    { id: 'node-nomination', conceptId: 'nomination', title: 'Nomination', icon: '👨‍👩‍👧', offset: 'left' },
    { id: 'node-sense', conceptId: 'risk', title: 'Money Sense', icon: '🛡️', offset: 'center' },
  ];

  const getNodeStatus = (conceptId: string, index: number): 'completed' | 'current' | 'locked' => {
    if (index === 0) return 'completed';
    if (completedConcepts.includes(conceptId)) return 'completed';
    // If previous was completed, this is current
    const prevNode = mapNodes[index - 1];
    if (index === 1 || completedConcepts.includes(prevNode.conceptId)) {
      return 'current';
    }
    return 'locked';
  };

  const handleNodeClick = (node: any, status: 'completed' | 'current' | 'locked') => {
    setSelectedNode({
      id: node.id,
      conceptId: node.conceptId,
      title: node.title,
      subtitle: status === 'completed' ? 'Mastered' : status === 'current' ? 'Ready to Learn' : 'Locked',
      icon: node.icon,
      status
    });
  };

  const activeConceptData = selectedNode
    ? conceptsData.find(c => c.id === selectedNode.conceptId)
    : null;

  return (
    <div className="space-y-4 pb-12 animate-fade-in relative">
      {/* Header */}
      <div className="text-center pt-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lavender-100 text-lavender-700 text-xs font-bold mb-1 border border-lavender-200">
          <Compass className="w-3.5 h-3.5" />
          <span>Illustrated Learning Journey</span>
        </div>
        <h2 className="text-2xl font-black text-charcoal-900 tracking-tight">
          Your Money Map
        </h2>
        <p className="text-xs text-charcoal-500 max-w-xs mx-auto">
          Travel through the financial landscape. Unlock each milestone by experiencing it.
        </p>
      </div>

      {/* Visual Winding Path Container */}
      <div className="relative py-6 px-4 max-w-xs mx-auto">
        {/* Animated Connecting Winding Line */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 280 920"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 140 40 
               C 50 100, 50 140, 70 170 
               C 100 210, 220 220, 210 280 
               C 200 330, 140 360, 140 400
               C 140 440, 60 480, 70 520
               C 80 560, 220 600, 210 640
               C 200 680, 140 720, 140 760
               C 140 800, 60 830, 70 860
               C 80 890, 140 900, 140 920"
            stroke="#E7E0D6"
            strokeWidth="8"
            strokeDasharray="10 8"
            strokeLinecap="round"
          />
        </svg>

        {/* Nodes */}
        <div className="relative z-10 space-y-12">
          {mapNodes.map((node, idx) => {
            const status = getNodeStatus(node.conceptId, idx);
            const isCompleted = status === 'completed';
            const isCurrent = status === 'current';
            const isLocked = status === 'locked';

            const alignmentClass =
              node.offset === 'left'
                ? 'justify-start pl-4'
                : node.offset === 'right'
                ? 'justify-end pr-4'
                : 'justify-center';

            return (
              <div key={node.id} className={`flex items-center ${alignmentClass}`}>
                <button
                  onClick={() => handleNodeClick(node, status)}
                  className={`group relative flex flex-col items-center transition-all duration-300 transform active:scale-90 ${
                    isCurrent ? 'scale-110' : ''
                  }`}
                >
                  {/* Outer glow ring for current node */}
                  {isCurrent && (
                    <div className="absolute -inset-2 bg-coral-500/25 rounded-full blur-md animate-pulse-subtle" />
                  )}

                  {/* Node Button Circle */}
                  <div
                    className={`relative w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-soft transition-all border-4 ${
                      isCompleted
                        ? 'bg-cream-50 border-mint-500 text-charcoal-900 shadow-mint-100'
                        : isCurrent
                        ? 'bg-coral-500 border-white text-white shadow-coral-glow animate-bounce-soft'
                        : 'bg-cream-200 border-cream-300 text-charcoal-400 opacity-70'
                    }`}
                  >
                    {isLocked ? (
                      <Lock className="w-5 h-5 text-charcoal-400" />
                    ) : (
                      <span>{node.icon}</span>
                    )}

                    {/* Checkmark badge */}
                    {isCompleted && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-mint-500 text-white flex items-center justify-center border-2 border-white shadow-xs">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </div>

                  {/* Node Label Card */}
                  <div className="mt-1.5 px-2.5 py-0.5 rounded-full bg-white/90 border border-cream-200 text-center shadow-xs">
                    <span className="text-[11px] font-extrabold text-charcoal-800 tracking-tight whitespace-nowrap">
                      {node.title}
                    </span>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Node Detail Bottom Modal */}
      {selectedNode && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 bg-charcoal-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-cream-50 border border-cream-300 rounded-3xl p-5 max-w-sm w-full shadow-soft-lg transform transition-all animate-fade-in relative">
            <button
              onClick={() => setSelectedNode(null)}
              className="absolute top-4 right-4 p-1 rounded-full text-charcoal-400 hover:text-charcoal-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-14 h-14 rounded-2xl bg-white border border-cream-200 flex items-center justify-center text-3xl shadow-soft">
                {selectedNode.icon}
              </div>
              <div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    selectedNode.status === 'completed'
                      ? 'bg-mint-100 text-mint-700'
                      : selectedNode.status === 'current'
                      ? 'bg-coral-100 text-coral-700'
                      : 'bg-cream-200 text-charcoal-500'
                  }`}
                >
                  {selectedNode.subtitle}
                </span>
                <h3 className="text-lg font-black text-charcoal-900 tracking-tight mt-0.5">
                  {selectedNode.title}
                </h3>
              </div>
            </div>

            {activeConceptData && (
              <div className="space-y-3 mb-5">
                <div className="p-3 bg-white rounded-2xl border border-cream-200 text-xs">
                  <strong className="text-charcoal-900 block mb-1">What it means:</strong>
                  <p className="text-charcoal-600 leading-relaxed">
                    {activeConceptData.simpleExplanation[language]}
                  </p>
                </div>

                <div className="p-3 bg-lavender-50/70 rounded-2xl border border-lavender-200 text-xs">
                  <strong className="text-lavender-800 block mb-1">Why it matters:</strong>
                  <p className="text-charcoal-700 leading-relaxed">
                    {activeConceptData.whyItMatters[language]}
                  </p>
                </div>

                <VoicePlayer
                  textToSpeak={activeConceptData.audioNarration[language]}
                  size="sm"
                  variant="secondary"
                />
              </div>
            )}

            <div className="flex gap-2">
              <button
                onClick={() => {
                  setSelectedNode(null);
                  setActiveSimulatorId(selectedNode.conceptId);
                  setActiveTab('play');
                }}
                className="flex-1 py-3 px-4 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-xs sm:text-sm shadow-coral-glow flex items-center justify-center gap-1.5 transition-transform active:scale-95"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Jump In & Play</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

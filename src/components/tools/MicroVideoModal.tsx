import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { conceptsData } from '../../data/concepts';
import { speechService } from '../../utils/speech';

export const MicroVideoModal: React.FC = () => {
  const { activeMicroVideoConceptId, setActiveMicroVideoConceptId, language, addXp } = useApp();
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const concept = conceptsData.find((c) => c.id === activeMicroVideoConceptId);

  useEffect(() => {
    setCurrentSceneIndex(0);
    setIsPlaying(true);
  }, [activeMicroVideoConceptId]);

  useEffect(() => {
    if (!concept || !isPlaying) return;

    const timer = setTimeout(() => {
      if (currentSceneIndex < concept.microVideo.scenes.length - 1) {
        setCurrentSceneIndex((prev) => prev + 1);
      } else {
        setIsPlaying(false);
        addXp(15, 'Watched Micro-Video');
      }
    }, 4500);

    return () => clearTimeout(timer);
  }, [currentSceneIndex, isPlaying, concept]);

  // Voice narration for active scene
  useEffect(() => {
    if (!concept || isMuted) {
      speechService.stop();
      return;
    }

    const scene = concept.microVideo.scenes[currentSceneIndex];
    if (scene) {
      const textToSpeak = `${scene.heading[language]}. ${scene.caption[language]}`;
      speechService.speak(textToSpeak, language);
    }

    return () => {
      speechService.stop();
    };
  }, [currentSceneIndex, concept, language, isMuted]);

  if (!concept) return null;

  const scenes = concept.microVideo.scenes;
  const currentScene = scenes[currentSceneIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-charcoal-900/80 backdrop-blur-md animate-fade-in">
      <div className="bg-charcoal-900 text-white rounded-3xl w-full max-w-sm overflow-hidden shadow-soft-lg border border-charcoal-700 flex flex-col relative aspect-[9/16] max-h-[640px]">
        {/* Story Progress Bars */}
        <div className="absolute top-3 left-3 right-3 z-20 flex gap-1.5">
          {scenes.map((_, idx) => (
            <div
              key={idx}
              className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden"
            >
              <div
                className={`h-full bg-white transition-all duration-300 ${
                  idx < currentSceneIndex
                    ? 'w-full'
                    : idx === currentSceneIndex && isPlaying
                    ? 'w-full transition-all duration-[4500ms] ease-linear'
                    : 'w-0'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Top Header controls */}
        <div className="absolute top-7 left-4 right-4 z-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">{concept.icon}</span>
            <div>
              <span className="text-xs font-bold tracking-wide uppercase text-white/90">
                {concept.microVideo.title[language]}
              </span>
              <span className="block text-[10px] text-white/60">Watch in 60s</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-1.5 rounded-full bg-black/40 text-white/80 hover:text-white"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => {
                speechService.stop();
                setActiveMicroVideoConceptId(null);
              }}
              className="p-1.5 rounded-full bg-black/40 text-white/80 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Canvas Stage */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-gradient-to-b from-charcoal-900 via-charcoal-800 to-charcoal-900">
          {/* Animated Background Rings */}
          <div className="absolute w-64 h-64 rounded-full bg-coral-500/10 blur-3xl animate-pulse-subtle pointer-events-none" />

          {/* Central Animated Illustration / Value Badge */}
          <div className="relative z-10 mb-6">
            <div className="w-28 h-28 rounded-3xl bg-charcoal-800 border-2 border-white/10 flex items-center justify-center shadow-soft-lg transform hover:scale-105 transition-transform">
              <span className="text-5xl animate-bounce-soft">{concept.icon}</span>
            </div>

            {currentScene.valueDisplay && (
              <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-coral-500 text-white font-extrabold text-sm shadow-coral-glow tracking-wide animate-fade-in">
                {currentScene.valueDisplay}
              </div>
            )}
          </div>

          {/* Scene Text */}
          <div className="relative z-10 max-w-xs animate-fade-in">
            <h3 className="text-xl font-black tracking-tight text-white mb-2">
              {currentScene.heading[language]}
            </h3>
            <p className="text-xs sm:text-sm text-cream-200 leading-relaxed">
              {currentScene.caption[language]}
            </p>
          </div>
        </div>

        {/* Bottom Playback Bar */}
        <div className="p-4 bg-charcoal-950/80 backdrop-blur-sm border-t border-charcoal-800 flex items-center justify-between z-20">
          <button
            onClick={() => {
              setCurrentSceneIndex(0);
              setIsPlaying(true);
            }}
            className="p-2 text-white/70 hover:text-white flex items-center gap-1 text-xs"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Restart</span>
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full bg-coral-500 hover:bg-coral-600 text-white flex items-center justify-center shadow-coral-glow"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>

          <div className="flex items-center gap-1 text-xs font-semibold text-white/50">
            <Sparkles className="w-3.5 h-3.5 text-butter-400" />
            <span>+15 XP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

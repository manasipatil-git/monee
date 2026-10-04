import React, { useState, useEffect, useReducer } from 'react';
import { Volume2, Square, Info, BookOpen } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { speechService } from '../../utils/speech';
import { translations } from '../../data/translations';
import { Language } from '../../types';

interface VoicePlayerProps {
  textToSpeak: string;
  hindiFallbackText?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost';
  label?: string;
  className?: string;
  lang?: Language;
}

export const VoicePlayer: React.FC<VoicePlayerProps> = ({
  textToSpeak,
  hindiFallbackText,
  size = 'md',
  variant = 'secondary',
  label,
  className = '',
  lang
}) => {
  const { language } = useApp();
  const currentLang = lang || language;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayingFallback, setIsPlayingFallback] = useState(false);
  const [voiceNotice, setVoiceNotice] = useState<string | null>(null);
  const [showTextModal, setShowTextModal] = useState(false);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const t = translations[currentLang];

  useEffect(() => {
    const unsubscribe = speechService.subscribe(() => {
      forceUpdate();
    });
    return () => {
      unsubscribe();
      speechService.stop();
    };
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setVoiceNotice(null);

    if (isPlaying || isPlayingFallback) {
      speechService.stop();
      setIsPlaying(false);
      setIsPlayingFallback(false);
      return;
    }

    const status = speechService.checkVoiceStatus(currentLang);

    // Marathi check: if native Marathi voice is not installed on this OS/browser
    if (currentLang === 'mr' && !status.hasNativeVoice) {
      setVoiceNotice('या डिव्हाइसवर मराठी ऑडिओ उपलब्ध नाही. खाली वाचा.');
      setShowTextModal(true);
      return;
    }

    // Hindi check: if native Hindi voice is not installed on this OS/browser
    if (currentLang === 'hi' && !status.hasNativeVoice) {
      setVoiceNotice('इस डिवाइस पर हिंदी आवाज़ उपलब्ध नहीं है। नीचे पूरा विवरण पढ़ें।');
      setShowTextModal(true);
      return;
    }

    setIsPlaying(true);
    speechService.speak(
      textToSpeak,
      currentLang,
      {
        onStart: () => setIsPlaying(true),
        onEnd: () => setIsPlaying(false),
        onError: (reason) => {
          setIsPlaying(false);
          if (reason === 'no-marathi-voice') {
            setVoiceNotice('या डिव्हाइसवर मराठी ऑडिओ उपलब्ध नाही. खाली वाचा.');
            setShowTextModal(true);
          } else if (reason === 'no-hindi-voice') {
            setVoiceNotice('इस डिवाइस पर हिंदी आवाज़ उपलब्ध नहीं है। नीचे पूरा विवरण पढ़ें।');
            setShowTextModal(true);
          } else {
            setVoiceNotice(currentLang === 'mr' ? 'मजकूर खाली वाचा' : currentLang === 'hi' ? 'विवरण नीचे पढ़ें' : 'Read text below');
            setShowTextModal(true);
          }
        }
      }
    );
  };

  const handlePlayHindiFallback = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hindiFallbackText) return;

    if (isPlayingFallback) {
      speechService.stop();
      setIsPlayingFallback(false);
      return;
    }

    const hiStatus = speechService.checkVoiceStatus('hi');
    if (!hiStatus.hasNativeVoice) {
      setVoiceNotice('हिंदी ऑडिओ देखील उपलब्ध नाही. खाली मजकूर वाचा.');
      setShowTextModal(true);
      return;
    }

    setIsPlaying(false);
    setIsPlayingFallback(true);
    speechService.speak(
      hindiFallbackText,
      'hi',
      {
        onStart: () => setIsPlayingFallback(true),
        onEnd: () => {
          setIsPlayingFallback(false);
        },
        onError: () => {
          setIsPlayingFallback(false);
          setVoiceNotice('ऑडिओ सुरू होऊ शकला नाही. मजकूर वाचा.');
        }
      }
    );
  };

  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs gap-1.5',
    md: 'px-3.5 py-1.5 text-xs sm:text-sm gap-2',
    lg: 'px-5 py-2.5 text-sm sm:text-base gap-2.5 font-medium'
  };

  const variantClasses = {
    primary: 'bg-coral-500 hover:bg-coral-600 text-white shadow-soft',
    secondary: 'bg-lavender-100 hover:bg-lavender-200 text-charcoal-800 border border-lavender-200',
    ghost: 'bg-white/80 hover:bg-white text-charcoal-700 border border-cream-300'
  };

  const activePlaying = isPlaying || isPlayingFallback;

  return (
    <div className="relative inline-flex flex-col items-start">
      <div className="inline-flex items-center gap-1.5">
        <button
          onClick={handleToggle}
          className={`inline-flex items-center justify-center rounded-full transition-all active:scale-95 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
          aria-label="Listen to voice explanation"
          title={`Listen in ${currentLang === 'mr' ? 'Marathi' : currentLang === 'hi' ? 'Hindi' : 'English'}`}
        >
          {activePlaying ? (
            <>
              <Square className="w-3.5 h-3.5 fill-current text-coral-600 animate-pulse" />
              <span className="font-semibold text-coral-600">{t.stopAudio || 'Stop'}</span>
              <span className="flex items-center gap-0.5 ml-1">
                <span className="w-1 h-3 bg-coral-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1 h-4 bg-coral-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1 h-2.5 bg-coral-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-charcoal-800" />
              <span>{label || t.listen || 'Listen'}</span>
            </>
          )}
        </button>

        {/* Read text fallback button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowTextModal(!showTextModal);
          }}
          className="p-1.5 rounded-full hover:bg-cream-200 text-charcoal-400 hover:text-charcoal-700 transition-colors"
          title="Read text"
        >
          <BookOpen className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Voice notice pill with optional Hindi fallback action for Marathi users */}
      {voiceNotice && (
        <div className="mt-1 text-[11px] text-charcoal-700 bg-butter-100 border border-butter-300 px-2.5 py-1.5 rounded-xl flex flex-col gap-1 animate-fade-in max-w-xs">
          <div className="flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-butter-700 flex-shrink-0" />
            <span>{voiceNotice}</span>
          </div>

          {currentLang === 'mr' && hindiFallbackText && (
            <button
              onClick={handlePlayHindiFallback}
              className="mt-0.5 inline-flex items-center gap-1 text-[11px] font-bold text-coral-700 hover:text-coral-800 underline self-start cursor-pointer"
            >
              <Volume2 className="w-3 h-3" />
              <span>{isPlayingFallback ? 'हिंदी ऑडिओ थांबवा' : 'ऐच्छिक: हिंदीत ऐका'}</span>
            </button>
          )}
        </div>
      )}

      {/* Inline Reading Modal / Drawer */}
      {showTextModal && (
        <div className="mt-2 p-3 bg-white border border-cream-300 rounded-2xl shadow-soft text-xs text-charcoal-800 leading-relaxed max-w-xs animate-fade-in">
          <div className="font-bold text-coral-600 mb-1 text-[11px] uppercase tracking-wider flex items-center justify-between">
            <span>{currentLang === 'mr' ? 'मजकूर वाचा' : currentLang === 'hi' ? 'विवरण पढ़ें' : 'Read Along'}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTextModal(false);
              }}
              className="text-charcoal-400 hover:text-charcoal-700 text-xs font-bold"
            >
              ✕
            </button>
          </div>
          <p className="font-medium text-charcoal-800">{textToSpeak}</p>
        </div>
      )}
    </div>
  );
};

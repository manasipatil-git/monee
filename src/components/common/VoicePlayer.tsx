import React, { useState, useEffect } from 'react';
import { Volume2, Square, Info, BookOpen } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { speechService, VoiceStatus } from '../../utils/speech';
import { translations } from '../../data/translations';

interface VoicePlayerProps {
  textToSpeak: string;
  hindiFallbackText?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost';
  label?: string;
  className?: string;
}

export const VoicePlayer: React.FC<VoicePlayerProps> = ({
  textToSpeak,
  hindiFallbackText,
  size = 'md',
  variant = 'secondary',
  label,
  className = ''
}) => {
  const { language } = useApp();
  const [isPlaying, setIsPlaying] = useState(false);
  const [voiceNotice, setVoiceNotice] = useState<string | null>(null);
  const [showTextModal, setShowTextModal] = useState(false);
  const t = translations[language];

  useEffect(() => {
    return () => {
      speechService.stop();
    };
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setVoiceNotice(null);

    if (isPlaying) {
      speechService.stop();
      setIsPlaying(false);
      return;
    }

    const status = speechService.checkVoiceStatus(language);

    if (language === 'mr' && !status.hasNativeVoice) {
      // Prompt user with choice rather than silent failure
      if (status.fallbackAvailable) {
        setVoiceNotice('मराठी व्हॉइस या फोनवर नाही. हिंदी आवाज सुरू करत आहोत.');
        setIsPlaying(true);
        speechService.speak(
          hindiFallbackText || textToSpeak,
          'hi',
          {
            useFallbackIfMissing: true,
            onStart: () => setIsPlaying(true),
            onEnd: () => {
              setIsPlaying(false);
              setVoiceNotice(null);
            },
            onError: () => {
              setIsPlaying(false);
              setVoiceNotice('आवाज सुरू होऊ शकला नाही. मजकूर वाचा.');
            }
          }
        );
      } else {
        setVoiceNotice('या डिव्हाइसवर आवाज उपलब्ध नाही. खाली वाचा.');
        setShowTextModal(true);
      }
      return;
    }

    setIsPlaying(true);
    speechService.speak(
      textToSpeak,
      language,
      {
        onStart: () => setIsPlaying(true),
        onEnd: () => setIsPlaying(false),
        onError: () => {
          setIsPlaying(false);
          setVoiceNotice(language === 'mr' ? 'मजकूर वाचा' : 'Read text instead');
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

  return (
    <div className="relative inline-flex flex-col items-start">
      <div className="inline-flex items-center gap-1.5">
        <button
          onClick={handleToggle}
          className={`inline-flex items-center justify-center rounded-full transition-all active:scale-95 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
          aria-label="Listen to voice explanation"
          title="Listen in your selected language"
        >
          {isPlaying ? (
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

      {/* Voice notice / Fallback pill */}
      {voiceNotice && (
        <div className="mt-1 text-[11px] text-charcoal-700 bg-butter-100 border border-butter-300 px-2 py-0.5 rounded-lg flex items-center gap-1 animate-fade-in">
          <Info className="w-3 h-3 text-butter-700 flex-shrink-0" />
          <span>{voiceNotice}</span>
        </div>
      )}

      {/* Inline Reading Modal / Drawer when speech is unsupported */}
      {showTextModal && (
        <div className="mt-2 p-3 bg-white border border-cream-300 rounded-2xl shadow-soft text-xs text-charcoal-800 leading-relaxed max-w-xs animate-fade-in">
          <div className="font-bold text-coral-600 mb-1 text-[11px] uppercase tracking-wider">
            {language === 'mr' ? 'वाचा' : language === 'hi' ? 'पढ़ें' : 'Read Along'}
          </div>
          <p>{textToSpeak}</p>
        </div>
      )}
    </div>
  );
};

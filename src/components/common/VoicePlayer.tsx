import React, { useState, useEffect } from 'react';
import { Volume2, Square } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { speechService } from '../../utils/speech';
import { translations } from '../../data/translations';

interface VoicePlayerProps {
  textToSpeak: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost';
  label?: string;
  className?: string;
}

export const VoicePlayer: React.FC<VoicePlayerProps> = ({
  textToSpeak,
  size = 'md',
  variant = 'secondary',
  label,
  className = ''
}) => {
  const { language } = useApp();
  const [isPlaying, setIsPlaying] = useState(false);
  const t = translations[language];

  useEffect(() => {
    return () => {
      speechService.stop();
    };
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      speechService.stop();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      speechService.speak(
        textToSpeak,
        language,
        () => setIsPlaying(true),
        () => setIsPlaying(false),
        () => setIsPlaying(false)
      );
    }
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
  );
};

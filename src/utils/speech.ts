import { Language } from '../types';

export interface VoiceStatus {
  hasNativeVoice: boolean;
  voiceName: string | null;
  language: Language;
}

const getVoiceScore = (v: SpeechSynthesisVoice): number => {
  const name = (v.name || '').toLowerCase();
  // Microsoft Natural / Online voices sound human and warm
  if (name.includes('natural') || name.includes('online')) return 3;
  // Google cloud / neural voices
  if (name.includes('google')) return 2;
  return 1;
};

const isMarathiVoice = (v: SpeechSynthesisVoice): boolean => {
  const lang = (v.lang || '').toLowerCase().replace(/_/g, '-');
  const name = (v.name || '').toLowerCase();
  return (
    lang === 'mr' ||
    lang.startsWith('mr-') ||
    name.includes('marathi') ||
    name.includes('मराठी') ||
    name.includes('aarohi') ||
    name.includes('manohar')
  );
};

const isHindiVoice = (v: SpeechSynthesisVoice): boolean => {
  const lang = (v.lang || '').toLowerCase().replace(/_/g, '-');
  const name = (v.name || '').toLowerCase();
  return (
    lang === 'hi' ||
    lang.startsWith('hi-') ||
    name.includes('hindi') ||
    name.includes('हिन्दी') ||
    name.includes('swara') ||
    name.includes('madhur') ||
    name.includes('kalpana') ||
    name.includes('hemant')
  );
};

const isIndianEnglishVoice = (v: SpeechSynthesisVoice): boolean => {
  const lang = (v.lang || '').toLowerCase().replace(/_/g, '-');
  const name = (v.name || '').toLowerCase();
  return (
    lang === 'en-in' ||
    name.includes('india') ||
    name.includes('heera') ||
    name.includes('ravi') ||
    name.includes('neerja') ||
    name.includes('prabhat')
  );
};

const isEnglishVoice = (v: SpeechSynthesisVoice): boolean => {
  const lang = (v.lang || '').toLowerCase().replace(/_/g, '-');
  return lang === 'en' || lang.startsWith('en-');
};

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private listeners: Set<() => void> = new Set();

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();

      if (typeof window.speechSynthesis.addEventListener === 'function') {
        window.speechSynthesis.addEventListener('voiceschanged', () => {
          this.handleVoicesChanged();
        });
      }
      this.synth.onvoiceschanged = () => {
        this.handleVoicesChanged();
      };
    }
  }

  private handleVoicesChanged() {
    this.loadVoices();
    this.listeners.forEach((cb) => {
      try {
        cb();
      } catch (err) {
        console.warn('Voice listener error:', err);
      }
    });
  }

  public subscribe(cb: () => void): () => void {
    this.listeners.add(cb);
    return () => this.listeners.delete(cb);
  }

  private loadVoices(): SpeechSynthesisVoice[] {
    if (!this.synth) return [];
    const v = this.synth.getVoices();
    if (v && v.length > 0) {
      this.voices = v;
    }
    return this.voices;
  }

  public getAvailableVoices(): SpeechSynthesisVoice[] {
    return this.loadVoices();
  }

  public getBestVoice(lang: Language): SpeechSynthesisVoice | null {
    const voices = this.getAvailableVoices();
    if (!voices || voices.length === 0) return null;

    if (lang === 'mr') {
      const mrVoices = voices.filter(isMarathiVoice);
      if (mrVoices.length > 0) {
        mrVoices.sort((a, b) => getVoiceScore(b) - getVoiceScore(a));
        return mrVoices[0];
      }
      return null;
    }

    if (lang === 'hi') {
      const hiVoices = voices.filter(isHindiVoice);
      if (hiVoices.length > 0) {
        hiVoices.sort((a, b) => getVoiceScore(b) - getVoiceScore(a));
        return hiVoices[0];
      }
      return null;
    }

    // English: prefer Indian English accent for contextual Bharat familiarity
    const enInVoices = voices.filter(isIndianEnglishVoice);
    if (enInVoices.length > 0) {
      enInVoices.sort((a, b) => getVoiceScore(b) - getVoiceScore(a));
      return enInVoices[0];
    }
    const enVoices = voices.filter(isEnglishVoice);
    return enVoices.length > 0 ? enVoices[0] : voices[0] || null;
  }

  public checkVoiceStatus(lang: Language): VoiceStatus {
    const voice = this.getBestVoice(lang);
    return {
      hasNativeVoice: voice !== null,
      voiceName: voice ? voice.name : null,
      language: lang
    };
  }

  public speak(
    text: string,
    lang: Language,
    options?: {
      onStart?: () => void;
      onEnd?: () => void;
      onError?: (reason: string) => void;
    }
  ) {
    if (!this.synth) {
      if (options?.onError) options.onError('Speech synthesis not supported on this browser');
      return;
    }

    try {
      this.stop();

      // Ensure synthesizer is in active state
      if (this.synth.paused) {
        this.synth.resume();
      }

      const voice = this.getBestVoice(lang);

      // STRICT INTEGRITY:
      // If user requested Marathi, never speak English or auto-play Hindi!
      if (lang === 'mr' && !voice) {
        if (options?.onError) {
          options.onError('no-marathi-voice');
        }
        return;
      }

      // If user requested Hindi, never fall back to an English OS voice!
      if (lang === 'hi' && !voice) {
        if (options?.onError) {
          options.onError('no-hindi-voice');
        }
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      this.currentUtterance = utterance;

      if (lang === 'mr') {
        utterance.lang = 'mr-IN';
        if (voice) utterance.voice = voice;
      } else if (lang === 'hi') {
        utterance.lang = 'hi-IN';
        if (voice) utterance.voice = voice;
      } else {
        utterance.lang = voice?.lang || 'en-IN';
        if (voice) utterance.voice = voice;
      }

      utterance.rate = 0.88; // Calm, clear, conversational pace for first-time learners
      utterance.pitch = 1.0;

      utterance.onstart = () => {
        if (options?.onStart) options.onStart();
      };

      utterance.onend = () => {
        this.currentUtterance = null;
        if (options?.onEnd) options.onEnd();
      };

      utterance.onerror = (e) => {
        console.warn('Speech synthesis event:', e);
        this.currentUtterance = null;
        if (options?.onEnd) options.onEnd();
        if (options?.onError) options.onError(e.error || 'speech-error');
      };

      this.synth.speak(utterance);
    } catch (e: any) {
      console.warn('Speech service failure:', e);
      if (options?.onError) options.onError(e.message || 'unknown-error');
    }
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
    }
  }

  public isSpeaking(): boolean {
    return this.synth ? this.synth.speaking : false;
  }
}

export const speechService = new SpeechService();

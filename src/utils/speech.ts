import { Language } from '../types';

export interface VoiceStatus {
  hasNativeVoice: boolean;
  voiceName: string | null;
  fallbackAvailable: boolean;
}

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isLoaded = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
    if (this.voices.length > 0) {
      this.isLoaded = true;
    }
  }

  public getAvailableVoices(): SpeechSynthesisVoice[] {
    if (!this.isLoaded && this.synth) {
      this.loadVoices();
    }
    return this.voices;
  }

  public checkVoiceStatus(lang: Language): VoiceStatus {
    const voices = this.getAvailableVoices();
    if (voices.length === 0) {
      return { hasNativeVoice: false, voiceName: null, fallbackAvailable: false };
    }

    if (lang === 'mr') {
      const mrVoice = voices.find(v => {
        const l = v.lang.toLowerCase();
        return l.includes('mr') || l.includes('marathi');
      });

      if (mrVoice) {
        return { hasNativeVoice: true, voiceName: mrVoice.name, fallbackAvailable: true };
      }

      // Check if Hindi voice is available as audio alternative
      const hiVoice = voices.find(v => {
        const l = v.lang.toLowerCase();
        return l.includes('hi') || l.includes('hindi');
      });

      return {
        hasNativeVoice: false,
        voiceName: hiVoice ? hiVoice.name : null,
        fallbackAvailable: hiVoice !== undefined
      };
    }

    if (lang === 'hi') {
      const hiVoice = voices.find(v => {
        const l = v.lang.toLowerCase();
        return l.includes('hi') || l.includes('hindi');
      });
      return {
        hasNativeVoice: hiVoice !== undefined,
        voiceName: hiVoice ? hiVoice.name : null,
        fallbackAvailable: true
      };
    }

    // English
    const enVoice = voices.find(v => {
      const l = v.lang.toLowerCase();
      return l.includes('en-in') || l.includes('en');
    });
    return {
      hasNativeVoice: enVoice !== undefined,
      voiceName: enVoice ? enVoice.name : null,
      fallbackAvailable: true
    };
  }

  public speak(
    text: string,
    lang: Language,
    options?: {
      useFallbackIfMissing?: boolean;
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

      const voices = this.getAvailableVoices();
      const status = this.checkVoiceStatus(lang);

      let chosenVoice: SpeechSynthesisVoice | undefined;
      let targetLang = 'en-IN';

      if (lang === 'mr') {
        if (status.hasNativeVoice) {
          chosenVoice = voices.find(v => v.lang.toLowerCase().includes('mr'));
          targetLang = 'mr-IN';
        } else if (options?.useFallbackIfMissing && status.fallbackAvailable) {
          // Use Hindi voice for Marathi listeners when Marathi OS pack is missing
          chosenVoice = voices.find(v => v.lang.toLowerCase().includes('hi'));
          targetLang = 'hi-IN';
        } else {
          // Do NOT silently crash or play garbage
          if (options?.onError) {
            options.onError('no-marathi-voice');
          }
          return;
        }
      } else if (lang === 'hi') {
        chosenVoice = voices.find(v => v.lang.toLowerCase().includes('hi'));
        targetLang = 'hi-IN';
      } else {
        chosenVoice = voices.find(v => v.lang.toLowerCase().includes('en-in')) ||
                      voices.find(v => v.lang.toLowerCase().includes('en'));
        targetLang = 'en-IN';
      }

      const utterance = new SpeechSynthesisUtterance(text);
      this.currentUtterance = utterance;
      utterance.lang = targetLang;
      if (chosenVoice) {
        utterance.voice = chosenVoice;
      }
      utterance.rate = 0.85; // Calm, conversational, unhurried pace
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

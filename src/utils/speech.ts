import { Language } from '../types';

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  public isAvailable(): boolean {
    return this.synth !== null;
  }

  public speak(
    text: string,
    lang: Language,
    onStart?: () => void,
    onEnd?: () => void,
    onError?: (err: any) => void
  ) {
    if (!this.synth) {
      // Simulate speech for environments where synthesis is unavailable
      if (onStart) onStart();
      setTimeout(() => {
        if (onEnd) onEnd();
      }, 3500);
      return;
    }

    try {
      this.stop();

      const utterance = new SpeechSynthesisUtterance(text);
      this.currentUtterance = utterance;

      // Map language codes
      let targetLang = 'en-IN';
      if (lang === 'hi') targetLang = 'hi-IN';
      if (lang === 'mr') targetLang = 'mr-IN';

      utterance.lang = targetLang;
      utterance.rate = 0.88; // Gentle, slow, conversational pace as required
      utterance.pitch = 1.02;

      // Try finding preferred regional voice
      const voices = this.synth.getVoices();
      const matchedVoice = voices.find(v => v.lang.toLowerCase().includes(targetLang.toLowerCase().slice(0, 2)));
      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }

      utterance.onstart = () => {
        if (onStart) onStart();
      };

      utterance.onend = () => {
        this.currentUtterance = null;
        if (onEnd) onEnd();
      };

      utterance.onerror = (e) => {
        console.warn('Speech synthesis notification:', e);
        this.currentUtterance = null;
        if (onEnd) onEnd();
        if (onError) onError(e);
      };

      this.synth.speak(utterance);
    } catch (e) {
      console.warn('Speech playback fallback:', e);
      if (onStart) onStart();
      setTimeout(() => {
        if (onEnd) onEnd();
      }, 3000);
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

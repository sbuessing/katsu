import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class SpeechService {

  synth: any;
  voices: SpeechSynthesisVoice[];
  voice: SpeechSynthesisVoice;

  constructor() {
      this.synth = window.speechSynthesis;
  }

  /**
   * Get available Japanese voices
   */
  getVoices(): any[] {
      if (this.voices) {
          return this.voices;
      }
      this.synth.onvoiceschanged = () => {
        const voices = this.synth.getVoices();
        this.voices = voices.filter(voice => voice.lang === 'ja-JP');
      };
      return this.voices;
  }

  setVoiceByName(name) {
      this.voice = this.getVoices().find(voice => voice.name === name);
  }

  say(text: string) {
      if (!this.voice || !this.synth) {
          console.warn('No speech available');
          return;
      }
      const utterThis = new SpeechSynthesisUtterance(text);
      utterThis.voice = this.voice;
      this.synth.speak(utterThis);
  }
}

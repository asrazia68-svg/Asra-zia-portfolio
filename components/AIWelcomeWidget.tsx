"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Volume2, VolumeX } from "lucide-react";
import { aiWidget } from "@/data/portfolio";

export default function AIWelcomeWidget() {
  const [visible, setVisible] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [muted, setMuted] = useState(false);
  const [subtitle, setSubtitle] = useState("");
  const hasSpokenRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    setVisible(true);

    // Speak once automatically, every time the page loads.
    const timer = setTimeout(() => {
      if (!hasSpokenRef.current) {
        hasSpokenRef.current = true;
        speak();
      }
    }, 700);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function pickFemaleVoice(voices: SpeechSynthesisVoice[]) {
    const preferred = ["female", "samantha", "victoria", "zira", "susan", "karen", "moira", "tessa"];
    return (
      voices.find((v) => preferred.some((p) => v.name.toLowerCase().includes(p))) ||
      voices.find((v) => v.lang.startsWith("en")) ||
      voices[0]
    );
  }

  function typeSubtitle(text: string) {
    setSubtitle("");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setSubtitle(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 35);
  }

  function speakWithVoice() {
    const utter = new SpeechSynthesisUtterance(aiWidget.greeting);
    const voices = window.speechSynthesis.getVoices();
    const voice = pickFemaleVoice(voices);
    if (voice) utter.voice = voice;
    utter.pitch = 1.05;
    utter.rate = 0.98;
    utter.onstart = () => setSpeaking(true);
    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utter);
    typeSubtitle(aiWidget.greeting);
  }

  function speak() {
    if (typeof window === "undefined" || !("speechSynthesis" in window) || muted) return;

    // Some browsers (esp. Chrome) populate the voices list asynchronously.
    // Poll for a short window instead of relying only on onvoiceschanged,
    // which doesn't always fire reliably on first load.
    const existing = window.speechSynthesis.getVoices();
    if (existing.length > 0) {
      speakWithVoice();
      return;
    }

    let attempts = 0;
    const poll = setInterval(() => {
      attempts++;
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0 || attempts > 20) {
        clearInterval(poll);
        speakWithVoice();
      }
    }, 150);

    window.speechSynthesis.onvoiceschanged = () => {
      clearInterval(poll);
      speakWithVoice();
    };
  }

  function toggleMute() {
    if (!muted) {
      window.speechSynthesis?.cancel();
      setSpeaking(false);
    }
    setMuted((m) => !m);
  }

  function replay() {
    window.speechSynthesis?.cancel();
    setMuted(false);
    speak();
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3">
      <AnimatePresence>
        {subtitle && speaking && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="glass rounded-card px-4 py-3 max-w-xs text-sm text-text-primary shadow-xl"
          >
            {subtitle}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2">
        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute AI assistant" : "Mute AI assistant"}
          className="w-9 h-9 rounded-full glass flex items-center justify-center text-text-secondary hover:text-text-primary"
        >
          {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>

        <motion.button
          onClick={replay}
          aria-label="Replay AI welcome greeting"
          className="relative w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #8B5CF6, #22D3EE)" }}
          animate={speaking ? { scale: [1, 1.06, 1] } : {}}
          transition={{ duration: 1, repeat: speaking ? Infinity : 0 }}
        >
          {speaking && <span className="absolute inset-0 rounded-full animate-pulseGlow" />}
          <Sparkles size={24} className="text-white" />
        </motion.button>
      </div>
    </div>
  );
}

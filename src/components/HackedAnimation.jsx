import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HackedAnimation({ onComplete, mode = 'login' }) {
  const [glitchText, setGlitchText] = useState('SYSTEM COMPROMISED');
  const [buttonText, setButtonText] = useState('HACKED');
  
  useEffect(() => {
    const texts = ['ACCESS DENIED', 'SYSTEM COMPROMISED', 'ENCRYPTION FAILED', 'RE-ROUTING...', 'WATCHING YOU', 'ERROR_EXIT_BLOCKED'];
    const interval = setInterval(() => {
      setGlitchText(texts[Math.floor(Math.random() * texts.length)]);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Browser Trap & Fullscreen Logic
  useEffect(() => {
    // 1. Attempt Fullscreen (requires user interaction potentially, but we'll try)
    const enterFullScreen = () => {
      const docElm = document.documentElement;
      if (docElm.requestFullscreen) docElm.requestFullscreen().catch(() => {});
      else if (docElm.webkitRequestFullScreen) docElm.webkitRequestFullScreen().catch(() => {});
    };

    enterFullScreen();

    // 2. Prevent Tab Closure (beforeunload)
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = ''; // Standard way to trigger "Confirm Leave"
      return '';
    };

    // 3. Block Escape Key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setGlitchText('ESCAPE_BLOCKED');
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('keydown', handleKeyDown);
      // Attempt to exit fullscreen on complete
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
    };
  }, []);

  const handleButtonClick = () => {
    if (mode === 'logout') {
      // In logout mode, the button is a decoy. It doesn't exit.
      setButtonText('ACCESS_DENIED');
      setTimeout(() => setButtonText('HACKED'), 1000);
    } else {
      // In login mode, the button works as the exit trigger.
      onComplete();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center font-mono overflow-hidden select-none"
    >
      {/* Glitch Background Noise */}
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100 }}
            animate={{ y: '110vh' }}
            transition={{ duration: Math.random() * 1.5 + 0.5, repeat: Infinity, ease: 'linear' }}
            className="absolute text-red-600 text-[10px] whitespace-nowrap overflow-hidden"
            style={{ left: `${i * 3.5}%` }}
          >
            {Math.random().toString(36).substring(2, 15).repeat(10)}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12 text-center p-12">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], x: [0, -3, 3, 0] }}
          transition={{ duration: 0.1, repeat: Infinity }}
          className="text-red-600 font-extrabold text-xs tracking-[0.6em] mb-4"
        >
          {glitchText}
        </motion.div>

        <motion.div 
          className="relative group cursor-default"
          animate={{ skew: [0, -3, 3, 0], opacity: [1, 0.7, 1] }}
          transition={{ duration: 0.15, repeat: Infinity }}
        >
           <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter">
             YOU'RE <br />
             <span 
                onClick={onComplete}
                className="transition-colors duration-300 hover:text-red-500 cursor-pointer active:scale-95 inline-block"
             >
                HACKED
             </span>
           </h1>
           <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-16 text-[9px] font-black text-white/10 tracking-[1em] uppercase"
           >
              Find_The_Secret_Exit
           </motion.div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(220, 38, 38, 0.2)' }}
          whileTap={{ scale: 0.9, x: [0, -10, 10, 0] }}
          onClick={handleButtonClick}
          className={`mt-12 px-16 py-6 border-2 border-red-600 font-black text-xl tracking-[0.8em] uppercase transition-all shadow-[0_0_50px_rgba(220,38,38,0.3)] hover:shadow-[0_0_80px_rgba(220,38,38,0.6)] ${mode === 'logout' ? 'text-white/20 border-white/10' : 'text-red-600'}`}
        >
          {buttonText}
        </motion.button>

        <div className="mt-20 opacity-10 flex flex-col items-center gap-4">
           <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
           <p className="text-[7px] font-black text-white tracking-[1em] uppercase">Private_Terminal_Captured</p>
        </div>
      </div>

      {/* CRT Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%),linear-gradient(90deg,rgba(255,0,0,0.08),rgba(0,255,0,0.03),rgba(0,0,255,0.08))] bg-[length:100%_3px,4px_100%] z-50" />
      <div className="absolute inset-0 bg-red-900/15 pointer-events-none shadow-[inset_0_0_100px_rgba(220,38,38,0.2)]" />
    </motion.div>
  );
}

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AuthSuccessAnimation({ onComplete, isLogout = false }) {
  // Use a slightly longer timeout for for the zoom effect if in logout mode
  const duration = isLogout ? 4500 : 3500;

  useEffect(() => {
    const timer = setTimeout(onComplete, duration);
    return () => clearTimeout(timer);
  }, [onComplete, duration]);

  return (
    <motion.div 
      className={`fixed inset-0 z-[11000] flex items-center justify-center ${isLogout ? 'bg-black' : 'bg-[#020617]/95'} backdrop-blur-2xl overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Glow Explosion */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.5, 3], opacity: [0, 0.4, 0] }}
          transition={{ delay: 1, duration: 2 }}
          className="absolute w-64 h-64 bg-rose-500 rounded-full blur-[100px]"
        />

        {/* Boy from left */}
        <motion.div
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: -30, opacity: 1 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="text-7xl md:text-9xl z-10"
        >
          👦
        </motion.div>

        {/* Girl from right */}
        <motion.div
          initial={{ x: 250, opacity: 0 }}
          animate={{ x: 30, opacity: 1 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="text-7xl md:text-9xl z-10"
        >
          👧
        </motion.div>

        {/* Heart Pop & Zoom (Condition: isLogout) */}
        {isLogout ? (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 2, 1.5, 100], 
              opacity: [0, 1, 1, 1],
              rotate: [0, 15, -15, 0]
            }}
            transition={{ 
              delay: 1.5, 
              duration: 2.5, 
              times: [0, 0.2, 0.4, 1],
              ease: "easeInOut" 
            }}
            className="absolute z-[12000] flex items-center justify-center pointer-events-none"
          >
            <svg viewBox="0 0 24 24" className="w-16 h-16 md:w-24 md:h-24 fill-rose-600">
               <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.8, 1.2], 
              opacity: 1,
              rotate: [0, 15, -15, 0]
            }}
            transition={{ delay: 1.1, duration: 1, ease: "backOut" }}
            className="absolute -top-32 text-8xl md:text-9xl z-20"
          >
            ❤️
          </motion.div>
        )}

        {/* Text Area */}
        {!isLogout && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute bottom-24 flex flex-col items-center gap-2"
          >
            <div className="text-3xl md:text-4xl font-black text-rose-300 tracking-tighter uppercase text-center font-outfit">
               Session Authenticated
            </div>
            <p className="text-[10px] font-black ks-gold-text tracking-[0.5em] uppercase opacity-60">
               Lover Node // Access Granted
            </p>
          </motion.div>
        )}

        {isLogout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ delay: 1, duration: 1.5 }}
            className="absolute bottom-24"
          >
            <p className="text-[11px] font-black text-rose-500 tracking-[1.5em] uppercase">TERMINATING_HANDSHAKE...</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

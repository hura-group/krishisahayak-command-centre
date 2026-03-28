import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Trophy, ShieldCheck } from 'lucide-react';

export default function LevelUpAnimation({ level, onComplete }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[500] flex items-center justify-center bg-black/90 backdrop-blur-3xl"
    >
      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 12 }}
        className="relative text-center p-12"
      >
        {/* Glow Effects */}
        <div className="absolute inset-0 bg-rose-500/20 blur-[120px] rounded-full animate-pulse" />
        
        <motion.div 
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="relative z-10"
        >
          <div className="w-32 h-32 bg-black/40 border border-white/10 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             <Zap size={64} className="text-rose-500 drop-shadow-[0_0_15px_rgba(251,113,133,0.5)]" />
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-[10px] font-black ks-gold-text uppercase tracking-[1em] mb-4">Node Re-Synchronization Complete</h2>
            <h1 className="text-7xl font-black text-white font-outfit uppercase tracking-tighter mb-4">
              Level <span className="rose-gold-gradient italic">{level}</span>
            </h1>
            <p className="text-sm font-medium text-white/40 tracking-widest uppercase italic">New Capabilities Unlocked in Sector_4</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-20"
        >
          <button 
            onClick={onComplete}
            className="px-12 py-5 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black text-white uppercase tracking-[0.4em] hover:bg-rose-500 hover:text-white transition-all hover:scale-110 active:scale-95 shadow-2xl"
          >
            Acknowledge Protocol
          </button>
        </motion.div>

        {/* Decorative HUD Elements */}
        <div className="absolute -top-20 -left-20 opacity-10 animate-spin-slow">
           <Trophy size={200} className="text-rose-500" />
        </div>
      </motion.div>
    </motion.div>
  );
}

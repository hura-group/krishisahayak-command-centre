import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ShieldCheck, Target } from 'lucide-react';

export default function AchievementModal({ achievement, onClose }) {
  if (!achievement) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[500] flex items-center justify-center bg-black/80 backdrop-blur-xl p-6"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        className="ks-card max-w-sm w-full !bg-black/60 border-white/10 !p-10 text-center relative overflow-hidden group"
        onClick={e => e.stopPropagation()}
      >
        {/* Background Accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-accent to-rose-500" />
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-rose-500/10 blur-[100px] rounded-full" />

        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-white transition-all"
        >
          <X size={16} />
        </button>

        <div className="relative mb-10">
          <div className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center mx-auto border border-white/5 shadow-2xl relative group-hover:scale-110 transition-transform duration-500">
             <span className="text-5xl">{achievement.icon}</span>
             <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center border-4 border-[#020617]">
                <ShieldCheck size={14} className="text-white" />
             </div>
          </div>
        </div>

        <h3 className="text-[10px] font-black ks-gold-text uppercase tracking-[0.5em] mb-4">Achievement Unlocked</h3>
        <h2 className="text-3xl font-black text-white font-outfit uppercase tracking-tighter mb-4">{achievement.title}</h2>
        <p className="text-sm font-medium text-white/40 leading-relaxed mb-10 tracking-wide uppercase italic">
          {achievement.desc}
        </p>

        <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-8">
           <div className="text-left">
              <p className="text-[8px] font-black opacity-20 uppercase tracking-widest mb-1">Rarity</p>
              <p className="text-xs font-black text-rose-500 uppercase">Legendary</p>
           </div>
           <div className="text-right">
              <p className="text-[8px] font-black opacity-20 uppercase tracking-widest mb-1">XP Bonus</p>
              <p className="text-xs font-black text-white">+500</p>
           </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Loader2, ShieldCheck, Zap } from 'lucide-react';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden font-outfit select-none">
      {/* HUD Background Layers */}
      <div className="hud-vignette opacity-60" />
      <div className="hud-noise opacity-30" />
      <div className="hud-scanline-beam" />

      {/* Background HUD Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Rotating Data Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-[500px] h-[500px] border-t-2 border-b-2 border-rose-500/10 rounded-full border-dashed"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-[420px] h-[420px] border-l-2 border-r-2 border-rose-500/5 rounded-full"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Hura Group Identity */}
        <div className="mb-12 flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(244,63,94,0.2)]">
            <ShieldCheck size={24} className="text-rose-500" />
          </div>
          <span className="text-[10px] font-black text-rose-500/60 uppercase tracking-[1em] ml-[1em]">Hura Group</span>
        </div>

        {/* Central Core Card */}
        <div className="ks-card !p-12 border-rose-500/20 glow-border bg-black/60 backdrop-blur-2xl rounded-[2.5rem] flex flex-col items-center text-center max-w-lg">
          <div className="relative mb-10">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-rose-500/20 blur-2xl rounded-full"
            />
            <div className="w-20 h-20 rounded-full border-2 border-rose-500/40 flex items-center justify-center relative z-10">
              <Cpu size={32} className="text-rose-500 animate-pulse" />
              <div className="absolute inset-0 border-t-2 border-rose-500 rounded-full animate-spin" />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none italic">
              Coming<br />
              <span className="text-rose-500/90">Soon.</span>
            </h1>

            <div className="flex flex-col items-center gap-6 pt-8">
              <div className="h-[1px] w-12 bg-rose-500/30" />
              <div className="flex flex-col gap-2 items-center">
                <p className="text-[12px] font-black ks-gold-text uppercase tracking-[0.5em] ml-[0.5em]">
                  STATUS: FIXING ISSUES
                </p>
                <p className="text-[10px] font-medium text-white/30 uppercase tracking-[0.3em] ml-[0.3em]">
                  Member Sync in Progress
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mini Technical Footer */}
        <div className="mt-12 flex items-center gap-3 opacity-20">
          <Zap size={12} className="text-rose-500" />
          <span className="text-[8px] font-black tracking-[0.4em] uppercase">Sector_Sentinel // Link_Stable</span>
        </div>
      </motion.div>
    </div>
  );
}
